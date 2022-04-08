import "../asset/css/globals.css";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("../components/Treemap"), {
  ssr: false,
});
function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
