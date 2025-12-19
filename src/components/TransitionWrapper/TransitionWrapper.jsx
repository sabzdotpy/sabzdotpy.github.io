import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [display, setDisplay] = useState(children);
  const [state, setState] = useState("page-enter");

  useEffect(() => {
    setState("page-exit");
    const timeout = setTimeout(() => {
      setDisplay(children);
      setState("page-enter");
    }, 350);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className={`page ${state} ${state}-active`}>
      {display}
    </div>
  );
}
