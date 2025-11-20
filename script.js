let ore = 999;

function assenze() {
    n = parseInt(document.getElementById("progresso").value);
    console.log(n);
    let assenze = n * 6;
    let ore_assenti = ore - assenze;
    let percentuale = (100 * ore_assenti)/ore;
    console.log(percentuale);
    document.getElementById("barra").style.width = percentuale + "%";
}

function cambiaTesto() {
    document.getElementById("casella").value = "Gabri";
}
function somma() {

    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    
    let c = a + b;

    document.getElementById("risultato").value = c;
    
    let d = document.createElement("p");
    console.log(d);
    let testo = document.createTextNode(a + "+" + b + "=" + c);
    console.log(testo);
    d.appendChild(testo);
    console.log(d);
    document.getElementById("cronologia").appendChild(d);
}

function differenza() {
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    let c = a - b;
    document.getElementById("risultato").value = c;

    let d = document.createElement("p");
    console.log(d);
    let testo = document.createTextNode(a + "-" + b + "=" + c);
    console.log(testo);
    d.appendChild(testo);
    console.log(d);
    document.getElementById("cronologia").appendChild(d);
}

function prodotto() {
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    let c = a * b;
    document.getElementById("risultato").value = c;

    let d = document.createElement("p");
    console.log(d);
    let testo = document.createTextNode(a + "*" + b + "=" + c);
    console.log(testo);
    d.appendChild(testo);
    console.log(d);
    document.getElementById("cronologia").appendChild(d);
}

function quoziente() {
    let a = parseInt(document.getElementById("numero1").value);
    let b = parseInt(document.getElementById("numero2").value);
    let c = a / b;
    document.getElementById("risultato").value = c;

    let d = document.createElement("p");
    console.log(d);
    let testo = document.createTextNode(a + "/" + b + "=" + c);
    console.log(testo);
    d.appendChild(testo);
    console.log(d);
    document.getElementById("cronologia").appendChild(d);
}  