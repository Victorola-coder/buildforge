import clsx from "clsx";

export const ArrowLeft = (props: SvgProps) => {
  const { className, stroke } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   width="32"
      //   height="32"
      className={clsx(className)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M24.0889 16.0003H7.91113M7.91113 16.0003L13.9778 9.93359M7.91113 16.0003L13.9778 22.0669"
        stroke={stroke || "#A4A0BA"}
        strokeWidth="1.51667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export function ArrowRight(props: SvgProps) {
  const { className, stroke } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   width="32"
      //   height="32"
      className={clsx(className)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M7.91109 15.9997L24.0889 15.9997M24.0889 15.9997L18.0222 22.0664M24.0889 15.9997L18.0222 9.93307"
        stroke={stroke || "#A4A0BA"}
        strokeWidth="1.51667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
