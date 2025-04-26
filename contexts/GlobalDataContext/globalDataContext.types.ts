import { Room } from "@/types/Room";

export interface IGlobalDataContext {
  getAllRoomsData: Room[] | undefined;
  getAllRoomsIsFetching: boolean;
}

export const initialValuesGlobalDataContext = {
  getAllRoomsData: undefined,
  getAllRoomsIsFetching: false,
};
