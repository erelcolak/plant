export interface ISearchFields {
  pageableInput: PageableInput;
  searchTerm: string;
}
export interface PageableInput {
  size: number;
  number: number;
  sortBy: string;
  sortOrder: EnumPageableInputSortOrder;
}
export enum EnumPageableInputSortOrder {
  ASC = "ASC",
  DESC = "DESC",
}
