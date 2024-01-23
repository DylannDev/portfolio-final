/* eslint-disable react/no-unescaped-entities */
import Title from "../../reusable-ui/Title";

export default function TextAbout() {
  return (
    <>
      <Title className="text-4xl mb-6" label="Background" />
      <div className="flex flex-col gap-6 text-justify text-lg">
        <p>
          À l'issue de mes études, mon intérêt pour la conception de sites web
          s'est rapidement transformé en une véritable passion. La possibilité
          de donner vie à mes propres projets m'a immédiatement captivé. Doté
          d'un attrait certain pour le design, j'ai choisi orienter mes
          compétences vers le front-end.
        </p>
        <p>
          En tant que développeur passionné, je dispose d'une formation robuste
          en Javascript, avec une expertise certaine en React. Je prends plaisir
          à concevoir des interfaces à la fois visuellement attrayantes et
          intuitives. Je suis également en mesure de résoudre des problèmes
          complexes en élaborant des solutions ingénieuses et efficaces.
        </p>
        <p>
          Toujours à la recherche de nouveaux défis, chaque nouveau projet
          constitue pour moi une occasion d'approfondir mes connaissances en
          programmation web. Je suis ouvert aux nouvelles opportunités et
          collaborations passionnantes. N'hésitez pas à me contacter pour
          discuter de votre projet ou simplement échanger sur le vaste univers
          du développement web.
        </p>
      </div>
    </>
  );
}
