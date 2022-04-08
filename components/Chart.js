import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";

const Chart = (props) => {
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: "#131722",
        textColor: "rgba(255, 255, 255, 0.9)",
      },
      grid: {
        vertLines: {
          color: "#1C202B",
        },
        horzLines: {
          color: "#1C202B",
        },
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
      },
      watermark: {
        visible: true,
        text: `${props.ticker}`,
        fontSize: 48,
        color: "rgba(255, 255, 255, 0.2)",
        vertAlign: "center",
      },
    });

    const candleSeries = chart.current.addCandlestickSeries({
      upColor: "#26A69A",
      downColor: "#EF5350",
      borderDownColor: "#EF5350",
      borderUpColor: "#26A69A",
      wickDownColor: "#EF5350",
      wickUpColor: "#26A69A",
    });

    candleSeries.setData(props.priceData);

    const volumeSeries = chart.current.addHistogramSeries({
      color: "#3A4665",
      lineWidth: 2,
      priceFormat: {
        type: "volume",
      },
      overlay: true,
      scaleMargins: {
        top: 0.9,
        bottom: 0,
      },
    });

    volumeSeries.setData(props.volumeData);

    const highLimit = chart.current.addLineSeries({
      lineStyle: 1,
      color: "#16a34a",
      lineWidth: 1,
    });
    highLimit.setData(props.highLimit);
    const lowLimit = chart.current.addLineSeries({
      lineStyle: 1,
      color: "#dc2626",
      lineWidth: 1,
    });
    lowLimit.setData(props.lowLimit);
  }, []);

  //   Resize chart on container resizes.
  useEffect(() => {
    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);

  return (
    <div className="">
      <div className="h-screen" ref={chartContainerRef} />
    </div>
  );
};

export default Chart;
