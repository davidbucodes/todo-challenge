import { Styles } from "./styles";

export default function NotFoundPage() {
  return (
    <Styles.Wrapper>
      <Styles.Title>Page not found!</Styles.Title>
      <Styles.Details>
        Please make sure that the requested address is correct.
      </Styles.Details>
    </Styles.Wrapper>
  );
}
