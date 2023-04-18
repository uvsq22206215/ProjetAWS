import { database } from "../utils/firebase";
import { useState } from "react";
import { getDocs, addDoc, collection, getFirestore } from "firebase/firestore";
import { IconButton } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
/* 
"name":"Salade César",
  "prepTime":"PT15M",
  "cookTime":"PT5M",
  "totalTime":"PT20M",a
  "recipeYield":"4 personnes",
  "recipeIngredient":[
    {"name" : "c.à.c de moutarde", "quantity" : 1/8},
    {"name" : "trait de tabasco", "quantity" : 1/4},
    {"name" : "cl d'huile", "quantity" : 15/4},
    {"name" : "poivre", "quantity" : NaN},
    {"name" : "sel", "quantity" : NaN},
    {"name" : "oeuf", "quantity" : 1/4},
    {"name" : "g de parmesan râpé", "quantity" : 25/4}, 
    {"name" : "c.à.c de câpres", "quantity" : 2/4},
    {"name" : "citron", "quantity" : NaN},
    {"name" : "gousse d'ail pelée", "quantity" : 1/4}, 
    {"name" : "c.à.s d'huile", "quantity" : 2/4},
    {"name" : "coeurs de laitue effeuillé", "quantity" : 2/4}, 
    {"name" : "g de Parmesan (copeaux)", "quantity" : 25/4},
    {"name" : "tranches de pain écroûtées", "quantity" : 4/4}
  ],
  "recipeInstructions":[
    "Faites dorer le pain, coupé en cubes,3 min dans un peu d'huile. ",
    "Déchirez les feuilles de romaine dans un saladier, et ajoutez les croûtons préalablement épongés dans du papier absorbant. ",
    "Préparez la sauce :\nFaites cuire l'oeuf 1 min 30 dans l'eau bouillante, et rafraîchissez-le.",
    "Cassez-le dans le bol d'un mixeur et mixez, avec tous les autres ingrédients; rectifiez l'assaissonnement et incorporez à la salade. ",
    "Décorez de copeaux de parmesan, et servez."],
  "author":"patricia_204",
  "description":"moutarde,tabasco,huile,poivre,sel,oeuf,parmesan râpé,câpres,citron,ail,huile,laitue,Parmesan,pain",
  "keywords":"Salade César,moutarde,tabasco,huile,poivre,sel,oeuf,parmesan râpé,câpres,citron,ail,huile,laitue,Parmesan,pain,salade Cesar,très facile,bon marché,rapide",
  "recipeCuisine":"Entrée",
  "aggregateRating":{"@type":"AggregateRating",
    "reviewCount":109,
    "ratingValue":4.7},
    "tags":[
      {
        nameTag: "🇮🇹 Italien",
        background: "white",
        textColor : "black"
      },
      {
        nameTag: "🌿 Vegan",
        background: "green",
        textColor : "white"
      },
      {
        nameTag: "🕒 Moins de 30 min",
        background: "grey",
        textColor : "white"
      },
      {
        nameTag: "🟢 Facile",
        background: "#f89837",
        textColor: "white"
      }
    ]
*/

function CreateRecipePage() {

  const listeRecette = [
    {
      "name": "Oeufs au g\u00e2teau au chocolat pour P\u00e2ques",
      "image": "https://assets.afcdn.com/recipe/20230407/141903_w1024h576c1cx1024cy544cxb2048cyb1088.webp",
      "date": "2023-04-07T17:12:44+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 0.25
        },
        {
          "name": "g de sucre",
          "quantity": 0.5
        },
        {
          "name": "g de farine",
          "quantity": 0.5
        },
        {
          "name": "sachet de sucre vanill\u00e9",
          "quantity": 0.25
        },
        {
          "name": "oeufs",
          "quantity": 1.5
        },
        {
          "name": "c.\u00e0.s de lait",
          "quantity": 0.75
        },
        {
          "name": "g de chocolat en poudre",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 180\u00b0c.",
        "Laver 6 oeufs et les percer d\u00e9licatement sur le dessus de sorte \u00e0 les \u00e9vider en s\u00e9parant les blancs des jaunes. Garder les coquilles de c\u00f4t\u00e9.",
        "Dans un saladier, mettre le beure et le sucre. Travailler la mati\u00e8re.",
        "Ajoutez les jaunes d'oeufs, le lait et la farine.",
        "Ajoutez les blancs battus en neige.",
        "Incorporer les pr\u00e9parations dans les oeufs vides \u00e0 l'aide d'une poche \u00e0 douille. Ne pas remplir les oeufs jusqu'en haut (jusqu'au 3/4 seulement) car m\u00eame en absence de levure, le g\u00e2teau va gonfler l\u00e9g\u00e8rement.",
        "Placer les oeufs dans des moules \u00e0 muffins, c\u00f4t\u00e9 perc\u00e9 vers le haut.",
        "Enfourner 35 minutes en surveillant la cuisson (si le g\u00e2teau d\u00e9borde un peu de la coquille ce n'est pas grave, vous pourrez nettoyer facilement avant de servir !).",
        "Laisser ti\u00e9dir.",
        "Vous pouvez dessiner sur les oeufs des petits visages et casser le dessus de la coque pour leur faire une sorte de cr\u00e2ne chevelu.",
        "Il n'y a plus qu'\u00e0 d\u00e9guster !"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen"
    },
    {
      "name": "Nouilles \u00e0 la sauce satay (beurre de cacahu\u00e8tes et sauce soja)",
      "image": "https://assets.afcdn.com/recipe/20230405/141869_w1024h576c1cx2592cy1728cxb5184cyb3456.webp",
      "date": "2023-04-05T11:44:49+02:00",
      "cookTime": 0,
      "prepTime": 5,
      "totalTime": 5,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.c d'huile de s\u00e9same",
          "quantity": 1.0
        },
        {
          "name": "s\u00e9same",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de beurre de cacahu\u00e8tes",
          "quantity": 1.0
        },
        {
          "name": "trait de sauce Sriracha",
          "quantity": 1.0
        },
        {
          "name": "ml de Ginger Ale",
          "quantity": 8.0
        },
        {
          "name": "sachet de nouilles instantan\u00e9es",
          "quantity": 1.0
        },
        {
          "name": "oeuf",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de sauce soja",
          "quantity": 1.0
        },
        {
          "name": "oignon nouveau",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Commencer par faire cuire les nouilles selon les indications du paquet.",
        "Dans un bol, verser le beurre de cacahu\u00e8tes, la sauce sriracha, l'huile de s\u00e9same, la sauce soja, le ginger ale, un oeuf et un peu d'eau de cuisson des nouilles.",
        "Bien m\u00e9langer le tout jusqu'\u00e0 obtenir un m\u00e9lange homog\u00e8ne.",
        "Ajouter les nouilles et bien m\u00e9langer avec la sauce.",
        "Pour le dressage, parsemer quelques graines de s\u00e9same et de l'oignon nouveau."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Poireaux r\u00f4tis avec vinaigrette et feta",
      "image": "https://assets.afcdn.com/recipe/20230403/141829_w1024h576c1cx1024cy768cxb2048cyb1537.webp",
      "date": "2023-04-03T15:19:29+02:00",
      "cookTime": 20,
      "prepTime": 10,
      "totalTime": 30,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "poireaux",
          "quantity": 0.5
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "piment d'Espelette",
          "quantity": "NaN"
        },
        {
          "name": "persil",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de moutarde \u00e0 l'ancienne",
          "quantity": 0.25
        },
        {
          "name": "demi de feta",
          "quantity": 0.25
        },
        {
          "name": "oignon rouge",
          "quantity": 0.25
        },
        {
          "name": "cornichons",
          "quantity": "NaN"
        },
        {
          "name": "citron jaune",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 180\u00b0c.",
        "Laver vos poireaux et couper la partie verte.",
        "Couper la base blanche dans le sens de la longueur.",
        "D\u00e9poser vos poireaux (partie blanche) sur le dos sur une plaque de cuisson et verser de l'huile d'olive sur chacun d'entre eux.",
        "Saler et poivrer les poireaux. Ajouter ensuite le piment selon vos go\u00fbts.",
        "Retourner les poireaux et mettre un filet d'huile sur le dos.",
        "Mettre \u00e0 cuire au four 20min \u00e0 180\u00b0c.",
        "Pendant ce temps, \u00e9mincer tr\u00e8s finement l'oignon et les cornichons.",
        "D\u00e9friser le persil.",
        "Mettre le tout dans un bol. R\u00e2per quelques zestes de citrons, ajouter la moutarde, un peu de sel, poivre, piment et un g\u00e9n\u00e9reux filet d'huile d'olive. M\u00e9langer le tout. Vous pouvez ajouter un peu de jus de citron \u00e9galement.",
        "\u00c9taler la vinaigrette obtenue sur les poireaux et \u00e9mietter la feta par dessus."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Fondant au chocolat et aux \u00e9clats de noisettes",
      "image": "https://assets.afcdn.com/recipe/20230327/141640_w1024h576c1cx2017cy1411cxb4031cyb2482.webp",
      "date": "2023-03-27T17:30:48+02:00",
      "cookTime": 20,
      "prepTime": 15,
      "totalTime": 35,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de sucre semoule",
          "quantity": 1.5
        },
        {
          "name": "c.\u00e0.s de farine",
          "quantity": 0.6666666666666666
        },
        {
          "name": "tablette de chocolat \u00e0 la noisette du type Noir \u00c9clats de Noisettes NESTLE DESSERT\u00ae",
          "quantity": 0.16666666666666666
        },
        {
          "name": "oeufs",
          "quantity": 0.8333333333333334
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 180\u00b0C (thermostat 6). Faire fondre le chocolat et le beurre au bain-marie.",
        "S\u00e9parer les jaunes des blancs d'oeufs et monter les blancs en neige ferme.",
        "Fouetter les jaunes et y incorporer le m\u00e9lange beurre-chocolat fondu. Bien m\u00e9langer.",
        "Incorporer le sucre et la farine, puis ajouter les blancs d\u2019oeufs sans les casser.",
        "Beurrer un moule et y verser la p\u00e2te \u00e0 g\u00e2teau.",
        "Enfourner pendant 15 \u00e0 20 minutes et laisser refroidir avant de d\u00e9mouler."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Brownie express chocolat \u00e9clats de noisettes au micro-ondes",
      "image": "https://assets.afcdn.com/recipe/20230327/141639_w1024h576c1cx247cy479cxb480cyb640.webp",
      "date": "2023-03-27T17:19:53+02:00",
      "cookTime": 5,
      "prepTime": 10,
      "totalTime": 15,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de farine",
          "quantity": 1.1666666666666667
        },
        {
          "name": "g de sucre",
          "quantity": 1.5
        },
        {
          "name": "g de beurre",
          "quantity": 1.5
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.16666666666666666
        },
        {
          "name": "tablette de chocolat \u00e0 la noisette type Noir \u00c9clats de Noisettes NESTLE DESSERT\u00ae",
          "quantity": 0.16666666666666666
        },
        {
          "name": "oeufs",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Dans un saladier, battre les oeufs avec le sucre.",
        "Casser le chocolat en morceaux et le faire fondre au micro-ondes avec le beurre.",
        "Incorporer la farine, la pinc\u00e9e de sel au saladier et m\u00e9langer vigoureusement jusqu'\u00e0 obtenir une p\u00e2te lisse et homog\u00e8ne.",
        "Ajouter le chocolat fondu. M\u00e9langer.",
        "Beurrer un moule adapt\u00e9 \u00e0 la cuisine au micro-ondes. Y verser la p\u00e2te et enfourner \u00e0 pleine puissance pendant 5 minutes."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Oeufs au g\u00e2teau au chocolat pour P\u00e2ques",
      "image": "https://assets.afcdn.com/recipe/20230407/141903_w1024h576c1cx1024cy544cxb2048cyb1088.webp",
      "date": "2023-04-07T17:12:44+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 0.25
        },
        {
          "name": "g de sucre",
          "quantity": 0.5
        },
        {
          "name": "g de farine",
          "quantity": 0.5
        },
        {
          "name": "sachet de sucre vanill\u00e9",
          "quantity": 0.25
        },
        {
          "name": "oeufs",
          "quantity": 1.5
        },
        {
          "name": "c.\u00e0.s de lait",
          "quantity": 0.75
        },
        {
          "name": "g de chocolat en poudre",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 180\u00b0c.",
        "Laver 6 oeufs et les percer d\u00e9licatement sur le dessus de sorte \u00e0 les \u00e9vider en s\u00e9parant les blancs des jaunes. Garder les coquilles de c\u00f4t\u00e9.",
        "Dans un saladier, mettre le beure et le sucre. Travailler la mati\u00e8re.",
        "Ajoutez les jaunes d'oeufs, le lait et la farine.",
        "Ajoutez les blancs battus en neige.",
        "Incorporer les pr\u00e9parations dans les oeufs vides \u00e0 l'aide d'une poche \u00e0 douille. Ne pas remplir les oeufs jusqu'en haut (jusqu'au 3/4 seulement) car m\u00eame en absence de levure, le g\u00e2teau va gonfler l\u00e9g\u00e8rement.",
        "Placer les oeufs dans des moules \u00e0 muffins, c\u00f4t\u00e9 perc\u00e9 vers le haut.",
        "Enfourner 35 minutes en surveillant la cuisson (si le g\u00e2teau d\u00e9borde un peu de la coquille ce n'est pas grave, vous pourrez nettoyer facilement avant de servir !).",
        "Laisser ti\u00e9dir.",
        "Vous pouvez dessiner sur les oeufs des petits visages et casser le dessus de la coque pour leur faire une sorte de cr\u00e2ne chevelu.",
        "Il n'y a plus qu'\u00e0 d\u00e9guster !"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen"
    },
    {
      "name": "Nouilles \u00e0 la sauce satay (beurre de cacahu\u00e8tes et sauce soja)",
      "image": "https://assets.afcdn.com/recipe/20230405/141869_w1024h576c1cx2592cy1728cxb5184cyb3456.webp",
      "date": "2023-04-05T11:44:49+02:00",
      "cookTime": 0,
      "prepTime": 5,
      "totalTime": 5,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.c d'huile de s\u00e9same",
          "quantity": 1.0
        },
        {
          "name": "s\u00e9same",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de beurre de cacahu\u00e8tes",
          "quantity": 1.0
        },
        {
          "name": "trait de sauce Sriracha",
          "quantity": 1.0
        },
        {
          "name": "ml de Ginger Ale",
          "quantity": 8.0
        },
        {
          "name": "sachet de nouilles instantan\u00e9es",
          "quantity": 1.0
        },
        {
          "name": "oeuf",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de sauce soja",
          "quantity": 1.0
        },
        {
          "name": "oignon nouveau",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Commencer par faire cuire les nouilles selon les indications du paquet.",
        "Dans un bol, verser le beurre de cacahu\u00e8tes, la sauce sriracha, l'huile de s\u00e9same, la sauce soja, le ginger ale, un oeuf et un peu d'eau de cuisson des nouilles.",
        "Bien m\u00e9langer le tout jusqu'\u00e0 obtenir un m\u00e9lange homog\u00e8ne.",
        "Ajouter les nouilles et bien m\u00e9langer avec la sauce.",
        "Pour le dressage, parsemer quelques graines de s\u00e9same et de l'oignon nouveau."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Poireaux r\u00f4tis avec vinaigrette et feta",
      "image": "https://assets.afcdn.com/recipe/20230403/141829_w1024h576c1cx1024cy768cxb2048cyb1537.webp",
      "date": "2023-04-03T15:19:29+02:00",
      "cookTime": 20,
      "prepTime": 10,
      "totalTime": 30,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "poireaux",
          "quantity": 0.5
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "piment d'Espelette",
          "quantity": "NaN"
        },
        {
          "name": "persil",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de moutarde \u00e0 l'ancienne",
          "quantity": 0.25
        },
        {
          "name": "demi de feta",
          "quantity": 0.25
        },
        {
          "name": "oignon rouge",
          "quantity": 0.25
        },
        {
          "name": "cornichons",
          "quantity": "NaN"
        },
        {
          "name": "citron jaune",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 180\u00b0c.",
        "Laver vos poireaux et couper la partie verte.",
        "Couper la base blanche dans le sens de la longueur.",
        "D\u00e9poser vos poireaux (partie blanche) sur le dos sur une plaque de cuisson et verser de l'huile d'olive sur chacun d'entre eux.",
        "Saler et poivrer les poireaux. Ajouter ensuite le piment selon vos go\u00fbts.",
        "Retourner les poireaux et mettre un filet d'huile sur le dos.",
        "Mettre \u00e0 cuire au four 20min \u00e0 180\u00b0c.",
        "Pendant ce temps, \u00e9mincer tr\u00e8s finement l'oignon et les cornichons.",
        "D\u00e9friser le persil.",
        "Mettre le tout dans un bol. R\u00e2per quelques zestes de citrons, ajouter la moutarde, un peu de sel, poivre, piment et un g\u00e9n\u00e9reux filet d'huile d'olive. M\u00e9langer le tout. Vous pouvez ajouter un peu de jus de citron \u00e9galement.",
        "\u00c9taler la vinaigrette obtenue sur les poireaux et \u00e9mietter la feta par dessus."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Fondant au chocolat et aux \u00e9clats de noisettes",
      "image": "https://assets.afcdn.com/recipe/20230327/141640_w1024h576c1cx2017cy1411cxb4031cyb2482.webp",
      "date": "2023-03-27T17:30:48+02:00",
      "cookTime": 20,
      "prepTime": 15,
      "totalTime": 35,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de sucre semoule",
          "quantity": 1.5
        },
        {
          "name": "c.\u00e0.s de farine",
          "quantity": 0.6666666666666666
        },
        {
          "name": "tablette de chocolat \u00e0 la noisette du type Noir \u00c9clats de Noisettes NESTLE DESSERT\u00ae",
          "quantity": 0.16666666666666666
        },
        {
          "name": "oeufs",
          "quantity": 0.8333333333333334
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 180\u00b0C (thermostat 6). Faire fondre le chocolat et le beurre au bain-marie.",
        "S\u00e9parer les jaunes des blancs d'oeufs et monter les blancs en neige ferme.",
        "Fouetter les jaunes et y incorporer le m\u00e9lange beurre-chocolat fondu. Bien m\u00e9langer.",
        "Incorporer le sucre et la farine, puis ajouter les blancs d\u2019oeufs sans les casser.",
        "Beurrer un moule et y verser la p\u00e2te \u00e0 g\u00e2teau.",
        "Enfourner pendant 15 \u00e0 20 minutes et laisser refroidir avant de d\u00e9mouler."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Brownie express chocolat \u00e9clats de noisettes au micro-ondes",
      "image": "https://assets.afcdn.com/recipe/20230327/141639_w1024h576c1cx247cy479cxb480cyb640.webp",
      "date": "2023-03-27T17:19:53+02:00",
      "cookTime": 5,
      "prepTime": 10,
      "totalTime": 15,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de farine",
          "quantity": 1.1666666666666667
        },
        {
          "name": "g de sucre",
          "quantity": 1.5
        },
        {
          "name": "g de beurre",
          "quantity": 1.5
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.16666666666666666
        },
        {
          "name": "tablette de chocolat \u00e0 la noisette type Noir \u00c9clats de Noisettes NESTLE DESSERT\u00ae",
          "quantity": 0.16666666666666666
        },
        {
          "name": "oeufs",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Dans un saladier, battre les oeufs avec le sucre.",
        "Casser le chocolat en morceaux et le faire fondre au micro-ondes avec le beurre.",
        "Incorporer la farine, la pinc\u00e9e de sel au saladier et m\u00e9langer vigoureusement jusqu'\u00e0 obtenir une p\u00e2te lisse et homog\u00e8ne.",
        "Ajouter le chocolat fondu. M\u00e9langer.",
        "Beurrer un moule adapt\u00e9 \u00e0 la cuisine au micro-ondes. Y verser la p\u00e2te et enfourner \u00e0 pleine puissance pendant 5 minutes."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Roul\u00e9s de dinde aux champignons, pur\u00e9e de patate douce",
      "image": "https://assets.afcdn.com/recipe/20230208/140276_w1024h576c1cx2049cy1460cxb4099cyb2920.webp",
      "date": "2023-02-08T17:44:26+01:00",
      "cookTime": 20,
      "prepTime": 20,
      "totalTime": 40,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.c d'huile d'olive",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "escalopes de dinde",
          "quantity": 1.0
        },
        {
          "name": "g de champignon de Paris",
          "quantity": 0.25
        },
        {
          "name": "bouillon de volaille",
          "quantity": 0.25
        },
        {
          "name": "\u00e9chalotes",
          "quantity": 0.5
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        },
        {
          "name": "patates douces",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de lait \u00e9cr\u00e9m\u00e9",
          "quantity": 1.5
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9parer la farce. Ciseler les \u00e9chalotes finement. Faire revenir \u00e0 feu doux dans une po\u00eale anti-adh\u00e9sive avec une cuill\u00e8re \u00e0 soupe de bouillon. Lorsque les \u00e9chalotes sont translucides, mettre les champignons, et le reste du bouillon. R\u00e9duire.\nLorsque le jus a bien r\u00e9duit, \u00f4ter du feu.\nHacher le reste en petits morceaux afin de former une farce compacte. Saler, poivrer.",
        "Pr\u00e9parer les roul\u00e9s.\nLes escalopes doivent \u00eatre le plus fines possible.\nD\u00e9poser 2 cuill\u00e8res \u00e0 soupe de farce \u00e0 une extr\u00e9mit\u00e9 de l'escalope. Bien serrer la farce. Rouler l'escalope sur elle-m\u00eame afin d'enfermer la farce, en serrant bien avec de la ficelle. \n\nHuiler la po\u00eale \u00e0 l'aide d'un papier absorbant. Faire chauffer, et d\u00e9poser les roul\u00e9s. Faire cuire en retournant r\u00e9guli\u00e8rement pour faire dorer toutes les faces.",
        "Pr\u00e9parer la pur\u00e9e de patate douce\nPeler les patates douces et les couper en gros morceaux. Plonger dans l''eau froide sal\u00e9e et porter \u00e0 \u00e9bullition et cuire 20 minutes \u00e0 partir de l'\u00e9bullition.\n\u00c9goutter les morceaux de patate douce dans une passoire. Les \nFaire chauffer le lait et verser sur les morceaux de patate douce. Ajouter la pinc\u00e9e de sel et le 4 \u00e9pices. M\u00e9langer vivement \u00e0 l'aide d'une fourchette jusqu'\u00e0 obtenir une consistance cr\u00e9meuse.",
        "Quand tout est pr\u00eat, dresser et d\u00e9guster"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Muffins au fromage \u00e0 raclette",
      "image": "https://assets.afcdn.com/recipe/20230206/140232_w1024h576c1cx1705cy894cxb3410cyb1788.webp",
      "date": "2023-02-06T17:23:44+01:00",
      "cookTime": 20,
      "prepTime": 30,
      "totalTime": 50,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "ml d'huile de tournesol",
          "quantity": 1.0
        },
        {
          "name": "ml de cr\u00e8me fra\u00eeche",
          "quantity": 2.0
        },
        {
          "name": "g de farine",
          "quantity": 5.0
        },
        {
          "name": "sachet de levure chimique",
          "quantity": 1.0
        },
        {
          "name": "g d'emmental r\u00e2p\u00e9 Le cavalier",
          "quantity": 1.0
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 1.0
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "oeuf",
          "quantity": 1.0
        },
        {
          "name": "ml de lait",
          "quantity": 1.0
        },
        {
          "name": "oignon rouge",
          "quantity": 1.0
        },
        {
          "name": "ciboulette",
          "quantity": "NaN"
        },
        {
          "name": "g de fromage \u00e0 raclette coup\u00e9 en morceaux",
          "quantity": 1.0
        },
        {
          "name": "morceaux de raclette (pour le coeur des muffins)",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Dans un saladier, battre l\u2019oeuf avec la cr\u00e8me fra\u00eeche, le lait et le poivre.",
        "Couper finement l'oignon.",
        "Ajouter ensuite le fromage \u00e0 raclette, l'emmental, l\u2019oignon et la ciboulette. M\u00e9langer.",
        "Dans un autre grand saladier, m\u00e9langer la farine, la levure et le sel.",
        "Creuser un puits dans la farine.",
        "Verser le premier m\u00e9lange dans la farine et ajouter l'huile. M\u00e9langer.",
        "Verser la pr\u00e9paration dans des moules \u00e0 la muffins (avec caissettes en papier). Remplir seulement \u00e0 1/3.",
        "D\u00e9poser un morceau de raclette dans chaque muffin (ou plusieurs selon la taille).",
        "Recouvrir avec le reste de la pr\u00e9paration jusqu'aux 3/4 des moules.",
        "Vous pouvez parsemer ensuite un peu d'emmental r\u00e2p\u00e9 sur le dessus.",
        "Enfourner 15 \u00e0 20 min \u00e0 180\u00b0c.",
        "Servir avec une belle salade verte et des petits cornichons sur le c\u00f4t\u00e9."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Boulettes de poulet orange teriyaki",
      "image": "https://assets.afcdn.com/recipe/20230208/140277_w1024h576c1cx2273cy1460cxb4546cyb2920.webp",
      "date": "2023-02-08T17:48:53+01:00",
      "cookTime": 40,
      "prepTime": 50,
      "totalTime": 90,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de farine de bl\u00e9",
          "quantity": 0.5
        },
        {
          "name": "bonnes cuill\u00e8res \u00e0 soupe de miel",
          "quantity": 0.5
        },
        {
          "name": "morceau de gingembre",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.c de piment",
          "quantity": 0.25
        },
        {
          "name": "s\u00e9same",
          "quantity": "NaN"
        },
        {
          "name": "g de poulet",
          "quantity": 1.0
        },
        {
          "name": "g de flocons d'avoine",
          "quantity": 1.0
        },
        {
          "name": "gousses d'ail",
          "quantity": 0.5
        },
        {
          "name": "oeufs",
          "quantity": 0.5
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        },
        {
          "name": "cl de sauce soja",
          "quantity": 0.25
        },
        {
          "name": "cl d'eau",
          "quantity": 1.25
        },
        {
          "name": "c.\u00e0.s de f\u00e9cule de pomme de terre",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Dans un saladier m\u00e9langer e poulet hach\u00e9, les flocons d'avoine, l'ail finement r\u00e2p\u00e9, la farine et l'oeuf entier. Assaisonner.",
        "Former les boulettes avec les mains l\u00e9g\u00e8rement humides ou avec des gants.\n\nD\u00e9poser les boulettes sur une plaque couverte de papier de cuisson.",
        "Cuire 40 minutes  10 par 10 minutes minutes dans le four \u00e0 200 degr\u00e9s pour des boulettes de la taille d'une balle de golf.",
        "Pr\u00e9parer la sauce pour enrober les boulettes.\nDans une sauteuse chauffer ensemble la sauce soja, l'eau, le jus d'orange, le miel, le gingembre finement r\u00e2p\u00e9 et le piment.",
        "D\u00e9layer la f\u00e9cule dans un peu d'eau et verser le tout dans la sauteuse.\n\nBien m\u00e9langer pour \u00e9viter les grumeaux.",
        "Ajouter les boulettes \u00e0 la sauce \u00e0 la sortie du four et les enrober de sauce.\nDresser et parsemer de graines de s\u00e9sames."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Potiron r\u00f4ti, \u0153uf mollet et pain croustillant.",
      "image": "https://assets.afcdn.com/recipe/20230208/140278_w1024h576c1cx1977cy1460cxb3954cyb2920.webp",
      "date": "2023-02-08T18:11:40+01:00",
      "cookTime": 40,
      "prepTime": 40,
      "totalTime": 80,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "cumin",
          "quantity": "NaN"
        },
        {
          "name": "potiron",
          "quantity": 0.5
        },
        {
          "name": "tranches de pain de campagne",
          "quantity": 2.0
        },
        {
          "name": "g de yaourt \u00e0 la grecque",
          "quantity": 2.0
        },
        {
          "name": "piment fort d'Espelette",
          "quantity": 0.5
        },
        {
          "name": "graines de s\u00e9same",
          "quantity": 0.5
        },
        {
          "name": "oeufs",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 220\u00b0C et tapisser une plaque \u00e0 p\u00e2tisserie de papier cuisson.",
        "M\u00e9langer le potiron avec une goutte d'huile d'olive, quelques pinc\u00e9es de sel et de poivre, et une pinc\u00e9e de cumin moulu.",
        "\u00c9taler le potiron sur une plaque \u00e0 p\u00e2tisserie et faire r\u00f4tir pendant 40 minutes, en remuant toutes les 10 minutes (selon la puissance de votre four), jusqu'\u00e0 ce qu'il soit brun et caram\u00e9lis\u00e9.",
        "Couper le pain et faire chauffer de l'huile d'olive dans une po\u00eale. Dorer les tranches de pain des deux c\u00f4t\u00e9s dans l'huile.",
        "Lorsque le potiron a fini de r\u00f4tir, le sortir du four et le laisser refroidir l\u00e9g\u00e8rement. D\u00e9poser le yogourt dans un bol, arroser d'huile d'olive, de sel et de poivre.",
        "Recouvrir de potiron, de chili, servir avec le pain.",
        "Cuire l'oeuf mollet, couper en 2, d\u00e9poser sur le plat."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "One pot pasta Tha\u00ef aux crevettes",
      "image": "https://assets.afcdn.com/recipe/20230208/140280_w1024h576c1cx2147cy1460cxb4294cyb2920.webp",
      "date": "2023-02-08T18:15:06+01:00",
      "cookTime": 15,
      "prepTime": 20,
      "totalTime": 35,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "g de carotte",
          "quantity": 1.0
        },
        {
          "name": "oignon",
          "quantity": 0.5
        },
        {
          "name": "botte de coriandre",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 1.0
        },
        {
          "name": "morceau de gingembre",
          "quantity": 0.5
        },
        {
          "name": "g de spaghetti",
          "quantity": 1.0
        },
        {
          "name": "ml de lait de coco",
          "quantity": 0.5
        },
        {
          "name": "queues de crevettes",
          "quantity": 3.0
        },
        {
          "name": "sachet de bouillon de volaille",
          "quantity": 0.5
        },
        {
          "name": "gousses d'ail",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de p\u00e2te de curry",
          "quantity": 3.0
        },
        {
          "name": "citron vert",
          "quantity": 0.5
        },
        {
          "name": "b\u00e2ton de citronnelle",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Dans un po\u00eale faire sauter l'oignon jusqu\u2019\u00e0 ce qu'il soit translucide.",
        "Ajouter la p\u00e2te de curry, le gingembre, l'ail, la citronnelle et m\u00e9langer.",
        "Couper les carottes en fine julienne, et faire \u00e0 peine blanchir, pour les rendre souple.",
        "Verser le lait de coco ainsi que le bouillon, le jus de citron. Remuer le tout.",
        "Ajouter les spaghetti et cuire \u00e0 feu moyen en remuant fr\u00e9quemment jusqu\u2019\u00e0 ce que les p\u00e2tes soient al dente et qu'une partie du bouillon soit absorb\u00e9e environ 10 minutes.",
        "Ajouter ensuite les crevettes et continuer la cuisson pendant 3 minutes.",
        "Dresser et d\u00e9corer avec la coriandre."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Cr\u00eape au jambon",
      "image": "https://assets.afcdn.com/recipe/20230111/139344_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2023-01-11T16:19:19+01:00",
      "cookTime": 10,
      "prepTime": 15,
      "totalTime": 40,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de fromage r\u00e2p\u00e9",
          "quantity": 2.0
        },
        {
          "name": "tranches de jambon",
          "quantity": 2.0
        },
        {
          "name": "g de beurre",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s bomb\u00e9e de farine",
          "quantity": 0.5
        },
        {
          "name": "cl de lait",
          "quantity": 0.5
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        },
        {
          "name": "g de farine",
          "quantity": 0.75
        },
        {
          "name": "c.\u00e0.s d'huile",
          "quantity": 0.5
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "oeufs",
          "quantity": 0.75
        },
        {
          "name": "cl de lait",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Commencer par pr\u00e9parer la p\u00e2te \u00e0 cr\u00eapes : dans un saladier, verser la farine et y creuser un puits. Casser les oeufs et les battre en omelette. Les d\u00e9poser dans le puits, ajouter la pinc\u00e9e de sel, l\u2019huile, le lait et fouetter la pr\u00e9paration vigoureusement pour \u00e9viter la formation de grumeaux.",
        "Laisser reposer la p\u00e2te 15 minutes \u00e0 temp\u00e9rature ambiante.",
        "Pendant ce temps, pr\u00e9parer la b\u00e9chamel : Dans un r\u00e9cipient, faire fondre le beurre au micro-ondes. Le sortir et ajouter la farine en remuant bien.",
        "Dans une casserole, porter le lait \u00e0 \u00e9bullition.",
        "Verser le lait sur le m\u00e9lange farine/beurre en fouettant. Assaisonner.\nRemettre le tout au micro-ondes pendant 1 minute puis fouetter \u00e0 la sortie du micro-ondes. R\u00e9server.",
        "Faire chauffer une po\u00eale antiadh\u00e9sive et la graisser tr\u00e8s l\u00e9g\u00e8rement. Y verser une\u00a0louche de p\u00e2te, la r\u00e9partir dans la po\u00eale et cuire la cr\u00eape des deux c\u00f4t\u00e9s. R\u00e9p\u00e9ter l\u2019op\u00e9ration jusqu\u2019\u00e0 \u00e9puisement de la p\u00e2te.",
        "Passer au montage des cr\u00eapes : prendre une cr\u00eape, y d\u00e9poser une g\u00e9n\u00e9reuse couche de sauce b\u00e9chamel. Mettre une tranche de jambon, un peu de fromage r\u00e2p\u00e9. Plier les bords de la cr\u00eape vers l\u2019int\u00e9rieur pour \u00e9viter que la sauce s\u2019\u00e9chappe et rouler la cr\u00eape. R\u00e9p\u00e9ter l\u2019op\u00e9ration pour le reste des cr\u00eapes.",
        "Il ne reste ensuite plus qu\u2019\u00e0 faire chauffer les cr\u00eapes \u00e0 la po\u00eale avec un peu de mati\u00e8re grasse jusqu\u2019\u00e0 ce qu\u2019elles soient bien color\u00e9es."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Brioche pain perdu",
      "image": "https://assets.afcdn.com/recipe/20230112/139363_w1024h576c1cx414cy397cxb828cyb795.webp",
      "date": "2023-01-12T13:05:19+01:00",
      "cookTime": 10,
      "prepTime": 20,
      "totalTime": 30,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "orange",
          "quantity": 0.25
        },
        {
          "name": "brioche",
          "quantity": 0.25
        },
        {
          "name": "oeufs",
          "quantity": 0.25
        },
        {
          "name": "l de lait",
          "quantity": 0.25
        },
        {
          "name": "l de cr\u00e8me liquide",
          "quantity": 0.25
        },
        {
          "name": "poudre de pistache",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Couper la Brioche en tranches \u00e9paisses",
        "M\u00e9langer la cr\u00e8me, les oeufs, un peu d'eau, bien tremper les tranches  de brioche dedans.",
        "Pour la cuisson on fait fondre beaucoup de beurre, et du sucre. Tremper les tranches dans le m\u00e9lange, et cuire jusqu'\u00e0 ce qu'elles soient bien caram\u00e9lis\u00e9es.",
        "Ajouter de la en topping de la p\u00e2te \u00e0 tartiner de pistache, et quelques morceaux de pistache concass\u00e9es.\nAjouter des zestes d'orange",
        "D\u00e9guster"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Boules de s\u00e9same chinoises",
      "image": "https://assets.afcdn.com/recipe/20230104/139103_w1024h576c1cx1061cy706cxb2122cyb1412.webp",
      "date": "2023-01-04T11:50:14+01:00",
      "cookTime": 15,
      "prepTime": 30,
      "totalTime": 45,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "g de noix de coco rap\u00e9e",
          "quantity": 1.0
        },
        {
          "name": "g de sucre",
          "quantity": 1.0
        },
        {
          "name": "huile de friture",
          "quantity": "NaN"
        },
        {
          "name": "g de haricots mungo",
          "quantity": 2.0
        },
        {
          "name": "g de farine de riz gluant",
          "quantity": 4.0
        },
        {
          "name": "g de graines de s\u00e9same",
          "quantity": 3.0
        }
      ],
      "recipeInstructions": [
        "Faire tremper les haricots mungo dans de l'eau \u00e0 niveau (1cm au-dessus des haricots) pendant 1 heure dans une casserole. Les faire cuire ensuite pendant 20 minutes.",
        "Ajouter la coco rap\u00e9e et bien m\u00e9langer. Former des boules avec la p\u00e2te.",
        "Dans une casserole avec 20 cl d'eau, faire fondre le sucre.",
        "Dans un saladier, verser la farine de riz gluant et ajouter doucement l'eau sucr\u00e9e. Bien m\u00e9langer. C'est normal si la p\u00e2te colle.",
        "Sur un plan de travail farin\u00e9, \u00e9taler la p\u00e2te \u00e0 l'aide d'un rouleau puis faire des disques de 8 cm de diam\u00e8tre environ.",
        "Mettre les boules de p\u00e2te de haricots sur les disques, les recouvrir et les faire tourner d\u00e9licatement pour obtenir de belles boules homog\u00e8nes.",
        "D\u00e9poser les graines de s\u00e9same dans une assiette. Tremper chaque boule dans de l'eau et les faire rouler  dedans le s\u00e9same.",
        "Faire chauffer l'huile de friture dans un wok ou une sauteuse. Faire dorer les boules de s\u00e9sames. Quand elles sont bien dor\u00e9es, elles sont pr\u00eates."
      ],
      "categorie": "Confiserie",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Fish burger",
      "image": "https://assets.afcdn.com/recipe/20230126/139873_w1024h576c1cx1512cy2016cxb3024cyb4032.webp",
      "date": "2023-01-10T10:56:38+01:00",
      "cookTime": 0,
      "prepTime": 120,
      "totalTime": 120,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de vinaigre",
          "quantity": 0.25
        },
        {
          "name": "cl d'huile d'arachide",
          "quantity": 0.5
        },
        {
          "name": "jaunes d'oeuf",
          "quantity": 0.5
        },
        {
          "name": "Fines herbes",
          "quantity": "NaN"
        },
        {
          "name": "\u00e9chalote",
          "quantity": 0.25
        },
        {
          "name": "verre de farine",
          "quantity": 0.25
        },
        {
          "name": "verre de bi\u00e8re",
          "quantity": 0.25
        },
        {
          "name": "oeufs",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de levure de boulanger s\u00e8che",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile de tournesol",
          "quantity": 0.5
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "g de farine",
          "quantity": 1.0
        },
        {
          "name": "ml d'eau",
          "quantity": 0.5
        },
        {
          "name": "oeuf",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Chauffer le four \u00e0 220\u00b0",
        "Dans un bol m\u00e9langer la levure, l'huile et le sucre dans l'eau ti\u00e8de et laisser reposer pendant 5 minutes ou jusqu'\u00e0 ce que le m\u00e9lange soit mousseux.",
        "Fouetter l'\u0153uf et le sel.",
        "Incorporer la farine, en commen\u00e7ant par 420g, en ajoutant un peu plus si n\u00e9cessaire pour former une p\u00e2te molle.",
        "Mettre la p\u00e2te sur une surface farin\u00e9e et p\u00e9trir jusqu'\u00e0 ce qu'elle soit lisse et \u00e9lastique, environ 5 \u00e0 7 minutes.",
        "Lorsque la p\u00e2te est \u00e9lastique et ne colle plus, divisez-la en 12 morceaux \u00e9gaux et fa\u00e7onnez chacun en une boule l\u00e9g\u00e8rement aplatie.",
        "Placer \u00e0 6 \u00e0 7 cm d'intervalle sur des plaques \u00e0 p\u00e2tisserie graiss\u00e9es et laisser lever pendant 15 minutes, ou jusqu'\u00e0 ce que les petits pains aient presque doubl\u00e9 de taille.",
        "Cuire au four de 8 \u00e0 12 minutes ou jusqu'\u00e0 ce qu'ils soient dor\u00e9s.",
        "Retirer les petits pains du moule sur une grille. Badigeonner de beurre fondu imm\u00e9diatement apr\u00e8s la sortie du four. Laisser refroidir.",
        "Pour la pr\u00e9paration du poisson pan\u00e9.\nhttps://www.marmiton.org/recettes/recette_fish-and-chips-la-vraie-pate-a-friture-anglaise_22308.aspx",
        "Pr\u00e9paration de la sauce Tartare.\nhttps://www.marmiton.org/recettes/recette_sauce-tartare-maison_34962.aspx\nEt ajouter du piment d'espelette"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Boulettes parfum\u00e9es chinoises",
      "image": "https://assets.afcdn.com/recipe/20230104/139094_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2023-01-04T09:23:05+01:00",
      "cookTime": 120,
      "prepTime": 30,
      "totalTime": 150,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "g de vermicelles de riz",
          "quantity": 2.5
        },
        {
          "name": "c.\u00e0.s de f\u00e9cule de ma\u00efs",
          "quantity": 2.0
        },
        {
          "name": "1/c.\u00e0.c rase de gingembre moulu",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.c de poivre de sichuan en grains",
          "quantity": 0.5
        },
        {
          "name": "\u00e9toile de badiane",
          "quantity": 0.5
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.5
        },
        {
          "name": "g de chair \u00e0 saucisse",
          "quantity": 1.5
        },
        {
          "name": "oeufs",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Faire torr\u00e9fier les \u00e9toiles de badianes et le poivre de Sichuan dans une po\u00eale \u00e0 feu doux et sans mati\u00e8re grasse pendant 3_4 minutes en surveillant.",
        "Dans une casserole avec de l'eau \u00e0 \u00e9bullition, faire cuire les vermicelles de riz 5 minutes. Bien les \u00e9goutter et les couper en morceaux de 10 cm de long.",
        "Dans un saladier, m\u00e9langer la chair \u00e0 saucisse, les vermicelles,le gingembre, la badiane et le poivre moulu. Battre les oeufs dans une assiette.",
        "Former 6 boulettes et les rouler dans l'oeuf battu.",
        "Faire frire le reste d'oeuf pour obtenir une omelette tr\u00e8s fine. Couper de fines lani\u00e8res avec.",
        "D\u00e9poser les boulettes dans un panier vapeur avec les lani\u00e8res d'omelette d\u00e9pos\u00e9es dessus. Faire cuire 18-20 min."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Bun au sp\u00e9culoos et \u00e0 la cannelle",
      "image": "https://assets.afcdn.com/recipe/20221208/138305_w1024h576c1cx2453cy1635cxb4906cyb2927.webp",
      "date": "2022-12-08T12:11:48+01:00",
      "cookTime": 20,
      "prepTime": 5,
      "totalTime": 25,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "p\u00e2te feuillet\u00e9e",
          "quantity": 1.0
        },
        {
          "name": "p\u00e2te de sp\u00e9culoos",
          "quantity": "NaN"
        },
        {
          "name": "cannelle",
          "quantity": "NaN"
        },
        {
          "name": "jaune d'oeuf",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Prendre une p\u00e2te feuillet\u00e9e ou une brioche.",
        "\u00c9taler la p\u00e2te de sp\u00e9culos et la cannelle dessus ou autre selon les go\u00fbts.",
        "Recouvrir de p\u00e2te.",
        "Couper puis twister.",
        "Badigeonner la p\u00e2te feuillet\u00e9e de jaune d'\u0153uf.",
        "Mettre au four pendant environ 12 \u00e0 20 min."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Biscuits de No\u00ebl am\u00e9ricains",
      "image": "https://assets.afcdn.com/recipe/20221206/138232_w1024h576c1cx972cy771cxb1945cyb1542.webp",
      "date": "2022-12-06T17:19:56+01:00",
      "cookTime": 5,
      "prepTime": 20,
      "totalTime": 25,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 6.0
        },
        {
          "name": "g de farine",
          "quantity": 1.0
        },
        {
          "name": "pinc\u00e9e de fleur de sel",
          "quantity": 1.0
        },
        {
          "name": "g de cassonade",
          "quantity": 5.0
        },
        {
          "name": "c.\u00e0.s de sirop d'\u00e9rable ou miel",
          "quantity": 1.0
        },
        {
          "name": "oeufs",
          "quantity": 2.0
        },
        {
          "name": "\u00e9pices \u00e0 pain d'\u00e9pices",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Commencer par faire fondre le beurre dans une casserole \u00e0 feu doux.",
        "Ajouter le sucre, le sirop d'\u00e9rable et les \u00e9pices. Porter \u00e0 \u00e9bullition comme pour avoir un caramel. Laisser ensuite refroidir.",
        "Ajouter les 2 \u0153ufs et fouetter.",
        "Verser progressivement la farine sans cesser de fouetter.",
        "Terminer en ajoutant une pinc\u00e9e de fleur de sel. Laisser reposer 30 minutes au frais.",
        "Pr\u00e9chauffer le four \u00e0 200\u00b0C / Thermostat 7.",
        "Abaisser la p\u00e2te \u00e0 l'aide d'un rouleau \u00e0 p\u00e2tisserie sur un plan de travail farin\u00e9 d'1 cm d'\u00e9paisseur environ.",
        "\u00c0 l'aide d'emporte-pi\u00e8ces de No\u00ebl, d\u00e9tailler les biscuits.",
        "D\u00e9poser les biscuits sur une plaque recouverte de papier cuisson et enfourner entre 5 et 7 minutes max. Les biscuits ne doivent pas colorer. Laisser ensuite refroidir 30 minutes avant de les d\u00e9corer avec du gla\u00e7age."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Yakitori au jambon cru et au fromage \u00e0 raclette",
      "image": "https://assets.afcdn.com/recipe/20221205/138189_w1024h576c1cx2738cy2046cxb5184cyb3888.webp",
      "date": "2022-12-05T11:59:05+01:00",
      "cookTime": 6,
      "prepTime": 5,
      "totalTime": 31,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.c de s\u00e9same",
          "quantity": 0.5
        },
        {
          "name": "g de miel",
          "quantity": 1.5
        },
        {
          "name": "c.\u00e0.c de mirin",
          "quantity": 0.5
        },
        {
          "name": "g de raclette",
          "quantity": 1.0
        },
        {
          "name": "tranches de jambon cru",
          "quantity": 3.0
        },
        {
          "name": "ml de sauce soja",
          "quantity": 2.5
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer la sauce soja, le miel et le mirin pour obtenir une marinade.",
        "D\u00e9poser les tranches de jambon et les laisser mariner 20 min.",
        "Couper le fromage \u00e0 raclette en b\u00e2tonnet d\u2019environ 5 cm de long sur 1 cm d\u2019\u00e9paisseur.",
        "Embrocher le fromage dans la longueur sur la brochette. Enrouler le jambon cru autour.",
        "Faire cuire les brochettes de chaque c\u00f4t\u00e9 dans une po\u00eale bien chaude jusqu'\u00e0 ce que le fromage soit fondu.",
        "Verser le reste de la sauce et saupoudrer de quelques graines de s\u00e9same."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Carpaccio de betterave et de radis japonais",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_1.jpg",
      "date": "2022-12-01T16:56:31+01:00",
      "cookTime": 0,
      "prepTime": 10,
      "totalTime": 10,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "verre de pois chiches",
          "quantity": 0.5
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de yaourt",
          "quantity": 1.5
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de betterave cuite coup\u00e9e en morceaux",
          "quantity": 2.0
        },
        {
          "name": "c.\u00e0.s de jus de citron",
          "quantity": 1.0
        },
        {
          "name": "radis japonais",
          "quantity": "NaN"
        },
        {
          "name": "betterave crue rouge",
          "quantity": 0.5
        },
        {
          "name": "betterave crue chioggia",
          "quantity": 0.5
        },
        {
          "name": "demi de jus de citron",
          "quantity": 0.5
        },
        {
          "name": "graines de grenade",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Pour faire votre base, mixer les poids chiches, la betterave cuite, le yaourt. Puis ajouter 2 cuill\u00e8res \u00e0 soupe de jus de citron, du sel et du poivre.",
        "Pour faire le carpaccio, d\u00e9couper \u00e0 la mandoline les radis japonais et les betteraves en tr\u00e8s fines lamelles.",
        "Enfin l'assemblage, d\u00e9poser la base sur une assiette et disposer le carpaccio au-dessus. Verser du jus de citron, de l'huile d'olive, du sel, du poivre et parsemer de quelques graines de grenade."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Paris-Brest revisit\u00e9 (Marseille-F\u00e8s)",
      "image": "https://assets.afcdn.com/recipe/20221205/138186_w1024h576c1cx505cy685cxb1008cyb1326.webp",
      "date": "2022-12-05T11:12:23+01:00",
      "cookTime": 105,
      "prepTime": 60,
      "totalTime": 165,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de sucre",
          "quantity": 0.8333333333333334
        },
        {
          "name": "g de sel",
          "quantity": 0.8333333333333334
        },
        {
          "name": "g de beurre",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de farine",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de sucre",
          "quantity": 0.16666666666666666
        },
        {
          "name": "1/gousse de vanille",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de f\u00e9cule de ma\u00efs",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de farine",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de beurre",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de lait",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g d'eau",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g d'oeuf",
          "quantity": 0.3333333333333333
        },
        {
          "name": "sucre en grain",
          "quantity": "NaN"
        },
        {
          "name": "pistaches hach\u00e9es",
          "quantity": "NaN"
        },
        {
          "name": "g de lait",
          "quantity": 0.8333333333333334
        },
        {
          "name": "g de jaune d'oeuf",
          "quantity": 0.16666666666666666
        },
        {
          "name": "pralin\u00e9",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de cr\u00e8me p\u00e2tissi\u00e8re",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Mettre dans une casserole sur feu doux, l'eau, le lait, le sel, le sucre et le beurre.",
        "D\u00e8s le d\u00e9but d'\u00e9bullition, ajouter hors du feu la farine m\u00e9langer fortement \u00e0 la cuill\u00e8re en bois.",
        "Remettre sur le feu et dess\u00e9cher la p\u00e2te pendant 1 minute en remuant avec la cuill\u00e8re en bois.",
        "Transvaser dans le bol de votre robot et m\u00e9langer \u00e0 l'aide de la feuille du robot. Jusqu'\u00e0 ce qu'il n'y ai plus de vapeur (il faut la refroidir).",
        "Ajouter ensuite 2 par 2 les \u0153ufs m\u00e9lang\u00e9s, et enfin le dernier m\u00e9langer jusqu'\u00e0 avoir une p\u00e2te homog\u00e8ne. Pr\u00e9chauffer le four \u00e0 180\u00b0 chaleurs statiques",
        "Prendre deux plaques perfor\u00e9es munies de papiers cuisson. Trace un cercle de 20cm sur chaque feuille (\u00e7a servira de guide)."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9"
    },
    {
      "name": "Cocktail d\u2019Halloween aux fruits rouges sans alcool",
      "image": "https://assets.afcdn.com/recipe/20221019/136443_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2022-10-19T17:13:02+02:00",
      "cookTime": 0,
      "prepTime": 10,
      "totalTime": 10,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "cl de jus de fruits rouges",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.c de sirop de grenadine",
          "quantity": 1.0
        },
        {
          "name": "cl d'eau gazeuse ou limonade",
          "quantity": 1.0
        },
        {
          "name": "litchi pour les yeux",
          "quantity": "NaN"
        },
        {
          "name": "raisin noir pour les yeux",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Dans un verre type \"tumblr\", verser un fond de grenadine sur les gla\u00e7ons.",
        "Ajouter ensuite le jus de fruit et l'eau gazeuse ou la limonade.",
        "Puis d\u00e9poser \u00e0 l'int\u00e9rieur des verres des litchis garnis d'un grain de raisin ou d'une myrtille pour repr\u00e9senter des yeux globuleux."
      ],
      "categorie": "Boisson",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Burger d'Halloween",
      "image": "https://assets.afcdn.com/recipe/20221019/136414_w1024h576c1cx725cy1241cxb1453cyb2063.webp",
      "date": "2022-10-19T12:08:30+02:00",
      "cookTime": 10,
      "prepTime": 30,
      "totalTime": 40,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "emmental en tranche",
          "quantity": 2.0
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "pains pour hamburger",
          "quantity": 1.0
        },
        {
          "name": "steaks hach\u00e9s",
          "quantity": 1.0
        },
        {
          "name": "cornichons",
          "quantity": 2.0
        },
        {
          "name": "salade roquette",
          "quantity": "NaN"
        },
        {
          "name": "olives vertes farcies au piment",
          "quantity": 2.0
        },
        {
          "name": "oignon rouge",
          "quantity": 0.25
        },
        {
          "name": "mayonnaise",
          "quantity": "NaN"
        },
        {
          "name": "ketchup",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Fa\u00e7onner les steacks de la taille des pains \u00e0 burger",
        "Peler l\u2019oignon rouge et l'\u00e9mincer. Rincer et essorer la roquette",
        "Faire chauffer un peu d'huile dans une po\u00eale et faire cuire les steaks 3-4 minutes en les retournant. \u00c0 la fin de la cuisson ajouter une tranche de fromage sur les steaks pour les faire fondre.",
        "Dans un bol, m\u00e9langer du ketchup et de la mayonnaise pour faire une sauce cocktail",
        "Fendre les petits pains en 2 et toaster l\u00e9g\u00e8rement \u00e0 la po\u00eale",
        "Le montage des burgers d'Halloween : tartiner chaque moiti\u00e9 de pain avec de la sauce. D\u00e9poser la roquette sur le pain du bas, puis la viande avec le fromage, les oignons.",
        "D\u00e9couper des triangles dans les tranches de fromage restantes pour faire les dents. Venir les placer sous le pain du dessus.",
        "Piquer les cornichons et les olives et les cornichons pour faire les yeux et les oreilles comme sur la photo.",
        "Ajouter un peu de ketchup pour faire le sang."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "\u00c9pinards au lait de coco",
      "image": "https://assets.afcdn.com/recipe/20221018/136386_w1024h576c1cx2157cy1721cxt635cyt157cxb4007cyb2907.webp",
      "date": "2022-10-18T16:58:34+02:00",
      "cookTime": 10,
      "prepTime": 20,
      "totalTime": 30,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "pinc\u00e9e de coriandre en poudre",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de cumin en graine",
          "quantity": 0.5
        },
        {
          "name": "pinc\u00e9e de curcuma",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.c de sel",
          "quantity": 0.5
        },
        {
          "name": "gingembre cm",
          "quantity": 0.5
        },
        {
          "name": "g d'\u00e9pinards frais",
          "quantity": 2.0
        },
        {
          "name": "c.\u00e0.s d'huile de coco",
          "quantity": 1.0
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.5
        },
        {
          "name": "ml de cr\u00e8me de coco",
          "quantity": 1.0
        },
        {
          "name": "amandes effil\u00e9es torr\u00e9fi\u00e9es",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Faire revenir l'huile de coco.",
        "Faire revenir les graines de cumin.",
        "Verser le curcuma et la coriandre. Laisser revenir jusqu'\u00e0 ce que \u00e7a dore.",
        "Ajouter les \u00e9pinards.",
        "\u00c0 l'aide d'une r\u00e2pe, ajouter le gingembre.",
        "Verser l'ail coup\u00e9 finement.",
        "Verser la cr\u00e8me de coco et laisser mijoter \u00e0 feu doux une dizaine de minutes.",
        "Servir sur un bol de riz avec des amandes effil\u00e9es torr\u00e9fi\u00e9es."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Gnocchis d'Halloween en citrouille",
      "image": "https://assets.afcdn.com/recipe/20221018/136384_w1024h576c1cx674cy341cxb1620cyb1080.webp",
      "date": "2022-10-18T16:19:18+02:00",
      "cookTime": 4,
      "prepTime": 40,
      "totalTime": 44,
      "numberPersons": 3,
      "recipeIngredient": [
        {
          "name": "sachet de pur\u00e9e de citrouille",
          "quantity": 0.3333333333333333
        },
        {
          "name": "farine",
          "quantity": 0.6666666666666666
        },
        {
          "name": "bonne pinc\u00e9e de sel",
          "quantity": 0.3333333333333333
        },
        {
          "name": "bonne pinc\u00e9e de poivre",
          "quantity": 0.3333333333333333
        },
        {
          "name": "thym frais ou s\u00e9ch\u00e9",
          "quantity": "NaN"
        },
        {
          "name": "g de beurre",
          "quantity": 1.3333333333333333
        },
        {
          "name": "g de pomme de terre",
          "quantity": 1.6666666666666667
        }
      ],
      "recipeInstructions": [
        "Faire cuire les pommes de terre \u00e0 l\u2019eau.",
        "Les \u00e9craser dans un bol avec un presse-pur\u00e9e ou une fourchette, puis ajouter l\u2019ensemble de la pur\u00e9e et m\u00e9langer.",
        "Ajouter sel et poivre.",
        "Ajouter petit \u00e0 petit la farine jusqu\u2019\u00e0 former une p\u00e2te.",
        "Faire des petites boules avec la p\u00e2te et les marquer \u00e0 la ficelle comme sur la photo.",
        "Casser un bout de la tige de thym pour la mettre en guise de tige de citrouille.",
        "Mettre de l\u2019eau dans une casserole et la porter \u00e0 \u00e9bullition.",
        "Y plonger les petits gnocchis jusqu\u2019\u00e0 ce qu\u2019ils remontent \u00e0 la surface.",
        "Une fois cuits, les faire revenir dans une po\u00eale avec le beurre fondu. Retirer quand ils sont bien dor\u00e9s."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Croque-monsieur fourr\u00e9",
      "image": "https://assets.afcdn.com/recipe/20221018/136385_w1024h576c1cx1512cy1611cxb3024cyb3222.webp",
      "date": "2022-10-18T16:24:41+02:00",
      "cookTime": 10,
      "prepTime": 5,
      "totalTime": 15,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "tranches d'emmental",
          "quantity": 3.0
        },
        {
          "name": "tranches \u00e9paisses de pain de mie",
          "quantity": 1.0
        },
        {
          "name": "tranches de gouda",
          "quantity": 3.0
        },
        {
          "name": "tranches de jambon",
          "quantity": 3.0
        }
      ],
      "recipeInstructions": [
        "Inciser au milieu une large tranche de pain de mie,\nafin d'en faire une sorte de poche.",
        "Prendre le fromage et le jambon, empiler et d\u00e9couper pour les faire rentrer dans les poches.",
        "M\u00e9langer, les oeufs et le lait.\nPlonger les tranches de pain dedans, avant de les po\u00ealer \u00e0 feu doux, pour laisser le temps au fromage de bien fondre.",
        "Une fois que c\u2019est bon, il ne reste plus qu'\u00e0 d\u00e9guster !!!"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Aubergines farcies sauce tomate et mozzarella",
      "image": "https://assets.afcdn.com/recipe/20221003/135686_w1024h576c1cx950cy540cxb2128cyb1409.webp",
      "date": "2022-10-03T12:00:40+02:00",
      "cookTime": 48,
      "prepTime": 10,
      "totalTime": 58,
      "numberPersons": 3,
      "recipeIngredient": [
        {
          "name": "aubergines",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 1.0
        },
        {
          "name": "tomates",
          "quantity": 0.6666666666666666
        },
        {
          "name": "bonne pinc\u00e9e de sel",
          "quantity": 0.3333333333333333
        },
        {
          "name": "gousses d'ail",
          "quantity": 1.0
        },
        {
          "name": "bo\u00eete de coulis de tomate",
          "quantity": 0.3333333333333333
        },
        {
          "name": "pinc\u00e9e de herbes de Provence",
          "quantity": 0.3333333333333333
        },
        {
          "name": "mozzarella",
          "quantity": 0.3333333333333333
        }
      ],
      "recipeInstructions": [
        "Couper les aubergines en deux et les entailler en quadrillage.",
        "Ins\u00e9rer l'ail coup\u00e9 en lamelles \u00e0 l\u2019int\u00e9rieur de la chair.",
        "Salez les aubergines et ajouter un filet d\u2019huile d\u2019olive. Enfourner 40 minutes \u00e0 200 degr\u00e9s.",
        "Pendant le temps de cuisson, pr\u00e9parer une sauce tomate. Dans une casserole, mettre un filet d\u2019huile d\u2019olive, et l'ail \u00e9minc\u00e9. Faire revenir l\u00e9g\u00e8rement et ajouter une tomate coup\u00e9e en d\u00e9s.",
        "Une fois le tout revenu, mettre le coulis de tomate. Parsemer quelques herbes aromatiques.",
        "\u00c0 l\u2019aide du dos d\u2019une cuill\u00e8re \u00e0 soupe, \u00e9craser le fond des aubergines pour laisser la place \u00e0 la sauce tomate. D\u00e9poser la sauce g\u00e9n\u00e9reusement et ajouter de belles tranches mozzarella.",
        "Placer au four 8 min pour que la mozzarella soit bien fondante. \u00c0 la fin de la cuisson, ajouter du basilic cisel\u00e9 sur les aubergines et c\u2019est pr\u00eat !"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Tartines aux l\u00e9gumes r\u00f4tis au miel et aux \u00e9clats de ch\u00e2taigne",
      "image": "https://assets.afcdn.com/recipe/20221216/138491_w1024h576c1cx504cy640cxb1008cyb1280.webp",
      "date": "2022-10-03T11:20:07+02:00",
      "cookTime": 65,
      "prepTime": 10,
      "totalTime": 75,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "branches de thym",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de miel",
          "quantity": 1.25
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "tranches de pain de campagne",
          "quantity": 1.0
        },
        {
          "name": "moiti\u00e9 de butternut",
          "quantity": 0.25
        },
        {
          "name": "betterave crue",
          "quantity": 0.25
        },
        {
          "name": "ch\u00e2taignes",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de fromage frais",
          "quantity": 1.0
        },
        {
          "name": "poign\u00e9es de m\u00e2che",
          "quantity": 0.5
        },
        {
          "name": "noisettes concass\u00e9es",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Pour les l\u00e9gumes r\u00f4tis au miel : commencer par pr\u00e9chauffer le four \u00e0 200\u00b0C.",
        "\u00c9plucher la butternut et la betterave.",
        "Couper la butternut en deux puis en tranches \u00e9paisses et la betterave en quartiers.",
        "Les d\u00e9poser sur une plaque de cuisson recouverte de papier cuisson. Verser un beau filet d\u2019huile d\u2019olive, quelques branches de thym et assaisonner.",
        "Enfournez environ 35 minutes. Au bout de 20 minutes de cuisson, arroser de miel et laisser cuire encore 15 minutes en mode gril.",
        "Pour les ch\u00e2taignes : inciser les ch\u00e2taignes, les d\u00e9poser sur une plaque de cuisson recouverte de papier cuisson. Laisser cuire 25 \u00e0 30 minutes au four. Enlever l\u2019\u00e9corce et les couper en petits morceaux.",
        "Prendre une tranche de pain, puis \u00e9taler une belle cuill\u00e8re \u00e0 soupe de fromage frais.",
        "D\u00e9poser un peu de m\u00e2che et ensuite la butternut et la betterave r\u00f4tie.",
        "Parsemer d\u2019\u00e9clats de ch\u00e2taignes et de noisettes concass\u00e9es."
      ],
      "categorie": "Accompagnement",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Cookies \u00e0 la cannelle fa\u00e7on cinnamon roll",
      "image": "https://assets.afcdn.com/recipe/20221003/135670_w1024h576c1cx994cy1038cxb2048cyb1536.webp",
      "date": "2022-10-03T10:47:07+02:00",
      "cookTime": 12,
      "prepTime": 15,
      "totalTime": 32,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de sucre blanc",
          "quantity": 0.25
        },
        {
          "name": "g de beurre ramolli",
          "quantity": 0.5
        },
        {
          "name": "g de sucre",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.c d'extrait de vanille",
          "quantity": 0.5
        },
        {
          "name": "g de farine",
          "quantity": 0.75
        },
        {
          "name": "c.\u00e0.c de levure",
          "quantity": 0.25
        },
        {
          "name": "grosse pinc\u00e9e de fleur de sel",
          "quantity": 0.25
        },
        {
          "name": "g de sucre cristallis\u00e9",
          "quantity": 0.75
        },
        {
          "name": "g de beurre sal\u00e9 ramolli",
          "quantity": 1.5
        },
        {
          "name": "1.c.\u00e0.s de cannelle",
          "quantity": 0.25
        },
        {
          "name": "oeufs",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de cannelle",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Pour faire la garniture, dans un saladier, verser les 60 g de beurre, la cassonade et la cannelle et battre le tout.",
        "Tapisser sur une plaque chemis\u00e9e puis mettre au cong\u00e9lateur 5 minutes.",
        "Une fois solidifi\u00e9e, faire des petites boules (de la taille d'une bille).",
        "Placer les petites boules sur une plaque et les mettre au cong\u00e9lateur.",
        "Pour pr\u00e9parer la p\u00e2te, verser dans la cuve d'un robot le beurre et le sucre. Battre jusqu'\u00e0 obtenir une consistance lisse.",
        "Ajouter 2 \u0153ufs, la vanille puis battre \u00e0 nouveau.",
        "Ajouter la farine, la levure, le sel, m\u00e9langer d\u00e9licatement au batteur.",
        "Pour l'assemblage, former tout d'abord des boules de p\u00e2te.",
        "Faire ensuite un trou au centre et ajouter une bille de sucre/beurre/cannelle.",
        "Bouler et ajouter sur le dessus 2 \u00e0 3 billes de sucre/beurre/cannelle.",
        "Avant la cuisson, mettre le topping. Rouler les boules dans le sucre \u00e0 la cannelle pour les enrober.",
        "Enfin, mettre au four pendant 12 minutes.",
        "Apr\u00e8s avoir sorti les biscuits du four, \u00e0 l'aide de cuill\u00e8res, reformer les cookies pour qu'ils soient bien ronds."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Quiche souffl\u00e9e aux 3 fromages",
      "image": "https://assets.afcdn.com/recipe/20220930/135584_w1024h576c1cx1024cy768cxb2048cyb1536.webp",
      "date": "2022-09-30T18:11:54+02:00",
      "cookTime": 35,
      "prepTime": 10,
      "totalTime": 45,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "p\u00e2te bris\u00e9e",
          "quantity": 0.25
        },
        {
          "name": "g de beurre",
          "quantity": 1.0
        },
        {
          "name": "g de farine",
          "quantity": 1.0
        },
        {
          "name": "g d'emmental r\u00e2p\u00e9 Le cavalier",
          "quantity": 1.25
        },
        {
          "name": "g de comt\u00e9 r\u00e2p\u00e9",
          "quantity": 1.25
        },
        {
          "name": "g de beaufort",
          "quantity": 1.25
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "cl de lait entier",
          "quantity": 0.25
        },
        {
          "name": "cl de vin blanc",
          "quantity": 0.25
        },
        {
          "name": "oeufs",
          "quantity": 1.25
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.25
        },
        {
          "name": "cl de kirsch",
          "quantity": 0.75
        }
      ],
      "recipeInstructions": [
        "aire fondre le beurre dans une casserole.",
        "Ajouter la farine et m\u00e9langez 2 min au fouet sur feu moyen.",
        "Verser doucement le lait, le vin et le kirsch en m\u00e9langeant, faire \u00e9paissir sur feu moyen.",
        "Saler et poivrer.",
        "Hors du feu, incorporer les fromages, puis les jaunes d\u2019\u0153ufs en remuant.",
        "Fouetter les blancs d\u2019oeufs en neige ferme et les ajouter d\u00e9licatement \u00e0 la pr\u00e9paration au fromage.",
        "Frotter la gousse d'ail contre le moule.",
        "D\u00e9rouler la p\u00e2te dans un moule \u00e0 g\u00e2teau, piquer le fond \u00e0 la fourchette.",
        "Verser la pr\u00e9paration au fromage.",
        "Enfourner et faire cuire 30 \u00e0 35 min.",
        "D\u00e9guster d\u00e8s la sortie du four."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Cr\u00eape tortilla aux oeufs",
      "image": "https://assets.afcdn.com/recipe/20220930/135583_w1024h576c1cx1017cy650cxb2048cyb1135.webp",
      "date": "2022-09-30T17:47:10+02:00",
      "cookTime": 5,
      "prepTime": 5,
      "totalTime": 10,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "pesto",
          "quantity": "NaN"
        },
        {
          "name": "tortilla",
          "quantity": 1.0
        },
        {
          "name": "oeuf",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de feta \u00e9mi\u00e9t\u00e9e",
          "quantity": 2.0
        },
        {
          "name": "poign\u00e9e d'\u00e9pinards",
          "quantity": 1.0
        },
        {
          "name": "pommes de terres de primeur cuites",
          "quantity": "NaN"
        },
        {
          "name": "champignon de Paris en tranche",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Dans une po\u00eale, verser un \u0153uf battu.",
        "Recouvrir d'une tortilla.",
        "Sur un quart de la tortilla d\u00e9poser de la feta \u00e9miett\u00e9e.",
        "Sur un autre quart une poign\u00e9e d'\u00e9pinard.",
        "Sur un autre quart, \u00e9taler du pesto et de la pomme de terre.",
        "Enfin, sur le dernier quart, disposer des tranches d'\u00e9pinard.",
        "Couper un rayon de la tortilla.",
        "Plier en quatre."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "P\u00e2tes aux deux courgettes : crue et cuite !",
      "image": "https://assets.afcdn.com/recipe/20220915/135136_w1024h576c1cx1512cy2016cxb3024cyb4032.webp",
      "date": "2022-09-14T17:14:47+02:00",
      "cookTime": 10,
      "prepTime": 23,
      "totalTime": 33,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "courgettes",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.75
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "g de spaghetti",
          "quantity": 1.25
        },
        {
          "name": "oignon rouge",
          "quantity": 0.25
        },
        {
          "name": "citron",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "D\u00e9tailler 1/2 courgette en lamelles tr\u00e8s fines avec un \u00e9conome. Assaisonner de citron, de sel et d'une cuill\u00e8re d'huile d'olive. M\u00e9langer et laisser mariner.",
        "D\u00e9tailler le reste de la courgette en d\u00e9s et hacher l'oignon.",
        "Mettre les p\u00e2tes \u00e0 cuire dans un grande volume d'eau bouillante sal\u00e9e. (cuisson al dente)",
        "Pendant ce temps, faire revenir les oignons et la courgette en d\u00e9s dans le reste d'huile d'olive dans une grande po\u00eale ou une sauteuse (pour qu'il y est assez de place pour mettre les p\u00e2tes cuites). Saler.",
        "Lorsque les p\u00e2tes sont cuites, les \u00e9goutter grossi\u00e8rement puis les mettre dans la sauteuse avec les courgettes. Ajouter quelques cuill\u00e8res d'eau de cuisson des p\u00e2tes et bien m\u00e9langer pour enrober les p\u00e2tes.",
        "Servir en ajoutant les lani\u00e8res de courgettes crues par dessus. Poivrer et, si le citron est bio et bien laver, ajouter son zeste par dessus."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Funky Pop Corn",
      "image": "https://assets.afcdn.com/recipe/20220914/135112_w1024h576c1cx1512cy1686cxb3024cyb3372.webp",
      "date": "2022-09-14T17:51:09+02:00",
      "cookTime": 10,
      "prepTime": 1800,
      "totalTime": 1830,
      "numberPersons": 3,
      "recipeIngredient": [
        {
          "name": "g de chocolat",
          "quantity": 1.0
        },
        {
          "name": "g d'huile",
          "quantity": 1.6666666666666667
        },
        {
          "name": "g de sucre",
          "quantity": 0.3333333333333333
        },
        {
          "name": "Ma\u00efs \u00e0 pop corn",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Chauffer l'huile dans une po\u00eale",
        "Mettre vos grain de ma\u00efs et le sucre dans la po\u00eale, faire chauffer \u00e0 feu vif avec un couvercle (transparent, de pr\u00e9f\u00e9rence).",
        "Une fois que le ma\u00efs est \u00e9clat\u00e9, \u00e9teindre le feu.",
        "Fondre le chocolat au micro onde.",
        "Recouvrir nos pop corn de chocolat fondu.",
        "\u00c9taler les popcorn chocolat sur une plaque et mettre au frigo pendant au moins 20 minutes.",
        "Sortir les pop corn, mettre dans un saladier et r\u00e9galez vous !!"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Tomato Egg (express)",
      "image": "https://assets.afcdn.com/recipe/20220914/135082_w1024h576c1cx2815cy1838cxb5184cyb3456.webp",
      "date": "2022-09-14T10:32:10+02:00",
      "cookTime": 10,
      "prepTime": 5,
      "totalTime": 15,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.c de gingembre r\u00e2p\u00e9",
          "quantity": 0.5
        },
        {
          "name": "tomates coup\u00e9es en d\u00e8s",
          "quantity": 1.5
        },
        {
          "name": "huile",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "pinc\u00e9e de chili",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.c d'huile de s\u00e9same",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.c de f\u00e9cule de ma\u00efs",
          "quantity": 0.5
        },
        {
          "name": "oeufs",
          "quantity": 1.0
        },
        {
          "name": "ciboule",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de sauce d'hu\u00eetre",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Faire revenir dans de l'huile le gingembre.",
        "Ajouter les tomates, le chili, le sel et le poivre, l'huile de s\u00e9same et la sauce\ufeff\ufeff d'hu\u00eetre.",
        "Laisser mijoter quelques minutes jusqu'\u00e0 ce que la\ufeff tomate soit dissoute.",
        "Verser 1/2 c\u00e0c de f\u00e9cule de ma\u00efs d\u00e9layer dans un peu d'eau chaude.",
        "Ajouter les oeufs battus l\u00e9g\u00e8rement.",
        "Laisser cuire une minute puis m\u00e9langer d\u00e9licatement avec les tomates.",
        "Ajouter un peu un peu de ciboule coup\u00e9e au couteau fin.",
        "Sur l\u2019\u0153uf ajouter de la ciboule fraiche et servir avec du riz."
      ],
      "categorie": "Accompagnement",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Poulet miel ail (express)",
      "image": "https://assets.afcdn.com/recipe/20220914/135081_w1024h576c1cx2507cy1946cxb5184cyb3456.webp",
      "date": "2022-09-14T10:16:35+02:00",
      "cookTime": 10,
      "prepTime": 5,
      "totalTime": 15,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.s de vinaigre de riz",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de miel",
          "quantity": 0.75
        },
        {
          "name": "pinc\u00e9e de piment",
          "quantity": 0.25
        },
        {
          "name": "gingembre",
          "quantity": "NaN"
        },
        {
          "name": "s\u00e9same graines",
          "quantity": "NaN"
        },
        {
          "name": "Hauts de cuisses d\u00e9soss\u00e9s",
          "quantity": 1.0
        },
        {
          "name": "gousses d'ail",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de sauce soja",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Saler et poivrer le poulet.",
        "Le faire revenir sur une po\u00eale \u00e0 sec pour le colorer.",
        "Le retourner\ufeff\ufeff.",
        "Ajouter l'ail coup\u00e9 finement et le gingembre r\u00e2p\u00e9.",
        "Laisser revenir.",
        "Ajouter le soja, le vinaigre et le miel ainsi que la pinc\u00e9e de piment.",
        "Laisser revenir jusqu'\u00e0 ce que la sauce caram\u00e9lise/ r\u00e9duise.",
        "Couper en lamelles.",
        "Le poulet peut \u00eatre servi avec du riz."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Boulettes de porc enroul\u00e9es de nouilles",
      "image": "https://assets.afcdn.com/recipe/20220914/135080_w1024h576c1cx2338cy1869cxb5184cyb3456.webp",
      "date": "2022-09-14T09:57:54+02:00",
      "cookTime": 10,
      "prepTime": 20,
      "totalTime": 30,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "feuilles de coriandre",
          "quantity": 1.0
        },
        {
          "name": "huile",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "gousses d'ail",
          "quantity": 1.5
        },
        {
          "name": "g de porc hach\u00e9",
          "quantity": 0.5
        },
        {
          "name": "jaune d'oeuf",
          "quantity": "NaN"
        },
        {
          "name": "g de nouilles au jaune d'oeuf",
          "quantity": 0.5
        },
        {
          "name": "sauce aigre douce",
          "quantity": "NaN"
        },
        {
          "name": "batavia",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Mixer la coriandre, les 3 gousses d\u2019ail, le sel et le poivre.",
        "Ajouter le porc et le jaune d\u2019\u0153uf.",
        "Faire des petites boules.",
        "Faire cuire les nouilles et les rincer \u00e0 l\u2019eau froide.",
        "Enrouler les boules de nouilles.",
        "Faire frire dans un bain d\u2019huile neutre jusqu'\u00e0 ce que les nouilles soient dor\u00e9es.",
        "Servir sur quelques feuilles de batavia avec de la sauce aigre-douce."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Orichiette pestou pistache",
      "image": "https://assets.afcdn.com/recipe/20220901/134739_w1024h576c1cx2150cy1437cxb4173cyb2886.webp",
      "date": "2022-08-22T15:57:47+02:00",
      "cookTime": 9,
      "prepTime": 5,
      "totalTime": 14,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 5.0
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre blanc",
          "quantity": "NaN"
        },
        {
          "name": "g de pistaches vertes non sal\u00e9es",
          "quantity": 9.0
        },
        {
          "name": "poign\u00e9e de basilic",
          "quantity": 1.0
        },
        {
          "name": "g de Parmesan",
          "quantity": 3.0
        },
        {
          "name": "g de pignons",
          "quantity": 3.0
        },
        {
          "name": "g de p\u00e2te orichiette",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Faire cuire les orecchiette al dente.",
        "Pendant qu'elles cuisent, dans un mixer, d\u00e9poser les pistaches, le sel, le poivre, le basilic et l'huile d'olive.",
        "Mixer grossi\u00e8rement.",
        "\u00c9goutter les p\u00e2tes et garder un peu de l'eau de cuisson.",
        "Dans la casserole, ajouter le pesto aux p\u00e2tes et verser un peu d'eau de cuisson.",
        "M\u00e9langer.",
        "Servir avec un peu de pistaches concass\u00e9es et basilic cisel\u00e9 et un filet d'huile d'olive si besoin."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Cheesecake \u00e0 la courgette",
      "image": "https://assets.afcdn.com/recipe/20220829/134644_w1024h576c1cx2707cy1653cxb5184cyb3456.webp",
      "date": "2022-08-22T15:38:29+02:00",
      "cookTime": 60,
      "prepTime": 20,
      "totalTime": 140,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 2.5
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 1.0
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "courgettes",
          "quantity": 1.0
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "g de biscuits ap\u00e9ritifs crackers",
          "quantity": 0.5
        },
        {
          "name": "g de parmesan r\u00e2p\u00e9",
          "quantity": 3.5
        },
        {
          "name": "g de ricotta",
          "quantity": 0.5
        },
        {
          "name": "g de fromage frais",
          "quantity": 0.5
        },
        {
          "name": "g de ch\u00e8vre frais",
          "quantity": 1.5
        },
        {
          "name": "g de faisselle",
          "quantity": 1.5
        },
        {
          "name": "oeufs",
          "quantity": 2.0
        },
        {
          "name": "feuilles de menthe",
          "quantity": 1.0
        },
        {
          "name": "jus de citron citron",
          "quantity": 0.5
        },
        {
          "name": "citron",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Mixer les biscuits et les m\u00e9langer avec le parmesan et le beurre fondu.",
        "Verser cette base dans un moule \u00e0 charni\u00e8re.",
        "Bien tasser les miettes dans le fond.",
        "R\u00e9server cette base au frigo.",
        "M\u00e9langer ensemble les fromages, ajouter les \u0153ufs, \ufeffl\u2019huile d\u2019olive, le citron, la menthe cisel\u00e9e, les courgettes en spaghetti, saler et poivrer.",
        "Verser cet appareil sur la base du cheesecake.",
        "Cuire dans un four \u00e0 160\u2009\u00b0C pendant 1h.",
        "Laisser le cheesecake dans le four pendant 1h en laissant le four un peu entre ouvert.",
        "Mettre au frigo une fois \u00e0 temp\u00e9rature ambiante.",
        "Au moment de servir, faire des spaghetti de courgettes.",
        "Saler et laisser mariner quelques minutes.",
        "\u00c9goutter le surplus d'eau.",
        "Verser un filet de jus de citron et un filet d'huile d'olive, ajouter de la menthe cisel\u00e9 et poivrer.",
        "Ajouter en topping sur le cheesecake."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Boule tresse dessert",
      "image": "https://assets.afcdn.com/recipe/20220901/134740_w1024h576c1cx960cy541cxb1920cyb1082.webp",
      "date": "2022-08-22T15:12:21+02:00",
      "cookTime": 15,
      "prepTime": 15,
      "totalTime": 30,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "p\u00e2te feuillet\u00e9e",
          "quantity": 0.16666666666666666
        },
        {
          "name": "chocolat noir fondu",
          "quantity": "NaN"
        },
        {
          "name": "jaune d'oeuf",
          "quantity": 0.16666666666666666
        },
        {
          "name": "\u00e9clats de noisettes",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "\u00c9\ufefftaler le chocolat \ufeffsur la p\u00e2te feuillet\u00e9e.",
        "Recouvrir d'\u00e9clats de noisettes.",
        "R\u00e9aliser une tresse puis une boule.",
        "Recouvrir de jaune d'\u0153uf et d'\u00e9clats de noisette.",
        "Cuire 15 min \u00e0 180\u2009\u00b0C."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Crumble poivron chorizo",
      "image": "https://assets.afcdn.com/recipe/20220901/134721_w1024h576c1cx2007cy2238cxb5184cyb3456.webp",
      "date": "2022-08-22T15:06:06+02:00",
      "cookTime": 30,
      "prepTime": 15,
      "totalTime": 45,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "poivrons",
          "quantity": 0.75
        },
        {
          "name": "oignon",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.5
        },
        {
          "name": "g de beurre",
          "quantity": 1.75
        },
        {
          "name": "g de farine",
          "quantity": 2.25
        },
        {
          "name": "pinc\u00e9e d'origan",
          "quantity": 0.25
        },
        {
          "name": "basilic",
          "quantity": "NaN"
        },
        {
          "name": "g de parmesan r\u00e2p\u00e9",
          "quantity": 1.75
        },
        {
          "name": "g de feta",
          "quantity": 1.25
        },
        {
          "name": "g de chorizo",
          "quantity": 0.25
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Couper l'oignon et les poivrons en fines lamelles.",
        "Hacher l'ail finement.",
        "Couper le chorizo.",
        "Dans une po\u00eale chaude avec de l'huile d'olive, faire revenir les oignons, les poivrons, l'ail, le chorizo.",
        "Saler et poivrer.",
        "Cuire une dizaine de minutes tout en remuant de temps en temps.",
        "Dans un saladier, m\u00e9langer la farine, le parmesan et le beurre froid et l'origan \u00e0 la main, jusqu\u2019\u00e0 obtention d\u2019une p\u00e2te sableuse.",
        "Dans un moule \u00e0 gratin, d\u00e9poser le m\u00e9lange \u00e0 base de poivron.",
        "\u00c9mietter la feta.",
        "Recouvrir avec la p\u00e2te \u00e0 crumble.",
        "Faites gratiner 20 minutes \u00e0 \ufeff180\u2009\u00b0C."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Aubergines tahini harissa",
      "image": "https://assets.afcdn.com/recipe/20220901/134722_w1024h576c1cx2823cy1546cxb5184cyb3456.webp",
      "date": "2022-08-22T14:56:21+02:00",
      "cookTime": 6,
      "prepTime": 10,
      "totalTime": 16,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "aubergines",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de harissa",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de miel",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 3.0
        },
        {
          "name": "coriandre",
          "quantity": "NaN"
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de yaourt \u00e0 la grecque",
          "quantity": 3.0
        },
        {
          "name": "c.\u00e0.s de tahini",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de jus de citron",
          "quantity": 0.5
        },
        {
          "name": "demi de zeste de citron",
          "quantity": 0.5
        },
        {
          "name": "gousse d'ail hach\u00e9e",
          "quantity": 0.5
        },
        {
          "name": "menthe cisel\u00e9e",
          "quantity": "NaN"
        },
        {
          "name": "graines de s\u00e9same dor\u00e9es",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Huiler les aubergines enti\u00e8res avec la peau.",
        "Les faire cuire sur une po\u00eale chaude.",
        "Laisser cuire les aubergines sur tous les c\u00f4t\u00e9s.",
        "Pendant que \u00e7a cuit, m\u00e9langer le tahini, le yaourt grec, les zestes et le jus de citron, l'ail, le sel et le poivre.",
        "Dans un autre contenant, m\u00e9langer, l'huile d'olive, la harissa et le miel.",
        "Dresser joliment le yaourt travaill\u00e9 sur deux assiettes.",
        "D\u00e9poser l'aubergine dont on aura retir\u00e9 la peau et qu'on aura ouvert en deux sur le dessus en laissant la partie du haut soud\u00e9e.",
        "Ajouter l'huile \u00e0 la harissa, les herbes et les graines de s\u00e9sames dor\u00e9es\ufeff\ufeff\ufeff\ufeff\ufeff\ufeff\ufeff\ufeff\ufeff."
      ],
      "categorie": "Accompagnement",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Pr\u00e9fou",
      "image": "https://assets.afcdn.com/recipe/20220725/133741_w1024h576c1cx1426cy1730cxb3024cyb3456.webp",
      "date": "2022-07-25T14:45:17+02:00",
      "cookTime": 15,
      "prepTime": 30,
      "totalTime": 125,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "bouquet de persil",
          "quantity": 0.25
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "g de beurre demi-sel",
          "quantity": 0.25
        },
        {
          "name": "gousses d'ail",
          "quantity": 1.0
        },
        {
          "name": "g de farine",
          "quantity": 0.5
        },
        {
          "name": "sachet de levure de boulanger s\u00e8che",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de sucre en poudre",
          "quantity": 0.5
        },
        {
          "name": "g de beurre demi-sel",
          "quantity": 0.5
        },
        {
          "name": "cl d'eau",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Dans un grand saladier, m\u00e9langer la farine, la levure et le sucre.",
        "Ajouter le beurre demi-sel pr\u00e9alablement fondu, puis l'eau.",
        "P\u00e9trir la p\u00e2te environ 10 minutes \u00e0 vitesse moyenne  pour qu\u2019elle devienne bien homog\u00e8ne.",
        "Apr\u00e8s le p\u00e9trissage, former une boule de p\u00e2te, recouvrir le saladier d\u2019un torchon et faire lever la p\u00e2te dans une pi\u00e8ce chaude pendant 1 heure.",
        "D\u00e9gazer la p\u00e2te et diviser le p\u00e2tons en deux. Former deux boudins et placer sur une plaque chemis\u00e9e et laisser 30 minutes.",
        "Pr\u00e9parer le beurre \u00e0 l'ail : m\u00e9langer le beurre pommade, l\u2019ail press\u00e9, le persil hach\u00e9 et le sel.",
        "Mettre le pain \u00e0 cuire \u00e0 200\u00b0 pendant 15 minutes.",
        "Couper le pain dans le sens de la longueur et garnir g\u00e9n\u00e9reusement de beurre \u00e0 l'ail. Couper des tranches de 2 cm environ et servir !"
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Chakchouka",
      "image": "https://assets.afcdn.com/recipe/20220721/133679_w1024h576c1cx1103cy616cxb2296cyb1292.webp",
      "date": "2022-07-21T17:31:01+02:00",
      "cookTime": 65,
      "prepTime": 5,
      "totalTime": 70,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de poivron vert",
          "quantity": 1.25
        },
        {
          "name": "g de tomate",
          "quantity": 1.25
        },
        {
          "name": "oignon",
          "quantity": 0.25
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.c de cumin",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de piment",
          "quantity": 0.25
        },
        {
          "name": "cl d'huile",
          "quantity": 1.25
        },
        {
          "name": "merguez",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.c de paprika",
          "quantity": 0.25
        },
        {
          "name": "gousses d'ail",
          "quantity": 0.5
        },
        {
          "name": "oeufs",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Couper les poivrons en d\u00e9s.",
        "\u00c9plucher et couper les tomates en d\u00e9s.",
        "Couper les oignons dans la longueur.",
        "Dans une grande po\u00eale, faire revenir le cumin dans l'huile avec les\ufeff oignons. Puis ajouter et \ufeffm\u00e9langer tous les ingr\u00e9dients (sauf les \u0153ufs et les merguez) et faire compoter pendant heure.",
        "Verser le m\u00e9lange dans une po\u00eale.",
        "Casser les \u0153ufs et couvrir le tout 5 minutes. Enfin, servir avec de la coriandre\ufeff\ufeff\ufeff."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Noodles salad express",
      "image": "https://assets.afcdn.com/recipe/20220720/133645_w1024h576c1cx2017cy1541cxb4053cyb2702.webp",
      "date": "2022-07-20T17:32:31+02:00",
      "cookTime": 0,
      "prepTime": 20,
      "totalTime": 20,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "carotte",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de vinaigre de riz",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.c d'huile de s\u00e9same",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de gingembre r\u00e2p\u00e9",
          "quantity": 1.0
        },
        {
          "name": "piment oiseau",
          "quantity": "NaN"
        },
        {
          "name": "coriandre",
          "quantity": "NaN"
        },
        {
          "name": "g de nouilles",
          "quantity": 1.0
        },
        {
          "name": "concombre",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de cacahu\u00e8tes p\u00e2te de cacahu\u00e8tes",
          "quantity": 2.0
        },
        {
          "name": "c.\u00e0.s de soja",
          "quantity": 3.0
        },
        {
          "name": "demi de citron vert jus",
          "quantity": 1.0
        },
        {
          "name": "gousse d'ail",
          "quantity": 1.0
        },
        {
          "name": "oignon frais",
          "quantity": 1.0
        },
        {
          "name": "graines de s\u00e9same",
          "quantity": "NaN"
        },
        {
          "name": "cacahu\u00e8tes",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Faire cuire vos nouilles.",
        "Dans un saladier, d\u00e9poser la p\u00e2te de cacahu\u00e8te, le soja, le vinaigre, le jus de citron vert, le sucre et l'huile de s\u00e9same.",
        "R\u00e2per le gingembre et l'ail puis m\u00e9langer.",
        "R\u00e2per ensuite la carotte et le concombre en spaghetti et ciseler l'oignon.",
        "Vous pouvez maintenant verser la sauce dans les nouilles et m\u00e9langer.",
        "D\u00e9poser la carotte, le concombre, l'oignon frais. R\u00e9server un peu de la pr\u00e9paration pour le dressage.",
        "Dresser sur une assiette plate ou creuse, selon vos pr\u00e9f\u00e9rences, les nouilles. Ajouter de belles feuilles de coriandre, de la cacahu\u00e8te concass\u00e9e et des graines de s\u00e9same."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen"
    },
    {
      "name": "Sundae",
      "image": "https://assets.afcdn.com/recipe/20220720/133641_w1024h576c1cx678cy556cxb1398cyb1144.webp",
      "date": "2022-07-20T16:41:42+02:00",
      "cookTime": 0,
      "prepTime": 20,
      "totalTime": 50,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "cl de cr\u00e8me fra\u00eeche",
          "quantity": 0.75
        },
        {
          "name": "extrait de vanille",
          "quantity": "NaN"
        },
        {
          "name": "g de mascarpone",
          "quantity": 0.5
        },
        {
          "name": "g de lait concentr\u00e9",
          "quantity": 2.25
        },
        {
          "name": "sauce caramel",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Fouetter la cr\u00e8me bien froide et le mascarpone afin d'en faire une bonne chantilly.",
        "Incorporer le lait concentr\u00e9 dans le chantilly.",
        "Mettre la pr\u00e9paration dans une poche \u00e0 douille.",
        "Dresser dans le r\u00e9cipient et laisser au cong\u00e9lateur pour au moins 30 minutes.",
        "Sortir les pots, et les garnir de sauce caramel.",
        "R\u00e9galez-vous !!"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Concombres farcis au thon et aux tomates",
      "image": "https://assets.afcdn.com/recipe/20220719/133613_w1024h576c1cx747cy1026cxb1500cyb2000.webp",
      "date": "2022-07-19T17:28:50+02:00",
      "cookTime": 0,
      "prepTime": 15,
      "totalTime": 15,
      "numberPersons": 8,
      "recipeIngredient": [
        {
          "name": "tomate",
          "quantity": 0.125
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "thon en boite",
          "quantity": 0.125
        },
        {
          "name": "g de fromage frais Saint-Moret",
          "quantity": 0.625
        },
        {
          "name": "c.\u00e0.c de ciboulette",
          "quantity": 0.25
        },
        {
          "name": "concombres",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Couper vos concombres en deux et enlever la chair.",
        "Une fois cette \u00e9tape faite, couper votre tomate en cubes pour les ajouter dans un second temps \u00e0 votre farce.",
        "Dans un bol, m\u00e9langer le thon, le fromage frais, la tomate coup\u00e9e et le reste de concombres.",
        "Ajouter un filet d'huile d'olive dans votre pr\u00e9paration, saler et poivrer. Mettre la ciboulette.",
        "La pr\u00e9paration est termin\u00e9e, il ne reste plus qu'\u00e0 garnir vos concombres."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tarte aux fraises et au basilic de Cl\u00e9mence",
      "image": "https://assets.afcdn.com/recipe/20220624/133043_w1024h576c1cx681cy573cxb1818cyb1818.webp",
      "date": "2022-06-24T12:04:13+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 8,
      "recipeIngredient": [
        {
          "name": "fraises fra\u00eeches",
          "quantity": "NaN"
        },
        {
          "name": "basilic frais",
          "quantity": "NaN"
        },
        {
          "name": "nappage neutre",
          "quantity": "NaN"
        },
        {
          "name": "g de sucre",
          "quantity": 0.25
        },
        {
          "name": "g de fruits rouges",
          "quantity": 0.125
        },
        {
          "name": "g de glucose",
          "quantity": 0.125
        },
        {
          "name": "g de pectine",
          "quantity": 0.375
        },
        {
          "name": "g de jus de citron",
          "quantity": 0.125
        },
        {
          "name": "g de sucre glace",
          "quantity": 0.125
        },
        {
          "name": "g de beurre doux",
          "quantity": 0.125
        },
        {
          "name": "oeufs",
          "quantity": 0.25
        },
        {
          "name": "g d'amandes en poudre",
          "quantity": 0.125
        },
        {
          "name": "zeste de citron vert",
          "quantity": "NaN"
        },
        {
          "name": "g de beurre doux",
          "quantity": 1.125
        },
        {
          "name": "g de sucre glace tamis\u00e9",
          "quantity": 1.125
        },
        {
          "name": "g de farine",
          "quantity": 0.125
        },
        {
          "name": "g de sel fin",
          "quantity": 0.125
        },
        {
          "name": "g de f\u00e9cule de pomme de terre",
          "quantity": 0.625
        },
        {
          "name": "g d'amandes en poudre",
          "quantity": 0.25
        },
        {
          "name": "oeuf",
          "quantity": 0.125
        },
        {
          "name": "g de chocolat de couverture blanc",
          "quantity": 0.625
        },
        {
          "name": "1.g de g\u00e9latine en poudre",
          "quantity": 0.125
        },
        {
          "name": "g d'eau froide",
          "quantity": 1.125
        },
        {
          "name": "g de cr\u00e8me liquide 30% MG chaude",
          "quantity": 0.125
        },
        {
          "name": "g de cr\u00e8me liquide 30% MG froide",
          "quantity": 0.125
        }
      ],
      "recipeInstructions": [
        "Mettre les feuilles de basilic dans la cr\u00e8me froide et laisser infuser au moins 2h.",
        "Hydrater la g\u00e9latine dans l\u2019eau froide pendant 20 minutes.",
        "Faire fondre le chocolat blanc.",
        "Chauffer la cr\u00e8me liquide et la verser sur le chocolat blanc et la g\u00e9latine r\u00e9hydrat\u00e9e et bien m\u00e9langer.",
        "Ajouter la cr\u00e8me froide en chinoisant pour enlever les feuilles de basilic.",
        "Mixer au mixeur plongeant, filmer au contact et r\u00e9server au frigo toute la nuit.",
        "Au robot \u00e0 la feuille\u00a0: m\u00e9langer en vitesse minimum sucre glace, beurre, sel, farine, f\u00e9cule PDT, et poudre d\u2019amande\npour r\u00e9aliser un sablage. Il ne doit plus y avoir de morceaux de beurre.",
        "Ajouter l\u2019\u0153uf en vitesse minimum et stopper quand la p\u00e2te est homog\u00e8ne.",
        "D\u00e9barrasser la p\u00e2te et l\u2019\u00e9taler entre deux feuilles de papier guitare ou sulfuris\u00e9 sur une \u00e9paisseur de 3mm. R\u00e9server\n30 minutes au cong\u00e9lateur puis foncer le cercle \u00e0 tarte beurr\u00e9. Piquer le fond de tarte \u00e0 la fourchette.",
        "Laisser cro\u00fbter au r\u00e9frig\u00e9rateur plusieurs heures ou une nuit, et passer 15-20 minutes au cong\u00e9lateur avant cuisson.",
        "Pr\u00e9chauffer four \u00e0 200\u00b0. Enfourner et baisser \u00e0 150\u00b0. Cuire 15-20 min, avec ou sans billes de cuisson sur le fond de tarte.",
        "M\u00e9langer les poudres et le beurre pommade.",
        "Ajouter les \u0153ufs et m\u00e9langer. Ajouter les zestes et m\u00e9langer.",
        "Pocher \u00e0 1/3 de la hauteur de la tarte et cuire 10 min \u00e0 160\u00b0. Refroidir. Dorer au jaune d\u2019\u0153uf et cuire 5 min \u00e0 160\u00b0C.",
        "Chauffer la pur\u00e9e de framboise et le glucose sur feu moyen jusqu\u2019\u00e0 ce que \u00e7a fume.",
        "Verser le m\u00e9lange sucre et pectine en pluie en fouettant.",
        "Porter \u00e0 \u00e9bullition en fouettant et cuire 20 secondes \u00e0 partir de l\u2019\u00e9bullition.",
        "Hors du feu, ajouter jus de citron et m\u00e9langer. Filmer au contact et r\u00e9server au frigo. Mixer avant utilisation.",
        "Monter la ganache mont\u00e9e au fouet et tapisser le fond de tarte pr\u00e9cuit avec la cr\u00e8me d\u2019amande en couche uniforme.",
        "Mixer le confit et garnir la tarte \u00e0 hauteur.",
        "Couper des fraises fraiches en rondelles et les disposer sur la tarte. Les napper de nappage neutre pour les prot\u00e9ger\net disposer quelques feuilles de basilic frais."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "La tarte aux fraises revisit\u00e9e de Marie-Ange",
      "image": "https://assets.afcdn.com/recipe/20220624/133039_w1024h576c1cx2480cy1420cxb4640cyb2088.webp",
      "date": "2022-06-24T11:13:12+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 8,
      "recipeIngredient": [
        {
          "name": "g de fraises",
          "quantity": 0.25
        },
        {
          "name": "g de sucre",
          "quantity": 0.625
        },
        {
          "name": "sachet d'agar-agar",
          "quantity": 0.125
        },
        {
          "name": "g de beurre",
          "quantity": 0.625
        },
        {
          "name": "g de sucre glace",
          "quantity": 0.625
        },
        {
          "name": "g d'amandes en poudre",
          "quantity": 0.625
        },
        {
          "name": "g de farine",
          "quantity": 0.5
        },
        {
          "name": "g de sel",
          "quantity": 0.5
        },
        {
          "name": "g de sucre glace",
          "quantity": 0.125
        },
        {
          "name": "g de beurre",
          "quantity": 0.25
        },
        {
          "name": "g d'amandes en poudre",
          "quantity": 0.25
        },
        {
          "name": "oeuf",
          "quantity": 0.125
        },
        {
          "name": "oeuf",
          "quantity": 0.125
        },
        {
          "name": "g de sucre",
          "quantity": 0.75
        },
        {
          "name": "g de fraises",
          "quantity": 0.5
        },
        {
          "name": "sachet de nappage neutre",
          "quantity": 0.125
        },
        {
          "name": "ml d'eau",
          "quantity": 0.25
        },
        {
          "name": "sirop de fraise",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "D\u00e9couper des rondelles de fraises et les placer \u00e0 l'int\u00e9rieur d'un moule en silicone.",
        "Dans une casserole, faire chauffer l'eau, le sucre, quelques cuill\u00e8res de sirop et le nappage neutre.",
        "Verser ce nappage chaud sur les fraises.",
        "Laisser refroidir au frais pendant 2h minimum.",
        "M\u00e9langer le beurre mou et le sucre glace. Quand le m\u00e9lange est homog\u00e8ne, ajouter la poudre d'amandes, l'\u0153uf, le sel et la farine. M\u00e9langer le moins possible et foncer le cercle de la tarte. Garder au frais pendant 30 minutes. Et cuire 15 minutes \u00e0 165\u00b0C.",
        "M\u00e9langer ensemble tous les ingr\u00e9dients dans un petit bol. Verser sur le fond de tarte. Ajouter quelques fraises fraiches dans la cr\u00e8me et recuire \u00e0 nouveau 15 minutes.",
        "Couper les fraises en morceaux et les cuire \u00e0 feu doux. Quand elles commencent \u00e0 compoter, verser le sucre et l'agar-agar. Laisser cuire 2-3 minutes et verser sur la cr\u00e8me d'amande cuite, bien \u00e0 ras bord. \nGarder au frigo au moins une heure.",
        "Lorsque la tarte est bien froide, sortir la gel\u00e9e du frigo et d\u00e9couper des cercles de la taille de la tarte. Venir les d\u00e9poser tr\u00e8s d\u00e9licatement par dessus le confit.",
        "Finir avec quelques feuilles de basilic bien frais."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Spaghetti cacio e pepe facile",
      "image": "https://assets.afcdn.com/recipe/20220708/133393_w1024h576c1cx2016cy1512cxb4032cyb3024.webp",
      "date": "2022-06-21T16:11:31+02:00",
      "cookTime": 20,
      "prepTime": 15,
      "totalTime": 35,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de poivre noir",
          "quantity": 0.25
        },
        {
          "name": "g de spaghetti",
          "quantity": 0.25
        },
        {
          "name": "g de pecorino romano",
          "quantity": 0.25
        },
        {
          "name": "ml d'eau de cuisson",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Cuire les p\u00e2tes",
        "Pr\u00e9lever quelques cuill\u00e8res \u00e0 soupe d'eau de cuisson avant la fin.",
        "M\u00e9langer le pecorino, le parmesan, la moiti\u00e9 du poivre avec l'eau de cuisson.\nM\u00e9langer vigoureusement jusqu'\u00e0 obtenir une cr\u00e8me assez lisse",
        "Lorsque les p\u00e2tes sont al dente, les \u00e9goutter bri\u00e8vement, les incorporer au m\u00e9lange.",
        "M\u00e9langer en rajoutant une petite louche d'eau de cuisson.",
        "Servir en ajoutant un peu de poivre et un peu de pecorino."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Wrap pizza au chorizo",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_3.jpg",
      "date": "2022-06-21T14:42:22+02:00",
      "cookTime": 10,
      "prepTime": 15,
      "totalTime": 25,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "sauce tomate",
          "quantity": "NaN"
        },
        {
          "name": "tortilla",
          "quantity": "NaN"
        },
        {
          "name": "mozzarella",
          "quantity": "NaN"
        },
        {
          "name": "chorizo",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Recouvrir une tortilla de sauce tomate",
        "D\u00e9poser une belle poign\u00e9e de mozzarella sur le dessus",
        "Ajouter quelques tranches de chorizo.",
        "Enfourner pendant 10 minutes."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Cookies l\u00e9opard",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_3.jpg",
      "date": "2022-06-21T14:07:52+02:00",
      "cookTime": 20,
      "prepTime": 20,
      "totalTime": 100,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 0.5
        },
        {
          "name": "g de sucre",
          "quantity": 0.5
        },
        {
          "name": "g de farine",
          "quantity": 1.5
        },
        {
          "name": "1/sachet de levure",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "oeuf",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.c d'ar\u00f4me vanille",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de cacao",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer le beurre, le sucre jusqu'\u00e0 l'obtention d'un m\u00e9lange cr\u00e9meux",
        "Incorporer l'\u0153uf et la vanille, puis verser la farine, le sel et le bicarbonate de soude",
        "Mettre de c\u00f4t\u00e9 un peu plus de la moiti\u00e9 de cette pr\u00e9paration",
        "S\u00e9parer le reste de la p\u00e2te en 2 p\u00e2tons de 1/3 et 2/3",
        "Dans la plus petite portion, verser 3 cuill\u00e8res \u00e0 soupe de cacao et m\u00e9langer",
        "Dans la plus grande portion, verser 1 cuill\u00e8re \u00e0 caf\u00e9 de cacao et m\u00e9langer",
        "Rouler respectivement ces deux p\u00e2tes en deux boudins",
        "Aplatir le plus fonc\u00e9 en un rectangle afin de pouvoir enrouler le boudin plus clair et former une ballotine. On peut s'aider d'un film plastique.",
        "Etaler la p\u00e2te blanche",
        "Couper des lamelles du boudin",
        "Disposer les morceaux sur la p\u00e2te blanche",
        "Recouvrir d'un film \u00e9tirable et \u00e9taler. \u00c0 l'aide d'un emporte-pi\u00e8ce, faire des biscuits ronds",
        "Mettre au frais 1h",
        "Cuire 15 \u00e0 20 min \u00e0 180\u00b0C au four."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Pancake fourr\u00e9",
      "image": "https://assets.afcdn.com/recipe/20220513/131960_w1024h576c1cx1456cy1563cxb2912cyb3127.webp",
      "date": "2022-05-13T05:19:00+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de farine",
          "quantity": 0.5
        },
        {
          "name": "g de sucre en poudre",
          "quantity": 1.5
        },
        {
          "name": "sachets de sucre vanill\u00e9",
          "quantity": 0.5
        },
        {
          "name": "g de beurre",
          "quantity": 1.75
        },
        {
          "name": "cl de lait",
          "quantity": 0.5
        },
        {
          "name": "oeufs",
          "quantity": 0.5
        },
        {
          "name": "g de mozzarella",
          "quantity": 0.75
        },
        {
          "name": "g de gouda",
          "quantity": 0.25
        },
        {
          "name": "tranches de bacon",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Faire la p\u00e2te \u00e0 pancake",
        "Faire fondre du beurre dans une po\u00eale",
        "ajouter la moiti\u00e9 da la p\u00e2tes",
        "Une fois que la p\u00e2te \u00e0 pris, retourner le pancake  poser votre garniture dessus, et recouvrir avec le reste de la p\u00e2te.",
        "Finir la cuisson avec un couvercle sur votre po\u00eale si besoin",
        "Enjoy !!"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Grilled cheese sandwich saucisses",
      "image": "https://assets.afcdn.com/recipe/20220513/131959_w1024h576c1cx1512cy1920cxb3024cyb3841.webp",
      "date": "2022-05-13T04:48:16+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de tomate s\u00e9ch\u00e9e",
          "quantity": 0.5
        },
        {
          "name": "tranches de pain de mie",
          "quantity": 0.5
        },
        {
          "name": "tranches de cheddar",
          "quantity": 0.75
        },
        {
          "name": "gruy\u00e8re",
          "quantity": "NaN"
        },
        {
          "name": "oeufs",
          "quantity": 1.0
        },
        {
          "name": "saucisses",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Poser le pain et les saucisses coup\u00e9es en 2 dans la longueur, dans une po\u00eale beurr\u00e9e",
        "Battre les \u0153ufs en omelette",
        "Pendant que les oeufs sont entrain de cuire, d\u00e9poser sur le pain une tranche de fromage (ou 2) et des tomates s\u00e9ch\u00e9es .",
        "Verser les \u0153ufs dans la po\u00eale, et bien veiller que l'omelette se r\u00e9pande partout \u00e0 l'int\u00e9rieur pour lier le tout.",
        "Une fois que les \u0153ufs ont cuit, faire le pliage en coupant en deux notre cercle, chaque moiti\u00e9 contiendra une tranche de pain (avec le fromage et les tomates) et les saucisses.\nPlier en rabattant les saucisses sur la tranche de pain. Et  d\u00e9guster !!!"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "One pot rice au poulet",
      "image": "https://assets.afcdn.com/recipe/20220510/131906_w1024h576c1cx2017cy1205cxb4031cyb3024.webp",
      "date": "2022-05-10T15:26:26+02:00",
      "cookTime": 29,
      "prepTime": 5,
      "totalTime": 34,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "1/cube de bouillon",
          "quantity": 0.5
        },
        {
          "name": "oignon",
          "quantity": 0.5
        },
        {
          "name": "1/c.\u00e0.c d'ail semoule",
          "quantity": 0.5
        },
        {
          "name": "1/c.\u00e0.c de sel",
          "quantity": 0.5
        },
        {
          "name": "1/c.\u00e0.c de poivre",
          "quantity": 0.5
        },
        {
          "name": "1/c.\u00e0.c de piment",
          "quantity": 0.5
        },
        {
          "name": "1/c.\u00e0.s d'huile",
          "quantity": 0.5
        },
        {
          "name": "g de riz",
          "quantity": 1.0
        },
        {
          "name": "ml d'eau",
          "quantity": 2.5
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.5
        },
        {
          "name": "g de cr\u00e8me liquide",
          "quantity": 0.5
        },
        {
          "name": "escalopes de poulet",
          "quantity": 1.0
        },
        {
          "name": "1/c.\u00e0.c de paprika",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Couper le poulet m\u00e9langer avec les \u00e9pices.",
        "Faire revenir les morceaux de poulet \u00e9pic\u00e9s dans une po\u00eale chaude l\u00e9g\u00e8rement huil\u00e9e.",
        "Ajouter ensuite la cr\u00e8me, puis r\u00e9server.",
        "Dans la m\u00eame po\u00eale, faire revenir l'oignon, l'ail, le riz et un demi bouillon, puis verser l'eau.",
        "Ajouter les morceaux de poulet et laisser cuire."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Pannacotta \u00e0 la rose et coulis de fraises et citron de Camille",
      "image": "https://assets.afcdn.com/recipe/20220509/131870_w1024h576c1cx2352cy2970cxb4000cyb6000.webp",
      "date": "2022-05-09T11:51:11+02:00",
      "cookTime": 5,
      "prepTime": 20,
      "totalTime": 265,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "cl de cr\u00e8me fra\u00eeche",
          "quantity": 0.5
        },
        {
          "name": "cl de lait demi-\u00e9cr\u00e9m\u00e9",
          "quantity": 0.5
        },
        {
          "name": "g de sucre",
          "quantity": 1.0
        },
        {
          "name": "g de fraises",
          "quantity": 1.25
        },
        {
          "name": "g de sucre",
          "quantity": 0.75
        },
        {
          "name": "c.\u00e0.s d'ar\u00f4me rose",
          "quantity": 0.75
        },
        {
          "name": "g\u00e9latine en feuilles",
          "quantity": 0.75
        },
        {
          "name": "1/citron jus et zeste",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "D\u00e9poser les feuilles de g\u00e9latine dans de l'eau froide pour les ramollir. Dans une casserole, faire chauffer la cr\u00e8me, le lait et le sucre jusqu'\u00e0 l'apparition des premi\u00e8res \u00e9bullitions. Retirer du feu et ajouter les feuilles de g\u00e9latine essor\u00e9es en m\u00e9langeant.",
        "D\u00e9poser les verrines vides dans une empreintes \u00e0 muffins (ou cannel\u00e9), en biais. Verser la cr\u00e8me d\u00e9licatement et r\u00e9server au r\u00e9frig\u00e9rateur au minimum 4 heures.",
        "Pr\u00e9parer le coulis de fraises : dans une casserole \u00e0 feu doux, d\u00e9poser les fraises coup\u00e9es en 2, avec le sucre et le jus d\u2019un demi citron vert et le zeste. Apr\u00e8s quelques minutes, verser la pr\u00e9paration dans un verre doseur et mixer \u00e0 l\u2019aide d\u2019un mixeur plongeant. Laisser ti\u00e9dir, puis d\u00e9poser au frais. Verser au dessus des Pannacotta avant de d\u00e9guster !"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Entremet \u00e0 la ganache chocolat blanc, gel\u00e9e framboise",
      "image": "https://assets.afcdn.com/recipe/20220509/131865_w1024h576c1cx2452cy3576cxb4000cyb6000.webp",
      "date": "2022-05-09T11:33:28+02:00",
      "cookTime": 15,
      "prepTime": 120,
      "totalTime": 855,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de sucre",
          "quantity": 0.5
        },
        {
          "name": "g de framboises surgel\u00e9es",
          "quantity": 0.5
        },
        {
          "name": "1.g\u00e9latine en feuilles",
          "quantity": 0.25
        },
        {
          "name": "g de sucre",
          "quantity": 0.25
        },
        {
          "name": "g de chocolat blanc",
          "quantity": 1.25
        },
        {
          "name": "feuilles de g\u00e9latine",
          "quantity": 0.5
        },
        {
          "name": "gousse de vanille",
          "quantity": 0.25
        },
        {
          "name": "g d'eau",
          "quantity": 0.75
        },
        {
          "name": "g de cr\u00e8me fleurette",
          "quantity": 1.75
        },
        {
          "name": "g de farine",
          "quantity": 0.25
        },
        {
          "name": "g de beurre",
          "quantity": 0.75
        },
        {
          "name": "g de sel",
          "quantity": 0.25
        },
        {
          "name": "g de sucre glace",
          "quantity": 1.0
        },
        {
          "name": "g d'oeuf",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Pour l\u2019insert, cuire les framboises sur feu doux avec le sucre. Une fois les framboises bien ramollies, ajouter la g\u00e9latine hydrat\u00e9e. Enlever les p\u00e9pins \u00e0 l\u2019aide d\u2019une passoire puis verser le coulis dans des moules \u00e0 insert. Mettre au cong\u00e9lateur pour 12h.",
        "Pour la ganache mont\u00e9e, porter \u00e0 petite \u00e9bullition 2/3 de la cr\u00e8me avec les grains de vanille. Hors du feu, ajouter la g\u00e9latine hydrat\u00e9e puis verser en 3 fois sur le chocolat cass\u00e9s en petits morceaux. Ajouter ensuite le reste de cr\u00e8me froide. Filmer au contact et mettre au cong\u00e9lateur pour 12h.",
        "Le lendemain, monter la ganache au fouet \u00e9lectrique. Garnir les moules \u00ab finger \u00bb de ganache. Ajouter au centre l\u2019insert framboise puis recouvrir de nouveau de ganache. Lisser le dessus a l\u2019aide d\u2019une spatule. Mettre au cong\u00e9lateur pour 12h.",
        "Le lendemain, r\u00e9aliser la p\u00e2te sabl\u00e9e. M\u00e9langer du bout des doigts la farine, les morceaux de beurre, le sel jusqu\u2019\u00e0 obtention d'une p\u00e2te \u00e0 la texture sableuse. Ajouter le sucre glace et l\u2019\u0153uf \u00e0 la spatule ou au robot jusqu\u2019\u00e0 obtention d\u2019une p\u00e2te homog\u00e8ne. Filmer au contact et mettre au frigo pendant 2h.",
        "Sortir la p\u00e2te sabl\u00e9e du r\u00e9frig\u00e9rateur et \u00e9taler \u00e0 l\u2019aide d\u2019un rouleau \u00e0 p\u00e2tisserie. R\u00e9aliser des fingers en p\u00e2te sabl\u00e9e \u00e0 l\u2019aide d\u2019un emporte pi\u00e8ce. Cuire pendant environ 15mins \u00e0 165 degr\u00e9s. Laisser refroidir.",
        "R\u00e9aliser le gla\u00e7age en faisant chauffer l\u2019eau et le sucre \u00e0 100 degr\u00e9s. Ajouter la cr\u00e8me et le colorant et laisser de nouveau chauffer \u00e0 100 degr\u00e9s. Hors du feu, ajouter la g\u00e9latine hydrat\u00e9e et verser sur le chocolat en petits morceaux. M\u00e9langer avec une maryse puis mixer. Une fois que le gla\u00e7age est descendu a 30 degr\u00e9s, le verser sur les entremets glac\u00e9s.",
        "Disposer les entremets sur les biscuits et ajouter des pistaches concass\u00e9es, des chocolats en forme de coeur et des framboises surgel\u00e9es coup\u00e9es en deux.",
        "Mettre au r\u00e9frig\u00e9rateur et attendre quelques heures avant de d\u00e9guster, afin que les entremets soient d\u00e9congel\u00e9s."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9"
    },
    {
      "name": "Cookies gourmands (diff\u00e9rentes garnitures)",
      "image": "https://assets.afcdn.com/recipe/20220321/130211_w1024h576c1cx3000cy2000cxb6000cyb4000.webp",
      "date": "2022-03-21T11:51:42+01:00",
      "cookTime": 12,
      "prepTime": 12,
      "totalTime": 24,
      "numberPersons": 5,
      "recipeIngredient": [
        {
          "name": "g de farine",
          "quantity": 0.8
        },
        {
          "name": "g de beurre",
          "quantity": 0.4
        },
        {
          "name": "g de sucre",
          "quantity": 0.4
        },
        {
          "name": "sachet de levure",
          "quantity": 0.2
        },
        {
          "name": "sachets de sucre vanill\u00e9",
          "quantity": 0.4
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.2
        },
        {
          "name": "oeufs",
          "quantity": 0.6
        },
        {
          "name": "g de pignons",
          "quantity": 0.2
        },
        {
          "name": "g de pralines roses",
          "quantity": 0.2
        },
        {
          "name": "g d'Oreo cookies",
          "quantity": 0.2
        }
      ],
      "recipeInstructions": [
        "Dans la cuve du robot, m\u00e9langer le beurre et le sucre environ 1 minute.",
        "Incorporer les \u0153ufs, puis m\u00e9langer de nouveau 1 minute environ.",
        "Ajouter la farine, le sel, la levure et le sucre vanill\u00e9.",
        "Sortir la p\u00e2te de la cuve et la diviser en 3 parts.",
        "Dans chaque part de p\u00e2te ajouter les ingr\u00e9dients puis m\u00e9langer.",
        "Former 3 boudins avec les 3 p\u00e2tes et filmer chaque boudin.",
        "Placer les boudins 5/10 min au cong\u00e9lateur.",
        "Dans chaque boudin, couper des tranches d'environ 1 cm, ajouter la garniture et les placer sur une plaque de cuisson.",
        "Cuire \u00e0 180\u00b0 \u00e0 12 minutes (15 si vous les aimez plus croustillants et plus dor\u00e9s)."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Cake surprise lapin de P\u00e2ques \u00e0 la vanille et au chocolat",
      "image": "https://assets.afcdn.com/recipe/20220318/130100_w1024h576c1cx2592cy1728cxb5184cyb3456.webp",
      "date": "2022-03-18T13:55:14+01:00",
      "cookTime": 60,
      "prepTime": 20,
      "totalTime": 80,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de chocolat p\u00e2tissier",
          "quantity": 0.25
        },
        {
          "name": "g de sucre en poudre",
          "quantity": 0.25
        },
        {
          "name": "g de farine",
          "quantity": 1.5
        },
        {
          "name": "1/sachet de levure",
          "quantity": 0.25
        },
        {
          "name": "g de beurre",
          "quantity": 2.0
        },
        {
          "name": "oeufs",
          "quantity": 0.75
        },
        {
          "name": "g d'amandes en poudre",
          "quantity": 1.25
        },
        {
          "name": "g de sucre en poudre",
          "quantity": 0.25
        },
        {
          "name": "g de farine",
          "quantity": 0.25
        },
        {
          "name": "g de ma\u00efzena",
          "quantity": 0.25
        },
        {
          "name": "cl d'huile",
          "quantity": 1.25
        },
        {
          "name": "1.sachet de levure chimique",
          "quantity": 0.25
        },
        {
          "name": "sachets de sucre vanill\u00e9",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.c d'extrait de vanille liquide",
          "quantity": 0.25
        },
        {
          "name": "oeufs",
          "quantity": 0.75
        },
        {
          "name": "g de mascarpone",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9paration de l'insert au chocolat.\nPr\u00e9chauffer le four \u00e0 180\u00b0C (thermostat 6).",
        "D\u00e9couper le chocolat en morceaux et le faire fondre au bain-marie.",
        "Dans un saladier, battre les oeufs avec le sucre jusqu\u2019\u00e0 ce que le m\u00e9lange blanchisse puis ajouter la farine, la levure, le beurre fondu, la poudre d\u2019amandes, et le chocolat. Bien m\u00e9langer.",
        "Couvrir une plaque de cuisson de papier sulfuris\u00e9 et \u00e9taler la p\u00e2te au chocolat sur une \u00e9paisseur de 1 \u00e0 2 cm.",
        "Enfourner 15 minutes.",
        "Laisser reposer la g\u00e9noise puis d\u00e9couper \u00e0 l'aide d'un emporte pi\u00e8ce lapin le plus de morceaux possibles.",
        "Disposer chaque morceaux de g\u00e9noise les uns derri\u00e8re les autres de fa\u00e7on \u00e0 former un tube de la longueur du moule \u00e0 cake utiliser pour le cake au mascarpone.",
        "Enrouler le tube de g\u00e9noise dans du film alimentaire et r\u00e9server au cong\u00e9lateur.",
        "Pr\u00e9paration du cake au mascarpone.",
        "Pr\u00e9chauffer le four \u00e0 180\u00b0C (thermostat 6).",
        "Battre au fouet les oeufs, le sucre et le sucre vanill\u00e9, continuer \u00e0 battre et incorporer le mascarpone, l'huile, la farine, la levure et mettre en dernier l'huile essentielle de citron.",
        "Verser la p\u00e2te dans un grand moule \u00e0 cake en en mettant juste la moiti\u00e9 puis disposer l'insert au chocolat et recouvrir de p\u00e2te au mascarpone.\nEnfourner 45 minutes.",
        "A la sortie du four, attendre 5 minutes avant de d\u00e9mouler le g\u00e2teau."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tablettes au chocolat blanc pour P\u00e2ques maison",
      "image": "https://assets.afcdn.com/recipe/20220318/130097_w1024h576c1cx1109cy752cxb2218cyb1505.webp",
      "date": "2022-04-01T14:59:24+02:00",
      "cookTime": 0,
      "prepTime": 10,
      "totalTime": 10,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de chocolat blanc",
          "quantity": 1.0
        },
        {
          "name": "quelques oeuf de P\u00e2ques en sucre pastel",
          "quantity": "NaN"
        },
        {
          "name": "pinc\u00e9e de Vermicelles color\u00e9s",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Concasser le chocolat blanc.\nEn faire fondre les 2/3 au bain-marie puis retirer du feu, ajouter le reste du chocolat blanc puis remuer jusqu'\u00e0 ce qu'il soit bien fondu.",
        "Couler sur une plaque recouverte de papier cuisson puis parsemer dessus des vermicelles pastels, des petits oeufs de P\u00e2ques en sucre pastel et des confettis.",
        "Faire prendre au r\u00e9frig\u00e9rateur.\nCasser en morceaux pour servir."
      ],
      "categorie": "Confiserie",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Tacos Poulet effiloch\u00e9",
      "image": "https://assets.afcdn.com/recipe/20220317/130084_w1024h576c1cx1512cy2016cxb3024cyb4032.webp",
      "date": "2022-03-17T23:43:03+01:00",
      "cookTime": 15,
      "prepTime": 30,
      "totalTime": 45,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "pinc\u00e9e de piment",
          "quantity": 0.25
        },
        {
          "name": "oignon",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de mayonnaise",
          "quantity": 0.5
        },
        {
          "name": "avocats",
          "quantity": 0.75
        },
        {
          "name": "citron vert",
          "quantity": 0.25
        },
        {
          "name": "g d'origan",
          "quantity": 0.25
        },
        {
          "name": "g de cumin en poudre",
          "quantity": 1.25
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.5
        },
        {
          "name": "g de paprika",
          "quantity": 1.25
        },
        {
          "name": "filets de poulet",
          "quantity": 1.0
        },
        {
          "name": "ml de bouillon de poule",
          "quantity": 0.25
        },
        {
          "name": "tortillas",
          "quantity": 1.5
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer les ingr\u00e9dients pour l\u2019assaisonnement.",
        "Recouvrir le filet avec l\u2019assaisonnement.",
        "faire cuire de chaque cot\u00e9 dans une po\u00eale, pendant 2 min, ajouter le bouillon, mettre un couvercle et laisse cuire pendant 15 minutes",
        "en fin de cuisson retirer le poulet et garder le jus de cuisson",
        "Placer le poulet dans un saladier et commencer \u00e0 l'effilocher \u00e0 l'aide d'un batteur (oui j'ai bien dit un batteur)",
        "un fois le poulet effiloch\u00e9, ajouter le liquide de cuisson et mixer \u00e0 nouveau 30 secondes",
        "couper et videz la chair de l\u2019avocat dans le bol.",
        "Coupez l\u2019oignon en d\u00e9s, et ajoutez-le dans le bol.",
        "Ajoutez la coriandre, le jus d\u2019un citron vert, le sel et l\u2019ail en poudre.",
        "Mixez environ une minute. La texture du guacamole doit conserver des morceaux.",
        "Remplissez vos tortillas de guacamole et de poulet effiloch\u00e9 , de des sauces.",
        "pour la sauce , m\u00e9langer tout les ingr\u00e9dients"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Gaperon et jambon de pays en feuillet\u00e9 de Fr\u00e9d\u00e9ric",
      "image": "https://assets.afcdn.com/recipe/20220316/130028_w1024h576c1cx1512cy1890cxb3024cyb3780.webp",
      "date": "2022-03-16T09:31:44+01:00",
      "cookTime": 30,
      "prepTime": 15,
      "totalTime": 45,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "p\u00e2te feuillet\u00e9e",
          "quantity": 0.5
        },
        {
          "name": "jaune d'oeuf",
          "quantity": 0.5
        },
        {
          "name": "gaperon",
          "quantity": 0.5
        },
        {
          "name": "tranches de jambon cru",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Envelopper le Gaperon entier de jambon de pays (utiliser les 4 tranches)",
        "Pr\u00e9chauffer votre four \u00e0 180\u00b0C.",
        "D\u00e9tailler un cercle de p\u00e2te feuillet\u00e9e plus grand que le Gaperon, le poser dessus puis l'envelopper compl\u00e8tement avec une partie du reste de la p\u00e2te feuillet\u00e9e.",
        "Bien souder les deux parties de p\u00e2te feuillet\u00e9e avec un peu d\u2019eau puis a l\u2019aide d\u2019un pinceau, badigeonner la p\u00e2te de jaune d\u2019\u0153uf.",
        "Enfourner le Gaperon feuillet\u00e9 pendant 30 minutes \u00e0 180\u00b0C. Servir chaud accompagn\u00e9 d\u2019une belle salade !"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Gambas tuile de parmesan et risotto au vin blanc",
      "image": "https://assets.afcdn.com/recipe/20220211/128855_w1024h576c1cx1512cy1465cxb3024cyb2931.webp",
      "date": "2022-02-11T12:51:38+01:00",
      "cookTime": 30,
      "prepTime": 40,
      "totalTime": 70,
      "numberPersons": 5,
      "recipeIngredient": [
        {
          "name": "cl de bouillon de l\u00e9gumes",
          "quantity": 1.4
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "g de risotto",
          "quantity": 1.0
        },
        {
          "name": "quelques graines de s\u00e9same noir",
          "quantity": "NaN"
        },
        {
          "name": "oignons nouveaux",
          "quantity": 0.4
        },
        {
          "name": "cl de vin blanc",
          "quantity": 0.4
        },
        {
          "name": "g de Parmesan",
          "quantity": 0.2
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.2
        },
        {
          "name": "gambas",
          "quantity": 0.4
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.2
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer votre  four \u00e0 200\u00b0C.",
        "Faire 8 petits ronds de parmesan sur une plaque recouverte de papier cuisson. Mettre au four pendant 5 minutes, surveiller la cuisson, pour \u00e9viter que les tuiles brulent",
        "D\u00e9cortiquer les gambas, les faire mariner avec un filet d'huile d'olive, une gousse d'ail hach\u00e9e et du persil cisel\u00e9.",
        "Emincer l'oignon.",
        "Faire revenir l'oignon.",
        "Ajouter le riz, faites le nacr\u00e9. Ajouter le vin blanc et laisser \u00e9vaporer.",
        "Cuire ensuite le riz en ajoutant le bouillon petit \u00e0 petit, ajouter une louche de bouillon \u00e0 chaque fois que le riz \u00e0 absorb\u00e9 le bouillon.",
        "Quand le riz est cuit, \u00e9teindre le feu, et mettre le parmesan r\u00e2p\u00e9 restant, assaisonner, m\u00e9langer et couvrir.",
        "En m\u00eame temps, cuire les gambas avec la marinade dans une po\u00eale bien chaude, 2 minutes sur chaque face.",
        "Servir le tout."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton"
    },
    {
      "name": "Le Baja Fish Taco d'El Vecino",
      "image": "https://assets.afcdn.com/recipe/20220210/128814_w1024h576c1cx400cy403cxb800cyb806.webp",
      "date": "2022-02-10T14:43:09+01:00",
      "cookTime": 0,
      "prepTime": 20,
      "totalTime": 20,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "bonne pinc\u00e9e de coriandre",
          "quantity": 0.5
        },
        {
          "name": "avocat ou du guacamole",
          "quantity": 0.5
        },
        {
          "name": "g de f\u00e9cule de ma\u00efs",
          "quantity": 2.5
        },
        {
          "name": "g de farine de bl\u00e9",
          "quantity": 0.5
        },
        {
          "name": "g de sel",
          "quantity": 1.0
        },
        {
          "name": "ml de bi\u00e8re",
          "quantity": 0.5
        },
        {
          "name": "g de levure",
          "quantity": 2.5
        },
        {
          "name": "poisson plut\u00f4t blanc \u00e0 la chair ferme de pr\u00e9f\u00e9rence (comme la daurade, le bar ou le maigre) sans peau. (Eviter les poissons fragiles qui se d\u00e9chirent a la cuisson comme le cabillaud)",
          "quantity": 0.5
        },
        {
          "name": "oeuf",
          "quantity": 0.5
        },
        {
          "name": "g de farine de bl\u00e9",
          "quantity": 1.0
        },
        {
          "name": "g de sel",
          "quantity": 0.5
        },
        {
          "name": "g de baking powder",
          "quantity": 1.0
        },
        {
          "name": "g de saindoux",
          "quantity": 2.5
        },
        {
          "name": "g de yaourt nature",
          "quantity": 0.5
        },
        {
          "name": "bo\u00eete de piment chipotle si vous n\u2019avez pas vous pouvez utiliser votre piment favoris",
          "quantity": 0.5
        },
        {
          "name": "mayonnaise",
          "quantity": "NaN"
        },
        {
          "name": "1/chou rouge",
          "quantity": 0.5
        },
        {
          "name": "citrons",
          "quantity": 1.5
        },
        {
          "name": "cr\u00e8me 35%",
          "quantity": 1.5
        },
        {
          "name": "g de farine de ma\u00efs",
          "quantity": 1.0
        },
        {
          "name": "g d'eau ti\u00e8de",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Commencez par choisir quel type de tortilla vous souhaitez r\u00e9aliser : Niveau interm\u00e9diaire ou expert (comme \u00e0 El Vecino).",
        "Niveau interm\u00e9diaire : Commencer par 150g et ajouter petit \u00e0 petit l\u2019eau jusqu\u2019\u00e0 obtenir un p\u00e2te homog\u00e8ne et semi compacte. Ajouter le reste de farine et m\u00e9langer. Faire de mini boulettes de 30g, et ensuite aplatir pour former les tortillas. Cuisiner \u00e0 feu haut, 40 secondes de chaque c\u00f4t\u00e9 dans une po\u00eale huil\u00e9e bien chaude.\n\nFrire jusqu\u2019\u00e0 obtenir une belle couleur dor\u00e9e.",
        "Niveau expert (comme \u00e0 El Vecino) :\nM\u00e9langer dans un robot p\u00e2tissier le yaourt et la farine de bl\u00e9. Laisser reposer la p\u00e2te 30 minutes au frigo\nAjouter le sel, levure chimique et saindoux \u00e0 la pr\u00e9paration et laisser reposer encore 2-3 heures\u2026Faire des petites boulettes de 30g. Utiliser un tortilla press, ou bien un assiette pour les aplatir et former les tortillas. Dans un po\u00eale l\u00e9g\u00e8rement huil\u00e9e a un temp\u00e9rature de 210 degr\u00e9s, faire griller les tortillas l\u00e9g\u00e8rement",
        "Pour le poisson : m\u00e9langer tous les ingr\u00e9dients (sauf le poisson) ensemble jusqu\u2019\u00e0 obtenir un pate homog\u00e8ne. La texture devrait \u00eatre similaire a un yaourt (semi liquide).  La bi\u00e8re et la levure vont faire du gaz (p\u00e2te style tempura) une fois m\u00e9lang\u00e9es, laissez reposer 20 minutes. Trempez les morceaux de poisson dans la p\u00e2te, et ensuite d\u00e9posez gentiment dans l\u2019huile de friture chaude. Huile de friture a 175-185 degr\u00e9s (le poisson devrait faire de bulles une fois d\u00e9pos\u00e9)\nFrire jusqu\u2019\u00e0 obtenir une belle couleur dor\u00e9e.",
        "Pour le coleslaw : couper \u00e0 la mandoline ou finement au couteau votre choux. Ajouter la cr\u00e8me fra\u00eeche et le jus de vos citrons.",
        "Pour le dressage, disposer la tortilla dans une assiette et mettre le poisson puis le coleslaw. Ajouter une cuill\u00e8re \u00e0 soupe de chipotle mayonnaise sur le dessus. D\u00e9corer avec coriandre et avocat (ou guacamole) ."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen"
    },
    {
      "name": "Tarte aux pommes fa\u00e7on tortillas",
      "image": "https://assets.afcdn.com/recipe/20220207/128681_w1024h576c1cx2048cy1080cxb4096cyb2160.webp",
      "date": "2022-02-07T14:31:04+01:00",
      "cookTime": 16,
      "prepTime": 10,
      "totalTime": 26,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "huile de friture",
          "quantity": "NaN"
        },
        {
          "name": "g de sucre en poudre",
          "quantity": 0.8333333333333334
        },
        {
          "name": "c.\u00e0.c d'extrait de vanille liquide",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de f\u00e9cule de ma\u00efs",
          "quantity": 0.3333333333333333
        },
        {
          "name": "1/c.\u00e0.c d'extrait de vanille liquide",
          "quantity": 0.16666666666666666
        },
        {
          "name": "tortillas grande",
          "quantity": 1.0
        },
        {
          "name": "g de cassonade",
          "quantity": 0.16666666666666666
        },
        {
          "name": "1/c.\u00e0.c de cannelle",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de Philadelphia",
          "quantity": 0.3333333333333333
        },
        {
          "name": "ml de cr\u00e8me \u00e9paisse",
          "quantity": 0.3333333333333333
        },
        {
          "name": "pommes grosses et coup\u00e9es en d\u00e9s",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de cassonade",
          "quantity": 1.1666666666666667
        },
        {
          "name": "g d'eau",
          "quantity": 0.3333333333333333
        },
        {
          "name": "c.\u00e0.c de muscade",
          "quantity": 0.16666666666666666
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer la cassonade et la cannelle dans un bol et r\u00e9server. \u00c0 l'aide d'un emporte-pi\u00e8ce, d\u00e9coupez des cercles dans les tortillas. Chauffer un peu d'huile dans une po\u00eale. Mettez les tortillas dans l'huile et faites-les frire pendant environ 10-15 secondes, puis retournez-les de l'autre c\u00f4t\u00e9, pliez-les en deux et faites-les frire jusqu'\u00e0 ce qu'ils deviennent dor\u00e9s.",
        "Sortez-les de la po\u00eale et attendez quelques secondes que l\u2019exc\u00e9dant d\u2019huile soit parti , puis mettez-les imm\u00e9diatement dans le bol avec le sucre et la cannelle. Recouvrir compl\u00e8tement les tortillas de ce m\u00e9lange. Mettez \u00e9galement une partie du m\u00e9lange \u00e0 l'int\u00e9rieur de la coquille.",
        "Placez-les sur un moule \u00e0 muffins \u00e0 l'envers.",
        "Dans un plat de taille moyenne, verser de l'eau, ajouter la f\u00e9cule de ma\u00efs, la cassonade, la cannelle, la muscade et cuire environ 2-3 minutes, \u00e0 feu moyen, jusqu'\u00e0 ce qu'elle \u00e9paississe, en remuant de temps en temps. Ajouter les pommes et la vanille et cuire pendant 10 minutes, ou jusqu'\u00e0 ce que les pommes ramollissent.",
        "Retirer du feu et laisser refroidir \u00e0 temp\u00e9rature ambiante. Battre le fromage \u00e0 la cr\u00e8me, la cr\u00e8me \u00e9paisse, le sucre en poudre et l'extrait de vanille pendant 2 minutes, \u00e0 vitesse moyenne, jusqu'\u00e0 ce qu'il \u00e9paississe. Mettre le m\u00e9lange dans une poche \u00e0 douille et couper la pointe. Remplissez les coquilles de garniture au fromage \u00e0 la cr\u00e8me et mettez dessus la garniture pour tarte aux pommes."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Linguine au citron et aux crevettes",
      "image": "https://assets.afcdn.com/recipe/20220206/128680_w1024h576c1cx1512cy2016cxb3024cyb4032.webp",
      "date": "2022-02-15T09:47:52+01:00",
      "cookTime": 15,
      "prepTime": 5,
      "totalTime": 20,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 0.5
        },
        {
          "name": "bouquet de persil",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de curcuma (facultatif, pour la couleur)",
          "quantity": 0.25
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "g de linguine",
          "quantity": 1.25
        },
        {
          "name": "citrons bio",
          "quantity": 0.5
        },
        {
          "name": "cl de cr\u00e8me liquide",
          "quantity": 0.5
        },
        {
          "name": "g de Parmesan",
          "quantity": 1.5
        },
        {
          "name": "g de crevette rose",
          "quantity": 0.5
        },
        {
          "name": "poivre du moulin",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Laver les citrons et r\u00e9cup\u00e9rer les zestes fins. Les presser pour r\u00e9cup\u00e9rer le jus.\nR\u00e2per le parmesan.",
        "Mettre \u00e0 cuire les p\u00e2tes dans l'eau bouillante sal\u00e9e pour une cuisson al dente.",
        "Pendant ce temps faites fondre le. beurre dans une po\u00eale. Y ajouter le zeste de citron et le curcuma, m\u00e9langer puis ajouter la cr\u00e8me, la jus de citron, le parmesan r\u00e2p\u00e9, du sel et du poivre. Laisser r\u00e9duire sur feu doux pour que \u00e7a nappe bien la cuill\u00e8re en remuant constamment.",
        "Lorsque les p\u00e2tes sont presques cuites, ajouter les crevettes pour les r\u00e9chauffer puis les p\u00e2tes \u00e9goutt\u00e9es et 1 louche de l'eau de cuisson. M\u00e9langer intimement et poursuivre la cuisson 2 minutes pour bien enrober les p\u00e2tes.",
        "Ciseler le persil et l'ajouter au dernier moment, bien poivrer.",
        "Servir."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Gaufres feuillet\u00e9es chocolat-banane",
      "image": "https://assets.afcdn.com/recipe/20220206/128676_w1024h576c1cx1512cy2016cxb3024cyb4032.webp",
      "date": "2022-02-15T09:47:26+01:00",
      "cookTime": 3,
      "prepTime": 9,
      "totalTime": 12,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "p\u00e2tes feuillet\u00e9es",
          "quantity": 0.5
        },
        {
          "name": "g de chocolat",
          "quantity": 0.75
        },
        {
          "name": "bananes",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "D\u00e9couper 8 ronds de p\u00e2te feuillet\u00e9e de m\u00eame taille.",
        "D\u00e9tailler 100 g de chocolat en p\u00e9pites et d\u00e9couper les bananes en petits d\u00e9s.",
        "Sur 4 ronds de p\u00e2te, r\u00e9partir les p\u00e9pites de chocolat et les bananes. Recouvrir d'un autre rond de p\u00e2te et souder les bords (en humidifiant l\u00e9g\u00e8rement).",
        "Cuire au gaufrier.",
        "Faire fondre le reste du chocolat et plonger 1/3 de la gaufre dans le chocolat fondu."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Lefse (pain plat norv\u00e9gien)",
      "image": "https://assets.afcdn.com/recipe/20220119/127664_w1024h576c1cx906cy1418cxb1414cyb2119.webp",
      "date": "2022-01-19T16:25:02+01:00",
      "cookTime": 25,
      "prepTime": 60,
      "totalTime": 85,
      "numberPersons": 8,
      "recipeIngredient": [
        {
          "name": "g de farine",
          "quantity": 0.125
        },
        {
          "name": "g de beurre",
          "quantity": 0.875
        },
        {
          "name": "bonne pinc\u00e9e de sel",
          "quantity": 0.125
        },
        {
          "name": "g de pomme de terre (Bintje ou Agria)",
          "quantity": 0.625
        },
        {
          "name": "cl de cr\u00e8me \u00e9paisse",
          "quantity": 0.75
        },
        {
          "name": "cl de lait entier",
          "quantity": 0.375
        }
      ],
      "recipeInstructions": [
        "Faire cuire les pommes de terre une trentaine de minutes dans de l'eau. Quand elles sont bien cuites, les \u00e9craser avec un presse-pur\u00e9e.",
        "Ajouter le beurre, la cr\u00e8me et la pinc\u00e9e de sel. Bien m\u00e9langer.",
        "Laisser la pur\u00e9e refroidir et r\u00e9server au r\u00e9frig\u00e9rateur pendant 12h. Filmer la pur\u00e9e au contact pour \u00e9viter qu'elle cro\u00fbte.",
        "Ajouter la farine \u00e0 la pur\u00e9e et bien m\u00e9langer pendant plusieurs minutes avec les mains.",
        "Diviser la p\u00e2te en 8-10 p\u00e2tons.",
        "Sur un plan de travail farin\u00e9, \u00e9taler les p\u00e2tons avec un rouleau pour les aplatir.",
        "Dans une po\u00eale chaude, faire cuire les galettes pendant 1-2 minutes puis les retourner \u00e0 l'aide d'une spatule.",
        "Laisser cuire encore quelques minutes, des taches doivent apparaitre. Recommencer l'op\u00e9ration avec les autres galettes."
      ],
      "categorie": "Accompagnement",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Boulettes de viande norv\u00e9giennes (Kj\u00f8ttkaker)",
      "image": "https://assets.afcdn.com/recipe/20220119/127657_w1024h576c1cx999cy749cxb1999cyb1499.webp",
      "date": "2022-01-19T15:32:47+01:00",
      "cookTime": 15,
      "prepTime": 15,
      "totalTime": 30,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "oignon",
          "quantity": 0.25
        },
        {
          "name": "farine",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "g de viande hach\u00e9e",
          "quantity": 1.25
        },
        {
          "name": "oeuf petit",
          "quantity": 0.25
        },
        {
          "name": "cl de lait",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "\u00c9mincer finement l'oignon.",
        "Dans un r\u00e9cipient, m\u00e9langer l'oignon, la viande, l'\u0153uf, le lait assaisonner avec le sel et de poivre. Mettre progressivement  de la farine jusqu'\u00e0 avoir une masse consistante.",
        "\u00c0 l'aide d'une cuill\u00e8re \u00e0 soupe, former les boulettes. Une boulette = une cuill\u00e8re \u00e0 soupe. Laisser reposer les boulettes au frais pendant 30 minutes.",
        "Dans une po\u00eale, verser un filet d'huile neutre et faire cuire les boulettes jusqu'\u00e0 qu'elles soient bien dor\u00e9es."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Mocktail Orange Sanguine (pour Dry January)",
      "image": "https://assets.afcdn.com/recipe/20220119/127665_w1024h576c1cx403cy431cxb807cyb862.webp",
      "date": "2022-01-19T16:15:54+01:00",
      "cookTime": 0,
      "prepTime": 17,
      "totalTime": 17,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.s de miel liquide",
          "quantity": 0.25
        },
        {
          "name": "centim\u00e8tre de gingembre",
          "quantity": 0.25
        },
        {
          "name": "oranges sanguines",
          "quantity": 0.5
        },
        {
          "name": "gla\u00e7ons",
          "quantity": "NaN"
        },
        {
          "name": "cl de tonic",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s d'eau",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Laver soigneusement les oranges. Couper deux fines tranches d'orange puis presser le reste.",
        "M\u00e9langer le miel avec le gingembre frais press\u00e9 et 1 cuill\u00e8re \u00e0 soupe d'eau bouillante. Laisser mac\u00e9rer 5 minutes puis ajouter le jus d'orange et passer \u00e0 travers une passoire fine.",
        "Mettre 2 gla\u00e7ons dans le verre et faire tourner le verre avec les gla\u00e7ons dedans de fa\u00e7on \u00e0 le rafra\u00eechir (jusqu'\u00e0 ce qu'on voit l\u00e0 o\u00f9 le verre a \u00e9t\u00e9 rafra\u00eechi). Jeter le gla\u00e7ons qui a servi \u00e0 rafra\u00eechir le verre.",
        "Verser le jus dans le verre puis ajouter des gla\u00e7ons. Mettre une des tranches sur le pic en bois et couper l'autre en 2. Mettre les deux moiti\u00e9s joliment dans le verre puis allonger de tonic. Disposer la rondelle sur le dessus du verre et servir."
      ],
      "categorie": "Boisson",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Gratin de gnocchis au gorgonzola et au pesto",
      "image": "https://assets.afcdn.com/recipe/20220222/129297_w1024h576c1cx1915cy1436cxb3830cyb2872.webp",
      "date": "2022-01-17T17:58:10+01:00",
      "cookTime": 15,
      "prepTime": 5,
      "totalTime": 20,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "cl de sauce tomate",
          "quantity": 0.16666666666666666
        },
        {
          "name": "c.\u00e0.s de pesto",
          "quantity": 0.3333333333333333
        },
        {
          "name": "filet d'huile d'olive",
          "quantity": 0.16666666666666666
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.16666666666666666
        },
        {
          "name": "paquet de gnocchi",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de gorgonzola",
          "quantity": 0.8333333333333334
        }
      ],
      "recipeInstructions": [
        "Mettre le four \u00e0 pr\u00e9chauffer en mode gril.",
        "Po\u00ealer les gnocchis dans une po\u00eale huil\u00e9e.",
        "Lorsqu'ils sont bien dor\u00e9s, ajouter la sauce tomate, saler, poivrer et m\u00e9langer pour bien les enrober puis les disposer dans un plat \u00e0 gratin (plut\u00f4t individuel).",
        "Disposer le fromage coup\u00e9 en morceaux dessus puis faire griller et fondre le fromage quelques minutes sous le gril.",
        "Servir avec quelques filets de pesto sur le dessus !"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Quiche avec les restes du frigo",
      "image": "https://assets.afcdn.com/recipe/20220222/129295_w1024h576c1cx960cy540cxb1920cyb1080.webp",
      "date": "2022-01-26T16:09:51+01:00",
      "cookTime": 50,
      "prepTime": 10,
      "totalTime": 60,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "bonne noix de beurre",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de lardons",
          "quantity": 0.8333333333333334
        },
        {
          "name": "p\u00e2te bris\u00e9e",
          "quantity": 0.16666666666666666
        },
        {
          "name": "oeufs",
          "quantity": 0.5
        },
        {
          "name": "g de champignon",
          "quantity": 0.3333333333333333
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.16666666666666666
        },
        {
          "name": "c.\u00e0.s de coulis de tomate",
          "quantity": 0.6666666666666666
        },
        {
          "name": "pommes de terre cuites \u00e0 l'eau",
          "quantity": 0.6666666666666666
        }
      ],
      "recipeInstructions": [
        "Cuire les champignons avec ail, beurre et lardons.",
        "Fouetter 3 oeufs avec du lait, puis saler et poivrer.",
        "\u00c9taler la p\u00e2te bris\u00e9e dans un moule \u00e0 tarte.",
        "Badigeonner avec du coulis de tomate. Ajouter les pommes de terre cuites, puis la pr\u00e9paration aux champignons.",
        "Disposer le fromage \u00e0 raclette sur le dessus.",
        "Verser l\u2019appareil aux oeufs et enfourner environ 40 minutes \u00e0 180\u00b0C."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "\u00c9clair au saumon pour No\u00ebl",
      "image": "https://assets.afcdn.com/recipe/20211224/126330_w1024h576c1cx540cy540cxb1080cyb1080.webp",
      "date": "2021-12-20T17:04:32+01:00",
      "cookTime": 40,
      "prepTime": 44,
      "totalTime": 84,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "g de beurre doux",
          "quantity": 1.0
        },
        {
          "name": "g de farine",
          "quantity": 1.0
        },
        {
          "name": "g de sucre semoule",
          "quantity": 5.0
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 1.0
        },
        {
          "name": "1/bouquet d'aneth",
          "quantity": 1.0
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 1.0
        },
        {
          "name": "pinc\u00e9e de poivre",
          "quantity": 1.0
        },
        {
          "name": "oeufs",
          "quantity": 5.0
        },
        {
          "name": "cl de lait (+ cuill\u00e8res \u00e0 soupe)",
          "quantity": 1.0
        },
        {
          "name": "tranches de saumon fum\u00e9",
          "quantity": 1.0
        },
        {
          "name": "g de fromage frais",
          "quantity": 2.0
        },
        {
          "name": "c.\u00e0.s de cr\u00e8me \u00e9paisse",
          "quantity": 2.0
        },
        {
          "name": "citrons (jus et zestes)",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9parer la p\u00e2te \u00e0 choux : Dans une casserole, porter \u00e0 \u00e9bullition 15 cl d\u2019eau avec le lait, le sel, le sucre et le beurre coup\u00e9 en morceaux.",
        "Hors du feu, verser en une fois la farine et m\u00e9langer vigoureusement \u00e0 la spatule.",
        "Remettre sur feu moyen tout en m\u00e9langeant\net faire dess\u00e9cher jusqu\u2019\u00e0 ce que l\u2019appareil n\u2019adh\u00e8re plus \u00e0 la casserole.",
        "Hors du feu, ajouter les \u0153ufs un \u00e0 un. Remplir une poche munie d\u2019une douille crant\u00e9e.",
        "Pr\u00e9chauffez le four \u00e0 200 \u00b0C.",
        "Sur l'envers du papier cuisson, faire deux lignes parall\u00e8les au crayon \u00e0 l'aide d'une r\u00e8gle pour vous donner la taille des \u00e9clairs (environ 15 cm de long) puis retourner la feuille sur votre plaque.",
        "R\u00e9partir \u00e0 l'aide de la poche \u00e0 douille 8 boudins de p\u00e2te de 15 cm de long.",
        "Badigeonner avec les 2 cuill\u00e8res \u00e0 soupe de lait pour que la p\u00e2te soit dor\u00e9e \u00e0 la cuisson.",
        "Faire cuire 25 min \u00e0 four chaud et laisser reposer 10 min, four \u00e9teint, pour \u00e9viter que les choux ou les \u00e9clairs ne d\u00e9gonflent.",
        "Pr\u00e9parer la garniture : m\u00e9langer le fromage frais avec la cr\u00e8me, 2 cuill\u00e8res \u00e0 soupe de jus de citron, le zeste d'un des citrons, un peu de sel et de poivre. Ciseler la moiti\u00e9 de l'aneth et l'ajouter la pr\u00e9paration.",
        "Couper en 2 chaque tranche de saumon sauf 1. Les citronner.",
        "Une fois les \u00e9clairs refroidis, les couper en 2 dans le sens de l'\u00e9paisseur. Juste avant de servir, r\u00e9partir la cr\u00e8me sur la base des \u00e9clairs, disposer sur chacun 4 moiti\u00e9s de saumon en les pliant sur eux m\u00eame et en les mettant les uns derri\u00e8re les autres. Poivrer. Refermer les \u00e9clairs.",
        "Pour d\u00e9corer : couper la derni\u00e8re tranche restante en petits morceaux et les r\u00e9partir dessus ainsi que des pluches d'aneth et le zeste fin du 2\u00e8me citron."
      ],
      "categorie": "Amuse-gueule",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Tartine fa\u00e7on raclette",
      "image": "https://assets.afcdn.com/recipe/20220222/129302_w1024h576c1cx382cy505cxb763cyb1009.webp",
      "date": "2022-01-27T14:27:55+01:00",
      "cookTime": 20,
      "prepTime": 5,
      "totalTime": 25,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "pinc\u00e9e de poivre",
          "quantity": 0.5
        },
        {
          "name": "filet d'huile de tournesol",
          "quantity": 0.5
        },
        {
          "name": "belles tranches de pain de campagne",
          "quantity": 1.0
        },
        {
          "name": "pommes de terre",
          "quantity": 1.0
        },
        {
          "name": "tranches de jambon blanc",
          "quantity": 1.0
        },
        {
          "name": "tranches de fromage \u00e0 raclette",
          "quantity": 2.0
        },
        {
          "name": "cornichons",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Commencer par faire cuire les pommes de terre. Les \u00e9plucher, les laver et les laisser cuire environ 15 minutes dans une casserole d'eau ou 5 minutes au micro-ondes.",
        "\u00c0 c\u00f4t\u00e9, d\u00e9couper deux belles tranches de pain de campagne et les mettre au toaster. Caler les rondelles de pommes de terre entre les plis du jambon.",
        "D\u00e9poser deux tranches de fromage \u00e0 raclette sur les pommes de terre et enfourner pendant 10 minutes au gril. Terminer par les rondelles de cornichons."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Po\u00eal\u00e9e automnale gourmande",
      "image": "https://assets.afcdn.com/recipe/20211224/126343_w1024h576c1cx1560cy900cxb2768cyb1560.webp",
      "date": "2021-12-20T15:53:32+01:00",
      "cookTime": 39,
      "prepTime": 17,
      "totalTime": 56,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "oignons",
          "quantity": 0.5
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "pommes de terre",
          "quantity": 0.75
        },
        {
          "name": "champignons",
          "quantity": 0.25
        },
        {
          "name": "1/potimarron",
          "quantity": 0.25
        },
        {
          "name": "saucisse de morteau",
          "quantity": 0.25
        },
        {
          "name": "\u00e9chalotes",
          "quantity": 1.0
        },
        {
          "name": "g de marrons en bocal",
          "quantity": 0.25
        },
        {
          "name": "g de morbier",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Couper les pommes de terre en morceaux de la taille d'une bouch\u00e9e, le potimarron en d\u00e9s, les \u00e9chalotes en 4 dans le sens de la longueur, les oignons en 6-8 quartiers en fonction de leur grosseur.",
        "Faire chauffer un fond d'huile dans une grande po\u00eale, y faire dorer rapidement les quartiers d'\u00e9chalote et d'oignon.",
        "Ajouter les pommes de terre et les d\u00e8s de potimarron et faire l\u00e9g\u00e8rement revenir avant de saler puis de couvrir. Laisser cuire environ 20 minutes en remuant de temps en temps.",
        "Pendant ce temps, d\u00e9couper la saucisse de Morteau en d\u00e9s et le morbier en morceaux g\u00e9n\u00e9reux sans les m\u00e9langer.",
        "Couper les champignons en 4. Ajouter les champignons et la saucisse de Morteau dans la po\u00eale. Laisser revenir \u00e0 d\u00e9couvert jusqu'\u00e0 ce que les champignons et la Morteau soient dor\u00e9s en remuant fr\u00e9quemment.",
        "Lorsque les l\u00e9gumes sont cuits, ajouter les ch\u00e2taignes et les laisser se r\u00e9chauffer quelques minutes.",
        "Poivrer puis r\u00e9partir dans les assiettes. Disposer les morceaux de fromage dessus et les laisser l\u00e9g\u00e8rement se r\u00e9chauffer avant de servir."
      ],
      "categorie": "Accompagnement",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Souffl\u00e9 glac\u00e9 au marc de Gewurztraminer",
      "image": "https://assets.afcdn.com/recipe/20211217/125976_w1024h576c1cx158cy336cxb348cyb545.webp",
      "date": "2021-12-17T16:43:23+01:00",
      "cookTime": 0,
      "prepTime": 20,
      "totalTime": 740,
      "numberPersons": 8,
      "recipeIngredient": [
        {
          "name": "g de sucre",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de cacao amer",
          "quantity": 0.25
        },
        {
          "name": "blancs d'oeuf",
          "quantity": 0.375
        },
        {
          "name": "jaunes d'oeuf",
          "quantity": 0.75
        },
        {
          "name": "cl de cr\u00e8me liquide enti\u00e8re",
          "quantity": 0.5
        },
        {
          "name": "cl de marc de Gewurstraminer",
          "quantity": 0.625
        }
      ],
      "recipeInstructions": [
        "Battre les 6 jaunes d\u2019oeufs au bain marie avec 115 g de sucre jusqu\u2019\u00e0 ce que ce soit bien mousseux. Laisser refroidir.",
        "Monter les blancs d'oeufs en neige. Leur ajouter le sucre en pluie lorsqu'ils sont mont\u00e9s et en continuant de fouetter la masse.",
        "\u2028\u2028Monter la cr\u00e8me en chantilly puis lui incorporer les 3 blancs d\u2019oeufs mont\u00e9s en neige avec le sucre.",
        "Ajouter le marc aux jaunes d'oeufs puis ajouter la masse blanche.",
        "Verser dans un moule, lisser le dessus puis laisser prendre au cong\u00e9lateur au moins 12h.",
        "Saupoudrer de cacao amer avant de servir."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Magret de canard aux morilles et sirop d'\u00e9rable",
      "image": "https://assets.afcdn.com/recipe/20211224/126321_w1024h576c1cx571cy656cxb1080cyb1080.webp",
      "date": "2021-12-17T15:23:58+01:00",
      "cookTime": 39,
      "prepTime": 28,
      "totalTime": 67,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 1.5
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.5
        },
        {
          "name": "pinc\u00e9e de poivre",
          "quantity": 0.5
        },
        {
          "name": "Magret de Canard",
          "quantity": 0.5
        },
        {
          "name": "pot de morilles (s\u00e9ch\u00e9es)",
          "quantity": 0.5
        },
        {
          "name": "sirop d'\u00e9rable",
          "quantity": "NaN"
        },
        {
          "name": "\u00e9chalotes",
          "quantity": 1.0
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Rincer les morilles puis les faire r\u00e9hydrater dans un peu d'eau. Garder l'eau de mac\u00e9ration et bien la passer au tamis tr\u00e8s fin.",
        "Faire r\u00e9duire au 3/4 sur feu vif, passer \u00e0 nouveau au chinois.",
        "Nettoyer, les morilles r\u00e9hydrater, les s\u00e9cher puis les couper en 2 dans le sens de la longueur si elles sont grosses. Garder les petites enti\u00e8res.",
        "Hacher l'ail et les \u00e9chalotes.",
        "Faire revenir dans le beurre puis ajouter les morilles et laisser cuire 5 minutes avant d'ajouter l'eau infus\u00e9e r\u00e9duite et 1 cuill\u00e8re \u00e0 caf\u00e9 de miel. Cuire jusqu'\u00e0 absorption presque compl\u00e8te du liquide. Garder au chaud.",
        "Quadriller le gras du canard. Faire chauffer une po\u00eale \u00e0 feu moyen.",
        "Y d\u00e9poser les magrets de canard c\u00f4t\u00e9 peau contre la po\u00eale. Laisser fondre la graisse 5 minutes. La peau sera alors bien dor\u00e9e. Retirer l\u2019exc\u00e8s de graisse au fur et \u00e0 mesure.",
        "Retourner les magrets de canard c\u00f4t\u00e9 chair et poursuivre la cuisson 5 \u00e0 7 minutes. Ajouter 1 cuill\u00e8re \u00e0 soupe de sirop d'\u00e9rable 2 minutes avant la fin. Saler, poivrer.",
        "Recouvrir les magrets de canard de papier aluminium puis laisser reposer 5 \u00e0 7 minutes.",
        "Passer les morilles dans la po\u00eale o\u00f9 a cuit le magret pendant que vous d\u00e9coupez le magret en tranches. Le servir avec les morilles."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Poulet au curry sucr\u00e9-sal\u00e9 de Philippe",
      "image": "https://assets.afcdn.com/recipe/20211025/123058_w1024h576c1cx304cy343cxb608cyb686.webp",
      "date": "2021-10-25T17:41:11+02:00",
      "cookTime": 45,
      "prepTime": 15,
      "totalTime": 60,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "brique de pur\u00e9e de tomate",
          "quantity": 0.25
        },
        {
          "name": "curry",
          "quantity": "NaN"
        },
        {
          "name": "curcuma",
          "quantity": "NaN"
        },
        {
          "name": "de coriandre",
          "quantity": "NaN"
        },
        {
          "name": "blancs de poulet",
          "quantity": 1.0
        },
        {
          "name": "brique de lait de coco",
          "quantity": 0.25
        },
        {
          "name": "petite bo\u00eete de tomates pel\u00e9es",
          "quantity": 0.25
        },
        {
          "name": "bo\u00eete d'ananas au sirop, en morceaux",
          "quantity": 0.25
        },
        {
          "name": "patates douces grosses",
          "quantity": 0.5
        },
        {
          "name": "ail en poudre",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Couper les blancs de poulet en 2 ou 3 morceaux suivant la grosseur",
        "Couper les tomates pel\u00e9es en morceaux",
        "Faire chauffer un peu d'huile d'olive dans un faitout, y mettre \u00e0 dorer de toutes parts les morceaux de poulet. Ajouter les tomates en morceaux.",
        "Remuer la pr\u00e9paration pour qu'elle cuise l\u00e9g\u00e8rement.",
        "Saupoudrer avec les \u00e9pices et l'ail, saler et bien m\u00e9langer pour que les ingr\u00e9dients s'impr\u00e8gnent des aromates.",
        "Ajouter la cr\u00e8me de coco et le coulis de tomates. Remuer doucement. Couvrir et laisser mijoter \u00e0 feu doux environ 30 \u00e0 40 mn.",
        "10 minutes avant la fin de cuisson, ajouter 1/2 bo\u00eete de morceaux d'ananas (pr\u00e9alablement rinc\u00e9s)",
        "Pour les patates douces : \u00e9plucher et d\u00e9couper en rondelles \u00e9paisses 2 patates douces.",
        "Cuire soit \u00e0 l'eau sal\u00e9e 20 mn, soit \u00e0 la vapeur 10 mn.",
        "Dresser les assiettes en mettant les rondelles de patate douce sur un c\u00f4t\u00e9, et les morceaux de poulet avec un peu de sauce de l'autre. Si possible, ajouter quelques feuilles de coriandre pour la pr\u00e9sentation et le go\u00fbt."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Croque-brioche aux marshmallows",
      "image": "https://assets.afcdn.com/recipe/20211025/123052_w1024h576c1cx1884cy810cxb3662cyb1839.webp",
      "date": "2021-10-25T16:05:58+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 5,
      "recipeIngredient": [
        {
          "name": "paquet de p\u00e9pites de chocolat noir",
          "quantity": 0.2
        },
        {
          "name": "paquet de brioche tranch\u00e9e",
          "quantity": 0.2
        },
        {
          "name": "pot de beurre de cacahu\u00e8tes",
          "quantity": 0.2
        },
        {
          "name": "paquet de Marshmallow",
          "quantity": 0.2
        }
      ],
      "recipeInstructions": [
        "Dans un toaster, poser deux tranches de brioches et rajouter une cuill\u00e8re \u00e0 soupe de beurre de cacahu\u00e8te, 4 marshmallows et des p\u00e9pites de chocolat noir.",
        "Refermer les tranches de brioche avec la garniture et laisser cuire 3 minutes.",
        "Retirez du toaster et d\u00e9gustez."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Boeuf Lok-Lak (sp\u00e9cial enfant)",
      "image": "https://assets.afcdn.com/recipe/20211025/123051_w1024h576c1cx1318cy678cxb2121cyb1414.webp",
      "date": "2021-10-25T15:38:01+02:00",
      "cookTime": 14,
      "prepTime": 10,
      "totalTime": 24,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "oignons",
          "quantity": 0.5
        },
        {
          "name": "pinc\u00e9e de poivre",
          "quantity": 0.25
        },
        {
          "name": "petite pinc\u00e9e de gros sel",
          "quantity": 0.25
        },
        {
          "name": "filet d'huile",
          "quantity": 0.25
        },
        {
          "name": "g de boeuf",
          "quantity": 1.25
        },
        {
          "name": "12.cl de jus de citrons verts",
          "quantity": 0.25
        },
        {
          "name": "gousses d'ail",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de sauce soja",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de gingembre en poudre",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Coupe le boeuf en d\u00e9s d'1 cm. Demande \u00e0 l'uin de tes parents de t'aider pour cette \u00e9tape.",
        "Dans un saladier, pr\u00e9pare la marinade avec le jus de citron vert, le poivre, le gingembre, la sauce soja et les gousses d'ail \u00e9cras\u00e9es.",
        "Ajoute le boeuf et laisse mariner minimum 30 minutes.",
        "\u00c9mince les oignons et fais-les dorer dans une po\u00eale avec un peu d'huile. Demande de l'aide \u00e0 tes parents pour cette \u00e9tape.",
        "Ajoute la marinade et le boeuf pour le faire saisir mais fais attention \u00e0 ce que le boeuf ne cuise pas trop et reste tendre.",
        "Servir avec du riz."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "La petite citrouille garnie (sp\u00e9cial enfant)",
      "image": "https://assets.afcdn.com/recipe/20211025/123050_w1024h576c1cx618cy690cxb2121cyb1414.webp",
      "date": "2021-10-25T15:19:55+02:00",
      "cookTime": 14,
      "prepTime": 12,
      "totalTime": 26,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "orange",
          "quantity": 1.0
        },
        {
          "name": "clou de girofle",
          "quantity": "NaN"
        },
        {
          "name": "pinc\u00e9es de sucre",
          "quantity": 2.0
        },
        {
          "name": "pomme",
          "quantity": 1.0
        },
        {
          "name": "poire",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Coupe l'orange en 2. Demande \u00e0 l'un de tes parents de la couper avec toi !",
        "Vide l'orange de sa chair, puis conserve cette chair et la demi orange coup\u00e9e juste avant.",
        "Ensuite dans une casserole, mets la pomme et la poire coup\u00e9es en morceaux. Demande de l'aide pour cette \u00e9tape.",
        "Ajoute un peu d'eau et du sucre (pas trop non plus) puis la chair de l'orange.",
        "Fais chauffer plus ou moins entre 7 et 10 min.",
        "Verse la mixture dans l'orange et fais une t\u00eate avec les clous de girofle."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Beignets simples",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_4.jpg",
      "date": "2021-10-25T15:01:16+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "g de farine (T ou 110)",
          "quantity": 2.0
        },
        {
          "name": "g de farine",
          "quantity": 2.0
        },
        {
          "name": "g de sucre",
          "quantity": 7.0
        },
        {
          "name": "g de beurre ramolli",
          "quantity": 1.0
        },
        {
          "name": "g de levure de boulanger",
          "quantity": 2.0
        },
        {
          "name": "g de sel",
          "quantity": 7.0
        },
        {
          "name": "bouteille d'huile de friture",
          "quantity": 1.0
        },
        {
          "name": "g de sucre",
          "quantity": 1.0
        },
        {
          "name": "oeufs",
          "quantity": 2.0
        },
        {
          "name": "jaunes d'oeuf",
          "quantity": 2.0
        },
        {
          "name": "ml d'eau ti\u00e8de",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de cannelle",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer l\u2019eau ti\u00e8de, la farine, le sucre, la levure et mettre dans un endroit chaud pour que la levure s\u2019active (\u00e0 c\u00f4t\u00e9 d\u2019un fou chaud par exemple).",
        "Dans la cuve d\u2019un robot, verser tous les ingr\u00e9dients et p\u00e9trir 10 minutes. Ajouter un peu de farine si la p\u00e2te est trop collante",
        "P\u00e9trir \u00e0 la main 10 minutes, badigeonner d\u2019huile et recouvrir d\u2019un linge dans un endroit chaud jusqu'\u00e0 ce qu\u2019elle double de volume.",
        "\u00c9taler la p\u00e2te \u00e0 l\u2019aide d\u2019un rouleau sur une surface farin\u00e9e, puis d\u00e9couper les beignets en boules d\u2019environ 35g/40g.",
        "Les couvrir et laisser pousser 30 minutes.",
        "Plonger les beignets dans une huile chaude et les faire cuire 1 minute de chaque c\u00f4t\u00e9.",
        "Absorber l\u2019exc\u00e9dant d\u2019huile \u00e0 l\u2019aide d\u2019un essuie-tout, puis les saupoudrer de sucre et de cannelle"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Taboul\u00e9 d'automne aux herbes folles",
      "image": "https://assets.afcdn.com/recipe/20211012/122652_w1024h576c1cx506cy731cxb1012cyb1462.webp",
      "date": "2021-10-11T11:08:19+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de lentilles corail",
          "quantity": 0.16666666666666666
        },
        {
          "name": "1/bouquet de persil (plat)",
          "quantity": 0.16666666666666666
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 1.0
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.16666666666666666
        },
        {
          "name": "pinc\u00e9e de poivre",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de quinoa",
          "quantity": 0.5
        },
        {
          "name": "oignon nouveau",
          "quantity": 0.16666666666666666
        },
        {
          "name": "concombre",
          "quantity": 0.16666666666666666
        },
        {
          "name": "ch\u00e2taignes",
          "quantity": 0.3333333333333333
        },
        {
          "name": "1/bouquet de menthe",
          "quantity": 0.16666666666666666
        },
        {
          "name": "1/bouquet de sarriette",
          "quantity": 0.16666666666666666
        },
        {
          "name": "citron",
          "quantity": 0.16666666666666666
        }
      ],
      "recipeInstructions": [
        "Cuire le quinoa dans deux fois son volume d\u2019eau. Idem pour les lentilles. Laisser refroidir.",
        "Laver et couper les oignons nouveaux le plus finement possible.",
        "\u00c9plucher, \u00e9grainer et couper le concombre en petits morceaux.",
        "Hacher menu les ch\u00e2taignes (cuites), puis rincer, s\u00e9cher, effeuiller et hacher les herbes finement.",
        "Mettre le quinoa et les lentilles dans un grand plat les m\u00e9langer avec l\u2019huile d\u2019olive puis ajouter dessus les l\u00e9gumes, les herbes et les ch\u00e2taignes.",
        "Presser le jus de citron, puis saler et poivrer. Attention, ne m\u00e9langer qu'au moment de servir (rectifier l\u2019assaisonnement si n\u00e9cessaire)."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Yaourt au granola sans cuisson",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_1.jpg",
      "date": "2021-10-11T10:49:44+02:00",
      "cookTime": 0,
      "prepTime": 5,
      "totalTime": 5,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "noix",
          "quantity": "NaN"
        },
        {
          "name": "miel liquide",
          "quantity": "NaN"
        },
        {
          "name": "yaourt nature",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de p\u00e9tales de ma\u00efs",
          "quantity": 2.0
        },
        {
          "name": "c.\u00e0.s de flocons d'avoine",
          "quantity": 2.0
        },
        {
          "name": "graines de courge",
          "quantity": "NaN"
        },
        {
          "name": "graines de tournesol",
          "quantity": "NaN"
        },
        {
          "name": "raisins secs",
          "quantity": "NaN"
        },
        {
          "name": "raisins secs",
          "quantity": "NaN"
        },
        {
          "name": "canneberge",
          "quantity": "NaN"
        },
        {
          "name": "noisettes",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Dans un saladier, commencer par mettre une cuill\u00e8re de c\u00e9r\u00e9ales.",
        "Mettre le yaourt par dessus.",
        "Enfin, mettre les fruits \u00e0 coques hach\u00e9s finement, les fruits secs et quelques graines au centre. Arroser le tout de miel !"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Les yeux de sorci\u00e8res",
      "image": "https://assets.afcdn.com/recipe/20211007/122461_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-10-13T16:45:29+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "bo\u00eetes de litchi au sirop",
          "quantity": 2.0
        },
        {
          "name": "g de myrtilles ou raisins secs",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Ouvre la boite de litchis. Prends un litchi et plante avec l'aide d'un cure-dent une myrtille ou raisin dedans (il faut qu'il soit bien voyant), ajoute le jus des litchis dans un bol et y verse tous les \"yeux\" que tu as fabriqu\u00e9s."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Orange glac\u00e9e d'Halloween",
      "image": "https://assets.afcdn.com/recipe/20211007/122459_w1024h576c1cx842cy942cxb1732cyb1732.webp",
      "date": "2021-10-07T15:35:46+02:00",
      "cookTime": 0,
      "prepTime": 17,
      "totalTime": 17,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "orange",
          "quantity": 0.25
        },
        {
          "name": "cannelle",
          "quantity": 1.0
        },
        {
          "name": "pot de glace (vanille ou chocolat)",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Coupe 1/3 du dessus des oranges pour en faire un chapeau et mets-les de c\u00f4t\u00e9. Demande \u00e0 l'un de tes parents de le faire avec toi.",
        "Vide l'int\u00e9rieur des oranges avec une cuill\u00e8re. Garde la chair pour une autre recette, rien ne se perd !",
        "Forme des yeux et une bouche \u00e0 chaque orange (d\u00e9coupe dans la peau avec l'aide d'un adulte comme pour une citrouille).",
        "Remplis chaque orange de glace jusqu'en haut. Plante un b\u00e2ton de cannelle sur chacun des chapeaux, remets les chapeaux sur les oranges et r\u00e9serve au cong\u00e9lateur pendant 30 min."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Moscow mule express",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_2.jpg",
      "date": "2021-10-06T16:21:31+02:00",
      "cookTime": 0,
      "prepTime": 5,
      "totalTime": 5,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "cl de vodka",
          "quantity": 4.0
        },
        {
          "name": "citron vert",
          "quantity": 1.0
        },
        {
          "name": "cl de Ginger beer",
          "quantity": 1.0
        },
        {
          "name": "concombre",
          "quantity": "NaN"
        },
        {
          "name": "gla\u00e7ons",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Dans un shaker rempli de gla\u00e7ons, verser le jus frais d'un demi citron-vert et 4 cl de vodka.",
        "M\u00e9langer et verser dans le verre rempli de gla\u00e7ons.",
        "Disposer des fines tranches de concombre dans le verre, puis verser la ginger beer.",
        "Zester du citron vert au-dessus du verre et glisser quelques rondelles de concombre dans le verre. Ajouter une tranche de citron en pr\u00e9sentation et du basilic !"
      ],
      "categorie": "Boisson",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Tortilla de riz au poulet et mozzarella de Fr\u00e9d\u00e9ric",
      "image": "https://assets.afcdn.com/recipe/20210906/121853_w1024h576c1cx1530cy1513cxb3024cyb3780.webp",
      "date": "2021-09-06T14:56:32+02:00",
      "cookTime": 45,
      "prepTime": 10,
      "totalTime": 55,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "filet d'huile d'olive",
          "quantity": 0.25
        },
        {
          "name": "escalope de poulet",
          "quantity": 0.25
        },
        {
          "name": "\u00e9chalote",
          "quantity": 0.25
        },
        {
          "name": "g de mozzarella",
          "quantity": 0.5
        },
        {
          "name": "g de riz",
          "quantity": 0.75
        }
      ],
      "recipeInstructions": [
        "Faire cuire le riz 10 \u00e0 15min dans une casserole d\u2019eau bouillante",
        "Couper l\u2019escalope de poulet en petits morceaux et les faire revenir dans une po\u00eale (qui ne colle pas) avec un filet d\u2019huile d\u2019olive et de l\u2019\u00e9chalote ",
        "Ajoutez le riz cuit dans la po\u00eale avec les morceaux de poulet, assaisonner et m\u00e9langez bien l\u2019ensemble",
        "Ajoutez les morceaux de mozzarella et bien m\u00e9langer pendant 5min",
        "Laissez cuire 10 minutes \u00e0 feu doux sans remuer en formant une \u00ab\u00a0galette\u00a0\u00bb \u00e0 l\u2019aide d\u2019une cuill\u00e8re en bois",
        "\u00c0 l\u2019aide d\u2019une assiette (plus grande que la po\u00eale) retourner la tortilla pour faire cuire l\u2019autre c\u00f4t\u00e9 10 \u00e0 15min "
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Salade de billes melon, past\u00e8que et mozzarella",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_1.jpg",
      "date": "2021-09-01T15:18:19+02:00",
      "cookTime": 0,
      "prepTime": 8,
      "totalTime": 8,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "demi de melon",
          "quantity": 0.25
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de vinaigre de x\u00e9r\u00e8s",
          "quantity": 0.25
        },
        {
          "name": "1/past\u00e8que",
          "quantity": 0.25
        },
        {
          "name": "1/melon jaune",
          "quantity": 0.25
        },
        {
          "name": "billes de mozzarella",
          "quantity": "NaN"
        },
        {
          "name": "tranches de jambon italien finement d\u00e9coup\u00e9",
          "quantity": 1.0
        },
        {
          "name": "basilic",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Commencer par faire des billes dans les fruits \u00e0 l'aide d'une cuill\u00e8re parisienne.",
        "Verser les billes dans un grand plat de service.",
        "Ajouter d\u00e9licatement les billes de mozzarella et d\u00e9poser le jambon.",
        "Faire la vinaigrette sel, poivre, vinaigre et huile d'olive puis la verser sur la salade.",
        "D\u00e9poser du basilic cisel\u00e9."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Quiche d'\u00e9t\u00e9 au thon, tomates et feta",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_3.jpg",
      "date": "2021-09-01T13:30:26+02:00",
      "cookTime": 0,
      "prepTime": 55,
      "totalTime": 55,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "rouleau de p\u00e2te bris\u00e9e",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.c de moutarde",
          "quantity": 1.0
        },
        {
          "name": "tomates",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de farine",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de poivre",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "bo\u00eete de thon au naturel",
          "quantity": 0.25
        },
        {
          "name": "herbes aromatiques",
          "quantity": "NaN"
        },
        {
          "name": "g de feta",
          "quantity": 0.5
        },
        {
          "name": "oeufs",
          "quantity": 1.0
        },
        {
          "name": "cl de cr\u00e8me semi \u00e9paisse de pr\u00e9f\u00e9rence",
          "quantity": 0.75
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffez le four \u00e0 200\u00b0C.",
        "D\u00e9roulez la p\u00e2te bris\u00e9e dans un moule \u00e0 manquer beurr\u00e9, en collant bien la p\u00e2te sur les bords. Piquez le fond \u00e0 la fourchette.",
        "\u00c9talez la moutarde sur le fond de tarte, puis \u00e9miettez le thon par dessus.",
        "Coupez les tomates et la feta en petits morceaux, et les d\u00e9poser sur la p\u00e2te apr\u00e8s avoir retir\u00e9 le surplus d'eau.",
        "Dans un bol, battez les oeufs avec la cr\u00e8me fra\u00eeche, puis ajoutez la cuill\u00e8re \u00e0 soupe de farine. Salez, poivrez et ajoutez les herbes de votre choix.",
        "Versez cette pr\u00e9paration sur la tarte, jusqu'en haut du moule.",
        "Enfournez la tarte pendant environ 40 min."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Smoothie past\u00e8que",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_5.jpg",
      "date": "2021-08-30T16:43:45+02:00",
      "cookTime": 0,
      "prepTime": 15,
      "totalTime": 15,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.s de miel",
          "quantity": 0.5
        },
        {
          "name": "demi de past\u00e8que",
          "quantity": 0.5
        },
        {
          "name": "demi de concombre",
          "quantity": 0.5
        },
        {
          "name": "demi de jus de citron",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Commencer par retirer la peau du concombre et le d\u00e9couper. Ensuite, couper la past\u00e8que en morceaux. (en garder pour la pr\u00e9sentation)",
        "Mettre les morceaux dans un blender, puis mixer.",
        "Faire des boules de past\u00e8ques et des lamelles de concombre et les piquer sur des brochettes.",
        "Servir dans des beaux verres remplis de gla\u00e7ons avec une brochette de past\u00e8que et concombre dans chacun."
      ],
      "categorie": "Boisson",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Fajitas au salami",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_2.jpg",
      "date": "2021-08-30T16:16:17+02:00",
      "cookTime": 0,
      "prepTime": 29,
      "totalTime": 29,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "tomates",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile",
          "quantity": 0.25
        },
        {
          "name": "tortillas grandes",
          "quantity": 1.25
        },
        {
          "name": "poign\u00e9es de cheddar (orange)",
          "quantity": 2.0
        },
        {
          "name": "tranches de salami piquant",
          "quantity": 0.5
        },
        {
          "name": "oignons nouveaux",
          "quantity": 1.0
        },
        {
          "name": "sucrines",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.c de chili en poudre",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Dans une tortilla, d\u00e9couper 4 cercles \u00e0 l\u2019emporte-pi\u00e8ce (en faisant un minimum de perte dans la tortilla).",
        "M\u00e9langer l\u2019huile avec le chili et un peu de sel. D\u00e9couper les chutes (ce qu'il reste de la tortilla) en lamelles. Les mettre dans un bol et les arroser avec l\u2019huile parfum\u00e9e. M\u00e9langer jusqu\u2019\u00e0 ce qu\u2019ils soient bien recouverts puis les mettre sur une plaque \u00e0 four et les mettre au four 5 \u00e0 7 min \u00e0 180\u00b0C. Laisser refroidir.",
        "\u00c9mincer les tomates, la salade sucrine et les oignons frais.",
        "Sur chacune des tortillas enti\u00e8res d\u00e9poser :\n- un peu de cheddar\n- salade\n- tomate\n- lamelles de tortilla croustillantes\n- salami\n- cheddar\n- oignon nouveau",
        "D\u00e9poser un des cercles de tortilla et replier en fleur - en rabattant de mani\u00e8re r\u00e9guli\u00e8re vers le centre.",
        "Cuire sur une po\u00eale \u00e0 sec 3 minutes de chaque c\u00f4t\u00e9."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Biscuits v\u00e9gan au cacao",
      "image": "https://assets.afcdn.com/recipe/20210711/121176_w1024h576c1cx1512cy1512cxb3024cyb3024.webp",
      "date": "2021-07-12T10:24:00+02:00",
      "cookTime": 10,
      "prepTime": 15,
      "totalTime": 55,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "g de farine",
          "quantity": 1.0
        },
        {
          "name": "g de p\u00e9pites de chocolat",
          "quantity": 1.0
        },
        {
          "name": "g de levure chimique",
          "quantity": 2.0
        },
        {
          "name": "g de beurre d'amande",
          "quantity": 1.0
        },
        {
          "name": "g de cassonade",
          "quantity": 5.0
        },
        {
          "name": "ml de lait de soja",
          "quantity": 2.0
        },
        {
          "name": "c.\u00e0.c de chocolat en poudre",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 180\u00b0C.",
        "M\u00e9langer le beurre de noix de cajou, la farine, le sucre de coco, le chocolat en poudre, le lait de riz et le bicarbonate alimentaire.",
        "Incorporer les p\u00e9pites de chocolat \u00e0 la p\u00e2te \u00e0 biscuits.",
        "Prendre une cuill\u00e8re \u00e0 caf\u00e9 de p\u00e2te et la rouler entre les mains.",
        "Recouvrir une plaque de cuisson de papier sulfuris\u00e9 et d\u00e9poser la boule.\n",
        "R\u00e9p\u00e9ter les \u00e9tapes 4 \u00e0 5 jusqu\u2019\u00e0 ce qu\u2019il ne reste plus de p\u00e2te.\n",
        "Aplatir les boules de sorte \u00e0 obtenir une forme de biscuits.",
        "Enfourner pendant 10 minutes.\n",
        "Les laisser refroidir sur une grille afin qu\u2019ils deviennent durs.\n"
      ],
      "categorie": "Confiserie",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Past\u00e8que grill\u00e9e au barbecue (Smoked watermelon ham)",
      "image": "https://assets.afcdn.com/recipe/20210707/121119_w1024h576c1cx844cy1336cxb1414cyb2119.webp",
      "date": "2021-07-07T17:42:10+02:00",
      "cookTime": 58,
      "prepTime": 1451,
      "totalTime": 1509,
      "numberPersons": 8,
      "recipeIngredient": [
        {
          "name": "petit bol de sel",
          "quantity": 0.125
        },
        {
          "name": "c.\u00e0.s d'origan",
          "quantity": 0.125
        },
        {
          "name": "c.\u00e0.s de coriandre",
          "quantity": 0.25
        },
        {
          "name": "beau bouquet d'origan",
          "quantity": 0.125
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.625
        },
        {
          "name": "petits bouquets de romarin",
          "quantity": 0.25
        },
        {
          "name": "past\u00e8que",
          "quantity": 0.125
        },
        {
          "name": "c.\u00e0.s de cendres de bois de ch\u00eane",
          "quantity": 0.125
        }
      ],
      "recipeInstructions": [
        "Poser la past\u00e8que sur l\u2019une de ses extr\u00e9mit\u00e9s. Enlever la peau petit \u00e0 petit avec un grand couteau.",
        "Mettre deux verres d\u2019eau chaude dans un saladier, puis y verser le sel et tous les autres ingr\u00e9dients. Bien m\u00e9langer.",
        "Placer la past\u00e8que dans une glaci\u00e8re remplie d\u2019eau tr\u00e8s froide et y incorporer le m\u00e9lange d\u2019herbes et d\u2019\u00e9pices. R\u00e9server environ 24 heures.",
        "Allumer le barbecue. Sortir la past\u00e8que de la glaci\u00e8re et la d\u00e9poser sur la grille du barbecue. La faire griller sur toutes ses surfaces, puis la retirer. R\u00e9server son jus.",
        "Mettre la pi\u00e8ce sur un grand plateau, puis l\u2019entailler comme un jambon grill\u00e9, dans la longueur et dans la largeur. Les entailles doivent cr\u00e9er un quadrillage.",
        "Prendre une po\u00eale wok et y verser l\u2019huile d\u2019olive. Ajouter le romarin et d\u00e9poser d\u00e9licatement la past\u00e8que \u00e0 l\u2019aide de deux spatules plates. L\u2019arroser d\u2019huile d\u2019olive et de son jus, sur la surface et dans les entailles. Laisser r\u00f4tir environ 20 minutes \u00e0 feu doux, puis la retirer.",
        "D\u00e9placer la past\u00e8que sur une planche \u00e0 d\u00e9couper, et faire de belles tranches. Dresser sur une grande assiette."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9"
    },
    {
      "name": "Courgettes farcies aux trois fromages",
      "image": "https://assets.afcdn.com/recipe/20210630/121011_w1024h576c1cx1003cy747cxb2006cyb1494.webp",
      "date": "2021-06-30T15:04:41+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "courgettes rondes",
          "quantity": 1.0
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "oeuf",
          "quantity": 0.25
        },
        {
          "name": "g de fromage de ch\u00e8vre",
          "quantity": 2.0
        },
        {
          "name": "g de ricotta",
          "quantity": 2.0
        },
        {
          "name": "g de parmesan r\u00e2p\u00e9",
          "quantity": 2.0
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        },
        {
          "name": "menthe fra\u00eeche",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Laver les courgettes, \u00f4ter leur chapeau et creuser la chair \u00e0 l'aide d'une petite cuill\u00e8re.",
        "Faire revenir la pulpe de courgette dans une po\u00eale avec un peu d'huile d'olive.",
        "Dans un saladier m\u00e9langer les oeufs et les 3 fromages.",
        "Saler, poivrer et ciseler la menthe. Ajouter la pulpe de courgette.",
        "Pr\u00e9chauffer le four \u00e0 180\u00b0C (thermostat 6).",
        "Garnir les courgettes avec la pr\u00e9paration.",
        "Enfourner pour 45 minutes."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Courgette farcie fa\u00e7on oeuf cocotte",
      "image": "https://assets.afcdn.com/recipe/20210630/121010_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-06-30T14:43:17+02:00",
      "cookTime": 15,
      "prepTime": 10,
      "totalTime": 25,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "courgettes rondes",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de cr\u00e8me fra\u00eeche",
          "quantity": 1.0
        },
        {
          "name": "paquet de lardons",
          "quantity": 0.5
        },
        {
          "name": "oeufs",
          "quantity": 1.0
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Laver les courgettes, \u00f4ter leur chapeau et creuser la chair \u00e0 l\u2019aide d\u2019une petite cuill\u00e8re. R\u00e9server.",
        "Pr\u00e9cuire les courgettes \u00e0 la vapeur pendant 10 \u00e0 15 minutes.",
        "Pr\u00e9chauffer le four \u00e0 180\u00b0C.",
        "D\u00e9poser les courgettes cuites dans un plat \u00e0 gratin.",
        "M\u00e9langer la chair des courgettes mise de c\u00f4t\u00e9 avec la cr\u00e8me fra\u00eeche et les lardons. Ajouter ce m\u00e9lange au fond des courgettes.",
        "Casser un oeuf dans chaque courgette.\nSalet et poivrer.",
        "Enfourner pour 15 minutes en surveillant la cuisson."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Aubergines fa\u00e7on mini Pizza de Fr\u00e9d\u00e9ric",
      "image": "https://assets.afcdn.com/recipe/20210627/120895_w1024h576c1cx920cy1342cxb1980cyb2475.webp",
      "date": "2021-07-06T12:08:22+02:00",
      "cookTime": 30,
      "prepTime": 10,
      "totalTime": 40,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "tomates cerise",
          "quantity": 0.25
        },
        {
          "name": "aubergines",
          "quantity": 0.5
        },
        {
          "name": "filet d'huile d'olive",
          "quantity": 0.25
        },
        {
          "name": "poivron",
          "quantity": 0.25
        },
        {
          "name": "basilic frais",
          "quantity": 0.25
        },
        {
          "name": "g de Parmesan",
          "quantity": 1.0
        },
        {
          "name": "olives noires",
          "quantity": 0.25
        },
        {
          "name": "mozzarella",
          "quantity": 0.5
        },
        {
          "name": "g de coulis de tomate",
          "quantity": 0.75
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffez votre four \u00e0 180\u00b0C",
        "Apr\u00e8s avoir lav\u00e9 les aubergines, coupez les en rondelles d\u2019environ 1cm d\u2019\u00e9paisseur",
        "Disposez-les sur une plaque du four recouverte de papier sulfuris\u00e9 ",
        "Arrosez d\u2019un filet d\u2019huile d\u2019olive et enfournez 10 mn \u00e0 180\u00b0C pour les pr\u00e9cuire",
        "Sortez les aubergines du four et \u00e9talez le coulis de tomate sur les rondelles ",
        "Disposez la garniture, la mozzarella, le parmesan, les poivrons, les tomates cerises et le basilic",
        "Enfournez 20mn \u00e0 180\u00b0C.\nEt avant de d\u00e9guster, ajouter une olive noir sur chacune des minis pizzas "
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Mokary (mofo gasy coco)",
      "image": "https://assets.afcdn.com/recipe/20210602/120563_w1024h576c1cx1488cy1984cxb2976cyb3968.webp",
      "date": "2021-06-07T12:10:46+02:00",
      "cookTime": 15,
      "prepTime": 10,
      "totalTime": 385,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.s de sucre",
          "quantity": 1.1666666666666667
        },
        {
          "name": "sachet de levure de boulanger",
          "quantity": 0.16666666666666666
        },
        {
          "name": "oeuf",
          "quantity": 0.16666666666666666
        },
        {
          "name": "ml de cr\u00e8me de coco",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de farine de riz",
          "quantity": 0.6666666666666666
        },
        {
          "name": "ml de lait de coco",
          "quantity": 0.6666666666666666
        },
        {
          "name": "verre d'eau",
          "quantity": 0.16666666666666666
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9parez la bouillie de riz en mettant le verre d'eau dans la casserole et 3 cuill\u00e8re \u00e0 soupe de farine de riz. Faire cuire \u00e0 feu doux jusqu'\u00e0 ce que le m\u00e9lange dess\u00e8che. Laissez refroidir.",
        "Dans un saladier, mettre le reste de la farine de riz, la bouillie refroidie, la levure, la cr\u00e8me de coco et le lait de coco. Bien m\u00e9langer \u00e0 la main jusqu'\u00e0 obtention d'une p\u00e2te identique \u00e0 une p\u00e2te \u00e0 pancake. Recouvrir d'un linge et laissez reposer \u00e0 temp\u00e9rature ambiante pendant au moins 6 heures. En g\u00e9n\u00e9ral, je pr\u00e9pare la veille pour le lendemain.",
        "Dans un bol m\u00e9langer l\u2019\u0153uf et le sucre. Ajouter \u00e0 la p\u00e2te lev\u00e9e.",
        "Fa\u00eetes chauffer votre po\u00eale \u00e0 pancake et remplir chaque alv\u00e9ole au 3/4.Faire cuire chaque face de telle sorte \u00e0 avoir un petit pain bien color\u00e9.  La po\u00eale utilis\u00e9e est une po\u00eale sp\u00e9ciale (po\u00eale \u00e0 pancake danois) \u00e0 alv\u00e9ole disponible sur amazon. "
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "\u00c9minc\u00e9 v\u00e9g\u00e9tal \u00e0 la sauce tomate",
      "image": "https://assets.afcdn.com/recipe/20210602/120560_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-06-02T17:25:35+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de tomate bien m\u00fbres",
          "quantity": 1.25
        },
        {
          "name": "l de bouillon de l\u00e9gumes",
          "quantity": 0.5
        },
        {
          "name": "oignon",
          "quantity": "NaN"
        },
        {
          "name": "piment oiseau",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.25
        },
        {
          "name": "verres de prot\u00e9ine de soja textur\u00e9es",
          "quantity": 0.5
        },
        {
          "name": "cl de sauce soja",
          "quantity": 1.0
        },
        {
          "name": "bouquet garni",
          "quantity": "NaN"
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Commencer par r\u00e9hydrater les prot\u00e9ines v\u00e9g\u00e9tales : dans une casserole, m\u00e9langer le bouillon de l\u00e9gumes, les prot\u00e9ines, la sauce soja et le bouquet garni.",
        "Laisser bouillir le tout pendant 15 minutes. \u00c9goutter les prot\u00e9ines de soja, conserver leur eau de cuisson et le bouquet garni !",
        "\u00c9mincer l'oignon. Le faire revenir dans une casserole avec une cuill\u00e8re \u00e0 soupe d'huile d'olive.",
        "Couper les tomates en d\u00e9s. Les ajouter dans la casseroles pendant 2 min. Verser les proteines de soja avec 2 louches d'eau de cuisson, le bouquet garni, puis le piment.",
        "Laisser mijoter le tout 20 min.",
        "Servir avec du riz."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tartelettes sans cuisson \u00e0 la mangue",
      "image": "https://assets.afcdn.com/recipe/20210602/120559_w1024h576c1cx1059cy707cxb2119cyb1414.webp",
      "date": "2021-06-02T17:06:16+02:00",
      "cookTime": 0,
      "prepTime": 20,
      "totalTime": 20,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de noix de coco rap\u00e9e",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de datte",
          "quantity": 0.3333333333333333
        },
        {
          "name": "filet d'eau",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de noix de cajou",
          "quantity": 0.8333333333333334
        },
        {
          "name": "fruits frais",
          "quantity": "NaN"
        },
        {
          "name": "mangue",
          "quantity": 0.16666666666666666
        },
        {
          "name": "cl de cr\u00e8me de coco",
          "quantity": 0.3333333333333333
        },
        {
          "name": "c.\u00e0.c d'agar-agar",
          "quantity": 0.16666666666666666
        }
      ],
      "recipeInstructions": [
        "Pour la p\u00e2te \u00e0 tarte : d\u00e9noyauter les dattes et les mixer avec la noix de coco et les noix de cajou jusqu'\u00e0 obtenir une p\u00e2te qui se tienne. Ajouter un filet d'eau si besoin.",
        "Avec cette p\u00e2te, foncer les moules \u00e0 tartelettes puis placer au cong\u00e9lateur.",
        "Pr\u00e9lever la chair de la mangue et la mixer pour obtenir une pur\u00e9e lisse.",
        "Dans une casserole, verser la pur\u00e9e de mangue, la cr\u00e8me de coco et l'agar-agar.",
        "Chauffer le tout \u00e0 feu moyen tout en m\u00e9langeant, une fois que \u00e7a bout, attendre 1 min puis retirer la casserole du feu.",
        "Verser l'appareil sur les fond de tarte et laisser prend au frais 4 h minimum.",
        "Avant de servir, d\u00e9corer avec des fruits frais de saison et de la poudre de noix."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Carpaccio de tomates ananas, radis et concombre",
      "image": "https://assets.afcdn.com/recipe/20210602/120558_w1024h576c1cx712cy1053cxb1424cyb2106.webp",
      "date": "2021-06-02T16:39:33+02:00",
      "cookTime": 0,
      "prepTime": 15,
      "totalTime": 15,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "filet d'huile d'olive",
          "quantity": 0.5
        },
        {
          "name": "tomates ananas",
          "quantity": 2.0
        },
        {
          "name": "1/concombre",
          "quantity": 0.5
        },
        {
          "name": "radis",
          "quantity": 4.0
        },
        {
          "name": "poign\u00e9e de basilic",
          "quantity": 0.5
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        },
        {
          "name": "poign\u00e9e de pignons",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Rincer les tomates ananas, les radis et le demi concombre.",
        "Tailler les tomates et les radis en fines rondelles.",
        "Couper le concombre en 2 dans le sens dans l'\u00e9paisseur. Couper chaque moiti\u00e9 dans le sens de la longueur et d\u00e9couper des lamelles de concombres.",
        "D\u00e9poser les tomates ananas dans un plat, recouvrir de rondelles de radis et de lamelles de concombre. Arroser d'un filet d'huile d'olive, saupoudrer un peu de sel.",
        "Hacher le basilic et concasser les pignons, parsemer le tout sur les crudit\u00e9s.",
        "Servir frais."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Aubergine farcie au houmous, tomates et olives",
      "image": "https://assets.afcdn.com/recipe/20210602/120556_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-06-02T16:04:50+02:00",
      "cookTime": 40,
      "prepTime": 15,
      "totalTime": 55,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de pois chiches",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de cumin en poudre",
          "quantity": 0.25
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de tahin",
          "quantity": 0.25
        },
        {
          "name": "1/citron",
          "quantity": 0.25
        },
        {
          "name": "aubergines",
          "quantity": 0.5
        },
        {
          "name": "filets d'huile d'olive",
          "quantity": 1.0
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "tomates",
          "quantity": 0.75
        },
        {
          "name": "g d'olives vertes nature ou \u00e0 la proven\u00e7ales",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Enlever le p\u00e9doncules des aubergines et les rincer. Les couper en 2 dans le sens de la longueur.",
        "Quadriller la chair des aubergines, verser un filet d'huile d'olive sur chaque moiti\u00e9 et saupoudrer de petites pinc\u00e9es de sel.",
        "Enfourner 30 min \u00e0 180\u00b0C.",
        "Pendant ce temps, mixer les pois-chiches, avec l'huile d'olive, le jus de citron et la p\u00e2te de s\u00e9same. Assaisonner avec le cumin et le sel.",
        "Rincer les tomates, les tailler en cubes. D\u00e9noyauter les olives si besoins et les couper en 3. M\u00e9langer les olives et les tomates ensembles.",
        "Sortir les aubergines du four. \u00c0 l'aide d'une cuill\u00e8re \u00e0 soupe, gratter la chair sur environ 1 cm. M\u00e9langer la chair d'aubergine au houmous puis remplir les aubergines avec cette farce.",
        "Recouvrir de tomates et d'olives. Remettre au four 10 min."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tartines radis et fromage frais de ch\u00e8vre",
      "image": "https://assets.afcdn.com/recipe/20210520/120418_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-05-20T15:34:16+02:00",
      "cookTime": 2,
      "prepTime": 5,
      "totalTime": 7,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "tranches de pain polaire",
          "quantity": 1.0
        },
        {
          "name": "fromage frais de ch\u00e8vre",
          "quantity": "NaN"
        },
        {
          "name": "botte de radis",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Faire griller le pain au four ou au grille-pain.",
        "Fouettez le fromage frais avec une pinc\u00e9e de sel et de poivre.",
        "Laver et pr\u00e9parer la botte de radis. Les couper en rondelles.",
        "Tartiner le fromage sur le pain et ajouter les rondelles de radis."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Tartines ricotta, courgettes, pur\u00e9e de petits-pois et menthe",
      "image": "https://assets.afcdn.com/recipe/20210520/120410_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-05-20T15:24:20+02:00",
      "cookTime": 10,
      "prepTime": 20,
      "totalTime": 30,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "courgette bio",
          "quantity": 0.25
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "sel",
          "quantity": "NaN"
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "tranches de pain",
          "quantity": 1.0
        },
        {
          "name": "g de petits pois frais ou surgel\u00e9s",
          "quantity": 0.25
        },
        {
          "name": "g de ricotta",
          "quantity": 0.25
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.25
        },
        {
          "name": "jus de citron",
          "quantity": "NaN"
        },
        {
          "name": "Parmesan",
          "quantity": "NaN"
        },
        {
          "name": "feuilles de menthe",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Faire cuire les petits-pois une dizaine de minutes. Les \u00e9goutter et les passer sous l'eau froide pour fixer la couleur.",
        "Placer les petits-pois dans un mixeur avec 2 cuill\u00e8res \u00e0 soupe de ricotta, la gousse d'ail, un peu de parmesan r\u00e2p\u00e9, 1 c. \u00e0 soupe de jus de citron et une c. \u00e0 soupe d'huile d'olive, une pinc\u00e9e de sel et de poivre. Mixer",
        "Laver et d\u00e9couper des tagliatelles de courgettes \u00e0 l'aide d'un \u00e9conome.",
        "Faire dorer les 4 tartines de pain au grille-pain ou au four.",
        "Tartiner la pur\u00e9e de petits-pois sur les tartines, d\u00e9poser une cuill\u00e8re \u00e0 soupe de ricotta par dessus.",
        "Ajouter les tagliatelles de courgettes, r\u00e2per un peu de parmesan, saler et poivrer puis d\u00e9poser 2 feuilles de menthe sur la tartine."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Ananas r\u00f4ti, banane, fruit de la passion, chantilly",
      "image": "https://assets.afcdn.com/recipe/20210520/120413_w1024h576c1cx1491cy1956cxb3016cyb3474.webp",
      "date": "2021-05-20T15:20:20+02:00",
      "cookTime": 20,
      "prepTime": 40,
      "totalTime": 60,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "noix de coco",
          "quantity": 0.25
        },
        {
          "name": "g de sucre glace",
          "quantity": 0.5
        },
        {
          "name": "gousse de vanille",
          "quantity": 0.25
        },
        {
          "name": "g de cr\u00e8me",
          "quantity": 0.25
        },
        {
          "name": "g de mascarpone",
          "quantity": 0.5
        },
        {
          "name": "g de banane",
          "quantity": 1.25
        },
        {
          "name": "g d'ananas",
          "quantity": 1.25
        },
        {
          "name": "fruit de la passion",
          "quantity": 0.25
        },
        {
          "name": "citron vert",
          "quantity": "NaN"
        },
        {
          "name": "sucre",
          "quantity": "NaN"
        },
        {
          "name": "vanille",
          "quantity": "NaN"
        },
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "ananas",
          "quantity": 0.5
        },
        {
          "name": "jus d'ananas",
          "quantity": "NaN"
        },
        {
          "name": "g de beurre",
          "quantity": 1.25
        },
        {
          "name": "g de farine",
          "quantity": 1.25
        },
        {
          "name": "g de sucre vanill\u00e9",
          "quantity": 1.25
        },
        {
          "name": "g de blanc d'oeuf",
          "quantity": 1.25
        }
      ],
      "recipeInstructions": [
        "Pour la tuile cigarette : r\u00e9aliser un beurre pommade, ajouter le sucre, la farine et finir par les blancs.",
        "Mettre en forme, cuire et rouler.",
        "Pour l'ananas r\u00f4ti : couper l\u2019ananas en tron\u00e7ons.",
        "R\u00e9aliser un caramel \u00e0 sec avec le sucre.",
        "Caram\u00e9liser les tron\u00e7ons dans le caramel.",
        "D\u00e9cuire avec le jus d\u2019ananas et le sucre, napper les ananas r\u00e9guli\u00e8rement.",
        "Une fois cuit, les retirer, garder le jus et le perler \u00e0 l\u2019huile d\u2019olive.",
        "Pour la brunoise : r\u00e9aliser une belle brunoise avec les fruits. Assaisonner avec le jus du citron vert.",
        "Pour la chantilly : m\u00e9langer la cr\u00e8me, le mascarpone, le sucre glace et les graines de la gousse de vanille. Mettre en siphon.",
        "Pour les lamelles de coco : casser la noix de coco, la couper en deux. R\u00e9aliser des lamelles avec un \u00e9conome."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Pizza roul\u00e9e \u00e0 la cannelle",
      "image": "https://assets.afcdn.com/recipe/20210520/120417_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-05-20T15:27:51+02:00",
      "cookTime": 20,
      "prepTime": 10,
      "totalTime": 30,
      "numberPersons": 3,
      "recipeIngredient": [
        {
          "name": "sucre glace",
          "quantity": 0.3333333333333333
        },
        {
          "name": "blanc d'oeuf",
          "quantity": 0.3333333333333333
        },
        {
          "name": "p\u00e2te \u00e0 pizza",
          "quantity": 0.3333333333333333
        },
        {
          "name": "beurre mou",
          "quantity": 2.6666666666666665
        },
        {
          "name": "g de sucre roux",
          "quantity": 2.6666666666666665
        },
        {
          "name": "cannelle",
          "quantity": "NaN"
        },
        {
          "name": "c.\u00e0.s de lait",
          "quantity": 0.6666666666666666
        }
      ],
      "recipeInstructions": [
        "Travailler le beurre avec le sucre roux et la cannelle.",
        "D\u00e9rouler la p\u00e2te \u00e0 pizza, \u00e9taler le beurre \u00e0 la cannelle.",
        "Rouler la p\u00e2te \u00e0 pizza. D\u00e9couper la p\u00e2te en 6.",
        "Disposer les roul\u00e9s dans un plat rond en les serrant. Les badigeonner de lait.",
        "Cuire les roul\u00e9s \u00e0 180\u00b0C pendant 25 minutes, ils doivent \u00eatre bien dor\u00e9s.",
        "Laisse refroidir les roul\u00e9s avant de les glacer. Pour le gla\u00e7age : m\u00e9langer le blanc d'oeuf avec le sucre et verser le gla\u00e7age dessus."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Pizza myrtille et pommes",
      "image": "https://assets.afcdn.com/recipe/20210520/120409_w1024h576c1cx1504cy1000cxb3008cyb2000.webp",
      "date": "2021-05-20T14:43:12+02:00",
      "cookTime": 20,
      "prepTime": 10,
      "totalTime": 30,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "p\u00e2te \u00e0 pizza",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9es de sucre",
          "quantity": 0.5
        },
        {
          "name": "cl de cr\u00e8me aigre",
          "quantity": 0.25
        },
        {
          "name": "pommes",
          "quantity": 0.5
        },
        {
          "name": "g de myrtilles",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Laver les pommes et les myrtilles.",
        "D\u00e9couper les pommes en tranches fines. Les m\u00e9langer dans un saladier avec 2 pinc\u00e9es de sucre.",
        "R\u00e9partir la cr\u00e8me aigre sur la pizza. Recouvrir la pizza de myrtille et finir par les tranches de pommes.",
        "Enfourner la pizza pour 20 min \u00e0 190\u00b0C."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Le sandwich aux fruits japonais (Fruit sando)",
      "image": "https://assets.afcdn.com/recipe/20210505/120111_w1024h576c1cx1424cy2136cxb2848cyb4272.webp",
      "date": "2021-05-05T16:16:52+02:00",
      "cookTime": 0,
      "prepTime": 10,
      "totalTime": 10,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "g de sucre glace",
          "quantity": 2.5
        },
        {
          "name": "gousse de vanille",
          "quantity": 0.5
        },
        {
          "name": "fraises",
          "quantity": 4.0
        },
        {
          "name": "cr\u00e8me liquide % de mati\u00e8re grasse",
          "quantity": 1.5
        },
        {
          "name": "tranches \u00e9paisses de pain de mie",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "30 minutes avant, mettre la cr\u00e8me, le saladier et le batteur au frais.",
        "Enlever la cro\u00fbte du pain de mie.",
        "Verser la cr\u00e8me dans le batteur. Fendre la gousse de vanille en 2, gratter les grains et m\u00e9langer \u00e0 la cr\u00e8me.",
        "Monter la cr\u00e8me en chantilly en incorporant le sucre petit \u00e0 petit.",
        "Tartiner chaque base de sandwich avec de la cr\u00e8me fouett\u00e9e.",
        "Laver les fraises et les \u00e9queuter.",
        "Disposer les fraises \u00e0 la verticale sur 2 tranches de pain de mie.",
        "Recouvrir les fraises de chantilly en veillant \u00e0 bien combler les trous.",
        "Refermer les sandwichs. Les filmer d\u00e9licatement, sans les \u00e9craser. Mettre au frigo 15 minutes.",
        "Au moment de servir, couper les sandwich en triangles."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "P\u00e2tes \u00e0 la courgette en sauce tomate",
      "image": "https://assets.afcdn.com/recipe/20210505/120109_w1024h576c1cx968cy774cxb1936cyb1549.webp",
      "date": "2021-05-05T15:01:18+02:00",
      "cookTime": 20,
      "prepTime": 10,
      "totalTime": 30,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "courgette",
          "quantity": 0.25
        },
        {
          "name": "tomates bien m\u00fbres",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 0.5
        },
        {
          "name": "brins de persil",
          "quantity": 1.25
        },
        {
          "name": "g de linguine",
          "quantity": 0.5
        },
        {
          "name": "gousses d'ail",
          "quantity": 0.5
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        },
        {
          "name": "feuilles de basilic",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Cuire les linguine selon les instructions du paquet.",
        "\u00c9plucher la courgette et la tailler en spaghetti ou en tagliatelle \u00e0 l'aide d'un \u00e9conome.",
        "Faire revenir les tagliatelles avec une cuill\u00e8re \u00e0 soupe dans une po\u00eale chaude pendant 10 minutes.",
        "Mixer les tomates avec la cuill\u00e8re \u00e0 soupe d'huile d'olive, les 2 gousses et le persil. Assaisonner avec le sel et le poivre.",
        "Une fois les p\u00e2tes et les courgettes cuites m\u00e9langer le tout avec la sauce froide. C'est pr\u00eat !"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Brownie vegan au noix",
      "image": "https://assets.afcdn.com/recipe/20210505/120108_w1024h576c1cx1059cy707cxb2119cyb1414.webp",
      "date": "2021-05-05T14:40:29+02:00",
      "cookTime": 35,
      "prepTime": 10,
      "totalTime": 45,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de haricots rouges cuits (poids net \u00e9goutt\u00e9)",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de chocolat noir",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de noix",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g de farine",
          "quantity": 1.3333333333333333
        },
        {
          "name": "sachet de levure chimique",
          "quantity": 0.16666666666666666
        },
        {
          "name": "pinc\u00e9e de fleur de sel",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de rapadura",
          "quantity": 1.3333333333333333
        },
        {
          "name": "g de graines de chia",
          "quantity": 0.3333333333333333
        },
        {
          "name": "g d'huile de coco",
          "quantity": 1.0
        },
        {
          "name": "ml de lait v\u00e9g\u00e9tal",
          "quantity": 0.3333333333333333
        }
      ],
      "recipeInstructions": [
        "Rincer et \u00e9goutter les haricots rouges.",
        "Faire fondre l'huile de coco.",
        "Mixer les haricots rouges, l'huile de coco, les graines de chia, la pur\u00e9e doit \u00eatre bien lisse.",
        "Faire fondre le chocolat.",
        "M\u00e9langer la farine et la levure \u00e0 la pur\u00e9e de haricots rouges.",
        "Incorporer le chocolat fondu. Si la p\u00e2te est trop \u00e9paisse, vous pouvez la fluidifier avec 20 ml de lait v\u00e9g\u00e9gal.",
        "Hacher les noix. Les m\u00e9langer \u00e0 la p\u00e2te \u00e0 brownie, ajouter une pointe de fleur de sel. Taper le plat un bon coup sur la table (cela va permettre de cr\u00e9er une surface bien craquel\u00e9e).",
        "Cuire le brownie 30 minutes \u00e0 180\u00b0C.",
        "Laisser bien refroidir avant de d\u00e9guster."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Samoussa aux l\u00e9gumes",
      "image": "https://assets.afcdn.com/recipe/20210505/120091_w1024h576c1cx757cy707cxb1514cyb1414.webp",
      "date": "2021-05-05T11:13:58+02:00",
      "cookTime": 20,
      "prepTime": 10,
      "totalTime": 30,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "g de poivron surgel\u00e9s hors saison",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s bomb\u00e9e de curry en poudre (\u00e0 ajuster selon la puissance du curry)",
          "quantity": 1.0
        },
        {
          "name": "poivre",
          "quantity": "NaN"
        },
        {
          "name": "huile",
          "quantity": "NaN"
        },
        {
          "name": "1/oignon",
          "quantity": 0.5
        },
        {
          "name": "feuilles de brick",
          "quantity": 0.5
        },
        {
          "name": "g de haricots blancs cuits (poids net \u00e9goutt\u00e9)",
          "quantity": 2.5
        },
        {
          "name": "g de petits pois surgel\u00e9s hors saison",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de sauce soja",
          "quantity": 1.5
        }
      ],
      "recipeInstructions": [
        "Rincer le demi oignon, les poivrons et les petits pois.",
        "Enlever la peau de l'oignon, \u00e9p\u00e9piner les poivrons et les \u00e9mincer.",
        "Faire chauffer un filet d'huile d'olive dans une po\u00eale. Y faire revenir l'oignon et le poivron 5 minutes.",
        "Ajouter les petits-pois et laisser cuire 5 minutes.",
        "Pendant ce temp, \u00e9goutter les haricots blancs. Les r\u00e9duire en pur\u00e9e avec la sauce soja, le curry et le poivre.",
        "Ajouter les l\u00e9gumes \u00e0 la pur\u00e9e de haricots blancs et bien m\u00e9langer.",
        "Pour le pliage des samoussas, suivre les indications du paquet. Vous pouvez aussi r\u00e9aliser un pliage en forme de rouleaux.",
        "Faire dorer au four 10 minutes \u00e0 180\u00b0C.",
        "Accompagner d'une sauce sriracha ou salsa."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Salade de p\u00e2tes au pesto, olives et pignons",
      "image": "https://assets.afcdn.com/recipe/20221027/136740_w1024h576c1cx1293cy712cxb2121cyb1414.webp",
      "date": "2021-05-05T10:40:36+02:00",
      "cookTime": 10,
      "prepTime": 15,
      "totalTime": 25,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.s de pesto",
          "quantity": 1.5
        },
        {
          "name": "g de p\u00e2tes crus (type radiatori)",
          "quantity": 0.5
        },
        {
          "name": "douzaine d'olives vertes d\u00e9noyaut\u00e9es",
          "quantity": 0.5
        },
        {
          "name": "bonnes pinc\u00e9es de pignons",
          "quantity": 1.0
        },
        {
          "name": "bonnes pinc\u00e9es de chapelure",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Faire bouillir de l'eau dans une casserole, la saler. Cuire les p\u00e2tes 9 minutes, puis les \u00e9goutter.",
        "M\u00e9langer 1 cuill\u00e8re \u00e0 soupe d'huile d'olive aux p\u00e2tes, 3 cuill\u00e8res \u00e0 soupe de pesto et les olives.",
        "Faire griller la chapelure et les pignons \u00e0 sec dans un po\u00eale, attention, elle ne doit pas noircir.",
        "Au moment de servir ajouter les pignons de pin, la chapelure et la roquette."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tarte rustique courgette et ch\u00e8vre",
      "image": "https://assets.afcdn.com/recipe/20210423/119733_w1024h576c1cx707cy1060cxb1414cyb2121.webp",
      "date": "2021-04-23T15:55:11+02:00",
      "cookTime": 30,
      "prepTime": 20,
      "totalTime": 50,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de beurre",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "courgette",
          "quantity": 0.25
        },
        {
          "name": "g de farine compl\u00e8te",
          "quantity": 0.5
        },
        {
          "name": "cl d'eau",
          "quantity": 0.25
        },
        {
          "name": "oeuf",
          "quantity": 0.25
        },
        {
          "name": "g de ch\u00e8vre frais",
          "quantity": 0.25
        },
        {
          "name": "b\u00fbche de ch\u00e8vre",
          "quantity": 0.25
        },
        {
          "name": "de ciboulette",
          "quantity": "NaN"
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "P\u00e9trir la farine, le beurre, le sel et l'eau jusqu'\u00e0 obtenir une boule de p\u00e2te homog\u00e8ne.",
        "Laver la courgette et la tailler en rondelles. La faire d\u00e9gorger dans une passoire avec une pinc\u00e9e de sel.",
        "Battre l'oeuf avec le ch\u00e8vre frais, assaisonner avec le sel et le poivre.",
        "\u00c9taler la p\u00e2te, tapisser le fond de tarte de ch\u00e8vre battu et laissant 3 cm de p\u00e2te d\u00e9passer.",
        "Couper des rondelles de b\u00fbches de ch\u00e8vre.",
        "D\u00e9poser des rondelles de ch\u00e8vres sur la tarte en alternant avec les lamelles de courgettes. Appuyer l\u00e9g\u00e8rement pour les enfoncer.",
        "Ciseler la ciboulette et en parsemer sur la tarte. Rabattre les bords de p\u00e2te.",
        "Cuire la tarte \u00e0 200\u00b0C pendant 30 minutes."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tarte rustique p\u00eaches-coco",
      "image": "https://assets.afcdn.com/recipe/20210423/119732_w1024h576c1cx721cy1039cxb1442cyb2078.webp",
      "date": "2021-04-23T15:35:00+02:00",
      "cookTime": 30,
      "prepTime": 20,
      "totalTime": 50,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de farine",
          "quantity": 0.5
        },
        {
          "name": "g de noix de coco rap\u00e9e",
          "quantity": 1.25
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "poign\u00e9e de noix de coco rap\u00e9e",
          "quantity": 0.25
        },
        {
          "name": "g d'huile de coco",
          "quantity": 1.0
        },
        {
          "name": "g d'eau",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de sucre de coco",
          "quantity": 0.25
        },
        {
          "name": "p\u00eaches jaunes",
          "quantity": 1.25
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer la farine avec la noix de coco, le sucre de coco, le sel et la noix de coco r\u00e2p\u00e9e.",
        "Faire fondre l'huile de coco, l'ajouter aux ingr\u00e9dients secs et p\u00e9trir la p\u00e2te en ajoutant l'eau. \u00c9taler la p\u00e2te.",
        "Laver les p\u00eaches et les couper en 6.",
        "\u00c9taler la p\u00e2te, d\u00e9poser les p\u00eaches dessus et saupoudrer la noix de coco r\u00e2p\u00e9e.",
        "Enfourner 30 minutes \u00e0 200\u00b0C.",
        "Laisser refroidir avant de servir."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tartelettes rustiques poires-caramel",
      "image": "https://assets.afcdn.com/recipe/20210423/119731_w1024h576c1cx1034cy725cxb2068cyb1450.webp",
      "date": "2021-04-23T14:58:03+02:00",
      "cookTime": 30,
      "prepTime": 20,
      "totalTime": 50,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de farine",
          "quantity": 0.5
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de sucre",
          "quantity": 0.25
        },
        {
          "name": "g de beurre mou et coup\u00e9 en d\u00e9s",
          "quantity": 0.25
        },
        {
          "name": "cl d'eau froide",
          "quantity": 0.5
        },
        {
          "name": "poires",
          "quantity": 1.0
        },
        {
          "name": "g d'amandes en poudre",
          "quantity": 0.25
        },
        {
          "name": "grosse pinc\u00e9e de cassonade",
          "quantity": 0.25
        },
        {
          "name": "grosse poign\u00e9e d'amandes",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.c de caramel au beurre sal\u00e9 ou caramel liquide",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer la farine, le sel et le sucre.",
        "Ajouter le beurre et ajouter l'eau en p\u00e9trissant.",
        "\u00c9taler la p\u00e2te sur une plaque. Recouvrir la p\u00e2te de poudre d'amande en laissant d\u00e9passer la p\u00e2te de 5 cm sur les bords.",
        "Laver et \u00e9plucher les poires. Les tailler en lamelles pas trop fines dans le sens de la hauteur. Retirer les p\u00e9pins.",
        "Disposer les lamelles de poires au centre de la tarte.",
        "Rabattre les bords de la tarte. Hacher grossi\u00e8rement les amandes, parsemer sur le dessus de la tarte avec la cassonade.",
        "Cuire 30 minutes \u00e0 180\u00b0C au four.",
        "Avant de servir, arroser de caramel."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tarte rustique poires-bleu-miel-noix",
      "image": "https://assets.afcdn.com/recipe/20210423/119730_w1024h576c1cx707cy1060cxb1414cyb2121.webp",
      "date": "2021-04-23T14:33:27+02:00",
      "cookTime": 30,
      "prepTime": 20,
      "totalTime": 50,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "p\u00e2te bris\u00e9e faite maison ou du commerce",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de ma\u00efzena",
          "quantity": 0.5
        },
        {
          "name": "g de noix",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de miel",
          "quantity": 0.5
        },
        {
          "name": "branches de thym",
          "quantity": 0.5
        },
        {
          "name": "poires",
          "quantity": 1.0
        },
        {
          "name": "g de bleu",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "\u00c9taler la p\u00e2te sur une plaque allant au four.",
        "Laver et \u00e9plucher les poires. Les tailler en lamelles pas trop fines dans le sens de la hauteur. Retirer les p\u00e9pins.",
        "Saupoudrer le fond de tarte de ma\u00efzena pour \u00e9viter que la p\u00e2te soit d\u00e9tremp\u00e9e. Disposer les lamelles de poires au centre de la tarte.",
        "\u00c9mietter le fromage bleu sur les fruits. Concasser les noix et les parsemer sur le dessus.",
        "Arroser de miel et rabattre les bords de la p\u00e2te. D\u00e9poser les 2 branches de thym sur la tarte.",
        "Enfourner 30 minutes \u00e0 180\u00b0C. Laisser refroidir 20 minutes avant de d\u00e9guster."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Tartelettes rustique \u00e0 l'artichaut et au ch\u00e8vre",
      "image": "https://assets.afcdn.com/recipe/20210423/119721_w1024h576c1cx758cy988cxb1515cyb1977.webp",
      "date": "2021-04-23T12:19:35+02:00",
      "cookTime": 40,
      "prepTime": 35,
      "totalTime": 75,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.s de miel",
          "quantity": 0.25
        },
        {
          "name": "coeurs d'artichaut frais",
          "quantity": 1.0
        },
        {
          "name": "g de ch\u00e8vre frais",
          "quantity": 0.25
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        },
        {
          "name": "bonne poign\u00e9e de raisins secs",
          "quantity": 0.25
        },
        {
          "name": "g de farine",
          "quantity": 0.5
        },
        {
          "name": "g de beurre",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "g d'eau",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Couper le beurre en d\u00e9s, le laisser ramollir.",
        "M\u00e9langer le beurre, la farine et le sel. Ajouter l'eau progressivement, p\u00e9trir jusqu'\u00e0 obtenir une boule de p\u00e2te homog\u00e8ne.",
        "Diviser la p\u00e2te en 4, \u00e9taler chaque p\u00e2ton en forme de cercle sur grille pouvant aller au four. Piquer la p\u00e2te avec une fourchette.",
        "Tailler les coeur d'artichauts en lamelles.",
        "Battre le ch\u00e8vre frais avec une cuill\u00e8re \u00e0 soupe de miel, du sel et du poivre.",
        "Disposer une cuill\u00e8re de ch\u00e8vre sur les fonds de tartes, \u00e9taler en veillant \u00e0 laissant 3 cm de bord de p\u00e2te.",
        "Disposer les artichauts en lamelle sur le ch\u00e8vre.",
        "Recouvrir avec le ch\u00e8vre restant et rabattre les bords de la tarte vers l'int\u00e9rieur.",
        "Enfourner \u00e0 200\u00b0C pendant 25 minutes. Sortir les tartes, ajouter les raisins secs puis remettre 5 minutes au four."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Coupes de fraises au fromage blanc et biscuits",
      "image": "https://assets.afcdn.com/recipe/20210415/119385_w1024h576c1cx707cy1060cxb1414cyb1818.webp",
      "date": "2021-04-15T15:06:27+02:00",
      "cookTime": 0,
      "prepTime": 15,
      "totalTime": 15,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "fraises",
          "quantity": 1.0
        },
        {
          "name": "pots de fromage blanc sans sucres",
          "quantity": 1.0
        },
        {
          "name": "biscuits \u00e0 la cannelle",
          "quantity": 4.0
        },
        {
          "name": "sucre",
          "quantity": "NaN"
        },
        {
          "name": "verre d'eau",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Je mets l'eau et le sucre dans une casserole et je porte \u00e0 \u00e9bullition. (Avec l'aide d'un adulte)",
        "J'ajoute les fraises coup\u00e9es en d\u00e9s et je laisse caram\u00e9liser 2 \u00e0 3 min.",
        "Je dispose dans deux coupes, les biscuits cass\u00e9s en morceaux, le fromage blanc et les fraises.",
        "Je les mets au frigo. \u00c0 servir bien frais"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Glace vanille, banane et coulis de fraises maison",
      "image": "https://assets.afcdn.com/recipe/20210415/119375_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-04-15T12:52:54+02:00",
      "cookTime": 0,
      "prepTime": 15,
      "totalTime": 15,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "g de fraises",
          "quantity": 2.5
        },
        {
          "name": "banane",
          "quantity": 0.5
        },
        {
          "name": "glace vanille",
          "quantity": "NaN"
        },
        {
          "name": "cl de cr\u00e8me",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Je lave les fraises et je retire les queues.",
        "Je mixe les fraises dans le blender.",
        "Je mets une cuill\u00e8re \u00e0 caf\u00e9 de ce coulis dans chaque verrine.",
        "Je coupe 2 rondelles de banane et j'essaye de les cacher dans le coulis",
        "Je rajoute la glace \u00e0 la vanille puis de la cr\u00e8me fraiche par-dessus pour ceux qui aiment."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Glace \u00e0 la fraise et coulis de fraises maison",
      "image": "https://assets.afcdn.com/recipe/20210415/119370_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-04-15T12:07:02+02:00",
      "cookTime": 0,
      "prepTime": 5,
      "totalTime": 5,
      "numberPersons": 3,
      "recipeIngredient": [
        {
          "name": "g de fraises",
          "quantity": 0.6666666666666666
        },
        {
          "name": "c.\u00e0.s de sucre en poudre",
          "quantity": 0.3333333333333333
        },
        {
          "name": "c.\u00e0.c de cr\u00e8me fra\u00eeche facultatif",
          "quantity": 0.6666666666666666
        },
        {
          "name": "g de sorbet fraise",
          "quantity": 1.3333333333333333
        }
      ],
      "recipeInstructions": [
        "Je lave et j'\u00e9goutte les fraises et je les \u00e9crase \u00e0 la fourchette avec le sucre et la cr\u00e8me fra\u00eeche.",
        "Je dispose le sorbet \u00e0 la fraise dans une assiette et j'arrose avec le coulis que je viens de pr\u00e9parer."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Les biscuits spritz (sabl\u00e9s viennois) de William",
      "image": "https://assets.afcdn.com/recipe/20210414/119332_w1024h576c1cx1508cy2713cxb3024cyb4032.webp",
      "date": "2021-04-20T18:15:15+02:00",
      "cookTime": 15,
      "prepTime": 20,
      "totalTime": 35,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "c.\u00e0.c d'extrait de vanille",
          "quantity": 1.0
        },
        {
          "name": "g de farine",
          "quantity": 2.0
        },
        {
          "name": "g de sucre glace",
          "quantity": 1.0
        },
        {
          "name": "g de chocolat noir",
          "quantity": 1.0
        },
        {
          "name": "bonne pinc\u00e9e de sel",
          "quantity": 1.0
        },
        {
          "name": "g de beurre",
          "quantity": 2.0
        },
        {
          "name": "oeuf",
          "quantity": 1.0
        },
        {
          "name": "g de noisettes (facultatif)",
          "quantity": 5.0
        }
      ],
      "recipeInstructions": [
        "Travailler le beurre pommade (\u00e0 temp\u00e9rature ambiante) \u00e0 l\u2019aide d\u2019une spatule puis ajouter le sucre glace, la vanille et m\u00e9langer \u00e0 nouveau jusqu\u2019\u00e0 l\u2019obtention d\u2019une cr\u00e8me homog\u00e8ne. ",
        "Incorporer la farine et le sel et travailler jusqu\u2019\u00e0 l\u2019obtention d\u2019une p\u00e2te lisse.",
        "Remplir une poche \u00e0 douille munie d\u2019une douille cannel\u00e9e large et dresser les sabl\u00e9s en forme de W. Laisser reposer 15 minutes environ au cong\u00e9lateur, le temps de pr\u00e9chauffer le four \u00e0 180\u00b0C. ",
        "D\u00e9poser les biscuits bien froids sur une plaque de four recouverte de papier cuisson et enfourner pour environ 15 minutes ou jusqu\u2019\u00e0 ce que les biscuits soient bien dor\u00e9s. Laisser refroidir int\u00e9gralement avant de passer \u00e0 la d\u00e9coration. ",
        "Pour la d\u00e9coration, fondre le chocolat noir au micro-ondes ou au bain-marie puis y tremper la moiti\u00e9 de chaque biscuit. Poser sur une plaque et saupoudrer de noisettes concass\u00e9es. ",
        "Et bon app\u00e9tit ! "
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Poulet croustillant et cr\u00e8me d'avocat de chefpapdo",
      "image": "https://assets.afcdn.com/recipe/20210412/119309_w1024h576c1cx1952cy1658cxb4031cyb3024.webp",
      "date": "2021-04-13T10:45:53+02:00",
      "cookTime": 10,
      "prepTime": 20,
      "totalTime": 30,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de f\u00e9cule de ma\u00efs",
          "quantity": 1.25
        },
        {
          "name": "g de levure chimique",
          "quantity": 1.25
        },
        {
          "name": "g de farine",
          "quantity": 0.25
        },
        {
          "name": "grosses pinc\u00e9es de sel",
          "quantity": 0.5
        },
        {
          "name": "grosse pinc\u00e9e de piment d'Espelette",
          "quantity": 0.25
        },
        {
          "name": "grosses pinc\u00e9es de poivre",
          "quantity": 0.5
        },
        {
          "name": "botte de coriandre",
          "quantity": 0.25
        },
        {
          "name": "pi\u00e8ces de filet de poulet",
          "quantity": 0.5
        },
        {
          "name": "g de fromage frais",
          "quantity": 0.25
        },
        {
          "name": "grosses pinc\u00e9es de paprika",
          "quantity": 0.5
        },
        {
          "name": "cl d'eau",
          "quantity": 0.25
        },
        {
          "name": "cl d'huile v\u00e9g\u00e9tale",
          "quantity": 0.25
        },
        {
          "name": "pi\u00e8ce de citron vert",
          "quantity": 0.25
        },
        {
          "name": "pi\u00e8ce d'avocat bien m\u00fbr",
          "quantity": 0.25
        },
        {
          "name": "pi\u00e8ce d'oeuf",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer tous les ingr\u00e9dients secs ensemble puis incorporer l'\u0153uf et l'eau jusqu'\u00e0 l'obtention d'une p\u00e2te lisse et homog\u00e8ne.\n",
        "Tailler les filets de poulet en 4 dans la longueur puis chaque morceau en deux. M\u00e9langer les morceaux de poulet \u00e0 la p\u00e2te r\u00e9alis\u00e9e pr\u00e9c\u00e9demment pour bien les enrober. Laisser mariner 10 min.",
        "Pour la cr\u00e8me d'avocat \u00e9craser l'avocat avec une fourchette et rajouter le fromage frais, un zeste de citron vert, le jus du citron vert, le piment d'Espelette, le paprika et la coriandre hach\u00e9. M\u00e9langer et ajuster l'assaisonnement.\n",
        "Faire chauffer l'huile v\u00e9g\u00e9tale dans une grande po\u00eale, une fois chaude disposer les morceaux de poulets enrob\u00e9s de la p\u00e2te d\u00e9licatement sans qu'ils ne se touchent. Laissez cuire 5 min de chaque c\u00f4t\u00e9, d\u00e9barrasser sur du papier absorbant et saler le poulet. Dresser sur une assiette avec la cr\u00e8me d'avocat et d\u00e9guster."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Ceviche de dorade \u00e0 la mangue",
      "image": "https://assets.afcdn.com/recipe/20210406/119125_w1024h576c1cx1438cy816cxb2876cyb1632.webp",
      "date": "2021-04-06T17:08:37+02:00",
      "cookTime": 0,
      "prepTime": 15,
      "totalTime": 15,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "bouquet de coriandre",
          "quantity": 0.5
        },
        {
          "name": "piment (petit)",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile d'olive",
          "quantity": 1.5
        },
        {
          "name": "g de dorade",
          "quantity": 1.5
        },
        {
          "name": "1/mangue",
          "quantity": 0.5
        },
        {
          "name": "oignon rouge",
          "quantity": 0.5
        },
        {
          "name": "citron vert",
          "quantity": 0.5
        },
        {
          "name": "basilic",
          "quantity": 0.5
        },
        {
          "name": "cl de lait de coco",
          "quantity": 0.5
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "\u00c9mincer l\u2019oignon rouge.",
        "Couper finement le piment rouge (en retirant les p\u00e9pins).",
        "D\u00e9tailler la daurade en cubes de taille moyenne puis les d\u00e9poser dans un saladier.",
        "Arroser le poisson du jus de citron vert, du lait de coco et d'huile d\u2019olive.",
        "Ajouter l\u2019oignon et le piment.",
        "Saler, poivrer et m\u00e9langer et laisser mariner 30 min \u00e0 1h au frais.",
        "D\u00e9couper la demie-mangue en d\u00e9s.",
        "Ciseler de la coriandre et du basilic finement, r\u00e9server quelques feuilles pour le dressage.",
        "Ajouter les d\u00e9s de mangues et les herbes cisel\u00e9es au m\u00e9lange m\u00e9langer d\u00e9licatement.",
        "Dresser joliment sur deux assiettes avec quelques feuilles de coriandre, un filet d\u2019huile d\u2019olive et un coup de moulin \u00e0 poivre et quelques zestes de citron verts."
      ],
      "categorie": "Entr\u00e9e",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Macarons nids de P\u00e2ques au chocolat",
      "image": "https://assets.afcdn.com/recipe/20210406/119123_w1024h576c1cx800cy532cxb1600cyb1064.webp",
      "date": "2021-04-06T16:49:24+02:00",
      "cookTime": 15,
      "prepTime": 30,
      "totalTime": 45,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "g de chocolat fondu",
          "quantity": 5.0
        },
        {
          "name": "g de chocolat fondu",
          "quantity": 5.0
        },
        {
          "name": "g d'oeufs \u00e0 la liqueur",
          "quantity": 3.0
        },
        {
          "name": "oeufs \u00e0 la liqueur color\u00e9s",
          "quantity": 3.0
        },
        {
          "name": "g de chocolat",
          "quantity": 1.0
        },
        {
          "name": "ml de cr\u00e8me liquide",
          "quantity": 1.0
        },
        {
          "name": "g de sucre en poudre",
          "quantity": 1.0
        },
        {
          "name": "g de cacao en poudre",
          "quantity": 2.0
        },
        {
          "name": "g de sucre glace",
          "quantity": 1.0
        },
        {
          "name": "blancs d'oeuf",
          "quantity": 2.0
        },
        {
          "name": "g d'amandes en poudre",
          "quantity": 1.0
        },
        {
          "name": "ml d'eau",
          "quantity": 3.0
        }
      ],
      "recipeInstructions": [
        "Mixez et tamisez le sucre glace avec la poudre d'amande et la cacao. M\u00e9langez avec un blanc d'oeuf (gardez l'autre pour la meringue).",
        "Dans une casserole, faites chauffer le sucre avec l'eau jusqu'\u00e0 118\u00b0C.",
        "Battez en neige le deuxi\u00e8me blanc d'oeuf et versez dessus le sirop \u00e0 118\u00b0C. Continuez de battre pendant 5 minutes.",
        "Incorporez d\u00e9licatement la meringue dans le m\u00e9lange sucre glace / amande. ",
        "Placez la p\u00e2te \u00e0 macaron dans une poche \u00e0 douille avec une douille lisse taille 10. Sur une plaque \u00e0 p\u00e2tisserie recouverte de papier cuisson, pochez les macarons en forme de couronnes.",
        "Faites cuire les coques \u00e0 140\u00b0C pendant 13 minutes.",
        "Pour la ganache, faites fondre le chocolat. En parall\u00e8le faites chauffer la cr\u00e8me liquide dans une casserole et quand elle est chaude versez la en 3 fois sur le chocolat fondu. Remuez bien puis laissez cristalliser 1/2h au frigo. ",
        "Placez la ganache dans une poche \u00e0 douille puis garnissez vos coques de macarons. ",
        "Faites fondre le chocolat, placez le dans un cornet en papier cuisson. D\u00e9corez vos macarons en les recouvrant de chocolat.",
        "D\u00e9corez avec les \u0153ufs de P\u00e2ques color\u00e9s en les posant au milieu des macarons."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen"
    },
    {
      "name": "Sushi wrap hack de Cacocooking",
      "image": "https://assets.afcdn.com/recipe/20210406/119115_w1024h576c1cx949cy949cxb1898cyb1898.webp",
      "date": "2021-04-08T16:25:17+02:00",
      "cookTime": 5,
      "prepTime": 10,
      "totalTime": 15,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "1/c.\u00e0.c d'huile",
          "quantity": 1.0
        },
        {
          "name": "petit bol de riz \u00e0 sushi cuit",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.c de sauce soja",
          "quantity": 1.0
        },
        {
          "name": "pi\u00e8ce de feuille de nori",
          "quantity": 1.0
        },
        {
          "name": "feuille de laitue",
          "quantity": 1.0
        },
        {
          "name": "1/pi\u00e8ce d'avocat 1/d'avocat",
          "quantity": 1.0
        },
        {
          "name": "pi\u00e8ce d'oeuf",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Dans un bol, cassez et fouettez l'oeuf.",
        "Dans une casserole, faites chauffer un peu d'huile et versez l'oeuf pour r\u00e9aliser une omelette fine. Laissez cuire \u00e0 feu doux pendant quelques minutes.",
        "Une fois l'omelette cuite, repliez les bords de l'omelette pour former un carr\u00e9. R\u00e9servez.",
        "Coupez votre quart d'avocat en tranches fines.",
        "D\u00e9posez la feuille de Nori \u00e0 plat. \u00c0 l'aide d'un ciseau, r\u00e9aliser une d\u00e9coupe qui part du milieu d'un des bords de la feuille Nori jusqu'au centre.",
        "Sur le premier quart de la feuille en bas \u00e0 gauche de la d\u00e9coupe que vous avez r\u00e9alis\u00e9e, d\u00e9posez le riz \u00e0 sushi cuit en faisant en sorte de bien le r\u00e9partir sur l'ensemble du quart gauche.",
        "D\u00e9posez les tranches d'avocat sur le quart gauche en haut de la feuille Nori.",
        "D\u00e9posez l'omelette sur le quart droite en haut de la feuille Nori.",
        "D\u00e9posez la laitue sur le quart \u00e0 droite en bas de la feuille Nori.",
        "Ensuite commencez par rabattre le quart sur lequel est pos\u00e9 le riz sur l'avocat \u00e0 l'aide de la feuille Nori, puis rabattez-le ensuite sur la gauche, puis vers le bas. Vous obtenez un sushi wrap !"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Les verrines orange-pavot d'Alexandra",
      "image": "https://assets.afcdn.com/recipe/20210404/119097_w1024h576c1cx819cy822cxb1638cyb1644.webp",
      "date": "2021-04-12T10:57:11+02:00",
      "cookTime": 10,
      "prepTime": 60,
      "totalTime": 70,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "g de chocolat blanc",
          "quantity": 3.5
        },
        {
          "name": "g de cr\u00e8me liquide (chaude)",
          "quantity": 3.5
        },
        {
          "name": "g de cr\u00e8me liquide (froide)",
          "quantity": 0.5
        },
        {
          "name": "poign\u00e9e de graines de pavot",
          "quantity": 0.5
        },
        {
          "name": "1/zeste d'orange",
          "quantity": 0.5
        },
        {
          "name": "g de sucre semoule",
          "quantity": 2.5
        },
        {
          "name": "g de beurre",
          "quantity": 1.5
        },
        {
          "name": "oeuf",
          "quantity": 0.5
        },
        {
          "name": "g de jus d'orange (press\u00e9 si possible)",
          "quantity": 2.5
        },
        {
          "name": "g de g\u00e9latine en poudre (ou 1/feuille de g\u00e9latine)",
          "quantity": 0.5
        },
        {
          "name": "palets bretons",
          "quantity": 3.0
        }
      ],
      "recipeInstructions": [
        "Faire torr\u00e9fier les graines de pavot quelques minutes dans une po\u00eale, en remuant r\u00e9guli\u00e8rement pour ne pas qu'elles br\u00fblent",
        "Faire chauffer les 75g de cr\u00e8me liquide. Quand la cr\u00e8me est chaude, ajouter les graines de pavot, couvrir d'un film alimentaire et laisser infuser 20 minutes.",
        "Faire fondre le chocolat au bain marie (ou \u00e9ventuellement au micro-ondes par tranches de 30 secondes, en remuant bien \u00e0 chaque fois)",
        "Au bout des 20 minutes, faire re-chauffer la cr\u00e8me et l'ajouter en 3 fois au chocolat blanc fondu",
        "Ajouter les 125g de cr\u00e8me liquide froide. Filmer au contact et laisser reposer la nuit (ou au moins 2h) au r\u00e9frig\u00e9rateur.",
        "Pour le cr\u00e9meux \u00e0 l'orange : \nCommencer par hydrater la g\u00e9latine dans 6g d'eau (ou dans un bol d'eau froide pour la g\u00e9latine en feuille)",
        "Dans une casserole, mettre le jus d'orange, les zestes, le sucre semoule et l'oeuf. Faire chauffer lentement en fouettant sans cesse. Le m\u00e9lange va s'\u00e9paissir. En arr\u00eatant de fouetter, quand le tourbillon s'arr\u00eate net, enlever du feu.",
        "Hors du feu, ajouter la masse g\u00e9latine (ou la g\u00e9latine essor\u00e9e) et bien m\u00e9langer.",
        "Quand le m\u00e9lange est \u00e0 environ 40\u00b0C, incorporer le beurre en m\u00e9langeant bien. Au besoin, utiliser un mixeur plongeant pour bien homog\u00e9n\u00e9iser la pr\u00e9paration. Couler le cr\u00e9meux dans les verrines puis placer au r\u00e9frig\u00e9rateur.",
        "Pour le dressage : \nSur le cr\u00e9meux, \u00e9mietter les sabl\u00e9s (en laissant des morceaux assez gros) sur environ 1cm d'\u00e9paisseur (ou plus pour les gourmands !). \nMonter la ganache \u00e0 l'aide d'un robot ou d'un batteur \u00e9lectrique et pocher sur les sabl\u00e9s \u00e0 l'aide d'une poche \u00e0 douille. \nAjouter quelques zestes d'orange et des morceaux d'orange pour la d\u00e9co.\nC'est pr\u00eat !"
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9"
    },
    {
      "name": "Bananes glac\u00e9es au chocolat",
      "image": "https://assets.afcdn.com/recipe/20210402/119056_w1024h576c1cx939cy798cxb1878cyb1597.webp",
      "date": "2021-04-02T15:05:36+02:00",
      "cookTime": 3,
      "prepTime": 5,
      "totalTime": 68,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "banane",
          "quantity": 0.5
        },
        {
          "name": "g de chocolat noir 70% minimum",
          "quantity": 1.5
        },
        {
          "name": "poign\u00e9e de noisettes concass\u00e9es ou cacahu\u00e8tes",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Peler la banane et la couper en morceaux.",
        "Faire fondre le chocolat au micro-ondes.",
        "Piquer les bananes sur un b\u00e2tonnet ou un pic en bois et les tremper dans le chocolat fondu. Saupoudrer de noisettes ou cacahu\u00e8tes concass\u00e9es.",
        "Placer les bananes sur une assiette recouverte de papier sulfuris\u00e9 et mettre au cong\u00e9lateur pendant 1h."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Milk-shake au chocolat",
      "image": "https://assets.afcdn.com/recipe/20210331/118977_w1024h576c1cx707cy1060cxb1414cyb2121.webp",
      "date": "2021-03-31T14:07:59+02:00",
      "cookTime": 0,
      "prepTime": 5,
      "totalTime": 5,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "carr\u00e9s de chocolat noir ou au lait",
          "quantity": 6.0
        },
        {
          "name": "pinc\u00e9e de sucre",
          "quantity": 1.0
        },
        {
          "name": "boule de glace au chocolat",
          "quantity": 1.0
        },
        {
          "name": "lait",
          "quantity": 2.0
        },
        {
          "name": "cr\u00e8me chantilly",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "M\u00e9lange les carr\u00e9s de chocolat avec la boule de chocolat et le lait au mixer pendant 1 min maximum, avec l'aide d'un adulte.",
        "Ajoute le m\u00e9lange dans un verre, mets une pinc\u00e9e de sucre et m\u00e9lange avec une cuill\u00e8re, puis mets de la cr\u00e8me chantilly au dessus en forme de pyramide."
      ],
      "categorie": "Boisson",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Boisson \u00e0 la menthe",
      "image": "https://assets.afcdn.com/recipe/20210331/118976_w1024h576c1cx707cy1059cxb1414cyb2119.webp",
      "date": "2021-03-31T13:52:30+02:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "sucre",
          "quantity": "NaN"
        },
        {
          "name": "grosse poign\u00e9e de menthe",
          "quantity": 1.0
        },
        {
          "name": "l d'eau",
          "quantity": 1.0
        },
        {
          "name": "de citron pour la d\u00e9coration",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Dans une casserole ou une bouilloire, fait bouillir de l'eau.",
        "Une fois que l'eau bout, verse la dans un r\u00e9cipient, ajoute les feuilles de menthe et le sucre (selon tes go\u00fbts).",
        "M\u00e9lange et laisse refroidir.",
        "8 minutes plus tard,  l'eau est infus\u00e9e, tu peux retirer les feuilles de menthe et mettre ta boisson au frigo.",
        "Tu peux la servir glac\u00e9e avec quelques rondelles de citron. Id\u00e9ale pour une chaude apr\u00e8s-midi piscine !!!!!"
      ],
      "categorie": "Boisson",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Blancs de poulet au curry",
      "image": "https://assets.afcdn.com/recipe/20210331/118974_w1024h576c1cx707cy1060cxb1414cyb2121.webp",
      "date": "2021-03-31T12:10:15+02:00",
      "cookTime": 10,
      "prepTime": 20,
      "totalTime": 30,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "huile d'olive",
          "quantity": "NaN"
        },
        {
          "name": "curry en poudre",
          "quantity": "NaN"
        },
        {
          "name": "\u00e9pices selon tes go\u00fbts !",
          "quantity": "NaN"
        },
        {
          "name": "blancs de poulet",
          "quantity": 2.0
        },
        {
          "name": "eau",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Prends tes blancs de poulet d\u00e9j\u00e0 d\u00e9coup\u00e9 et d\u00e9pose-les avec un adulte dans une po\u00eale avec un soup\u00e7on d'huile d'olive.",
        "Fais cuire.",
        "En attendant, pr\u00e9pare ta sauce :\n Prends un peu d'eau et mets tes \u00e9pices avec le curry en poudre jusqu'\u00e0 ce que la surface de l'eau soit recouverte.",
        "M\u00e9lange le tout et une fois les blancs de poulet cuits, verse directement la sauce (demande \u00e0 un adulte de le faire) en reculant pour ne pas se br\u00fbler avec la mont\u00e9e de vapeur.",
        "Remue et d\u00e8s que tu sens que le poulet est bien impr\u00e9gn\u00e9 de la sauce, mets dans un plat et sers aussit\u00f4t le poulet avec sa sauce sur un lit de riz basmati, par exemple, et avec des l\u00e9gumes \u00e0 la vapeur."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Bircher exotique",
      "image": "https://assets.afcdn.com/recipe/20210331/118973_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-03-31T11:56:21+02:00",
      "cookTime": 0,
      "prepTime": 10,
      "totalTime": 10,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "banane",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.c de noix de coco rap\u00e9e",
          "quantity": 1.0
        },
        {
          "name": "yaourt nature",
          "quantity": 1.0
        },
        {
          "name": "fruits de la passion",
          "quantity": 2.0
        },
        {
          "name": "poign\u00e9es de corn flakes nature",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Verse le yaourt dans un bol. Coupe les fruits de la passion en deux et vide-les dans le bol.",
        "M\u00e9lange-la avec la pr\u00e9paration passion/yaourt. Ajoute la noix de coco.",
        "M\u00e9lange. Enl\u00e8ve la peau de la banane et coupez-la en rondelles.",
        "Puis, pour finir, m\u00e9lange doucement les corn flakes avec la pr\u00e9paration, pour ne pas qu'ils se cassent."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "B\u00e9chamel (sp\u00e9cial enfant)",
      "image": "https://assets.afcdn.com/recipe/20210331/118972_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-03-31T11:27:10+02:00",
      "cookTime": 2,
      "prepTime": 5,
      "totalTime": 7,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "beurre",
          "quantity": 0.3333333333333333
        },
        {
          "name": "c.\u00e0.s de farine",
          "quantity": 0.3333333333333333
        },
        {
          "name": "ml de lait",
          "quantity": 0.3333333333333333
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Dans un grand r\u00e9cipient, fait fondre le beurre 1 min au micro-ondes.",
        "Sors-le et ajoute la farine en remuant bien.",
        "Fait bouillir le lait dans une casserole, laisse le bouillir quelques  instants.",
        "Verse le lait sur le m\u00e9lange farine/beurre, en fouettant. Assaisonne avec le sel et le poivre.",
        "Remet le tout au micro-onde pendant 1 min."
      ],
      "categorie": "Sauce",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Abracadashake",
      "image": "https://assets.afcdn.com/recipe/20210329/118903_w1024h576c1cx707cy1060cxb1414cyb2121.webp",
      "date": "2021-03-29T11:34:58+02:00",
      "cookTime": 0,
      "prepTime": 10,
      "totalTime": 10,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "cl de jus de cassis",
          "quantity": 9.0
        },
        {
          "name": "quartier de citron",
          "quantity": 1.0
        },
        {
          "name": "carambar\u00a9",
          "quantity": 1.0
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9parez la recette du cocktail Abracadashake au shaker (ce qu'on utilise pour m\u00e9langer les cocktails).",
        "Verser 9 cl de jus de cassis dans le shaker avec des gla\u00e7ons et y presser un quart de citron.",
        "Frapper, verser et placer un carambar\u00a9 dans le verre.",
        "Touiller avec le carambar\u00a9."
      ],
      "categorie": "Boisson",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Gaufres vanill\u00e9es",
      "image": "https://assets.afcdn.com/recipe/20210329/118902_w1024h576c1cx706cy1061cxb1412cyb2122.webp",
      "date": "2021-03-29T11:24:45+02:00",
      "cookTime": 5,
      "prepTime": 20,
      "totalTime": 25,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "g de beurre \u00e0 temp\u00e9rature ambiante",
          "quantity": 1.0
        },
        {
          "name": "g de sucre",
          "quantity": 6.0
        },
        {
          "name": "sachets de sucre vanill\u00e9",
          "quantity": 2.0
        },
        {
          "name": "g de farine",
          "quantity": 2.0
        },
        {
          "name": "1/c.\u00e0.c de levure chimique",
          "quantity": 1.0
        },
        {
          "name": "huile pour le gaufrier",
          "quantity": "NaN"
        },
        {
          "name": "sucre en poudre",
          "quantity": "NaN"
        },
        {
          "name": "oeufs",
          "quantity": 3.0
        },
        {
          "name": "ml de lait",
          "quantity": 2.0
        }
      ],
      "recipeInstructions": [
        "Coupe le beurre en petits morceaux, et pose-les au fond d'un saladier.",
        "Ajoutes-y le sucre, le sucre vanill\u00e9 et fouette jusqu'\u00e0 obtention d'une consistance mousseuse.",
        "Maintenant casse les oeufs un \u00e0 un dans le saladier et remue.",
        "Verse le lait dans un saladier puis int\u00e8gre le m\u00e9lange \"farine-levure chimique\" et remue le tout.",
        "Laisse reposer ta p\u00e2te pendant environ 20 min.",
        "Pour la cuisson au gaufrier, demande l'aide d'un adulte :  Pr\u00e9chauffe ton gaufrier (thermostat moyen). Huile les deux plaques de ton moule \u00e0 gaufres.",
        "Verse 2-3 cuill\u00e8res de p\u00e2te sur une des plaques et referme le gaufrier.",
        "3 \u00e0 5 minutes suffisent pour obtenir des gaufres chaudes et croustillantes."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "\"RAT\"-vissante pizza aux courgettes",
      "image": "https://assets.afcdn.com/recipe/20210329/118901_w1024h576c1cx300cy300cxb600cyb600.webp",
      "date": "2021-03-29T11:08:24+02:00",
      "cookTime": 25,
      "prepTime": 15,
      "totalTime": 40,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "p\u00e2te \u00e0 pizza du commerce ou faite maison",
          "quantity": 0.25
        },
        {
          "name": "courgette",
          "quantity": 0.25
        },
        {
          "name": "gruy\u00e8re r\u00e2p\u00e9",
          "quantity": "NaN"
        },
        {
          "name": "tranches de jambon",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s de cr\u00e8me \u00e9paisse",
          "quantity": 0.5
        },
        {
          "name": "gousse d'ail",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.c de herbes de Provence",
          "quantity": 0.25
        },
        {
          "name": "olives",
          "quantity": 0.5
        },
        {
          "name": "concentr\u00e9 de tomates",
          "quantity": "NaN"
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Lave la courgette et \u00e9mince-la en tranches fines avec un couteau \u00e9conome.",
        "Coupe la gousse d'ail en tout petits morceaux et le jambon en lamelles.",
        "Sous la surveillance d'un adulte, fais chauffer un peu d'ail et d'huile d'olive dans une po\u00eale et fais-y revenir l'ail pendant 1 min.",
        "Ajoute les lamelles de courgettes et laisse-les cuire pendant 3 minutes en remuant.",
        "Assaisonne avec le sel, le poivre et la cuill\u00e8re d'herbes de Provence, m\u00e9lange un peu, puis vide le contenu de la po\u00eale dans un saladier. Ajoute 2 cuill\u00e8res \u00e0 soupe de cr\u00e8me \u00e9paisse, et laisse le saladier de c\u00f4t\u00e9.",
        "\u00c9tale la p\u00e2te \u00e0 pizza, et d\u00e9coupe-la en forme de grosse goutte d'eau pour faire le corps du rat.",
        "Place ce \"corps\" sur une plaque huil\u00e9e allant au four. Avec le reste de p\u00e2te, fa\u00e7onne un nez, des moustaches et une queue et fixe-les.",
        "R\u00e9partis les courgettes sur la p\u00e2te, puis le jambon.",
        "Recouvre la pizza de gruy\u00e8re r\u00e2p\u00e9, ajoute 2 olives pour les yeux, badigeonne un peu de concentr\u00e9 de tomate sur le nez puis enfourne le tout pendant 20 min \u00e0 220\u00b0C."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Barres de c\u00e9r\u00e9ales faciles",
      "image": "https://assets.afcdn.com/recipe/20210326/118863_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-03-26T16:02:20+01:00",
      "cookTime": 0,
      "prepTime": 15,
      "totalTime": 15,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de chocolat noir",
          "quantity": 0.5
        },
        {
          "name": "g de beurre",
          "quantity": 1.25
        },
        {
          "name": "c.\u00e0.s de sucre",
          "quantity": 0.5
        },
        {
          "name": "g de c\u00e9r\u00e9ale nature",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Fais fondre 250 g de chocolat noir et 50 g de beurre au micro-ondes. \nAjoute 2 cuill\u00e8res \u00e0 soupe de sucre et m\u00e9lange bien.",
        "Verse la p\u00e2te dans des moules en silicone et tasse bien avec le dos d'une cuill\u00e8re.",
        "Laisse refroidir et s\u00e9cher avant de d\u00e9guster."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Tr\u00e8s facile"
    },
    {
      "name": "Melo cakes",
      "image": "https://assets.afcdn.com/recipe/20210326/118861_w1024h576c1cx2120cy1192cxb4240cyb2384.webp",
      "date": "2021-03-26T12:23:26+01:00",
      "cookTime": 12,
      "prepTime": 40,
      "totalTime": 52,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de chocolat noir fondu",
          "quantity": 0.5
        },
        {
          "name": "g de sucre",
          "quantity": 2.25
        },
        {
          "name": "feuilles de g\u00e9latine",
          "quantity": 0.5
        },
        {
          "name": "g de blanc d'oeuf (environ oeufs) \u00e0 temp\u00e9rature ambiante",
          "quantity": 2.25
        },
        {
          "name": "g d'eau",
          "quantity": 1.25
        },
        {
          "name": "g de farine",
          "quantity": 2.25
        },
        {
          "name": "c.\u00e0.s de sucre",
          "quantity": 1.0
        },
        {
          "name": "1/c.\u00e0.c de levure",
          "quantity": 0.25
        },
        {
          "name": "pinc\u00e9e de sel",
          "quantity": 0.25
        },
        {
          "name": "g de beurre coup\u00e9 en d\u00e9s",
          "quantity": 1.5
        },
        {
          "name": "1/c.\u00e0.c d'extrait de vanille",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.s de beurre de cacahu\u00e8tes",
          "quantity": 0.75
        }
      ],
      "recipeInstructions": [
        "Biscuits : \nM\u00e9langer le beurre, le beurre de cacahu\u00e8te et le sucre.",
        "Verser la farine, la levure, le sel, la vanille et m\u00e9langer.",
        "Faire une boule et laisser reposer 30 min au frais.",
        "Faire des biscuits de \u2158 cm de diam\u00e8tre. Les laisser cuire 12 minutes \u00e0 170\u00b0C puis les laisser refroidir.",
        "Meringues :\nFaire ramollir les feuilles de g\u00e9latine dans un verre d\u2019eau froide pendant 5 minutes.",
        "Faire un sirop en portant le sucre et l\u2019eau \u00e0 121\u00b0C.",
        "Monter les blancs en neige (bien ferme).",
        "Ajouter la g\u00e9latine bien essor\u00e9e dans le sirop, m\u00e9langer et le verser aux oeufs tout en m\u00e9langeant au batteur.",
        "Remplir une poche \u00e0 douille avec l\u2019appareil r\u00e9alis\u00e9.",
        "Pocher en forme de drop sur les biscuits.\nLaisser reposer au cong\u00e9lateur 30 min."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9"
    },
    {
      "name": "Nature\u2019s Cereal",
      "image": "https://assets.afcdn.com/recipe/20210319/118714_w1024h576c1cx1062cy705cxb2125cyb1411.webp",
      "date": "2021-03-19T16:02:13+01:00",
      "cookTime": 0,
      "prepTime": 5,
      "totalTime": 5,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "1/grenade",
          "quantity": 1.0
        },
        {
          "name": "poign\u00e9e de fruits rouges (framboises, fraises, myrtilles)",
          "quantity": 1.0
        },
        {
          "name": "tasse d'eau de coco",
          "quantity": 1.0
        },
        {
          "name": "gla\u00e7ons",
          "quantity": 4.0
        }
      ],
      "recipeInstructions": [
        "\u00c9grener la grenade et laver les fruits rouges s\u2019ils sont frais (sinon les faire d\u00e9congeler).",
        "D\u00e9poser les fruits dans un bol.",
        "Verser l\u2019eau de coco par dessus et glisser les gla\u00e7ons dans le bol.",
        "D\u00e9guster bien frais."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Boule choco",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_5.jpg",
      "date": "2021-03-25T11:32:16+01:00",
      "cookTime": 5,
      "prepTime": 30,
      "totalTime": 35,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "tablette de chocolat",
          "quantity": 0.25
        },
        {
          "name": "chamallow",
          "quantity": "NaN"
        },
        {
          "name": "chamallow mini",
          "quantity": "NaN"
        },
        {
          "name": "chocolat en poudre mini",
          "quantity": "NaN"
        },
        {
          "name": "lait entier",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Faire fondre le chocolat.",
        "Tapisser vos moules de chocolat en \u00e9tant r\u00e9gulier.",
        "Laisser prendre le chocolat, puis rajouter une couche de chocolat fondu pour que ce soit solide.",
        "D\u00e9mouler. Sur une po\u00eale chauffer le c\u00f4t\u00e9 ouvert de la sph\u00e8re, et les garnir de poudre de chocolat et de guimauve et les sceller entre elles de mani\u00e8re \u00e0 former une boule.",
        "\u00c0 faire fondre dans du lait chaud pour un chocolat chaud gourmand."
      ],
      "categorie": "Confiserie",
      "author": "Marmiton",
      "cost": "Bon march\u00e9"
    },
    {
      "name": "Croque perdu",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_5.jpg",
      "date": "2021-03-25T11:32:23+01:00",
      "cookTime": 5,
      "prepTime": 5,
      "totalTime": 10,
      "numberPersons": 1,
      "recipeIngredient": [
        {
          "name": "noisette de beurre",
          "quantity": 1.0
        },
        {
          "name": "tranches d'emmental",
          "quantity": 3.0
        },
        {
          "name": "tranches de pain de mie",
          "quantity": 2.0
        },
        {
          "name": "oeufs",
          "quantity": 3.0
        },
        {
          "name": "tranche de jambon",
          "quantity": 1.0
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Dans une po\u00eale chaude avec une noisette de beurre fondu, verser les oeufs battus assaisonn\u00e9s.",
        "Avant que les oeufs ne prennent, d\u00e9poser les deux tranches de pain de mie.",
        "Les impr\u00e9gner d\u2019oeuf puis les positionner c\u00f4te \u00e0 c\u00f4t\u00e9 sur l\u2019autre c\u00f4t\u00e9.",
        "Sur l\u2019une des tranches, d\u00e9poser une tranche de fromage puis la moiti\u00e9 d\u2019une  tranche de jambon, une tranche de fromage, l\u2019autre moiti\u00e9 de la tranche de jambon puis la derni\u00e8re tranche de fromage",
        "Rabattre les c\u00f4t\u00e9s ext\u00e9rieurs au pain de l\u2019omelette vers l\u2019int\u00e9rieur puis rabattre la tranche de pain non garni sur celle avec le jambon et le fromage\nC\u2019est pr\u00eat !"
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "D\u00f4me caramel",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_1.jpg",
      "date": "2021-03-25T11:32:32+01:00",
      "cookTime": 15,
      "prepTime": 5,
      "totalTime": 20,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de sucre",
          "quantity": 0.25
        },
        {
          "name": "c.\u00e0.c d'huile",
          "quantity": 0.25
        },
        {
          "name": "orange",
          "quantity": 0.25
        },
        {
          "name": "g d'eau",
          "quantity": 1.25
        },
        {
          "name": "copeaux de chocolat",
          "quantity": "NaN"
        },
        {
          "name": "glace vanille",
          "quantity": "NaN"
        }
      ],
      "recipeInstructions": [
        "Faire chauffer dans une casserole le sucre et l\u2019eau.",
        "Laisser brunir.",
        "Une fois brun, retirer du feu.",
        "Huiler la louche.",
        "Faire couler le caramel en filet pour  la recouvrir comme des rayures dans un sens puis dans un autre.",
        "Laisser figer, couper les bords et retourner.",
        "Dresser avec une boule de glace vanille et des copeaux de chocolat."
      ],
      "categorie": "Confiserie",
      "author": "Marmiton",
      "cost": "Bon march\u00e9"
    },
    {
      "name": "Crevettes flamb\u00e9es (simple)",
      "image": "https://assets.afcdn.com/recipe/20100101/recipe_default_img_blurred_5.jpg",
      "date": "2021-03-25T11:32:27+01:00",
      "cookTime": 10,
      "prepTime": 0,
      "totalTime": 10,
      "numberPersons": 2,
      "recipeIngredient": [
        {
          "name": "bonne noix de beurre ou d'huile",
          "quantity": 0.5
        },
        {
          "name": "crevettes ou gambas crues",
          "quantity": 0.5
        },
        {
          "name": "gousses d'ail",
          "quantity": 1.5
        },
        {
          "name": "c.\u00e0.s de jus de citron",
          "quantity": 0.5
        },
        {
          "name": "cl de pastis",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "Dans une po\u00eale chaude d\u00e9poser le beurre puis l\u2019ail laisser revenir.",
        "Saisir les crevettes avec de l\u2019ail.",
        "Saler, poivrer.",
        "Flamber au pastis.",
        "Dresser dans une assiette avec la sauce et un filet de jus de citron et du persil."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Moyen",
      "difficulty": "Facile"
    },
    {
      "name": "Jajangmyeon (sp\u00e9cialit\u00e9 cor\u00e9enne)",
      "image": "https://assets.afcdn.com/recipe/20210305/118368_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-03-05T12:21:01+01:00",
      "cookTime": 12,
      "prepTime": 10,
      "totalTime": 22,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "courgette",
          "quantity": 0.25
        },
        {
          "name": "oignon",
          "quantity": 0.25
        },
        {
          "name": "g de nouilles",
          "quantity": 1.0
        },
        {
          "name": "c.\u00e0.s de p\u00e2te de soja ferment\u00e9e (\"black bean sauce\")",
          "quantity": 0.75
        },
        {
          "name": "c.\u00e0.s d'eau",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.s d'huile de colza",
          "quantity": 0.5
        },
        {
          "name": "oignon c\u00e9bette",
          "quantity": 0.25
        },
        {
          "name": "g de champignon",
          "quantity": 0.75
        }
      ],
      "recipeInstructions": [
        "Laver les champignons, la courgette et les oignons. \u00c9mincer tous les l\u00e9gumes.",
        "Cuire les nouilles selon les indications du paquet.",
        "Faire chauffer l'huile dans un wok ou \u00e0 d\u00e9faut dans une grande po\u00eale.",
        "Faire revenir les champignons, l'oignon et la courgettes pendant 5 minutes.",
        "Ajouter la p\u00e2te de soja et d\u00e9layer la sauce avec un peu d'eau.",
        "Laisser cuire encore 5 minutes, ajouter les nouilles et m\u00e9langer sur le feu 2 minutes.",
        "Parsemer d'oignon c\u00e9bette avant de servir."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Torta caprese (fondant chocolat et amandes)",
      "image": "https://assets.afcdn.com/recipe/20210304/118343_w1024h576c1cx3372cy2500cxb6000cyb4000.webp",
      "date": "2021-03-04T15:36:17+01:00",
      "cookTime": 0,
      "prepTime": 0,
      "totalTime": 0,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "g de chocolat noir",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de beurre",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g de sucre roux",
          "quantity": 1.5
        },
        {
          "name": "c.\u00e0.c d'extrait d'amande am\u00e8re",
          "quantity": 0.16666666666666666
        },
        {
          "name": "pinc\u00e9e de fleur de sel",
          "quantity": 0.16666666666666666
        },
        {
          "name": "g d'amandes en poudre",
          "quantity": 0.3333333333333333
        },
        {
          "name": "oeufs",
          "quantity": 0.6666666666666666
        },
        {
          "name": "c.\u00e0.s bomb\u00e9e de cacao",
          "quantity": 0.16666666666666666
        }
      ],
      "recipeInstructions": [
        "Pr\u00e9chauffer le four \u00e0 160\u00b0C / Thermostat 5",
        "Faire fondre 75g de chocolat avec le beurre.",
        "Hacher le reste du chocolat finement",
        "Dans un saladier, m\u00e9langer la poudre d'amande, le chocolat hach\u00e9, le cacao et la fleur de sel.",
        "Dans un autre saladier, battre les oeufs, l'extrait d'amande am\u00e8re et le sucre jusqu'\u00e0 l'obtention d'un m\u00e9lange mousseux. Incorporer ensuite le chocolat fondu.",
        "Incorporez petit \u00e0 petit le m\u00e9lange sec amandes-cacao dans l'autre pr\u00e9paration et m\u00e9langer jusqu'\u00e0 l'obtention d'une texture homog\u00e8ne.",
        "Beurrer et fariner un moule et verser la p\u00e2te dedans.",
        "Enfourner pendant 45 minutes environ."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "D\u00e8gu\u00e9 (thiakry)",
      "image": "https://assets.afcdn.com/recipe/20210304/118344_w1024h576c1cx1060cy707cxb2121cyb1414.webp",
      "date": "2021-03-04T15:21:22+01:00",
      "cookTime": 0,
      "prepTime": 10,
      "totalTime": 10,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "g de fromage blanc",
          "quantity": 0.75
        },
        {
          "name": "sachets de sucre vanill\u00e9",
          "quantity": 0.75
        },
        {
          "name": "g de semoule de mil",
          "quantity": 0.5
        },
        {
          "name": "g de lait caill\u00e9",
          "quantity": 1.75
        },
        {
          "name": "g de lait concentr\u00e9 non sucr\u00e9",
          "quantity": 1.75
        },
        {
          "name": "gousse de vanille",
          "quantity": 0.25
        }
      ],
      "recipeInstructions": [
        "Cuire la semoule selon les instructions du paquet. Une fois cuite, \u00e9grener \u00e0 la fourchette.",
        "M\u00e9langer le lait caill\u00e9 avec le fromage blanc et le lait concentr\u00e9 non sucr\u00e9. Gratter une gousse de vanille et ajoutez les graines dans la pr\u00e9paration. Ajouter le sucre vanill\u00e9. M\u00e9langer le tout.",
        "Ajouter le semoule, m\u00e9langer l'ensemble pour bien impr\u00e9gner toute la semoule.",
        "Mettre au frais et d\u00e9guster froid."
      ],
      "categorie": "Dessert",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "Cerises amarena",
      "image": "https://assets.afcdn.com/recipe/20210304/118341_w1024h576c1cx2144cy1424cxb4288cyb2848.webp",
      "date": "2021-03-04T15:09:23+01:00",
      "cookTime": 0,
      "prepTime": 120,
      "totalTime": 120,
      "numberPersons": 6,
      "recipeIngredient": [
        {
          "name": "kg de sucre",
          "quantity": 0.5
        },
        {
          "name": "c.\u00e0.c d'extrait d'amande am\u00e8re",
          "quantity": 0.5
        },
        {
          "name": "kg de cerises Griotte sans noyaux",
          "quantity": 0.16666666666666666
        },
        {
          "name": "l d'eau",
          "quantity": 0.3333333333333333
        }
      ],
      "recipeInstructions": [
        "Commencer par d\u00e9noyauter les cerises.",
        "Pr\u00e9parer le sirop avec les 2 l d'eau et 1,5 kg de sucre et l'extrait d'amandes am\u00e8res et porter le m\u00e9lange \u00e0 \u00e9bullition.",
        "Plonger les cerises dans le sirop en \u00e9bullition.",
        "Attendre que l'\u00e9bullition reprenne et couper le feu.",
        "Retirer les cerises \u00e0 l'aide d'un \u00e9gouttoir. Laisser refroidir les cerises et le sirop et r\u00e9server au r\u00e9frig\u00e9rateur pour le lendemain.",
        "Le lendemain :  porter le sirop \u00e0 \u00e9bullition en ajoutant 250g de sucre. Et recommencer les m\u00eames \u00e9tapes que la veille",
        "Renouveler l'op\u00e9ration pendant 6 jours.",
        "Apr\u00e8s le dernier bain, conserver les cerises dans des bocaux pr\u00e9alablement st\u00e9rilis\u00e9s."
      ],
      "categorie": "Confiserie",
      "author": "Marmiton",
      "cost": "Bon march\u00e9",
      "difficulty": "Facile"
    },
    {
      "name": "G\u00f6zleme aux \u00e9pinards et \u00e0 la feta (cr\u00eape turque)",
      "image": "https://assets.afcdn.com/recipe/20210304/118342_w1024h576c1cx1000cy750cxb2000cyb1500.webp",
      "date": "2021-03-04T14:57:48+01:00",
      "cookTime": 20,
      "prepTime": 20,
      "totalTime": 100,
      "numberPersons": 4,
      "recipeIngredient": [
        {
          "name": "oignon",
          "quantity": 0.25
        },
        {
          "name": "g d'\u00e9pinards \u00e0 cuire",
          "quantity": 0.75
        },
        {
          "name": "sel et poivre",
          "quantity": "NaN"
        },
        {
          "name": "g de feta",
          "quantity": 0.5
        },
        {
          "name": "g de farine T55",
          "quantity": 1.0
        },
        {
          "name": "g de beurre",
          "quantity": 1.0
        },
        {
          "name": "g de levure de boulanger s\u00e8che",
          "quantity": 0.25
        },
        {
          "name": "g de sel",
          "quantity": 0.5
        },
        {
          "name": "g de sucre",
          "quantity": 0.5
        },
        {
          "name": "ml de lait ti\u00e8de",
          "quantity": 0.5
        }
      ],
      "recipeInstructions": [
        "M\u00e9langer la farine, la levure, le sel et le sucre.",
        "Faire fondre le beurre, l'ajouter aux ingr\u00e9dients secs en m\u00eame temps que le lait.",
        "P\u00e9trir la p\u00e2te pendant jusqu'\u00e0 ce qu'elle soit homog\u00e8ne et ne colle plus.",
        "Filmer la p\u00e2te et la laisser reposer une heure au frigo.",
        "\u00c9mincer l'oignon.",
        "Le faire revenir dans une po\u00eale avec un filet d'huile d'olive. Ajouter les \u00e9pinards, les cuire une dizaine de minutes.",
        "Retirer du feu et \u00e9mietter la feta. L'incorporer aux \u00e9pinards.",
        "Sortir la p\u00e2te du frigo, la diviser en 8 portions.",
        "\u00c9taler finement un p\u00e2ton \u00e0 l'aide d'un rouleau \u00e0 p\u00e2tisserie.",
        "D\u00e9poser une belle cuill\u00e8re \u00e0 soupe de farce sur un c\u00f4t\u00e9 de la p\u00e2te. Rabattre l'autre moiti\u00e9 pour fermer la cr\u00eape. Veiller \u00e0 ce que les bords soient bien soud\u00e9s. Recommencer pour les 7 autres boules de p\u00e2te.",
        "Dans une po\u00eale, faire chauffer un filet d'huile d'olive.",
        "D\u00e9poser chaque chausson et laisser colorer sur les 2 c\u00f4t\u00e9s.",
        "Servir chaud."
      ],
      "categorie": "Plat principal",
      "author": "Marmiton",
      "cost": "Bon march\u00e9"
    }
  ]

  const pushRecipe = () => {
    listeRecette.forEach(function(obj) {
      addDoc(collection(database, "recipe"), obj).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    });
  };

  const [name, setName] = useState();
  const [cookTime, setCookTime] = useState();
  const [prepTime, setPrepTime] = useState();

  const [instructions, setInstructions] = useState([""]);

  const removeInstruction = (index) => {
    let newList = [...instructions];
    newList.splice(index, 1);
    setInstructions(newList);
  };

  const handleChangeIns = (e, index) => {
    let tmp = [...instructions];
    tmp[index] = e.target.value;
    setInstructions(tmp);
  };

  const [listIngredients, setListIngredients] = useState([
    { quantite: "", nomIngr: "" },
  ]);

  const removeIngr = (index) => {
    let newList = [...listIngredients];
    newList.splice(index, 1);
    setListIngredients(newList);
  };

  const handleChangeIngr = (e, index) => {
    let tmp = [...listIngredients];
    tmp[index][e.target.name] = e.target.value;
    setListIngredients(tmp);
  };

  return (
    <div id="createPage">
      <Header />
      {
        //console.log(name, prepTime, cookTime, instructions, listIngredients)
      }
      <div>Création de recette</div>
      <input
        placeholder="Nom de la recette"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Temps de préparation"
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <input
        placeholder="Temps de cuisson"
        onChange={(e) => setCookTime(e.target.value)}
      />
      <div id="listInstructions">
        {instructions.map((instruction, index) => (
          <div>
            <input
              placeholder={"Instruction " + index}
              onChange={(e) => handleChangeIns(e, index)}
              value={instructions[index]}
            />
            {index ? (
              <button onClick={() => removeInstruction(index)}>-</button>
            ) : (
              <button onClick={() => setInstructions([...instructions, ""])}>
                +
              </button>
            )}
          </div>
        ))}
      </div>
      Laisser le champ quantité vide si nécéssaire.
      <div id="listIngredients">
        {listIngredients.map((ingredient, index) => (
          <div>
            <input
              name="quantite"
              type="text"
              placeholder="Quantité"
              onChange={(e) => handleChangeIngr(e, index)}
              value={listIngredients[index].quantite || ""}
            />
            <input
              name="nomIngr"
              type="text"
              placeholder="Ingrédient"
              onChange={(e) => handleChangeIngr(e, index)}
              value={listIngredients[index].nomIngr || ""}
            />
            {index ? (
              <button onClick={() => removeIngr(index)}>-</button>
            ) : (
              <button
                onClick={() =>
                  setListIngredients([
                    ...listIngredients,
                    { quantité: "", nomIngr: "" },
                  ])
                }
              >
                +
              </button>
            )}
          </div>
        ))}
      </div>
      <button onClick={pushRecipe}>PUSH</button>
    </div>
  );
}

export default CreateRecipePage;
