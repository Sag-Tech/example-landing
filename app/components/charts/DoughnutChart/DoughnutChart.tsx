import React from "react";
import { Doughnut } from "react-chartjs-2";
import { data, options, plugins } from "./types";

function DoughnutChart() {
  return (
    <div
      className="relative flex justify-center w-[335px] h-[355px] sm:w-[482px] sm:h-[502px] dp:w-[582px]
    dp:h-[592px] dpb:w-[780px] dpb:h-[780px] mt-5 pb-[19px] lp:pb-0"
    >
      <Doughnut data={data} plugins={plugins} options={options} />
    </div>
  );
}

export default DoughnutChart;
