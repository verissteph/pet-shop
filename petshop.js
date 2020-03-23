// let animal = {
// tipo:"Gato",
// nome:"Marola",
// idade:0.4,
// raca:undefined,
// porte:"pequeno",
// sexo:"Macho",
// vacinado:false,
// tutor:{
//     nome:"Ingrid",
//     telefone:"(85)96182411",
// }
// };

let listaDeAnimais = [{
        tipo: "Gato",
        nome: "Marola",
        idade: 0.4,
        raca: undefined,
        porte: "pequeno",
        sexo: "Macho",
        vacinado: false,
        tutor: {
            nome: "Ingrid",
            telefone: "(85)96182411",
        }
    },
    {
        tipo: "Gato",
        nome: "Brisa",
        idade: 0.8,
        raca: undefined,
        porte: "medio",
        sexo: "Femea",
        vacinado: true,
        tutor: {
            nome: "Eduardo",
            telefone: "(85)99112847",
        }
    }
];

function adicionarPet(tipo, nome, idade, raca, porte, sexo, vacinado, tutor) {
    let novoPet = {
        tipo: tipo,
        nome: nome,
        idade: idade,
        raca: raca,
        porte: porte,
        sexo: sexo,
        vacinado: vacinado,
        tutor: {
            nome: tutor,
            telefone: undefined
        }
    };
    listaDeAnimais.push(novoPet);
    console.log("Pet cadastrado com sucesso!");
};
adicionarPet("Papagaio", "Lourim", 15, undefined, "pequeno", "macho", true, "stephanie");

function visualizarPets() {
    for (let i = 0; i < listaDeAnimais.length; i++) {
        let animal = listaDeAnimais[i];
        console.log("------------------------");
        console.log("Nome do Animal: " + animal.nome);
        console.log("Tipo de Animal: " + animal.tipo);
        console.log("Sexo do animal: " + animal.sexo);

    }
};