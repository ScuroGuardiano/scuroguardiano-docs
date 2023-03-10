# Budowa własnego serwera #02 - Build
> Jeżeli nie chcesz czytać moich wypocin -> [Tu masz pełną listę podzespołów](#pełen-build)

Żeby zbudować serwer trzeba było pomyśleć jakie części będę chciał tu włożyć. Chciałem żeby cena wyniosła w okolicach 2000zł, a jednocześnie żeby był co najmniej tak samo wydajny jak wynajmowany serwer, czyli:
- Procesor minimum 4C/8T 3.5GHz+
- 64GB RAM DDR4
- Powierzchnia dyskowa minimum 2x480GB spięte w RAID1

Kierowałem się tutaj silnie możliwością rozbudowy, RAM-u do 128GB i dodania dodatkowych dysków.

Oto moje wybory:

## Niebiescy czy Czerwoni?
Najważniejszą i jednocześnie najprostszą dla mnie do podjęcia decyzją był wybór platformy. Czy to będzie AMD czy Intel. Z racji faktu, iż zawsze posiadałem komputery na platformie AMD i jestem z czerwonymi w miarę zaznajomiony, a o Intelach nie mam zielonego pojęcia to wybór był tu oczywisty.

## Procesor
Poszperałem w internecie i stwierdziłem, że **Ryzen 5 3600** będzie świetny do mojego builda. Decyzja, której teraz żałuję, gdyż kupienie Ryzena 5 5500 kosztowałoby mnie około 70zł więcej, a jest to lepszy i nowszy procesor. W każdym razie poszukałem na pewnej popularnej platformie ogłoszeniowej i znalazłem procesor, który wytargowałem za **350zł**. Musiałem jednak jechać po niego 30km w jedną stronę, więc za paliwo wyszło mi jakieś 45zł. Przy okazji zwiedziłem nową okolicę, zobaczyłem pierwszy raz na własne oczy elektrownię węglową i pogadałem sobie trochę na temat komputerów ze sprzedawcą.

## Dyski
Z dyskami także była prosta sprawa. Chciałem 2x2TB HDD, żeby móc sobie postawić Jellyfina, jakiegoś Nextclouda i ogólnie żeby mieć przestrzeń magazynową, czego mi brakowało w obecnie wynajmowanym serwerze. Znalazłem używane **Seagate Barracudy** 15km ode mnie, akurat pan sprzedający miał 2 sztuki, wynegocjowałem cenę **280zł** za obie, pojechałem, porozmawialiśmy chwilę, zapłaciłem i wróciłem zadowolony, że kolejne podzespoły z głowy.

Do tego jeszcze dokupiłem 2 SSD-ki na NVMe, ale tutaj nie ma żadnej historii, wyszukałem w jednym sklepie internetowym i kupiłem dwa dyski **ADATA XPG SX6000 Pro 256GB** za **240zł** łącznie, razem z dostawą.

## Obudowa
Zanim przejdziemy do płyty głównej, muszę wspomnieć o obudowie. W jednym sklepie internetowym zobaczyłem **Chieftec Mesh ProCube CI-02B-OP** i stwierdziłem, że muszę ją mieć. Kosztowała mnie **333zł**, ale uważam, że było warto. 2 wewnętrzne wnęki na dyski 3.5 cala, 2 zewnętrzne wnęki - jedna 3.5 cala, druga 5.25 cala. Niestety, największym formatem płyty głównej wspieranym przez to pudełeczko jest microATX, taką też płytę musiałem znaleźć.

## Płyta główna
Miałem ogromny z płytą główną. Szukałem czegoś taniego, jednocześnie spełniającego moje wymagania:
- 4 banki pamięci
- Maksymalny rozmiar pamięci 128GB lub więcej

Używek nie było albo były droższe niż nówki. Ostatecznie po długich poszukiwaniach padło na **ASRock B450M PRO4-F R2.0** za **374zł** razem z dostawą. I szczerze, nie wiem czy bym polecił tę płytę, opcje w UEFI są ubogie, samo UEFI jest brzydkie, możliwość edycji prędkości wiatraków nie jest w pełni elastyczna, możliwości kontroli napięć na procesorze praktycznie nie istnieją. Jednakże, do takiego serwerka jest wystarczająca. I spełnia moje wymagania. Posiada także dwa złącza M.2, ale tylko jedno PCIExpress, drugie to SATA. Co do złączy SATA, znajdziemy cztery na płycie głównej, co było dla mnie kolejnym plusem.

## RAM
Tutaj też był problem, gdyż nie mogłem znaleźć żadnych używek w atrakcyjnej cenie. A wymagania miałem, bo to musiały być koniecznie 2 kości, łącznie 64GB i taktowane minimum na 3200MHz. Zwyczajnie nikt czegoś takiego nie sprzedaje, bo mało kto raczej ma potrzebę wymiany takich kostek. Musiałem zatem kupić nówki. Wybór padł na **Kingston FURY Renegade 2x32GB CL16 3200MHz** za **708zł** razem z dostawą, co jest dosyć niską ceną.

## Zasilacz
Bez problemów nie obyło się także przy zasilaczu. Zasilacze są nieefektywne przy niskich obciążeniach, a w sklepach marki takie jak SilentiumPC czy BeQuiet mają zasilacze od 400W w górę. To zdecydowanie za dużo dla mojego serwerka, te zasilacze by pracowany pod obciążeniem kilku procent w stanie spoczynku, co by odbiło się negatywnie na zużyciu prądu. Zapytałem na jednej grupie na Facebook-u i został mi polecony mały zasilacz firmy **FSP** w wymiarze ITX. Poszukałem i ostatecznie kupiłem, ale nie ITX, a ATX. Mój serwer zasila **FSP300-60HHN 85+ 300W**, który kupiłem za **50zł** z pewnego portalu aukcyjnego, razem z dostawą wyszło mi 60zł. Należy zaznaczyć że zasilacz przychodzi bez [kabla zasilającego](#kabel-zasilający).

## Pełen build
| Podzespół                             | Model                                       | Cena z dostawą |
|---------------------------------------|---------------------------------------------|----------------|
| [Procesor](#procesor)                 | Ryzen 5 3600                                | ~395zł         |
| [RAM](#ram)                           | KF432C16RBK2/64                             | 708zł          |
| [MOBO](#płyta-główna)                 | ASRock B450M PRO4-F R2.0                    | 374zł          |
| [Zasilacz](#zasilacz)                 | FSP300-60HHN 85+ 300 W                      | 60zł           |
| [Obudowa](#obudowa)                   | Chieftec Mesh ProCube CI-02B-OP             | 333zł          |
| [SSD](#dyski)                         | 2x ADATA XPG SX6000 Pro 256GB               | 240zł          |
| [HDD](#dyski)                         | 2x Seagate Barracuda 2TB 7200RPM            | ~300zł         |
| [Adapter PCIe -> NVMe](#problem-z-m2) | Adapter firmy Fideco z PCIe x16 na M.2 NVMe | 52zł           |
| [Grafika](#grafika)                   | NVidia GeForce 210                          | 40zł           |
| [Kabel zasilający](#kabel-zasilający) | czarny taki, fajny                          | 10zł           |

## Problem z M.2
Napotkałem problem z drugim slotem M.2, otóż zdałem sobie sprawę że są dwa rodzaje slotów M.2: NVMe i SATA. Jedno na płycie to było NVMe, ale drugie to było SATA, a ja potrzebowałem dwóch slotów NVMe. Troszkę nieciekawa sytuacja, bo wynajmowany dedyk miał wygasnąć za 3 dni, a ja nie mogłem zainstalować systemu bez tego drugiego NVMe (koniecznym wymogiem dla mnie był RAID 1). Na szczęście znalazłem adapter za 4 dychy, razem z wysyłką **52zł**, od firmy Fideco. Za dwa dni miałem już go u siebie. Muszę powiedzieć, że to co znalazłem w środku poprawiło mi humor na resztę dnia. W zestawie dostaliśmy sam adapter oczywiście, dosyć spory heatsink na cały dysk, dwa termopady na dysk, dwa zestawy śrubek oraz **śrubokręcik!!!** To było urocze ^_^ Adapter ma też dosyć jasną diodę sygnalizującą użycie dysku. Adapter zadziałał bez żadnego problemu.

## Grafika
Potrzebowałem jakiejkolwiek grafiki, więc poszukałem na szybko używek w okolicy i kupiłem GeForce'a 210 za 40zł. Cóż w sumie za 35zł, ale gościu nie miał jak wydać reszty, a mi się spieszyło to już machnąłem ręką.

## Kabel zasilający
Okazuje się, że markety AGD RTV, najróżniejsze mediaexperty i inne sklepy "nie dla idiotów" nie mają kabli zasilających na stanie, a poza tym to potrafią kosztować po 35zł XD. Poszedłem do komputerowej mordowni (niezależny serwis komputerowy) i kupiłem kabel za dyszkę.

I to tyle, serwer zbudowany. Ostatecznie budowa wyniosła mnie jakieś **2500zł**, ale jest lepszy niż to co wynajmowałem.