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

## Photos / captures
Les images sont déjà intégrées :
- `assets/profile.jpg` — photo de profil (hero)
- `assets/projects/kasa.jpg` et `assets/projects/mvg.jpg` — captures de projets

Pour les remplacer, dépose tes propres fichiers (mêmes noms) dans `assets/`.

## Logos
Bibliothèque d'icônes SVG inline dans `index.html` (balise `<svg>` en haut du `<body>`),
réutilisée via `<use href="#icon-...">`. Logos fournis : HTML5, CSS3, JavaScript, Sass,
React, Node.js, Express, MongoDB, VS Code, Git/GitHub, Notion, Figma, LinkedIn, email.
Les éléments sans logo officiel (API REST, JSON, Responsive, Accessibilité, SEO) utilisent
un point générique.

## Fiches projet
Chaque projet affiche une information de base (visuel, titre, intro, stack, lien du dépôt).
Un bouton « En savoir plus » déplie les détails complets en 6 parties (Contexte, Objectifs,
Stack technique, Compétences développées, Résultats et impact, Perspectives d'amélioration).
Implémenté avec l'élément natif `<details>`/`<summary>` : accessible au clavier, sans JavaScript.

## Formulaire de contact
Le formulaire envoie un **email réel** sans backend, via [FormSubmit](https://formsubmit.co).
Le message arrive dans la boîte `Louis.Coulongeon2106@gmail.com`.

**Mode d'envoi** : POST de formulaire classique (attribut `action` HTML) avec redirection
vers `merci.html` (champ `_next`). Le champ `_next` doit être une URL **absolue**
(sans quoi FormSubmit affiche l'erreur « Form should POST ») : il est calculé
automatiquement en JS à partir de l'URL courante. Le captcha intégré de FormSubmit
est désactivé (`_captcha=false`) et l'objet de l'email est personnalisé en JS.

> L'endpoint AJAX (`fetch`) de FormSubmit est protégé par Cloudflare et bloque les requêtes
> programmatiques : on utilise donc un POST classique, que le navigateur résout tout seul.

**Activation (une seule fois)** : au tout premier envoi, FormSubmit envoie un email de
confirmation à cette adresse. Clique sur le lien qu'il contient pour activer le formulaire.
Ensuite, tous les envois fonctionnent automatiquement.

Pour changer l'adresse destinataire, modifie l'attribut `action` du formulaire dans `index.html`.

## SEO & partage social
- Balises `<title>`, `meta description`, `meta keywords`, `lang="fr"` présentes.
- Favicon SVG (`assets/favicon.svg`).
- Balises Open Graph / Twitter Card pour le partage LinkedIn (penser à mettre à jour
  `og:url` et `og:image` avec l'URL définitive une fois publié).

## Crédits
- Logos des technologies : [Simple Icons](https://simpleicons.org) (licence CC0).
- Police : [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts, licence OFL).
- Formulaire : [FormSubmit](https://formsubmit.co) (gratuit, sans inscription).

## Déploiement (GitHub Pages)
1. Pousse ce dossier à la racine du dépôt (branche `main`).
2. Repo → Settings → Pages → Source : `main` / dossier racine.
3. Le site sera disponible sur `https://scoopote.github.io/<nom-du-depot>/`.
