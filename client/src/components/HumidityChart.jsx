import React from "react";
import ReactApexChart from "react-apexcharts";
import { InfinitySpin } from "react-loader-spinner";

function HumidityChart(props) {
  //   const data = props.chartData;
  const loading = props.loading;
  const error = props.error;
  const dateFilter = props.dateFilter;
  const startDate = props.startDate;

  const styles = {
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  };

  // Mock data when the backend is not available
  const mockData = {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    series: [[50, 60, 50, 30, 50, 60, 50, 60, 40, 80, 50, 60]],
  };

  const data = mockData;

  const chartOptions = {
    chart: {
      type: "bar",
    //   height: 650,
      stacked: false,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          enabled: false,
        },
      },
    },
    xaxis: {
      type: "category",
      categories: data?.categories || [],
      labels: {
        formatter: function (value) {
          if (dateFilter === 1 || dateFilter === null) {
            // Display month and year
            const date = new Date(value);
            const month = date.toLocaleString("default", { month: "short" });
            const year = date.getFullYear();
            return `${month} ${year}`;
          } else if (dateFilter === 2 && startDate) {
            // Use data.categories when dateFilter is 2
            return data?.categories[value] || value;
          } else {
            return value;
          }
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          const nf = Intl.NumberFormat("en-US", {
            compactDisplay: "short",
            notation: "compact",
          });
          return nf.format(value);
        },
      },
    },
    legend: {
      position: "right",
      offsetY: 40,
      markers: {
        offsetX: -10,
      },
    },
    fill: {
      opacity: 1,
    },
  };
  let series = [
    {
      name: "Humidity",
      data: data?.series?.[0] || [],
      color: "#e482ef",
    },
  ];

  console.log(data);

  return (
    <div className="flex-col items-center justify-left p-10 pt-5 bg-white m-10 mt-0 rounded-xl">
      <div className="flex w-full justify-between items-center mb-10">
        <div className="text-black text-lg font-semibold">Humidity</div>
        <div className="text-gray-500 text-md ">Filter by</div>
      </div>
      <div>
        <div id="chart">
          {loading ? (
            <div style={styles.loadingContainer}>
              <InfinitySpin width="200" color="#4fa94d" />
              <p>Loading data...</p>
            </div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : data ? (
            <ReactApexChart
              options={chartOptions}
              series={series}
              type="line"
              height={300}
            />
          ) : (
            <p>No chart data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HumidityChart;
