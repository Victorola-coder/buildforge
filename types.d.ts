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

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  
}
