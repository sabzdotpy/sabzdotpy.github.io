import "./CLink.scss";

import { Link } from "react-router-dom";

const CLink = ({ to, className, children }) => {
  return (
    <div className="link-container">
      <Link to={to} className={`link ${className || ""}`}>
        {children}
      </Link>
      <svg
        className="squiggle"
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
      >
        <path
          d="M0 3 Q 2 0, 4 3 T 8 3 T 12 3 T 16 3 T 20 3 T 24 3 T 28 3 T 32 3 T 36 3 T 40 3 T 44 3 T 48 3 T 52 3 T 56 3 T 60 3 T 64 3 T 68 3 T 72 3 T 76 3 T 80 3 T 84 3 T 88 3 T 92 3 T 96 3 T 100 3"
          fill="transparent"
          stroke="#0a0a0a"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CLink;
