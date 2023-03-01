# Konfiguracja Wireguard + NAT 1:1 z maskaradą tylko na wyjściu.

Załóżmy, że mamy serwer w domu i chcemy go wystawić na zewnątrz, ale albo nie mamy publicznego IP albo nie chcemy używać naszego publicznego IP. Jest na to sposób. Możemy wykupić taniego VPS-a i użyć go jako gatewaya. Cóż, w zasadzie możemy zrobić całkowite przekierowanie z VPS-a na nasz serwerek domowy.

Konfigurujemy wireguarda wg. tych tutoriali:
- https://www.cyberciti.biz/faq/ubuntu-20-04-set-up-wireguard-vpn-server/
- https://www.cyberciti.biz/faq/how-to-set-up-wireguard-firewall-rules-in-linux/#Setup_NAT_(MASQUERADE)_rules

Sprawdzamy czy coś nasłuchuje na wszystkich portach, zazwyczaj to będzie serwer SSH na pustym VPS-ie:
```
sudo lsof -i -P -n | grep LISTEN
```

Musimy przełączyć nasłuchiwanie SSH na IP interfejsu wireguarda.
> UWAGA! Po wykonaniu tego kroku nastąpi utrata połączenia z SSH, trzeba się połączyć z naszego clienta VPN-a, czyli serwerka domowego

```
sudo nano /etc/ssh/sshd_config
```
I ustawiamy `ListenAddress` na IP naszego interfejsu wireguarda.

Ostatnie co musimy zrobić to dopisać DNAT-a do naszych skryptów wykonujących się po odpaleniu wireguarda na postup i postdown:

* add-nat-routing.sh
    ```sh
    #!/bin/bash
    IPT="/sbin/iptables"

    IN_FACE="eth0"                   # NIC connected to the internet
    WG_FACE="wg0"                    # WG NIC 
    SUB_NET="192.168.4.0/24"         # WG IPv4 sub/net aka CIDR
    WG_PORT="51194"                  # WG udp port
    WG_IP="192.168.4.1"              # WG IP address
    PUBLIC_IP=""                     # Server public IP
    
    ## IPv4 ##
    sysctl -w net.ipv4.ip_forward=1
    $IPT -t nat -I POSTROUTING 1 -s $SUB_NET -o $IN_FACE -j MASQUERADE
    $IPT -I INPUT 1 -i $WG_FACE -j ACCEPT
    $IPT -I FORWARD 1 -i $IN_FACE -o $WG_FACE -j ACCEPT
    $IPT -I FORWARD 1 -i $WG_FACE -o $IN_FACE -j ACCEPT
    $IPT -I INPUT 1 -i $IN_FACE -p udp --dport $WG_PORT -j ACCEPT
    $IPT -t nat -I PREROUTING 1 -d $PUBLIC_IP -j DNAT --to-destination $WG_IP
    ```

* remove-nat-routing.sh
    ```sh
    #!/bin/bash
    IPT="/sbin/iptables"

    IN_FACE="eth0"                   # NIC connected to the internet
    WG_FACE="wg0"                    # WG NIC 
    SUB_NET="192.168.4.0/24"         # WG IPv4 sub/net aka CIDR
    WG_PORT="51194"                  # WG udp port
    WG_IP="192.168.4.1"              # WG IP address
    PUBLIC_IP=""                     # Server public IP
    
    ## IPv4 ##
    sysctl -w net.ipv4.ip_forward=1
    $IPT -t nat -D POSTROUTING -s $SUB_NET -o $IN_FACE -j MASQUERADE
    $IPT -D INPUT -i $WG_FACE -j ACCEPT
    $IPT -D FORWARD -i $IN_FACE -o $WG_FACE -j ACCEPT
    $IPT -D FORWARD -i $WG_FACE -o $IN_FACE -j ACCEPT
    $IPT -D INPUT -i $IN_FACE -p udp --dport $WG_PORT -j ACCEPT
    $IPT -t nat -D PREROUTING -d $PUBLIC_IP -j DNAT --to-destination $WG_IP
    ```