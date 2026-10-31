/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomNav from './components/MobileBottomNav';

// Critical landing page kept immediate
import Home from './pages/Home';

// Secondary routes lazy-loaded on demand for lightning-fast initial page load
const Photography = lazy(() => import('./pages/Photography'));
const CommercialProductPhotography = lazy(() => import('./pages/CommercialProductPhotography'));
const EventPhotography = lazy(() => import('./pages/EventPhotography'));
const WeddingPhotography = lazy(() => import('./pages/WeddingPhotography'));
const EngagementPhotography = lazy(() => import('./pages/EngagementPhotography'));
const PreWeddingPhotography = lazy(() => import('./pages/PreWeddingPhotography'));
const Videography = lazy(() => import('./pages/Videography'));
const BrandVideos = lazy(() => import('./pages/BrandVideos'));
const CommercialAds = lazy(() => import('./pages/CommercialAds'));
const ProductVideos = lazy(() => import('./pages/ProductVideos'));
const AIVideoGeneration = lazy(() => import('./pages/AIVideoGeneration'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const ContentCreation = lazy(() => import('./pages/ContentCreation'));
const SocialMediaMarketing = lazy(() => import('./pages/SocialMediaMarketing'));
const Designing = lazy(() => import('./pages/Designing'));
const PackagingDesign = lazy(() => import('./pages/PackagingDesign'));
const TShirtDesign = lazy(() => import('./pages/TShirtDesign'));
const SignageDesign = lazy(() => import('./pages/SignageDesign'));
const ProductPrints = lazy(() => import('./pages/ProductPrints'));
const BrandingVisualIdentity = lazy(() => import('./pages/BrandingVisualIdentity'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

// Ultra-lightweight, non-blocking top progress bar fallback during route transitions
const RouteFallback = () => (
  <div className="fixed top-0 left-0 right-0 z-[999] h-0.5 bg-brand-charcoal overflow-hidden">
    <div className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light animate-pulse w-full" />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-brand-black pb-24 md:pb-0">
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/commercial-product-photography" element={<CommercialProductPhotography />} />
              <Route path="/event-photography" element={<EventPhotography />} />
              <Route path="/wedding-photography" element={<WeddingPhotography />} />
              <Route path="/engagement-photography" element={<EngagementPhotography />} />
              <Route path="/pre-wedding-photography" element={<PreWeddingPhotography />} />
              <Route path="/videography" element={<Videography />} />
              <Route path="/brand-videos" element={<BrandVideos />} />
              <Route path="/commercial-ads" element={<CommercialAds />} />
              <Route path="/product-videos" element={<ProductVideos />} />
              <Route path="/ai-video-generation" element={<AIVideoGeneration />} />
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
          </Suspense>
        </div>
        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  );
}
