import dynamic from "next/dynamic";
import url from "../static"
const Treemap = dynamic(() => import("../components/Treemap"), { ssr: false });

// import Treemap from "../components/Treemap";
const Heatmap = ({ data }) => {
  return <div className="mt-20 w-full">{data && <Treemap data={data} />}</div>;
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/api/v1/stock-heatmap/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Heatmap;
