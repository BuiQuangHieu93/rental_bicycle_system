import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchingData, setFetchingData] = useState(false);
  const [chartRefs, setChartRefs] = useState([]);
  const [dataForecast, setDataForecast] = useState();

  const fixHour = (hour) => {
    if (hour <= 23) {
      return hour;
    } else if (hour <= 47) {
      return hour - 24;
    } else return hour - 48;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchingData(true);
        const currentHour = new Date().getHours();

        const cachedHour = localStorage.getItem("currentHour");
        const predictResponseCached = localStorage.getItem("predictResponse");
        const dataChartCached = localStorage.getItem("dataChart");

        if (parseInt(cachedHour) === currentHour) {
          setDataForecast(JSON.parse(predictResponseCached));
          setData(JSON.parse(dataChartCached));
          console.log("successful here currentHour");
        } else {
          const response = await axios.get(
            "https://api.openweathermap.org/data/3.0/onecall?lat=10.75&lon=106.6667&exclude=minutely&appid=e18d9f935503d1088f5628c4f00c5340"
          );

          const forecastData = response.data.hourly.map((item, index) => [
            parseFloat(item.temp - 273.15),
            item.humidity,
            item.wind_speed,
            fixHour(index + currentHour),
          ]);

          const responseChart = await axios.get(
            "https://api.openweathermap.org/data/3.0/onecall?lat=10.75&lon=106.6667&exclude=minutely&appid=e18d9f935503d1088f5628c4f00c5340"
          );

          const dataChart = responseChart.data.hourly.map((item, index) => ({
            temperature: parseFloat((item.temp - 273.15).toFixed(4)),
            humidity: item.humidity,
            wind_speed: item.wind_speed,
            hour: fixHour(index + currentHour),
          }));

          localStorage.setItem("dataChart", JSON.stringify(dataChart));

          setData(dataChart);

          const predictResponse = await axios
            .post("http://localhost:8080/api/v1/data/predict", {
              forecastData: forecastData,
            })
            .then((response) => {
              setDataForecast(response.data.result);
              localStorage.setItem(
                "predictResponse",
                JSON.stringify(response.data.result)
              );
            })
            .catch((error) => console.error(error));
        }
        localStorage.setItem("currentHour", JSON.stringify(currentHour));

        setLoading(false);
        setFetchingData(false); // set fetchingData to false after data has been fetched
      } catch (error) {
        setError(error);
        setLoading(false);
        setFetchingData(false); // set fetchingData to false after an error has occurred
      }
    };

    fetchData();
  }, []);

  const createChart = (label, data, color, decimalPlaces) => {
    const currentHour = new Date().getHours();
    const chartData = {
      labels: data?.map((item, index) => {
        if (index + currentHour <= 23) {
          return index + currentHour;
        } else if (index + currentHour <= 47) {
          return index + currentHour - 24;
        } else return index + currentHour - 48;
      }),
      datasets: [
        {
          label,
          data: data?.map((item) => {
            if (item.value !== undefined) {
              return parseFloat(item.value).toFixed(decimalPlaces);
            } else {
              return null;
            }
          }),
          borderColor: `rgba(${color}, 0.9)`,
          backgroundColor: `rgba(${color}, 0.2)`,
          tension: 0.5,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `${label} Line Chart`,
        },
      },
    };

    return { chartData, options };
  };

  const charts = [
    {
      label: "Rented predict",
      data: dataForecast?.map((item) => ({ value: item })),
      color: "255, 99, 132",
      decimalPlaces: 0,
    },
    {
      label: "Temperature predict",
      data: data.map((item) => ({ value: item.temperature })),
      color: "54, 162, 235",
      decimalPlaces: 2,
    },
    {
      label: "Wind speed predict",
      data: data.map((item) => ({ value: item.wind_speed })),
      color: "255, 206, 86",
      decimalPlaces: 2,
    },
    {
      label: "Humidity predict",
      data: data.map((item) => ({ value: item.humidity })),
      color: "75, 192, 192",
      decimalPlaces: 0,
    },
  ];

  useEffect(() => {
    // create refs for each chart
    setChartRefs((chartRefs) =>
      Array(charts.length)
        .fill()
        .map((_, i) => chartRefs[i] || React.createRef())
    );
  }, [charts.length]);
  const trendAnalysis = (data) => {
    // Trend analysis
    const trend = data.reduce((sum, value, index, array) => {
      if (index === array.length - 1) return sum;
      const diff = array[index + 1] - value;
      return sum + diff;
    }, 0);
    console.log(
      "Trend:",
      trend > 0 ? "Increasing" : trend < 0 ? "Decreasing" : "No trend"
    );

    // Peak and trough analysis
    const max = Math.max(...data);
    const min = Math.min(...data);
    console.log("Peak:", max);
    console.log("Trough:", min);

    return {
      trend: trend > 0 ? "Increasing" : trend < 0 ? "Decreasing" : "No trend",
      peak: max,
      trough: min,
    };
  };

  const volatilityAnalysis = (data) => {
    // Volatility analysis
    const volatility = data.reduce((sum, value, index, array) => {
      if (index === array.length - 1) return sum;
      const diff = Math.abs(array[index + 1] - value);
      return sum + diff;
    }, 0);
    return volatility;
  };

  const correlationAnalysis = (data) => {
    // Correlation analysis
    const correlation = data.reduce((result, label, index) => {
      if (index === data.length - 1) return result;
      const diff1 = data[index + 1] - data[index];
      const diff2 = data[index + 1] - data[index];
      return result + diff1 * diff2;
    }, 0);
    return correlation > 0
      ? "Positive"
      : correlation < 0
      ? "Negative"
      : "No correlation";
  };

  const handleExportPDF = async (charts) => {
    const pdf = new jsPDF();
    let currentPosition = 10;

    for (let i = 0; i < chartRefs.length; i++) {
      const chartRef = chartRefs[i];
      const chartData = charts[i].data.map((data) => data.value);

      const trend = trendAnalysis(chartData);
      const volatility = volatilityAnalysis(chartData);
      const correlation = correlationAnalysis(chartData);

      if (chartRef.current && chartRef.current.canvas) {
        const canvas = await html2canvas(chartRef.current.canvas);
        const imgData = canvas.toDataURL("image/png");

        pdf.addImage(imgData, "PNG", 10, currentPosition, 190, 100);
        pdf.text(10, currentPosition + 110, `Trend: ${trend.trend}`);
        pdf.text(10, currentPosition + 120, `Peak: ${trend.peak.toFixed(0)}`);
        pdf.text(
          10,
          currentPosition + 130,
          `Trough: ${trend.trough.toFixed(0)}`
        );
        pdf.text(
          10,
          currentPosition + 140,
          `Volatility: ${volatility.toFixed(2)}`
        );
        pdf.text(
          10,
          currentPosition + 150,
          `Correlation Analysis: ${correlation}`
        );

        // If this is not the last chart, add a new page for the next chart
        if (i < chartRefs.length - 1) {
          pdf.addPage();
          currentPosition = 10;
        } else {
          currentPosition += 110;
        }
      }
    }

    pdf.save("charts.pdf");
  };

  if (!loading && !error) {
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {charts.map((chart, index) => {
          const { chartData, options } = createChart(
            chart.label,
            chart.data,
            chart.color,
            chart.decimalPlaces
          );
          return (
            <div key={index}>
              <Line
                className="w-full h-full"
                data={chartData}
                options={options}
                ref={chartRefs[index]}
              />
            </div>
          );
        })}
        <div className="flex items-center justify-center">
          <button
            className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => handleExportPDF(charts, chartRefs)}
          >
            Download as PDF
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default LineChart;
