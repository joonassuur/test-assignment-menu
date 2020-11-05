import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setDropdown, setActiveDD } from "../../redux/Index";

export default function useComponentVisible(initialIsVisible: boolean) {
  const dispatch = useDispatch();
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
      dispatch(setDropdown(false));
      dispatch(setActiveDD("general"));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
