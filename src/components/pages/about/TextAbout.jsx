/* eslint-disable react/no-unescaped-entities */
import { PiFileArrowDown } from "react-icons/pi";
import Button from "../../reusable-ui/Button";
import CvDevweb from "/public/cv-dylann-xavero-devweb-2024.pdf";
import TitleProjects from "../../reusable-ui/TitleProjects";

export default function TextAbout() {
  return (
    <>
      <TitleProjects size="text-4xl" label="Background" className="mb-6" />
      <div className="flex flex-col gap-6 text-justify pb-4 text-lg mb-12">
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
      <div className="flex justify-between">
        <p className="text-xl font-bold pr-4">
          Besoin d'en savoir plus sur mon parcours ? <br />
          Téléchargez mon CV en ligne.
        </p>
        <Button
          Icon={<PiFileArrowDown />}
          label="Voir mon CV"
          href={CvDevweb}
          target="_blank"
        />
      </div>
    </>
  );
}
