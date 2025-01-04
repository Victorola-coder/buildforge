declare module "aos";

// declare module "ejs";

// declare module "nodemailer";

// declare module "nodemailer/lib/mailer";

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

interface User {
  id: number;
  email: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ApiResponse {
  subscribers: User[];
  totalPages: number;
  currentPage: number;
  totalSubscribers: number;
}

interface DataInterface {
  LOGO?: string;
  link?: string;
  content?: string;
  otp?: string; // Add OTP to the interface
}
