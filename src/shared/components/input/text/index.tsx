import { Styles } from "./styles";
import { Props } from "./types";

export default function TextInput({
  id,
  label,
  placeholder,
  initialValue,
  onValueChange,
}: Props) {
  function onInputValueChanged(event: React.ChangeEvent<HTMLInputElement>) {
    if (onValueChange) {
      const updatedValue = event.target.value;
      onValueChange(updatedValue);
    }
  }

  return (
    <Styles.Wrapper>
      {label && <Styles.InputLabel htmlFor={id}>{label}</Styles.InputLabel>}
      <Styles.TextInput
        id={id}
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={onInputValueChanged}
      />
    </Styles.Wrapper>
  );
}
