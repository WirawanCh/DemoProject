<template>
  <div>
    <v-row class="text-center justify-center py-3">
      <h6 class="font-weight-bold display-1 basil--text">
        Electrical Energy Monitoring Line {{ $store.state.tab + 29 }}
      </h6>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-5">
          <v-row class="justify-center">
            <v-col class="ml-2 mt-16" sm="12" lg="2" md="2">
              <div class="mt-5 title font-weight-light">
                {{ cards[$store.state.tab].data[0].title }}
              </div>
              <div class="mt-5 subheading font-weight-light grey--text">
                <p>
                  Average :
                  {{ cards[$store.state.tab].data[0].series[0].avg.toFixed(2) }}
                </p>
                <p>
                  Peak :
                  {{ cards[$store.state.tab].data[0].series[0].max.toFixed(2) }}
                </p>
                <p>
                  Minimum :
                  {{ cards[$store.state.tab].data[0].series[0].min.toFixed(2) }}
                </p>
              </div>
            </v-col>

            <v-col sm="12" lg="9" md="9" class="pa-5">
              <v-col class="ml-5" cols="2">
                <v-select
                  outlined
                  v-model="selectedTotalkWtime"
                  :items="itemsTime"
                  :value="itemsTime.value"
                  label="Time"
                  @input="loadTotalkW()"
                  dense
                ></v-select>
              </v-col>
              <div
                class="mr-5 text-right d-flex align-center justify-space-end"
              >
                <v-col>
                  <v-tooltip class="text-center" attach bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        fab
                        dark
                        medium
                        v-bind="attrs"
                        v-on="on"
                        color="success"
                        @click.native="getcsvkW($store.state.tab)"
                      >
                        <v-icon dark> mdi-file-excel </v-icon>
                      </v-btn>
                    </template>
                    <div>Export Excel</div>
                  </v-tooltip>
                </v-col>
              </div>
              <apexchart
                height="400"
                type="line"
                :options="realtimechartoptions"
                :series="cards[$store.state.tab].data[0].series"
              ></apexchart>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-5">
          <v-row class="justify-center">
            <v-col class="ml-2 mt-16" sm="12" lg="2" md="2" cols="2">
              <div class="mt-5 title font-weight-light">
                {{ cards[$store.state.tab].data[1].title }}
              </div>
              <div class="mt-5 subheading font-weight-light grey--text">
                <p>
                  Average :
                  {{ cards[$store.state.tab].data[1].series[0].avg.toFixed(2) }}
                </p>
                <p>
                  Peak :
                  {{ cards[$store.state.tab].data[1].series[0].max.toFixed(2) }}
                </p>
                <p>
                  Minimum :
                  {{ cards[$store.state.tab].data[1].series[0].min.toFixed(2) }}
                </p>
              </div>

              <div class="mt-5 title font-weight-light">
                {{ cards[$store.state.tab].data[2].title }}
              </div>
              <div class="mt-5 subheading font-weight-light grey--text">
                <p>L1-N : {{ energyDataPLC[$store.state.tab].data.VoltA_N }}</p>
                <p>L2-N : {{ energyDataPLC[$store.state.tab].data.VoltB_N }}</p>
                <p>L3-N : {{ energyDataPLC[$store.state.tab].data.VoltC_N }}</p>
                <p>
                  3ph Average Voltage :
                  {{ energyDataPLC[$store.state.tab].data.VoltL_N_Avg }}
                </p>
              </div>
            </v-col>
            <v-col sm="12" lg="9" md="9" class="pa-5">
              <v-col class="ml-5" cols="2">
                <v-select
                  outlined
                  v-model="selectedCurrenttime"
                  :items="itemsTime"
                  :value="itemsTime.value"
                  label="Time"
                  @input="loadCurrent()"
                  dense
                ></v-select>
              </v-col>
              <div
                class="mr-5 text-right d-flex align-center justify-space-end"
              >
                <v-col>
                  <v-tooltip class="text-center" bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        fab
                        dark
                        medium
                        v-bind="attrs"
                        v-on="on"
                        color="success"
                        @click.native="getcsvCurrent($store.state.tab)"
                      >
                        <v-icon dark> mdi-file-excel </v-icon>
                      </v-btn>
                    </template>
                    <div>Export Excel</div>
                  </v-tooltip>
                </v-col>
              </div>
              <apexchart
                height="400"
                type="line"
                :options="realtimechartoptions"
                :series="cards[$store.state.tab].data[1].series"
              ></apexchart>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-row>
            <v-col sm="12" lg="6" md="6">
              <v-card class="mt-4 mx-auto pa-5" elevation="0">
                <v-card-text class="pt-5">
                  <div class="title font-weight-light mb-2">
                    Electric Energy (kWh)
                  </div>
                </v-card-text>
                <apexchart
                  type="bar"
                  height="350"
                  :options="kWchartOptions"
                  :series="cards[$store.state.tab].data[3].series"
                ></apexchart>
              </v-card>
            </v-col>
            <v-col sm="12" lg="6" md="6">
              <v-card class="mt-4 mx-auto pa-5" elevation="0">
                <v-card-text class="pt-5">
                  <div class="title font-weight-light mb-2">
                    Electric Energy per million pieces (kWh per Million)
                  </div>
                </v-card-text>
                <apexchart
                  type="bar"
                  height="350"
                  :options="kWhpermillionchartOptions"
                  :series="cards[$store.state.tab].data[4].series"
                ></apexchart>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import axios from "axios";
import XLSX from "xlsx";
import * as getAPI from "../lib/APInodered.js";
export default {
  data: () => ({
    energyDataTotalkW: [
      {
        series: [
          {
            name: "Power Total",
            data: [{ x: 0, y: 0 }],
            min: 0,
            avg: 0,
            max: 0,
          },
        ],
      },
    ],
    energyDataCurrent: [
      {
        series: [
          {
            name: "Avg Current",
            data: [{ x: 0, y: 0 }],
            min: 0,
            avg: 0,
            max: 0,
          },
          {
            name: "L1 Current",
            data: [{ x: 0, y: 0 }],
            min: 0,
            avg: 0,
            max: 0,
          },
          {
            name: "L2 Current",
            data: [{ x: 0, y: 0 }],
            min: 0,
            avg: 0,
            max: 0,
          },
          {
            name: "L3 Current",
            data: [{ x: 0, y: 0 }],
            min: 0,
            avg: 0,
            max: 0,
          },
        ],
      },
    ],
    energyDataPLC: {
      data: {
        Energy_toLoad: 0,
        Current_Avg: 0,
        Current_A: 0,
        Current_B: 0,
        Current_C: 0,
        VoltL_L: 0,
        VoltA_N: 0,
        VoltB_N: 0,
        VoltC_N: 0,
        VoltL_N_Avg: 0,
        Power_Total: 0,
        kWh_A: 0,
        kWh_B: 0,
        kWh_C: 0,
        kWh_Day: 0,
        kWh_Pday: 0,
        kWhperMillion_A: 0,
        kWhperMillion_B: 0,
        kWhperMillion_C: 0,
        kWhperMillion_Day: 0,
        kWhperMillion_Pday: 0,
      },
    },
    EnergyNR: [],
    cards: [
      {
        line: "Line 29",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 30",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 31",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 32",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 33",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 34",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 35",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 36",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 37",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 38",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
      {
        line: "Line 39",
        data: [
          {
            title: "Kilowatt",
            series: [
              {
                name: "Power Total",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-4",
          },
          {
            title: "Average Current",
            series: [
              {
                name: "Avg Current",
                data: [{ x: 0, y: 0 }],
                max: 0,
                min: 0,
                avg: 0,
              },
            ],
            flex: 3,
            color: "deep-purple accent-1",
          },
          {
            title: "Voltage",
            volt: {
              L1: 0,
              L2: 0,
              L3: 0,
              Average: 0,
            },
          },
          {
            title: "kWh",
            series: [{ data: [0, 0, 0, 0, 0], name: "kilo watt hour" }],
            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
          {
            title: "kWh Per Million Pieces",
            series: [{ data: [0, 0, 0, 0, 0], name: "kWh Per Million Pieces" }],

            seriesBuffer: [{ data: [0, 0, 0, 0, 0] }],
          },
        ],
      },
    ],
    kWchartOptions: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
          distributed: true,
        },
      },
      colors: ["#966FD6", "#B289F3", "#CEA3FF", "#ECBFFF"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return (
            val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + "kWh"
          );
        },
        offsetY: -15,
        style: {
          fontSize: "1rem",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: ["Previous Day", "Shift A", "Shift B", "Shift C", "Today"],
        position: "bottom",
        labels: {
          offsetY: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return (
              val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + "kW"
            );
          },
        },
      },
    },
    kWhpermillionchartOptions: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
          distributed: true,
        },
      },
      colors: ["#77DD66", "#8FE381", "#A7E99C", "#BFEEB7", "#D7F4D2"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        offsetY: -15,
        style: {
          fontSize: "1rem",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: ["Previous Day", "Shift A", "Shift B", "Shift C", "Today"],
        position: "bottom",
        labels: {
          offsetY: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return (
              val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " " +
              "kWh/Million pcs."
            );
          },
        },
      },
    },
    csvkw: [],
    csvCurrent: [],
    selectedTotalkWtime: 5,
    selectedCurrenttime: 5,
    itemsTime: [
      { text: "5 min", value: 5 },
      { text: "15 min", value: 15 },
      { text: "30 min", value: 30 },
      { text: "Hour", value: 60 },
      { text: "Day (Average per 10 Minutes)", value: 1440 },
      { text: "Week (Average per 30 Minutes)", value: 10080 },
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
                  new Date(timestamp).toISOString().split("T")[1].split(".")[0];

                return t;
              },
            },
          },
          autoSelected: "zoom",
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      colors: ["#FA4443", "#FF9800", "#008FFB"],
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
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
    },
  }),

  
  created() {
    /*for (var i = 1; i < 11; i++) {
      this.cards[i] = this.cards[0];
    }*/

    this.load();
    this.loadTotalkW();
    this.loadCurrent();
    this.refresh();
  },

  methods: {
    async load() {
      await getAPI.getAPIpm().then((res) => {
        console.log("load");
        console.log(res.data);
        this.energyDataPLC = res.data;

        this.cards[this.$store.state.tab].data[3].seriesBuffer[0].data[0] =
          this.energyDataPLC[this.$store.state.tab].data.kWh_Pday;
        this.cards[this.$store.state.tab].data[3].seriesBuffer[0].data[1] =
          this.energyDataPLC[this.$store.state.tab].data.kWh_A;
        this.cards[this.$store.state.tab].data[3].seriesBuffer[0].data[2] =
          this.energyDataPLC[this.$store.state.tab].data.kWh_B;
        this.cards[this.$store.state.tab].data[3].seriesBuffer[0].data[3] =
          this.energyDataPLC[this.$store.state.tab].data.kWh_C;
        this.cards[this.$store.state.tab].data[3].seriesBuffer[0].data[4] =
          this.energyDataPLC[this.$store.state.tab].data.kWh_Day;

        this.cards[this.$store.state.tab].data[4].seriesBuffer[0].data[0] =
          this.energyDataPLC[this.$store.state.tab].data.kWhperMillion_Pday;
        this.cards[this.$store.state.tab].data[4].seriesBuffer[0].data[1] =
          this.energyDataPLC[this.$store.state.tab].data.kWhperMillion_A;
        this.cards[this.$store.state.tab].data[4].seriesBuffer[0].data[2] =
          this.energyDataPLC[this.$store.state.tab].data.kWhperMillion_B;
        this.cards[this.$store.state.tab].data[4].seriesBuffer[0].data[3] =
          this.energyDataPLC[this.$store.state.tab].data.kWhperMillion_C;
        this.cards[this.$store.state.tab].data[4].seriesBuffer[0].data[4] =
          this.energyDataPLC[this.$store.state.tab].data.kWhperMillion_Day;

        this.cards[this.$store.state.tab].data[3].series =
          this.cards[this.$store.state.tab].data[3].seriesBuffer;
        this.cards[this.$store.state.tab].data[4].series =
          this.cards[this.$store.state.tab].data[4].seriesBuffer;
      });
    },

    async loadTotalkW() {
      const option = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          time: this.selectedTotalkWtime,
          topic: "Power Total",
        },
      };

      await getAPI.getpmrealtimebuffer(option).then((res) => {
        console.log("loadTotalkW");
        console.log(res.data);
        this.energyDataTotalkW = res.data;
        this.cards[this.$store.state.tab].data[0].series =
          this.energyDataTotalkW[this.$store.state.tab].series;
      });
    },

    async loadCurrent() {
      const option = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          time: this.selectedCurrenttime,
          topic: "Current",
        },
      };
      await getAPI.getpmrealtimebuffer(option).then((res) => {
        console.log("loadCurrent");
        console.log(res.data);
        this.energyDataCurrent = res.data;
        this.cards[this.$store.state.tab].data[1].series =
          this.energyDataCurrent[this.$store.state.tab].series;
      });
    },

    refresh() {
      this.EnergyNR = setInterval(() => {
        this.load();
        this.loadTotalkW();
        this.loadCurrent();
      }, 13000);
    },

    // firstTime(){
    //   this.EnergyNR = setTimeout(() => {
    //     this.load();
    //     this.loadTotalkW();
    //     this.loadCurrent();
    //   },1000)
      
    // },

    getcsvCurrent(line) {
      this.csvCurrent = [];
      for (var k = 0; k < this.cards[line].data[1].series.length; k++) {
        for (var i = 0; i < this.cards[line].data[1].series[k].data.length;i++)     
         {
          this.csvCurrent.push({
            Datetime: new Date(
              this.cards[line].data[1].series[k].data[i].x
            ).toLocaleString("en-GB"),
            Average: this.cards[line].data[1].series[0].data[i].y,
            L1: this.cards[line].data[1].series[1].data[i].y,
            L2: this.cards[line].data[1].series[2].data[i].y,
            L3: this.cards[line].data[1].series[3].data[i].y,
          });
        }
      }
      console.log(this.csvCurrent);
      const dataWS = XLSX.utils.json_to_sheet(this.csvCurrent);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS);
      var title = "";
      if (this.selectedCurrenttime === 60) {
        title = "1 Hour Data";
      } else if (this.selectedCurrenttime === 1440) {
        title = "1 Day Data";
      } else if (this.selectedCurrenttime === 10080) {
        title = "1 Week Average Data";
      } else if (this.selectedCurrenttime === 43200) {
        title = "1 Month Average Data";
      } else {
        title = this.selectedCurrenttime + " min Data";
      }
      XLSX.writeFile(
        wb,
        "Phase Current" +
          " " +
          "Line " +
          (line + 29) +
          " " +
          title +
          " " +
          new Date().toLocaleString() +
          ".xlsx"
      );
    },
    getcsvkW(line) {
      this.csvkw = [];
      console.log(this.cards[line].data[0].series[0].data);
      for (var i = 0; i < this.cards[line].data[0].series[0].data.length; i++) {
        this.csvkw.push({
          Datetime: new Date(
            this.cards[line].data[0].series[0].data[i].x
          ).toLocaleString("en-GB"),
          kWdata: this.cards[line].data[0].series[0].data[i].y,
        });
      }
      console.log(this.csvkw);
      const dataWS = XLSX.utils.json_to_sheet(this.csvkw);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS);
      var title = "";
      if (this.selectedTotalkWtime === 60) {
        title = "1 Hour Data";
      } else if (this.selectedTotalkWtime === 1440) {
        title = "1 Day Data";
      } else if (this.selectedTotalkWtime === 10080) {
        title = "1 Week Average Data";
      } else if (this.selectedTotalkWtime === 43200) {
        title = "1 Month Average Data";
      } else {
        title = this.selectedTotalkWtime + " min Data";
      }
      XLSX.writeFile(
        wb,
        "kW" +
          " " +
          "Line " +
          (line + 29) +
          " " +
          title +
          " " +
          new Date().toLocaleString() +
          ".xlsx"
      );
    },
  },
  beforeUpdate() {},
  beforeDestroy() {
    this.$store.state.tab = 0;
    clearInterval(this.EnergyNR);
  },
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
