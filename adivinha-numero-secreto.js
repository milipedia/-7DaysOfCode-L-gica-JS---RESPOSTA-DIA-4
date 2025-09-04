const numero = Math.floor(Math.random() * 11);
const tentativas = 3;
let chute = prompt("Digite um número entre 0 e 10. Você tem " + tentativas + " tentativas.");
let tentativasRestantes = tentativas - 1;
if (chute == numero) {
    alert("Parabéns! Você acertou de primeira!");
}
else{
    while (chute != numero && tentativasRestantes > 0) {
        alert("Você errou! Tente novamente. Você ainda tem " + tentativasRestantes + " tentativas.");
        chute = prompt("Digite um número entre 0 e 10. Você tem " + tentativasRestantes + " tentativas.");
        tentativasRestantes--;
    }
  }
