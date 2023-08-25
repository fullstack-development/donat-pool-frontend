interface Props {
  value: string | number;
  dataAttr?: string;
  type?: 'text' | 'submit' | 'number';
  multiline?: boolean;
  isDisabled?: boolean;
  hint?: string | null;
  placeholder?: string;
  maxLength?: number | undefined;
  rows?: number | undefined;
  error?: string | null;
  fontColor?: 'green' | 'yellow' | 'black';
  min?: number;
  step?: number;
  onChange: (event: React.ChangeEvent) => void;
}

export type { Props };
