# RUSH-IA – Jour 02 : Todolist React/Next.js/Vite

Projet personnel réalisé dans le cadre du **rush "RUSH-IA" – Jour 2**, dont l'objectif est de :
- découvrir l'outil **Cursor** et le **vibe coding** ;
- prendre en main l'interface et le workflow IA ;
- produire rapidement un petit projet tout en **gardant la maîtrise de ce qu'on génère**.

Ce dépôt correspond à une **todolist moderne en React avec Next.js et Vite**, réalisée pour se concentrer avant tout sur l'outil et les technologies modernes.

---

## Présentation du projet

Ce projet est une **application web de liste de tâches (todolist)** moderne, développée avec **React, Next.js et Vite** :
- affichage d'une liste de tâches ;
- possibilité de **cocher/décocher** une tâche ;
- **séparation visuelle** entre tâches terminées et tâches restantes ;
- possibilité **d'ajouter une nouvelle tâche** ;
- **suppression de tâches** via un bouton dédié sur chaque tâche ;
- **compteur de tâches** affichant le nombre de tâches à faire et terminées.

Pas de base de données externe : les données sont **simulées/stockées en JSON/in‑memory** côté front, afin de garder une stack simple et facilement maîtrisable pour un premier jour de rush.

---

## Démo (capture d’écran)

Un aperçu de l’interface de la todolist :

![Capture d’écran de la todolist](img/Capture%20d%E2%80%99%C3%A9cran%202025-12-02%20165054.png)

---

## Contexte "RUSH-IA" – Jour 2

- **Type de projet** : projet perso dans le cadre d'un rush d'apprentissage.
- **Thème du jour** : migration vers une stack moderne avec React, Next.js et Vite.
- **Objectif principal** : découvrir les frameworks modernes (React, Next.js) avec un build tool rapide (Vite), tout en gardant la compréhension du code.
- **Participants** : nous sommes deux à faire le rush (chacun sur un projet différent).
- **Règle du jour** : *migrer le projet vers une stack moderne avec React/Next.js/Vite tout en gardant la maîtrise de ce qu'on produit*.

Ce projet est une **évolution du Jour 1** : migration vers React avec Next.js pour le routing et les optimisations, Vite pour le build rapide, et TypeScript pour le typage strict.

---

## Stack technique

- **Framework** : **React** (bibliothèque UI moderne)
- **Framework full-stack** : **Next.js** (React avec SSR/SSG, routing, optimisations)
- **Build tool** : **Vite** (build ultra-rapide avec HMR)
- **Langage** : **TypeScript** (avec typage strict)
- **Styling** : CSS moderne (modules CSS ou styled-components selon les besoins)
- **Données** : stockage **JSON simulé** (pas de BDD externe)
- **Architecture** : composants React réutilisables avec hooks personnalisés

---

## Installation

Le projet utilise **Next.js** avec **Vite** pour un développement rapide et une build optimisée.

Étapes :

```bash
git clone <URL_DU_DEPOT>
cd RUSHIA-Jour-02-React-next-vite
npm install
```

Cela installera Next.js, React, Vite et toutes les dépendances nécessaires (React, Next.js, TypeScript, etc.).

---

## Lancement du projet

### Mode développement

Pour lancer l'application en mode développement avec hot-reload ultra-rapide :

```bash
npm run dev
```

Next.js démarrera un serveur de développement (généralement sur `http://localhost:3000`) avec **Hot Module Replacement (HMR)** via Vite pour un rechargement instantané lors des modifications.

### Build de production (avec optimisations)

Pour créer une version optimisée et minifiée du projet :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `.next/`. Next.js optimise automatiquement :
- le JavaScript (code splitting, tree shaking)
- le CSS (minification et extraction)
- le HTML (optimisations SEO)
- les images (optimisation automatique)
- le routing (pré-rendering, SSR, SSG selon les besoins)

### Lancement de la version de production

Pour tester la version de production en local :

```bash
npm start
```

Cela lancera le serveur de production Next.js avec toutes les optimisations activées.

---

L'interface affichera une **todolist simple** :
- ajout de tâche via un champ dédié ;
- liste des tâches à faire ;
- liste des tâches terminées (ou séparation visuelle dans la même liste) ;
- possibilité de cocher/décocher les tâches ;
- suppression de tâches via un bouton de suppression sur chaque élément ;
- compteur dynamique affichant le nombre de tâches à faire et terminées.

---

## Structure du projet

Le projet suit la **structure Next.js standard** avec une architecture composants React :

```
├── app/                    # App Router Next.js (ou pages/ pour Pages Router)
│   ├── page.tsx           # Page principale
│   ├── layout.tsx         # Layout global
│   └── components/        # Composants React réutilisables
│       ├── TodoList.tsx
│       ├── TaskItem.tsx
│       └── TaskForm.tsx
├── styles/                 # Fichiers CSS/CSS Modules
│   └── globals.css
├── types/                  # Types TypeScript partagés
│   └── task.ts
├── hooks/                  # Hooks React personnalisés (optionnel)
│   └── useTasks.ts
├── next.config.js          # Configuration Next.js
├── tsconfig.json           # Configuration TypeScript
└── package.json            # Dépendances du projet
```

**Architecture basée sur les composants React** : chaque fonctionnalité est encapsulée dans un composant réutilisable avec gestion d'état via hooks React (useState, useReducer, etc.).

---

## Auteurs

- **marccharton**
- **owlynn**

---

## Objectifs pédagogiques & journal de bord – Jour 2

**Objectifs du jour 2**
- Migrer le projet vers **React** avec une architecture basée sur les composants.
- Intégrer **Next.js** pour le routing, le SSR/SSG et les optimisations.
- Utiliser **Vite** comme build tool pour un développement ultra-rapide avec HMR.
- Améliorer la qualité du code avec **TypeScript** et des types stricts.
- Créer des composants React réutilisables et bien structurés.
- Configurer un environnement de développement moderne avec hot-reload instantané.
- Garder une **bonne compréhension de tout le code produit**, même avec l'aide de l'IA.

**Journal de bord (résumé)**
- Migration de la structure HTML/CSS/TS vers une architecture React.
- Création de composants React réutilisables (TodoList, TaskItem, TaskForm).
- Configuration de Next.js avec App Router ou Pages Router.
- Intégration de Vite pour le build rapide et le HMR.
- Configuration de TypeScript avec options strictes pour React.
- Migration de la gestion d'état vers les hooks React (useState, useReducer).
- Mise en place de la structure de projet Next.js standard.

---

## Fonctionnalités ajoutées

### Jour 1
- **Suppression de tâches** : Chaque tâche dispose d'un bouton de suppression permettant de retirer définitivement une tâche de la liste.
- **Compteur de tâches** : Un compteur dynamique affiche en temps réel le nombre de tâches à faire, terminées et le total.

### Jour 2
- **Migration vers React** : Architecture basée sur les composants React réutilisables.
- **Intégration de Next.js** : Framework full-stack pour routing, SSR/SSG et optimisations.
- **Intégration de Vite** : Build tool ultra-rapide avec Hot Module Replacement (HMR) instantané.
- **Configuration TypeScript stricte** : Vérifications renforcées pour une meilleure qualité de code avec React.
- **Composants React** : TodoList, TaskItem, TaskForm avec gestion d'état via hooks.
- **Architecture moderne** : Structure Next.js avec séparation claire des responsabilités.

Ce README pourra être enrichi au fil du rush si nécessaire (captures d'écran, détails techniques supplémentaires, etc.).
