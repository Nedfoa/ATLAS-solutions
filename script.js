// ============================================================
// ATLAS SOLUTIONS — interações da página
// ============================================================

// Menu responsivo: abre/fecha a navegação em telas pequenas.
const botaoMenu = document.querySelector('.menu-toggle');
const linksNavegacao = document.querySelector('.nav-links');

botaoMenu?.addEventListener('click', () => {
  const menuAberto = linksNavegacao.classList.toggle('open');
  botaoMenu.setAttribute('aria-expanded', String(menuAberto));
});

// Fecha o menu móvel depois que uma seção é escolhida.
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => linksNavegacao?.classList.remove('open'));
});

// Marca no menu a seção que está mais próxima do topo da tela.
const secoes = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];
function atualizarLinkAtivo() {
  const posicaoAtual = window.scrollY + 150;
  let secaoAtual = secoes[0]?.id;
  secoes.forEach(secao => {
    if (posicaoAtual >= secao.offsetTop) secaoAtual = secao.id;
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${secaoAtual}`);
  });
}
window.addEventListener('scroll', atualizarLinkAtivo, { passive: true });
atualizarLinkAtivo();

// Anima elementos suavemente quando eles entram na área visível.
if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(elemento => observador.observe(elemento));
} else {
  document.querySelectorAll('.reveal').forEach(elemento => elemento.classList.add('visible'));
}

// Atualiza automaticamente o ano exibido no rodapé.
const ano = document.getElementById('year');
if (ano) ano.textContent = new Date().getFullYear();

// O formulário é apenas demonstrativo até ser conectado a uma API ou serviço de e-mail.
document.getElementById('contactForm')?.addEventListener('submit', evento => {
  evento.preventDefault();
  const formulario = evento.currentTarget;
  const aviso = document.getElementById('formNote');
  if (aviso) aviso.textContent = 'Mensagem preparada! Conecte este formulário ao backend ou serviço de e-mail da ATLAS.';
  formulario.reset();
});


// Carrossel do Portal Orelha: navegação por setas e indicadores.
document.querySelectorAll('[data-carrossel]').forEach(carrossel => {
  const slides = [...carrossel.querySelectorAll('.orelha-slide')];
  const botaoAnterior = carrossel.querySelector('[data-anterior]');
  const botaoProximo = carrossel.querySelector('[data-proxima]');
  const indicadores = carrossel.querySelector('[data-indicadores]');
  let indiceAtual = 0;

  // Cria automaticamente um indicador para cada imagem cadastrada no HTML.
  slides.forEach((slide, indice) => {
    const indicador = document.createElement('button');
    indicador.type = 'button';
    indicador.className = 'orelha-indicador';
    indicador.setAttribute('aria-label', `Mostrar imagem ${indice + 1}`);
    indicador.addEventListener('click', () => mostrarSlide(indice));
    indicadores.appendChild(indicador);
  });

  const botoesIndicadores = [...indicadores.querySelectorAll('.orelha-indicador')];

  function mostrarSlide(novoIndice) {
    indiceAtual = (novoIndice + slides.length) % slides.length;
    slides.forEach((slide, indice) => {
      const ativo = indice === indiceAtual;
      slide.classList.toggle('ativa', ativo);
      slide.setAttribute('aria-hidden', String(!ativo));
      botoesIndicadores[indice].classList.toggle('ativa', ativo);
      botoesIndicadores[indice].setAttribute('aria-current', ativo ? 'true' : 'false');
    });
  }

  botaoAnterior?.addEventListener('click', () => mostrarSlide(indiceAtual - 1));
  botaoProximo?.addEventListener('click', () => mostrarSlide(indiceAtual + 1));
  mostrarSlide(0);
});


