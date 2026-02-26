# TP Git : React Task Manager

> Travail pratique sur l'utilisation de Git et GitHub dans le cadre d'un projet React avec Vite.

---

## Question 1 – Création du projet

### Commandes exécutées

```bash
npm create vite@latest react-task-manager -- --template react
cd react-task-manager
npm install
npm run dev
```

### Explications

- `npm create vite@latest` génère un projet React moderne avec Vite.
- `cd` permet d'entrer dans le dossier du projet.
- `npm install` installe toutes les dépendances.
- `npm run dev` lance le serveur de développement et permet de vérifier que le projet fonctionne.

### Structure générée par Vite

| Fichier / Dossier | Description |
|---|---|
| `index.html` | Point d'entrée de l'application |
| `src/` | Fichiers React (`App.jsx`, `main.jsx`, CSS…) |
| `public/` | Fichiers statiques |
| `package.json` | Dépendances et scripts |
| `vite.config.js` | Configuration Vite |

---

## Question 2 – Initialisation Git

### Commandes exécutées

```bash
git init
git status
git add .
git status
git commit -m "chore(init): initial vite react project"
git status
```

### Explications

- `git init` crée un dépôt Git vide.
- `git add .` ajoute tous les fichiers dans la zone de staging.
- `git commit` enregistre le premier commit.
- `git status` permet d'observer l'évolution du dépôt à chaque étape.

### États observés

| Étape | État des fichiers |
|---|---|
| Après `git init` | Tous les fichiers sont **untracked** |
| Après `git add .` | Tous les fichiers passent en **staged** |
| Après `git commit` | Dépôt **propre** (clean) |

### Zones Git

| Zone | Rôle |
|---|---|
| **Working Directory** | Fichiers présents sur le disque |
| **Staging Area** | Fichiers prêts à être commités |
| **Repository** | Historique des commits |

---

## Question 3 – Lien avec GitHub

### Commandes exécutées

```bash
git branch -M main
git remote add origin https://github.com/Maxaldo/react-task-manager-m1.git
git push -u origin main
```

### Explications

- `git branch -M main` renomme la branche principale.
- `git remote add origin` relie le dépôt local au dépôt GitHub.
- `git push -u origin main` envoie le projet en ligne et crée le lien de suivi.

### État observé

```
Your branch is up to date with 'origin/main'
```

→ Synchronisation réussie.

---

## Question 4 – Branche de structure

### Commandes exécutées

```bash
git checkout -b feature/app-structure
# Création des fichiers TaskForm.jsx et TaskList.jsx
git add .
git commit -m "feat(components): add task components structure"
git push origin feature/app-structure
```

### Explications

- `git checkout -b` crée une branche dédiée à une nouvelle fonctionnalité.
- Les nouveaux composants sont ajoutés, commités puis poussés sur GitHub.

### Pourquoi une branche feature ?

Pour isoler la fonctionnalité et éviter de modifier directement `main`.

---

## Question 5 – Intégration dans main

### Commandes exécutées

```bash
git checkout main
git pull origin main
git merge feature/app-structure
git push origin main
```

### Workflow

1. Retour sur `main`
2. Mise à jour de `main`
3. Fusion de la branche `feature`
4. Publication sur GitHub

---

## Question 6 – Ajout de tâche

### Commandes exécutées

```bash
git checkout -b feature/add-task
# Modification du code (ajout de tâche)
git add .
git commit -m "feat(tasks): implement add task"
git push origin feature/add-task
# Fusion dans main
```

### Cycle Git observé

```
Création de branche → Développement → Staging → Commit → Push → Merge → Push final
```

---

## Question 7 – Affichage des tâches

### Commandes exécutées

```bash
git checkout -b feature/display-tasks
git add .
git commit -m "feat(tasks): display task list"
git push origin feature/display-tasks
# Fusion dans main
```

### Comparaison avec la Question 6

Workflow identique, mais avec moins de modifications dans le code.

---

## Question 8 – Correction : empêcher l'ajout de tâches vides

### Commandes exécutées

```bash
git checkout -b fix/empty-task-validation
# Correction du code
git add .
git commit -m "fix(tasks): prevent empty task"
git push origin fix/empty-task-validation
# Fusion dans main
```

### Pourquoi le préfixe `fix` ?

Parce qu'il s'agit d'une **correction de bug**, pas d'une nouvelle fonctionnalité. La convention [Conventional Commits](https://www.conventionalcommits.org/) distingue `feat` (feature) et `fix` (correctif).
