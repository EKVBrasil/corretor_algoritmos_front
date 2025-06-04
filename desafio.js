// Lista de desafios
const desafios = [
   {
      titulo: "Soma de Dois Números",
      descricao: `
Dado um array de inteiros nums e um inteiro alvo, retorne os índices dos dois números que somam o alvo.

Exemplo:
Entrada: nums = [2,7,11,15], alvo = 9
Saída: [0,1]
Explicação: nums[0] + nums[1] = 2 + 7 = 9
    `,
      codigoInicial: `function soma(a, b) {\n  // escreva seu código aqui\n}`,
      testeFuncao: `soma(3,4)`,
      resultadoEsperado: 7,
   },
   {
      titulo: "Palíndromo",
      descricao: `
Verifique se uma string é um palíndromo, desconsiderando espaços e maiúsculas.

Exemplo:
Entrada: "Ame a ema"
Saída: true
    `,
      codigoInicial: `function ehPalindromo(str) {\n  // escreva seu código aqui\n}`,
      testeFuncao: `ehPalindromo("ana")`,
      resultadoEsperado: true,
   },
   {
      titulo: "Fatorial Recursivo",
      descricao: `
Calcule o fatorial de um número inteiro utilizando recursão.

Exemplo:
Entrada: 5
Saída: 120
    `,
      codigoInicial: `function fatorial(n) {\n  // escreva seu código aqui\n}`,
      testeFuncao: `fatorial(4)`,
      resultadoEsperado: 24,
   },
];

// Obtem título da URL
const params = new URLSearchParams(window.location.search);
const tituloDesafio = params.get("titulo");

// Encontra o desafio correspondente
const desafio = desafios.find((d) => d.titulo === tituloDesafio);

// Renderiza o desafio
if (desafio) {
   document.getElementById("enunciado").innerHTML = `
    <h2>${desafio.titulo}</h2>
    <p>${desafio.descricao.replace(/\n/g, "<br>")}</p>
  `;
} else {
   document.getElementById("enunciado").innerHTML = `
    <h2>Desafio não encontrado</h2>
    <p>Não foi possível carregar este desafio.</p>
  `;
}

// Cria o editor de código com CodeMirror
const editor = CodeMirror(document.getElementById("editor"), {
   mode: "javascript",
   theme: "default",
   lineNumbers: true,
   tabSize: 3,
   value: desafio.codigoInicial,
   indentUnit: 3,
   lineWrapping: true,
   matchBrackets: true,
   autoCloseBrackets: true,
   styleActiveLine: true,
});
function showResult(message, estado) {
   // Checa se já existe a caixa, se sim, remove (para atualizar)
   const existingBox = document.getElementById("resultado");
   if (existingBox) existingBox.remove();

   if (!message) {
      // Se não tem mensagem, não cria nada (não mostra caixa)
      return;
   }

   const resultBox = document.createElement("div");
   resultBox.id = "resultado";

   // Classes para estilo (exemplo: erro ou sucesso)
   resultBox.className = `resultado ${estado}`;
   resultBox.textContent = message;

   // Insere após o editor
   const editorSection = document.querySelector(".editor");
   editorSection.appendChild(resultBox);
}
document.getElementById("enviar").addEventListener("click", () => {
   const codigo = editor.getValue();

   try {
      const wrappedCode = `
        ${codigo}
        resultado = ${desafio.testeFuncao};
      `;

      let resultado;
      eval(wrappedCode);

      if (resultado === desafio.resultadoEsperado) {
         showResult("✅ Resposta correta!", "sucesso");
      } else {
         showResult(
            `❌ Resposta incorreta. Resultado: ${desafio.resultadoEsperado}`,
            "aviso"
         );
      }
   } catch (e) {
      showResult(`❌ Erro ao executar o código:${e.message}`, "erro");
   }
});
