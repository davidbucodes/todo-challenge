import { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../shared/components/input/text";
import Grid from "../../shared/components/layout/grid";
import TodoCard from "../../shared/components/todo/card";
import { useGetAllTodosQuery } from "../../store/apis/todos/api";
import { Styles } from "./styles";
import { Props } from "./types";

export default function IndexPage({}: Props) {
  const [filterTodosTerm, setFilterTodosTerm] = useState<string>("");

  const { todos, isLoading, isError } = useGetAllTodosQuery(undefined, {
    selectFromResult: ({ data, isLoading, isError }) => ({
      todos: data?.filter((todo) => todo.title.includes(filterTodosTerm)),
      isLoading,
      isError,
    }),
  });

  return (
    <Styles.Wrapper>
      <TextInput
        id="todos-filter"
        label="Search by title includes:"
        placeholder="Search term"
        onValueChange={setFilterTodosTerm}
      />
      {isLoading && <Styles.Loading>Loading...</Styles.Loading>}
      {isError && (
        <Styles.LoadingError>Error loading todos</Styles.LoadingError>
      )}
      {todos && (
        <Grid
          items={todos}
          itemRenderer={(todo) => (
            <Link
              to={`/todos/${todo.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <TodoCard todo={todo} />
            </Link>
          )}
        />
      )}
    </Styles.Wrapper>
  );
}
