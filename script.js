document.addEventListener('DOMContentLoaded', function () {
  const botaoAcess = document.getElementById('btn-acessibilidade');
  const listaAcess = document.getElementById('lista-acessibilidade');
  const aumentarFonte = document.getElementById('mais-fonte');
  const diminuirFonte = document.getElementById('menos-fonte');
  const botaoContraste = document.getElementById('contraste');

  
  if (!(botaoAcess && listaAcess && aumentarFonte && diminuirFonte && botaoContraste)) {
    console.warn('Acessibilidade: verifique os IDs no HTML (btn-acessibilidade, lista-acessibilidade, mais-fonte, menos-fonte, contraste).');
    return;
  }

 
  botaoAcess.addEventListener('click', function () {
    listaAcess.classList.toggle('escondido');
    const ativo = botaoAcess.getAttribute('aria-expanded') === 'true';
    botaoAcess.setAttribute('aria-expanded', String(!ativo));
  });

  
  let escala = 100; 
  const aplicarFonte = () => {
    document.documentElement.style.fontSize = `${escala}%`;
  };

  aumentarFonte.addEventListener('click', function () {
    escala = Math.min(escala + 10, 200);
    aplicarFonte();
  });

  diminuirFonte.addEventListener('click', function () {
    escala = Math.max(escala - 10, 70); 
    aplicarFonte();
  });

  
  botaoContraste.addEventListener('click', function () {
    document.body.classList.toggle('modo-contraste');
  });
});


try {
  ScrollReveal().reveal('#inicio', { delay: 400 });
  ScrollReveal().reveal('#historia', { delay: 400 });
  ScrollReveal().reveal('#galeria', { delay: 400 });
  ScrollReveal().reveal('#contato', { delay: 400 });
} catch (e) {
  
  console.warn('ScrollReveal não disponível:', e);
}

