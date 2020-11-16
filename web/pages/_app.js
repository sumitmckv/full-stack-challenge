import React from "react";
import "../styles/_app.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div id="root" className="antialiased text-gray-900">
      <NavBar />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
