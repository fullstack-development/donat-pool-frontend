interface Props {
  primaryColor: 'blue';
  backgroundColor: 'white' | 'red' | 'blue' | 'black';
  href?: string | null;
  isExternal?: boolean;
  size?: 's' | 'm';
  isFullWidth?: boolean;
  onClick?: () => void;
}

export type { Props };
