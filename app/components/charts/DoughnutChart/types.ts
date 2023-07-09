import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const sliceThickness = {
  id: "sliceThickness",
  beforeDraw(chart: ChartJS) {
    const sliceThicknessPixel = [200, 211, 218.5, 224, 224, 224];
    sliceThicknessPixel.forEach((thickness, idx) => {
      // eslint-disable-next-line no-param-reassign
      (chart.getDatasetMeta(0).data[idx] as ArcElement).outerRadius =
        (chart.chartArea.width / thickness) * 100;
    });
  },
};

const doughnutLabel = {
  id: "doughnutLabel",
  afterDatasetsDraw(chart: ChartJS) {
    const { ctx, data, height } = chart;
    const fontSize = height / 100;
    const titleFontRatio = height > 450 ? 4.8 : 4;
    const textFontRation = height > 450 ? 2.1 : 3.5;
    const titleOffset = height > 450 ? 6.2 : 5;
    const lineOffSet = height > 450 ? 7.48 : 6.2;
    let offsets = [12.38, 43.13, -31.2, -11.47, -7.02, -5];
    if (height < 450) {
      offsets = [11.38, 41.33, -26.2, -10.47, -6.32, -4.5];
    }

    const labels = data.datasets[0].label?.split(",");
    ctx.save();
    ctx.textAlign = "center";
    ctx.fillStyle = "#1F5069";
    ctx.font = `${+fontSize * titleFontRatio}px Roboto`;
    ctx.fillText(
      labels?.shift() || "",
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y - height / titleOffset
    );

    ctx.font = `500 ${+fontSize * textFontRation}px Roboto`;
    labels?.forEach((label, idx) => {
      ctx.fillText(
        labels?.[idx] || "",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y - height / offsets[idx]
      );
    });

    ctx.beginPath();
    ctx.strokeStyle = "#D9D9D9";
    ctx.lineWidth = 1;
    ctx.moveTo(
      chart.getDatasetMeta(0).data[0].x - height / 7.09,
      chart.getDatasetMeta(0).data[0].y - height / lineOffSet
    );
    ctx.lineTo(
      chart.getDatasetMeta(0).data[0].x + height / 7.09,
      chart.getDatasetMeta(0).data[0].y - height / lineOffSet
    );
    ctx.stroke();
  },
};

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      color: "#FFF",
      labels: {
        title: {
          font: {
            size: 16,
            weight: "bold" as const,
          },
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (context: any, args: any) =>
        args.chart.data.labels?.[args.dataIndex],
    },
  },
};

export const data = {
  labels: ["35%", "20%", "15%", "10%", "10%", "10%"],
  datasets: [
    {
      label:
        "Projects,35% Healthcare,20% EdTech,15% Other,10% Manufacturing,10% RealTech,10% Transportation",
      data: [32, 18, 14, 9, 9, 9],
      backgroundColor: [
        "#30B99F",
        "#309AA3",
        "#5EA7BF",
        "#5A9DDC",
        "#3162AC",
        "#ACBFDB",
      ],
      borderColor: ["#FFFFFF"],
      borderWidth: 1,
      cutout: "63%",
    },
  ],
};

export const plugins = [sliceThickness, doughnutLabel];
