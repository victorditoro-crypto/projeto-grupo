// Aguarda carregar tudo
document.addEventListener("DOMContentLoaded", () => {
  ativarBusca();
  scrollSuave();
  destacarMenu();
  botaoTopo();
  animarElementos();
});


// 🔎 BUSCA
function ativarBusca() {
  const input = document.getElementById("busca");
  if (!input) return;

  input.addEventListener("keyup", function () {
    const texto = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const conteudo = card.innerText.toLowerCase();
      card.style.display = conteudo.includes(texto) ? "block" : "none";
    });
  });
}


// 🔽 SCROLL SUAVE
function scrollSuave() {
  const links = document.querySelectorAll("nav a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const destino = document.querySelector(this.getAttribute("href"));

      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}


// 📌 MENU ATIVO
function destacarMenu() {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let atual = "";

    sections.forEach(section => {
      const topo = section.offsetTop - 120;
      if (scrollY >= topo) {
        atual = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("ativo");
      if (link.getAttribute("href") === "#" + atual) {
        link.classList.add("ativo");
      }
    });
  });
}


// ⬆ BOTÃO VOLTAR AO TOPO
function botaoTopo() {
  const btn = document.createElement("button");
  btn.innerText = "⬆";
  btn.id = "btnTopo";
  document.body.appendChild(btn);

  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.padding = "10px";
  btn.style.border = "none";
  btn.style.borderRadius = "50%";
  btn.style.background = "#38ada9";
  btn.style.color = "white";
  btn.style.cursor = "pointer";
  btn.style.display = "none";

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// ✨ ANIMAÇÃO DOS ELEMENTOS
function animarElementos() {
  const elementos = document.querySelectorAll(".card, .tag");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.5s";

    observer.observe(el);
  });
}
