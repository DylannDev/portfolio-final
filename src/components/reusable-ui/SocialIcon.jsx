/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function SocialIcon({ Icon, color, size }) {
  return (
    <Link className={`${color} ${size} hover:text-primary cursor-pointer`}>
      {Icon}
    </Link>
  );
}
