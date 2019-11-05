import React from "react";
import { Provider } from "react-redux";
import { STORE } from "./store";
import MainApp from "./routes";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={STORE}>
        <MainApp />
      </Provider>
    );
  }
}
