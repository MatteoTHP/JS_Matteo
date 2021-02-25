
str = prompt("Insere ici une section d'ARN :  ex( CCGUCGUUGCGCUACAGC  ou  CCUCGCCGGUACUUCUCG ");
var chunks = [];

for (var i = 0, charsLength = str.length; i < charsLength; i += 3) {
    chunks.push(str.substring(i, i + 3));
}
console.log(chunks)
traded = []
chunks.forEach(element =>
    { if (element === "UCU" ||element === "UCC" ||element === "UCA" ||element === "UCG" ||element === "AGU"||element === "AGC") traded.push(`Sérine`) ;

    if (element === "CCU" ||element === "CCC" ||element === "CCA" ||element === "CCG") traded.push(`Proline`) ;

    if (element === "UUA" ||element === "UUG" ) traded.push(`Leucine`) ;
        
     if (element === "UUU" ||element === "UUC" ) traded.push(`Phénylalanine`) ;
        
     if (element === "CGU" ||element === "CGC" ||element === "CGA" ||element === "CGG" || element === "AGA"||element === "AGG") traded.push(`Arginine`) ;
        
    if (element === "UAU" ||element === "UAC" ) traded.push(`Tyrosine`) ;

    });
    
    
    
console.log(traded)