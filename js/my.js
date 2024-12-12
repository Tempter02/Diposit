let form = document.forms.calculator;

form.money.oninput = calculater;
form.mounths.onchange = calculater;
form.interest.oninput = calculater;

function calculater(params) {
    let initial = form.money.value;
    let interest = form.interest.value *0.01;
    let years = form.mounths.value / 12;
    let result = Math.round(initial * (1 + interest) ** years);
    let height = result / initial * 100 + 'px';

    document.getElementById("money-before").innerHTML = form.money.value;
    document.getElementById("money-after").innerHTML = result;   
    document.getElementById("height-after").style.height = height;
}
calculater();