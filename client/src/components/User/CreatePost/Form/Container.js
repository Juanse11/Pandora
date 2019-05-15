import React from "react";
import { withRouter } from "react-router-dom";
import Form from "./Form";
import API from "../../../../api/api";
import { storage } from "../../../firebase/firebase";

class FormContainer extends React.Component {
  state = {
    title: "",
    address: "",
    coordinates: [],
    pictures: [],
    sellerID: 201,
    sports: ["Futsal"],
    price: "",
    city: "Barranquilla"
  };

  onChange = (e, data) => {
    const field = data.name;
    const value = data.checked || data.value;
    this.setState(() => ({ [field]: value }));
    console.log(this.state);
  };

  onFilesChange = (e, data) => {
    const field = data.name;
    const files = Array.from(e.target.files);
    this.setState(() => ({ [field]: files }));
    console.log(this.state);
  };
  onSubmit = async e => {
    e.preventDefault();
    Promise.all(
      this.state.pictures.map(picture =>
        this.putStorageItem(picture.name, picture)
      )
    )
      .then(async url => {
        console.log(url);
        const pictures = url;
        const services = ["Parqueaderos"];
        const sellerID = 201;
        const response = await API.post(`posts`, {
          ...this.state,
          pictures,
          services,
          sellerID
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log("fail");
      });
  };

  onCoordinatesChange = coordinates => {
    this.setState({ coordinates });
  };

  putStorageItem = (name, item) => {
    // the return value will be a Promise
    return storage
      .ref(name)
      .put(item)
      .then(async snapshot => {
        const url = await snapshot.ref.getDownloadURL();
        return url;
      })
      .catch(error => {
        console.log("One failed:", item, error.message);
      });
  };

  render() {
    return (
      <Form
        onCoordinatesChange={this.onCoordinatesChange}
        onChange={this.onChange}
        onFilesChange={this.onFilesChange}
        onSubmit={this.onSubmit}
        coordinates={this.state.coordinates}
      />
    );
  }
}

export default FormContainer;
