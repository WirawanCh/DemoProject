<template>
  <!-- <pre class="pl-15">{{power }}</pre> -->
<!-- <span class="pl-15"> {{ this.resultpm[0].series[0].data }} </span>  -->
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12 " class="pl-15">
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="start">
        <v-tab value="1">Line 1</v-tab>
        <v-tab value="2">Line 2</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <!---------------------------------Line1------------------------------------------------->
        <v-window-item value="1">
          <v-container fluid>
            
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="4">
                <v-card height="250">
                  <v-chip variant="elevated" color="#569DAA" label>
                    <h3>Power</h3></v-chip
                  >

                 
                  <!-- <apexchart class="mt-5" type="radialBar" height="300" :options="chartOptions" :series="[power]"></apexchart> -->
                  <vue-speedometer
                    id="Line1PowerDay"
                    height="150"
                    class="mt-5 text-center"
                    :value="power"
                    needleColor="steelblue"
                    :needleTransitionDuration="4000"
                    :segmentColors="[
                      '#48CFAD',
                      '#A0D468',
                      '#FFCE54',
                      '#FC6E51',
                      '#EF4135',
                    ]"
                    needleTransition="easeElastic"
                    currentValueText="Power day Value: #{value}"
                    currentValuePlaceholderStyle="#{value}"
                    textColor="${textColor}"
                  />


                </v-card>
                <v-col></v-col>
                <v-card height="200">
                  <v-chip variant="elevated" color="#569DAA" label>
                    <h3>Current</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="200"
                    :options="chartOptionsCurrentbar"
                    :series="this.currentBar"
                  ></apexchart>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="12" lg="4">
                <v-card height="250">
                  <v-chip variant="elevated" color="#577D86" label>
                    <h3>Power Day</h3></v-chip
                  >

                  <!-- <apexchart class="mt-5" type="radialBar" height="300" :options="chartOptions" :series="[powerDay]"></apexchart> -->

                  <vue-speedometer
                    id="Line1PowerDay"
                    height="150"
                    class="mt-5 text-center"
                    :value="powerDay"
                    needleColor="steelblue"
                    :needleTransitionDuration="4000"
                    :segmentColors="[
                      '#48CFAD',
                      '#A0D468',
                      '#FFCE54',
                      '#FC6E51',
                      '#EF4135',
                    ]"
                    needleTransition="easeElastic"
                    currentValueText="Power day Value: #{value}"
                    currentValuePlaceholderStyle="#{value}"
                    textColor="${textColor}"
                  />
                </v-card>
                <v-col></v-col>
                <v-card height="200">
                  <v-chip variant="elevated" color="#87CBB9" label>
                    <h3>Volt</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="200"
                    :options="chartOptionsCurrentbar"
                    :series="this.VoltBar"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="4">
                <v-card height="475">
                  <v-row>
                    <v-col>
                      <v-chip variant="elevated" color="#48CFAD" label>
                        <h3>Power Realtime</h3></v-chip
                      >
                    </v-col>
                    <v-col cols="auto" class="mt-1 pr-5">
                      <v-btn
                        icon="mdi-file-excel"
                        color="green"
                        size="small"
                        @click="exportExcelL1"
                      ></v-btn>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="12" md="4" class="pl-5">
                      <span class="fontchart">
                        Min : {{ this.resultpm[0].series[0].min.toFixed(2) }}</span
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="4" class="pl-5">
                      <span class="fontchart">
                        Avg : {{ this.resultpm[0].series[0].avg.toFixed(2) }}</span
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="4" class="pl-5">
                      <span class="fontchart">
                        Max : {{ this.resultpm[0].series[0].max.toFixed(2) }}</span
                      >
                    </v-col>
                  </v-row>

                  <apexchart
                    class="mt-10"
                    type="line"
                    height="320"
                    :options="realtimechartoptionsL1"
                    :series="resultpmrealtimeL1"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>

            <!----------------------------------KWh Bar--------------------------------------->
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="6">
                <v-card height="350">
                  <v-chip variant="elevated" color="#836953" label>
                    <h3>Electric Energy (kWh)</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="300"
                    :options="chartOptionsKWhbar"
                    :series="this.kwhBar"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="6">
                <v-card height="350">
                  <v-chip variant="elevated" color="#f68c70" label>
                    <h3>
                      Electric Energy Per Million (kWh per Million)
                    </h3></v-chip
                  >

                  <apexchart
                    type="bar"
                    height="300"
                    :options="chartOptionsKWhbar"
                    :series="this.kwhPermilBar"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>

        <!-----------------------------------Line2-------------------------------------------->
        <v-window-item value="2">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="4">
                <v-card height="250">
                  <v-chip variant="elevated" color="#205072" label>
                    <h3>Power</h3></v-chip
                  >

                  <!-- <apexchart class="mt-5" type="radialBar" height="300" :options="chartOptions" :series="[powerL2]"></apexchart> -->

                  <vue-speedometer 
                  class="mt-5 text-center"
                  :forceRender="true"
                  :maxSegmentLabels="1"
                  :customSegmentStops="[0, 200,400,600,800, 1000]"
                  :segmentColors='["#48CFAD", "#A0D468", "#FFCE54", "#FC6E51", "#EF4135"]'
                  needleColor="steelblue"
                  :currentValueText='"Power Value: \${value}"'
                  :value="powerL2"
                  textColor="${textColor}"
                  />
                </v-card>
                <v-col></v-col>
                <v-card height="200">
                  <v-chip variant="elevated" color="#48CFAD" label>
                    <h3>Current</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="200"
                    :options="chartOptionsCurrentbar"
                    :series="this.currentBarL2"
                  ></apexchart>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="12" lg="4">
                <v-card height="250">
                  <v-chip variant="elevated" color="#569DAA" label>
                    <h3>Power Day</h3></v-chip
                  >

                  <!-- <apexchart class="mt-5" type="radialBar" height="300" :options="chartOptions" :series="[powerDayL2]"></apexchart> -->

                  <vue-speedometer 
                  class="mt-5 text-center"
                  :forceRender="true"
                  :maxSegmentLabels="1"
                  :customSegmentStops="[0, 200,400,600,800, 1000]"
                  :segmentColors='["#48CFAD", "#A0D468", "#FFCE54", "#FC6E51", "#EF4135"]'
                  needleColor="steelblue"
                  :currentValueText='"Power Value: \${value}"'
                  :value="powerDayL2"
                  textColor="${textColor}"
                  />
                </v-card>
                <v-col></v-col>
                <v-card height="200">
                  <v-chip variant="elevated" color="#569DAA" label>
                    <h3>Volt</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="200"
                    :options="chartOptionsCurrentbar"
                    :series="this.VoltBarL2"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="4">
                <v-card height="475">
                  <v-row>
                    <v-col>
                      <v-chip variant="elevated" color="#48CFAD" label>
                        <h3>Power Realtime</h3></v-chip
                      >
                    </v-col>
                    <v-col cols="auto" class="mt-1 pr-5">
                      <v-btn
                        icon="mdi-file-excel"
                        color="green"
                        size="small"
                        @click="exportExcelL2"
                      ></v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="4" class="pl-5">
                      <span class="fontchart">
                        Min : {{ this.resultpm[1].series[0].min.toFixed(2) }}</span
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="4" class="pl-5">
                      <span class="fontchart">
                        Avg : {{ this.resultpm[1].series[0].avg.toFixed(2) }}</span
                      >
                    </v-col>
                    <v-col cols="12" sm="12" md="4" class="pl-5">
                      <span class="fontchart">
                        Max : {{ this.resultpm[1].series[0].max.toFixed(2) }}</span
                      >
                    </v-col>
                  </v-row>
                  <apexchart
                    class="mt-10"
                    type="line"
                    height="320"
                    :options="realtimechartoptionsL2"
                    :series="this.resultpmrealtimeL2"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>

            <!----------------------------------KWh Bar--------------------------------------->
            <v-row>
              <v-col cols="12" sm="12" md="12" lg="6">
                <v-card height="350">
                  <v-chip variant="elevated" color="#836953" label>
                    <h3>Electric Energy (kWh)</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="300"
                    :options="chartOptionsKWhbar"
                    :series="this.kwhBarL2"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="6">
                <v-card height="350">
                  <v-chip variant="elevated" color="#f68c70" label>
                    <h3>
                      Electric Energy Per Million (kWh per Million)
                    </h3></v-chip
                  >

                  <apexchart
                    type="bar"
                    height="300"
                    :options="chartOptionsKWhbar"
                    :series="this.kwhPermilBarL2"
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
import axios from "axios";
import VueSpeedometer from "vue-speedometer";
import xlsx from "xlsx/dist/xlsx.full.min";

const urlEnergy = import.meta.env.VITE_APP_IPNODERED;

export default {
  components: { VueSpeedometer },

  data() {
    return {
      setTime: "",
      tab: null,
      textColor: "black",
      DataChart: [],
      seriesPie: [44, 55, 41, 17, 15],

      datas: [],
      resultpm: [
        {
          _id: {
            line: "Line 1",
          },
          series: [
            {
              data: [
                {
                  x: 0,
                  y: 0,
                },
                0,
              ],
              name: "Power",
              min: 0,
              avg: 0,
              max: 0,
            },
          ],
        },
        {
          _id: {
            line: "Line 2",
          },
          series: [
            {
              data: [
                {
                  x: 0,
                  y: 0,
                },
              ],
              name: "Power",
              min: 0,
              avg: 0,
              max: 0,
            },
          ],
        },
      ],
      csvPower: [],
      currentBar: [],
      kwhBar: [],
      VoltBar: [],
      kwhPermilBar: [],
      currentBarL2: [],
      VoltBarL2: [],
      kwhBarL2: [],
      kwhPermilBarL2: [],
      dataresultpmrealtimeL1: [],

      power: "",
      powerDay: "",
      powerL2: "",
      powerDayL2: "",

      resultpmseries: [],

      resultpmrealtimeL1: [],
      resultpmrealtimeL2: [],


      seriesKWbar: [
        {
          data: [55, 65, 26],
        },
      ],
      chartOptionsCurrentbar2: {
        chart: {
          type: "bar",
          height: 430,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top",
            },
            distributed: true,
          },
        },
        colors: ["#f08080", "#f4978e", "#f8ad9d", "#fbc4ab", "#ffdab9"],
        dataLabels: {
          enabled: true,
          offsetX: 30,
          style: {
            fontSize: "12px",
            colors: ["#4c4c4c"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: ["Current_L1", "Current_L2", "Current_L1", "Current_Avg"],
        },
      },

      chartOptionsKWline: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        colors: ["#f08080", "#f4978e", "#f8ad9d", "#fbc4ab"],

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Current Day",
            "Shift A",
            "Shift B",
            "Shift C",
            "Previous Day",
          ],
        },
      },

      chartOptionsKWhbar: {
        chart: {
          height: 350,
          type: "bar",
        },
        colors: ["#836953", "#9e826b", "#f8ad9d", "#fbc4ab", "#ffdab9"],
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top", // top, center, bottom
            },
            distributed: true,
          },
        },

        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return (
              val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + "kWh"
            );
          },
          offsetY: -15,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "Previous Day",
            "Shift A",
            "Shift B",
            "Shift C",
            "Total",
          ],
          labels: {
            style: {
              colors: ["#000", "#000", "#000", "#000", "#000"],
              fontSize: "12px",
            },
          },
        },
      },

    

      chartOptions: {
            chart: {
              type: 'radialBar',
              offsetY: -20,
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                  background: "#e7e7e7",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                  }
                },
                dataLabels: {
                  name: {
                    show: false
                  },
                  value: {
                    offsetY: -2,
                    fontSize: '22px'
                  }
                }
              }
            },
            grid: {
              padding: {
                top: -10
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
              },
            },
            labels: ['Average Results'],
          },
          


          resultpmL1:[],



      realtimechartoptionsL1: {
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
            formatter: function(val) {
              return parseFloat(val).toFixed(2)
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
        yaxis: {
            formatter: function(val) {
              return parseFloat(val).toFixed(2)
            },
         
          },
      },

      realtimechartoptionsL2: {
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

      seriesKWhbar: [
        {
          data: [21, 22, 10, 28, 16],
        },
      ],

      seriesCurrentbar: [
        {
          data: [55, 65, 26],
        },
      ],
      chartOptionsCurrentbar: {
        chart: {
          type: "bar",
          height: 430,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top",
            },
            distributed: true,
          },
        },
        colors: ["#205072", "#577D86", "#569DAA", "#87CBB9", "#B9EDDD"],
        dataLabels: {
          enabled: true,
          offsetX: 30,
          style: {
            fontSize: "12px",
            colors: ["#4c4c4c"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: ["Current_L1", "Current_L2", "Current_L1", "Current_Avg"],
        },
      },

      chartOptionsKWhpermilbar: {
        chart: {
          height: 350,
          type: "bar",
        },
        colors: ["#205072", "#577D86", "#569DAA", "#87CBB9", "#B9EDDD"],
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top", // top, center, bottom
            },
            distributed: true,
          },
        },

        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return (
              val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + "kWh"
            );
          },
          offsetY: -15,
          style: {
            fontSize: "12px",
            colors: ["#304758"],
          },
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            "Previous Day",
            "Shift A",
            "Shift B",
            "Shift C",
            "Today",
          ],
          labels: {
            style: {
              colors: ["#000", "#000", "#000", "#000", "#000"],
              fontSize: "12px",
            },
          },
        },
      },

      seriesKWhpermilbar: [
        {
          data: [21, 22, 10, 28, 16],
        },
      ],

      seriesKWpermilline: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],

      chartOptionsKWpermilline: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        colors: ["#205072", "#577D86", "#569DAA", "#87CBB9", "#B9EDDD"],

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Current Day",
            "Shift A",
            "Shift B",
            "Shift C",
            "Previous Day",
          ],
        },
      },
    };
  },
  created() {
    this.loadpm();
    this.pmrealtimeload();
  },

  methods: {
    // loadActual() {
    //   const DashboardStore = useDashboardStore();
    //   DashboardStore.LoadAverage();
    //   this.Actualavg[0] = DashboardStore.$state.DataActual;
    // },

    async loadpm() {
      await axios.get(urlEnergy + "/pm").then((res) => {
        this.datas = res.data;
        this.powerL2 = this.datas[1].data.Power;
        this.powerDayL2 = this.datas[1].data.Power_Day;

        this.power = this.datas[0].data.Power;
        this.powerDay = this.datas[0].data.Power_Day;

        this.currentBar = [
          {
            data: [
              this.datas[0].data.Current_L1,
              this.datas[0].data.Current_L2,
              this.datas[0].data.Current_L3,
              this.datas[0].data.Current_Avg,
            ],
          },
        ];

        this.currentBarL2 = [
          {
            data: [
              this.datas[1].data.Current_L1,
              this.datas[1].data.Current_L2,
              this.datas[1].data.Current_L3,
              this.datas[1].data.Current_Avg,
            ],
          },
        ];

        this.VoltBar = [
          {
            data: [
              this.datas[0].data.Volt_L1,
              this.datas[0].data.Volt_L2,
              this.datas[0].data.Volt_L3,
              this.datas[0].data.Volt_L_N,
            ],
          },
        ];

        this.VoltBarL2 = [
          {
            data: [
              this.datas[1].data.Volt_L1,
              this.datas[1].data.Volt_L2,
              this.datas[1].data.Volt_L3,
              this.datas[1].data.Volt_L_N,
            ],
          },
        ];

        this.kwhBar = [
          {
            data: [
              this.datas[0].data.kWh_PDay,
              this.datas[0].data.kWh_A,
              this.datas[0].data.kWh_B,
              this.datas[0].data.kWh_C,
              this.datas[0].data.kWh_Total,
            ],
          },
        ];

        this.kwhBarL2 = [
          {
            data: [
              this.datas[1].data.kWh_PDay,
              this.datas[1].data.kWh_A,
              this.datas[1].data.kWh_B,
              this.datas[1].data.kWh_C,
              this.datas[1].data.kWh_Total,
            ],
          },
        ];

        this.kwhPermilBar = [
          {
            data: [
              this.datas[0].data.kWhperMillion_PDay,
              this.datas[0].data.kWhperMillion_A,
              this.datas[0].data.kWhperMillion_B,
              this.datas[0].data.kWhperMillion_C,
              this.datas[0].data.kWhperMillion_Day,
            ],
          },
        ];

        this.kwhPermilBarL2 = [
          {
            data: [
              this.datas[1].data.kWhperMillion_PDay,
              this.datas[1].data.kWhperMillion_A,
              this.datas[1].data.kWhperMillion_B,
              this.datas[1].data.kWhperMillion_C,
              this.datas[1].data.kWhperMillion_Day,
            ],
          },
        ];

        console.log(res);
      });
      this.setTime = setInterval(() => {
        axios.get(urlEnergy + "/pm").then((res) => {
          this.datas = res.data;

          this.powerL2 = this.datas[1].data.Power;
          this.powerDayL2 = this.datas[1].data.Power_Day;

          this.power = this.datas[0].data.Power;
          this.powerDay = this.datas[0].data.Power_Day;

          this.currentBar = [
            {
              data: [
                this.datas[0].data.Current_L1,
                this.datas[0].data.Current_L2,
                this.datas[0].data.Current_L3,
                this.datas[0].data.Current_Avg,
              ],
            },
          ];

          this.VoltBar = [
            {
              data: [
                this.datas[0].data.Volt_L1,
                this.datas[0].data.Volt_L2,
                this.datas[0].data.Volt_L3,
                this.datas[0].data.Volt_L_N,
              ],
            },
          ];

          this.kwhBar = [
            {
              data: [
                this.datas[0].data.kWh_PDay,
                this.datas[0].data.kWh_A,
                this.datas[0].data.kWh_B,
                this.datas[0].data.kWh_C,
                this.datas[0].data.kWh_Total,
              ],
            },
          ];

          this.kwhPermilBar = [
            {
              data: [
                this.datas[0].data.kWhperMillion_PDay,
                this.datas[0].data.kWhperMillion_A,
                this.datas[0].data.kWhperMillion_B,
                this.datas[0].data.kWhperMillion_C,
                this.datas[0].data.kWhperMillion_Day,
              ],
            },
          ];
        });
      }, 50000);
    },

    async pmrealtimeload() {
      await axios.get(urlEnergy + "/pmrealtimebuffer").then((response) => {
        console.log(response);
        this.resultpm = response.data;

        this.resultpmrealtimeL1 = [{ data: this.resultpm[0].series[0].data }];
        
        // for (let i = 0 ; i < this.resultpm[0].series[0].data.lenght; i++ ){
        // this.resultpmL1 = this.resultpm[0].series[0].data[i].y.toFixed(2)
        // }

        this.resultpmrealtimeL2 = [{ data: this.resultpm[1].series[0].data }];
      });
    },

    exportExcelL1() {
      this.csvPower = [];

      for (var k = 0; k < this.resultpm[0].series[0].data.length; k++) {
        this.csvPower.push({
          Line: this.resultpm[0]._id.line,
          Name: this.resultpm[0].series[0].name,
          Datetime: new Date(
            this.resultpm[0].series[0].data[k].x
          ).toLocaleString("en-GB"),
          data: this.resultpm[0].series[0].data[k].y,
        });
      }
      // this.csvPower.push({
      //   Min : this.this.resultpm[0].series[0].min,
      //   Max : this.resultpm[0].series[0].max,
      //   Average : this.resultpm[0].series[0].avg

      // })
      console.log(this.csvPower);
      const XLSX = xlsx;
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(this.csvPower);
      XLSX.utils.book_append_sheet(workbook, worksheet, "PowerLine1");
      XLSX.writeFile(workbook, "PowerLine1.xlsx");
    },

    exportExcelL2() {
      this.csvPower = [];
      for (var k = 0; k < this.resultpm[1].series[0].data.length; k++) {
        this.csvPower.push({
          Line: this.resultpm[1]._id.line,
          Name: this.resultpm[1].series[0].name,
          Datetime: new Date(
            this.resultpm[1].series[0].data[k].x
          ).toLocaleString("en-GB"),
          data: this.resultpm[1].series[0].data[k].y,
        });
      }
      console.log(this.csvPower);
      const XLSX = xlsx;
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(this.csvPower);
      XLSX.utils.book_append_sheet(workbook, worksheet, "PowerLine2");
      XLSX.writeFile(workbook, "PowerLine2.xlsx");
    },
  },
};
</script>

<style scope>
.fontchart {
  color: gray;
  font-weight: 100;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
