console.log("De quel nombre veux-tu calculer la factorielle ?");
num = prompt('Tape nombre pour la factorielle stp :');
factorialn = 1
function factorial() {
    for (i = 1; i <= num; i++) {
        factorialn *= i
    }
}
factorial()
console.log(factorialn)  