import { useParams } from "react-router-dom";
import { useGetTodoByIdQuery } from "../../../store/apis/todos/api";
import { useGetUserByIdQuery } from "../../../store/apis/users/api";
import { Styles } from "./styles";
import { Props, UrlParams } from "./types";

function AsyncTodoDetail<T>({
  detail,
  data,
  dataKey,
  isLoading,
  isError,
}: {
  detail: string;
  data: T;
  dataKey: keyof NonNullable<T>;
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <Styles.TodoDetail>
      {isLoading && (
        <Styles.TodoDetailLoading>Loading {detail}...</Styles.TodoDetailLoading>
      )}
      {data && (
        <Styles.TodoDetailKeyValue>
          <Styles.Key>{detail}:</Styles.Key>
          <Styles.Value>{String(data[dataKey])}</Styles.Value>
        </Styles.TodoDetailKeyValue>
      )}
      {isError && (
        <Styles.TodoDetailError>Error loading {detail}</Styles.TodoDetailError>
      )}
    </Styles.TodoDetail>
  );
}

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
      <Styles.TodoDetail>
        <Styles.TodoDetailKeyValue>
          <Styles.Key>item number:</Styles.Key>
          <Styles.Value>{todoId}</Styles.Value>
        </Styles.TodoDetailKeyValue>
      </Styles.TodoDetail>
      <AsyncTodoDetail
        detail="creator"
        dataKey={"name"}
        data={user}
        isLoading={isLoadingUser}
        isError={isErrorUser}
      />
      <AsyncTodoDetail
        detail="title"
        dataKey={"title"}
        data={todo}
        isLoading={isLoadingTodo}
        isError={isErrorTodo}
      />
    </Styles.Wrapper>
  );
}
