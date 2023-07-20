/* 
Array - Arranjo de Dados - Lista de Valores
Método push - Adiciona um item ao final do Array
Método unshift - Adiciona um item ao começo do Array
Método pop - Remove o último item do final do Array
Método shift - Remove o primeiro item do começo do Array
Metodo lenght - conta quantos valores tem na array
Método indexOf - Mostra o índice do valor buscado dentro do Array
Método splice(índice do item, quantidade para excluir) - Removo um item de dentro do Array
*/

let carros = ["Gol", "Celta Preto", " Fox", "Opala", "Ferrari 458 speciale apperta", "Kia Soul"];

// console.log(carros.length);
// carros.push("Mustang");
// console.log(carros.length);
// carros.unshift("Logan", "Doblo");
// console.log(carros[0]);
// carros.shift();
// console.log(carros[0]);
// console.log(carros.indexOf("Opala"));

console.log(carros[3]);

let itemParaExcluir = carros.indexOf("Opala");
carros.splice(itemParaExcluir,1);

console.log(carros[3]); 