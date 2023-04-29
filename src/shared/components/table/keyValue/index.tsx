import { Styles } from "./styles";
import { Props } from "./types";

export default function KeyValueTable<T>({
  data,
  columns,
  isLoading,
  isError,
}: Props<T>) {
  return (
    <Styles.Wrapper>
      <Styles.Table>
        {columns.map(({ name, dataKey }) => (
          <Styles.KeyValuePair key={name}>
            <Styles.Key>{name}:</Styles.Key>
            <Styles.Value>
              {isLoading
                ? "Loading data..."
                : isError
                ? "Error loading data"
                : data
                ? String(data[dataKey])
                : "No data provided"}
            </Styles.Value>
          </Styles.KeyValuePair>
        ))}
      </Styles.Table>
    </Styles.Wrapper>
  );
}
