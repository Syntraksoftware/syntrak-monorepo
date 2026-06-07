import type { SVGProps } from "react";
import type React from "react";

type LogoProps = SVGProps<SVGSVGElement>;

function OpenAILogo(props: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14.077 6.73a3.447 3.447 0 0 0-.304-2.865 3.593 3.593 0 0 0-3.85-1.692A3.557 3.557 0 0 0 7.257 1a3.571 3.571 0 0 0-3.41 2.442 3.534 3.534 0 0 0-2.364 1.692 3.492 3.492 0 0 0 .44 4.136 3.447 3.447 0 0 0 .303 2.865 3.593 3.593 0 0 0 3.85 1.692A3.554 3.554 0 0 0 8.744 15a3.571 3.571 0 0 0 3.411-2.444 3.533 3.533 0 0 0 2.364-1.692 3.492 3.492 0 0 0-.44-4.135l-.001.001Zm-5.333 7.355a2.671 2.671 0 0 1-1.702-.607c.021-.011.059-.032.083-.047l2.826-1.61a.452.452 0 0 0 .232-.397v-3.93l1.194.68a.041.041 0 0 1 .023.033v3.254c-.002 1.448-1.19 2.621-2.656 2.624ZM3.03 11.677a2.583 2.583 0 0 1-.317-1.757l.084.049 2.825 1.61c.143.083.32.083.464 0l3.45-1.965v1.36a.043.043 0 0 1-.017.037l-2.856 1.627c-1.272.723-2.897.293-3.632-.96Zm-.743-6.085c.31-.532.8-.939 1.383-1.15V7.758c-.002.164.087.316.231.397l3.45 1.965-1.195.68a.043.043 0 0 1-.04.004L3.26 9.175a2.608 2.608 0 0 1-.973-3.582Zm9.81 2.253L8.648 5.88l1.195-.68a.043.043 0 0 1 .04-.004l2.857 1.627a2.606 2.606 0 0 1 .972 3.585c-.31.531-.8.938-1.383 1.15V8.241a.452.452 0 0 0-.23-.396h-.001Zm1.188-1.765a4.119 4.119 0 0 0-.083-.05l-2.826-1.61a.465.465 0 0 0-.464 0l-3.45 1.966v-1.36c0-.015.007-.028.018-.037l2.856-1.626c1.272-.724 2.898-.293 3.631.963.31.53.422 1.15.317 1.754h.001ZM5.815 8.505l-1.195-.68a.041.041 0 0 1-.023-.033V4.538c.001-1.45 1.192-2.624 2.661-2.623a2.68 2.68 0 0 1 1.7.608 1.987 1.987 0 0 0-.084.046L6.05 4.18a.451.451 0 0 0-.232.397l-.002 3.928v.001Zm.648-1.38L8 6.25l1.536.875v1.75L8 9.75l-1.537-.875v-1.75Z"
      />
    </svg>
  );
}

function AnthropicLogo(props: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M10.961 3.13H8.848l3.854 9.74h2.114L10.96 3.13Zm-6.106 0L1 12.87h2.155l.789-2.046h4.032l.789 2.046h2.155L7.065 3.13h-2.21ZM4.64 9.016 5.96 5.593l1.319 3.423H4.641Z"
      />
    </svg>
  );
}

function PerplexityLogo(props: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5.188V4.03l3.003-2.92.848-.826v4.43h1.608v6.558h-1.608V15.745l-.855-.861L8.5 11.866v3.947h-1v-3.947l-2.996 3.018-.855.86v-4.471h-1.61V4.715h1.61V.285l.848.825L7.5 4.031V.188h1Zm.205 10.464 2.646 2.666v-2.514a.451.451 0 0 1 0-.062V9.333l-2.85-2.897v4.008l.206.206-.002.002Zm.488-4.937 3.014 3.063.144.146v1.349h.608V5.715H9.193Zm2.158-3.062v2.062h-2.12l2.12-2.062Zm-6.702 0 2.12 2.062h-2.12V2.653Zm-1 3.062h-.61v4.558h.61V8.924l.143-.146 3.015-3.063H3.649Zm3.851.72v4.011L4.65 13.318V9.334L7.5 6.436Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MistralLogo(props: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.454 1.709h-1.272v2.545h1.272V1.71Zm-10.181 0H1V14.436h1.273V1.71Zm6.364 2.545h1.272V6.8H8.637V4.254ZM7.363 9.345H6.091v2.546h1.272V9.345Zm3.82 0h1.271V14.436h-1.272V9.345Z"
        clipRule="evenodd"
        opacity={0.25}
      />
      <path fill="currentColor" d="M12.455 11.89H15v2.546h-2.545v-2.545Zm-10.182 0h2.545v2.546H2.273v-2.545Z" opacity={0.4} />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.818 9.346H2.273v2.545h2.545V9.346Zm2.545 0H9.91v2.545H7.363V9.346Zm5.091 0H15v2.545h-2.546V9.346Z"
        clipRule="evenodd"
        opacity={0.55}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 6.8h-2.545v2.545H15V6.8Zm-10.182 0H2.273v2.545h10.181V6.8H4.818Z"
        clipRule="evenodd"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 4.255h-2.545V6.8H15V4.255Zm-10.182 0H2.273V6.8h5.09V4.255H4.818Zm7.636 0H9.91V6.8h2.545V4.255Z"
        clipRule="evenodd"
        opacity={0.85}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.818 1.709H2.273v2.545h2.545V1.71Zm10.182 0h-2.546v2.545H15V1.71Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function GoogleLogo(props: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <g clipPath="url(#google-logo-clip)">
        <path
          fill="currentColor"
          d="M5.648.764a7.658 7.658 0 0 0 .524 14.632 8.182 8.182 0 0 0 3.917.042 6.914 6.914 0 0 0 3.134-1.629 6.951 6.951 0 0 0 1.936-3.178 8.996 8.996 0 0 0 .195-4.064H8.151v2.988h4.172a3.597 3.597 0 0 1-1.532 2.362 4.377 4.377 0 0 1-1.686.666 4.994 4.994 0 0 1-1.828 0 4.496 4.496 0 0 1-1.7-.742 4.756 4.756 0 0 1-1.755-2.35 4.636 4.636 0 0 1 0-2.981 4.75 4.75 0 0 1 1.111-1.804 4.498 4.498 0 0 1 4.532-1.184c.619.19 1.184.521 1.651.968.47-.468.94-.937 1.409-1.407.242-.253.506-.494.744-.753A7.41 7.41 0 0 0 10.805.81 7.745 7.745 0 0 0 5.648.764Z"
        />
      </g>
      <defs>
        <clipPath id="google-logo-clip">
          <path fill="currentColor" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function XaiLogo(props: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.006 1 7.895 9.727 6.418 7.62 11.053 1h2.953ZM5.68 12.891 4.203 15H1.25l2.953-4.218 1.477 2.11ZM7.895 15h2.953L4.203 5.51H1.25L7.895 15Zm3.692-9.49 2.419-3.455L13.764 15h-1.935l-.242-9.49Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BasetenLogo(props: LogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M5.75 10C10 10 10 5.75 10 5.75S10 10 14.25 10C10 10 10 14.25 10 14.25S10 10 5.75 10ZM4 1.75S4 4 1.75 4C4 4 4 6.25 4 6.25S4 4 6.25 4C4 4 4 1.75 4 1.75Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.75 10C10 10 10 5.75 10 5.75S10 10 14.25 10C10 10 10 14.25 10 14.25S10 10 5.75 10ZM4 1.75S4 4 1.75 4C4 4 4 6.25 4 6.25S4 4 6.25 4C4 4 4 1.75 4 1.75Z"
      />
    </svg>
  );
}

export type AiProvider = {
  name: string;
  Logo: (props: LogoProps) => React.ReactElement;
};

export const proPlanProviders: AiProvider[] = [
  { name: "OpenAI", Logo: OpenAILogo },
  { name: "Anthropic", Logo: AnthropicLogo },
  { name: "Perplexity", Logo: PerplexityLogo },
  { name: "Mistral", Logo: MistralLogo },
  { name: "Google", Logo: GoogleLogo },
  { name: "xAI", Logo: XaiLogo },
  { name: "Baseten", Logo: BasetenLogo },
];

export const advancedPlanProviders: AiProvider[] = [
  { name: "OpenAI", Logo: OpenAILogo },
  { name: "Anthropic", Logo: AnthropicLogo },
  { name: "Perplexity", Logo: PerplexityLogo },
  { name: "Mistral", Logo: MistralLogo },
  { name: "Google", Logo: GoogleLogo },
  { name: "xAI", Logo: XaiLogo },
];

export function AiProviderLogoRow({ providers }: { providers: AiProvider[] }) {
  return (
    <div className="pricing-plan-models-list">
      {providers.map(({ name, Logo }) => (
        <div key={name} className="pricing-plan-models-group">
          <Logo className="pricing-plan-models-icon" />
          <span>{name}</span>
        </div>
      ))}
      <span className="pricing-plan-models-more">and more</span>
    </div>
  );
}
