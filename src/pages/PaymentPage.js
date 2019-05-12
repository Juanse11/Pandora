import React from "react";
import NavBar from '../components/shared/NavBar'
import Payment from '../components/Payment/Content'
import Footer from "../components/shared/Footer";
export default class PostPage extends React.Component {
 
  render() {
    return (
        <div>
          <NavBar>
            <Payment />
          </NavBar>
          <Footer />
        </div>
    );
  }
}
