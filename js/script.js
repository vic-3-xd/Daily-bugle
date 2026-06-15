/* Daily Bugle - Script principal */

const NOTICIAS = [
  {
    id: 'spiderman-vs-buitre',
    tag: 'EXCLUSIVA',
    img: '/img/Spiderman 2.jpeg',
    svg: null,
    titulo: 'Spider-Man detiene un robo en el Midtown Bank',
    resumen: 'El lanzarredes frustró un asalto perpetrado por el Buitre. Testigos afirman que el héroe apareció de la nada y ató al villano con telarañas.',
    contenido: 'El enmascarado, conocido popularmente como Spider-Man, frustró esta mañana un asalto al Midtown National Bank perpetrado por Adrian Toomes, alias el Buitre, vestido con su traje con alas mecánicas. Según testigos, el héroe apareció de la nada en el techo del banco y descendió balanceándose con sus redes. Toomes fue atado y dejado para la policía, que llegó minutos después. Este es el tercer enfrentamiento público entre ambos en lo que va del mes.',
    fecha: '5 Junio 2026',
    autor: 'Peter Parker',
    keywords: ['spiderman', 'buitre', 'toomes', 'banco', 'robo']
  },
  {
    id: 'buitre-fuga-aire',
    tag: 'Alerta',
    img: '/img/El buitre.avif',
    svg: null,
    titulo: 'El Buitre sobrevuela Manhattan: Toomes planea su golpe más grande',
    resumen: 'Adrian Toomes fue avistado sobrevolando la ciudad en un nuevo traje alado. Las autoridades temen que prepare un ataque coordinado contra la ciudad.',
    contenido: 'Adrian Toomes, el criminal conocido como el Buitre, ha sido avistado en múltiples ocasiones durante las últimas 48 horas sobrevolando Manhattan a baja altura. Testigos lo describen portando un traje alado mejorado, con componentes tecnológicos que nunca antes se le habían visto. Fuentes del Departamento de Policía de Nueva York informaron que Toomes parece estar realizando reconocimientos aéreos de diversos puntos estratégicos de la ciudad, incluyendo el Banco de la Reserva Federal y varios museos de alto perfil. "Está planeando algo grande", declaró una fuente anónima. "Nunca lo habíamos visto tan metódico". Spider-Man habría sido visto siguiéndolo desde los tejados, aunque no se ha producido enfrentamiento directo.',
    fecha: '11 Junio 2026',
    autor: 'J. Jonah Jameson',
    keywords: ['buitre', 'toomes', 'vuelo', 'manhattan', 'reconocimiento']
  },
  {
    id: 'duende-verde-brooklyn',
    tag: 'Alerta',
    img: '/img/Duende verde.jpg',
    svg: null,
    titulo: 'Duende Verde ataca el puente de Brooklyn',
    resumen: 'Norman Osborn, en su identidad criminal, lanzó bombas de calabaza desde su planeador. El puente permanece cerrado.',
    contenido: 'Una serie de explosiones sacudieron el puente de Brooklyn en horas de la madrugada. Testigos reportaron la presencia de un aerodeslizador verde volando entre las torres. Las autoridades confirman que se trata de Norman Osborn, cuya fortuna familiar en Industrias Oscorp no ha logrado ocultar sus actividades criminales. El tráfico permanece suspendido y se recomienda usar rutas alternativas.',
    fecha: '4 Junio 2026',
    autor: 'J. Jonah Jameson',
    keywords: ['duende', 'verde', 'osborn', 'oscorp', 'puente', 'brooklyn']
  },
  {
    id: 'venom-amenaza',
    tag: 'Peligro Extremo',
    img: '/img/Venom.jpg',
    svg: null,
    titulo: 'Venom amenaza con destruir la ciudad',
    resumen: 'El simbionte, ahora en un nuevo huésped, promete "limpiar" Nueva York de criminales. Las autoridades están en alerta máxima.',
    contenido: 'El simbionte alienígena conocido como Venom ha sido avistado en múltiples ocasiones en los muelles de la ciudad. Su nuevo huésped, cuya identidad aún se desconoce, ha publicado un mensaje en redes sociales amenazando con "limpiar" Nueva York de lo que él llama "la escoria". El alcalde Wilson Fisk ha ordenado un operativo especial.',
    fecha: '3 Junio 2026',
    autor: 'Robbie Robertson',
    keywords: ['venom', 'simbionte', 'fisk', 'muelles']
  },
  {
    id: 'doc-ock-escapa',
    tag: 'Se Busca',
    img: '/img/Doctor octopus.avif',
    svg: null,
    titulo: 'Doctor Octopus: Fuga del penal de Ryker',
    resumen: 'Otto Octavius escapó usando sus brazos mecánicos. La policía cree que buscará reunirse con los Seis Siniestros.',
    contenido: 'Otto Octavius, conocido criminal conocido como Doctor Octopus, logró escapar esta madrugada del penal de Ryker utilizando sus cuatro brazos mecánicos de titanio. Se trata de la segunda fuga en menos de un año. Fuentes policiales creen que podría estar reuniendo a un grupo de villanos conocidos como los Seis Siniestros para un gran golpe.',
    fecha: '2 Junio 2026',
    autor: 'Betty Brant',
    keywords: ['octopus', 'doc ock', 'octavius', 'ryker', 'fuga', 'seis siniestros']
  },
  {
    id: 'hombre-arena-robo',
    tag: 'Robo',
    img: '/img/Hombre de arena.avif',
    svg: null,
    titulo: 'Hombre de Arena asalta joyería en el centro',
    resumen: 'Flint Marko transformó su cuerpo en arena para penetrar la bóveda. Se estima un botín de 2 millones de dólares.',
    contenido: 'Flint Marko, el conocido criminal con la habilidad de transformar su cuerpo en arena, logró penetrar esta madrugada en la joyería Diamond District utilizando su forma de arena para colarse por las rendijas de la bóveda. El botín se estima en 2 millones de dólares en diamantes y oro.',
    fecha: '1 Junio 2026',
    autor: 'Ned Leeds',
    keywords: ['arena', 'marko', 'joyeria', 'robo']
  },
  {
    id: 'lagarto-alcantarillas',
    tag: 'Ciencia',
    img: '/img/Lagarto.avif',
    svg: null,
    titulo: 'El Lagarto: Una amenaza en las alcantarillas',
    resumen: 'El Dr. Curt Connors, transformado en Lagarto, ha establecido un nido en el sistema de alcantarillado. Spider-Man fue visto entrando a buscarlo.',
    contenido: 'El Dr. Curt Connors, ex investigador de la Universidad Empire State, ha sido visto en su forma de Lagarto en el sistema de alcantarillado de Manhattan. Según fuentes, ha establecido un nido y estaría intentando crear más seres como él.',
    fecha: '30 Mayo 2026',
    autor: 'Peter Parker',
    keywords: ['lagarto', 'connors', 'alcantarillas', 'lagartija']
  },
  {
    id: 'electro-apagon',
    tag: 'Electrocutado',
    img: '/img/Electro.jpg',
    svg: null,
    titulo: 'Electro causa apagón en Manhattan',
    resumen: 'Max Dillon, convertido en Electro, sobrecargó la red eléctrica. Miles de personas quedaron sin luz por varias horas.',
    contenido: 'Un apagón masivo afectó a gran parte de Manhattan luego de que Max Dillon, transformado en Electro, sobrecargara la red eléctrica de la ciudad. El héroe Spider-Man apareció en la zona y logró contener a Dillon después de una espectacular batalla en las líneas de alta tensión.',
    fecha: '28 Mayo 2026',
    autor: 'Gloria Grant',
    keywords: ['electro', 'dillon', 'apagon', 'manhattan', 'electricidad']
  },
  {
    id: 'escorpion-jameson',
    tag: 'Controversia',
    img: '/img/Scorpion.jpg',
    svg: null,
    titulo: 'Escorpión: ¿Creación de Jameson?',
    resumen: 'Nuevas pruebas sugieren que Mac Gargan, el Escorpión, fue creado con fondos del Daily Bugle para desenmascarar a Spider-Man.',
    contenido: 'Documentos obtenidos por este periódico en exclusiva revelan que el editor J. Jonah Jameson habría financiado secretamente el traje del Escorpión, entregado al criminal Mac Gargan, con el único propósito de desenmascarar y destruir a Spider-Man. Jameson no ha querido hacer comentarios.',
    fecha: '26 Mayo 2026',
    autor: 'Ben Urich',
    keywords: ['escorpion', 'gargan', 'jameson', 'controversia']
  },
  {
    id: 'mysterio-ataque-quintuple',
    tag: 'EXCLUSIVA',
    img: '/img/Mysterio.jpg',
    svg: null,
    titulo: 'Mysterio desata el caos: Ilusiones masivas aterrorizan Times Square',
    resumen: 'Quentin Beck, conocido como Mysterio, sumió Times Square en una pesadilla de ilusiones. Spider-Man lucha por distinguir la realidad del engaño.',
    contenido: 'Anoche, Times Square se convirtió en el escenario de un espectáculo aterrador cuando Quentin Beck, el criminal conocido como Mysterio, desató una serie de ilusiones masivas que paralizaron el corazón de Manhattan. Los transeúntes reportaron haber visto criaturas monstruosas surgiendo de los carteles publicitarios, el suelo abriéndose en grietas de fuego y una réplica gigante de Spider-Man atacando a la multitud. "No sabíamos qué era real", declaró un testigo. Beck, un exespecialista en efectos especiales de Hollywood, utilizó una combinación de drones, proyecciones holográficas y gas alucinógeno para crear el caos. Spider-Man llegó al lugar pero fue visto forcejeando con ilusiones, golpeando el aire y a transeúntes desprevenidos. "El lanzarredes está perdiendo el juicio", comentó J. Jonah Jameson desde la redacción del Bugle.',
    fecha: '12 Junio 2026',
    autor: 'Robbie Robertson',
    keywords: ['mysterio', 'beck', 'times square', 'ilusiones', 'caos']
  },
  {
    id: 'daredevil-punisher',
    tag: 'EXCLUSIVA',
    img: '/img/daredevilypunisher.jpg',
    svg: null,
    titulo: 'Daredevil y Punisher: Alianza inesperada en los muelles',
    resumen: 'El Diablo de Hell\'s Kitchen y el justiciero Frank Castle fueron vistos combatiendo juntos una red de tráfico de armas. Testigos describen una tregua violenta pero efectiva.',
    contenido: 'En una noche que pocos olvidarán en Hell\'s Kitchen, dos figuras antagónicas de la justicia callejera fueron vistas operando juntas. Matt Murdock —el abogado ciego que muchos sospechan es Daredevil— y Frank Castle, el temido Punisher, unieron fuerzas para desmantelar una operación de tráfico de armas del crimen organizado que operaba desde los muelles del oeste. Según testigos presenciales, Castle proporcionó la potencia de fuego mientras Daredevil se movía entre las sombras con su agilidad característica. La tregua, aunque tensa, resultó en la captura de más de una docena de miembros de la mafia y el decomiso de un arsenal suficiente para armar un pequeño ejército. Karen Page, testigo y fuente cercana a ambos vigilantes, comentó: "No se gustan, pero comparten un enemigo común. Por ahora, eso es suficiente".',
    fecha: '9 Junio 2026',
    autor: 'Karen Page',
    keywords: ['daredevil', 'punisher', 'murdock', 'castle', 'hell\'s kitchen', 'muelles', 'armas']
  }
];

const SVG_VILLANOS = {};

function getFechaHoy() {
  const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date().toLocaleDateString('es-ES', opciones);
}

function renderHeader(paginaActiva) {
  return `
  <header>
    <div class="top-bar">
      <span>Nueva York - Edición Metropolitana</span>
      <span>¡EXCLUSIVA! &mdash; ${getFechaHoy()}</span>
    </div>
    <div class="masthead">
      <div class="masthead-left">
        <a href="/index.html" aria-label="Ir al inicio" class="logo-link">
          <img src="/img/logo.svg" alt="Daily Bugle Logo" class="logo-img">
        </a>
        <div class="masthead-info">
          <p>Fundado en 1898</p>
          <p class="propietario">Propietario: J. Jonah Jameson</p>
        </div>
      </div>
      <div class="masthead-center">
        <h1>Daily Bugle</h1>
        <p class="tagline">"La verdad sobre los superhéroes de Nueva York"</p>
      </div>
      <div class="masthead-right">
        <p>Edición Extra</p>
        <p class="precio">Precio: 25¢</p>
      </div>
    </div>
    <nav aria-label="Navegación principal">
      <a href="/index.html"${paginaActiva === 'inicio' ? ' class="active" aria-current="page"' : ''}>Inicio</a>
      <a href="/html/noticias.html"${paginaActiva === 'noticias' ? ' class="active" aria-current="page"' : ''}>Noticias</a>
      <a href="/html/contacto.html"${paginaActiva === 'contacto' ? ' class="active" aria-current="page"' : ''}>Contacto</a>
      <a href="/html/registro.html"${paginaActiva === 'registro' ? ' class="active" aria-current="page"' : ''}>Registro</a>
    </nav>
  </header>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Daily Bugle</h3>
        <p>Complejo Príncipe de Gales &copy; 2026 - Nueva Imperial</p>
      </div>
    </div>
  </footer>`;
}

function getVillanoSVG(id) {
  if (SVG_VILLANOS[id]) return SVG_VILLANOS[id];
  return `<span>${NOTICIAS.find(n => n.svg === id)?.img || '📰'}</span>`;
}

function getImagen(noticia) {
  return `<img src="${noticia.img}" alt="${noticia.titulo}" loading="lazy" onerror="this.outerHTML='<div class=\\'img-fallback\\'>📰</div>'">`;
}

function renderNoticiaCard(noticia) {
  return `
    <article class="news-card">
      <a href="/html/noticia.html?id=${noticia.id}" class="news-card-link" aria-label="Leer: ${noticia.titulo}">
        <div class="news-img">${getImagen(noticia)}</div>
        <div class="news-content">
          <span class="news-tag">${noticia.tag}</span>
          <h3>${noticia.titulo}</h3>
          <p>${noticia.resumen}</p>
          <div class="news-footer">
            <span class="news-date">${noticia.fecha}</span>
            <span class="news-author">Por ${noticia.autor}</span>
          </div>
        </div>
      </a>
    </article>`;
}

function renderReportesCard(noticia) {
  return `
    <a href="/html/noticia.html?id=${noticia.id}" class="card card-link">
      <div class="card-badge">${noticia.tag}</div>
      <div class="card-villano">${getImagen(noticia)}</div>
      <h3>${noticia.titulo.split(':')[0]}</h3>
      <p>${noticia.resumen}</p>
      <span class="card-meta">${noticia.fecha} &mdash; Por ${noticia.autor}</span>
    </a>`;
}

function filtrarNoticias(termino) {
  const t = termino.toLowerCase().trim();
  if (!t) return NOTICIAS;
  return NOTICIAS.filter(n =>
    n.titulo.toLowerCase().includes(t) ||
    n.resumen.toLowerCase().includes(t) ||
    n.autor.toLowerCase().includes(t) ||
    (n.keywords || []).some(k => k.includes(t))
  );
}

function setupBuscador(inputId, resultadosId, destino) {
  const input = document.getElementById(inputId);
  const resultados = document.getElementById(resultadosId);
  if (!input || !resultados) return;

  function ejecutar() {
    const termino = input.value;
    if (destino === '/html/noticias.html') {
      const url = '/html/noticias.html?q=' + encodeURIComponent(termino);
      window.location.href = url;
    } else {
      mostrarResultados(termino);
    }
  }

  function mostrarResultados(termino) {
    const filtradas = filtrarNoticias(termino);
    if (filtradas.length === 0) {
      resultados.innerHTML = `<p class="no-resultados">No se encontraron noticias para "<strong>${termino}</strong>". Intenta con otro término.</p>`;
      return;
    }
    resultados.innerHTML = `<div class="news-grid">${filtradas.map(renderNoticiaCard).join('')}</div>`;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      ejecutar();
    }
  });

  const btn = input.parentElement.querySelector('button');
  if (btn) btn.addEventListener('click', ejecutar);
}

function getQueryParam(nombre) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nombre);
}

/* ========== ANIMACIONES JS ========== */

// Skeleton para news-grid
function mostrarSkeleton(gridId, cantidad = 6) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const skeletons = [];
  for (let i = 0; i < cantidad; i++) {
    skeletons.push(`
      <div class="skeleton-card">
        <div class="skeleton-img"></div>
        <div class="skeleton-content">
          <div class="skeleton-line tag"></div>
          <div class="skeleton-line title"></div>
          <div class="skeleton-line text"></div>
          <div class="skeleton-line text"></div>
          <div class="skeleton-line text-short"></div>
          <div class="skeleton-line footer"></div>
        </div>
      </div>
    `);
  }
  grid.innerHTML = skeletons.join('');
}

// Animar entrada de cards (stagger)
function animarCards(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  const cards = grid.children;
  Array.from(cards).forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 80);
  });
}

// Tilt 3D en cards (sigue al mouse)
function setupTilt(selector) {
  document.querySelectorAll(selector).forEach(card => {
    if (card.dataset.tiltSetup) return;
    card.dataset.tiltSetup = 'true';
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Typewriter effect en el placeholder del buscador
function setupTypewriter(inputId, frases, velocidad = 80, pausa = 2000) {
  const input = document.getElementById(inputId);
  if (!input) return;
  let fraseIdx = 0;
  let charIdx = 0;
  let borrando = false;
  let userTyping = false;
  let stopped = false;
  let cursorVisible = true;
  let currentText = '';

  function updatePlaceholder() {
    input.setAttribute('placeholder', currentText + (cursorVisible ? '|' : ''));
  }

  let blinkInterval = setInterval(() => {
    if (!userTyping && !stopped) {
      cursorVisible = !cursorVisible;
      updatePlaceholder();
    }
  }, 530);

  function tipear() {
    if (userTyping || stopped) return;
    cursorVisible = true;
    const fraseActual = frases[fraseIdx];
    if (!borrando) {
      currentText = fraseActual.substring(0, charIdx + 1);
      updatePlaceholder();
      charIdx++;
      if (charIdx === fraseActual.length) {
        setTimeout(() => { borrando = true; tipear(); }, pausa);
        return;
      }
    } else {
      currentText = fraseActual.substring(0, charIdx);
      updatePlaceholder();
      charIdx--;
      if (charIdx < 0) {
        borrando = false;
        charIdx = 0;
        fraseIdx = (fraseIdx + 1) % frases.length;
        setTimeout(tipear, 500);
        return;
      }
    }
    setTimeout(tipear, borrando ? velocidad / 2 : velocidad);
  }
  input.addEventListener('focus', () => {
    userTyping = true;
    input.setAttribute('placeholder', 'Buscar...');
  });
  input.addEventListener('blur', () => {
    userTyping = false;
    if (!stopped) setTimeout(tipear, 500);
  });
  setTimeout(() => { if (!userTyping) tipear(); }, 1500);
}

// Parallax en el hero
function setupParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const heroOverlay = hero.querySelector('.hero-overlay');
        if (heroOverlay) {
          if (scrolled < 800) {
            heroOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroOverlay.style.opacity = Math.max(0, 1 - scrolled / 600);
          } else {
            heroOverlay.style.transform = '';
            heroOverlay.style.opacity = '';
          }
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// Barra de progreso de lectura
function setupReadingProgress() {
  if (!document.querySelector('.noticia-detalle')) return;
  const bar = document.createElement('div');
  bar.className = 'reading-progress';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + '%';
  });
}

// IntersectionObserver: animaciones al hacer scroll
function setupScrollAnimations() {
  const elementos = document.querySelectorAll('.scroll-animate');
  if (!elementos.length || !('IntersectionObserver' in window)) {
    elementos.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  elementos.forEach(el => observer.observe(el));
}

// Botón "volver arriba" flotante
function setupScrollToTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-top-btn';
  btn.setAttribute('aria-label', 'Volver arriba');
  btn.innerHTML = '↑';
  btn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #c0392b;
    color: #fff;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 999;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    box-shadow: 0 4px 12px rgba(192, 57, 43, 0.4);
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      btn.style.opacity = '1';
      btn.style.transform = 'scale(1)';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'scale(0)';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.1) rotate(360deg)';
    btn.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1) rotate(0deg)';
    btn.style.transition = 'all 0.3s';
  });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  const headerSlot = document.getElementById('header-slot');
  const footerSlot = document.getElementById('footer-slot');
  const pagina = document.body.dataset.pagina || '';

  if (headerSlot) headerSlot.innerHTML = renderHeader(pagina);
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  // Activar animaciones globales
  setupParallax();
  setupScrollAnimations();
  setupScrollToTop();
  setupReadingProgress();
});
