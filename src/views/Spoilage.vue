<template>
  <div class="pl-15 pr-5">
    <h1 class="text-center">Spoilage</h1>

    <v-row>
      <v-col cols="6">
        <pre>{{  }}</pre>
      </v-col>

      <v-col cols="6">
        <pre>{{}}</pre>
      </v-col>
    </v-row>

    <v-row class="mt-5">
      <v-col cols="6">
        <v-card>
          <v-chip variant="elevated" class="text-white" color="#775DD0" label>
            <h3>Spoilage Product Current Day</h3>
          </v-chip>

          <apexchart
            type="bar"
            height="300"
            :options="data2.chartOptions"
            :series="Spolagedmix"
          ></apexchart>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card height="345">
          <v-chip variant="elevated" class="text-white" color="#205072" label>
            <h3>Percent last Value</h3>
          </v-chip>
          <apexchart
            height="300"
            type="donut"
            :options="chartOptions"
            :series="dataPie"
          ></apexchart>
        </v-card>
      </v-col>

      <!-- <v-col cols="2" class="mt-15"> 
        <span class="cloud cloud--small"></span>
        <span class="cloud cloud--medium"></span>
        <span class="cloud cloud--large"></span>
        <v-img
          class="image-fill mt-15"
          height="200"
          src="/img/industrial-waste-9846203-7993927.png"
        ></v-img>
      </v-col> -->
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card>
          <v-chip variant="elevated" class="text-white" color="#3F51B5" label>
            <h3>Damaged</h3>
          </v-chip>
          <apexchart
            type="bar"
            :options="options"
            :series="this.damagedData"
          ></apexchart>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <v-chip variant="elevated" class="text-white" color="#205072" label>
            <h3>Defective</h3>
          </v-chip>
          <apexchart
            type="bar"
            :options="options2"
            :series="this.defectiveData"
          ></apexchart>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <v-chip variant="elevated" class="text-white" color="#FF4560" label>
            <h3>Others</h3>
          </v-chip>
          <apexchart
            type="bar"
            :options="options3"
            :series="this.othersData"
          ></apexchart>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

const urlSpoilage = import.meta.env.VITE_APP_IPNODERED;
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
            distributed: false,
          },
        },
      },

      chartOptions: {
        chart: {
          type: "donut",
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
          },
        },
        dataLabels: {
          enabled: true,
        
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      options2: {
        colors: ["#00E396"],
        plotOptions: {
          bar: {
            distributed: false,
          },
        },
      },

      options3: {
        colors: ["#FEB019"],
        plotOptions: {
          bar: {
            distributed: false,
          },
        },
      },

      data2: {
        series: [
          {
            name: "damaged",
            data: [
              {
                x: "00:10:36",
                y: 56,
              },
              {
                x: "01:10:36",
                y: 55,
              },
              {
                x: "02:10:36",
                y: 57,
              },
              {
                x: "03:10:36",
                y: 55,
              },
              {
                x: "04:10:36",
                y: 56,
              },
              {
                x: "05:10:36",
                y: 57,
              },
              {
                x: "06:10:36",
                y: 58,
              },
              {
                x: "07:10:36",
                y: 58,
              },
              {
                x: "08:10:36",
                y: 59,
              },
              {
                x: "09:10:36",
                y: 59,
              },
              {
                x: "10:10:36",
                y: 56,
              },
              {
                x: "11:10:36",
                y: 59,
              },
              {
                x: "12:10:36",
                y: 59,
              },
              {
                x: "13:10:36",
                y: 55,
              },
            ],
          },
          {
            name: "defective",
            data: [
              {
                x: "00:10:36",
                y: 46,
              },
              {
                x: "01:10:36",
                y: 49,
              },
              {
                x: "02:10:36",
                y: 49,
              },
              {
                x: "03:10:36",
                y: 45,
              },
              {
                x: "04:10:36",
                y: 49,
              },
              {
                x: "05:10:36",
                y: 45,
              },
              {
                x: "06:10:36",
                y: 47,
              },
              {
                x: "07:10:36",
                y: 48,
              },
              {
                x: "08:10:36",
                y: 46,
              },
              {
                x: "09:10:36",
                y: 45,
              },
              {
                x: "10:10:36",
                y: 45,
              },
              {
                x: "11:10:36",
                y: 48,
              },
              {
                x: "12:10:36",
                y: 48,
              },
              {
                x: "13:10:36",
                y: 49,
              },
            ],
          },
          {
            name: "others",
            data: [
              {
                x: "00:10:36",
                y: 25,
              },
              {
                x: "01:10:36",
                y: 27,
              },
              {
                x: "02:10:36",
                y: 27,
              },
              {
                x: "03:10:36",
                y: 25,
              },
              {
                x: "04:10:36",
                y: 27,
              },
              {
                x: "05:10:36",
                y: 26,
              },
              {
                x: "06:10:36",
                y: 28,
              },
              {
                x: "07:10:36",
                y: 25,
              },
              {
                x: "08:10:36",
                y: 27,
              },
              {
                x: "09:10:36",
                y: 29,
              },
              {
                x: "10:10:36",
                y: 26,
              },
              {
                x: "11:10:36",
                y: 27,
              },
              {
                x: "12:10:36",
                y: 25,
              },
              {
                x: "13:10:36",
                y: 26,
              },
            ],
          },
        ],
        chartOptions: {
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
      defectiveData: "",
      othersData: "",
      astElement: "",
      dataPie: "",
    };
  },

  mounted() {
    this.Spolageload();
  },

  created() {
    this.Spolageload();
  },

  methods: {
    async Spolageload() {
      try {
        const response = await axios.post(urlSpoilage + "/Spoilage");
        console.log(response);
        this.spoilageData = response.data;

        this.Spolagedmix = [
          {
            name: "damaged",
            data: response.data.slice(Math.max(response.data.length - 10, 0)).map((item) => ({
              x: item.time,
              y: Number(item.damaged),
            })),
          },
          {
            name: "defective",
            data: response.data.slice(Math.max(response.data.length - 10, 0)).map((item) => ({
              x: item.time,
              y: Number(item.defectice),
            })),
          },
          {
            name: "others",
            data: response.data.slice(Math.max(response.data.length - 10, 0)).map((item) => ({
              x: item.time,
              y: Number(item.others),
            })),
          },
        ];

        this.damagedData = [
          {
            name: "damaged",
            data: response.data.slice(Math.max(response.data.length - 10, 0)).map((item) => ({
              x: item.time,
              y: Number(item.damaged),
            })),
          },
        ];

        this.defectiveData = [
          {
            name: "defective",
            data: response.data.slice(Math.max(response.data.length - 10, 0)).map((item) => ({
              x: item.time,
              y: Number(item.defectice),
            })),
          },
        ];

        this.othersData = [
          {
            name: "others",
            data: response.data.slice(Math.max(response.data.length - 10, 0)).map((item) => ({
              x: item.time,
              y: Number(item.others),
            })),
          },
        ];

        let lastElement = response.data[response.data.length - 1];

        console.log("test");
        console.log(lastElement);

        this.dataPie = [
          Number(lastElement.damaged),
          Number(lastElement.defectice),
          Number(lastElement.others),
        ];
      } catch (error) {
        console.error("Error fetching Spoilage data:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Cloud Animation */

@keyframes fade {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes move {
  from {
    right: 200px;
  }
  to {
    right: 0px;
  }
}

.absolute-position {
  position: absolute;
  top: 2;
  left: 0;
}

.relative-position {
  position: relative;
}

.cloud {
  position: absolute;
}

.cloud {
  animation-duration: 10s;
  animation-name: move, fade;
  animation-direction: normal;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;

  display: block;
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iY2xvdWQiIHZpZXdCb3g9IjAgMCA1MiA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MnB4IiBoZWlnaHQ9IjQwcHgiPgoJPGRlZnM+CgkJPGZpbHRlciBpZD0iZjEiIHg9Ii0xMDAlIiB5PSItMTAwJSIgd2lkdGg9IjMwMCUiIGhlaWdodD0iMzAwJSI+IAoJCQk8ZmVPZmZzZXQgcmVzdWx0PSJvdXQiIGluPSJTb3VyY2VHcmFwaGljIiBkeD0iMCIgZHk9IjEiLz4KCQkJPGZlQ29sb3JNYXRyaXggcmVzdWx0PSJvdXQiIGluPSJvdXQiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgIDAgMCAwIDAgMCAgMCAwIDAgMCAwICAwIDAgMCAwLjQgMCIvPgoJCQk8ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJvdXQiIGluPSJvdXQiIHN0ZERldmlhdGlvbj0iMiIvPgoJCQk8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJvdXQiIG1vZGU9Im5vcm1hbCIgcmVzdWx0PSJkcCIvPgoJCTwvZmlsdGVyPgoJPC9kZWZzPiAKCTxwYXRoIGlkPSJmZy1jbG91ZCIgZmlsdGVyPSJ1cmwoI2YxKSIgZD0iTTYuMyAzNS4xQzQuNyAzNC4yLTAuNCAzMi4zIDEuNCAyNSAzLjEgMTguMSA4LjcgMTkuNSA4LjcgMTkuNSA4LjcgMTkuNSAzLjIgMTQuMSAxMC40IDYuOCAxNi45IDAuMiAyMy4xIDQuNiAyMy4xIDQuNiAyMy4xIDQuNiAzMC0xLjcgMzUuMiAyLjQgNDQuNiA5LjcgNDIuOCAyNS4zIDQyLjggMjUuMyA0Mi44IDI1LjMgNDggMjIuNiA0OS44IDI4LjYgNTEgMzIuNyA0NiAzNS44IDQyLjggMzYuNyAzOS43IDM3LjUgOC45IDM2LjYgNi4zIDM1LjFaIiBzdHJva2U9IiNjY2NjY2MiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4=);
  height: 40px;
  width: 53px;
  margin: 0 auto;
}
.cloud--small {
  animation-duration: 6s;
  top: 65px;
  transform: scaleX(0.5) scaleY(0.5);
}
.cloud--medium {
  animation-duration: 5s;
  animation-delay: 1s;
  top: 95px;
  transform: scaleX(0.7) scaleY(0.7);
}
.cloud--large {
  animation-duration: 4.5s;
  animation-delay: 2.5s;
  top: 95px;
  transform: scaleX(0.8) scaleY(0.8);
}
</style>