import { useParams } from "react-router-dom";
import { Styles } from "./styles";
import { Props, UrlParams } from "./types";

export default function TodoByIdPage({}: Props) {
  const { todoId } = useParams<UrlParams>();

  return (
    <Styles.Wrapper>
      TodoByIdPage
      <Styles.Wrapper>{todoId}</Styles.Wrapper>
    </Styles.Wrapper>
  );
}
