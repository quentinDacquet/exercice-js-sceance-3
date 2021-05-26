function valider(){

    let input = document.getElementById('inputtxt').value;
    let tab = input.split(' ');
    let longtab = tab.length;
    let biggestword = 0;
    let lettercompare = 0;
    
    for(let i = 0; i < longtab; i++){
        let mot = tab[i];
        let letter = mot.split('');
        let letter1 = letter.length;
        if (letter1 > lettercompare){
            biggestword = i;
            lettercompare = letter1;
        } else{
            continue;
         }
    }

    document.write(tab[biggestword]);

}