import "../styles/_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <div id="root" className="antialiased text-gray-900">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
