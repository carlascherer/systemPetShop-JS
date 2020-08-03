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
    console.log('\nLISTA DE PETS\n');
    listaDePets.forEach((pet, numero) => {
        console.log('-'.repeat(30) + '\n');
        console.log('Nome do Pet: ' + listaDePets[numero].nome);
        console.log('Idade do Pet: ' + listaDePets[numero].idade);
        console.log('Raça do Pet: ' + listaDePets[numero].raca);
        console.log('Sexo do Pet: ' + listaDePets[numero].sexo);
        console.log('Cuidador do Pet: ' + listaDePets[numero].cuidador);
        console.log('É castrado? ' + listaDePets[numero].castrado);
        console.log('É vacinado? ' + listaDePets[numero].vacinado);
        console.log('\n' + '-'.repeat(30));
    });
};

const vacinarPet = (listaDePets, petNumero) => listaDePets[petNumero].vacinado = true;

const castrarPet = (listaDePets, petNumero) => listaDePets[petNumero].castrado = true;

const servico = (listaDePets, petNumero, servico) => servico(listaDePets, petNumero);

const encontraPet = (listaDePets, petRga) => {
    let petEncontrado = listaDePets.find( (pet, numero) => listaDePets[numero].rga == petRga );
    return petEncontrado != undefined;
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