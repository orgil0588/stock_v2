import React, { useState } from "react";
import Link from "next/link";
const StockInfo = ({ data }) => {
  const [sort, setSort] = useState("default");

  if (sort === "default") {
    data.data.sort(
      (a, b) =>
        parseInt(b.market_cap.split(",").join("")) -
        parseInt(a.market_cap.split(",").join(""))
    );
  } else if (sort === "company") {
    data.data.sort((a, b) => a.ticker.localeCompare(b.ticker));
  } else if (sort === "close") {
    data.data.sort((a, b) => b.close - a.close);
  } else if (sort === "market_cap") {
    data.data.sort(
      (a, b) =>
        parseInt(b.market_cap.split(",").join("")) -
        parseInt(a.market_cap.split(",").join(""))
    );
  } else if (sort === "roa") {
    data.data.sort((a, b) => b.roa - a.roa);
  } else if (sort === "roe") {
    data.data.sort((a, b) => b.roe - a.roe);
  } else if (sort === "eps") {
    data.data.sort((a, b) => b.eps - a.eps);
  } else if (sort === "pe") {
    data.data.sort((a, b) => b.pe - a.pe);
  } else if (sort === "change") {
    data.data.sort((a, b) => b.change - a.change);
  }

  return (
    <table className="table text-sm text-left w-full mt-10">
      <thead className="border-b">
        <tr>
          <th className="py-2 px-2 cursor-pointer">№</th>
          <th
            onClick={() => setSort("company")}
            className="py-2 px-2 cursor-pointer"
          >
            Компани
          </th>
          <th
            onClick={() => setSort("close")}
            className="py-2 px-2 cursor-pointer"
          >
            Ханш
          </th>
          <th
            onClick={() => setSort("change")}
            className="py-2 px-2 cursor-pointer"
          >
            24Ц%
          </th>
          <th
            onClick={() => setSort("industry")}
            className="py-2 px-2 cursor-pointer"
          >
            Бизнесийн чиглэл
          </th>
          <th
            onClick={() => setSort("industry")}
            className="py-2 px-2 cursor-pointer"
          >
            Үйл ажиллагааны чиглэл
          </th>
          <th
            onClick={() => setSort("roa")}
            className="py-2 px-2 cursor-pointer"
          >
            ROA
          </th>
          <th
            onClick={() => setSort("roe")}
            className="py-2 px-2 cursor-pointer"
          >
            ROE
          </th>
          <th
            onClick={() => setSort("eps")}
            className="py-2 px-2 cursor-pointer"
          >
            EPS
          </th>
          <th
            onClick={() => setSort("pe")}
            className="py-2 px-2 cursor-pointer"
          >
            P/E
          </th>
          <th
            onClick={() => setSort("market_cap")}
            className="py-2 px-2 cursor-pointer text-right"
          >
            Үнэлгээ
          </th>
        </tr>
      </thead>

      <tbody>
        {data.data.map((el, idx) => {
          return (
            <tr key={el.id} className="border-b">
              <td className="py-2 px-2 text-xs">{idx + 1}</td>
              <Link href={`/symbols/${el.code}`}>
                <a>
                  <td className="flex items-center py-2">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                    <div className="flex flex-col px-2">
                      <span className="text-gray-900 font-semibold ">
                        {el.ticker}
                      </span>
                      <span className="text-gray-400 text-xs hover:text-blue-600">
                        {el.name}
                      </span>
                    </div>
                  </td>
                </a>
              </Link>
              <td className="py-2 px-2">{el.close + "₮"}</td>
              <td className="py-2 px-2">{el.change + "%"}</td>
              <td className="py-2 px-2">{el.industry}</td>
              <td className="py-2 px-2">{el.sector}</td>
              <td className="py-2 px-2">{el.roa ? el.roa : "-"}</td>
              <td className="py-2 px-2">{el.roe ? el.roe : "-"}</td>
              <td className="py-2 px-2">{el.eps ? el.eps : "-"}</td>
              <td className="py-2 px-2">{el["p/e"] ? el["p/e"] : "-"}</td>
              <td className="py-2 px-2 text-right">
                {el.market_cap.toLocaleString() + "₮"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StockInfo;
