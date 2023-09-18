<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" class="pl-15">
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="start">
        <v-tab value="1">Line1</v-tab>
        <v-tab value="2">Line2</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <!-----------------------------------Line 1--------------------------------------->
        <v-window-item value="1">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="4" md="4" lg="3">
                <v-card
                  height="100"
                  class="pa-8 rounded-xl rounded-be-0"
                  style="
                    background-image: linear-gradient(
                      to right top,
                      #45ac8b,
                      #67bda0,
                      #85ceb5,
                      #a3dfcb,
                      #c1f0e0
                    );
                  "
                >
                  <v-icon color="white" size="40"
                    ><v-img src="/img/icon2.png"></v-img
                  ></v-icon>
                  <span class="textfont"
                    >Voltage Input : {{ datainv[0].data[0].Voltage_in }} V
                  </span>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" md="4" lg="3">
                <v-card
                  height="100"
                  class="pa-8 rounded-xl rounded-be-0"
                  style="
                    background-image: linear-gradient(
                      to right top,
                      #b9d9fd,
                      #9ec3ff,
                      #8fbcff,
                      #5ca8fe,
                      #538fff
                    );
                  "
                >
                  <v-icon color="white" size="40"
                    ><v-img src="/img/icon2.png"></v-img
                  ></v-icon>
                  <span class="textfont"
                    >Voltage Output : {{ datainv[0].data[0].Voltage_out }} V
                  </span>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" md="4" lg="3">
                <v-card
                  height="100"
                  class="pa-8 rounded-xl rounded-be-0"
                  style="
                    background-image: linear-gradient(
                      to right top,
                      #7ecc85,
                      #9fd990,
                      #bde59c,
                      #d9f2ac,
                      #f4ffbd
                    );
                  "
                >
                  <v-icon color="white" size="40"
                    ><v-img src="/img/icon2.png"></v-img
                  ></v-icon>
                  <span class="textfont"
                    >Frequency Input : {{ datainv[0].data[0].Frequency_in }} Hz
                  </span>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" md="4" lg="3">
                <v-card
                  height="100"
                  class="pa-8 text-left rounded-xl rounded-be-0"
                  style="
                    background-image: linear-gradient(
                      to right top,
                      #fee8ab,
                      #febf9f,
                      #ffaa95,
                      #ff8d8d,
                      #fc6257
                    );
                  "
                >
                  <v-icon color="white" size="40"
                    ><v-img src="/img/icon2.png"></v-img
                  ></v-icon>
                  <span class="textfont"
                    >Frequency Output:
                    {{ datainv[0].data[0].Frequency_out }} Hz</span
                  >
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="6">
                <v-card></v-card>
                <v-card class="mt-2" height="350">
                  <v-chip variant="elevated" color="#45ac8b" label>
                    <h3>Current Motor</h3></v-chip
                  >
                  <!-- <apexchart
                    class="mt-5"
                    type="radialBar"
                    height="500"
                    :options="chartOptions"
                    :series="[datainv[0].data[0].Crurrent]"
                  ></apexchart> -->
                  <vue-speedometer 
                  :width="400"
                  height="300"
                  class="mt-15 text-center"
                  :forceRender="true"
                  :maxSegmentLabels="1"
                  :customSegmentStops="[0, 200,400,600,800, 1000]"
                  :segmentColors='["#48CFAD", "#A0D468", "#FFCE54", "#FC6E51", "#EF4135"]'
                  needleColor="steelblue"
                  :currentValueText='"Current Motor Value: \${value} A"'
                  :value="datainv[0].data[0].Crurrent"
                  textColor="${textColor}"
                  />
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="6">
                <v-card class="mt-2" height="350">
                  <v-chip variant="elevated" color="#FC6E51" label>
                    <h3>Power</h3></v-chip
                  >

                  <!-- <apexchart
                    class="mt-5"
                    type="radialBar"
                    height="500"
                    :options="chartOptions"
                    :series="[datainv[0].data[0].Power]"
                  ></apexchart> -->
                  <vue-speedometer 
                  :width="400"
                  height="300"
                  class="mt-15 text-center"
                  :forceRender="true"
                  :maxSegmentLabels="1"
                  :customSegmentStops="[0, 200,400,600,800, 1000]"
                  :segmentColors='["#48CFAD", "#A0D468", "#FFCE54", "#FC6E51", "#EF4135"]'
                  needleColor="steelblue"
                  :currentValueText='"Power Value: \${value} W"'
                  :value="datainv[0].data[0].Power"
                  textColor="${textColor}"
                  />
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card class="mt-5 mb-5" height="400">
                  <apexchart
                    class="mt-10"
                    type="line"
                    height="320"
                    :options="realtimechartoptions"
                    :series="[resultchart[0]]"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <!-----------------------------------Line 2-------------------------------------->
        <v-window-item value="2">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="4" md="4" lg="3">
                <v-card
                  height="100"
                  class="pa-8 rounded-xl rounded-be-0"
                  style="
                    background-image: linear-gradient(
                      to right top,
                      #45ac8b,
                      #67bda0,
                      #85ceb5,
                      #a3dfcb,
                      #c1f0e0
                    );
                  "
                >
                  <v-icon color="white" size="40"
                    ><v-img src="/img/icon2.png"></v-img
                  ></v-icon>
                  <span class="textfont"
                    >Voltage Input : {{ datainv[1].data[0].Voltage_in }} V
                  </span>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" md="4" lg="3">
                <v-card
                  height="100"
                  class="pa-8 rounded-xl rounded-be-0"
                  style="
                    background-image: linear-gradient(
                      to right top,
                      #b9d9fd,
                      #9ec3ff,
                      #8fbcff,
                      #5ca8fe,
                      #538fff
                    );
                  "
                >
                  <v-icon color="white" size="40"
                    ><v-img src="/img/icon2.png"></v-img
                  ></v-icon>
                  <span class="textfont"
                    >Voltage Output : {{ datainv[1].data[0].Voltage_out }} V
                  </span>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" md="4" lg="3">
                <v-card
                  height="100"
                  class="pa-8 rounded-xl rounded-be-0"
                  style="
                    background-image: linear-gradient(
                      to right top,
                      #7ecc85,
                      #9fd990,
                      #bde59c,
                      #d9f2ac,
                      #f4ffbd
                    );
                  "
                >
                  <v-icon color="white" size="40"
                    ><v-img src="/img/icon2.png"></v-img
                  ></v-icon>
                  <span class="textfont"
                    >Frequency Input : {{ datainv[1].data[0].Frequency_in }} Hz
                  </span>
                </v-card>
              </v-col>

              <v-col cols="12" sm="4" md="4" lg="3">
                <v-card
                  height="100"
                  class="pa-8 text-left rounded-xl rounded-be-0"
                  style="
                    background-image: linear-gradient(
                      to right top,
                      #fee8ab,
                      #febf9f,
                      #ffaa95,
                      #ff8d8d,
                      #fc6257
                    );
                  "
                >
                  <v-icon color="white" size="40"
                    ><v-img src="/img/icon2.png"></v-img
                  ></v-icon>
                  <span class="textfont"
                    >Frequency Output:
                    {{ datainv[1].data[0].Frequency_out }} Hz</span
                  >
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="6">
                <v-card></v-card>
                <v-card class="mt-5" height="350">
                  <v-chip variant="elevated" color="#45ac8b" label>
                    <h3>Current Motor</h3></v-chip
                  >
<!-- 
                  <apexchart
                    class="mt-5"
                    type="radialBar"
                    height="500"
                    :options="chartOptions"
                    :series="[datainv[1].data[0].Crurrent]"
                  ></apexchart> -->

                  <vue-speedometer 
                  :width="400"
                  height="300"
                  class="mt-15 text-center"
                  :forceRender="true"
                  :maxSegmentLabels="1"
                  :customSegmentStops="[0, 200,400,600,800, 1000]"
                  :segmentColors='["#48CFAD", "#A0D468", "#FFCE54", "#FC6E51", "#EF4135"]'
                  needleColor="steelblue"
                  :currentValueText='"Current Motor Value: \${value} A"'
                  :value="datainv[1].data[0].Current"
                  textColor="${textColor}"
                  />
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="6">
                <v-card class="mt-5" height="350">
                  <v-chip variant="elevated" color="#FC6E51" label>
                    <h3>Power</h3></v-chip
                  >

                  <!-- <apexchart
                    class="mt-5"
                    type="radialBar"
                    height="500"
                    :options="chartOptions"
                    :series="[datainv[1].data[0].Power]"
                  ></apexchart> -->
                  <vue-speedometer 
                  :width="400"
                  height="300"
                  class="mt-15 text-center"
                  :forceRender="true"
                  :maxSegmentLabels="1"
                  :customSegmentStops="[0, 200,400,600,800, 1000]"
                  :segmentColors='["#48CFAD", "#A0D468", "#FFCE54", "#FC6E51", "#EF4135"]'
                  needleColor="steelblue"
                  :currentValueText='"Power Value: \${value} W"'
                  :value="datainv[1].data[0].Power"
                  textColor="${textColor}"
                  />
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card class="mt-5 mb-5" height="400">
                  <apexchart
                    class="mt-10"
                    type="line"
                    height="320"
                    :options="realtimechartoptions"
                    :series="[resultchart[1]]"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script>
import VueSpeedometer from "vue-speedometer";
import axios from "axios";

const urlINV = import.meta.env.VITE_APP_IPNODERED;
export default {
  components: { VueSpeedometer },

  data() {
    return {
      tab: null,

      datainv: [
        {
          title: "inv",
          data: [
            {
              Voltage_in: 17296,
              Voltage_out: 51116,
              Frequency_in: 0,
              Frequency_out: 0,
              Crurrent: 16968,
              Power: 0,
            },
          ],
        },
        {
          title: "inv",
          data: [
            {
              Voltage_in: 200,
              Voltage_out: 200,
              Frequency_in: 50,
              Frequency_out: 50,
              Crurrent: 12,
              Power: 220,
            },
          ],
        },
      ],

      chartOptions: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2,
              },
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91],
          },
        },
        labels: ["Average Results"],
      },

      resultchart: [
        {
          name: "Line 1",
          data: [
            {
              x: 1692674376000,
              y: 84,
            },
            {
              x: 1692674316000,
              y: 96,
            },
          ],
        },
        {
          name: "Line 2",
          data: [
            {
              x: 1692674376000,
              y: 56,
            },
            {
              x: 1692674316000,
              y: 78,
            },
          ],
        },
      ],

      realtimechartoptions: {
        chart: {
          type: "line",
          stacked: false,
          height: 350,
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000,
            },
          },
          zoom: {
            enabled: true,
            type: "xy",
            autoScaleYaxis: true,
            zoomedArea: {
              fill: {
                color: "#90CAF9",
                opacity: 0.4,
              },
              stroke: {
                color: "#0D47A1",
                opacity: 0.4,
                width: 1,
              },
            },
          },
          toolbar: {
            tools: {
              download: false,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
            },
            export: {
              csv: {
                filename:
                  "Energy_CSV_data" +
                  " " +
                  new Date().toISOString().split("T")[0],
                ColumnDelimiter: ",",
                headerCategory: "Datetime",
                headerValue: "Value",
                dateFormatter(timestamp) {
                  let t =
                    new Date(timestamp).toISOString().split("T")[0] +
                    " " +
                    new Date(timestamp)
                      .toISOString()
                      .split("T")[1]
                      .split(".")[0];

                  return t;
                },
              },
            },
            autoSelected: "zoom",
          },
        },
        colors: [
          "#308FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#3F51B5",
          "#EA3546",
        ],
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: undefined,
          width: 2,
          dashArray: 0,
        },
        xaxis: {
          type: "datetime",
          categories: [],
          labels: {
            show: true,
            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              cssClass: "apexcharts-xaxis-label",
            },
            offsetX: 0,
            offsetY: 0,
            format: undefined,
            formatter: undefined,
            datetimeUTC: false,
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "dd/MM HH:mm",
            },
          },
          axisBorder: {
            show: true,
            color: "#78909C",
            height: 1,
            width: "100%",
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",
            color: "#78909C",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
          tickAmount: 10,
          tickPlacement: "between",
          min: undefined,
          max: undefined,
          range: undefined,
          floating: false,
          position: "bottom",
          title: {
            text: "",
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              cssClass: "apexcharts-xaxis-title",
            },
          },
          crosshairs: {
            show: true,
            width: 1,
            position: "back",
            opacity: 0.9,
            stroke: {
              color: "#b6b6b6",
              width: 0,
              dashArray: 0,
            },
            fill: {
              type: "solid",
              color: "#B1B9C4",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 1,
              opacity: 0.4,
            },
          },
        },
        legend: {
          position: "bottom",
          offsetY: 0,
        },
        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          fillSeriesColor: false,
          style: {
            fontSize: "12px",
            fontFamily: undefined,
          },
          onDatasetHover: {
            highlightDataSeries: true,
          },
          x: {
            show: true,
            format: "dd/MM/yyyy HH:mm:ss",
            formatter: undefined,
          },
          y: {
            formatter: undefined,
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
          marker: {
            show: true,
          },
          fixed: {
            enabled: false,
            position: "topRight",
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {},
      },

      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
    };
  },
  created() {
    this.invload();
    this.refresh();
  },
  methods: {
    async invload() {
      await axios.get(urlINV + "/inv").then((response) => {
        console.log(response);

        this.datainv = response.data;
        // this.resultOEE = response.data;
      });
    },

    refresh() {
      this.intervalLoad = setInterval(() => {
        this.invload();
      }, 11000);
    },
  },
};
</script>

<style scope>
.textfont {
  color: white;
  font-weight: 100;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
