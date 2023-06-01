import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { layerContext } from "../Context/AuthContext";

const useQueryHook = () => {
  const { user } = useContext(layerContext);
  if (user) {
    const query = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: () =>
      fetch(`http://localhost:3000/orders?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
  });
    return query;
  } else {
    return null;
  }
};

export default useQueryHook;
