// 1) Algoritmo que lê 2 notas de 3 alunos e imprime a média de cada um deles.

// PC DA ESCOLA ESTÁ SEM INTERNET, IMPOSSIBILITANTO A INSTALAÇÃO DO INQUIRER - NODEJS PARA RECOLHER O QUE O USUARIO ESCREVE
// Quando possivel, irei mudar para recolher as inforamaçoes por meio do console

console.log("1) Algoritmo que lê 2 notas de 3 alunos e imprime a média de cada um deles.")

const alunos = [
    {
        aluno: "Maria",
        nota1: 10,
        nota2: 9
    },
    {
        aluno: "Romeo",
        nota1: 8,
        nota2: 7
    },
    {
        aluno: "Joao",
        nota1: 9,
        nota2: 6
    }
]

const getMedia = () => {
    for(let i in alunos){
        let nome = alunos[i].aluno;
        let nota1 = alunos[i].nota1;
        let nota2 = alunos[i].nota2;

        console.log(`\nAluno: ${nome}\nNota 1: ${nota1}\nNota 2: ${nota2}\nMedia: ${(nota1 + nota2) / 2}`)
    }
}

getMedia();

// 2) Algoritmo que lê a quantidade e o preço unitário de 5 produtos comprados
// por um cliente, calcule e imprima:
// a. O valor gasto com cada produto.
// b. A quantidade de produtos que custam mais que R$ 100.00.

console.log(`
2) Algoritmo que lê a quantidade e o preço unitário de 5 produtos comprados
por um cliente, calcule e imprima:
a. O valor gasto com cada produto.
b. A quantidade de produtos que custam mais que R$ 100.00.
`)

const produtos = [
    {
        produto: "Pizza",
        custo: 29.9,
        unidades: 4
    },
    {
        produto: "Ovos",
        custo: 19.9,
        unidades: 1
    },
    {
        produto: "Chocolate",
        custo: 5.9,
        unidades: 5
    },
    {
        produto: "Macarrão",
        custo: 7.9,
        unidades: 5
    },
    {
        produto: "Suco",
        custo: 12.9,
        unidades: 2
    }

]

const getProds = () => {
    let maiorquecemreais = 0;
    let nomesmaior = "";
    for(let i in produtos){
        let nome = produtos[i].produto;
        let custo = produtos[i].custo;
        let unidades = produtos[i].unidades;
        let total = custo * unidades;

        console.log(`\nProduto: ${nome}\nCusto individual: ${custo}\nUnidades: ${unidades}\nGasto total: ${total}`)

        if(total > 100){
            console.log(`Custo maior que R$100`)
            nomesmaior += `\n${nome}`;
            maiorquecemreais++;
        }
    }

    console.log(`\nProdutos com valor maior que R$100: ${maiorquecemreais}\nProdutos: ${nomesmaior}`)
}

getProds()

// 3) Faça um algoritmo que solicite 10 números inteiros ao usuário, calcule e
// imprima:
// a. O dobro de cada número positivo.
// b. A quantidade de números negativos.
// * Considere que o usuário nunca digitará o número 0 (zero).

console.log(`
3) Faça um algoritmo que solicite 10 números inteiros ao usuário, calcule e
imprima:
a. O dobro de cada número positivo.
b. A quantidade de números negativos.
* Considere que o usuário nunca digitará o número 0 (zero).
`)

const numeros = [
    -10,
    -20,
    -30,
    40,
    50,
    60,
    70,
    80,
    90,
    100
]

const getNums = () => {
    let negativos = 0;
    let negNums = "";
    for(let i of numeros){
        if(i > 0){
            console.log(`Positivo: ${i}\nDobro: ${i * 2}`)
        } else {
            negNums += `\n ${i}`;
            negativos++;
        }
    }

    console.log(`\nNumeros negativos: ${negNums}\nTotal: ${negativos}`)
}

getNums();

// 4) Uma loja guarda os seguintes dados sobre cada um dos 150 produtos que
// revende: preço de custo, preço de venda e tipo (V – vestuário e C –
// Calçado). Faça um algoritmo que leia os dados dos 150 produtos, calcule e
// imprima:
// a. Para cada produto, o lucro que proporciona.
// b. Quantidade de calçados vendidos.

console.log(`
4) Uma loja guarda os seguintes dados sobre cada um dos 150 produtos que
revende: preço de custo, preço de venda e tipo (V – vestuário e C –
Calçado). Faça um algoritmo que leia os dados dos 150 produtos, calcule e
imprima:
a. Para cada produto, o lucro que proporciona.
b. Quantidade de calçados vendidos.
`)


let loja = [

]

const prods = ["C", "V"]

const getLoja = () => {
    let totalCalcadosVendidos = 0;

    for(let i = 0; i < 150; i++){
        let vendaVal = Math.floor(Math.random() * 10 + Math.random() * 30 + 10);
        let vestuarioNome = prods[Math.floor(Math.random() * 2)]
        let vendasTotais = Math.floor(Math.random() * 10);
        let custoProd = i;
        let vendaProd = i + vendaVal;
        let lucroProd = vendaProd - custoProd;
        loja.push({
            custo: custoProd,
            valor: vendaProd,
            lucro: lucroProd,
            vendas: vendasTotais,
            tipo: vestuarioNome
        })
    }

    for(let i of loja){
        if(i.tipo == "C"){
            totalCalcadosVendidos += i.vendas
        }
    }

    console.log(loja, `\nTotais calçados vendidos: ${totalCalcadosVendidos}`)
}

getLoja()


// 5) Faça um algoritmo que imprima os números existentes entre 50 e 150
// (inclusive os dois).

console.log(`
5) Faça um algoritmo que imprima os números existentes entre 50 e 150
(inclusive os dois).
`)

for(let i = 50; i <= 150; i++){
    console.log(i)
}

// 6) Faça um algoritmo que imprima os números existentes entre 10 e 100
// (inclusive os dois), de dois em dois.10 12 14 16 ...

console.log(`
6) Faça um algoritmo que imprima os números existentes entre 10 e 100
(inclusive os dois), de dois em dois.10 12 14 16 ...
`)

let total = 10;

while(total <= 100){
    console.log(total)
    total += 2;
}

// 7) A administração de uma rodoviária anotou dados das pessoas que
// chegaram em um determinado dia na cidade. Para cada pessoa foi
// preenchida uma ficha com a idade e a procedência (0 - Capital, 1 - Interior, 2
// - Outro estado).
// Faça um algoritmo que leia os dados, calcule e imprima:
// a. a quantidade de pessoas vindas da capital.
// b. o percentual de pessoas maiores de idade.

console.log(`
7) A administração de uma rodoviária anotou dados das pessoas que
chegaram em um determinado dia na cidade. Para cada pessoa foi
preenchida uma ficha com a idade e a procedência (0 - Capital, 1 - Interior, 2
- Outro estado).
Faça um algoritmo que leia os dados, calcule e imprima:
a. a quantidade de pessoas vindas da capital.
b. o percentual de pessoas maiores de idade.
`)

let pessoas = [

]

let infs = ["Capital", "Interior", "Outro"]

const getDias = () => {
    let cap = 0;
    let midade = 0;
    let prc = 0;
    for(let i = 0; i < 20; i++){
        let local = infs[Math.floor(Math.random() * 3)]
        let idadeP = Math.floor(Math.random() * 100)
        pessoas.push({
            proc: local,
            idade: idadeP
        })
    }

    for(let i of pessoas){
        if(i.proc == "Capital"){
            cap++;
        }
        if(i.idade >= 18){
            midade++;
        }
    }

    prc = (midade/20) * 100
    

    console.log(`${cap} pessoas vieram da capital e ${20 - cap} não.`);
    console.log(`${prc}% ou ${midade} pessoas são maiores de idade`);

}


getDias()


// 8) Elaborar um algoritmo que mostre os resultados da tabuada de um número
// solicitado ao usuário. Estes resultados devem ser apresentados de acordo
// com a sua forma tradicional, por exemplo:
// 1 x 1 = 1
// 1 x 2 = 2...
// 1 x 10 = 10

console.log(`
8) Elaborar um algoritmo que mostre os resultados da tabuada de um número
solicitado ao usuário. Estes resultados devem ser apresentados de acordo
com a sua forma tradicional, por exemplo:
1 x 1 = 1
1 x 2 = 2...
1 x 10 = 10
`)

let escolhido = 1

const getEsc = () => {
    for(let i = 0; i <= 10; i++){
        console.log(`${escolhido} x ${i} = ${escolhido * i}`)
    }
}

getEsc();
