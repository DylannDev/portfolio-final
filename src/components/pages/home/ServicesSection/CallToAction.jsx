/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Button from "../../../reusable-ui/Button";
import { PiChatText, PiStack } from "react-icons/pi";

export default function CallToAction({ variant = "mail" }) {
  return (
    <div className="flex flex-col items-center gap-6 mt-32">
      <h3 className="font-bold font-title text-2xl">
        {variant === "mail"
          ? "Vous souhaitez discuter d'une éventuelle collaboration ?"
          : "Besoin d'en savoir plus sur mes compétences ?"}
      </h3>
      <p className="text-xl mb-6">
        {variant === "mail"
          ? "Je suis toujours ouvert à la discussion et disponible pour un échange."
          : "Zoom sur mes compétences de développeur web front-end."}
      </p>

      <Button
        label={variant === "mail" ? "Me Contacter" : "En savoir plus"}
        href={variant === "mail" ? "mailto:d.xavero@hotmail.com" : "/skills"}
        Icon={variant === "mail" ? <PiChatText /> : <PiStack />}
      />
    </div>
  );
}
