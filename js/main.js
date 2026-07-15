const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const sections = document.querySelectorAll('main section[id]');

if (navToggle && siteNav) {
  navToggle.setAttribute('aria-expanded', 'false');

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    const isClickInsideNav = siteNav.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  });
}

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const currentLink = document.querySelector(`.site-nav a[href="#${id}"]`);

        if (entry.isIntersecting && currentLink) {
          navLinks.forEach((link) => link.classList.remove('is-active'));
          currentLink.classList.add('is-active');
        }
      });
    },
    {
      threshold: 0.45,
      rootMargin: '-20% 0px -35% 0px'
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/*
  Formulaire de contact
  ---------------------
  Envoi réel sans backend via FormSubmit (https://formsubmit.co).
  On utilise un POST de formulaire classique (attribut action HTML) plutôt
  qu'un appel AJAX fetch : l'endpoint AJAX de FormSubmit est protégé par
  Cloudflare, qui bloque les requêtes fetch (réponse 403). Le POST classique
  laisse le navigateur résoudre le défi Cloudflare, puis FormSubmit
  redirige vers la page de remerciement (champ _next).

  IMPORTANT (dépannage) :
  - _next DOIT être une URL absolue (avec http:// ou https://). Un chemin
    relatif comme "./merci.html" provoque l'erreur "Form should POST".
    On calcule donc l'URL absolue dynamiquement à partir de l'URL courante.
  - FormSubmit ne fonctionne pas si la page est ouverte en fichier local
    (file://). Il faut tester via un serveur (ex: localhost) ou après
    déploiement (GitHub Pages).
  - Au tout premier envoi, FormSubmit envoie un email de confirmation à
    Louis pour activer le formulaire. Cliquer sur le lien UNE seule fois ;
    ensuite, tous les envois arrivent automatiquement.
*/
const contactForm = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');
const formSubject = document.querySelector('#form-subject');
const formNext = contactForm
  ? contactForm.querySelector('input[name="_next"]')
  : null;
const submitButton = contactForm
  ? contactForm.querySelector('button[type="submit"]')
  : null;

// _next : URL absolue vers la page de remerciement (sinon erreur "Form should POST").
if (formNext) {
  try {
    formNext.value = new URL('./merci.html', window.location.href).href;
  } catch (error) {
    /* on conserve la valeur statique (URL absolue de secours) */
  }
}

function showNote(message, isError = false) {
  if (!formNote) return;
  formNote.textContent = message;
  formNote.classList.toggle('is-error', isError);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const data = new FormData(contactForm);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    const honey = (data.get('_honey') || '').toString().trim();

    // Honeypot : si rempli, c'est un bot -> on simule un envoi sans rien envoyer.
    if (honey) {
      event.preventDefault();
      showNote('Message envoyé, merci !');
      return;
    }

    if (!name || !email || !message) {
      event.preventDefault();
      showNote('Merci de remplir tous les champs.', true);
      return;
    }

    if (!isEmail(email)) {
      event.preventDefault();
      showNote("L'adresse email ne semble pas valide.", true);
      return;
    }

    // Tout est valide : on personnalise l'objet, puis on laisse le formulaire
    // se soumettre normalement (POST classique -> redirection vers merci.html).
    if (formSubject) {
      formSubject.value = `Message de ${name} — Portfolio`;
    }
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Envoi en cours…';
    }
    showNote('Envoi du message, redirection…');
  });
}
