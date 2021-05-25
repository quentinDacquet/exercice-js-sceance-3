function valider(){
    let value = document.getElementById('inputtxt').value;
    let order = value.split("").sort().join("");
    document.write(order);
}
