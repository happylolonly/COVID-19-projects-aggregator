import React from "react";
import App from "next/app";
import "./_app.scss";

// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import { initStore } from '../redux/store';

// import moment from 'moment';

// moment.locale('ru');

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount() {}

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      //   <Provider store={store}>
      <Component {...pageProps} />
      //   </Provider>
    );
  }
}

export default MyApp;
