export type Props = {
  id: string;
  label?: string;
  placeholder?: string;
  initialValue?: string;
  onValueChange?: (updatedValue: string) => void;
};
