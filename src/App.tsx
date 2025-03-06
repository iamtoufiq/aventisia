import { lazy, Suspense } from "react";

import LoadingSpinner from "./components/LoadingSpinner";
import PageLoader from "./components/PageLoader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
function App() {
  return (
    <>
      <PageLoader />
      <Suspense fallback={<LoadingSpinner />}>
        <Dashboard />
      </Suspense>
    </>
  );
}

export default App;
