import { GlobalDataContext } from "@/contexts/GlobalDataContext";
import { useContext } from "react";
const useGlobalData = () => {
  const { getAllRoomsData, getAllRoomsIsFetching } = useContext(GlobalDataContext);
  return {
    getAllRoomsData,
    getAllRoomsIsFetching,
  };
};
export default useGlobalData;
