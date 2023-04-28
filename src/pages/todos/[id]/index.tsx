import { useParams } from "react-router-dom";
import { useGetTodoByIdQuery } from "../../../store/apis/todos/api";
import { Styles } from "./styles";
import { Props, UrlParams } from "./types";

export default function TodoByIdPage({}: Props) {
  const { todoId } = useParams<UrlParams>();

  const { data } = useGetTodoByIdQuery(Number(todoId));

  return (
    <Styles.Wrapper>
      TodoByIdPage
      {data?.title && <div>{data.title}</div>}
      <Styles.Wrapper>{todoId}</Styles.Wrapper>
    </Styles.Wrapper>
  );
}
