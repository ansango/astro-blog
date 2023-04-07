export type Element = {
  readonly as?: keyof HTMLElementTagNameMap;
};

export type PaginationLink = {
  url: string;
  text?: string;
  srLabel?: string;
};
