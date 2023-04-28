import { Styles } from "./styles";
import { Props } from "./types";

export default function ErrorPage<T extends Error>({ error }: Props<T>) {
  return (
    <Styles.Wrapper>
      <Styles.Title>An error had occurred!</Styles.Title>
      <Styles.Details>Error details: {error?.message}</Styles.Details>
    </Styles.Wrapper>
  );
}
