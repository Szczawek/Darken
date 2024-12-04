import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./roots/Home"));
const NotFound = lazy(() => import("./roots/NotFound"));
const ErrorComponent = lazy(() => import("./roots/ErrorComponent"));
const WatchWindow = lazy(() => import("./home/WatchWindow"));
export default function App() {
  useEffect(() => {
    async function isServerWorking() {
      try {
        const res = await fetch(`${process.env.VITE_URL}`);
        if (!res.ok) throw res.status;
        const msg = await res.text();
        console.log(msg);
      } catch (err) {
        console.error(err);
      } finally {
      }
    }
    isServerWorking();
  }, []);

  return (
    <div className="app">
      <Suspense fallback={<p className="loadig-route">Loading ...</p>}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="*" element={<WatchWindow />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
