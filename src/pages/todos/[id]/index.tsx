import { useParams } from "react-router-dom";
import KeyValueTable from "../../../shared/components/table/keyValue";
import { useGetTodoByIdQuery } from "../../../store/apis/todos/api";
import { useGetUserByIdQuery } from "../../../store/apis/users/api";
import { Styles } from "./styles";
import { Props, UrlParams } from "./types";

export default function TodoByIdPage({}: Props) {
  const { todoId } = useParams<UrlParams>();

  const {
    data: todo,
    isLoading: isLoadingTodo,
    isError: isErrorTodo,
  } = useGetTodoByIdQuery(Number(todoId));
  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useGetUserByIdQuery(Number(todo?.userId), {
    skip: !todo?.userId,
  });

  return (
    <Styles.Wrapper>
      <KeyValueTable
        columns={[
          {
            name: "item number",
            dataKey: "todoId",
          },
        ]}
        data={{ todoId }}
      />
      <KeyValueTable
        columns={[
          {
            name: "creator",
            dataKey: "name",
          },
        ]}
        data={user}
        isLoading={isLoadingUser}
        isError={isErrorUser}
      />
      <KeyValueTable
        columns={[
          {
            name: "title",
            dataKey: "title",
          },
        ]}
        data={todo}
        isLoading={isLoadingTodo}
        isError={isErrorTodo}
      />
    </Styles.Wrapper>
  );
}
