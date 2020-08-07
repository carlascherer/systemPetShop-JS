const adicionaPet = (listaDePets, nome, idade, raca, sexo, cuidador, castrado, vacinado, rga) => {
    listaDePets.push({
        nome,
        idade,
        raca,
        sexo,
        cuidador,
        castrado,
        vacinado,
        rga 
    })
};

const exibePets = (listaDePets) => {
    let saida = '\nLISTA DE PETS\n';
    listaDePets.forEach((pet, numero) => {
        saida += '-'.repeat(30) + '\n';
        saida += 'Nome do Pet: ' + listaDePets[numero].nome + '\n';
        saida += 'Idade do Pet: ' + listaDePets[numero].idade + '\n';
        saida += 'Raça do Pet: ' + listaDePets[numero].raca + '\n';
        saida += 'Sexo do Pet: ' + listaDePets[numero].sexo + '\n';
        saida += 'Cuidador do Pet: ' + listaDePets[numero].cuidador + '\n';
        saida += 'É castrado? ' + listaDePets[numero].castrado + '\n';
        saida += 'É vacinado? ' + listaDePets[numero].vacinado + '\n';
        saida += 'Pet RGA: ' + listaDePets[numero].rga + '\n';
        saida += '-'.repeat(30) + '\n';
    });
    return saida;
};

const vacinarPet = (listaDePets, petNumero) => listaDePets[petNumero].vacinado = true;

const castrarPet = (listaDePets, petNumero) => listaDePets[petNumero].castrado = true;

const servico = (listaDePets, petNumero, servico) => servico(listaDePets, petNumero);

const encontraPet = (listaDePets, petRga) => {
    let saida = '';
    let petEncontrado = listaDePets.find( (pet, numero) => listaDePets[numero].rga == petRga );
    petEncontrado ? (saida += 'O pet foi encontrado!\n' + petEncontrado.nome) : saida += 'O pet não foi encontrado!'
    console.log(saida);
    return saida;
};

const servicos = {
    adicionaPet,
    exibePets,
    vacinarPet,
    castrarPet,
    servico,
    encontraPet
};

module.exports = servicos;