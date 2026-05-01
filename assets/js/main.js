// Dados institucionais (preencher com os dados reais do estatuto)
const ORG_DATA = {
  nome: "Aspirantes",
  cnpj: "00.000.000/0001-00",
  sede: "Cidade/UF",
  fundacao: "00/00/0000",
  missao: "Promover desenvolvimento integral de jovens em situação de vulnerabilidade social.",
  visao: "Ser referência nacional em transformação social por meio da educação e do esporte.",
  valores: "Ética, inclusão, disciplina, diversidade, excelência e transparência."
};

// Preenche campos com data-org
Object.entries(ORG_DATA).forEach(([key, value]) => {
  document.querySelectorAll(`[data-org="${key}"]`).forEach(el => {
    el.textContent = value;
  });
});

// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();

// Header ao rolar
const header = document.querySelector(".header");
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 12);
  toTop.classList.toggle("show", y > 420);
});

// Voltar ao topo
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Counters
const counters = document.querySelectorAll("[data-counter]");
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.counter);
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value.toLocaleString("pt-BR");
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString("pt-BR");
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.4 });

counters.forEach(c => counterObserver.observe(c));
