import type { ReactNode } from "react";
import type { AppProps } from "../plugins/layouts";
import useNProgress from "../plugins/nprogress";
import { ThemeProvider as Theme } from "next-themes";
import MDX from "../plugins/md";
import "../styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  useNProgress();
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <Theme enableColorScheme={false} attribute="class">
      <MDX>{getLayout(<Component {...pageProps} />)}</MDX>
    </Theme>
  );
};

export default App;
