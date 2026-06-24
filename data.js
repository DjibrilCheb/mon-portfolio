// Les données du portfolio de Djibril Cheblal
// Ce fichier sert de base de données. En Mode Édition, vous pouvez modifier ces textes
// directement sur le site et exporter le fichier mis à jour.

const portfolioData = {
  profil: {
    nom: "Djibril Cheblal",
    titre: "Étudiant en BUT Informatique",
    universite: "IUT de Villetaneuse - Université Sorbonne Paris Nord",
    evaluation: "Portfolio Semestre 4",
    email: "djibril.cheb@gmail.com",
    github: "https://github.com/djibcheb11",
    linkedin: "https://linkedin.com/in/djibril-cheblal",
    cvUrl: "cv.pdf", // Modifié pour pointer vers le CV Blue Simple
    avatarUrl: "avatar.png"
  },
  accueil: {
    bienvenue: "Bienvenue dans mon portfolio",
    soustitre: "Découvrez mon parcours en BUT Informatique, mes compétences à travers les SAÉ, mon expérience de stage de support réseaux et mes objectifs professionnels.",
    boutonTexte: "Découvrir mon profil"
  },
  presentation: {
    introduction: "Je suis Djibril Cheblal, étudiant en deuxième année de BUT Informatique (Semestre 4) à l'IUT de Villetaneuse. Mon parcours a débuté par un BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) au lycée Louise Michel à Bobigny (de 2023 à 2025), à la suite duquel j'ai intégré directement la deuxième année de BUT (BUT 2). Ce parcours hybride me confère une double expertise en développement d'applications et en administration d'infrastructures réseaux.",
    parcoursLogique: "Mon parcours se caractérise par une transition logique et ambitieuse. Durant mon BTS SIO option SLAM, j'ai acquis de solides bases en algorithmique, en développement orienté objet, ainsi qu'en conception de bases de données. Souhaitant élargir mes horizons et comprendre l'écosystème global dans lequel s'exécutent les logiciels (le déploiement, les serveurs, la communication réseau), j'ai fait le choix d'intégrer directement le BUT 2 Informatique. Cette passerelle a été un défi d'adaptation stimulant, me demandant d'assimiler rapidement l'administration système et les méthodes d'analyse réflexive. Aujourd'hui, cette double compétence me permet de concevoir des solutions logicielles tout en anticipant leurs contraintes d'infrastructure, un atout majeur dans le cadre de projets DevOps ou réseau.",
    projetPro: {
      description: "Mon projet professionnel s'articule autour de la convergence entre le génie logiciel et l'administration des infrastructures. J'aspire à évoluer dans des rôles transversaux où l'automatisation, la fiabilité des systèmes et le support utilisateur sont au cœur des priorités.",
      secteur: "Administration Systèmes & Réseaux / Ingénierie DevOps / Développement Full-Stack",
      technologies: ["JavaScript / TypeScript", "Python", "Java & SQL", "Active Directory", "Git & GitHub", "Supervision Réseau", "Prise en main à distance"],
      metier: "Administrateur Systèmes & Réseaux / Ingénieur DevOps"
    },
    qualites: [
      {
        nom: "Travail en équipe & Co-working",
        exemple: "Mobilisé quotidiennement en stage avec mon binôme Anas Talbi. Face à un flux important d'incidents, notre communication et notre répartition des tâches (tickets à distance d'un côté, déplacements urgents en salle réseau de l'autre) ont été décisives pour le maintien des services."
      },
      {
        nom: "Adaptabilité & Rigueur",
        exemple: "Indispensables pour réussir la passerelle directe du BTS vers le BUT 2. J'ai dû rattraper de manière autonome les modules d'administration système du BUT 1, tout en m'adaptant aux exigences d'analyse de l'IUT."
      },
      {
        nom: "Sens du service & Vulgarisation",
        exemple: "Essentiels lors du support aux utilisateurs (professeurs et personnel administratif). J'ai appris à adapter mon vocabulaire pour rassurer et guider les utilisateurs en difficulté, transformant une intervention technique en un échange compréhensible."
      }
    ],
    conclusionEvolution: "La transition du BTS SIO au BUT 2 a été une étape clé de mon évolution. Le BTS m'a inculqué une rigueur de programmation et une approche pragmatique des applications métiers. Le BUT 2 m'a ouvert les portes de l'administration réseau et de la conception système complexe, tout en développant ma posture réflexive face aux pannes réelles. C'est cette alliance entre développement et infrastructure qui constitue ma force aujourd'hui."
  },
  sae: [
    {
      semestre: "S3",
      nom: "SAÉ S3 - Modélisation de Base de Données et Communication Réseau",
      objectifs: "Concevoir et implémenter une application client-serveur de gestion d'inventaire connectée à une base de données relationnelle, en assurant une séparation nette des couches logiques et un protocole de communication stable.",
      tachesPrincipales: "Conception du modèle relationnel (diagramme UML), écriture et optimisation des requêtes SQL complexes, développement d'un serveur de communication socket TCP/IP en Java, et intégration de l'interface utilisateur en respectant le patron MVC.",
      tachesSecondaires: "Rédaction de la documentation d'exploitation, création de jeux de tests unitaires (JUnit) pour valider la robustesse du protocole réseau face aux requêtes concurrentes.",
      competencesTechniques: [
        "Conception de Base de Données (SQL)",
        "Sockets Réseau & Programmation Java",
        "Architecture logicielle MVC"
      ],
      competencesTransverses: [
        "Gestion de versions avec Git & GitHub",
        "Collaboration et répartition des tâches",
        "Rédaction de documentation technique"
      ],
      preuves: "Dépôt GitHub structuré contenant le code source Java, le script SQL d'initialisation de la base, et le rapport d'architecture logicielle.",
      pistesAmelioration: "Optimiser le temps de réponse du serveur pour les requêtes complexes en mettant en place un pool de connexions à la base de données au Semestre 4."
    },
    {
      semestre: "S4",
      nom: "SAÉ S4 - Dashboard de Supervision et Supervision Système",
      objectifs: "Développer une application web full-stack de supervision réseau permettant de suivre en temps réel l'état des équipements d'un parc informatique et de remonter les alertes systèmes.",
      tachesPrincipales: "Développement d'une API REST sous Python (Flask) pour interroger le parc informatique via ping/SNMP, conception d'un frontend réactif affichant les métriques d'activité, et sécurisation de l'authentification des administrateurs.",
      tachesSecondaires: "Maquettage de l'interface utilisateur sous Figma, gestion du projet en méthode Agile via un tableau Kanban, et rédaction du guide utilisateur final.",
      competencesTechniques: [
        "Développement d'API REST (Python / Flask)",
        "Supervision Réseau & Protocoles",
        "Intégration Frontend dynamique (JS)"
      ],
      competencesTransverses: [
        "Méthodologies Agiles de gestion de projet",
        "Posture d'analyse réflexive et critique",
        "Présentation orale devant un jury professionnel"
      ],
      preuves: "API documentée, interface web connectée en local démontrant la remontée d'alertes en temps réel, et tableau Kanban de suivi de sprint.",
      pistesAmelioration: "Étudier la conteneurisation des différents modules de supervision (Docker) afin de simplifier leur déploiement et leur portabilité en BUT 3."
    }
  ],
  stage: {
    entreprise: "Lycée Théodore Monod à Noisy-le-Sec",
    poste: "Technicien Support Réseaux (Stagiaire)",
    duree: "8 semaines (du 26 janvier au 20 mars 2026)",
    missions: "Mon stage de deuxième année, effectué en tant que technicien support réseaux au sein du Lycée Théodore Monod à Noisy-le-Sec, m'a offert une véritable immersion dans le monde de l'entreprise. En binôme avec mon camarade Anas Talbi, j'ai été chargé du maintien en conditions opérationnelles de l'infrastructure informatique de l'établissement. Nos missions quotidiennes étaient très variées, allant du support utilisateur classique, comme le déblocage de postes ou la reconnexion d'imprimantes à distance, à des interventions physiques beaucoup plus critiques. Il nous est par exemple arrivé de devoir rétablir le réseau dans des salles informatiques entières en intervenant directement sur le brassage des switchs.",
    decouverteMondePro: "Cette expérience a souligné l'importance de la méthode de travail en équipe et de la communication. Face à des professeurs ou du personnel administratif souvent bloqués dans leur travail, j'ai compris qu'une bonne vulgarisation était essentielle pour rassurer les utilisateurs et leur expliquer nos actions de manière compréhensible.",
    competence1: {
      nom: "Administrer les réseaux informatiques et maintenir l'infrastructure (BUT Informatique)",
      synthese: "Sur le terrain, j'ai dû diagnostiquer et résoudre de nombreuses pannes en m'appuyant sur des outils d'analyse réseau et en manipulant les baies de brassage. Avec le recul, j'ai pris conscience du décalage entre les environnements scolaires parfaitement configurés et la réalité d'un réseau de lycée accumulant des années d'historique. L'absence de documentation précise sur certains équipements m'a fait réaliser l'importance cruciale de la traçabilité et de l'étiquetage en milieu professionnel.",
      preuves: "À titre d'exemple, lors d'une perte totale de connectivité dans une salle de cours, j'ai pu rapidement identifier une boucle réseau causée par un mauvais branchement physique. En réorganisant le câblage du switch local de manière méthodique, j'ai pu rendre la salle de nouveau opérationnelle en moins d'une heure."
    },
    competence2: {
      nom: "Collaborer et communiquer au sein d'une équipe informatique exigeante",
      synthese: "La gestion du support a nécessité l'utilisation régulière de logiciels de prise en main à distance et de l'Active Directory pour gérer les droits et débloquer les sessions. Si la résolution technique est souvent directe, gérer l'urgence d'un utilisateur au téléphone demande une véritable posture professionnelle et beaucoup de patience.",
      preuves: "Notre organisation en binôme avec Anas illustre parfaitement cette compétence collaborative. Lors des pics d'incidents mêlant pannes matérielles et requêtes logicielles, nous avons su répartir intelligemment la charge de travail. Pendant que l'un se déplaçait physiquement dans les salles pour les urgences réseau, l'autre gérait la file d'attente des tickets à distance, ce qui nous a permis de maintenir un service continu et efficace tout au long du stage."
    }
  },
  objectifs: {
    courtTerme: "Recherche d'un contrat d'alternance pour la troisième année de BUT Informatique (Semestres 5 & 6) dans le domaine de l'administration systèmes/réseaux ou de l'ingénierie DevOps, afin de mettre à profit mes compétences de support acquises sur le terrain.",
    moyenTerme: "Poursuite d'études post-BUT en Master Informatique (spécialité Cloud / Infrastructures) ou en École d'Ingénieurs en alternance pour approfondir la conception d'architectures complexes et de sécurité.",
    longTerme: "À long terme, je me projette en tant qu'Ingénieur DevOps Principal ou Architecte Infrastructures, concevant des environnements hybrides hautement disponibles et guidant les équipes techniques dans leur stratégie d'automatisation."
  }
};
