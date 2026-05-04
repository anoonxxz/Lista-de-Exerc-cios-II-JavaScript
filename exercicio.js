function inverterString(texto){
    return texto.split('').reverse().join('');
}

console.log(inverterString("hello"));

function contarVogais(texto) {
  let contador = 0;
  texto = texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    if (
      texto[i] === 'a' ||
      texto[i] === 'e' ||
      texto[i] === 'i' ||
      texto[i] === 'o' ||
      texto[i] === 'u'
    ) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVogais("javascript"));

function ehPalindromo(texto){
    const normalizada = texto.toLowerCase();
    const invertida = normalizada.split('').reverse().join('');

    return normalizada === invertida;
}

console.log(ehPalindromo("ana"));

function  capitalizarPalavras(frase){
    const palavras = frase.split("");

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > 0) {
            palavras[i] = 
             palavras[i][0].toUpperCase() + palavras[i].slice(1);
        }
    }

    return palavras.join(" ");
}

console.log(capitalizarPalavras("olá mundo"));

function criarAluno(nome, idade, curso){
    return {
        nome: nome,
        idade: idade,
        curso: curso
    };
}

let aluno = criarAluno("Maria", 20, "Sistemas de Informação");
console.log(aluno);

function calcularIMC(nome, peso, altura){
    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    return {
        nome: nome,
        imc: Number(imc.toFixed(2)),
        classificacao: classificacao
    };
}
console.log(calcularIMC("João", 75, 1.80));

function buscarContato(contatos, nome){
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].nome === nome) {
            return contatos[i];
        }
    }
    return null;
}

let contatos = [
    { nome: "Ana", telefone: "1111-1111" },
    { nome: "Bruno", telefone: "2222-2222" },
    { nome: "Carlos", telefone: "3333-3333" }
];

console.log(buscarContato(contatos, "Bruno"));

function diaDaSemana(numero){
    switch (numero){
        case 1: return "Domingo";
        case 2: return "Segunda";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Dia inválido";
    }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(9));

function calculadora(num1, num2, operacao){
    switch (operacao) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": 
            if (num2 == 0) return "Erro: divisão por zero";
            return num1 / num2;
        default:
            return "Operação inválida";
    }
}

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 0, "/"));
console.log(calculadora(10, 5, "%"));

function verificarAprovacao(nota){
    return nota >= 60 ? "Aprovada(o)" : "Rerovada(o)";
}

console.log(verificarAprovacao(85));
console.log(verificarAprovacao(45));
console.log(verificarAprovacao(60));

const realParaDolar = (reais, cotacao) => reais/ cotacao;
console.log(realParaDolar(100, 5.25));

const gerarMensagem = (nome, idade, cidade) => {
  return `Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
};
console.log(gerarMensagem("Maria", 22, "Ipatinga"));

function dobrarValores(numeros){
    return numeros.map(n => n * 2);
}

console.log(dobrarValores([1, 2, 3, 4, 5]));

function filtrarMaiores(pessoas){
    return pessoas.filter(p => p.idade >= 18);
}

let pessoas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 15 },
    { nome: "Carlos", idade: 30 },
    { nome: "Diana", idade: 17 }
];

console.log(filtrarMaiores(pessoas));

function buscarProduto(produtos, id) {
  return produtos.find(p => p.id === id);
}

let produtos = [
    { id: 1, nome: "Camiseta", preco: 49.90 },
    { id: 2, nome: "Calça", preco: 89.90 },
    { id: 3, nome: "Tênis", preco: 199.90 }
];

console.log(buscarProduto(produtos, 2));

function validarSenha(senha){
    let erros = [];

    if (senha.length < 8) erros.push("Mínimo 8 caracteres");
    if (!/[A-Z]/.test(senha)) erros.push("Falta letra maiúscula");
    if (!/[a-z]/.test(senha)) erros.push("Falta letra mainúscula");
    if (!/[0-9]/.test(senha)) erros.push("Falta número");

    return {
        valida: erros.length === 0,
        erros: erros
    };
}

console.log(validarSenha("Abc12345"));
console.log(validarSenha("abc"));

function cifrarCesar(texto, deslocamento){
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char >= 'a' && char <= 'z') {
            let codigo = char.charCodeAt(0) - 97;
            let novoCodigo = (codigo + deslocamento) % 26;
            resultado += String.fromCharCode(novoCodigo + 97);
        } else {
            resultado += char;
        }
    }

    return resultado;
}

console.log(cifrarCesar("abc", 3));

function  ordenarPorNota(alunos){
    return alunos.sort((a, b) => b.nota - a.nota);
}

let alunos = [
    { nome: "Ana", nota: 7.5 },
    { nome: "Bruno", nota: 9.0 },
    { nome: "Carlos", nota: 6.0 },
    { nome: "Diana", nota: 8.5 }
];

console.log(ordenarPorNota(alunos));

function removerDuplicados(array){
    return [...new Set(array)];
}

function removerDuplicados(array){
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5]));
console.log(removerDuplicados(["a", "b", "a", "c", "b"]));


function relatorioTurma(alunos){
    const soma = alunos.reduce((acc, a) => acc + a.nota, 0);
    const media = soma / alunos.length;

    let melhorAluno = alunos[0];
    let piorAluno = alunos[0]

    for (let aluno of alunos) {
        if (aluno.nota > melhorAluno.nota) melhorAluno = aluno;
        if (aluno.nota < piorAluno.nota) piorAluno = aluno;
    }

    const aprovados = alunos.filter(a => a.nota >= 60).length;

    return {
        media: Number(media.toFixed(1)),
        melhorAluno,
        piorAluno,
        aprovados
    };
}

let turma = [
    { nome: "Ana", nota: 85 },
    { nome: "Bruno", nota: 42 },
    { nome: "Carlos", nota: 70 },
    { nome: "Diana", nota: 95 },
    { nome: "Eduardo", nota: 55 }
];

console.log(relatorioTurma(turma));