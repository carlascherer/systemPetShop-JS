const nomeEmpresa = '\nPet Shop da Carla\n';

console.log(nomeEmpresa);

let listaDePets = [];

// function adicionaPet(nome, idade, raca, sexo, cuidador, castrado, vacinado) {
//     listaDePets.push({
//         nome: nome,
//         idade: idade,
//         raca: raca,
//         sexo: sexo,
//         cuidador: cuidador,
//         castrado: castrado,
//         vacinado: vacinado
//     })
// }

const adicionaPet = (nome, idade, raca, sexo, cuidador, castrado, vacinado, rga) => {
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
}

adicionaPet('Lolla', 3, 'vira-lata', 'F', 'Carla', false, false, 12345);
adicionaPet('toddy', 5, 'golden', 'M', 'Danilo', false, true, 23456);

//console.log(listaDePets.nome);
//console.log(listaDePets['idade']);

const exibePets = () => {
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
}

//exibePets();

const vacinarPet = petNumero => listaDePets[petNumero].vacinado = true;

const castrarPet = petNumero => listaDePets[petNumero].castrado = true;

const servico = (petNumero, servico) => servico(petNumero);

servico(0,vacinarPet);
//console.log(listaDePets[0]);

const encontraPet = petRga => {
    let petEncontrado = listaDePets.find( (pet, numero) => listaDePets[numero].rga == petRga );
    return petEncontrado != undefined;
};

console.log(encontraPet(12345));




