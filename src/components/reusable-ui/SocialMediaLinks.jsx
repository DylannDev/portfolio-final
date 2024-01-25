/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import { socialMediaData } from "../../data/socialMediaData/socialMediaData";
import SocialIcon from "./SocialIcon";

export default function SocialMediaLinks({ minified }) {
  return (
    <div className={`flex items-center ${minified ? "gap-3" : "gap-4"} `}>
      {socialMediaData.map((socialData, index) =>
        minified ? (
          index < 2 && <SocialIcon key={nanoid(8)} socialData={socialData} />
        ) : (
          <SocialIcon key={nanoid(8)} socialData={socialData} />
        )
      )}
    </div>
  );
}
