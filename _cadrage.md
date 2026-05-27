# Cadrage — Barber Concept Nantes (Coiffeur / barbier)

> Projet n°13 du portfolio Ta Vitrine Locale · prompt 1/6 · validé le 2026-05-27.

---

## 1. Identité fictive figée

*(verbatim du prompt 1 — ne rien inventer en dehors)*

- **Nom commercial** : Barber Concept Nantes
- **Dirigeant** : Maxime Léon
- **Métier** : Coiffeur / barbier
- **Ville d'implantation** : Nantes (centre, quartier Decré)
- **Adresse** : 7 rue de Verdun, 44000 Nantes
- **Téléphone** : 02 40 99 18 47 *(fictif — préfixe réservé démo)*
- **Email** : contact@barber-concept-nantes.fr
- **Année de création** : 2019
- **Effectif** : Maxime + 2 collaborateurs
- **Certifications** : CAP coiffure + Brevet Professionnel coiffure
- **Spécificité** : Salon hybride coupe homme + barbier traditionnel (rasage à la lame, taille de barbe à la cire)
- **4 réalisations exemplaires** :
  1. Coupe + barbe sculptée pour un photographe nantais — 1h30
  2. Coloration + coupe pour un musicien avant tournage — 2h
  3. Coupe groupe mariage (5 hommes) avant cérémonie — matinée
  4. Initiation entretien barbe pour un client régulier — 45 min
- **3 villes maillage SEO** : Nantes · Saint-Herblain · Orvault

**Mention légale obligatoire (footer + page mentions) :**
> SIRET fictif — site de démonstration Ta Vitrine Locale. Toute ressemblance avec une entreprise existante est fortuite.

---

## 2. Lectures effectuées

**Brief métier `23-coiffeur-barbier.md`** — Le marché coiffeur est saturé (60 000+ salons en France) mais la prise de RDV en ligne reste un levier de conversion #1 (Planity, Treatwell). Quatre segments distincts : coupe femme classique, coloriste expert, barbier moderne, coiffeur à domicile. Barber Concept Nantes tombe pile sur le segment **barbier moderne** (panier 30-60 €, fréquence forte, clientèle masculine 25-55 ans). Le SEO local doit jouer sur le **long-tail** ("barbier centre-ville Nantes", "rasage à la lame Nantes") plutôt que sur "coiffeur Nantes" trop concurrentiel. Schemas critiques : `HairSalon` + `Service` + `FAQPage` + `BreadcrumbList`.

**3 fiches projets existantes (Pellier Électricité, Forno Errante, La Braise Nantaise)** — Le ton retenu pour les **fiches de cas portfolio** est : phrases courtes, vocabulaire métier concret, premier degré, ancrage Loire-Atlantique explicite, sections numérotées (`01 · Métier`, `02 · Objectifs`, `03 · UX/UI`, `04 · SEO local`, `05 · Technique`, `06 · Captures`, `07 · Résultat`). Les `<em>` dans les titres servent à isoler le mot-clé fort. **Important** : ce ton-là est pour la fiche projet à créer en prompt4 dans le site principal, **pas** pour le mini-site démo lui-même. Le mini-site, lui, parle comme un vrai salon nantais à ses clients.

**Compare slider (`index.html` 800-970, `styles.css` 6708-6880, `app.js` 1222-1365)** — Composant en 3 couches : `.compare__layer--after` (fond, z-index 1) + `.compare__layer--before` (par-dessus, masqué via `clip-path: inset(0 calc(100% - var(--split)) 0 0)`, z-index 2) + `.compare__handle` (curseur vertical en `position:absolute; left: var(--split)`, z-index 3). La variable CSS `--split` pilote l'animation. Le JS écoute Pointer Events sur tout le frame (pas juste le handle, pour UX naturelle) et gère ←/→/Home/End au clavier sur le handle. Version simplifiée à reprendre = **sans `startDiscovery`**, sans `[data-refonte-stage]`, sans `IntersectionObserver` — voir section 5.

**`projets.html` lignes 140-350** — Structure des cartes projet : `<a href="projets/{slug}/" class="project ..." data-tier="{artisan|commerce|resto|asso}">`. Pour Barber Concept Nantes, ce sera `data-tier="commerce"` (un salon est un commerce de services), N° 13, image `assets/projets/barber-concept-nantes.jpg`. Compteur à passer de `12 / 12` à `13 / 13` dans `data-count-display`.

---

## 3. Charte visuelle proposée

**Univers cible** : salon de quartier nantais, hybride coupe homme + barbier traditionnel. Inspiration : marbre noir, laiton vieilli, bois fumé, cuir tabac, miroirs encadrés, ambiance feutrée d'un fauteuil de barbier. À l'opposé du salon féminin pastel et du salon "tendance néon" — on vise une élégance masculine sobre, premier degré, pas grandiloquente.

| Élément             | Valeur                                                   | Justification                                                                                          |
|---------------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Couleur primaire    | `#14110E` — Charbon profond                              | Évoque le marbre noir des salons traditionnels. Ratio 14,7:1 sur crème → AAA texte normal.             |
| Couleur secondaire  | `#5A4A3C` — Brun cuir                                    | Rappelle les fauteuils de barbier en cuir tabac. Ratio 6,8:1 sur crème → AA confortable.               |
| Couleur accent      | `#B08542` — Laiton vieilli                               | Référence aux ciseaux, rasoirs et enseignes. Touche de chaleur sans tomber dans le doré criard.        |
| Fond principal      | `#F6F1E7` — Crème de craie                               | Plus chaud qu'un blanc pur, évoque la serviette chaude, le parchemin, le calme du salon.               |
| Fond alterné        | `#1C1814` — Charbon nuit                                 | Pour la section barbier "rituel" + footer. Crée un contraste fort avec le crème.                       |
| Texte principal     | `#14110E` sur crème · `#F6F1E7` sur charbon              | Hiérarchie nette, lecture longue sans fatigue.                                                         |
| Texte secondaire    | `#5A4A3C` sur crème · `#C7B89E` sur charbon              | Sous-titres, libellés, prix. Toujours AA.                                                              |
| Police titres       | **Fraunces** (Google Fonts, variable serif)              | Sérif moderne expressive : serifs marqués pour le côté "barbier classique", design 2021 pour ne pas faire daté. 1 seul fichier variable. |
| Police corps        | **Inter** (Google Fonts, sans-serif)                     | Lisibilité écran impeccable, pèse léger, neutre — laisse Fraunces tenir le caractère. 2 graisses suffisent (400/500). |
| Style boutons       | Coins peu arrondis (`6px`), pleins charbon ou bordure laiton. Pas d'ombre flottante, pas de gradient. | Cohérent avec un univers tactile, artisanal, sans effet "SaaS". |
| Style images        | Photos sur le vif (mains, lame, ciseaux, cou rasé, lumière chaude). Format ratio 4/5 pour les portraits, 16/10 pour les ambiances. Léger grain doux (filtre CSS `contrast(1.05) saturate(0.95)`) — pas de filtre noir & blanc systématique. | Fait "vrai métier", pas catalogue stock. |
| Iconographie        | Lignes fines `stroke-width: 1.4`, jamais d'icônes colorées. SVG inline.                              | Cohérent avec l'esprit gravure / enseigne.                                                              |

**Preconnect Google Fonts (à mettre dans `<head>`) :**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

---

## 4. Plan des 5-6 pages

### 1. `index.html` — Accueil

- **`<title>`** : `Barber Concept Nantes — coiffeur et barbier rue de Verdun` (58 car)
- **`<meta description>`** : `Coiffeur et barbier hybride à Nantes centre. Coupe homme, rasage à la lame, taille de barbe à la cire. 7 rue de Verdun, quartier Decré.` (143 car)
- **H1** : `Barber Concept Nantes — coupe homme et barbier traditionnel`
- **H2 prévus** (4) :
  - Un fauteuil, deux gestes : coupe homme + barbier
  - Les prestations que les habitués réservent
  - Maxime et l'équipe, rue de Verdun depuis 2019
  - Les dernières transformations
- **JSON-LD** : `HairSalon` (avec `address`, `geo`, `openingHoursSpecification`, `priceRange`) + `BreadcrumbList`
- **CTA principal** : "Prendre rendez-vous" → `contact.html#rdv`
- **Lien interne sortant le plus important** : vers `services.html` (catalogue détaillé)

### 2. `services.html` — Catalogue prestations

- **`<title>`** : `Prestations coupe, barbe, rasage — Barber Concept Nantes` (55 car)
- **`<meta description>`** : `Coupe homme, taille de barbe à la cire, rasage à la lame, coloration. Tarifs et durées au salon Barber Concept Nantes, rue de Verdun.` (140 car)
- **H1** : `Nos prestations coupe homme et barbier`
- **H2 prévus** (4) :
  - Coupe homme et dégradé
  - Barbier traditionnel — rasage à la lame, taille à la cire
  - Coloration et soins
  - Forfaits et durées
- **JSON-LD** : `Service` (un objet par prestation, ~4-6) + `BreadcrumbList`
- **CTA principal** : "Réserver un créneau" → `contact.html#rdv`
- **Lien interne sortant le plus important** : vers `realisations.html` (preuve visuelle)

### 3. `zone-intervention.html` — Localisation

- **`<title>`** : `Coiffeur et barbier à Nantes, Saint-Herblain et Orvault` (56 car)
- **`<meta description>`** : `Salon Barber Concept rue de Verdun à Nantes, quartier Decré. Clientèle de Nantes, Saint-Herblain et Orvault accueillie sur RDV.` (133 car)
- **H1** : `Un salon au cœur de Nantes, ouvert aux habitués de Saint-Herblain et Orvault`
- **H2 prévus** (4) :
  - Nantes centre — rue de Verdun, quartier Decré
  - Saint-Herblain — la clientèle de l'ouest nantais
  - Orvault — habitués du nord de Nantes
  - Venir au salon — tram, vélo, parking
- **JSON-LD** : `Place` (avec `geo`) + `BreadcrumbList`
- **CTA principal** : "Voir les horaires" → `contact.html#horaires`
- **Lien interne sortant le plus important** : vers `contact.html`

### 4. `realisations.html` — Avant/Après (compare slider)

- **`<title>`** : `Avant / après — 4 transformations · Barber Concept Nantes` (57 car)
- **`<meta description>`** : `Quatre transformations récentes coupe et barbe au salon Barber Concept Nantes : photographe, musicien, mariage, entretien régulier.` (134 car)
- **H1** : `Avant / après — quatre transformations récentes`
- **H2 prévus** (4, une par compare slider) :
  - Coupe + barbe sculptée — photographe nantais (1h30)
  - Coloration + coupe — musicien avant tournage (2h)
  - Coupe groupe mariage — 5 hommes avant cérémonie
  - Initiation entretien barbe — client régulier (45 min)
- **JSON-LD** : `ImageGallery` + `BreadcrumbList`
- **CTA principal** : "Réserver votre rendez-vous" → `contact.html#rdv`
- **Lien interne sortant le plus important** : vers `services.html`

### 5. `a-propos.html` — Maxime + équipe

- **`<title>`** : `Maxime Léon et l'équipe — Barber Concept Nantes` (51 car)
- **`<meta description>`** : `Maxime Léon, barbier diplômé CAP + BP, a ouvert Barber Concept en 2019 à Nantes. Découvrez l'équipe, le salon et l'esprit de la maison.` (139 car)
- **H1** : `Maxime Léon, l'équipe et l'esprit du salon`
- **H2 prévus** (4) :
  - Maxime, dix ans de coupe homme et barbier
  - L'équipe — deux collaborateurs
  - Le salon, rue de Verdun
  - Ce qu'on aime, ce qu'on refuse
- **JSON-LD** : `Person` (Maxime Léon, avec `jobTitle`, `worksFor`) + `BreadcrumbList`
- **CTA principal** : "Prendre rendez-vous" → `contact.html#rdv`
- **Lien interne sortant le plus important** : vers `services.html`

### 6. `contact.html` — Adresse, horaires, RDV

- **`<title>`** : `Contact, horaires et RDV · Barber Concept Nantes` (51 car)
- **`<meta description>`** : `7 rue de Verdun, 44000 Nantes. Téléphone, horaires, plan et prise de rendez-vous en ligne pour le salon Barber Concept Nantes.` (133 car)
- **H1** : `Contact, horaires et prise de rendez-vous`
- **H2 prévus** (4) :
  - Le salon — adresse et plan
  - Horaires d'ouverture
  - Téléphone et email
  - Réserver en ligne (RDV)
- **JSON-LD** : `HairSalon` complet (avec `openingHoursSpecification` détaillé) + `FAQPage` (3-4 questions sur RDV / annulation / paiement) + `BreadcrumbList`
- **CTA principal** : "Réserver en ligne" → ancre `#rdv`
- **Lien interne sortant le plus important** : vers `a-propos.html`

---

## 5. Note technique — compare slider épuré

Version simplifiée à reprendre en prompt2 sur `realisations.html`. **Suppressions** : `startDiscovery`, `discoveryValue`, `easeInOut`, `stopDiscovery`, `markInteracted`, dépendance à `[data-refonte-stage]`, `IntersectionObserver`, animations `compare-knob-hint` / `compare-line-hint`.

### a) HTML — un slider (à dupliquer 4 fois sur `realisations.html`)

```html
<figure class="compare" data-compare style="--split: 50%;">
  <!-- Layer APRÈS (fond, z-index 1) -->
  <div class="compare__layer compare__layer--after" aria-hidden="true">
    <img src="images/realisation-01-apres.jpg"
         alt="Coupe + barbe sculptée — après — photographe nantais"
         width="1200" height="900" loading="lazy" decoding="async">
  </div>

  <!-- Layer AVANT (par-dessus, masqué via clip-path, z-index 2) -->
  <div class="compare__layer compare__layer--before" aria-hidden="true">
    <img src="images/realisation-01-avant.jpg"
         alt="Coupe + barbe sculptée — avant — photographe nantais"
         width="1200" height="900" loading="lazy" decoding="async">
  </div>

  <!-- Labels -->
  <span class="compare__label compare__label--before" aria-hidden="true">Avant</span>
  <span class="compare__label compare__label--after"  aria-hidden="true">Après</span>

  <!-- Handle (curseur draggable, accessible clavier) -->
  <button type="button"
          class="compare__handle"
          data-compare-handle
          role="slider"
          aria-label="Faire glisser pour comparer l'avant et l'après"
          aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
    <span class="compare__handle-line" aria-hidden="true"></span>
    <span class="compare__handle-knob" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 6 3 12 9 18"></polyline>
        <polyline points="15 6 21 12 15 18"></polyline>
      </svg>
    </span>
  </button>

  <figcaption class="compare__caption">
    Coupe + barbe sculptée — photographe nantais — 1h30
  </figcaption>
</figure>
```

### b) CSS — sélecteurs à reprendre

```css
/* COMPARE — slider avant / après (version épurée) */
.compare {
  --split: 50%;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;          /* 16/12 d'origine, on resserre pour portrait */
  border-radius: 12px;
  overflow: hidden;
  background: #1C1814;          /* charbon nuit du mini-site */
  border: 1px solid rgba(20, 17, 14, 0.08);
  user-select: none;
  -webkit-user-select: none;
  touch-action: pan-y;          /* le scroll vertical reste possible */
  isolation: isolate;
  margin: 0;                    /* reset figure */
}

.compare__layer {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.compare__layer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.compare__layer--after  { z-index: 1; }
.compare__layer--before {
  z-index: 2;
  clip-path: inset(0 calc(100% - var(--split)) 0 0);
  -webkit-clip-path: inset(0 calc(100% - var(--split)) 0 0);
  will-change: clip-path;
}

.compare__label {
  position: absolute;
  top: 14px;
  z-index: 4;
  padding: 7px 13px;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #F6F1E7;               /* crème du mini-site */
  background: #14110E;          /* charbon */
  border-radius: 999px;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.compare__label--before { left: 14px;  opacity: 1; }
.compare__label--after  { right: 14px; opacity: 1; }
.compare[data-split-edge="left"]  .compare__label--before { opacity: 0; }
.compare[data-split-edge="right"] .compare__label--after  { opacity: 0; }

.compare__handle {
  position: absolute;
  top: 0; bottom: 0;
  left: var(--split);
  z-index: 3;
  width: 48px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: ew-resize;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  will-change: left;
}
.compare__handle:focus { outline: none; }
.compare__handle:focus-visible .compare__handle-knob {
  box-shadow:
    0 0 0 2px #F6F1E7,
    0 0 0 4px #B08542,          /* laiton, accent du mini-site */
    0 10px 28px -10px rgba(0, 0, 0, 0.65);
}
.compare__handle-line {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: rgba(246, 241, 231, 0.95);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12), 0 0 24px rgba(246, 241, 231, 0.25);
}
.compare__handle-knob {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px; height: 52px;
  border-radius: 50%;
  background: #F6F1E7;
  color: #14110E;
  box-shadow:
    0 10px 28px -10px rgba(0, 0, 0, 0.65),
    0 2px 6px rgba(0, 0, 0, 0.35),
    inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.compare__handle-knob svg { width: 22px; height: 22px; }
@media (hover: hover) {
  .compare__handle:hover .compare__handle-knob { transform: scale(1.08); }
}
.compare.is-dragging .compare__handle-knob { transform: scale(0.94); }
.compare.is-dragging .compare__layer--before { transition: none !important; }

.compare__caption {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 12px 18px;
  background: linear-gradient(180deg, transparent 0%, rgba(20, 17, 14, 0.85) 70%);
  color: #F6F1E7;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 13px;
  font-weight: 500;
  z-index: 4;
  pointer-events: none;
}

/* Mobile — handle plus large, labels plus compacts */
@media (max-width: 720px) {
  .compare { border-radius: 10px; aspect-ratio: 3 / 4; }
  .compare__handle { width: 56px; }
  .compare__handle-knob { width: 48px; height: 48px; }
  .compare__handle-knob svg { width: 20px; height: 20px; }
  .compare__label { font-size: 9px; padding: 6px 10px; }
  .compare__label--before { left: 10px; }
  .compare__label--after  { right: 10px; }
}
```

### c) JS — `setSplit` + `pctFromClientX` + Pointer Events + clavier

```js
/* COMPARE SLIDER — version épurée (sans discovery, sans stage) */
(function initCompareSlider() {
  const compares = document.querySelectorAll('[data-compare]');
  if (!compares.length) return;

  compares.forEach((frame) => {
    const handle = frame.querySelector('[data-compare-handle]');
    if (!handle) return;

    let isDragging = false;
    let rafId = null;
    let pendingPct = 50;

    function setSplit(pct) {
      const clamped = Math.max(0, Math.min(100, pct));
      pendingPct = clamped;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        frame.style.setProperty('--split', pendingPct + '%');
        handle.setAttribute('aria-valuenow', String(Math.round(pendingPct)));
        if (pendingPct <= 1)        frame.setAttribute('data-split-edge', 'left');
        else if (pendingPct >= 99)  frame.setAttribute('data-split-edge', 'right');
        else                        frame.removeAttribute('data-split-edge');
      });
    }

    function pctFromClientX(clientX) {
      const rect = frame.getBoundingClientRect();
      if (rect.width === 0) return 50;
      return ((clientX - rect.left) / rect.width) * 100;
    }

    function onPointerDown(e) {
      if (e.pointerType !== 'touch') e.preventDefault();
      isDragging = true;
      frame.classList.add('is-dragging');
      try { frame.setPointerCapture(e.pointerId); } catch (_) {}
      setSplit(pctFromClientX(e.clientX));
    }
    function onPointerMove(e) {
      if (!isDragging) return;
      setSplit(pctFromClientX(e.clientX));
    }
    function onPointerUp(e) {
      if (!isDragging) return;
      isDragging = false;
      frame.classList.remove('is-dragging');
      try { frame.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    // Drag sur tout le frame (pas juste le handle) pour UX naturelle
    frame.addEventListener('pointerdown', onPointerDown);
    frame.addEventListener('pointermove', onPointerMove);
    frame.addEventListener('pointerup', onPointerUp);
    frame.addEventListener('pointercancel', onPointerUp);

    // Clavier : ←/→ par 2%, Shift+←/→ par 10%, Home/End aux extrêmes
    handle.addEventListener('keydown', (e) => {
      const step = e.shiftKey ? 10 : 2;
      const current = parseFloat(frame.style.getPropertyValue('--split')) || 50;
      if      (e.key === 'ArrowLeft')  { setSplit(current - step); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { setSplit(current + step); e.preventDefault(); }
      else if (e.key === 'Home')       { setSplit(0);              e.preventDefault(); }
      else if (e.key === 'End')        { setSplit(100);            e.preventDefault(); }
    });

    // Init position 50/50
    setSplit(50);
  });
})();
```

**Notes d'intégration prompt2 :**
- À placer dans un fichier `app.js` du mini-site, ou inline en bas de `realisations.html` dans une balise `<script>` (le mini-site est statique, pas de bundler).
- 4 figures `.compare` sur la page, le JS itère naturellement sur toutes via `querySelectorAll`.
- Les images avant/après doivent avoir **le même ratio** et **mêmes dimensions intrinsèques** (`width="1200" height="900"`) pour que l'effet de glissement soit propre.

---

## 6. Validation utilisateur — actée le 2026-05-27

Décisions confirmées par Valentin avant lancement du prompt 2 :

| Sujet                | Décision actée                                                                                                                         |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **Palette**          | ✅ Charbon `#14110E` + Crème `#F6F1E7` + Laiton vieilli `#B08542` + Brun cuir `#5A4A3C` + Charbon nuit `#1C1814`. (Pas de variante tabac ni ardoise.) |
| **Polices**          | ✅ **Fraunces** (variable serif, titres, opsz 9..144, graisses 400/500/600) + **Inter** (sans-serif, corps, graisses 400/500). 1 seul `<link>` Google Fonts. |
| **Plan des pages**   | ✅ 6 pages telles que listées en section 4 (`index` / `services` / `zone-intervention` / `realisations` / `a-propos` / `contact`). Pas de page `tarifs.html` séparée — tarifs intégrés dans `services.html`. |
| **Ton éditorial**    | ✅ **Vouvoiement** systématique. Phrases courtes, vocabulaire métier concret, ancrage Nantes/Loire-Atlantique au moins 3 fois sur l'ensemble du site. Bannir : leader, expert, solution clé en main, boostez, sur-mesure, 360°, transformation digitale, synergie, écosystème, "Nous mettons un point d'honneur", "Notre passion". |
| **Prise de RDV**     | ✅ **Lien Planity fictif** comme CTA principal partout — URL crédible : `https://www.planity.com/barber-concept-nantes-44000-nantes` (résoudra en 404, c'est attendu pour une démo). Pas de formulaire HTML statique. |

**Conséquences pour le prompt 2 :**
- Tous les CTA "Prendre rendez-vous" / "Réserver un créneau" / "Réserver en ligne" pointent vers le lien Planity en `target="_blank" rel="noopener"`.
- Le footer affiche la mention SIRET fictif sur chaque page.
- Les 4 compare sliders de `realisations.html` utilisent le code épuré de la section 5.
- Les pages utilisent Fraunces pour H1/H2/H3 et Inter pour le reste.
- Maillage SEO : 3 mentions explicites Nantes, ≥1 mention Saint-Herblain, ≥1 mention Orvault.

**Statut : prêt pour prompt 2.**
