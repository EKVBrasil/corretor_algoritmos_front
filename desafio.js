// Simulação de desafio (normalmente viria do backend ou URL)
const desafio = {
    titulo: "Soma de Dois Números",
    descricao: `
  Dado um array de inteiros nums e um inteiro alvo, retorne os índices dos dois números que somam o alvo.
  
  Exemplo:
  Entrada: nums = [2,7,11,15], alvo = 9
  Saída: [0,1]
  Explicação: nums[0] + nums[1] = 2 + 7 = 9
    `
  };
  
  document.getElementById("enunciado").innerHTML = `
    <h2>${desafio.titulo}</h2>
    <p>${desafio.descricao.replace(/\n/g, "<br>")}</p>
  `;
  
  document.getElementById("enviar").addEventListener("click", () => {
    const codigo = document.getElementById("codigo").value;
    if (codigo.trim() === "") {
      alert("Por favor, escreva algum código antes de enviar.");
      return;
    }
  
    alert("Código enviado!\n\n(Aqui você poderia processar ou avaliar a resposta.)");
  });
  
  // Cria o editor de código com CodeMirror
const editor = CodeMirror(document.getElementById("editor"), {
    mode: "javascript",
    theme: "default",
    lineNumbers: true,
    tabSize: 2,
  });

  document.getElementById("enviar").addEventListener("click", () => {
    const codigo = editor.getValue();
  
    try {
      // Desafio de exemplo: função soma(a, b)
      const wrappedCode = `
        ${codigo}
        resultado = soma(3, 4);
      `;
  
      let resultado;
      eval(wrappedCode);
  
      if (resultado === 7) {
        alert("✅ Resposta correta!");
      } else {
        alert(`❌ Resposta incorreta. Resultado: ${resultado}`);
      }
    } catch (e) {
      alert("❌ Erro ao executar o código:\n" + e.message);
    }
  });