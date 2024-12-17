import "./styles.css";
import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./roots/Home"));
const NotFound = lazy(() => import("./roots/NotFound"));
const Navigation = lazy(() => import("./roots/Navigation"));
const SearchForVideo = lazy(() => import("./roots/SearchForVideo"));
const UserPanel = lazy(() => import("./roots/UserPanel"));

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
          <Navigation />
          <Routes>
            <Route>
              <Route index element={<Home />} />
              <Route path="/user-panel" element={<UserPanel />} />
              <Route path="/video" element={<SearchForVideo />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
