/* eslint-disable react/no-unescaped-entities */
export const threadsDescription = {
  header: (
    <>
      <p>
        J'ai voulu relever le défi passionnant de reproduire l'application
        Threads tout en y apportant ma touche personnelle. Conçu dans le cadre
        d'une formation intensive dirigée par l'équipe de Believemy, ce projet
        est une véritable vitrine de compétences techniques et de créativité.
      </p>

      <p>
        Piloté par ma passion pour les dernières technologies, j'ai embarqué
        dans cette aventure avec pour objectif de maîtriser Next.js 14. Le choix
        de Threads comme projet phare de la formation a été une opportunité
        excitante pour perfectionner mes compétences et explorer les
        possibilités infinies offertes par ce framework avancé.
      </p>

      <p>
        J'ai poussé l'expérience utilisateur un peu plus loin en développant
        deux fonctionnalités supplémentaires : l'ajout de commentaires et de
        likes aux publications. Cette initiative démontre mon engagement à aller
        au-delà des attentes ainsi que mon engagement à exceller dans un
        environnement en constante évolution.
      </p>
    </>
  ),
  features: [
    "Possibilité de créer de nouveaux posts.",
    "Affichage des commentaires associés à chaque post.",
    "Possibilité de supprimer des posts.",
    "Possibilité de like/unlike les posts.",
    "Gestion de l'authentification des utilisateurs avec email et mot de passe.",
    "Mode invité pour les utilisateurs sans identification.",
  ],
};

export const vroomDescription = {
  header: (
    <>
      <p>
        Vroom est une plateforme de location de véhicules haut de gamme, conçue
        avec une approche axée sur l’utilisateur et une interface intuitive.
        L’esthétique du site a été soigneusement pensée pour offrir une
        expérience visuelle agréable, mettant en avant la simplicité et la
        facilité d’utilisation.
      </p>

      <p>
        Des éléments interactifs ont été intégrés pour rendre la navigation plus
        engageante. La page d’accueil contient l’essentiel du site. On peut y
        trouver plusieurs sections tels que, la selection des vehicules à louer,
        le carousel d’avis clients ou encore une section FAQ.
      </p>

      <p>
        J'ai ici utilisé Next.js principalement pour sa gestion simplifié des
        routes, l'optimisation du rendu des images et le rendu coté serveur
        (SSR), ce qui offre des avantages en termes de performances et de
        référencement.
      </p>
    </>
  ),
  features: [
    "Sélection du véhicule, de la ville et de la durée de location",
    "Calcul du coût totale de la location en fonction de la durée choisie",
    "Carousel de cartes avec informations détaillés sur les vehicules",
    "Carousel d’avis utilisateurs",
    "Section FAQ",
    "Responsive Design",
  ],
};

export const crustyDescription = {
  header: (
    <>
      <p>
        Crusty Pizza est une plateforme de commande de pizzas. Cette plateforme
        permet principalement aux utilisateurs de consulter le menu et d'ajouter
        des produits au panier. Elle contient également un panel admin
        permettant de créer, modifier ou supprimer un produit. De plus, le
        panier est sauvegardé grâce au localStorage du navigateur, l'utilisateur
        peut donc retrouver son panier intact même après une déconnexion.
      </p>
      <p>
        J'ai voulu ici mettre en exergue toutes les bonnes pratiques de
        développement qui permettent de créer une application robuste et rapide
        avec React. L'objectif principal de ce projet était de créer une
        application
        <strong> CRUD</strong> à l'aide de Firebase.
      </p>
    </>
  ),
  features: [
    "Redirection vers le menu en entrant son nom à l’accueil",
    "Panel admin pour ajouter, supprimer ou modifier des produits",
    "Ajout de la sélection du menu dans le panier",
    "Incrémentation ou décrémentation de la quantité des articles",
    "Sauvegarde du panier selon le compte utilisateur",
  ],
};

export const disneyDescription = {
  header: (
    <>
      <p>
        À travers ce projet qui est un clone de la plateforme Disney+, j’ai
        voulu recréer avec une attention particulière aux détails de
        l’interface, une expérience utilisateur immersive. L’interface a été
        conçue à l’aide de l’API TMDB, ce qui m’a permis de recréer toutes les
        sections de l’interface originale.
      </p>

      <p>
        Grâce à une conception responsive et une optimisation des performances,
        le site offre une expérience fluide et rapide sur tous les appareils.
      </p>
    </>
  ),
  features: [
    "Authentification Google ou Mail et Password avec Firebase",
    "Sélection de la photo de profil",
    "Bouton de déconnexion",
    "Catalogue de Contenus",
    "Carousel des derniers films en tendance",
    "Au hover, changement de la miniature et apparition de boutons de lecture et autres",
  ],
};

export const portfolioDescription = {
  header: (
    <>
      <p>
        En réalisant mon portfolio, je mets en lumière mes compétences en
        développement front-end, tout en montrant un attrait certain pour le
        webdesign et le graphic design plus généralement.
      </p>
      <p>
        J'adopte des approches novatrices, telles que l'intégration de sections
        de type blog, où chaque projet est présenté comme un article, mais dans
        un format de portfolio détaillé. Cette approche me permet de démontrer
        ma capacité à transformer des mises en page en les adaptant de manière
        précise à des contextes spécifiques.
      </p>
      <p>
        J'ai développé ce portfolio tel un produit avec des techniques tels que
        la mise en page, le copywriting, les appels à l'action, et
        l'optimisation de l'UI/UX design. L'objectif est de mettre en avant mon
        profil, de manière à illustrer mon intérêt et ma capacité à collaborer
        sur de nouveaux projets.
      </p>
    </>
  ),
  features: [
    "CV téléchargeable",
    "Dark Mode / Light Mode",
    "Liens vers les profils sociaux et GitHub",
    "Présentation des compétences et des projets réalisés",
    "Section avis",
  ],
};
