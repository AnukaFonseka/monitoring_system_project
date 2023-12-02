import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { InfinitySpin } from "react-loader-spinner";
import { DateRangePicker } from "rsuite";
import { useGetChartDataQuery } from "../store/api/chartDataApi";

function HumidityChart() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { data: chartData, isLoading, isError } = useGetChartDataQuery();
  const styles = {
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  };

  const filteredChartData = useMemo(() => {
    if (!startDate || !endDate) {
      return chartData?.payload || [];
    }

    return (
      chartData?.payload.filter((data) => {
        const dataDate = new Date(data.date).toISOString().split("T")[0];
        return dataDate >= startDate && dataDate <= endDate;
      }) || []
    );
  }, [chartData, startDate, endDate]);

  const series = [
    {
      name: "Humidity",
      data: filteredChartData.map((data) => ({
        x: new Date(data.date).getTime(),
        y: data.humidity,
      })),
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
      categories: filteredChartData.map((data) => data.date),
      labels: {
        show: filteredChartData.length > 0,
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

  const handleDateRangeChange = (value) => {
    if (value && value.length === 2) {
      setStartDate(value[0].toISOString().split("T")[0]);
      setEndDate(value[1].toISOString().split("T")[0]);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  if (!isLoading) {
    console.log("chartData", chartData);
    console.log("filteredChartData", filteredChartData);
  }

  return (
    <div className="flex-col items-center justify-left p-10 pt-5 bg-white m-10 mt-0 rounded-xl">
      <div className="flex w-full justify-between items-center mb-10">
        <div className="text-black text-lg font-semibold">Humidity</div>
        <DateRangePicker
          showOneCalendar
          placeholder="Select Date Range"
          style={{ width: 250 }}
          autoComplete="off"
          onChange={handleDateRangeChange}
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
          ) : chartData ? (
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
