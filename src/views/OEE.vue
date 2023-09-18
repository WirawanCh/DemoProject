<template>
  <!-- <span class="pl-15"> {{datatableOEEL1}} </span> -->
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" class="pl-15">
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="start">
        <v-tab value="3">Overall</v-tab>
        <v-tab value="1">Line 1</v-tab>
        <v-tab value="2">Line 2</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <!---------------------------------------Tab Lne1------------------------------------------->
        <v-window-item value="1">
          <v-container fluid>
            <!------------------------Card OEE , Availabiity------------------------------>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="3">
                <v-card height="400">
                  <v-chip variant="elevated" color="#205072" label>
                    <h3>Current Day</h3></v-chip>
                  
                  <apexchart
                    type="radialBar"
                    height="350"
                    :options="chartOptions8"
                    :series="seriesLine1"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="6" lg="6">
                <v-card>
                  <v-chip variant="elevated" color="#329D9C" label>
                    <h3>Total Overall Equipment Effectiveness</h3></v-chip
                  >

                  <v-data-table
                    height="320"
                    :headers="headers"
                    :items="datatableOEEL1"
                    :items-per-page="5"
                    class="elevation-1"
                  ></v-data-table>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="3">
                <v-card height="400">
                  <v-chip variant="elevated" color="#0077B5" label>
                    <h3>Spoilage</h3></v-chip
                  >

                  <apexchart
                    type="line"
                    height="350"
                    :options="chartOptionsSpoilage"
                    :series="datas[0].SpoilageSeries"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="4">
                <v-card height="350">
                  <v-chip variant="elevated" color="#56C596" label>
                    <h3>Speed Series</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="260"
                    :options="chartOptionsSpeed"
                    :series="datas[0].Speedseries"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="6" lg="8">
                <v-card height="350">
                  <v-chip variant="elevated" color="#39539E" label>
                    <h3>Work Hour</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="300"
                    :options="chartOptionsWorkhour"
                    :series="seriesWorkHourLine1"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
        <!---------------------------------------Tab Line 2-------------------------------------------->
        <v-window-item value="2">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="3">
                <v-card height="400">
                  <v-chip variant="elevated" color="#205072" label>
                    <h3>Current Day</h3></v-chip
                  >
                  <apexchart
                    type="radialBar"
                    height="350"
                    :options="chartOptions8"
                    :series="seriesLine2"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="6" lg="6">
                <v-card>
                  <v-chip variant="elevated" color="#329D9C" label>
                    <h3>Total Overall Equipment Effectiveness</h3></v-chip
                  >
                  <v-data-table
                    height="320"
                    :headers="headers"
                    :items="datatableOEEL2"
                    :items-per-page="5"
                    class="elevation-1"
                  ></v-data-table>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="3">
                <v-card height="400">
                  <v-chip variant="elevated" color="#0077B5" label>
                    <h3>Spoilage</h3></v-chip
                  >
                  <apexchart
                    type="line"
                    height="350"
                    :options="chartOptionsSpoilage"
                    :series="datas[1].SpoilageSeries"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="4">
                <v-card height="350">
                  <v-chip variant="elevated" color="#56C596" label>
                    <h3>Speed Series</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="260"
                    :options="chartOptionsSpeed"
                    :series="datas[1].Speedseries"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="6" lg="8">
                <v-card height="350">
                  <v-chip variant="elevated" color="#39539E" label>
                    <h3>Work Hour</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="300"
                    :options="chartOptionsWorkhour"
                    :series="seriesWorkHourLine2"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
        <!---------------------------------------Tab Line Overall-------------------------------------------->
        <v-window-item value="3">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="3">
                <v-card height="400">
                  <v-chip variant="elevated" color="#205072" label>
                    <h3>Current Day</h3></v-chip
                  >
                  <apexchart
                    type="radialBar"
                    height="350"
                    :options="chartOptions8"
                    :series="seriesLineOverall"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="6" lg="6">
                <v-card>
                  <v-chip variant="elevated" color="#329D9C" label>
                    <h3>Total Overall Equipment Effectiveness</h3></v-chip
                  >

                  <v-data-table
                    height="320"
                    :headers="headers"
                    :items="this.datatableOverall"
                    :items-per-page="5"
                    class="elevation-1"
                  ></v-data-table>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="12" lg="3">
                <v-card height="400">
                  <v-chip variant="elevated" color="#0077B5" label>
                    <h3>Spoilage</h3></v-chip
                  >

                  <apexchart
                    type="line"
                    height="350"
                    :options="chartOptionsSpoilage"
                    :series="this.spoilageOverall"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="6" lg="3">
                <v-card height="350">
                  <v-chip variant="elevated" color="#56C596" label>
                    <h3>Speed Series</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="300"
                    :options="chartOptionsSpeed"
                    :series="this.SpeedseriesOverall"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="6" lg="5">
                <v-card height="350">
                  <v-chip variant="elevated" color="#39539E" label>
                    <h3>Work Hour</h3></v-chip
                  >
                  <apexchart
                    type="bar"
                    height="300"
                    :options="chartOptionsWorkhour"
                    :series="seriesWorkHouroverall"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="12" sm="12" md="6" lg="4">
                <v-card height="350">
                  <v-chip variant="elevated" color="#1ab7ea" label>
                    <h3>OEE realtime</h3></v-chip
                  >
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                      lg="6"
                      class="pl-5 pr-5 mt-3 d-flex "
                    >
                      <v-select
                        v-model="selectedOEEtime"
                        :items="itemsTime"
                        :value="itemsTime.value"
                        variant="outlined"
                        density="compact"
                        label="Time"
                        @input="OEEload()"
                      ></v-select>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                      lg="6"
                      class="pr-5 pl-5 mt-3 d-flex"
                    >
                      <v-select
                       v-model="selectedOEEline"
                        :items="itemLine"
                        :value="itemLine.value"
                        variant="outlined"
                        density="compact"
                        label="Line"
                        @input="OEEload()"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <apexchart
                    height="230"
                    type="line"
                    :options="realtimechartoptions"
                    :series="responseData"
                    @input="OEEload()"
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
// import { useOEEStore } from "../store";
const urlOEE = import.meta.env.VITE_APP_IPNODERED;

export default {
  data() {
    return {
      overallOee: "",
      tab: null,
      seriesWorkHourLine1: [],
      seriesWorkHourLine2: [],

      datatableOEEL1:[],
      datatableOEEL2:[],

      seriesWorkHouroverall: [],
      datatableOverall: [],
      spoilageOverall: [],
      SpeedseriesOverall: [],
      WorkHourOverall: [],
      responseData:[],

      seriesCurrent: [],
      datasOEE: [],
      chartOEErealtime: [],

      chartOEEAll: "",

      chartOEE: [],
      resultOEE:[],
     
      resultOEE2: [
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
              y: 95,
            },
            {
              x: 1692674316000,
              y: 80,
            },
          ],
        },
      ],

      selectedOEEtime: 5,
      selectedOEEline: "All",

      itemsPerPage: 3,
      intervalLoad: undefined,
      headers: [
        {
          title: "Description",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "OEE", align: "end", key: "oee" },
        { title: "%A", align: "end", key: "a" },
        { title: "%P", align: "end", key: "p" },
        { title: "%Q", align: "end", key: "q" },
      ],

      itemsTime: [
        { title: "5min", value: 5 },
        { title: "10min", value: 10 },
        { title: "15min", value: 15 },
        { title: "30min", value: 30 },
        { title: "Hour", value: 60 },
        { title: "Day (Average per 10 Minutes)", value: 1440 },
        { title: "Week (Average per 30 Minutes)", value: 10080 },
      ],

      itemLine: [
        { title: "Line 1", value: "Line 1" },
        { title: "Line 2", value: "Line 2" },
        { title: "All Line", value: "All" },
      ],

      chartOptionsSpoilage: {
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
        title: {
          text: "Product Spoilage",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
        xaxis: {
          categories: [
            "Previous Day",
            "Shift A",
            "Shift B",
            "Shift C",
            "Shift D",
            "Today",

         
          ],
        },
      },

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

      chartOptions8: {
        chart: {
          height: 390,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
        labels: ["%OEE", "%A", "%P", "%Q"],
        legend: {
          show: true,
          floating: true,
          fontSize: "12px",
          position: "left",
          offsetX: 10,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 300,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },

      chartOptionsSpeed: {
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
        colors: ["#205072", "#329D9C", "#56C596"],
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
          categories: ["Setting Speed", "Actual Speed", "Target Speed"],
        },
      },
      seriesSpeed: [],

      seriesLine1: [],
      seriesLine2: [
        {
          OEE: 0,
          Availability: 0,
          Performance: 0,
          Quality: 0,
        },
      ],
      datas: [
        {
          OEE: 0,
          Availability: 0,
          Performance: 0,
          Quality: 0,

          runstatus: "stop",
          motorstatus: "stop",
          PieceDip: 0,
          Speedseries: [{ name: "pcs/min", data: [0, 0, 0] }],
          PieceDipSeries: [{ name: "pcs", data: [0, 0, 0, 0, 0] }],
          SpoilageSeries: [{ name: "pcs", data: [0, 0] }],
          OEEDatatable: [
            { name: "Previous day", oee: 0, a: 0, p: 0, q: 0 },
            { name: "Shift A", oee: 0, a: 0, p: 0, q: 0 },
            { name: "Shift B", oee: 0, a: 0, p: 0, q: 0 },
            { name: "Shift C", oee: 0, a: 0, p: 0, q: 0 },
            { name: "Current day", oee: 0, a: 0, p: 0, q: 0 },
          ],
          pcsDipdata: [
            { time: "Previous day", left: 0, right: 0, total: 0 },
            { time: "Shift A", left: 0, right: 0, total: 0 },
            { time: "Shift B", left: 0, right: 0, total: 0 },
            { time: "Shift C", left: 0, right: 0, total: 0 },
            { time: "Current day", left: 0, right: 0, total: 0 },
          ],
          WorkHour: [
            { name: "Previous day", runtime: 0, stoptime: 0 },
            { name: "Shift A", runtime: 0, stoptime: 0 },
            { name: "Shift B", runtime: 0, stoptime: 0 },
            { name: "Shift C", runtime: 0, stoptime: 0 },
            { name: "Current day", runtime: 0, stoptime: 0 },
          ],
        },
        {
          OEE: 0,
          Availability: 0,
          Performance: 0,
          Quality: 0,

          runstatus: "stop",
          motorstatus: "stop",
          PieceDip: 0,
          Speedseries: [{ name: "pcs/min", data: [0, 0, 0] }],
          PieceDipSeries: [{ name: "pcs", data: [0, 0, 0, 0, 0] }],
          SpoilageSeries: [{ name: "pcs", data: [0, 0] }],
          OEEDatatable: [
            { name: "Previous day", oee: 0, a: 0, p: 0, q: 0 },
            { name: "Shift A", oee: 0, a: 0, p: 0, q: 0 },
            { name: "Shift B", oee: 0, a: 0, p: 0, q: 0 },
            { name: "Shift C", oee: 0, a: 0, p: 0, q: 0 },
            { name: "Current day", oee: 0, a: 0, p: 0, q: 0 },
          ],
          pcsDipdata: [
            { time: "Previous day", left: 0, right: 0, total: 0 },
            { time: "Shift A", left: 0, right: 0, total: 0 },
            { time: "Shift B", left: 0, right: 0, total: 0 },
            { time: "Shift C", left: 0, right: 0, total: 0 },
            { time: "Current day", left: 0, right: 0, total: 0 },
          ],
          WorkHour: [
            { name: "Previous day", runtime: 0, stoptime: 0 },
            { name: "Shift A", runtime: 0, stoptime: 0 },
            { name: "Shift B", runtime: 0, stoptime: 0 },
            { name: "Shift C", runtime: 0, stoptime: 0 },
            { name: "Current day", runtime: 0, stoptime: 0 },
          ],
        },
      ],

      chartOptionsWorkhour: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        dataLabels: {},
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          categories: [
            "Previous day",
            "Shift A",
            "Shift B",
            "Shift C",
            "Current Day",
          ],
        },
        fill: {
          opacity: 1,
        },
        colors: ["#80c7fd", "#008FFB", "#80f1cb", "#00E396"],
        yaxis: {
          labels: {},
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
      },
    };
  },

  created() {
    this.load();
    this.refresh();
  },
  methods: {
    //  loadOEE() {
    //   const OEEStore = useOEEStore();
    //   OEEStore.Load();
    //   this.datasOEE = OEEStore.$state.datas;

    //   this.seriesCurrent = OEEStore.$state.seriesCurrent;
    //   this.seriesWorkHourLine1 = OEEStore.$state.seriesWorkHourLine1

    // },

    async load() {
      await axios.get(urlOEE + "/overalloee").then((response) => {
        this.datas = response.data;

  
        this.seriesLine1 = [
          this.datas[0].OEE.toFixed(2),
          this.datas[0].Availability.toFixed(2),
          this.datas[0].Performance.toFixed(2),
          this.datas[0].Quality.toFixed(2),
        ];

        this.seriesLine2 = [
          this.datas[1].OEE.toFixed(2),
          this.datas[1].Availability.toFixed(2),
          this.datas[1].Performance.toFixed(2),
          this.datas[1].Quality.toFixed(2),
        ];

        this.seriesLineOverall = [
          ((this.datas[0].OEE.toFixed(2) + this.datas[1].OEE) / 2).toFixed(2),
          ((this.datas[0].Availability + this.datas[1].Availability) / 2).toFixed(2),
          ((this.datas[0].Performance + this.datas[1].Performance) / 2).toFixed(2),
          ((this.datas[0].Quality + this.datas[1].Quality) / 2).toFixed(2),
        ];

        this.seriesWorkHourLine1 = [
          {
            name: "runtime",
            group: "runtime",
            data: [
              this.datas[0].WorkHour[0].runtime,
              this.datas[0].WorkHour[1].runtime,
              this.datas[0].WorkHour[2].runtime,
              this.datas[0].WorkHour[3].runtime,
              this.datas[0].WorkHour[4].runtime,
            ],
          },
          {
            name: "stoptime",
            group: "stoptime",
            data: [
              this.datas[0].WorkHour[0].stoptime,
              this.datas[0].WorkHour[1].stoptime,
              this.datas[0].WorkHour[2].stoptime,
              this.datas[0].WorkHour[3].stoptime,
              this.datas[0].WorkHour[4].stoptime,
            ],
          },
        ];

        this.seriesWorkHourLine2 = [
          {
            name: "runtime",
            group: "runtime",
            data: [
              this.datas[1].WorkHour[0].runtime,
              this.datas[1].WorkHour[1].runtime,
              this.datas[1].WorkHour[2].runtime,
              this.datas[1].WorkHour[3].runtime,
              this.datas[1].WorkHour[4].runtime,
            ],
          },
          {
            name: "stoptime",
            group: "stoptime",
            data: [
              this.datas[1].WorkHour[0].stoptime,
              this.datas[1].WorkHour[1].stoptime,
              this.datas[1].WorkHour[2].stoptime,
              this.datas[1].WorkHour[3].stoptime,
              this.datas[1].WorkHour[4].stoptime,
            ],
          },
        ];

        this.seriesWorkHouroverall = [
          {
            name: "runtime",
            group: "runtime",
            data: [
              (this.datas[0].WorkHour[0].runtime +
                this.datas[1].WorkHour[0].runtime) /
                2,
              (this.datas[0].WorkHour[1].runtime +
                this.datas[1].WorkHour[1].runtime) /
                2,
              (this.datas[0].WorkHour[2].runtime +
                this.datas[1].WorkHour[2].runtime) /
                2,
              (this.datas[0].WorkHour[3].runtime +
                this.datas[0].WorkHour[3].runtime) /
                2,
              (this.datas[0].WorkHour[4].runtime +
                this.datas[0].WorkHour[4].runtime) /
                2,
            ],
          },
          {
            name: "stoptime",
            group: "stoptime",
            data: [
              (this.datas[0].WorkHour[0].stoptime +
                this.datas[1].WorkHour[0].stoptime) /
                2,
              (this.datas[0].WorkHour[1].stoptime +
                this.datas[1].WorkHour[1].stoptime) /
                2,
              (this.datas[0].WorkHour[2].stoptime +
                this.datas[1].WorkHour[2].stoptime) /
                2,
              (this.datas[0].WorkHour[3].stoptime +
                this.datas[0].WorkHour[3].stoptime) /
                2,
              (this.datas[0].WorkHour[4].stoptime +
                this.datas[0].WorkHour[4].stoptime) /
                2,
            ],
          },
        ];

        this.datatableOEEL1 = [
          {
            name: "Previous day",
            oee: (this.datas[0].OEEDatatable[0].oee).toFixed(2),    
            a: (this.datas[0].OEEDatatable[0].a ).toFixed(2),
            p: (this.datas[0].OEEDatatable[0].p ).toFixed(2),
            q: (this.datas[0].OEEDatatable[0].q ).toFixed(2),     
          },
          {
            name: "Shift A",
            oee: (this.datas[0].OEEDatatable[1].oee).toFixed(2),    
            a: (this.datas[0].OEEDatatable[1].a ).toFixed(2),
            p: (this.datas[0].OEEDatatable[1].p ).toFixed(2),
            q: (this.datas[0].OEEDatatable[1].q ).toFixed(2),     
              
          },
          {
            name: "Shift B",
            oee: (this.datas[0].OEEDatatable[2].oee).toFixed(2),    
            a: (this.datas[0].OEEDatatable[2].a ).toFixed(2),
            p: (this.datas[0].OEEDatatable[2].p ).toFixed(2),
            q: (this.datas[0].OEEDatatable[2].q ).toFixed(2),     
              
          },
          {
            name: "Shift C",
            oee: (this.datas[0].OEEDatatable[3].oee).toFixed(2),    
            a: (this.datas[0].OEEDatatable[3].a ).toFixed(2),
            p: (this.datas[0].OEEDatatable[3].p ).toFixed(2),
            q: (this.datas[0].OEEDatatable[3].q ).toFixed(2),   
          },
          {
            name: "Current day",
            oee: (this.datas[0].OEEDatatable[4].oee).toFixed(2),    
            a: (this.datas[0].OEEDatatable[4].a ).toFixed(2),
            p: (this.datas[0].OEEDatatable[4].p ).toFixed(2),
            q: (this.datas[0].OEEDatatable[4].q ).toFixed(2),   
          },
        ];

        this.datatableOEEL2 = [
          {
            name: "Previous day",
            oee: (this.datas[1].OEEDatatable[0].oee).toFixed(2),    
            a: (this.datas[1].OEEDatatable[0].a ).toFixed(2),
            p: (this.datas[1].OEEDatatable[0].p ).toFixed(2),
            q: (this.datas[1].OEEDatatable[0].q ).toFixed(2),     
          },
          {
            name: "Shift A",
            oee: (this.datas[1].OEEDatatable[1].oee).toFixed(2),    
            a: (this.datas[1].OEEDatatable[1].a ).toFixed(2),
            p: (this.datas[1].OEEDatatable[1].p ).toFixed(2),
            q: (this.datas[1].OEEDatatable[1].q ).toFixed(2),     
              
          },
          {
            name: "Shift B",
            oee: (this.datas[1].OEEDatatable[2].oee).toFixed(2),    
            a: (this.datas[1].OEEDatatable[2].a ).toFixed(2),
            p: (this.datas[1].OEEDatatable[2].p ).toFixed(2),
            q: (this.datas[1].OEEDatatable[2].q ).toFixed(2),     
              
          },
          {
            name: "Shift C",
            oee: (this.datas[1].OEEDatatable[3].oee).toFixed(2),    
            a: (this.datas[1].OEEDatatable[3].a ).toFixed(2),
            p: (this.datas[1].OEEDatatable[3].p ).toFixed(2),
            q: (this.datas[1].OEEDatatable[3].q ).toFixed(2),   
          },
          {
            name: "Current day",
            oee: (this.datas[1].OEEDatatable[4].oee).toFixed(2),    
            a: (this.datas[1].OEEDatatable[4].a ).toFixed(2),
            p: (this.datas[1].OEEDatatable[4].p ).toFixed(2),
            q: (this.datas[1].OEEDatatable[4].q ).toFixed(2),   
          },
        ];


        this.datatableOverall = [
          {
            name: "Previous day",
            oee:
             ((this.datas[0].OEEDatatable[0].oee +
                this.datas[1].OEEDatatable[0].oee) /
              2).toFixed(2),
            a:
              ((this.datas[0].OEEDatatable[0].oee +
                this.datas[1].OEEDatatable[0].a) /
              2).toFixed(2),
            p:
              ((this.datas[0].OEEDatatable[0].oee +
                this.datas[1].OEEDatatable[0].p) /
              2).toFixed(2),
            q:
              ((this.datas[0].OEEDatatable[0].oee +
                this.datas[1].OEEDatatable[0].q) /
              2).toFixed(2),
          },
          {
            name: "Shift A",
            oee:
              ((this.datas[0].OEEDatatable[1].oee +
                this.datas[1].OEEDatatable[1].oee) /
              2).toFixed(2),
            a:
              ((this.datas[0].OEEDatatable[1].oee +
                this.datas[1].OEEDatatable[1].a) /
              2).toFixed(2),
            p:
              ((this.datas[0].OEEDatatable[1].oee +
                this.datas[1].OEEDatatable[1].p) /
              2).toFixed(2),
            q:
              ((this.datas[0].OEEDatatable[1].oee +
                this.datas[1].OEEDatatable[1].q) /
              2).toFixed(2),
          },
          {
            name: "Shift B",
            oee:
              ((this.datas[0].OEEDatatable[2].oee +
                this.datas[1].OEEDatatable[2].oee) /
              2).toFixed(2),
            a:
              ((this.datas[0].OEEDatatable[2].oee +
                this.datas[1].OEEDatatable[2].a) /
              2).toFixed(2),
            p:
              ((this.datas[0].OEEDatatable[2].oee +
                this.datas[1].OEEDatatable[2].p) /
              2).toFixed(2),
            q:
              ((this.datas[0].OEEDatatable[2].oee +
                this.datas[1].OEEDatatable[2].q) /
              2).toFixed(2),
          },
          {
            name: "Shift C",
            oee:
              ((this.datas[0].OEEDatatable[3].oee +
                this.datas[1].OEEDatatable[3].oee) /
              2).toFixed(2),
            a:
              ((this.datas[0].OEEDatatable[3].oee +
                this.datas[1].OEEDatatable[3].a) /
              2).toFixed(2),
            p:
              ((this.datas[0].OEEDatatable[3].oee +
                this.datas[1].OEEDatatable[3].p) /
              2).toFixed(2),
            q:
              ((this.datas[0].OEEDatatable[3].oee +
                this.datas[1].OEEDatatable[3].q) /
              2).toFixed(2),
          },
          {
            name: "Current day",
            oee:
              ((this.datas[0].OEEDatatable[4].oee +
                this.datas[1].OEEDatatable[4].oee) /
              2).toFixed(2),
            a:
              ((this.datas[0].OEEDatatable[4].oee +
                this.datas[1].OEEDatatable[4].a) /
              2).toFixed(2),
            p:
              ((this.datas[0].OEEDatatable[4].oee +
                this.datas[1].OEEDatatable[4].p) /
              2).toFixed(2),
            q:
              ((this.datas[0].OEEDatatable[4].oee +
                this.datas[1].OEEDatatable[4].q) /
              2).toFixed(2),
          },
        ];

        this.spoilageOverall = [
          {
            name: "pcs",
            data: [
              (this.datas[0].SpoilageSeries[0].data[0] +
                this.datas[1].SpoilageSeries[0].data[0]) /
                2,
              (this.datas[0].SpoilageSeries[0].data[1] +
                this.datas[1].SpoilageSeries[0].data[1]) /
                2,
              (this.datas[0].SpoilageSeries[0].data[2] +
                this.datas[1].SpoilageSeries[0].data[2]) /
                2,
              (this.datas[0].SpoilageSeries[0].data[3] +
                this.datas[1].SpoilageSeries[0].data[3]) /
                2,
              (this.datas[0].SpoilageSeries[0].data[4] +
                this.datas[1].SpoilageSeries[0].data[4]) /
                2,
              (this.datas[0].SpoilageSeries[0].data[5] +
                this.datas[1].SpoilageSeries[0].data[5]) /
                2,
            ],
          },
        ];
        this.SpeedseriesOverall = [
          {
            name: "pcs/min",
            data: [
              (this.datas[0].Speedseries[0].data[0] +
                this.datas[1].Speedseries[0].data[0]) /
                2,
              (this.datas[0].Speedseries[0].data[1] +
                this.datas[1].Speedseries[0].data[1]) /
                2,
              (this.datas[0].Speedseries[0].data[2] +
                this.datas[1].Speedseries[0].data[2]) /
                2,
            ],
          },
        ];
      });
    },

    async OEEload() {
      await axios
        .get(urlOEE + "/oeerealtimebuffer", {
          headers: {
            time: this.selectedOEEtime,
            topic: "OEE",
            line: this.selectedOEEline,
          },
        })
        .then((response) => {
          console.log(response);

          this.responseData = response.data;
          // this.resultOEE = response.data;
        });
    },

    refresh() {
      this.intervalLoad = setInterval(() => {
        this.load();
        this.OEEload();
      }, 15000);
    },
  },
};
</script>

<style>
.v-data-table .v-data-table-header tr {
  font-size: 24px !important;
  
}

</style>
