var database = require("./database");

/*
var Time1 = {
    nome: "Barcelona",
    liga: "Espanhol"
}

function inserirTime(nome, liga){
    var Time2 = {
        nome: nome,
        liga: liga
    }
    return Time2
}

var Times3 = [
    {nome: "Bayer", liga: "Alemanha"},
    {nome: "Borussia", liga: "Alemanha"},
    {nome: "Real Madrid", liga: "Espanhol"},
    {nome: "Atlétic Madrid", liga: "Espanhol"},
    {nome: "Lyon", liga: "Francês"},
    {nome: "Manchester Utd", liga: 'Inglês'},
    {nome: "Manchester City", liga: 'Inglês'},
    {nome: "Liverpool", liga: 'Inglês'},
    {nome: "Arsenal", liga: 'Inglês'},
    {nome: "Chelsea", liga: 'Inglês'},
    {nome: "Milan", liga: 'Italia'},
    {nome: "Internazionale", liga: 'Italia'},
    {nome: "Juventus", liga: 'Italia'}
]


var jogadores = [
    //jogador para alteração e exclusão do banco
    {nome: "Pudim", time: "Algum Ai", nacionalidade: "Tanto Faz", posicao:"Atacante"},

    {nome: "Navas", time: "PSG", nacionalidade: "Brasil", posicao: "Goleiro"},
    {nome: "Donnaruma", time: "PSG", nacionalidade: "Italia", posicao: "Goleiro"},
    {nome: "Marquinhos", time: "PSG", nacionalidade: "Brasil", posicao:'Zagueiro'},
    {nome: "Kimpembe", time: "PSG", nacionalidade: "França", posicao: "Zagueiro"},
    {nome: "Sergio Ramos", time: "PSG", nacionalidade: "Espanha", posicao: "Zagueiro"},
    {nome: "Paredes", time: "PSG", nacionalidade: "Argentina", posicao: "Volante"},
    {nome: "Verrati", time: "PSG", nacionalidade: "Espanha", posicao: "Meia"},
    {nome: "Neymar", time: "PSG", nacionalidade: "Brasil", posicao: "Meia"},
    {nome: "Mbapee", time: "PSG", nacionalidade: "França", posicao: "Atacante"},
    {nome: "DiMaria", time: "PSG", nacionalidade: "Argentina", posicao:"Atacante"},

    {nome: "Ter Stegen", time: "Barcelona", nacionalidade: "Alemanha",posicao:"Goleiro"},
    {nome: "Lenglet", time: "Barcelona", nacionalidade: "França",posicao:"Zagueiro"},
    {nome: "Piqué", time: "Barcelona", nacionalidade: "França",posicao:"Zagueiro"},
    {nome: "Busquets", time: "Barcelona", nacionalidade: "Espanha", posicao: "Volante"},
    {nome: "Coutinho", time: "Barcelona", nacionalidade: "Brasil",posicao:"Meia"},
    {nome: "Messi", time: "Barcelona", nacionalidade: "Argentina", posicao:"Meia"},
    {nome: "Aguero", time: "Barcelona", nacionalidade: "Argentina", posicao:"Atacante"},
    {nome: "Griezman", time: "Barcelona", nacionalidade: "França", posicao:"Atacante"},
    
    {nome: "Neuer", time: "Bayer", nacionalidade: "Alemanha", posicao:"Goleiro"},
    {nome: "Sule", time: "Bayer", nacionalidade: "Alemanha", posicao:"Zagueiro"},
    {nome: "Hoffmann", time: "Bayer", nacionalidade: "Alemanha", posicao:"Zagueiro"},
    {nome: "Kimmich", time: "Bayer", nacionalidade: "Alemanha", posicao:"Volante"},
    {nome: "Coman", time: "Bayer", nacionalidade: "França", posicao:"Meia"},
    {nome: "Gnabry", time: "Bayer", nacionalidade: "Alemanha", posicao:"Meia"},
    {nome: "Lewandowiski", time: "Bayer", nacionalidade: "Polonia", posicao:"Atacante"},
    {nome: "Muller", time: "Bayer", nacionalidade: "Alemanha", posicao:"Atacante"},

    {nome: "Hitz", time: "Borussia", nacionalidade: "Suiça", posicao:"Goleiro"},
    {nome: "Hummels", time: "Borussia", nacionalidade: "Alemanha", posicao:"Zagueiro"},
    {nome: "Zagadou", time: "Borussia", nacionalidade: "França", posicao:"Zagueiro"},
    {nome: "Witsel", time: "Borussia", nacionalidade: "Belgica", posicao:"Volante"},
    {nome: "Reus", time: "Borussia", nacionalidade: "Alemanha", posicao:"Meia"},
    {nome: "Hazard", time: "Borussia", nacionalidade: "Belgica", posicao:"Meia"},
    {nome: "Haaland", time: "Borussia", nacionalidade: "Noruega", posicao:"Atacante"},

    {nome: "Courtois", time: "Real Madrid", nacionalidade: "Belgica", posicao:"Goleiro"},
    {nome: "Varane", time: "Real Madrid", nacionalidade: "França", posicao:"Zagueiro"},
    {nome: "Alaba", time: "Real Madrid", nacionalidade: "Austria", posicao:"Zagueiro"},
    {nome: "Casemiro", time: "Real Madrid", nacionalidade: "Brasil", posicao:"Volante"},
    {nome: "Modric", time: "Real Madrid", nacionalidade: "Croácia", posicao:"Meia"},
    {nome: "Isco", time: "Real Madrid", nacionalidade: "Espanha", posicao:"Meia"},
    {nome: "Vini Jr", time: "Real Madrid", nacionalidade: "Brasil", posicao:"Atacante"},
    {nome: "Benzema", time: "Real Madrid", nacionalidade: "França", posicao:"Atacante"},
    {nome: "Bale", time: "Real Madrid", nacionalidade: "Gales", posicao:"Atacante"},

    {nome: "Oblak", time: "Atlétic Madrid", nacionalidade: "Eslovenia", posicao:"Goleiro"},
    {nome: "Gimenèz", time: "Atlétic Madrid", nacionalidade: "Uruguai", posicao:"Zagueiro"},
    {nome: "Llorente", time: "Atlétic Madrid", nacionalidade: "Espanha", posicao:"Meia"},
    {nome: "Koke", time: "Atlétic Madrid", nacionalidade: "Espanha", posicao:"Meia"},
    {nome: "João Felix", time: "Atlétic Madrid", nacionalidade: "Portugal", posicao:"Atacante"},
    {nome: "Suárez", time: "Atlétic Madrid", nacionalidade: "Argentina", posicao:"Atacante"},

    {nome: "Lopes", time: "Lyon", nacionalidade: "Portugal", posicao:"Goleiro"},
    {nome: "Denayer", time: "Lyon", nacionalidade: "Belgica", posicao:"Zagueiro"},
    {nome: "Thiago Mendes", time: "Lyon", nacionalidade: "Brasil", posicao:"Volante"},
    {nome: "Lucas Paquetá", time: "Lyon", nacionalidade: "Brasil", posicao:"Meia"},
    {nome: "Bruno Guimarães", time: "Lyon", nacionalidade: "Brasil", posicao:"Meia"},
    {nome: "Bruno Guimarães", time: "Lyon", nacionalidade: "Brasil", posicao:"Meia"},
    {nome: "Slimani", time: "Lyon", nacionalidade: "Argélia", posicao:"Atacante"},

    {nome: "De Gea", time: "Manchester Utd", nacionalidade: "Espanha", posicao:"Goleiro"},
    {nome: "Maguire", time: "Manchester Utd", nacionalidade: "Inglês", posicao:"Zagueiro"},
    {nome: "Jones", time: "Manchester Utd", nacionalidade: "Inglês", posicao:"Zagueiro"},
    {nome: "Matic", time: "Manchester Utd", nacionalidade: "Servia", posicao:"Volante"},
    {nome: "Pogba", time: "Manchester Utd", nacionalidade: "França", posicao:"Meia"},
    {nome: "Rashford", time: "Manchester Utd", nacionalidade: "Inglês", posicao:"Meia"},
    {nome: "Cavani", time: "Manchester Utd", nacionalidade: "Uruguai", posicao:"Atacante"},
    {nome: "Martial", time: "Manchester Utd", nacionalidade: "Francça", posicao:"Atacante"},
    
    {nome: "Ederson", time: "Manchester City", nacionalidade: "Brasil", posicao:"Goleiro"},
    {nome: "Ruben Diaz", time: "Manchester City", nacionalidade: "Portugal", posicao:"Zagueiro"},
    {nome: "John Stones", time: "Manchester City", nacionalidade: "Inglês", posicao:"Zagueiro"},
    {nome: "Rodri", time: "Manchester City", nacionalidade: "Espanha", posicao:"Volante"},
    {nome: "De Bruyne", time: "Manchester City", nacionalidade: "Belgica", posicao:"Meia"},
    {nome: "Gundogan", time: "Manchester City", nacionalidade: "Alemanha", posicao:"Meia"},
    {nome: "Gabriel Jesus", time: "Manchester City", nacionalidade: "Brasil", posicao:"Atacante"},
    {nome: "Bernardo Silva", time: "Manchester City", nacionalidade: "Portugal", posicao:"Atacante"},
    

    {nome: "Alison", time: "Liverpool", nacionalidade: "Brasil", posicao:"Goleiro"},
    {nome: "Van Djik", time: "Liverpool", nacionalidade: "Holanda", posicao:"Zagueiro"},
    {nome: "Matip", time: "Liverpool", nacionalidade: "Camarões", posicao:"Zagueiro"},
    {nome: "Fabinho", time: "Liverpool", nacionalidade: "Brasil", posicao:"Volante"},
    {nome: "Thiago", time: "Liverpool", nacionalidade: "Espanha", posicao:"Meia"},
    {nome: "Chamberlain", time: "Liverpool", nacionalidade: "Inglês", posicao:"Meia"},
    {nome: "Salah", time: "Liverpool", nacionalidade: "Egito", posicao:"Meia"},
    {nome: "Mané", time: "Liverpool", nacionalidade: "Senegal", posicao:"Meia"},
    {nome: "Firmino", time: "Liverpool", nacionalidade: "Brasil", posicao:"Atacante"},
    {nome: "Origi", time: "Liverpool", nacionalidade: "Belgica", posicao:"Atacante"},

    {nome: "Leno", time: "Arsenal", nacionalidade: "Alemanha", posicao:"Goleiro"},
    {nome: "Chambers", time: "Arsenal", nacionalidade: "Inglês", posicao:"Zagueiro"},
    {nome: "Pablo Marí", time: "Arsenal", nacionalidade: "Espanha", posicao:"Zagueiro"},
    {nome: "Xhaka", time: "Arsenal", nacionalidade: "Espanha", posicao:"Volante"},
    {nome: "Willian", time: "Arsenal", nacionalidade: "Brasil", posicao:"Meia"},
    {nome: "Saka", time: "Arsenal", nacionalidade: "Inglês", posicao:"Meia"},
    {nome: "Lacazette", time: "Arsenal", nacionalidade: "Francês", posicao:"Atacante"},
    {nome: "Aubameyang", time: "Arsenal", nacionalidade: "Gabão", posicao:"Atacante"},

    {nome: "Mendy", time: "Chelsea", nacionalidade: "Senegal", posicao:"Goleiro"},
    {nome: "Christensen", time: "Chelsea", nacionalidade: "Dinamarca", posicao:"Zagueiro"},
    {nome: "Thiago Silva", time: "Chelsea", nacionalidade: "Brasil", posicao:"Zagueiro"},
    {nome: "Bakayoko", time: "Chelsea", nacionalidade: "Francês", posicao:"Volante"},
    {nome: "Jorginho", time: "Chelsea", nacionalidade: "Italia", posicao:"Volante"},
    {nome: "Kanté", time: "Chelsea", nacionalidade: "Francês", posicao:"Volante"},
    {nome: "Kovacic", time: "Chelsea", nacionalidade: "Croácia", posicao:"Meia"},
    {nome: "Baker", time: "Chelsea", nacionalidade: "Inglês", posicao:"Meia"},
    {nome: "Timo Werner", time: "Chelsea", nacionalidade: "Alemanha", posicao:"Atacante"},
    {nome: "Batshuayi", time: "Chelsea", nacionalidade: "Belgica", posicao:"Atacante"},
    {nome: "Giroud", time: "Chelsea", nacionalidade: "Frances", posicao:"Atacante"},

    {nome: "Tatarusanu", time: "Milan", nacionalidade: "Roménia", posicao:"Goleiro"},
    {nome: "Caldara", time: "Milan", nacionalidade: "Italia", posicao:"Zagueiro"},
    {nome: "Romagnoli", time: "Milan", nacionalidade: "Italia", posicao:"Zagueiro"},
    {nome: "Bennacer", time: "Milan", nacionalidade: "Argélia", posicao:"Volante"},
    {nome: "Maldini", time: "Milan", nacionalidade: "Italia", posicao:"Meia"},
    {nome: "Rebic", time: "Milan", nacionalidade: "Croacia", posicao:"Meia"},
    {nome: "Ibrahimovic", time: "Milan", nacionalidade: "Suecia", posicao:"Atacante"},

    {nome: "Handanovic", time: "Internazionale", nacionalidade: "Eslovenia", posicao:"Goleiro"},
    {nome: "Ranocchia", time: "Internazionale", nacionalidade: "Italia", posicao:"Zagueiro"},
    {nome: "de Vrij", time: "Internazionale", nacionalidade: "Holanda", posicao:"Zagueiro"},
    {nome: "Brozovic", time: "Internazionale", nacionalidade: "Croata", posicao:"Volante"},
    {nome: "Vidal", time: "Internazionale", nacionalidade: "Chile", posicao:"Meia"},
    {nome: "Eriksen", time: "Internazionale", nacionalidade: "Dinamarca", posicao:"Meia"},
    {nome: "Lukaku", time: "Internazionale", nacionalidade: "Belgica", posicao:"Atacante"},
    {nome: "Lautaro Martínez", time: "Internazionale", nacionalidade: "Argentina", posicao:"Atacante"},

    {nome: "Szczesny", time: "Juventus", nacionalidade: "Polonia", posicao:"Goleiro"},
    {nome: "Bonucci", time: "Juventus", nacionalidade: "Italia", posicao:"Zagueiro"},
    {nome: "Rugani", time: "Juventus", nacionalidade: "Italia", posicao:"Zagueiro"},
    {nome: "Cuadrado", time: "Juventus", nacionalidade: "Colombia", posicao:"Meia"},
    {nome: "Rabiot", time: "Juventus", nacionalidade: "Francês", posicao:"Meia"},
    {nome: "Bentancur", time: "Juventus", nacionalidade: "Uruguai", posicao:"Meia"},
    {nome: "Dybala", time: "Juventus", nacionalidade: "Argentina", posicao:"Atacante"},
    {nome: "Cristiano Ronalddo", time: "Juventus", nacionalidade: "Portugal", posicao:"Atacante"},
    {nome: "Morata", time: "Juventus", nacionalidade: "Espanha", posicao:"Atacante"}
    
]
*/

//-------------------------------------------------------------------------------------------------------------------------------

/* INSERT
//insere o objeto Time1 na tabela times
var query = database.insert(Time1).into("times").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})



//insere o objeto atravez da função inserirTime() 
var query = database.insert(inserirTime("PSG", "Francês")).into("times").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

//insere um array de objetos de times.
var query = database.insert(Times3).into("times").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

//insere um array de objetos de jogadores.
var query = database.insert(jogadores).into("jogadores").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

//-------------------------------------------------------------------------------------------------------------------------------

// SELECT
/*
//seleciona todos os times
database.select().table("times").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});
*/

/*
//seleciona todos os jogadores
database.select().table("jogadores").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});
*/

/*
//seleciona todos os jogadores mas só os atributos nome e posição
database.select(["nome", "posicao"]).table("jogadores").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});
*/

//-------------------------------------------------------------------------------------------------------------------------------

//SELECT WHERE
/*
//seleciona os times da liga inglesa
database.select().where({liga: "Inglês"}).table("times").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})
*/

/*
//seleciona os jogadores italianos
database.select(["nome", "nacionalidade"]).where({nacionalidade: "Italia"}).table("jogadores").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})
*/

/*
//seleciona os jogadores do PSG
database.select(["nome", "time"]).where({time: "PSG"}).table("jogadores").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})
*/

/*
//seleciona os jogadores meia do Barcelona
database.select(["nome", "posicao"]).where({posicao: "Meia"}).where({time: "Barcelona"}).table("jogadores").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
})
*/

/*
//seleciona algum registro que não existe
database.select().where({nome: "ggg"}).table("times").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
    
})
*/

/*
//seleciona o jogador neymar, ou todos do Chelsea
database.select(["nome", "time"]).whereRaw("nome = 'Neymar' OR time = 'Chelsea'").table("jogadores").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/*
//consulta nÍvel SQL
database.raw("SELECT * FROM jogadores where time = 'Real Madrid'").then(data => {
    console.log(data[0]);
}).catch(err => {
    console.log(err)
})
*/

/*
// orderBy (ASC OU DESC)
database.select(["nome"]).table("jogadores").orderBy("nome", "asc").then(data =>{
    console.log(data)
}).catch(err =>{
    console.log(err)
})
*/

//-------------------------------------------------------------------------------------------------------------------------------
