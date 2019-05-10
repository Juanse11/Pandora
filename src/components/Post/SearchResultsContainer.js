import React from "react";
import { withRouter } from "react-router-dom";
import SearchResults from "./SearchResults";

class SearchResultsContainer extends React.Component {
  state = {
    items: [],
    isLoading: false,
    isBlockLayout: true,
    isListLayout: false,
    selectedPark: {
      id: "",
      coordinates: []
    }
  };

  componentDidMount() {
    this.handleLoadingClick();
  }

  handleGoToPostPage = postID => {
    window.open(`/post/${postID}`);
  };

  handleSelectedPark = selectedPark => {
    this.setState({ selectedPark });
  };

  handleBlockSelection = () => {
    this.setState({ isBlockLayout: true });
    this.setState({ isListLayout: false });
  };

  handleListSelection = () => {
    this.setState({ isBlockLayout: false });
    this.setState({ isListLayout: true });
  };

  handleLoadingClick = () => {
    const items = this.fetchPlaceholderItems();
    this.setState({ isLoading: true, items });
    setTimeout(async () => {
      const items = this.fetchItems();
      await this.setState(() => ({ items, isLoading: false }));
    }, 1000);
  };
  fetchItems = () => {
    const items = [
      {
        id: 960,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.3372987731628, 45.383321536272049]
      },
      {
        id: 1219,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.546518086577947, 45.467134581917357]
      },
      {
        id: 1157,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.898610599532319, 45.295014379864874]
      },
      {
        id: 9,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.468561642270757, 45.23032561834377]
      },
      {
        id: 1160,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.926651366520872, 45.260659774950561]
      },
      {
        id: 1693,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.760933332842754, 45.345566668964558]
      },
      {
        id: 1717,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.625996131485707, 45.375401587496128]
      },
      {
        id: 137,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.857009812435976, 45.290758029776626]
      },
      {
        id: 1133,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-76.206087708136721, 45.470459866077654]
      },
      {
        id: 657,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.760235255689508, 45.280622216516925]
      },
      {
        id: 653,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 812,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.60118478829267, 45.147641950106689]
      },
      {
        id: 2457,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.609516309730921, 45.314086718258636]
      },
      {
        id: 812,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol",
        coordinates: [-75.703622500360268, 45.408488357092367]
      }
    ];
    return items;
  };

  fetchPlaceholderItems = () => {
    const items = [
      {
        id: 960,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1219,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1157,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 9,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1160,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1693,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1717,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 137,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 1133,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 657,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 653,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 812,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 2457,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        id: 812,
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      }
    ];
    return items;
  };

  render() {
    return (
      <SearchResults
        {...this.state}
        handleGoToPostPage={this.handleGoToPostPage}
        handleSelectedPark={this.handleSelectedPark}
        handleBlockSelection={this.handleBlockSelection}
        handleListSelection={this.handleListSelection}
      />
    );
  }
}

export default withRouter(SearchResultsContainer);
