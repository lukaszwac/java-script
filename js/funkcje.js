function wypiszWKonsoli() {
    console.log('wywołanie funkcji');
}

wypiszWKonsoli();

function dodawanie(parametr1, parametr2) {
    /*console.log(parametr1 + parametr2);
    console.log(123);*/
    
    return parametr1 + parametr2;
}


console.log(dodawanie(4, 5));

//return pozwala na przypisanie wyniku do danej zmiennej. Zachowuje wynik
//console.log powoduje tylko zwrocenie wyniku, bez utrzymania go po opreracji

function mnozenie(parametr3, parametr4) {
    console.log(parametr3 * parametr4);
}

mnozenie(dodawanie(4,5),4);

var wynik = dodawanie(4,5);
console.log(wynik);

console.log(10+wynik);