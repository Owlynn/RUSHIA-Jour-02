# RUSH-IA – Jour 02 : Todolist HTML/CSS/TypeScript

Projet personnel réalisé dans le cadre du **rush "RUSH-IA" – Jour 2**, dont l'objectif est de :
- découvrir l'outil **Cursor** et le **vibe coding** ;
- prendre en main l'interface et le workflow IA ;
- produire rapidement un petit projet tout en **gardant la maîtrise de ce qu'on génère**.

Ce dépôt correspond à une **todolist très simple en HTML/CSS/TypeScript**, réalisée pour se concentrer avant tout sur l'outil.

---

## Présentation du projet

Ce projet est une **application web de liste de tâches (todolist)** minimaliste, en **HTML/CSS/TypeScript** :
- affichage d'une liste de tâches ;
- possibilité de **cocher/décocher** une tâche ;
- **séparation visuelle** entre tâches terminées et tâches restantes ;
- possibilité **d'ajouter une nouvelle tâche** ;
- **suppression de tâches** via un bouton dédié sur chaque tâche ;
- **compteur de tâches** affichant le nombre de tâches à faire et terminées.

Pas de base de données externe : les données sont **simulées/stockées en JSON/in‑memory** côté front, afin de garder une stack simple et facilement maîtrisable pour un premier jour de rush.

---

## Démo (capture d'écran)

Un aperçu de l'interface de la todolist :

![Capture d'écran de la todolist](img/Capture%20d%E2%80%99%C3%A9cran%202025-12-02%20165054.png)

---

## Contexte "RUSH-IA" – Jour 2

- **Type de projet** : projet perso dans le cadre d'un rush d'apprentissage.
- **Thème du jour** : migration vers TypeScript et renforcement du typage.
- **Objectif principal** : améliorer la qualité du code avec TypeScript, tout en gardant la compréhension du code.
- **Participants** : nous sommes deux à faire le rush (chacun sur un projet différent).
- **Règle du jour** : *améliorer le projet existant avec des outils modernes tout en gardant la maîtrise de ce qu'on produit*.

Ce projet est une **évolution du Jour 1** : migration vers TypeScript avec typage renforcé et intégration d'outils de build modernes.

---

## Stack technique

- **Technos** : HTML, CSS, **TypeScript** (avec typage strict)
- **Build tool** : **Parcel** (pour le bundling et la minification)
- **Type checking** : **TypeScript** avec configuration stricte
- **Données** : stockage **JSON simulé** (pas de BDD externe)
- **Front** : interface web simple, sans framework ni librairies UI (objectif : rester concentré sur l'outil et le code de base).

---

## Installation

Le projet utilise **Parcel** pour le bundling et la minification des sources.

Étapes :

```bash
git clone <URL_DU_DEPOT>
cd RUSHIA-Jour-02
npm install
```

Cela installera Parcel et toutes les dépendances nécessaires.

---

## Lancement du projet

### Mode développement

Pour lancer l'application en mode développement avec hot-reload :

```bash
npm run dev
```

Parcel démarrera un serveur de développement (généralement sur `http://localhost:1234`) avec rechargement automatique lors des modifications.

### Build de production (avec minification)

Pour créer une version optimisée et minifiée du projet :

```bash
npm run build
```

Les fichiers minifiés seront générés dans le dossier `dist/`. Parcel minifie automatiquement :
- le JavaScript
- le CSS
- le HTML

### Utilisation directe (sans Parcel)

Vous pouvez également ouvrir directement `index.html` dans un navigateur, mais vous n'aurez pas les optimisations de Parcel.

---

L'interface affichera une **todolist simple** :
- ajout de tâche via un champ dédié ;
- liste des tâches à faire ;
- liste des tâches terminées (ou séparation visuelle dans la même liste) ;
- possibilité de cocher/décocher les tâches ;
- suppression de tâches via un bouton de suppression sur chaque élément ;
- compteur dynamique affichant le nombre de tâches à faire et terminées.

---

## Structure (simplifiée)

Le projet suit une structure **web classique** :
- un fichier `index.html` comme point d'entrée ;
- un ou plusieurs fichiers CSS pour le style ;
- un fichier TypeScript (`script.ts`) pour la logique de la todolist (gestion de l'état en mémoire, JSON) ;
- un fichier `tsconfig.json` pour la configuration TypeScript.

Aucune explication d'architecture complexe n'est nécessaire ici : **on reste volontairement sur quelque chose d'hyper simple et classique**, mais avec les avantages du typage TypeScript.

---

## Auteurs

- **marccharton**
- **owlynn**

---

## Objectifs pédagogiques & journal de bord – Jour 2

**Objectifs du jour 2**
- Migrer le code JavaScript vers **TypeScript** avec typage renforcé.
- Intégrer **Parcel** pour le bundling et la minification.
- Améliorer la qualité du code avec des interfaces et des types stricts.
- Configurer un environnement de développement moderne avec hot-reload.
- Garder une **bonne compréhension de tout le code produit**, même avec l'aide de l'IA.

**Journal de bord (résumé)**
- Migration de `script.js` vers `script.ts` avec typage strict.
- Création d'interfaces TypeScript pour les tâches (`Task`).
- Ajout de types pour les éléments DOM.
- Configuration de `tsconfig.json` avec options strictes.
- Intégration de Parcel pour le build et la minification.
- Mise en place du hot-reload pour le développement.

---

## Fonctionnalités ajoutées

### Jour 1
- **Suppression de tâches** : Chaque tâche dispose d'un bouton de suppression permettant de retirer définitivement une tâche de la liste.
- **Compteur de tâches** : Un compteur dynamique affiche en temps réel le nombre de tâches à faire, terminées et le total.

### Jour 2
- **Migration vers TypeScript** : Code migré avec typage strict et interfaces bien définies.
- **Intégration de Parcel** : Build tool pour le bundling et la minification automatique.
- **Configuration TypeScript stricte** : Vérifications renforcées pour une meilleure qualité de code.
- **Hot-reload** : Rechargement automatique lors du développement.
- **Typage des éléments DOM** : Types spécifiques pour tous les éléments DOM utilisés.

Ce README pourra être enrichi au fil du rush si nécessaire (captures d'écran, détails techniques supplémentaires, etc.).
