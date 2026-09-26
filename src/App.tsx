/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Photography from './pages/Photography';
import ProductPhotography from './pages/ProductPhotography';
import CommercialPhotography from './pages/CommercialPhotography';
import EventPhotography from './pages/EventPhotography';
import WeddingPhotography from './pages/WeddingPhotography';
import EngagementPhotography from './pages/EngagementPhotography';
import PreWeddingPhotography from './pages/PreWeddingPhotography';
import Videography from './pages/Videography';
import BrandVideos from './pages/BrandVideos';
import CommercialAds from './pages/CommercialAds';
import ProductVideos from './pages/ProductVideos';
import DigitalMarketing from './pages/DigitalMarketing';
import ContentCreation from './pages/ContentCreation';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import Designing from './pages/Designing';
import PackagingDesign from './pages/PackagingDesign';
import TShirtDesign from './pages/TShirtDesign';
import SignageDesign from './pages/SignageDesign';
import ProductPrints from './pages/ProductPrints';
import BrandingVisualIdentity from './pages/BrandingVisualIdentity';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MobileBottomNav from './components/MobileBottomNav';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-black pb-24 md:pb-0">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/product-photography" element={<ProductPhotography />} />
            <Route path="/commercial-photography" element={<CommercialPhotography />} />
            <Route path="/event-photography" element={<EventPhotography />} />
            <Route path="/wedding-photography" element={<WeddingPhotography />} />
            <Route path="/engagement-photography" element={<EngagementPhotography />} />
            <Route path="/pre-wedding-photography" element={<PreWeddingPhotography />} />
            <Route path="/videography" element={<Videography />} />
            <Route path="/brand-videos" element={<BrandVideos />} />
            <Route path="/commercial-ads" element={<CommercialAds />} />
            <Route path="/product-videos" element={<ProductVideos />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/designing" element={<Designing />} />
            <Route path="/packaging-design" element={<PackagingDesign />} />
            <Route path="/t-shirt-design" element={<TShirtDesign />} />
            <Route path="/signage-design" element={<SignageDesign />} />
            <Route path="/product-prints" element={<ProductPrints />} />
            <Route path="/branding-visual-identity" element={<BrandingVisualIdentity />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  );
}
