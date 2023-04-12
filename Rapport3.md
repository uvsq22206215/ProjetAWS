# ProjetAWS [Groupe 3] : Rapport du 06/04/2023

**Titre du projet**: Recipe Rendez-vous

##### L'avancement du projet:

Cette semaine, nous avons poursuivi le développement de notre site de partage de recettes en travaillant à la fois sur les pages principales et sur la base de données. Plus précisément, nous avons effectué les tâches suivantes :

* Nous avons relié la page de connexion (login page) à la base de données afin qu'un utilisateur puisse créer un compte et être enregistré dans la base de données. Cela permettra aux utilisateurs de sauvegarder leurs recettes préférées et de publier leurs propres recettes.

* Nous avons travaillé sur la conception des différents composants de notre site, tels que la carte du créateur, le contenu de la recette et les recettes connexes. Ces éléments sont importants pour offrir une expérience utilisateur fluide et agréable.

* Nous avons terminé la page d'accueil du site en ajoutant le bloc des créateurs ainsi que les recettes tendances. Nous avons également réalisé le footer du site, qui inclut des liens vers des pages importantes du site, des mentions légales et des contacts.

* Nous avons défini la structure des tables "recette" et "utilisateur" dans la base de données. Cette étape est cruciale pour garantir que toutes les informations nécessaires sont stockées correctement.

* Nous avons alimenté la base de données avec des recettes provenant du site Marmiton.org en utilisant Python. Les informations récupérées comprennent le titre, la description, l'image, les instructions et les ingrédients. Nous avons également travaillé sur le calcul des quantités d'ingrédients nécessaires en fonction du nombre de personnes.

* Nous avons créé une page dynamique de recette en utilisant les recettes enregistrées dans la base de données. Cette page permet aux utilisateurs de voir toutes les informations relatives à une recette en particulier.

* Nous avons ajouté un loader pour améliorer l'expérience utilisateur lors du chargement des pages. Cette animation permet aux utilisateurs de savoir que le site est en train de traiter une requête.

* Nous avons commencé à travailler sur de nouvelles fonctionnalités, notamment la page de création de recettes. Le backend est déjà réalisé et nous prévoyons de travailler sur le frontend la semaine prochaine. Nous avons également commencé à travailler sur la page "All categories", qui affichera toutes les catégories de recettes disponibles (plats, entrées, desserts, etc.). Les utilisateurs pourront choisir une catégorie et voir toutes les recettes correspondantes.
Enfin, nous avons commencé à travailler sur la page de profil d'un utilisateur. Cette page permettra aux utilisateurs de voir les recettes qu'ils ont aimées, ainsi que les recettes qu'ils ont créées eux-mêmes.


 

**Technologies utilisées** :

| Sujet de projet      | Front End Tech | Back End Tech      | Modèle de BD |
| ----------- | ----------- | ----------- | ----------- |
| Site de partage de recette      | React.Js (Material-ui,React-Bootstrap) BeautifulSoupe (Python)  | Firebase9 | No SQL |

**A propos de l'équipe : ** 

| Nom      | Rôle | Liste de tâches      | Apprentissage|
| ----------- | ----------- | ----------- |  -----------  |
| Younes Amrane | Responsable | <ul><li>Distribution des tâches dans l’équipe</li> <li> Réalisation du Footer </li> <li> réalisation  de la page recherche (front End)</li></ul> | material-ui,FireBase, fontAwsome, React Hooks|
| Louis Delahaye | Codeur | <ul><li>  récolte (scrapping) des recettes </li><li>la réalisation de la page dynamique des recettes </li><li> début de création de la page de création de recettes </li> <li> réalisation du composant relatedRecipes et RecipeContent  </li></ul> | BeautifulSoup (python),Hooks react, material-ui,Firebase(dataStore) |
| Tasneem Durbass (Riviere) | chercheuse     | <ul><li>La réalisation de la page d'accueil</li><li>l'implémentation de composant CreatorCard</li><li> chercher comment rendre responsive les blocs de la page d'acceuil </li><li>chercher comment utiliser les styles dans react</li><li>La réalisation du loader</li></ul> | framework React(react-boostrtap) & Firebase |
| Oussama Bouakaz | Codeur        | <ul><li>réalisation de la liaison entre la page login et la base de donnée </li><li>La contribution à la réalisation la page de recherche </li><li>commencer la réalisation de la page profile d'un utilisateur </li> </ul> | Firebase(dataStore),material-ui, React Hooks |

##### Les difficultés 

- Rendre les blocs de la page d'accueil, utilisant des components React, responsive pour mobile et tablette.
 (Reussite pour le bloc de createurs de recette en changeant  les listes en slider sur mobile et tablette) --> A terminer pour la semaine prochaine.
- Le temps dédié pour s'adapter avec ces nouvelles technologies.


##### Les taches à faire durant la semaine prochaine:

- Réaliser le Front end de la page de création de recettes.
- Réaliser le Menu déroulant. 
- Finir la page AllCategories.
- Finir la création page profil dédié à chaque utilisateur où il peut consulter ses recette et d'autre détails.

**Comment on s’est organisé** :

* *Group chat WhatsApp* : Pour maintenir une communication constante entre les membres de l'équipe. (clarification des points / Partage de liens et de rappels )
* *Réunion Zoom* : Pour discuter de problèmes plus importants ou pour prendre des décisions de groupe. Les membres de l'équipe peuvent partager leur écran pour présenter des parties du projets en cours etc... (Les réunions en personne peuvent être difficiles à organiser en raison des contraintes de temps et de lieu.)
* *Outil Jira* : permet de suivre les tâches et les activités associées au projet. L'outil aide à maintenir une vue d'ensemble des tâches à effectuer sous forme de backlog, des délais et des responsabilités des membres de l'équipe. On peut aussi partager des resources nécessaire. Nous aurons également la possibilité d'inscrire nos heures passées sur les différentes parties du projet a des fin d'amélioration constante pour tenir le délai imposé.

##### Reference:


* Comment mettre du style en React 
  https://malcoded.com/posts/react-component-style/


* Firebsae9 (auth):
  https://www.youtube.com/watch?v=9bXhf_TELP4


* Pour la réalisation d'un filtre de recherche
  https://www.algolia.com/doc/guides/building-search-ui/ecommerce-ui-template/components/in-depth/product-listing-page-filter-and-nav/filters-refinements/react/

