# Portfolio — Louis Coulongeon

Portfolio développeur web junior (HTML / CSS / JavaScript, sans dépendance).

## Structure

```
portfolio/
├─ index.html            # Structure (Accueil, À propos, Compétences, Projets, Parcours, Contact)
├─ merci.html            # Page de confirmation après envoi du formulaire
├─ css/
│  ├─ base.css           # Variables, reset, typo
│  ├─ layout.css         # Container, sections, header/footer
│  ├─ components.css     # Logo, nav, boutons
│  ├─ sections.css       # Styles de chaque section + formulaire + icônes
│  └─ responsive.css     # Media queries
├─ js/
│  └─ main.js            # Menu mobile, scroll-spy, validation du formulaire
└─ assets/
   ├─ favicon.svg        # Favicon (monogramme LC)
   ├─ profile.jpg        # Photo de profil (hero)
   └─ projects/
      ├─ kasa.jpg         # Capture du projet Kasa
      └─ mvg.jpg          # Capture du projet Mon Vieux Grimoire
```

## Logos
Bibliothèque d'icônes SVG inline dans `index.html` (balise `<svg>` en haut du `<body>`),
réutilisée via `<use href="#icon-...">`. Logos fournis : HTML5, CSS3, JavaScript, Sass,
React, Node.js, Express, MongoDB, VS Code, Git/GitHub, Notion, Figma, LinkedIn, email.
Les éléments sans logo officiel (API REST, JSON, Responsive, Accessibilité, SEO) utilisent
un point générique.

## SEO & partage social
- Balises `<title>`, `meta description`, `meta keywords`, `lang="fr"` présentes.
- Favicon SVG (`assets/favicon.svg`).
- Balises Open Graph / Twitter Card pour le partage LinkedIn (penser à mettre à jour
  `og:url` et `og:image` avec l'URL définitive une fois publié).

## Crédits
- Logos des technologies : [Simple Icons](https://simpleicons.org) (licence CC0).
- Police : [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts, licence OFL).
- Formulaire : [FormSubmit](https://formsubmit.co) (gratuit, sans inscription).