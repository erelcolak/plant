import { SortOrder, PageableInput } from "@/types/SearchFields";

export const initialValueSearchFieldPaginatin: PageableInput = {
  number: 0,
  size: 15,
  sortOrder: SortOrder.DESC,
  sortBy: "createDate",
};
