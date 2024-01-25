/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function SocialIcon({ socialData }) {
  return (
    <Link
      to={socialData.link}
      className="text-2xl hover:text-primary cursor-pointer"
    >
      {socialData.icon}
    </Link>
  );
}
