const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const liczba_c = document.querySelector('#liczba_c');
const liczba_d = document.querySelector('#liczba_d');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);
    let d = parseFloat(liczba_d.value);
    let iloczyn = a * b * c * d;
    //console.log(iloczyn);
    let średnia_geometryczna = Math.pow(iloczyn, 0.25);
    let średnia_zaokrąglona = średnia_geometryczna.toFixed(3);
    wynik.innerHTML = `średnia geometryczna liczb ${a}, ${b}, ${c}, ${d}<br>bez zaokrąglenia wynosi ${średnia_geometryczna}<br>z zaokrągleniem ${średnia_zaokrąglona}.`;
})
