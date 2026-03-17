const elementos = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elementos.forEach((el) => observer.observe(el));

function animarNumero(id, alvo, sufixo, duracao = 1500) {
  const elemento = document.getElementById(id);
  let inicio = 0;
  const incremento = alvo / (duracao / 16);

  function atualizar() {
    inicio += incremento;

    if (inicio < alvo) {
      elemento.textContent = Math.floor(inicio) + sufixo;
      requestAnimationFrame(atualizar);
    } else {
      elemento.textContent = alvo + sufixo;
    }
  }

  atualizar();
}

window.addEventListener('load', () => {
  animarNumero('num1', 40, '%');
  animarNumero('num2', 12, 'h');
  animarNumero('num3', 60, '%');
  animarNumero('num4', 90, '%');
});

const form = document.getElementById('contactForm');
const statusMensagem = document.getElementById('statusMensagem');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  statusMensagem.innerHTML = `Obrigado, <strong>${nome}</strong>! Sua mensagem foi enviada com sucesso.`;
  form.reset();
});