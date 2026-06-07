import Image from "next/image";

const SYNTRAK_LOGO_SRC = "/logos/white_logo.png";

export function RaycastLogoIcon({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src={SYNTRAK_LOGO_SRC}
      alt="Syntrak"
      width={132}
      height={32}
      className={className}
    />
  );
}

export function RaycastLogoFull({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <Image
      src={SYNTRAK_LOGO_SRC}
      alt="Syntrak"
      width={132}
      height={32}
      className={className}
    />
  );
}

export function AppleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.665 15.358c-.905.844-1.893.711-2.843.311-1.006-.409-1.93-.427-2.991 0-1.33.551-2.03.391-2.825-.31C-.498 10.886.166 4.078 5.28 3.83c1.246.062 2.114.657 2.843.71 1.09-.213 2.133-.826 3.296-.746 1.393.107 2.446.64 3.138 1.6-2.88 1.662-2.197 5.315.443 6.337-.526 1.333-1.21 2.657-2.345 3.635zM8.03 3.778C7.892 1.794 9.563.16 11.483 0c.268 2.293-2.16 4-3.452 3.777"
      />
    </svg>
  );
}

export function WindowsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 0h7.584v7.584H0zm8.416 0h7.583v7.584H8.416zm-.832 8.416H0V16h7.584zm.832 0h7.583V16H8.416z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.75 4.75 13.25 8m0 0-3.5 3.25M13.25 8H2.75"
      />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.75 3.75 10.25 8l-4.5 4.25"
      />
    </svg>
  );
}
