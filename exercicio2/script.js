const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
// resposta a)
console.log(filme.elenco[0]);

// resposta b)
console.log(filme.elenco.pop());

// resposta c)
console.log(filme.transmissoesHoje);

// resposta d)
console.log(filme.transmissoesHoje[1])