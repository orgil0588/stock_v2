
import dynamic from "next/dynamic";
import url from "../../static"
// import Chart from "../../components/Chart"
const Chart = dynamic(() => import("../../components/Chart"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});
const StockDetail = ({ data }) => {
  console.log(data);
  let priceData = [];
  let volumeData = [];
  let highLimit = [];
  let lowLimit = [];
  let ticker = "";
  data.data.map((e, i) => {
    priceData.push({
      time: e.date,
      open: e.open,
      high: e.high,
      low: e.low,
      close: e.close,
    });
    volumeData.push({
      time: e.date,
      value: e.volume / 100,
    });
    highLimit.push({
      time: e.date,
      value:
        i !== 0
          ? data.data[i - 1].close * 0.15 + data.data[i - 1].close
          : data.data[i].close * 0.15 + data.data[i].close,
    });
    lowLimit.push({
      time: e.date,
      value:
        i !== 0
          ? data.data[i - 1].close - 0.15 * data.data[i - 1].close
          : data.data[i].close - 0.15 * data.data[i].close,
    });
    ticker = data.data[0].ticker;
  });

  return (
    <div className="h-screen">
      <Chart
        priceData={priceData}
        volumeData={volumeData}
        highLimit={highLimit}
        lowLimit={lowLimit}
        ticker={ticker}
      />
      <div className="absolute top-20 z-50 left-1/2 -translate-x-1/2  text-gray-300 text-sm">
        <div className="flex space-x-4">
          <div>{data.data[data.data.length - 1].date}</div>
          <div>
            Нээлт : <span>{data.data[data.data.length - 1].open}</span>
          </div>
          <div>
            Дээд : <span>{data.data[data.data.length - 1].high}</span>
          </div>
          <div>
            Доод : <span>{data.data[data.data.length - 1].low}</span>
          </div>
          <div>
            Хаалт : <span>{data.data[data.data.length - 1].close}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-20 left-10 z-50">
        <div className="flex items-center space-x-4 text-white font-medium mb-4 text-sm">
          <div className="text-green-600 rounded font-bold">- - - - -</div>
          <div>Ханшийн дээд хязгаар</div>
        </div>
        <div className="flex items-center space-x-4 text-white font-medium mb-4 text-sm">
          <div className="text-red-600 rounded font-bold">- - - - -</div>
          <div>Ханшийн доод хязгаар</div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `http://68.183.176.100:8000/api/v1/trade-history/${params.ticker}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default StockDetail;
