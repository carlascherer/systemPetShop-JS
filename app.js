const nomeEmpresa = '\nPet Shop da Carla\n';

console.log(nomeEmpresa);

const servicos = require('./servicos');

const listaDePets = require('./listaDePets.json');

servicos.adicionaPet(listaDePets, 'Lolla', 3, 'vira-lata', 'F', 'Carla', false, false, 12345);
servicos.adicionaPet(listaDePets, 'toddy', 5, 'golden', 'M', 'Danilo', false, true, 23456);

console.log(listaDePets);

console.log(listaDePets.nome);
console.log(listaDePets['idade']);

servicos.exibePets(listaDePets);

servicos.servico(listaDePets, 0, servicos.vacinarPet);
console.log(listaDePets[0]);

console.log(servicos.encontraPet(listaDePets, 12345));