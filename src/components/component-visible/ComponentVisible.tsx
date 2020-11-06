import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDropdown, setDropdown, setActiveDD } from "../../redux/Index";

// hook to detect if a click occurred outside of a dropdown component. If it did, then close the DD
export default function useComponentVisible() {
  const dropDown = useSelector(getDropdown);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (event: Event) => {
    const element = event.target as HTMLInputElement;
    const elementName = element.innerText;

    if (elementName === "settings") {
      // handle settings icon click
      dispatch(setDropdown(!dropDown));
    }
    if (ref.current && !ref.current.contains(event.target as Node)) {
      // handle click outside settings icon
      dispatch(setDropdown(false));
      dispatch(setActiveDD("general"));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

  return ref;
}
