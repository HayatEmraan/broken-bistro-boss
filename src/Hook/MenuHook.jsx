import { useEffect, useState } from "react";

export const useMenuHook = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return [menu];
};
