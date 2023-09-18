<template>
  <div class="output">
    <v-row class="text-center justify-center py-2 mt-1">
      <h6 class="font-weight-bold display-1 basil--text">STGT-SR3 Overview</h6>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="pa-7">
         
          <v-col class="ml-6 text-center">
            <v-row>
              <v-col class="text-left mt-15">
                <h2>Total Key Performance Indicator (Current Day)</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-row class="mb-15">
                <v-col sm="6" lg="3" md="12">
                  <vue-svg-gauge
                    style="width: 75%"
                    :start-angle="-140"
                    :end-angle="65"
                    :value="this.overallData.OEEavg * 0.1"
                    :gauge-color="
                      gaugeColor(
                        this.overallData.OEEavg,
                        oeesetting.data[0].target,
                        oeesetting.data[0].setting
                      )
                    "
                    :min="0"
                    :max="10"
                    :separator-thickness="0"
                    :scale-interval="0.1"
                    :inner-radius="75"
                  >
                    <div class="mt-15">
                      <font size="6">
                        <b> {{ this.overallData.OEEavg.toFixed(2) }}% </b>
                      </font>
                      <br />%OEE
                    </div>
                  </vue-svg-gauge>
                </v-col>
                <!------------------------------------------------------------------------------>
                <v-col sm="6" lg="3" md="12">
                  <vue-svg-gauge
                    style="width: 60%"
                    :start-angle="-140"
                    :end-angle="65"
                    :value="this.overallData.Aavg * 0.1"
                    :gauge-color="
                      gaugeColor(
                        this.overallData.Aavg,
                        oeesetting.data[1].target,
                        oeesetting.data[1].setting
                      )
                    "
                    :min="0"
                    :max="10"
                    :separator-thickness="0"
                    :scale-interval="0.1"
                    :inner-radius="75"
                  >
                    <div class="mt-15">
                      <font size="6">
                        <b>{{ this.overallData.Aavg.toFixed(2) }}%</b>
                      </font>
                      <br />%A
                    </div>
                  </vue-svg-gauge>
                </v-col>
                <!------------------------------------------------------------------------------>
                <v-col sm="6" lg="3" md="12">
                  <vue-svg-gauge
                    style="width: 60%"
                    :start-angle="-140"
                    :end-angle="65"
                    :value="this.overallData.Pavg * 0.1"
                    :gauge-color="
                      gaugeColor(
                        this.overallData.Pavg,
                        oeesetting.data[2].target,
                        oeesetting.data[2].setting
                      )
                    "
                    :min="0"
                    :max="10"
                    :separator-thickness="0"
                    :scale-interval="0.1"
                    :inner-radius="75"
                  >
                    <div class="mt-15">
                      <font size="6">
                        <b>{{ this.overallData.Pavg.toFixed(2) }}%</b>
                      </font>
                      <br />%P
                    </div>
                  </vue-svg-gauge>
                </v-col>
                <!------------------------------------------------------------------------------>

                <v-col sm="6" lg="3" md="12">
                  <vue-svg-gauge
                    style="width: 60%"
                    :start-angle="-140"
                    :end-angle="65"
                    :value="this.overallData.Qavg * 0.1"
                    :gauge-color="
                      gaugeColor(
                        this.overallData.Qavg,
                        oeesetting.data[3].target,
                        oeesetting.data[3].setting
                      )
                    "
                    :min="0"
                    :max="10"
                    :separator-thickness="0"
                    :scale-interval="0.1"
                    :inner-radius="75"
                  >
                    <div class="mt-15">
                      <font size="6">
                        <b>{{ this.overallData.Qavg.toFixed(2) }}%</b>
                      </font>
                      <br />%Q
                    </div>
                  </vue-svg-gauge>
                </v-col>
                <!------------------------------------------------------------------------------>
              </v-row>
              <!------------------------------------------------------------------------------>
            </v-row>
            <v-row>
              <v-col class="text-right mr-15">
                <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      color="accent"
                      v-bind="attrs"
                      v-on="on"
                      @click="loadOeesetting()"
                    >
                      KPI Color Setting Line
                    </v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar dark color="accent"
                        >KPI Color Setting Line Total</v-toolbar
                      >
                      <v-data-table
                        :headers="oeeSettingheaders"
                        :items="oeesetting.data"
                        hide-default-footer
                        class="pa-5"
                        width="500"
                        dense
                      >
                        <template v-slot:[`item.target`]="props">
                          <v-text-field
                            class="centered-input"
                            v-model="props.item.target"
                          ></v-text-field>
                        </template>
                        <template v-slot:[`item.setting`]="props">
                          <v-text-field
                            class="centered-input"
                            v-model="props.item.setting"
                          ></v-text-field>
                        </template>
                        <template v-slot:[`item.yellow`]="props">
                          {{
                            parseFloat(
                              props.item.target - props.item.setting * 0.5
                            ).toFixed(2)
                          }}
                        </template>
                        <template v-slot:[`item.red`]="props">
                          {{
                            parseFloat(
                              props.item.target - props.item.setting
                            ).toFixed(2)
                          }}
                        </template>
                      </v-data-table>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click="
                            dialog.value = false;
                            SendOEESetting();
                            loadOeesetting();
                          "
                        >
                          Set
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
              <!------------------------------------------------------------------------------>
            </v-row>
            <v-row>
              <v-col sm="6" lg="3" md="6" class="text-center">
                <div class="mb-5">
                  <h5>Total Piece Dip (Current Day)</h5>
                </div>
                <div>
                  {{
                    overallData.pieceDipTotal[0]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  pcs.
                </div>
                <div class="mb-6"></div>
              </v-col>
              <v-col sm="12" lg="4" md="4" class="text-center">
                <div class="mb-5">
                  <h5>Total Runtime (Current Day)</h5>
                </div>
                <div class="mb-5">
                  {{
                    overallData.runTime[0]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  minute
                </div>
                <div class="mb-6"></div>
              </v-col>
              <v-col sm="12" lg="4" md="4" class="text-center">
                <div class="mb-5">
                  <h5>Total Downtime (Current Day)</h5>
                </div>
                <div class="mb-5">
                  {{
                    overallData.stopTime[0]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  minute
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <!---------------------------->
    <v-row class="mt-5">
      <v-col>
        <v-card class="pa-15">
          <v-row>
            <v-row>
              <v-row dense justify="center">
                <v-col sm="12" lg="4" md="4" class="text-center">
                  <h5>Actual Speed (pcs./min)</h5>
                  <apexchart
                    height="300"
                    type="bar"
                    :options="chartoption2"
                    :series="actualSpeedSeries"
                  ></apexchart>
                </v-col>

                

                <v-col sm="12" lg="4" md="4" class="text-center">
                  <h5>Setting Speed (pcs./min)</h5>
                  <apexchart
                    height="300"
                    type="bar"
                    :options="chartoption3"
                    :series="settingSpeedSeries"
                  ></apexchart>
                </v-col>

                <v-col sm="12" lg="4" md="4" class="text-center">
                  <h5>Speed Budget (pcs./min)</h5>
                  <apexchart
                    height="300"
                    type="bar"
                    :options="chartoption4"
                    :series="budgetSpeedSeries"
                  ></apexchart>
                </v-col>
              </v-row>
            </v-row>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!------------------------------------------------------------------------------>
    <v-row class="mt-5">
      <v-col>
        <v-card class="pa-15">
          <v-row>
            <v-col>
              <div class="mb-5">
                <h3>Total KPI STGT-SR3</h3>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col sm="12" md="4" lf="4">
              <h4>Total Overall Equipment Effectiveness</h4>
              <table class="text-center" dense>
                <tr>
                  <th width="20px">Description</th>
                  <th width="10px">OEE</th>
                  <th width="10px">%A</th>
                  <th width="10px">%P</th>
                  <th width="10px">%Q</th>
                </tr>

                <tr>
                  <td>Previous day</td>
                  <td>{{ overallData.OEE[0].toFixed(2) }}</td>
                  <td>{{ overallData.A[0].toFixed(2) }}</td>
                  <td>{{ overallData.P[0].toFixed(2) }}</td>
                  <td>{{ overallData.Q[0].toFixed(2) }}</td>
                </tr>
                <tr>
                  <td>shift A</td>
                  <td>{{ overallData.OEE[1].toFixed(2) }}</td>
                  <td>{{ overallData.A[1].toFixed(2) }}</td>
                  <td>{{ overallData.P[1].toFixed(2) }}</td>
                  <td>{{ overallData.Q[1].toFixed(2) }}</td>
                </tr>
                <tr>
                  <td>shift B</td>
                  <td>{{ overallData.OEE[2].toFixed(2) }}</td>
                  <td>{{ overallData.A[2].toFixed(2) }}</td>
                  <td>{{ overallData.P[2].toFixed(2) }}</td>
                  <td>{{ overallData.Q[2].toFixed(2) }}</td>
                </tr>
                <tr>
                  <td>shift C</td>
                  <td>{{ overallData.OEE[0].toFixed(2) }}</td>
                  <td>{{ overallData.A[0].toFixed(2) }}</td>
                  <td>{{ overallData.P[0].toFixed(2) }}</td>
                  <td>{{ overallData.Q[0].toFixed(2) }}</td>
                </tr>
                <tr>
                  <td>Current day</td>
                  <td>{{ overallData.OEE[4].toFixed(2) }}</td>
                  <td>{{ overallData.A[4].toFixed(2) }}</td>
                  <td>{{ overallData.P[4].toFixed(2) }}</td>
                  <td>{{ overallData.Q[4].toFixed(2) }}</td>
                </tr>
              </table>
            </v-col>

            <v-col sm="12" md="4" lf="4">
              <h4>Total Piece Dip</h4>
              <table class="text-center" dense>
                <tr>
                  <th>Description</th>
                  <th>Left</th>
                  <th>Right</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>Previous Day</td>
                  <td>
                    {{
                      overallData.pieceDipLeft[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipRight[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipTotal[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>

                <tr>
                  <td>Shift A</td>
                  <td>
                    {{
                      overallData.pieceDipLeft[1].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipRight[1].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipTotal[1].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>Shift B</td>
                  <td>
                    {{
                      overallData.pieceDipLeft[2].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipRight[2].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipTotal[2].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>Shift C</td>
                  <td>
                    {{
                      overallData.pieceDipLeft[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipRight[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipTotal[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>Current day</td>
                  <td>
                    {{
                      overallData.pieceDipLeft[4].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipRight[4].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.pieceDipTotal[4].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
              </table>
            </v-col>

            <v-col sm="12" md="4" lf="4">
              <h3>total work hour</h3>
              <table class="text-center" dense>
                <tr>
                  <th>Description</th>
                  <th>Runtime</th>
                  <th>Stoptime</th>
                </tr>
                <tr>
                  <td>Previous day</td>
                  <td>
                    {{
                      overallData.runTime[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.stopTime[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>Shift A</td>
                  <td>
                    {{
                      overallData.runTime[1].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.stopTime[1].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>Shift B</td>
                  <td>
                    {{
                      overallData.runTime[2].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.stopTime[2].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
                <tr>
                  <td>Shift C</td>
                  <td>
                    {{
                      overallData.runTime[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.stopTime[0].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>

                <tr>
                  <td>Current day</td>
                  <td>
                    {{
                      overallData.runTime[4].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                  <td>
                    {{
                      overallData.stopTime[4].toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}
                  </td>
                </tr>
              </table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!----------------------------------------------------------------------------->

    <v-row>
      <v-col cols="4" fluid>
        <v-card>
          <v-card-title v-text="'OEE.'"></v-card-title>
          <v-row>
            <v-col class="ml-5" lg="6" md="6" sm="12">
              <v-row>
                <v-col cols="6">
                  <v-select
                    outlined
                    v-model="selectedOEEtime"
                    :items="itemsTime"
                    :value="itemsTime.value"
                    label="Time"
                    dense
                    @input="OEELoad()"
                  ></v-select>
                </v-col>

                <v-col cols="6">
                  <v-autocomplete
                    v-model="selectedOEEline"
                    :items="$store.state.lineList"
                    :item-text="$store.state.lineList.text"
                    :item-value="$store.state.lineList.value"
                    label="Line"
                    dense
                    attach
                    outlined
                    @input="OEELoad()"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <apexchart
                height="300"
                type="line"
                :options="realtimechartoptions"
                :series="resultOEE"
              ></apexchart
            ></v-col>
          </v-row>
        </v-card>
      </v-col>
      <!--------------------------------------------------------------------------->
      <v-col cols="4" fluid>
        <v-card>
          <v-card-title v-text="'Availability'"></v-card-title>
          <v-row>
            <v-col class="ml-5" lg="6" md="6" sm="12">
              <v-row>
                <v-col cols="6">
                  <v-select
                    outlined
                    v-model="selectedAtime"
                    :items="itemsTime"
                    :value="itemsTime.value"
                    label="Time"
                    dense
                    @input="ALoad()"
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="selectedAline"
                    :items="$store.state.lineList"
                    :item-text="$store.state.lineList.text"
                    :item-value="$store.state.lineList.value"
                    label="Line"
                    dense
                    attach
                    outlined
                    @input="ALoad()"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <apexchart
                height="300"
                type="line"
                :options="realtimechartoptions"
                :series="resultA"
              ></apexchart
            ></v-col>
          </v-row>
        </v-card>
      </v-col>
      <!--------------------------------------------------------------------------->
      <v-col cols="4" fluid>
        <v-card>
          <v-card-title v-text="'Performance'"></v-card-title>
          <v-row>
            <v-col class="ml-5" lg="6" md="6" sm="12">
              <v-row>
                <v-col cols="6">
                  <v-select
                    outlined
                    v-model="selectedPtime"
                    :items="itemsTime"
                    :value="itemsTime.value"
                    label="Time"
                    dense
                    @input="PLoad()"
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="selectedPline"
                    :items="$store.state.lineList"
                    :item-text="$store.state.lineList.text"
                    :item-value="$store.state.lineList.value"
                    label="Line"
                    dense
                    attach
                    outlined
                    @input="PLoad()"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <apexchart
                height="300"
                type="line"
                :options="realtimechartoptions"
                :series="resultP"
              ></apexchart
            ></v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!---------------------------------------------------------------------------------------->

    <v-row>
      <v-col cols="4" fluid>
        <v-card>
          <v-card-title v-text="'Quality'"></v-card-title>
          <v-row>
            <v-col class="ml-5" lg="6" md="6" sm="12">
              <v-row>
                <v-col cols="6">
                  <v-select
                    outlined
                    v-model="selectedQtime"
                    :items="itemsTime"
                    :value="itemsTime.value"
                    label="Time"
                    dense
                    @input="QLoad()"
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    v-model="selectedQline"
                    :items="$store.state.lineList"
                    :item-text="$store.state.lineList.text"
                    :item-value="$store.state.lineList.value"
                    label="Line"
                    dense
                    attach
                    outlined
                    @input="QLoad()"
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <apexchart
                height="300"
                type="line"
                :options="realtimechartoptions"
                :series="resultQ"
              ></apexchart
            ></v-col>
          </v-row>
        </v-card>
      </v-col>
      <!---------------------------------------------------------------------------------------->

      <v-col cols="8">
        <v-card class="text-center pa-6" >
          <v-card-title style="height: 150px">Total Pieces Dip (pcs.)</v-card-title>
          <apexchart
            type="bar"
            height="300"
            :options="pcsdipchartOptions2"
            :series="pcdDipTotalSeries"
          ></apexchart>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import * as getAPI from "../lib/APInodered.js";
export default {
  data: () => ({
    overallData: {
      //[ShiftA,ShiftB,ShiftC,Today,Prevday]
      OEE: [0, 0, 0, 0, 0],
      A: [0, 0, 0, 0, 0],
      P: [0, 0, 0, 0, 0],
      Q: [0, 0, 0, 0, 0],
      pieceDipLeft: [0, 0, 0, 0, 0],
      pieceDipRight: [0, 0, 0, 0, 0],
      pieceDipTotal: [0, 0, 0, 0, 0],
      runTime: [0, 0, 0, 0, 0],
      stopTime: [0, 0, 0, 0, 0],
      //[29,30,31,32,33,34,35,36,37,38,39,Total]
      actualSpeed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      budgetSpeed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      settingSpeed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      no: []
    },
    datas: [],
    resultOEE: [],
    resultA: [],
    resultP: [],
    resultQ: [],
    intervalLoad: undefined,
    selectedOEEtime: 5,
    selectedOEEline: "All",
    selectedAtime: 5,
    selectedAline: "All",
    selectedPtime: 5,
    selectedPline: "All",
    selectedQtime: 5,
    selectedQline: "All",
    oeesetting: {
      line: "Total",
      data: [
        { name: "%OEE", target: 0, setting: 0, yellow: 0, red: 0 },
        { name: "%A", target: 0, setting: 0, yellow: 0, red: 0 },
        { name: "%P", target: 0, setting: 0, yellow: 0, red: 0 },
        { name: "%Q", target: 0, setting: 0, yellow: 0, red: 0 },
      ],
    },
    TimeList: [
      { text: "5 min", value: 5 },
      { text: "15 min", value: 15 },
      { text: "30 min", value: 30 },
      { text: "Hour", value: 60 },
      { text: "Day (Average per 10 Minutes)", value: 1440 },
      { text: "Week (Average per 30 Minutes)", value: 10080 },
    ],
    pcsdipchartOptions: {
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
      colors: ["#002061", "#3F51B5", "#0040bf", "#008FFB", "#81D4FA"],
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
          enabled: true,
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
          show: true,
        },
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return (
              val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " " +
              "pcs."
            );
          },
        },
      },
    },
    pcsdipchartOptions2: {
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
      
      colors: ["#7B56BA", "#966FD6", "#B289F3", "#CEA3FF", "#ECBFFF", "#FFDBFF"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        offsetY: -15,
        style: {
          fontSize: "10",
          colors: ["#304758"],
        },
      },
      legend: {
        show: false,
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
              "pcs."
            );
          },
        },
      },
    },
    chartoption2: {
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
      
      colors: ["#BBEAA6"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        offsetY: -15,
        style: {
          fontSize: "10",
          colors: ["#304758"],
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["Line 29", "Line 30", "Line 31", "Line 32", "Line 33","Line 34","Line 35","Line 36","Line 37","Line 38","Line 39"],
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
              "pcs."
            );
          },
        },
      },
    },
    chartoption3: {
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
      
      colors: ["#E3C878"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        offsetY: -15,
        style: {
          fontSize: "10",
          colors: ["#304758"],
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["Line 29", "Line 30", "Line 31", "Line 32", "Line 33","Line 34","Line 35","Line 36","Line 37","Line 38","Line 39"],
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
              "pcs."
            );
          },
        },
      },
    },
    chartoption4: {
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
      
      colors: ["#CEA3FF"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        offsetY: -15,
        style: {
          fontSize: "10",
          colors: ["#304758"],
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["Line 29", "Line 30", "Line 31", "Line 32", "Line 33","Line 34","Line 35","Line 36","Line 37","Line 38","Line 39"],
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
              "pcs."
            );
          },
        },
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
                  new Date(timestamp).toISOString().split("T")[1].split(".")[0];

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
    spoilagechartOptions: {
      chart: {
        type: "bar",
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val ? Math.round(val) : 0;
        },
        offsetY: -10,
        style: {
          fontSize: "1rem",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: ["Inside Spoilage", "Outside Spoilage"],
      },
      yaxis: {
        title: {
          text: "pcs.",
        },
        labels: {
          formatter: function (val) {
            return val ? Math.round(val) : val;
          },
        },
      },
    },
    itemsTime: [
      { text: "5 min", value: 5 },
      { text: "10 min", value: 10 },
      { text: "15 min", value: 15 },
      { text: "30 min", value: 30 },
      { text: "Hour", value: 60 },
      { text: "Day (Average per 10 Minutes)", value: 1440 },
      { text: "Week (Average per 30 Minutes)", value: 10080 },
    ],
    pcsDipheaders: [
      {
        text: "Description",
        align: "start",
        sortable: false,
        value: "time",
        class: "black--text text-xs-h6",
      },
      { text: "Left", value: "left", class: "black--text text-xs-h6" },
      { text: "Right", value: "right", class: "black--text text-xs-h6" },
      { text: "Total", value: "total", class: "black--text text-xs-h6" },
    ],

    workhourHeaders: [
      {
        text: "Description",
        align: "start",
        sortable: false,
        value: "name",
        class: "black--text text-xs-h6",
      },
      { text: "Runtime", value: "runtime", class: "black--text text-xs-h6" },
      { text: "Stoptime", value: "stoptime", class: "black--text text-xs-h6" },
    ],
    oeeSettingheaders: [
      {
        text: "Description",
        sortable: false,
        value: "name",
        class: "black--text text-xs-h6",
        width: "10px",
      },
      {
        text: "Target",
        align: "center",
        sortable: false,
        value: "target",
        class: "black--text text-xs-h6",
        width: "10px",
      },
      {
        text: "%Setting",
        align: "center",
        sortable: false,
        value: "setting",
        class: "black--text text-xs-h6",
        width: "10px",
      },
      {
        text: "Yellow",
        align: "center",
        sortable: false,
        value: "yellow",
        class: "black--text text-xs-h6",
        width: "10px",
      },
      {
        text: "Red",
        align: "center",
        value: "red",
        sortable: false,
        class: "black--text text-xs-h6",
        width: "10px",
      },
    ],

    items: [
      "Line1",
      "Line2",
      "Line3",
      "Line4",
      "Line5",
      "Line6",
      "Line7",
      "Line8",
      "Line9",
      "Line10",
     
    ],

    oeeHeaders: [
      {
        text: "Description",
        align: "start",
        sortable: false,
        value: "name",
        class: "black--text text-xs-h6",
      },
      { text: "OEE", value: "oee", class: "black--text text-xs-h6" },
      { text: "%A", value: "a", class: "black--text text-xs-h6" },
      { text: "%P", value: "p", class: "black--text text-xs-h6" },
      { text: "%Q", value: "q", class: "black--text text-xs-h6" },
    ],
    actualSpeedSeries: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    actualSpeedSeriesBuffer: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    budgetSpeedSeries: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    budgetSpeedSeriesBuffer: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    settingSpeedSeries: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    settingSpeedSeriesBuffer: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
    pcdDipTotalSeries: [
      {
        data: [0, 0, 0, 0, 0],
      },
    ],
    pcdDipTotalSeriesBuffer: [
      {
        data: [0, 0, 0, 0, 0],
      },
    ],
    no: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    cards: [
  {
    "no": "Line 1",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 2",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 3",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 4",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 5",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 6",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 7",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 8",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 9",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
  {
    "no": "Line 10",
    "OEE": 0,
    "Availability": 0,
    "Performance": 0,
    "Quality": 0,
    "runstatus": "disconnect",
    "motorstatus": "stop",
    "PieceDip": 0,
    "Speedseries": [
      {
        "name": "pcs/min",
        "data": [
          0,
          0,
          0
        ]
      }
    ],
    "PieceDipSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          9,
          0,
          0
        ]
      }
    ],
    "SpoilageSeries": [
      {
        "name": "pcs",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "SpoilageWSeries": [
      {
        "name": "W",
        "data": [
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "OEEDatatable": [
      {
        "name": "Previous day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift A",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift B",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Shift C",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      },
      {
        "name": "Current day",
        "oee": 0,
        "a": 0,
        "p": 0,
        "q": 0
      }
    ],
    "pcsDipdata": [
      {
        "time": "Previous day",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift A",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift B",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Shift C",
        "left": 0,
        "right": 0,
        "total": 0
      },
      {
        "time": "Current day",
        "left": 0,
        "right": 0,
        "total": 0
      }
    ],
    "WorkHour": [
      {
        "name": "Previous day",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift A",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift B",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Shift C",
        "runtime": 0,
        "stoptime": 0
      },
      {
        "name": "Current day",
        "runtime": 0,
        "stoptime": 0
      }
    ]
  },
]

  }),

  created() {
    this.load();
    this.loadOeesetting();
    this.OEELoad();
    this.ALoad();
    this.PLoad();
    this.QLoad();
    this.refresh();
  },
  methods: {
    async load() {
      await getAPI.getAPIoveralloee().then((res) => {
        console.log(res);
        this.datas = res.data;
        this.overallData = {
          OEE: [0, 0, 0, 0, 0],
          A: [0, 0, 0, 0, 0],
          P: [0, 0, 0, 0, 0],
          Q: [0, 0, 0, 0, 0],
          pieceDipLeft: [0, 0, 0, 0, 0],
          pieceDipRight: [0, 0, 0, 0, 0],
          pieceDipTotal: [0, 0, 0, 0, 0],
          runTime: [0, 0, 0, 0, 0],
          stopTime: [0, 0, 0, 0, 0],
          actualSpeed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          budgetSpeed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          settingSpeed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          no:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          OEEavg:'',
        };
        this.datas.forEach((item, index) => {
          for (var i = 0; i < 5; i++) {
            this.overallData.OEE[i] += item.OEEDatatable[i].oee;
            this.overallData.A[i] += item.OEEDatatable[i].a;
            this.overallData.P[i] += item.OEEDatatable[i].p;
            this.overallData.Q[i] += item.OEEDatatable[i].q;
            this.overallData.pieceDipLeft[i] += item.pcsDipdata[i].left;
            this.overallData.pieceDipRight[i] += item.pcsDipdata[i].right;
            this.overallData.pieceDipTotal[i] += item.pcsDipdata[i].total;
            this.overallData.runTime[i] += item.WorkHour[i].runtime;
            this.overallData.stopTime[i] += item.WorkHour[i].stoptime;
          }
          this.overallData.actualSpeed[index] = item.Speedseries[0].data[1];
          this.overallData.budgetSpeed[index] = item.Speedseries[0].data[2];
          this.overallData.settingSpeed[index] = item.Speedseries[0].data[0];
        });
       
          var avg = 0;
          for (var j = 0; j < this.datas.length; j++){
            if (this.datas[j].runstatus !== 'error'){
              avg = avg + 1;

              this.overallData.OEEavg  =  this.overallData.OEE[4]/avg;
              this.overallData.Aavg  =  this.overallData.A[4]/avg;
              this.overallData.Pavg  =  this.overallData.P[4]/avg;
              this.overallData.Qavg  =  this.overallData.Q[4]/avg;          
        }
            
    }
    
     /* console.log(`OEE=${this.overallData.OEEavg}`)
      console.log(`A=${ this.overallData.Aavg}`)
      console.log(`P=${this.overallData.Pavg}`)
      console.log(`Q=${this.overallData.Qavg}`)
      console.log(`AVG=${avg}`)*/


        this.pcdDipTotalSeriesBuffer[0].data = this.overallData.pieceDipTotal;
        this.actualSpeedSeriesBuffer[0].data = this.overallData.actualSpeed;
        this.budgetSpeedSeriesBuffer[0].data = this.overallData.budgetSpeed;
        this.settingSpeedSeriesBuffer[0].data = this.overallData.settingSpeed;
        this.pcdDipTotalSeries = this.pcdDipTotalSeriesBuffer;
        this.actualSpeedSeries = this.actualSpeedSeriesBuffer;
        this.budgetSpeedSeries = this.budgetSpeedSeriesBuffer;
        this.settingSpeedSeries = this.settingSpeedSeriesBuffer;
      });
    },

    async loadOeesetting() {
      await getAPI.getAPIoeesetting().then((res) => {
        console.log(res);
        this.oeesetting = res.data[this.datas.length];
      });
    },
    async OEELoad() {
      await axios
        .get(
          this.$store.state.IP_nodered +
            this.$store.state.PortNodered +
            this.$store.state.getoeerealtimebuffer,
          {
            headers: {
              time: this.selectedOEEtime,
              topic: "OEE",
              line: this.selectedOEEline,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.resultOEE = response.data;
        });
    },

    async ALoad() {
      await axios
        .get(
          this.$store.state.IP_nodered +
            this.$store.state.PortNodered +
            this.$store.state.getoeerealtimebuffer,
          {
            headers: {
              time: this.selectedAtime,
              topic: "A",
              line: this.selectedAline,
            },
          }
        )
        .then((response) => {
          this.resultA = response.data;
        });
    },
    async PLoad() {
      await axios
        .get(
          this.$store.state.IP_nodered +
            this.$store.state.PortNodered +
            this.$store.state.getoeerealtimebuffer,
          {
            headers: {
              time: this.selectedPtime,
              topic: "P",
              line: this.selectedPline,
            },
          }
        )
        .then((response) => {
          this.resultP = response.data;
        });
    },
    async QLoad() {
      await axios
        .get(
          this.$store.state.IP_nodered +
            this.$store.state.PortNodered +
            this.$store.state.getoeerealtimebuffer,
          {
            headers: {
              time: this.selectedQtime,
              topic: "Q",
              line: this.selectedQline,
            },
          }
        )
        .then((response) => {
          this.resultQ = response.data;
        });
    },
    gaugeColor(Value, target, setting) {
      if (
        parseFloat(Value) < parseFloat(target) - parseFloat(setting) * 0.5 &&
        parseFloat(Value) > parseFloat(target) - parseFloat(setting)
      ) {
        return [{ offset: 0, color: "#ffc107" }];
      } else {
        if (parseFloat(Value) < parseFloat(target) - parseFloat(setting)) {
          return [{ offset: 0, color: "#ff8080" }];
        } else {
          return [{ offset: 0, color: "lightgreen" }];
        }
      }
    },

    SendOEESetting() {
      let OeeSettingPost = this.oeesetting;
      const options = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS",
        },
        auth: {
          username: "production",
          password: "074422188",
        },
      };
      axios
        .post(
          this.$store.state.IP_nodered +
            this.$store.state.PortNodered +
            this.$store.state.oeeSetting,
          OeeSettingPost,
          options
        )
        .then(
          (res) => {
            console.log(res.response);
          },
          (err) => {
            console.log(err.response);
          }
        );
    },
    //this.OEE[j] += this.datas[i].OEEDatatable[j].oee;
    ///////////////////////////////////////////////////////////////////////////
    refresh() {
      this.intervalLoad = setInterval(() => {
        this.load();
        this.OEELoad();
        this.ALoad();
        this.PLoad();
        this.QLoad();
      }, 10000);
    },
  },
  beforeUpdate() {},
  beforeDestroy() {
    clearInterval(this.intervalLoad);
  },
};
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}

.centered-input >>> input {
  text-align: right;
}
.v-data-table__wrapper tbody tr {
  width: 30px;
}
table {
  border-collapse: collapse;
  width: 100%;
}

tr {
  border-bottom: 1px solid #ddd;
}
th,
td {
  padding: 10px;
  text-align: left;
}
table {
  font-size: 90%;
}
table {
  font-size: 90%;
}
table tr:hover td {
  background: #bdbdbd !important;
}
#chart {
  max-width: 650px;
  margin: 35px auto;
}

div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
