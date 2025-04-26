import { EnumPageableInputSortOrder, PageableInput } from "@/types/SearchFields";

export const initialValueSearchFieldPaginatin: PageableInput = {
  number: 0,
  size: 15,
  sortOrder: EnumPageableInputSortOrder.DESC,
  sortBy: "createDate",
};
