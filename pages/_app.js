import React from "react";
import App from "next/app";
import "./_app.scss";

// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import { initStore } from '../redux/store';

// import moment from 'moment';
import Head from "next/head";

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
      <>
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-161836138-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-161836138-1');
              
              `
            }}
          ></script>
          }}
        </Head>
        {/* <Provider store={store}> */}
        <Component {...pageProps} />
        {/* //{" "} */}
        {/* </Provider> */}
      </>
    );
  }
}

export default MyApp;
