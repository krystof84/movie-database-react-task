#Przeglądanie listy filmów
Aplikacja służąca do przeglądania oraz przeszukiwania listy filmów.

##Rekwizyty
Pod [adresem] (https://api.myjson.com/bins/1tll6) znajduje się json zawierający dane, które będzie trzeba przedstawić użytkownikowi.

##Szczegóły aplikacji
1.	Aplikacja poprawnie działa w przeglądarkach Chrome, Firefox, Edge oraz IE11+.
2.	Aplikacja obsługuje rozdzielczości 800x600 wzwyż.
3.	Poza serwerem danych, aplikacja nie może komunikować się z innymi serwerami.
4.	Pobranie danych:
- po uruchomieniu następuje pobranie danych z ustalonego adresu,
- pobranie danych musi nastąpić tylko raz podczas uruchamiania,
- opcjonalnie, podczas pobierania może wyświetlać się informacja o ładowaniu.
5.	Przedstawienie danych:
- dane powinny zostać wyświetlone w przyjazny i czytelny sposób,
- pola powinny posiadać odpowiednie etykiety informujące o zawartości i formacie danych,
- prawidłowo powinny zostać wyświetlone wiersz z niepełnymi danymi.
6.	Filtrowanie danych:
- informowanie o zastosowanym filtrowaniu,
- możliwe jest zresetowanie filtrowania,
- filtrowanie jest możliwe – wedle uznania - po wszystkich naraz lub po każdym polu osobno,
- filtrowanie nie resetuje zastosowanego sortowania.
7.	Sortowanie  danych:
- informowanie o zastosowanym sortowaniu,
- możliwe jest sortowanie po każdym z pól,
- opcjonalnie, możliwe jest zresetowanie sortowania,
- sortowanie nie resetuje zastosowanego filtrowania.

##Szczegóły implementacji
1.	Kod powinien być napisany w języku Javascript, w wersji ES5 lub ES6.
2.	Możliwe jest użycie pomocniczych bibliotek w aplikacji oraz jako narzędzi do budowania aplikacji, ale proszę nie używać gotowych rozwiązań.
3.	Kod aplikacji powinien być czytelny i zrozumiały dla następnego programisty, który podejmie rozwój aplikacji.