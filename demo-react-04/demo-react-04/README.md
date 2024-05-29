# Exo 05 - TodoList

## Structure des composants de l'app
![App Structure](./doc/structure.png)

## Méthodologie de travail
- Analyser les besoins
- Réaliser la structure de l'app _(peut toujours évoluer)_
    - Définir les composants
    - Visualiser le flux de données (State + communication)
- Coder...
    - Créer les composants _(simplement, sans logique dans un 1er temps)_
    - Ajouter la logique / les interactions / ... au composant
    - Passer à la fonctionnalité / au composant suivant


## Ordre de dev durant la correction
- Composant Header

- Composant TodoList _(simple)_
    - Structure de base

- Composant Taskform
    - [si basé sur mockup] adapté le code html en JSX
    - le Style _(scss)_
    - Gestion du formulaire _(binding entre les éléments et le state)_
    - Interaction avec TodoList _(pour cela, il faut une props Event pour envoyer la tâche au parent)_
    - (Bonus) Gestion du focus

- Composant TodoList _(State)_
    - Traiter les données envoyées par le formulaire

- Composant TaskList & TaskItem
    - [si basé sur un mockup] Adapter le code html en JSX
    - Ajouter le style _(SCSS)_
    - Convertir les données "JS" vers du "JSX" (avec la fonction map)
    - Interaction avec la TodoList _(deux props "Event" -> pour le delete et le finish)_

- Fonctionnalité de filtre des résultats
    - Analyse et mockup
    - Mise en place du JSX + State
    - Appliquer les règles de filtre avec la fonction filter

