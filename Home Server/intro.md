# Budowa własnego serwera #01 - Wstęp

Wynajmowałem serwer dedykowany od OVH, a dokładnie z ich spółki-córki So You Start, zdobyty na promce. Specyfikacja była całkiem solidna:
- Intel i7 7700K
- 64GB RAM DDR4 2400MHz
- 2x480GB NVMe
- 500Mbit/s łącze

Kupione do tego miałem aż 6 IPv4, bo każdy z nich kosztował jednorazowo 5zł brutto, więc jak potrzebowałem coś nowego wystawić brałem nowego IP-ka, bo tak było łatwiej. Całość kosztowała mnie, po ostatnim podniesiu cen, **238zł brutto** za miesiąc.

Jakiś czas temu przeprowadziłem się do mieszkania i założyłem sobie porządny internet 1000Mbit/s download oraz 300Mbit/s upload. Pomyślałem sobie:
> *hmm skoro mam dobry internet to może by tak zbudować samemu serwer i hostować go z domku*

Dodatkowo mierząc miernikiem prądu zużycie komputera w stanie spoczynku zdałem sobie sprawę, że to mniej niż myślałem. Przeliczając sobie szybko wyszło mi, że budowa takiego serwerka zwróci się mniej więcej w rok, a koszt miesięczny utrzymania spadnie mi z 238zł do zaledwie **50zł/mies** za prąd.

Planowałem zbudować go za 2000zł, no cóż, nie poszło tak łatwo. Zmierzyłem się z wieloma problemami, z którymi możecie się zmierzyć i Wy w trakcie budowy własnego serwera. W tej serii omówię problemy i ich rozwiązania w trakcie budowy, konserwacji i utrzymania własnego fizycznego serwera.