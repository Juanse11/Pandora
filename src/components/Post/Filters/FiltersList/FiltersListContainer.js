import React from "react";
import FiltersList from "./FiltersList";
import SportFilter from "../SportFIlter/Container"
import DateFilter from '../DateFilter/Container'
import RatingFilter from '../RatingFilter/Container'
// import PriceFilter from '../PriceFilter/Container'
// import SortFilter from '../SortFilter/Container'
// import TypeFilter from '../TypeFilter/Container'


export default class FiltersListContainer extends React.Component {
  state = {
    filters: [
      {
        name: "Fecha",
        component: <DateFilter />
      },
      {
        name: "Deporte",
        component: <SportFilter />
      },
      {
        name: "Calificacion",
        component: <RatingFilter />
      },{
        name: "Precio",
        component: <RatingFilter />
      },{
        name: "Tipo",
        component: <RatingFilter />
      },{
        name: "Orden",
        component: <RatingFilter />
      }
    ],
    fecha: undefined,
    createdAt: undefined,
    calendarFocused: false
  };

  onDateChange = createdAt => {
    if (createdAt) {
      console.log(createdAt)
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    return <FiltersList filters={this.state.filters} createdAt={this.state.createdAt} onDateChange={this.onDateChange} onFocusChange={this.onFocusChange} calendarFocused={this.state.calendarFocused}  />;
  }
}
