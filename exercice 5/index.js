function valider(){

    let input = document.getElementById('inputtxt').value;
    let tab = input.split(' ');
    let longtab = tab.length;
    
    for(let i = 0; i < longtab; i++){
        let mot = tab[i];
        let letter = mot.split('');
        let firstletter = letter[0];
        firstletter = firstletter.toUpperCase();
        letter.splice(0, 1, firstletter);
        letter = letter.join('');
        document.write(letter + " ");
    }


}