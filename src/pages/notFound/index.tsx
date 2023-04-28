import { Styles } from "./styles";
import { Props } from "./types";

export default function NotFoundPage({}: Props) {
  return (
    <Styles.Wrapper>
      <Styles.Title>Page not found!</Styles.Title>
      <Styles.Details>
        Please make sure that the requested address is correct.
      </Styles.Details>
    </Styles.Wrapper>
  );
}
