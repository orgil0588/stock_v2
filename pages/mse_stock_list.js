import StockInfo from "../components/StockInfo";
import url from "../static"
const StockDetail = ({ data }) => {
  return (
    <main className="container mx-auto mt-20">
      <StockInfo data={data} />
    </main>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/api/v1/stock-info/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default StockDetail;
