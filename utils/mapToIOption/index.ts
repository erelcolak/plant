import { IOption } from "@/types/Option";

export const mapEntityToIOption = (item: any | null = null): IOption | null => {
  if (item === null) {
    return null;
  } else {
    return {
      label: item.name as string,
      value: item.id as string,
      data: item,
    };
  }
};
export const mapEntityArrayToIOptionArray = (arr: any[]): IOption[] => {
  return arr.map((item) => {
    return {
      label: item.name as string,
      value: item.id as string,
      data: item,
    };
  });
};
