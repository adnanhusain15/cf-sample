import { type FC, SVGProps } from "react";

export type ISvg =
  | "menu"
  | "arrow-down"
  | "application"
  | "finger"
  | "location"
  | "rounded-star"
  | "star"
  | "arrow-right"
  | "arrow-left"
  | "star-row"
  | "quote";

interface ISvgLibProps extends SVGProps<SVGSVGElement> {
  type: ISvg;
}

const SvgLib: FC<ISvgLibProps> = ({ type, ...props }) => {
  const getSvg = (type: ISvg) => {
    switch (type) {
      case "application":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2857 22.4286V31L24.5714 27.7857L28.8571 31V22.4286M31 10.6429V3.14286C31 1.95939 30.0406 1 28.8571 1H3.14286C1.95939 1 1 1.95939 1 3.14286V28.8571C1 30.0406 1.95939 31 3.14286 31H17.0714M6.35714 9.57143H17.0714M6.35714 16H12.7857M24.5714 24.5714C21.021 24.5714 18.1429 21.6933 18.1429 18.1429C18.1429 14.5925 21.021 11.7143 24.5714 11.7143C28.1218 11.7143 31 14.5925 31 18.1429C31 21.6933 28.1218 24.5714 24.5714 24.5714Z"
              stroke="#226CF5"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "finger":
        return (
          <svg
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57143 21.3571V18.1429M9.57143 18.1429V7.42857C9.57143 6.2451 10.5308 5.28571 11.7143 5.28571C12.8978 5.28571 13.8571 6.2451 13.8571 7.42857V16H21.042C22.9913 16 24.5714 17.5802 24.5714 19.5294V21.3571C24.5714 26.6827 20.2542 31 14.9286 31H13.8571C9.12327 31 5.28571 27.1624 5.28571 22.4286C5.28571 20.0616 7.20449 18.1429 9.57143 18.1429ZM17.0714 11.7143H21.3571C24.3158 11.7143 26.7143 9.31581 26.7143 6.35714C26.7143 3.39847 24.3158 1 21.3571 1H6.35714C3.39847 1 1 3.39847 1 6.35714C1 9.31581 3.39847 11.7143 6.35714 11.7143"
              stroke="#FDAF4D"
              strokeWidth="2"
            />
          </svg>
        );

      case "location":
        return (
          <svg
            width="28"
            height="32"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.8655 18.1428C16.2328 18.1428 18.154 16.2228 18.154 13.8571C18.154 11.4914 16.2328 9.57139 13.8655 9.57139C11.4983 9.57139 9.57702 11.4914 9.57702 13.8571C9.57702 16.2228 11.4983 18.1428 13.8655 18.1428Z"
              stroke="#FF7361"
              strokeWidth="2"
              strokeLinecap="square"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.7311 13.8571C26.7311 24.5714 16.0098 31 13.8655 31C11.7213 31 1 24.5714 1 13.8571C1 6.7578 6.76161 1 13.8655 1C20.9694 1 26.7311 6.7578 26.7311 13.8571Z"
              stroke="#FF7361"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        );
      case "star-row":
        return (
          <svg
            width="70"
            height="20"
            viewBox="0 0 70 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M34.0697 2.35872C34.4027 1.51457 35.5973 1.51457 35.9303 2.35872L37.6691 6.76755C37.7707 7.02527 37.9747 7.22927 38.2325 7.33092L42.6413 9.06974C43.4854 9.40266 43.4854 10.5973 42.6413 10.9303L38.2325 12.6691C37.9747 12.7707 37.7707 12.9747 37.6691 13.2325L35.9303 17.6413C35.5973 18.4854 34.4027 18.4854 34.0697 17.6413L32.3309 13.2325C32.2293 12.9747 32.0253 12.7707 31.7675 12.6691L27.3587 10.9303C26.5146 10.5973 26.5146 9.40266 27.3587 9.06974L31.7675 7.33092C32.0253 7.22927 32.2293 7.02527 32.3309 6.76755L34.0697 2.35872Z"
              fill="#64647A"
            />
            <path
              opacity="0.2"
              d="M61.0697 4.35872C61.4027 3.51457 62.5973 3.51457 62.9303 4.35872L64.1034 7.33323C64.205 7.59095 64.409 7.79496 64.6668 7.8966L67.6413 9.06974C68.4854 9.40266 68.4854 10.5973 67.6413 10.9303L64.6668 12.1034C64.409 12.205 64.205 12.409 64.1034 12.6668L62.9303 15.6413C62.5973 16.4854 61.4027 16.4854 61.0697 15.6413L59.8966 12.6668C59.795 12.409 59.591 12.205 59.3332 12.1034L56.3587 10.9303C55.5146 10.5973 55.5146 9.40266 56.3587 9.06974L59.3332 7.8966C59.591 7.79496 59.795 7.59095 59.8966 7.33323L61.0697 4.35872Z"
              fill="#64647A"
            />
            <path
              opacity="0.2"
              d="M7.06974 5.35872C7.40266 4.51457 8.59734 4.51457 8.93026 5.35872L10.1034 8.33323C10.205 8.59095 10.409 8.79496 10.6668 8.8966L13.6413 10.0697C14.4854 10.4027 14.4854 11.5973 13.6413 11.9303L10.6668 13.1034C10.409 13.205 10.205 13.409 10.1034 13.6668L8.93026 16.6413C8.59734 17.4854 7.40266 17.4854 7.06974 16.6413L5.8966 13.6668C5.79496 13.409 5.59095 13.205 5.33323 13.1034L2.35872 11.9303C1.51457 11.5973 1.51457 10.4027 2.35872 10.0697L5.33323 8.8966C5.59095 8.79496 5.79496 8.59095 5.8966 8.33323L7.06974 5.35872Z"
              fill="#64647A"
            />
          </svg>
        );
      case "rounded-star":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 20.9375L11.3645 23.5L12.25 18.0725L8.5 14.2291L13.6823 13.4379L16 8.5L18.3177 13.4379L23.5 14.2291L19.75 18.0725L20.6355 23.5L16 20.9375Z"
              stroke="#6C48F0"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16Z"
              stroke="#6C48F0"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "star":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 20.9375L11.3645 23.5L12.25 18.0725L8.5 14.2291L13.6823 13.4379L16 8.5L18.3177 13.4379L23.5 14.2291L19.75 18.0725L20.6355 23.5L16 20.9375Z"
              stroke="#FDAF4D"
              strokeWidth="2"
              strokeLinejoin="round"
              fill="#FDAF4D"
            />
          </svg>
        );
      case "arrow-down":
        return (
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1L8.33333 9L1 0.999999"
              stroke="#0E1B2C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "arrow-left":
        return (
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.71428 11L0.999993 6.2381L6.71428 1"
              stroke="#FF7361"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "arrow-right":
        return (
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6.71429 5.7619L1 11"
              stroke="#FF7361"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "menu":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <g clipPath="url(#clip0_1_804)">
              <path
                d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_804">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "quote":
        return (
          <svg
            width="33"
            height="22"
            viewBox="0 0 33 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.0268314 14.2425C0.0232656 14.3373 0.0214669 14.4326 0.0214669 14.5283C0.0214665 18.6548 3.36666 22 7.49316 22C11.6197 22 14.9648 18.6548 14.9648 14.5283C14.9648 10.4018 11.6197 7.05662 7.49316 7.05662C6.73001 7.05662 5.99359 7.17103 5.3001 7.38364C6.81694 4.06868 11.3772 1.11105 13.5806 -0.0015527C2.06863 2.26762 -0.255894 10.445 0.0208356 14.25L0.0268314 14.2425Z"
              fill="#226CF5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.0483 14.2419C18.0448 14.3369 18.043 14.4324 18.043 14.5283C18.043 18.6548 21.3881 22 25.5146 22C29.6411 22 32.9863 18.6548 32.9863 14.5283C32.9863 10.4018 29.6411 7.05662 25.5146 7.05662C24.7513 7.05662 24.0147 7.1711 23.321 7.38382C24.8378 4.06879 29.3981 1.11107 31.6016 -0.0015527C20.0896 2.26762 17.7651 10.445 18.0418 14.25L18.0483 14.2419Z"
              fill="#226CF5"
            />
          </svg>
        );
    }
  };
  return <>{getSvg(type)}</>;
};

export default SvgLib;
