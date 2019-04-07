import React from "react";
import HomePageContainer from "../components/Home/HomePageContainer";
import AboutSection from "../components/Home/AboutSection";
import DiscoverSection from "../components/Home/DiscoverSection";
import MeetSection from '../components/Home/MeetSection'
import SportsSection from '../components/Home/SportsSection'
import TopItemsSection from "../components/Home/TopItemsSection";
import Footer from "../components/general/footer";

export default class HomePage extends React.Component {
  state = {
    items: []
  };

  render() {
    return (
      <HomePageContainer>
        <AboutSection />
        <MeetSection />
        <SportsSection />
        <TopItemsSection />
        <Footer />
      </HomePageContainer>
    );
  }
}
