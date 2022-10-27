// objektum létrehozás
/*
var odon = {  //ez az obkejtum létrehozási forma az objektum literál
    nev: 'Ödön',
    szuletesiEv: 1978,
    foglalkozas: 'grafikus'
}; 
*/

/*var Szemely = function(nev, szuletesiEv, foglalkozas) {
    this.nev = nev;
    this.szuletesiEv = szuletesiEv;
    this.foglalkozas = foglalkozas;
};

Szemely.prototype.korSzamitas = function() {
    console.log(2021 - this.szuletesiEv);
}

Szemely.prototype.teszt = 'teszt';

var odon = new Szemely('ödön', 1978, 'grafikus') //Ezt úgy hivjúk hogy pédányosítás Jelöljük hogy egy uj személy tipusu objektumot akarok létrehozni

odon.korSzamitas();

var erzsi = new Szemely('Erzsi', 1950, 'nyugdjias');

erzsi.korSzamitas();

console.log(Szemely);
console.log(odon);
console.log(odon.teszt);*/

// object.create

/*var SzemelyProto = {
    korSzamitas: function() {
        console.log(2021 - this.szuletesiEv);
    }
};

var odon = Object.create(SzemelyProto);
odon.nev = 'Ödön';
odon.szuletesiEv = 1960;
odon.foglalkozas = 'pék';

var kati = Object.create(SzemelyProto, {
    nev: { value: 'Kati'},
    szuletesiEv: { value: 1990},
    foglalkozas: { value: 'kozmatikus'}
});*/

// Egyszerű típusok és objektumok

/*var x = 10;
var y = x;

x = 100;

console.log(x);
console.log(y);

var o1 = {
    sz: 100,
    m: 200
}

var o2 = o1;
o1.sz = 150;

console.log(o1.sz);
console.log(o2.sz);

var a = 10;
var o = {
    nav: 'odon',
    kor: 35
};

function modosit(a, b) {
    a = 40;
    b.nev = 'Lajos'
}

modosit(a, o);

console.log(a);
console.log(o.nev);*/

// függvények főbb jellemzői 

/*var evek = [1954, 1990, 1963, 2000, 2010];

function tombMuvelet(tomb, fv) {  // first class function
    var eredmeny = [];

    for(var i = 0; i < tomb.length; i++) {
        eredmeny.push(fv(tomb[i]));
    }

    return eredmeny;
}

function korSzamitas(elem) { //callback function
    return 2021 - elem;
} 

function felnott(elem) {
    return elem >= 18;
}

var korok = tombMuvelet(evek, korSzamitas);

console.log(korok);

var felnottek = tombMuvelet(korok, felnott);

console.log(felnottek);*/



// visszaadott függvények

/*function interjukerdes(foglalkozas) { // first class
    if(foglalkozas === 'tanár') {
        return function(nev) { // névtelen függvény
            console.log(nev + ', meg tudná mondani hogy milyne tárgyakat oktat?');
        }
    } else if(foglalkozas === 'eladó') {
        return function(nev) {
            console.log(nev + ',hogyan kezelne egy vevő reklamációt');
        }
    } else {
        return function(nev) {
            console.log('Mi a foglalkozása kedves ' + nev + '?');
        }
    }
}

var kerdesTanaroknak = interjukerdes('tanár');

kerdesTanaroknak('Pál');

var kerdesEladoknak = interjukerdes('eladó');

kerdesEladoknak('Katalin');
kerdesEladoknak('Géza');
kerdesEladoknak('Ilona');


interjukerdes('tanár')('Péter');

interjukerdes('programozó')('Ödön');*/ 

// IIFE

/*(function(teszt) { // igen névtelen függvény (paraméter is megadhatunk)
    var pont = Math.random() *10;
    console.log(pont >= 5);
    console.log(teszt)
})('hello'); //ismételt zárójel lerakása váltka ki a függvényhívást

(function() {

})();*/

// apply, bind, call

var odon = {
    nev: 'Ödön',
    kor: 45,
    foglalkozas: 'csillagász',
    udvozles: function(stilus, napszak) {
        if(stilus === 'hivatalos') {
            console.log('Üdvözlöm, jó ' + napszak + ' kívánok ' + this.nev + ' vagyok.');
        } else if(stilus === 'baráti') {
            console.log('Szia, jó' + napszak + '!');
        }
    }
}
/*
odon.udvozles('hivatalos', 'hajnalt');
odon.udvozles('baráti', 'estét');

var bela = {
    nev: 'Béla',
    kor: 62,
    foglalkozas: 'portás'
}

//call

odon.udvozles.call(bela, 'baráti', 'estét');

//apply

 odon.udvozles.apply(bela, ['baráti', 'reggelt']);

 //bind

 var odonBarati = odon.udvozles.bind(odon, 'baráti');
 odonBarati('napot');
 odonBarati('estét');

 var belHivatalos = odon.udvozles.bind(bela, 'hivatalos');
 var belaHivatalosReggeli = odon.udvozles.bind(bela, 'hivatalos', 'reggelt');

 belHivatalos('estét');
 belaHivatalosReggeli();
 */

 var evek = [1954, 1990, 1963, 2000, 2010];

function tombMuvelet(tomb, fv) {  // first class function
    var eredmeny = [];

    for(var i = 0; i < tomb.length; i++) {
        eredmeny.push(fv(tomb[i]));
    }

    return eredmeny;
}

function korSzamitas(elem) { //callback function
    return 2021 - elem;
} 

function felnott(korhatar, elem) {
    return elem >= korhatar;
}

var korok = tombMuvelet(evek, korSzamitas);
console.log(evek);
console.log(korok);

var felnotkorJapanban = tombMuvelet(korok, felnott.bind(this, 20));

console.log(felnotkorJapanban);