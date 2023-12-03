import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { InfinitySpin } from "react-loader-spinner";
import { DatePicker } from "rsuite";
import { useGetChartDataQuery } from "../store/api/chartDataApi";

function Charts() {
  const currentDate = new Date().toLocaleDateString("en-CA");
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const { data: chartData, isLoading, isError } = useGetChartDataQuery();
  const styles = {
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  };

  const filteredData = useMemo(() => {
    return chartData?.payload.filter((data) => data.date === selectedDate);
  }, [chartData, selectedDate]);

  const tempSeries = [
    {
      name: "Temperature",
      data:
        filteredData?.map((data) => ({
          x: new Date(`${data.date} ${data.time}`).getTime(),
          y: data.temperature,
        })) || [],
      color: "#e482ef",
    },
  ];

  const humSeries = [
    {
      name: "Temperature",
      data:
        filteredData?.map((data) => ({
          x: new Date(`${data.date} ${data.time}`).getTime(),
          y: data.humidity,
        })) || [],
      color: "#e482ef",
    },
  ];

  const chartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: filteredData?.map((data) => data.time) || [],
      labels: {
        show: filteredData?.length > 0,
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          const nf = Intl.NumberFormat("en-US", {
            compactDisplay: "short",
            notation: "standard",
          });
          return nf.format(value);
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };

  const handleDateChange = (value) => {
    if (value) {
      setSelectedDate(value.toISOString().split("T")[0]);
    } else {
      setSelectedDate(null);
    }
  };

  if (!isLoading) {
    console.log("date", selectedDate);
    console.log("chartData", chartData);
  }

  return (
    <>
      <div className="flex-col items-center justify-left p-10 pt-5 bg-white m-10 mt-0 rounded-xl">
        <div className="flex w-full justify-between items-center mb-10">
          <div className="text-black text-lg font-semibold">Temperature</div>
          <DatePicker
            oneTap
            placeholder="Select Date Range"
            style={{ width: 250 }}
            autoComplete="off"
            onChange={handleDateChange}
          />
        </div>
        <div>
          <div id="chart">
            {isLoading ? (
              <div style={styles.loadingContainer}>
                <InfinitySpin width="200" color="#4fa94d" />
                <p>Loading data...</p>
              </div>
            ) : isError ? (
              <p>Error: {chartData?.error}</p>
            ) : filteredData ? (
              <ReactApexChart
                options={chartOptions}
                series={tempSeries}
                type="line"
                height={300}
              />
            ) : (
              <p>No chart data available.</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex-col items-center justify-left p-10 pt-5 bg-white m-10 mt-0 rounded-xl">
        <div className="flex w-full justify-between items-center mb-10">
          <div className="text-black text-lg font-semibold">Humidity</div>
          {/* <DatePicker
            oneTap
            placeholder="Select Date Range"
            style={{ width: 250 }}
            autoComplete="off"
            onChange={handleDateChange}
          /> */}
        </div>
        <div>
          <div id="chart">
            {isLoading ? (
              <div style={styles.loadingContainer}>
                <InfinitySpin width="200" color="#4fa94d" />
                <p>Loading data...</p>
              </div>
            ) : isError ? (
              <p>Error: {chartData?.error}</p>
            ) : filteredData? (
              <ReactApexChart
                options={chartOptions}
                series={humSeries}
                type="line"
                height={300}
              />
            ) : (
              <p>No chart data available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;
