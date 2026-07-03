export interface IWithPagination<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
