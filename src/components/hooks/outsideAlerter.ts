import React, { useEffect } from "react";

function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  callBack: Function
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callBack();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callBack]);
}

export default useOutsideAlerter;
