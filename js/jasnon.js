var jsonOsoby = {
    'osoby': [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            zainteresowania: [
                {
                    nazwa: 'podroze'
                },
                {
                    nazwa: 'gotowanie'
                }
            ]
        },
        {
            imie: 'Dominik',
            nazwisko: 'Nowak',
            zainteresowania: [
                {
                    nazwa: 'pilka'
                },
                {
                    nazwa: 'koszykowka'
                }
            ]

        },
        {
            imie: 'Klaudia',
            nazwisko: 'Kowalka',
            zainteresowania: [
                {
                    nazwa: 'pluwanie'
                },
                {
                    nazwa: 'ksiazki'
                }
            ]
        }
    ]
}

for (var i = 0; i < jsonOsoby.osoby.length; i++) {
    console.log(jsonOsoby.osoby[i].imie);
}

jsonOsoby.osoby.forEach(function (element, index) {
    console.log(element.imie + ' ' + element.nazwisko);
})

console.log(jsonOsoby.osoby[2].zainteresowania[1].nazwa);

for (var i=0; i < jsonOsoby.osoby.length; i++){
    for (var j=0; j < jsonOsoby.osoby[i].zainteresowania.length; j++) {
        console.log(jsonOsoby.osoby[i].zainteresowania[j].nazwa);
    }
}