import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

const useNProgress = () => {
  const router = useRouter();
  const start = () => {
    NProgress.start();
  };
  const done = () => {
    NProgress.done();
  };
  useEffect(() => {
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, [router]);
};

export default useNProgress;
