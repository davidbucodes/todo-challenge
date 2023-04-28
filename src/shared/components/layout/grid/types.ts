export type GridItem<T> = T & {
  id: number;
};

export type Props<T> = {
  items: GridItem<T>[];
  itemRenderer: (item: T) => JSX.Element;
};
