export type Props<T> = {
  data: T;
  columns: { name: string; dataKey: keyof NonNullable<T> }[];
  isLoading?: boolean;
  isError?: boolean;
};
