document.addEventListener('DOMContentLoaded', function () {
  const botaoAcess = document.getElementById('btn-acessibilidade');
  const listaAcess = document.getElementById('lista-acessibilidade');
  const aumentarFonte = document.getElementById('mais-fonte');
  const diminuirFonte = document.getElementById('menos-fonte');
  const botaoContraste = document.getElementById('contraste');

  // Validação rápida: se algo não existir, avisa no console e sai
  if (!(botaoAcess && listaAcess && aumentarFonte && diminuirFonte && botaoContraste)) {
    console.warn('Acessibilidade: verifique os IDs no HTML (btn-acessibilidade, lista-acessibilidade, mais-fonte, menos-fonte, contraste).');
    return;
  }

  // Abrir/fechar lista de opções
  botaoAcess.addEventListener('click', function () {
    listaAcess.classList.toggle('escondido');
    const ativo = botaoAcess.getAttribute('aria-expanded') === 'true';
    botaoAcess.setAttribute('aria-expanded', String(!ativo));
  });

  // ----- Controle de fonte (agora no :root/html, não no body) -----
  // Usar % deixa tudo que usa rem escalar junto com Bootstrap
  let escala = 100; // começa em 100% (padrão)
  const aplicarFonte = () => {
    document.documentElement.style.fontSize = `${escala}%`; // altera o <html>
  };

  aumentarFonte.addEventListener('click', function () {
    escala = Math.min(escala + 10, 200); // limite máx 200%
    aplicarFonte();
  });

  diminuirFonte.addEventListener('click', function () {
    escala = Math.max(escala - 10, 70); // limite mín 70%
    aplicarFonte();
  });

  // ----- Contraste -----
  botaoContraste.addEventListener('click', function () {
    document.body.classList.toggle('modo-contraste');
  });
});

// Animações com ScrollReveal (mantive igual)
try {
  ScrollReveal().reveal('#inicio', { delay: 400 });
  ScrollReveal().reveal('#historia', { delay: 400 });
  ScrollReveal().reveal('#galeria', { delay: 400 });
  ScrollReveal().reveal('#contato', { delay: 400 });
} catch (e) {
  
  console.warn('ScrollReveal não disponível:', e);
}
