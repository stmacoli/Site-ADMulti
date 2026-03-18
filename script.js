const elementos = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elementos.forEach((el) => observer.observe(el));



const form = document.getElementById('contactForm');
const statusMensagem = document.getElementById('statusMensagem');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  statusMensagem.innerHTML = `Obrigado, <strong>${nome}</strong>! Sua mensagem foi enviada com sucesso.`;
  form.reset();
});