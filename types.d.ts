declare module "aos";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  loading?: boolean;
  noDefault?: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

interface LinksProps {
  name: string;
  href: string;
}
