var size = prompt("Entre un nombre pour la taille de la pyramide");

function pyramid(size) {

  for(var i=1; i<=size; i++)
  {
    let space = ' '.repeat(size - i);

    let diez = '#'.repeat(i)
  
    console.log(space + diez);
  }

}

pyramid(size);
