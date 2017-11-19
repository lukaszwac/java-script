var osoba = {
    name: 'marcin',
    height: 170,
    print: function () {
        console.log(this.name);
    }
}
console.log(osoba.name + ' ' + osoba.height);

osoba.print();

osoba.weight = 65;
osoba.printDetail = function () {
    console.log(this.name + ' ' + this.height + ' ' + this.weight);

}

osoba.printDetail();

/* Tworzenie Klas */

class Osoba {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }


    wyswietlInfo() {
        console.log(this.imie + ' ' + this.nazwisko);
    }
}

var krystian = new Osoba('Krystian','Dziopa');

krystian.wyswietlInfo();

var marcin = new Osoba('Marcin', 'Nowak');
marcin.wyswietlInfo();