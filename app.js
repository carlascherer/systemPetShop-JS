// const nomeEmpresa = '\nPet Shop da Carla\n';

// console.log(nomeEmpresa);

const servicos = require('./servicos');

const listaDePets = require('./listaDePets.json');

servicos.adicionaPet(listaDePets, 'Lolla', 3, 'vira-lata', 'F', 'Carla', false, false, 12345);
servicos.adicionaPet(listaDePets, 'toddy', 5, 'golden', 'M', 'Danilo', false, true, 23456);

// console.log(listaDePets.nome);
// console.log(listaDePets['idade']);

// servicos.exibePets(listaDePets);

servicos.servico(listaDePets, 0, servicos.vacinarPet);
//console.log(listaDePets[0]);

//console.log(servicos.encontraPet(listaDePets, 12345));

const http = require('http');
const url = require('url');

const server = http.createServer( (req, res) => {
    res.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
    const parsedReq = url.parse(req.url, true);
    const {nome, rga} = parsedReq.query;

    switch(parsedReq.pathname) {
        case "/":
            res.end(servicos.exibePets(listaDePets));
            break;
        case "/pet":
            if (rga) {
                res.end(servicos.encontraPet(listaDePets, rga));
            };
            break;
        default:
            res.end('Bem vindo(a) ao Pet Shop da Carla!');
            break;
    };
    console.log(rga);
    console.log(parsedReq)
});

server.listen(3030, 'localhost', () => {
    console.log('Servidor on')
});
