// variables

// typy výletů
const typy = [
    `<img src="img/cyklo.svg" width="80" height="80" alt="cyklo">`,
    `<img src="img/pesky.svg" width="80" height="80" alt="pěšky">`
];

// výlety
const vylety = [
    {nazev: "Jeseníky", rok: 2016, mesic: 4, typ: 1},
    {nazev: "Bojkovice", rok: 2016, mesic: 7, typ: 1},
    {nazev: "Nové Město na Moravě", rok: 2016, mesic: 12, typ: 1},
    {nazev: "Lelekovice", rok: 2017, mesic: 10, typ: 0},
    {nazev: "Lednicko", rok: 2018, mesic: 4, typ: 0},
    {nazev: "Praděd", rok: 2018, mesic: 5, typ: 1},
    {nazev: "Praděd", rok: 2018, mesic: 5, typ: 1},
    {nazev: "Praděd", rok: 2018, mesic: 5, typ: 1},
    {nazev: "Po stopách dobrého vojáka Švejka", rok: 2018, mesic: 7, typ: 0},
    {nazev: "Po stopách dobrého vojáka Švejka", rok: 2018, mesic: 7, typ: 0},
    {nazev: "Po stopách dobrého vojáka Švejka", rok: 2018, mesic: 7, typ: 0},
    {nazev: "Po stopách dobrého vojáka Švejka", rok: 2018, mesic: 7, typ: 0},
    {nazev: "Po stopách dobrého vojáka Švejka", rok: 2018, mesic: 7, typ: 0},
    {nazev: "Medlánky", rok: 2019, mesic: 1, typ: 1},
    {nazev: "Stopy Miloše Zemana na Vysočině", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Králický Sněžník", rok: 2019, mesic: 4, typ: 1},
    {nazev: "Přírodní park Říčky", rok: 2019, mesic: 5, typ: 0},
    {nazev: "Tovačovská jezera", rok: 2019, mesic: 6, typ: 0},
    {nazev: "Po hřebenech Bílých Karpat", rok: 2019, mesic: 7, typ: 0},
    {nazev: "Po hřebenech Bílých Karpat", rok: 2019, mesic: 7, typ: 0},
    {nazev: "Po hřebenech Bílých Karpat", rok: 2019, mesic: 7, typ: 0},
    {nazev: "Po hřebenech Bílých Karpat", rok: 2019, mesic: 7, typ: 0},
    {nazev: "Čtyři zámky", rok: 2019, mesic: 10, typ: 0},
    {nazev: "Čtyři zámky", rok: 2019, mesic: 10, typ: 0},
    {nazev: "Žítkovské bohyně", rok: 2019, mesic: 10, typ: 1},
    {nazev: "Žítkovské bohyně", rok: 2019, mesic: 10, typ: 1},
    {nazev: "Žítkovské bohyně", rok: 2019, mesic: 10, typ: 1},
    {nazev: "Obřanský hrad", rok: 2019, mesic: 11, typ: 1},
    {nazev: "Hostětín", rok: 2020, mesic: 5, typ: 1},
    {nazev: "Hostětín", rok: 2020, mesic: 5, typ: 1},
    {nazev: "Hostětín", rok: 2020, mesic: 5, typ: 1},
    {nazev: "Hostětín", rok: 2020, mesic: 5, typ: 1},
    {nazev: "Hostětín", rok: 2020, mesic: 5, typ: 1},
    {nazev: "Starý Světlov", rok: 2020, mesic: 5, typ: 1},
    {nazev: "Starý Světlov", rok: 2020, mesic: 5, typ: 1},
    {nazev: "Starý Světlov", rok: 2020, mesic: 5, typ: 1},
    {nazev: "Rudimov", rok: 2020, mesic: 5, typ: 0},
    {nazev: "Luhačovice", rok: 2020, mesic: 5, typ: 0},
    {nazev: "Přepychová stezka", rok: 2020, mesic: 5, typ: 0},
    {nazev: "Týnišťsko-třebechovické Poorličí", rok: 2020, mesic: 5, typ: 0},
    {nazev: "Jindřichův Hradec", rok: 2020, mesic: 7, typ: 0},
    {nazev: "Gmünd", rok: 2020, mesic: 7, typ: 0},
    {nazev: "Rozkoš", rok: 2021, mesic: 8, typ: 0},
    {nazev: "Opočno", rok: 2021, mesic: 8, typ: 1},
    {nazev: "Opočno", rok: 2021, mesic: 8, typ: 1}
];

// html elementy
const dnesniDatum = document.getElementById("dnesniDatum");
const vyletNazev = document.getElementById("vyletNazev");
const vyletDatum = document.getElementById("vyletDatum");
const vyletTyp = document.getElementById("vyletTyp");
const tlacitko = document.getElementById("tlacitko");

// měsíce v roce (česky)
const mesice = ["nic", "leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
// dny v týdnu (česky)
const dny = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];

// dnešní datum
const dnes = new Date();

// zjistit, jaký je týden v roce
Date.prototype.weekNo = function(){
    let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    let dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
};

const tyden = dnes.weekNo();

dnesniDatum.innerHTML = `Dnes je ${dny[dnes.getDay()]}, ${dnes.getDate()}. ${mesice[dnes.getMonth() + 1]} ${dnes.getFullYear()}, ${tyden}. týden v roce`;


// funkce na klik tlačítka zobrazí odpověď v divu
function zobrazitOdpoved() {
    tlacitko.style.display = "none";
    vyletNazev.innerText = vylety[tyden].nazev;
    vyletDatum.innerText = `${mesice[vylety[tyden].mesic]} ${vylety[tyden].rok}`;
    vyletTyp.innerHTML = typy[vylety[tyden].typ];
}
