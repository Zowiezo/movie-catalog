import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import SideBar from "./components/SideBar";
// import VideoModal from "./components/VideoModal";
// import ScrollToTop from "./components/ScrollToTop";
// import Loader from "./components/Loader";

// Lazy load pages
// const Catalog = lazy(() => import("./pages/Catalog"));
// const Home = lazy(() => import("./pages/Home"));
// const Detail = lazy(() => import("./pages/Detail"));
// const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Router>
      <VideoModal />
      <SideBar />
      <Header />
      <main className="lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0">
        <ScrollToTop>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/movie/:id" element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
