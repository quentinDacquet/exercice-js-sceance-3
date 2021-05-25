function valider(){
   let value = document.getElementById('inputtxt').value;
   let tab = value.split('');   
   let tabreversed = tab.reverse();
   let longeur = tabreversed.length;
   let i =0;
   let final = tab.join("");
   

   document.write(final);
}