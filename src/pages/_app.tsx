import type { ReactNode } from "react";
import type { AppProps } from "../plugins/layouts";
import useNProgress from "../plugins/nprogress";
import { ThemeProvider as Theme } from "next-themes";
import "../styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  useNProgress();
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <Theme enableColorScheme={false} attribute="class">
      {getLayout(<Component {...pageProps} />)}
    </Theme>
  );
};

export default App;
