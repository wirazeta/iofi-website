import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SelamatPagiProvider } from "@/context/SelamatPagiContext";
import PageLayout from "@/components/layout/PageLayout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Videos from "@/pages/Videos";
import Shorts from "@/pages/Shorts";
import Songs from "@/pages/Songs";
import Tweets from "@/pages/Tweets";
import IoArts from "@/pages/IoArts";
import Clips from "@/pages/Clips";

function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <SelamatPagiProvider>
          <ScrollToTop />
          <Routes>
            <Route element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path="videos" element={<Videos />} />
              <Route path="shorts" element={<Shorts />} />
              <Route path="songs" element={<Songs />} />
              <Route path="tweets" element={<Tweets />} />
              <Route path="ioarts" element={<IoArts />} />
              <Route path="clips" element={<Clips />} />
            </Route>
          </Routes>
        </SelamatPagiProvider>
      </TooltipProvider>
    </BrowserRouter>
  );
}

export default App;
