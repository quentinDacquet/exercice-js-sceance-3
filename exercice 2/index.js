function valider(){
   let value = document.getElementById('inputtxt').value;
   value = value.replace(/\s+/g, '');
   let tab = value.split('');   
   let tabreversed = tab.reverse();
   let longeur = tabreversed.length;
   let i =0;
   let final = "";
   for(i = 0; i < longeur; i++){
      final = final + tabreversed[i];
   }
   
   if (final == value){
      document.write("C'est un palyndrome");
   } else {
      document.write("Ce n'est pas un palyndrome");
   }
}