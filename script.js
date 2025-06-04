const challenges = [
   {
      title: "Soma de Dois Números",
      description:
         "Dado um array de inteiros, retorne os índices de dois números que somam um alvo.",
   },
   {
      title: "Palíndromo",
      description:
         "Verifique se uma string é um palíndromo, desconsiderando espaços e maiúsculas.",
   },
   {
      title: "Fatorial Recursivo",
      description:
         "Calcule o fatorial de um número inteiro utilizando recursão.",
   },
];

const container = document.getElementById("challengeList");

challenges.forEach((challenge) => {
   const card = document.createElement("div");
   card.className = "challenge-card";

   card.innerHTML = `
      <h3>${challenge.title}</h3>
      <p>${challenge.description}</p>
      <button onclick="startChallenge('${challenge.title}')">Começar</button>
    `;

   container.appendChild(card);
});

function startChallenge(title) {
   alert(`Abrindo o desafio: ${title}`);
}

// Abrir e fechar modal
const modal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.getElementById("closeModal");

loginBtn.onclick = () => {
   modal.style.display = "flex";
};

closeBtn.onclick = () => {
   modal.style.display = "none";
};

window.onclick = function (event) {
   if (event.target === modal) {
      modal.style.display = "none";
   }
};

// Alternar abas
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
   tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
   });
});

function startChallenge(title) {
  const encodedTitle = encodeURIComponent(title);
  window.location.href = `desafio.html?titulo=${encodedTitle}`;
}
