function saldoRankeada(qtdVitoria, qtdDerrota){
    return qtdVitoria - qtdDerrota;
}

const saldo = saldoRankeada (223, 100);

let nivel = "";

if (saldo <= 10) {
    nivel = "Ferro"
} else if (saldo <= 20){
    nivel = "Bronze"
} else if (saldo <= 50){
    nivel = "Prata"
} else if (saldo <= 80){
    nivel = "Ouro"
} else if (saldo <= 90){
    nivel = "Diamante"
} else if (saldo <= 100){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
};

console.log("O Herói tem o saldo de " + saldo + " e está no nível de " + nivel);