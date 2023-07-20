const cidades = ["Jandira", "Osasco", "Barueri", "Itapevi"];

// Para cada cidade(pode ser qualquer nome, mas normalmente usamos o mesmo nome do array, porém no singular) na array cidades, mostre(console.log) cidade
cidades.sort();
cidades.forEach((cidade) => {
    console.log(`A cidade escolhida: ${cidade}`);
});