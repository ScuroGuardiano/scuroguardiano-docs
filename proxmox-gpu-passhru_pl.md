# Proxmox GPU Passhtru

2 dni i 8h łącznie pierdzielenia się, żeby zadziałało mi GPU Passthru, here's how:

> Note: mam procka od AMD, a karta to RX 550, nie testowałem innych kart, ale powinno działać

> Note: Wszystkie komendy są wykonywanie na koncie root

## 1. IOMMU i GRUB
> Note: Może być potrzebne włączenie IOMMU w BIOS, w moim przypadku trzeba było

Musicie włączyć IOMMU w grubie i dodać dodatkowe opcje wyłączające (hopefully) parę framebufferów.
```bash
nano /etc/default/grub
```
Szukacie tam:
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
```
i zastępujecie tym:
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet pcie_acs_override=downstream,multifunction nofb nomodeset video=vesafb:off video=efifb:off video=simplefb:off"
```
IOMMU w AMD jest automatycznie włączone, w przypadku intela ***KONIECZNE*** jest dopisanie do opcji wyżej: `intel_iommu=on`

Teraz wpisujecie:
```bash
update-grub
```
I restart.

Po restarcie weryfikacja czy IOMMU działa:
```bash
dmesg | grep -e DMAR -e IOMMU
```
Powinniśmy zobaczyć tam coś w stylu IOMMU enabled. Jeżeli nie działa to sprawdźcie jeszcze raz ustawienia w BIOS-ie i w GRUB-ie.

## Moduły kernela
Konieczne jest załadowanie odpowiednich modułów kernela. Wpisujecie `nano /etc/modules` i dodajecie tam to:
```
vfio
vfio_iommu_type1
vfio_pci
vfio_virqfd
```

Dodajemy sobie interrupty:
```bash
echo "options vfio_iommu_type1 allow_unsafe_interrupts=1" > /etc/modprobe.d/iommu_unsafe_interrupts.conf
```

Teraz musimy znaleźć ID naszego GPU i GPU audio, wpisujecie
```bash
lspci -v
```
I szukacie tam numerku swojej karty graficznej, u mnie to było `07:00.0`. Teraz wpisujecie:
```bash
lspci -n -s 0x:00 # <--- podstawiacie tu numerek karty bez .0
```
W moim przypadku `lspci -n -s 07:00`
I dostajecie taki output:
```
root@uwu:~# lspci -n -s 07:00
07:00.0 0300: 1002:699f (rev c7)
07:00.1 0403: 1002:aae0
```

Potrzebujecie tych cyferek, które u mnie są: `1002:699f` i `1002:aae0`. To jest vendorID czy chuj wie co karty i audio GPU, potrzebujecie ich do następnej komendy:
```bash
echo "options vfio-pci ids=1002:699f,1002:aae0" > /etc/modprobe.d/vfio.conf
```

***Pamiętajcie żeby podstawić własne `ids`!!!***

Jeszcze blacklisty sterowników, żeby PVE nie używał karty:
```bash
echo "blacklist amdgpu" >> /etc/modprobe.d/blacklist.conf
echo "blacklist radeon" >> /etc/modprobe.d/blacklist.conf 
echo "blacklist nouveau" >> /etc/modprobe.d/blacklist.conf 
echo "blacklist nvidia" >> /etc/modprobe.d/blacklist.conf 
```

Ja jeszcze zrobiłem:
```bash
echo "options kvm ignore_msrs=1" >> /etc/modprobe.d/kvm.conf
```
Ale ni chuja nie wiem co to robi, zróbcie jak nie będzie coś działać.

Teraz update'ujecie INITRAMFS i restartujecie:
```bash
update-initramfs -u
reboot
```

## PCI Passthru do VM-ki
Zmieniacie maszynę VM-ki na `q35`, dodajcie urządzenie PCI, wybieracie kartę graficzną (again, będzie to numerek z `lspci -v`, u mnie 7:00.0), zaznaczacie AllFunction, PCIExpress i jeżeli chcecie żeby to było primary GPU to zaznaczacie to, ale wtedy noVNC nie będzie działało. Odpalacie i powinno działać. Cóż, ***mi nie działało***, jeżeli macie kernel `5.15`, nie wiem jak z nowszymi, to musicie zrobić dodatkowy krok:

## WTF IS vfio-pci 0000:07:00.0: BAR 0: can't reserve [mem 0xca000000-0xcbffffff 64bit]
Więc może się zdarzyć, że w pliku `/var/log/kern.log` będzie od cholery podobnych komunikatów. Wychodzi na to, że kernel 5.15 olewa ustawienie `video=efifb:off` z gruba, ale jest na to workaround

Tworzycie sobie pliczek `nano /root/fix_gpu_pass.sh`, i wpisujecie w niego:
```bash
#!/bin/bash
# Za :07 wstawiacie swój numerek grafiki
echo 1 > /sys/bus/pci/devices/0000\:07\:00.0/remove
echo 1 > /sys/bus/pci/rescan
```
Nadajecie uprawnienia:
```bash
chmod +x fix_gpu_pass.sh
```
I dodajecie do crontab na restarcie:
```bash
crontab -e
# wpisujecie to:
@reboot /root/fix_gpu_pass.sh
```

Restartujecie i teraz GPU Passthru powinno wreszcie działać. Jak nie działa to więcej info jest w następnej sekcji :)

# Źródła
Oto arcyzajebiste źródła, które pomogły mi ogarnąć to:
* https://pve.proxmox.com/wiki/PCI_Passthrough
* https://forum.proxmox.com/threads/problem-with-gpu-passthrough.55918/post-469188 - błąd z can't reserve, ogólnie cały wątek polecam
* https://forum.proxmox.com/threads/problem-with-gpu-passthrough.55918/post-471013 - tutaj wyjaśnienie powyższej odpowiedzi
* https://www.reddit.com/r/homelab/comments/b5xpua/the_ultimate_beginners_guide_to_gpu_passthrough/

> Note: w źródłach zalecają użycie maszyny OVMF, ale na SEABIOS (q35) działa mi bez problemu.