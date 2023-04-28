import { useEffect, useState } from "react";
import { Styles } from "./styles";
import { Props } from "./types";

export default function TodoCard({ todo: { id, title, completed } }: Props) {
  const [formattedTitle, setFormattedTitle] = useState<string>("");

  function formatTitle(title: string): string {
    if (title.length <= 20) {
      return title;
    } else {
      return `${title.substring(0, 20)}...`;
    }
  }

  useEffect(() => {
    setFormattedTitle(formatTitle(title));
  }, [title]);

  return (
    <Styles.Wrapper>
      <Styles.Card isCompleted={completed}>
        <Styles.Id>#{id}</Styles.Id>
        <Styles.Title>{formattedTitle}</Styles.Title>
      </Styles.Card>
    </Styles.Wrapper>
  );
}
