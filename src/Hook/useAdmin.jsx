import AuthContext, { layerContext } from "../Context/AuthContext";
import useAxiosInstance from "./useAxiosInstance";
import useQueryHook from "./useQuery";

const useAdmin = () => {
  const [axiosSecure] = useAxiosInstance();
  const { user } = AuthContext(layerContext);
  if (user) {
    const { data: admin = [], isLoading } = useQueryHook({
      queryKey: ["adminUsers"],
      queryFn: async () => {
        const res = await axiosSecure.get("/api/admin/users");
        return res.data;
      },
    });
    console.log(admin);
    return [admin, isLoading];
  }
};

export default useAdmin;
