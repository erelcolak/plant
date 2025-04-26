export interface ISearchFields {
  pageableInput: PageableInput;
  searchTerm: string;
}
export interface PageableInput {
  size: number;
  number: number;
  sortBy: string;
  sortOrder: SortOrder;
}
export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}
