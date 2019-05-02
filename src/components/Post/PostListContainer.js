import React from "react";

import PostList from "./PostList";

class PostListContainer extends React.Component {
  state = {
    items: [],
    isLoading: false
  };

  componentDidMount() {

    this.handleLoadingClick();
  }

  handleLoadingClick = () => {
    const items = this.fetchPlaceholderItems()
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
    return <PostList {...this.state} />;
  }
}

export default PostListContainer;
