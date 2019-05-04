import React from "react";

import SearchResults from "./SearchResults";

class SearchResultsContainer extends React.Component {
  state = {
    items: [],
    isLoading: false,
    isBlockLayout: true,
    isListLayout: false
  };

  componentDidMount() {
    this.handleLoadingClick();
  }

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
        title: "Eladas- Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://wallpapercave.com/wp/V0ANDHu.jpg",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://wallpapercave.com/wp/V0ANDHu.jpg",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://wallpapercave.com/wp/V0ANDHu.jpg",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
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

  fetchPlaceholderItems = () => {
    const items = [
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
        title: "Spurs New Stadium - Soledad",
        price: "300,000",
        rating: 5,
        image:
          "https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100",
        sport: "Futbol"
      },
      {
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
        handleBlockSelection={this.handleBlockSelection}
        handleListSelection={this.handleListSelection}
      />
    );
  }
}

export default SearchResultsContainer;
