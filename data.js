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
    introduction: "Je m'appelle Djibril Cheblal, j'ai 20 ans et je suis étudiant en deuxième année de BUT Informatique (Semestre 4) à l'IUT de Villetaneuse (Université Sorbonne Paris Nord) dans le parcours Administration, Gestion et Conception de Systèmes et Réseaux. Mon orientation s'est faite après un BTS SIO option SLAM au lycée Louise Michel à Bobigny, d'où j'ai pu intégrer directement la deuxième année de BUT (BUT 2) en cours de route. Ce parcours me permet d'avoir un double profil : j'ai des bases solides en développement d'applications métiers issues de mon BTS, et des compétences plus orientées systèmes et réseaux que j'acquiers en BUT.",
    parcoursLogique: "Le choix de passer du BTS SIO option SLAM au BUT 2 s'est fait naturellement. En BTS, j'ai beaucoup travaillé la programmation orientée objet et les bases de données. Mais j'ai voulu aller plus loin pour comprendre comment déployer ces applications, comment fonctionnent les serveurs et comment sécuriser l'infrastructure réseau. Intégrer directement le BUT 2 a été un vrai challenge personnel car j'ai dû rattraper en autonomie tout le programme d'administration système et réseau du BUT 1. C'est ce double profil dev et infra qui me passionne aujourd'hui.",
    projetPro: {
      description: "Mon projet professionnel s'oriente vers les métiers d'administrateur systèmes et réseaux et d'ingénieur DevOps. J'aime l'idée de faire le lien entre le code et l'infrastructure, en me concentrant sur l'automatisation, la supervision des parcs informatiques et la continuité des services réseau.",
      secteur: "Administration Systèmes & Réseaux / Ingénierie DevOps / Développement Full-Stack",
      technologies: ["JavaScript / TypeScript", "Python", "Java & SQL", "Active Directory", "Git & GitHub", "Supervision Réseau", "Prise en main à distance"],
      metier: "Administrateur Systèmes & Réseaux / Ingénieur DevOps"
    },
    qualites: [
      {
        nom: "Collaboration & Co-working",
        exemple: "Durant mes 8 semaines de stage, j'ai travaillé en binôme constant avec mon camarade Anas Talbi. Face aux nombreuses demandes d'assistance réseau du lycée, notre capacité à communiquer et à nous répartir le travail a été essentielle : pendant que l'un gérait à distance les comptes Active Directory et les tickets depuis le bureau, l'autre intervenait directement dans les salles pour réparer le câblage."
      },
      {
        nom: "Autonomie & Persévérance",
        exemple: "La transition directe vers le BUT 2 m'a obligé à être autonome immédiatement. J'ai dû rattraper de manière indépendante les cours d'administration Linux avancée et de configuration réseau. J'ai appris à chercher par moi-même les bonnes documentations techniques pour résoudre les blocages."
      },
      {
        nom: "Vulgarisation & Posture Pro",
        exemple: "Le support aux enseignants et personnels administratifs m'a appris à être patient et pédagogue. N'étant pas techniques, ils sont souvent stressés par les pannes de matériel. J'ai appris à vulgariser mes explications pour les rassurer et à garder une posture calme en toute situation."
      }
    ],
    conclusionEvolution: "Le passage du BTS SIO au BUT 2 a marqué un tournant dans mon évolution académique et personnelle. Le BTS m'a apporté la rigueur d'écriture du code, le respect des normes logicielles et le pragmatisme des applications de gestion. Le BUT 2 m'a projeté vers la complexité des infrastructures réseaux, l'administration système et la posture d'analyse réflexive face aux pannes réelles. Cette complémentarité entre le monde du développement et celui des réseaux est ce qui fait ma force aujourd'hui."
  },
  sae: [
    {
      semestre: "S3",
      nom: "Conception d'une application client-serveur et modélisation de base de données (SAÉ S3)",
      objectifs: "L'objectif de cette SAÉ 3.01 était de concevoir et de développer une application client-serveur multithreadée robuste en Java dédiée à la gestion d'un inventaire de parc matériel complexe en temps réel, adossée à une base de données relationnelle PostgreSQL. Le projet imposait de répondre à plusieurs contraintes d'architecture : assurer un canal de communication TCP/IP stable et hautement disponible, définir et implémenter un protocole applicatif d'échange de messages sur-mesure pour sérialiser les flux de données, mettre en place une gestion stricte des accès concurrents pour éviter les conditions de concurrence critique (race conditions) et les blocages mutuels, et structurer le code client et serveur selon le patron de conception Modèle-Vue-Contrôleur (MVC).",
      tachesPrincipales: "Pour ce projet universitaire, mon rôle principal s'est d'abord focalisé sur la conception complète de la base de données relationnelle PostgreSQL. À partir des User Stories du cahier des charges, j'ai réalisé le diagramme de classes UML, le dictionnaire de données et le schéma relationnel physique (MPD) en veillant à la mise en œuvre de contraintes d'intégrité, d'indexations de recherche et de suppression en cascade. J'ai ensuite codé le script SQL d'initialisation de la base de données. Côté réseau, j'ai développé l'architecture serveur multithreadée en Java à l'aide de ServerSockets TCP/IP pour écouter les connexions entrantes des clients et créer un thread dédié à chaque session utilisateur afin d'exécuter leurs requêtes concurrentes d'inventaire. Enfin, j'ai intégré le pattern MVC côté client pour isoler les composants graphiques Swing du canal de communication TCP.",
      tachesSecondaires: "En complément du développement de base, j'ai implémenté une suite complète de tests unitaires avec JUnit afin de stress-tester les connexions socket concurrentes (simulation de 50 clients simultanés) et de détecter d'éventuels conflits de concurrence sur la base de données ou de blocages mutuels (deadlocks). J'ai également rédigé le manuel d'exploitation technique détaillant le schéma relationnel, les ports réseau à ouvrir pour le serveur, et les variables d'environnement à configurer pour le déploiement.",
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
      preuves: "<a href='https://github.com/LazyToonG/S301.git' target='_blank' class='text-accent font-weight-bold'>https://github.com/LazyToonG/S301.git</a>",
      pistesAmelioration: "Mettre en œuvre un pool de connexions (Connection Pooling) vers la base de données au Semestre 4 pour améliorer les temps de réponse du serveur.",
      imageUrl: "Musicaly_S3.png",
      githubUrl: "https://github.com/LazyToonG/S301.git"
    },
    {
      semestre: "S4",
      nom: "Dashboard Full-Stack et Supervision Réseau (SAÉ S4)",
      objectifs: "L'objectif de cette SAÉ 4.01 était de concevoir, développer et déployer un tableau de bord (Dashboard) de supervision et de monitoring systeme et réseau en temps réel. L'outil devait permettre à une équipe d'administrateurs réseaux d'assurer la supervision passive et active d'un parc informatique hétérogène (serveurs, commutateurs, postes clients). Il s'agissait d'implémenter des routines d'interrogation asynchrones (via requêtes ICMP/Ping et requêtes SNMPv2/v3 pour récupérer des OIDs spécifiques de performance comme la charge CPU, l'occupation de la RAM et des disques), d'assurer la remontée d'alertes instantanées par une interface web interactive réactive (Fetch API asynchrone), et de sécuriser la console d'administration via une authentification par jetons sécurisés (Session tokens).",
      tachesPrincipales: "Sur ce projet, je me suis chargé du développement de l'API REST backend en Python avec le framework Flask. J'ai implémenté le service de polling asynchrone qui effectue des requêtes Ping et requête le protocole SNMP (à l'aide de la bibliothèque pysnmp) pour extraire de manière dynamique les OIDs de charge processeur, mémoire physique et bande passante de chaque machine du parc. J'ai conçu les routes d'API pour expose ces métriques au format JSON. Côté client, j'ai programmé le frontend dynamique en JavaScript à l'aide de requêtes asynchrones Fetch API toutes les 5 secondes afin de rafraîchir l'interface sans rechargement de page. De plus, j'ai sécurisé l'accès au tableau de bord à l'aide d'un système d'authentification par jetons (tokens) et d'un hachage robuste des mots de passe (bcrypt).",
      tachesSecondaires: "Mes tâches secondaires consistaient à concevoir la maquette UI/UX sur Figma pour assurer une bonne lisibilité des indicateurs de panne (code couleur vert/orange/rouge pour les états de santé). J'ai également géré le projet en tant que Scrum Master sur un tableau Kanban GitHub en planifiant les sprints du groupe, et j'ai rédigé le guide d'utilisation technique destiné aux techniciens support réseaux.",
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
      preuves: "<a href='https://github.com/LazyToonG/S401.git' target='_blank' class='text-accent font-weight-bold'>https://github.com/LazyToonG/S401.git</a>",
      pistesAmelioration: "Étudier la conteneurisation des services avec Docker pour rendre le dashboard de supervision facilement déployable en BUT 3.",
      imageUrl: "Musicaly_S4.png",
      githubUrl: "https://github.com/LazyToonG/S401.git"
    }
  ],
  stage: {
    entreprise: "Lycée Théodore Monod à Noisy-le-Sec",
    poste: "Technicien Support Réseaux (Stagiaire)",
    duree: "8 semaines (du 26 janvier au 20 mars 2026)",
    missions: "Mon stage de fin de deuxième année s'est déroulé au Lycée Théodore Monod à Noisy-le-Sec pendant 8 semaines. Durant cette période, en binôme permanent avec mon camarade Anas Talbi, j'étais chargé du support et du maintien en conditions opérationnelles de toute l'infrastructure informatique et réseau de l'établissement. Ce parc comprend plus de 450 postes clients (ordinateurs administratifs, salles de classe, CDI), des serveurs de fichiers locaux et un réseau structuré sur plusieurs commutateurs répartis dans différents bâtiments. Nos missions quotidiennes étaient extrêmement denses et variées : nous devions gérer les tickets d'incidents des utilisateurs via un système de suivi, diagnostiquer des pannes matérielles (remplacement de disques durs HS par des SSD pour moderniser les postes, changement de barrettes de RAM, réparation d'écrans), configurer et déployer de nouveaux ordinateurs portables pour les enseignants, et résoudre les problèmes récurrents de connexion aux imprimantes réseau en configurant manuellement les ports TCP/IP et en installant les pilotes d'impression.",
    decouverteMondePro: "Ce stage a été une vraie révélation sur le fonctionnement d'un service informatique en conditions réelles. J'ai découvert le décalage important entre la théorie des cours et la pratique : sur le terrain, on fait face à un réseau historique complexe qui s'est construit sur plusieurs années, avec parfois un manque d'étiquetage des câbles et une documentation obsolète. Pour résoudre les pannes de connexion dans les salles de classe, nous devions mener des enquêtes à l'aide d'un testeur de câble réseau pour identifier le bon port de brassage dans la baie. J'ai aussi appris à gérer l'aspect humain du support : face à des enseignants stressés parce que leur outil de travail ne fonctionnait pas pendant un cours, il a fallu développer des compétences de communication et de vulgarisation pour expliquer nos actions calmement et les rassurer.",
    competence1: {
      nom: "Administrer les réseaux informatiques et maintenir l'infrastructure (BUT Informatique)",
      synthese: "Dans le cadre de cette compétence, j'ai réalisé une multitude d'interventions sur le matériel réseau et les serveurs du lycée. J'ai participé activement au nettoyage et à la réorganisation des baies de brassage dans les répartiteurs de bâtiment, ce qui impliquait le repérage des ports défectueux, le remplacement de cordons RJ45 endommagés et le brassage méthodique de nouvelles lignes pour raccorder des ordinateurs. J'ai également appris à utiliser la console d'administration pour vérifier l'attribution des adresses IP par le serveur DHCP, configurer des switchs d'accès et assurer la connectivité des équipements.",
      preuves: "Une de mes réalisations majeures a été la résolution d'une boucle réseau (tempête de broadcast) dans une salle informatique. Un utilisateur avait branché par erreur les deux extrémités d'un câble ethernet sur deux prises murales différentes, ce qui a paralysé tout le réseau local du bâtiment. En me déplaçant sur place avec Anas, j'ai procédé par élimination en débranchant successivement les câbles sur le switch local de la salle tout en observant l'activité des voyants lumineux (LEDs) qui clignotaient anormalement. Une fois le port fautif repéré et le câble retiré, j'ai restructuré proprement le brassage de la baie locale et documenté l'incident pour que l'équipe technique sache comment réagir à l'avenir. Le réseau a été rétabli en moins d'une heure."
    },
    competence2: {
      nom: "Collaborer et communiquer au sein d'une équipe informatique exigeante",
      synthese: "La gestion quotidienne du support utilisateur dans un établissement scolaire demande une collaboration étroite et un suivi rigoureux. Pour cela, j'ai utilisé de nombreux outils d'administration comme la console Active Directory pour créer et modifier les comptes des enseignants, réinitialiser des mots de passe oubliés, débloquer des sessions verrouillées et gérer les droits d'accès aux dossiers partagés. J'ai également utilisé des outils de prise en main à distance pour dépanner rapidement le personnel administratif sans avoir à me déplacer constamment, ce qui nous permettait d'optimiser notre temps de traitement des demandes.",
      preuves: "Notre organisation de travail en binôme avec Anas a été la clé pour gérer efficacement le grand nombre de tickets d'assistance. Nous avons mis en place une routine d'entraide : tous les matins, nous analysions la file d'attente des incidents. Pendant que l'un d'entre nous prenait le rôle de support niveau 1 au bureau (réponses aux appels urgents, prise en main à distance, gestion des comptes sur l'Active Directory et configuration logicielle), l'autre partait en intervention physique sur le terrain (remplacement de matériel en panne, diagnostic réseau sur switch, recâblage de switchs locaux). Nous échangions nos rôles à la mi-journée pour rester polyvalents et assurer une couverture complète du support. Cette organisation nous a permis de traiter avec succès plus d'une centaine de tickets d'assistance sur la durée du stage."
    }
  },
  objectifs: {
    courtTerme: "Dans le cadre de ma troisième année de BUT Informatique, je recherche activement un contrat d'alternance d'un an axé sur l'Administration Systèmes et Réseaux ou l'ingénierie DevOps. Mon but immédiat est d'intégrer une équipe d'exploitation ou d'infrastructure où je pourrai mettre en pratique mes compétences de support acquises au lycée Théodore Monod. Je souhaite travailler sur des sujets concrets comme le déploiement automatisé de serveurs Linux/Windows, la gestion de parcs avec Active Directory, la configuration d'équipements actifs (switchs, routeurs) et la mise en œuvre de solutions de supervision réseau en temps réel.",
    moyenTerme: "Après l'obtention de mon BUT Informatique, j'ai pour objectif de poursuivre mes études vers un diplôme de niveau Bac+5 (Master universitaire spécialisé en Réseaux et Télécommunications ou École d'Ingénieurs en informatique) en formule alternance. Cette phase me permettra de monter en compétences sur des sujets avancés tels que la sécurité des systèmes d'information (cybersécurité), la virtualisation, l'administration d'infrastructures Cloud (AWS, Azure) et le scripting d'automatisation (Ansible, Terraform) pour la gestion d'infrastructures de plus grande échelle.",
    longTerme: "À plus long terme, d'ici 10 à 15 ans, mon ambition est de devenir Architecte d'Infrastructures ou Lead Ingénieur DevOps. Je souhaite concevoir et superviser le déploiement d'infrastructures systèmes et réseaux hautement disponibles, sécurisées et résilientes face aux pannes. M'investir dans la mise en place d'architectures cloud hybrides, l'optimisation des performances des serveurs de production et l'encadrement technique d'équipes d'ingénieurs d'infrastructure représente l'aboutissement idéal de mon parcours professionnel."
  }
};
