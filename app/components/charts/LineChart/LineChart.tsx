import React from "react";
import { Scatter } from "react-chartjs-2";
import type { ScriptableContext, Chart as ChartJS } from "chart.js/auto";
import {
  defaults,
  Chart as ChartLine,
  LineElement,
  CategoryScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartLine.register(
  LineElement,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
  ChartDataLabels
);
ChartLine.defaults.font.size = 16;
defaults.font.family = "Roboto";

const employeeCount = ["0", "10+", "20+", "30+"];

const data = {
  labels: [2020, 2021, 2022],
  datasets: [
    {
      data: [
        { x: -3, y: 2.3 },
        { x: 0.5, y: 2.5 },
        { x: 5, y: 6 },
        { x: 9.5, y: 18 },
        { x: 75, y: 300 },
      ],
      backgroundColor: ["#30B99F", "#30B99F", "#198498", "#2F65AA"],
      borderColor: (context: ScriptableContext<"line">) => {
        const { ctx, width, height } = context.chart;
        let gradient = ctx.createLinearGradient(10, 10, width, height);
        if (width < 400) {
          gradient = ctx.createLinearGradient(0, 10, 335, 200);
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)");
          gradient.addColorStop(0.4, "rgba(0, 169, 131, 0.8)");
          gradient.addColorStop(0.5, "rgba(25, 132, 152, 0.8)");
          gradient.addColorStop(0.65, "rgba(85, 148, 241, 1)");
          gradient.addColorStop(0.75, "rgba(255, 255, 255, 0.1)");
        } else {
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)");
          gradient.addColorStop(0.3, "rgba(0, 169, 131, 0.8)");
          gradient.addColorStop(0.35, "rgba(25, 132, 152, 0.8)");
          gradient.addColorStop(0.7, "rgba(85, 148, 241, 1)");
          gradient.addColorStop(0.9, "rgba(255, 255, 255, 0.8)");
        }
        return gradient;
      },
      borderWidth: 2,
      pointRadius: 7,
      tension: 0.4,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      labels: {
        title: {
          font: {
            size: 16,
          },
        },
      },
      align: "end" as const,
      color: ["#30B99F", "#30B99F", "#198498", "#2F65AA"],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (context: any, args: any) => employeeCount[args.dataIndex],
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  showLine: true,
  scales: {
    y: {
      beginAtZero: false,
      display: false,
      min: 0,
      max: 20,
      grid: {
        display: false,
      },
    },

    x: {
      beginAtZero: false,
      min: 0,
      max: 10,
      grid: {
        display: false,
      },
      ticks: {
        color: "#FFF",
      },
    },
  },
};

const lineText = {
  id: "lineText",
  beforeDraw(chart: ChartLine) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;

    const fontRatio = width > 400 ? 24.58 : 14;

    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(31, 80, 105, 0.2)";
    ctx.font = `${width / fontRatio}px Roboto`;
    ctx.fillText("Employees", width / 2 + 19, height / 2 - 28);
  },
};

const customLabels = {
  id: "customLabels",
  afterDatasetsDraw(chart: ChartJS) {
    const {
      ctx,
      chartArea: { left, right, bottom, width },
    } = chart;
    let offset = 45;
    if (width < 600 && width > 315) {
      offset = 28;
    } else if (width < 315) {
      offset = 17;
    }
    ctx.save();
    ctx.font = "15px Roboto";
    ctx.fillStyle = "#230505";
    ctx.fillText("2020", left + offset, bottom + 25);
    ctx.fillText("2021", width / 2 + 10, bottom + 25);
    ctx.fillText("2022", right - offset, bottom + 25);
  },
};
const plugins = [lineText, ChartDataLabels, customLabels];

function LineChart() {
  return (
    <div className="relative mt-16 w-full max-w-[335px] sm:max-w-[600px] dp:max-w-[900px] h-[200px] dp:h-[280px]">
      <Scatter data={data} options={options} plugins={plugins} />
    </div>
  );
}

export default LineChart;
