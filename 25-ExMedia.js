// Utilizar a função com argumentos e com retorno para calcular a média de 4 notas

console.log("A média do aluno é " + calcularMedia(10, 8, 6, 10));

function calcularMedia(n1, n2, n3, n4) {
    try {
        const media = (n1 + n2 + n3 + n4) / 4;
        return media.toFixed(2);
    }
    catch (e) {
        console.log("Erro ao calcular a média. Avise o menino do TI.");
        console.log(e);
    }
}