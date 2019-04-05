import React from "react";
import HomePageContainer from './HomePageContainer'
import AboutSection from './sections/AboutSection'
import DiscoverSection from './sections/DiscoverSection'
import TopItemsSection from './sections/TopItemsSection'
import Footer from '../general/footer'

const HomepageLayout = () => (
  <HomePageContainer>
    <AboutSection />
    <DiscoverSection />
    <TopItemsSection />
    <Footer />
  </HomePageContainer>
);

;
export default HomepageLayout;
