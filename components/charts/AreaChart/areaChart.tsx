"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

import { IAreaChart } from "./areaChart.types";
import styles from "./areaChart.module.scss";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
// AreaChart component
const AreaChart = (props: IAreaChart) => {
  // destructuring props
  const { plantData, weatherData } = props;
  // state

  // context hooks
  const t = useTranslations();
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers
  const colors = {
    user: "#1ad6a7",
    team: "#2070d1",
    company: "#cccfd2",
  };
  const series = [
    {
      name: t("Chart-Weather-Humidity"),
      data: weatherData,
      color: colors.company,
      zIndex: 2,
    },
    {
      name: t("Chart-Plant-Humidity"),
      data: plantData,
      color: colors.team,
      zIndex: 1,
    },
  ];
  const categories = ["22.4.2025", "23.4.2025", "24.4.2025", "26.4.2025", "26.4.2025", "27.4.2025", "28.4.2025"];

  // render
  return (
    <div className={styles.areaChart}>
      <Chart
        type="area"
        width={"100%"}
        height={"320"}
        options={{
          chart: {
            fontFamily: "var(--font-urbanist)",
            sparkline: {
              enabled: true,
            },
            toolbar: {
              show: false,
            },
          },
          stroke: {
            curve: "smooth",
          },
          fill: {
            opacity: 0.3,
          },
          tooltip: {
            marker: {
              show: true,
            },
            fixed: {
              enabled: false,
              position: "topLeft",
              offsetX: -160,
            },
          },
          xaxis: {
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            categories: categories,
          },
          yaxis: {
            min: 0,
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          markers: {
            size: 0,
          },
        }}
        series={series}
      />
    </div>
  );
};

// export
export default AreaChart;
