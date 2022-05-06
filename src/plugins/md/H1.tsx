import { ReactNode } from "react";

interface H1Props {
  children?: ReactNode;
}
const H1 = ({ children }: H1Props) => {
  return (
    <h1 className="mb-12 text-center text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
      {children}
    </h1>
  );
};

export default H1;
