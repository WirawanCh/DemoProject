<template>
  <div class="mt-5 text-center">
    <h1>Carbon Dashboard</h1>
    <!-- <v-row>
      <v-col cols="6">
        <pre>{{ this.totaloffset }}</pre>
      </v-col>

      <v-col cols="6">
        <pre>{{}}</pre>
      </v-col>
    </v-row> -->
  </div>

  <v-row class="pl-15 pr-5">
    <v-col cols="3">
      <v-card>
        <v-chip variant="elevated" class="text-white" color="#205072" label>
          <h3>Emissions by type</h3>
        </v-chip>

        <!-- <v-data-table
          fixed-header
          height="223"
          :headers="headers"
          :items="summedData"
          :items-per-page="5"
          class="elevation-1"
        >
        <template v-slot:items="props">
      <td>{{ props.item.type }}</td>
      <td>{{ props.item.weight }} {{ props.item.unit }}</td>
      </template>
        
        
        </v-data-table> -->

        <v-table height="313px">
          <thead>
            <tr>
              <th class="text-left">Type</th>
              <th class="text-left">Weight</th>
              <th class="text-left">Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in summedData" :key="item.type">
              <td>{{ item.type }}</td>
              <td>{{ item.weight }}</td>
              <td>{{ item.unit }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-col>

    <v-col cols="6">
      <v-card>
        <v-chip variant="elevated" class="text-white" color="#775DD0" label>
          <h3>Carbon Footprint</h3>
        </v-chip>

        <apexchart
          type="bar"
          height="300"
          :options="data2.chartOptions"
          :series="Carbonmix"
        ></apexchart>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card height="348">
        <v-chip variant="elevated" class="text-white" color="#1ab7ea" label>
          <h3>Top Emissions by type</h3>
        </v-chip>
        <apexchart
          class="mt-15 justify-center"
          type="donut"
          width="350"
          height="400"
          :options="chartOptions"
          :series="seriesPieEmis"
        ></apexchart>
      </v-card>
    </v-col>
  </v-row>

  <v-row class="pl-15 pr-5">
    <v-col cols="4">
      <v-card height="400">
        <v-chip variant="elevated" class="text-white" color="#0077B5" label>
          <h3>Total Emissions/offset</h3>
        </v-chip>
        <apexchart
          class="mt-5 pl-15"
          type="pie"
          width="460"
          :options="chartOptions2"
          :series="totaloffset"
        ></apexchart>
      </v-card>
    </v-col>

    <v-col cols="8">
      <v-card height="400">
        <v-chip variant="elevated" class="text-white" color="#308FFB" label>
          <h3>Amount of carbon used each year</h3>
        </v-chip>
        <apexchart
          height="350"
          type="line"
          :options="chartOptions3"
          :series="series3"
        ></apexchart>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

const urlCarbon = import.meta.env.VITE_APP_IPNODERED;
export default {
  data() {
    return {
      overallOee: "",
      tab: null,
      oeeData: "",
      OEEdataTable: "",
      options: {
        colors: ["#308FFB"],
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
      },

      chartOptions3: {
        chart: {
          type: "line",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May"],
        },
        yaxis: {
          title: {
            text: "CO2 Emissions (metric tons)",
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " metric tons";
            },
          },
        },
      },
      series3: [
        {
          name: "2021",
          data: [200, 250, 300, 320, 350],
        },
        {
          name: "2022",
          data: [180, 220, 280, 300, 330],
        },
        {
          name: "2023",
          data: [150, 180, 220, 240, 260],
        },
        // You can add more series for different years or data points
      ],

      headers: [
        { title: "Type", key: "type" },
        { title: "Amount", key: "weight" },
        { title: "Unit", key: "unit" },
      ],
      vegetables: [
        {
          type: "Vehicles",
          weight: 101136,
          unit: "kg",
        },
        {
          type: "Technology",
          weight: 101136,
          unit: "kg",
        },
        {
          type: "Buildings",
          weight: 101136,
          unit: "kg",
        },
        {
          type: "Manufacturing",
          weight: 101136,
          unit: "kg",
        },
        {
          type: "Other",
          weight: 101136,
          unit: "kg",
        },
      ],

      chartOptions: {
        colors: ["#00E396", "#0063ff", "#50b4ff", "#ff964a", "#ffc63b"],
        labels: ["Vehicles", "Buildings", "Manufacturing", "Other"],

        dataLabels: {
          enabled: true,

          textAnchor: "bottom",
          distributed: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            colors: undefined,
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            padding: 4,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: "#fff",
            opacity: 0.9,
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: "#000",
              opacity: 0.45,
            },
          },
        },
      },

      chartOptions2: {
        colors: ["#00E396", "#ff964a"],
        labels: ["total Emissions", "offset"],
      },
      series: [44, 55, 13, 43, 25],
      series2: [583, 55],

      options2: {
        colors: ["#00E396"],
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
      },

      options3: {
        colors: ["#FEB019"],
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
      },

      data2: {
        series: [
          {
            name: "Vehicles",
            data: [
              {
                x: "Jan",
                y: 100,
              },
              {
                x: "Feb",
                y: 87,
              },
              {
                x: "Mar",
                y: 67,
              },
              {
                x: "Apr",
                y: 57,
              },
              {
                x: "May",
                y: 58,
              },
              {
                x: "June",
                y: 55,
              },
              {
                x: "July",
                y: 56,
              },
            ],
          },
          {
            name: "Technology",
            data: [
              {
                x: "Jan",
                y: 87,
              },
              {
                x: "Feb",
                y: 67,
              },
              {
                x: "Mar",
                y: 89,
              },
              {
                x: "Apr",
                y: 69,
              },
              {
                x: "May",
                y: 100,
              },
              {
                x: "June",
                y: 55,
              },
              {
                x: "July",
                y: 56,
              },
            ],
          },
          {
            name: "Buildings",
            data: [
              {
                x: "Jan",
                y: 59,
              },
              {
                x: "Feb",
                y: 56,
              },
              {
                x: "Mar",
                y: 56,
              },
              {
                x: "Apr",
                y: 57,
              },
              {
                x: "May",
                y: 58,
              },
              {
                x: "June",
                y: 55,
              },
              {
                x: "July",
                y: 56,
              },
            ],
          },
          {
            name: "Manufacturing",
            data: [
              {
                x: "Jan",
                y: 59,
              },
              {
                x: "Feb",
                y: 56,
              },
              {
                x: "Mar",
                y: 56,
              },
              {
                x: "Apr",
                y: 57,
              },
              {
                x: "May",
                y: 58,
              },
              {
                x: "June",
                y: 55,
              },
              {
                x: "July",
                y: 56,
              },
            ],
          },
          {
            name: "Other",
            data: [
              {
                x: "Jan",
                y: 59,
              },
              {
                x: "Feb",
                y: 56,
              },
              {
                x: "Mar",
                y: 56,
              },
              {
                x: "Apr",
                y: 57,
              },
              {
                x: "May",
                y: 58,
              },
              {
                x: "June",
                y: 55,
              },
              {
                x: "July",
                y: 56,
              },
            ],
          },
        ],
        chartOptions: {
          colors: ["#00E396", "#0063ff", "#50b4ff", "#ff964a", "#ffc63b"],
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            toolbar: {
              show: true,
            },
            zoom: {
              enabled: true,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10,
              dataLabels: {
                total: {
                  enabled: true,
                  style: {
                    fontSize: "13px",
                    fontWeight: 900,
                  },
                },
              },
            },
          },
          labels: {
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm",
            },
          },
          legend: {
            position: "right",
            offsetY: 40,
          },
          fill: {
            opacity: 1,
          },
        },
      },

      spoilageData: "",
      dataFormat: "",
      damaged: "",
      Spolagedmix: "",
      damagedData: "",
      astElement: "",
      dataPie: "",
      Carbonmix: "",
      tableEmission: "",
      Sumvehices: "",
      Sumbuilding: "",
      SumManufacturing: "",
      Sumothers: "",
      tableSumEmission: "",
      summedData: "",
      seriesPieEmis: "",
      totalEmisPie: "" ,
      totaloffset:""
    };
  },

  created() {
    this.Spolageload();
  },
  mounted() {
    this.Spolageload();
  },

  methods: {
    getColor(calories) {
      if (calories > 100) return "red";
      else if (calories > 50) return "orange";
      else return "green";
    },

    async Spolageload() {
      try {
        const response = await axios.post(urlCarbon + "/Carbon");
        console.log(response);
        this.CarbonData = response.data;

        this.Carbonmix = [
          {
            name: "vehices",
            data: response.data
              .slice(Math.max(response.data.length - 10, 0))
              .map((item) => ({
                x: item.time,
                y: Number(item.vehices),
              })),
          },
          {
            name: "buildings",
            data: response.data
              .slice(Math.max(response.data.length - 10, 0))
              .map((item) => ({
                x: item.date,
                y: Number(item.buildings),
              })),
          },
          {
            name: "manufacturing",
            data: response.data
              .slice(Math.max(response.data.length - 10, 0))
              .map((item) => ({
                x: item.date,
                y: Number(item.manufacturing),
              })),
          },
          {
            name: "others",
            data: response.data
              .slice(Math.max(response.data.length - 10, 0))
              .map((item) => ({
                x: item.date,
                y: Number(item.others),
              })),
          },
        ];

        (this.tableEmission = [
          {
            type: "Vehices",
            weight: response.data.map((item) => Number(item.vehices)),
            unit: "kg",
          },
          {
            type: "Buildings",
            weight: response.data.map((item) => Number(item.buildings)),
            unit: "kg",
          },
          {
            type: "Manufacturing",
            weight: response.data.map((item) => Number(item.manufacturing)),
            unit: "kg",
          },
          {
            type: "Others",
            weight: response.data.map((item) => Number(item.others)),
            unit: "kg",
          },
        ]),
          // Sum the weights for each type
          (this.summedData = this.tableEmission.map((entry) => ({
            type: entry.type,
            weight: entry.weight.reduce((acc, curr) => acc + curr, 0),
            unit: entry.unit,
          })));

        (this.seriesPieEmis = this.summedData.map((item) => item.weight));

        (this.totalEmisPie = this.summedData.map((item) => item.weight));

        (this.totaloffset = [this.totalEmisPie[0] + this.totalEmisPie[1] + this.totalEmisPie[2], this.totalEmisPie[3]]);


      } catch (error) {
        console.error("Error fetching Carbon data:", error);
      }
    },
  },
};
</script>


<style>
</style>