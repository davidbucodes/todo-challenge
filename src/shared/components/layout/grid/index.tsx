import { Styles } from "./styles";
import { Props } from "./types";

export default function Grid<T>({ items, itemRenderer }: Props<T>) {
  return (
    <Styles.Wrapper>
      <Styles.Grid>
        {items.map((item) => (
          <Styles.GridItem key={item.id}>{itemRenderer(item)}</Styles.GridItem>
        ))}
      </Styles.Grid>
    </Styles.Wrapper>
  );
}
