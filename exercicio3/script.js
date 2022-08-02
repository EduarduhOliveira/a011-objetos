const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    ataques: []
};

const pokemon1Copia = {...pokemon1, nome:"squirtle", tipo:"Água",ataques:[]};

console.log(pokemon1Copia)

const habilidades = [{nome: "Investida",dano: 40, tipo: "Normal",precisao: 100}]
pokemon1.ataques.push(habilidades)

console.log(pokemon1)

const folhas = [{nome:"folha navalha", dano: 45, tipo:"grama", precisao: 100}];
pokemon1.ataques.push(folhas);
console.log("ataque alterado Grama :",pokemon1);

const agua = [{nome:"jato de Água", dano:40, tipo: "Água", precisao:100}];
pokemon1Copia.ataques.push(agua);
console.log("ataque alterado Água :",pokemon1Copia)

