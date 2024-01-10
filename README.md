# Test Ayomi

## Exercice

 Nous possédons un outil de valorisation que l’on met à disposition de nos clients. On souhaiterait ajouter une calculatrice pour les aider dans leurs calculs.

 Pour le test, merci de réaliser cette calculatrice

- Créer un algorithme qui réalise une calculatrice en notation polonaise inverse (NPI), le tout en Python.

- Développer une API REST avec la bibliothèque web python Fast API. Cette api permettra d’envoyer les opérations à réaliser et retournera le résultat.

- Enregistrer sur une base de données les opérations et les résultats.

- Faire une route API qui permet de récupérer dans un fichier Csv les datas.

- Déployer le projet sur docker à l’aide de docker-compose.

Exercice Plus :

- Documentation

- Unitest

- Frontend pour la calculatrice en React

## Deploiement du Projet

 Copier le repositorie

    git clone

 Construire les images

    docker-compose up --build -d

 Accessible

    http://localhost:5173

 API DOC

   http://localhost:8000/docs

 PHPMYADMIN

   http://localhost:8080

   user: root
   passowrd: password
