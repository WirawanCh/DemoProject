<template>
  <div>
    <apexchart
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May"],
        },
        yaxis: {
          title: {
            text: "CO2 Emissions (metric tons)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " metric tons";
            },
          },
        },
      },
      series: [
        {
          name: "2023",
          data: [300, 400, 500, 550, 600],
        },
        // You can add more series for different years or data points
      ],
    };
  },
};
</script>
