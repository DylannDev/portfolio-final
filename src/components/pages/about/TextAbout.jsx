/* eslint-disable react/no-unescaped-entities */
import Title from "../../reusable-ui/Title";

export default function TextAbout() {
  return (
    <>
      <Title className="text-4xl mb-6" label="Background" />
      <div className="flex flex-col gap-6 text-justify text-lg">
        <p>
          Actuellement en reconversion professionnelle, je me suis pris de
          passion pour la conception de sites web après mes études. Le fait de
          pouvoir créer de moi-même mes propres projets m’a tout de suite plu.
          Ayant également un attrait certain pour le design, c’est tout
          naturellement que je me suis tourné vers le front-end.
        </p>
        <p>
          Je suis un développeur passionné avec une formation solide en
          Javascript et une très bonne maîtrise de sa librairie React. J’aime
          créer des interfaces visuellement agréables et intuitives. Toujours à
          la recherche de nouveaux défis, chaque nouveau projet est une
          opportunité de mettre en pratique mes compétences et d’en apprendre
          toujours plus sur la programmation web.
        </p>
        <p>
          Je suis ouvert aux nouvelles opportunités et collaborations
          passionnantes. N'hésitez pas à me contacter pour discuter de votre
          projet ou simplement pour échanger sur le monde du développement web.
        </p>
      </div>
    </>
  );
}
