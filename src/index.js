import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import AppRouter from "./App";
import configureStore from './store/configureStore'

import "semantic-ui-css/semantic.min.css";
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import 'react-dates/lib/css/_datepicker.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/index.css";
import "normalize.css/normalize.css";


const store = configureStore()
console.log(store.getState())
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));
