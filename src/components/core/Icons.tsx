import Image from "next/image";

interface IconProps {
  label?: string;
}

const OptionsIcon = (props: IconProps) => {
  return (
    <>
      <span className="sr-only">{props.label || "Options"}</span>
      <svg width="24" height="24" fill="none" aria-hidden="true">
        <path
          d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

const CloseIcon = (props: IconProps) => {
  return (
    <>
      <span className="sr-only">{props.label || "Close"}</span>
      <svg
        viewBox="0 0 10 10"
        className="h-2.5 w-2.5 overflow-visible"
        aria-hidden="true"
      >
        <path
          d="M0 0L10 10M10 0L0 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

const GithubIcon = (props: IconProps) => {
  return (
    <>
      <span className="sr-only">{props.label || "View on GitHub"}</span>
      <svg
        viewBox="0 0 16 16"
        width="24"
        height="24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    </>
  );
};

const MLOneIcon = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src="/logo.png" alt="MLOne Logo" width={32} height={32}></Image>
      <span className="pl-2 text-xl">
        Machine Learning <span className="font-light">One</span>
      </span>
    </div>
  );
};

const PatternIcon = () => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" className="h-6 w-6">
      <path
        d="M8 20H4.73A1.974 1.974 0 0 0 3 19a2 2 0 0 0 0 4a1.974 1.974 0 0 0 1.73-1H8z"
        fill="currentColor"
      ></path>
      <path
        d="M29 9a1.974 1.974 0 0 0-1.73 1H24v2h3.27A2 2 0 1 0 29 9z"
        fill="currentColor"
      ></path>
      <path
        d="M25.414 5L21 .586L16.586 5L20 8.414V18h2V8.414zM21 3.414L22.586 5L21 6.586L19.414 5z"
        fill="currentColor"
      ></path>
      <path
        d="M12 23.586V14h-2v9.586L6.586 27L11 31.414L15.414 27zM9.414 27L11 25.414L12.586 27L11 28.586z"
        fill="currentColor"
      ></path>
      <path
        d="M18 10H8.414L5 6.586L.586 11L5 15.414L8.414 12H18zM5 12.586L3.414 11L5 9.414L6.586 11z"
        fill="currentColor"
      ></path>
      <path
        d="M13 3a2 2 0 0 0-4 0a1.973 1.973 0 0 0 1 1.73V8h2V4.73A1.973 1.973 0 0 0 13 3z"
        fill="currentColor"
      ></path>
      <path d="M22 27.27V24h-2v3.27a2 2 0 1 0 2 0z" fill="currentColor"></path>
      <path
        d="M31.414 21L27 16.586L23.586 20H14v2h9.586L27 25.414zM27 19.414L28.586 21L27 22.586L25.414 21z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export { OptionsIcon, CloseIcon, GithubIcon, MLOneIcon, PatternIcon };
