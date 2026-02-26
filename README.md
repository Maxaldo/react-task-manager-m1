 TP Git : react-task-manager


Question 1 – Création du projet
Commandes exécutées
npm create vite@latest react-task-manager -- --template react

cd react-task-manager

npm install

npm run dev

Explications
La première commande génère un projet React moderne avec Vite.

cd permet d’entrer dans le dossier du projet.

npm install installe toutes les dépendances.

npm run dev lance le serveur de développement et permet de vérifier que le projet fonctionne.

Structure générée par Vite
index.html : point d’entrée de l’application.

src/ : contient les fichiers React (App.jsx, main.jsx, CSS…).

public/ : fichiers statiques.

package.json : dépendances et scripts.

vite.config.js : configuration Vite.

Question 2 – Initialisation Git
Commandes exécutées
git init

git status

git add .

git status

git commit -m "chore(init): initial vite react project"

git status

Explications
git init crée un dépôt Git vide.

git add . ajoute tous les fichiers dans la zone de staging.

git commit enregistre le premier commit.

git status permet d’observer l’évolution du dépôt à chaque étape.

États observés
Après git init → tous les fichiers sont untracked.

Après git add . → tous les fichiers passent en staged.

Après git commit → dépôt propre.

Zones Git
Working Directory : fichiers présents sur le disque.

Staging Area : fichiers prêts à être commités.

Repository : historique des commits.

Question 3 – Lien avec GitHub
Commandes exécutées
git branch -M main

git remote add origin https://github.com/Maxaldo/react-task-manager-m1.git

git push -u origin main

Explications
git branch -M main renomme la branche principale.

git remote add origin relie le dépôt local au dépôt GitHub.

git push -u origin main envoie le projet en ligne et crée le lien de suivi.

État observé
Your branch is up to date with 'origin/main' → synchronisation réussie.

Question 4 – Branche de structure
Commandes exécutées
git checkout -b feature/app-structure

Création des fichiers TaskForm.jsx et TaskList.jsx

git add .

git commit -m "feat(components): add task components structure"

git push origin feature/app-structure

Explications
git checkout -b crée une branche dédiée à une nouvelle fonctionnalité.

git add . ajoute les nouveaux fichiers.

git commit enregistre la structure des composants.

git push envoie la branche sur GitHub.

Pourquoi une branche feature ?
Pour isoler la fonctionnalité et éviter de modifier directement main.

Question 5 – Intégration dans main
Commandes exécutées
git checkout main

git pull origin main

git merge feature/app-structure

git push origin main

Workflow
Retour sur main

Mise à jour de main

Fusion de la branche feature

Publication sur GitHub

Question 6 – Ajout de tâche
Commandes exécutées
git checkout -b feature/add-task

Modification du code (ajout de tâche)

git add .

git commit -m "feat(tasks): implement add task"

git push origin feature/add-task

Fusion dans main

Cycle Git observé
Création de branche → développement → staging → commit → push → merge → push final.

Question 7 – Affichage des tâches
Commandes exécutées
git checkout -b feature/display-tasks

git add .

git commit -m "feat(tasks): display task list"

git push origin feature/display-tasks

Fusion dans main

Comparaison avec Question 6
Workflow identique, mais moins de modifications dans le code.

Question 8 – Correction : empêcher l’ajout de tâches vides
Commandes exécutées
git checkout -b fix/empty-task-validation

Correction du code

git add .

git commit -m "fix(tasks): prevent empty task"

git push origin fix/empty-task-validation

Fusion dans main

Pourquoi le préfixe fix ?
Parce qu’il s’agit d’une correction de bug, pas d’une nouvelle fonctionnalité.
