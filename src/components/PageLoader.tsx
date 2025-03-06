import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const PageLoader: React.FC = () => {

  useEffect(() => {
    NProgress.start();
    setTimeout(() => NProgress.done(), 500);

    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

export default PageLoader;