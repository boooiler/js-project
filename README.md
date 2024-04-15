# js-project

Bot InteligentnyInaczej


Aplikacja udająca rozmowę z człowiekiem w formie tekstowej.

-> Aplikacja powinna składać się z pola na treść rozmowy, pola tekstowego umożliwiającego wpisywanie tekstu oraz przycisku wysyłającego wiadomość

-> Na początku w polu z treścią rozmowy powinna pojawić się wiadomość powitalna od bota, np. Cześć, jak tam zajęcia z JS?

-> W polu tekstowym pod treścią użytkownik może wpisać dowolną wiadomość i potwierdzić ją przyciskiem, co spowoduje pojawienie się jego wiadomości w oknie rozmowy i wyczyszczenie pola tekstowego

-> Wiadomość użytkownika powinno dać się wysłać za pomocą klawisza Enter

-> Na każdą wiadomość bot powinien odpowiedzieć kolejną wiadomością od siebie

-> Nie jest istotne, co bot będzie odpowiadać, ale ważne by był on deterministyczny (odpowiadał zawsze tak samo na tę samą wiadomość od użytkownika). Przygotuj przynajmniej trzy różne odpowiedzi.


Dodatkowe funkcjonalności:

-> Wiadomość bota nie powinna pojawić się natychmiast. Zasymuluj, że bot chwilę tworzy swoją wiadomość.

-> Dostarcz mechanizm wykrywania wulgaryzmów (np. motyla noga). Jeśli użytkownik spróbuje wysłać wiadomość z zabronioną treścią, powinien otrzymać ostrzeżenie (alert), a w oknie rozmowy, zamiast wiadomości użytkownika powinien pojawić się czerwony wpis od bota proszę, nie używaj takich słów

-> Dostarcz komendy dla bota:

    - /version, przykładowa odpowiedź: Wersja oprogramowania: v1.2.3
    
    - /pogoda kraków, przykładowa odpowiedź (zmyślona): W kraków jest 22 stopnie