import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import medmeImg from "@/public/medme.png";
import myMovizImg from "@/public/mymoviz.png";

import weatherappImg from "@/public/weatherapp.png"
import pokedexImg from "@/public/pokedex.png"

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] 

export const experiencesData = [
  {
    title: "Titre RNCP Concepteur Développeur d’Applications Web & Mobile",
    location: "La Capsule,Paris",
    description:[
      "Conception et maquettage d’une application web & mobile",
      "Pilotage d’un projet d’application web & mobile",
      "Conception et manipulation d’une base de données", 
      "Développement d’une application web & mobile",
      "Mise en production d’une application web & mobile",
      
    ],
    résumé:"Après 3 mois intensifs de formation au développement Web & Mobile, j'ai eu la chance de créer 10 projets concrets. Technologies maîtrisées : HTML,CSS,Javascript, React, React Native, NoSql, MongoDB, Mongoose, Express, NodeJS, Expo, Vercel...",
    icon: React.createElement(LuGraduationCap),
    date: "Juin 2023 - Août 2023",
  },
  {
    title: "Marketing Associate",
    location: "Side, Paris",
    description:[
      "Pérenniser les canaux d'acquisition marketing de Side dans une logique de long terme ; ",
      "Identifier et tester de nouveaux canaux correspondants à nos priorités business",
      "Faire le pont avec nos équipes Recrutement et Commerciale pour garantir le bon alignement des priorités Marketing", 
      "Assurer un reporting chiffré dans une logique d'optimisation",
      "Contribuer à la feuille de route de l'équipe Marketing",
    ],
    résumé:"En tant que Marketing Associate, je m'occupais à tout ce qui touche de près ou de loin aux intérimaires en termes de marketing. Que ce soit de l'acquisition, pour inciter de nouveaux intérimaires à télécharger l'application, au recueil des retours utilisateurs dans une logique d'amélioration produit.",
    icon: React.createElement(CgWorkAlt),
    date: "Février 2022 - Avril 2023",
  },
  {
    title: "Sider Ops Associate",
    location: "Side, Paris",
    description:[
      "Participer au sourcing des profils intérimaires",
      "Effectuer la pré-sélection téléphonique des intérimaires et cerner leurs aptitudes, leurs motivations",
      "Sélectionner les meilleurs profils et s’assurer de leur compétences et expériences", 
      "Améliorer les processus opérationnels (qualification, sélection, engagement des Siders)",
    ],
    résumé:"En tant que Sider Ops Associate, je m'occupais principalement du recrutement des intérimaires sur les missions de nos clients. J'ai également eu la chance de participer à l'amélioration (tests utilisateurs) de nos outils internes en collaboration avec les équipes de développement.",
    icon: React.createElement(CgWorkAlt),
    date: "Janvier 2020 - Février 2022",
  },
  {
    title: "Projet entreprenarial de création de site e-commerce",
    location: "My Good Deal, Paris",
    description:
    [
      "Création de site(Shopify) puis Wordpress via Woocommerce ",
      "Paramétrage des templates via Elementor",
      "Création des fiches produits",
      "Création et optimisation du contenu(SEO)",
      "Acquisition de trafic(SEA, Display, Facebookads, affiliation...)", 
      "Analyse des données collectées et adaptation",
    ],
    résumé:"J'ai décidé de lancer ma propre aventure entrepreneuriale en construisants des sites e-commerce à l'aide de Shopify ou Wordpress. Aucune tâche n'a été sous-traité, de la conception du site, en passant par l'acquisition client jusqu'à la préparation des commandes.",
    icon: React.createElement(CgWorkAlt),
    date: "Janvier 2019 - Décembre 2020",
  },
  {
    title: "Chef de projet CRM",
    location: "Hellobank! by BNP Paribas, Paris",
    description:
    [
      "Définir les campagnes marketing client et élaborer leur ciblage",
      "Rédiger les briefs marketing et créa",
      "Gérer les A/R avec l’agence de créa", 
      "Intégrer et programmer des emails(Smartfocus et Photoshop)",
      "Etre garant du planning",
      "Préparer et diffuser des reportings de campagnes",
      "Tenir des tableaux de bord mensuels sur l’efficacité des campagnes",
    ],
    résumé:"En tant que Chef de projet CRM, je réalisais les campagnes de sollicitation commerciales d'Hellobank (email, sms et message dans la boîte de messagerie sécurisée). J'ai pu faire mes premiers pas en HTML et CSS lors de cette expérience.",
    icon: React.createElement(CgWorkAlt),
    date: "Septembre 2017 - Septembre 2018",
  },
  {
    title: "MSC Marketing digital & E-business",
    location: "Inseec MSC MBA Paris",
    description: [
      "Marketing digital",
      "Communication digitale",
      "Web analytics", 
      "Social media strategy",
      "Maîtrise des logiciels PAO",
      "Ux Design",
      "Maîtrise de HTML et CSS et d'un langage de programmation (Ruby)",
    ],
    résumé:"C'est au cours de mon master que j'ai pu apprendre le code pour la première fois. Nous réalisions tout notre apprentissage sur CodeCademy",
    icon: React.createElement(CgWorkAlt),
    date: "Septembre 2017 - Septembre 2018",
  },
  {
    title: "BBA (Spécialisation Marketing digital et Web Strategy) ",
    location: "BBA Inseec, Bordeaux",
    description: [
      "Marketing Content & E-Reputation",
      "Search Engine Optimization",
      "Ux Dseign", 
      "Social media strategy",
      "Data mining and data analytics",

    ],
    résumé:"",
    icon: React.createElement(CgWorkAlt),
    date: "Septembre 2013 - Juin 2017",
  }
] 

export const projectsData = [
  {
    title: "Medme",
    description:
      "Medme est mon projet de fin de formation. En équipe avec 2 autres étudiants, nous avons réalisé une application de livraison de médicament",
    tags: ["React Native", "MongoDB","Redux","NoSQL", "Expo","NodeJS", "Express"],
    GithubFrontend:'https://github.com/Benjamindio/frontend-medme',
    GithubBackend:'https://github.com/Benjamindio/backend-medme',
    live:"",
    imageUrl: medmeImg,
  },
  {
    title: "MyMoviz",
    description:
      "MyMoviz est une application permettant d’afficher les derniers films sortis avec la possibilité d’ajouter un film à ses favoris, gérer un compteur de vues et évaluer chacun des films présentés.",
    tags: ["React", "Next.js","Webservices","Express", "NodeJs", "MVC",],
    GithubFrontend:'https://github.com/Benjamindio/mymoviz-frontend',
    GithubBackend:'https://github.com/Benjamindio/mymoviz-backend',
    live:"https://mymoviz-frontend-benjamindio.vercel.app/",
    imageUrl: myMovizImg,
  },
  {
    title: "Weather App",
    description:
      "WeatherApp est une application qui affiche la météo des villes que vous aurez saisies.",
    tags: ["HTML", "CSS", "NoSQL", "Webservices", "Express", "NodeJs", "MongoDB", "Mongoose", "MVC"],
    GithubFrontend:'https://github.com/Benjamindio/weatherapp-frontend',
    GithubBackend:'https://github.com/Benjamindio/weatherapp-backend',
    live:"https://weatherapp-frontend-benjamindio.vercel.app/",
    imageUrl: weatherappImg,
  },
  {
    title: "Pokedex",
    description:
      "Retrouver tous vos pokémons préférés",
    tags: ["HTML","JQuery", "CSS", "Webservices",],
    GithubFrontend:'https://github.com/Benjamindio/pokedex',
    live:"https://pokedex-benjamindio.vercel.app/",
    imageUrl: pokedexImg,
  },
] 

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "NextJS",
  "NodeJS",
  "Git",
  "Github",
  "Tailwind",
  "MongoDB",
  "Mongoose",
  "Redux",
  "TDD",
  "JQuery",
  "Express",
  "Expo",
  "Webservice",
  "Vercel",
  "NoSQL",
  "Framer Motion",
] 