<template>
  <!-- <span class="pl-15"> {{datatableOEEL1}} </span> -->
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" class="pl-15">
      <v-window v-model="tab">
        <!-- <v-row>
          <v-col cols="6">
            <pre>{{this.sumPcsDip}}</pre>
          </v-col>
          <v-col cols="6">
            <pre>{{ }}</pre>
          </v-col></v-row
        > -->
        <!---------------------------------------Tab Lne1------------------------------------------->
        <v-window-item value="1">
          <v-container fluid>
            <v-row>
              <v-col cols="4" sm="6" md="4" lg="4">
                <v-card height="100">
                  <v-row>
                    <v-col cols="5"
                      ><h2 class="pl-2 mt-2">{{ this.sumPcsDip }}</h2>
                      <div class="text-red pl-2">Production Total</div></v-col
                    >
                    <v-col class="mt-4">pcs.</v-col>
                    <v-col cols="5" class="pl-10 pr-5">
                      <svg
                        class="animated-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                      >
                        <g fill="#205072">
                          <path
                            fill-rule="evenodd"
                            d="M29.712 24.189c.371-.125.763-.19 1.158-.19h1.112a.25.25 0 0 0 .25-.266l-.45-6.518a.48.48 0 0 0-.499-.453c-4.266.216-7.694 3.386-7.957 7.734l-.035.579a.5.5 0 0 0 .616.516zm.188-5.193c-2.08.572-3.69 2.099-4.311 4.131l3.578-.864c.308-.098.624-.169.944-.212z"
                            clip-rule="evenodd"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M10.5 6a3.5 3.5 0 0 0-3.114 5.1l-1.16 13.276a.888.888 0 0 0-.004.064l-.082 2.32a4.875 4.875 0 0 0 4.296 5.013l.18.022a4.875 4.875 0 0 0 4.8-2.405l2.195-3.806c.495-.857-.278-1.889-1.24-1.655l-1.681.408l-2.548-.165l-1.066-.127l1.692-11.222c1.815.562 3.607 1.158 5.153 2.002c1.495.817 2.688 1.829 3.417 3.198a11.952 11.952 0 0 0-2.218 6.311l-.311 5.61A1 1 0 0 0 19.807 31h21.65a.5.5 0 0 0 .498-.541l-.59-7.084A1.5 1.5 0 0 0 39.87 22h-3.826a.05.05 0 0 1-.05-.043l-1.004-7.232A2 2 0 0 0 33.009 13h-1.907a11.96 11.96 0 0 0-5.091 1.131c-2.914-4.408-8.012-5.65-12.649-6.646A3.496 3.496 0 0 0 10.5 6M9 9.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.977 3.468a3.538 3.538 0 0 1-1.971-.302L7.971 24.503l-.082 2.319a3.125 3.125 0 0 0 2.754 3.213l.18.022a3.125 3.125 0 0 0 3.077-1.541l1.466-2.542l-.356.086c-.11.027-.224.037-.338.03l-2.69-.175l-1.753-.209a1.125 1.125 0 0 1-.98-1.285zm7.903.102c-1.633-.892-3.481-1.521-5.22-2.064c.194-.407.313-.857.336-1.332c4.254.962 8.036 2.158 10.278 5.457a12.06 12.06 0 0 0-1.563 1.29c-.967-1.469-2.336-2.534-3.831-3.35m2.237 11.375A10 10 0 0 1 31.102 15h1.907l1.004 7.232A2.05 2.05 0 0 0 36.043 24h3.367l.417 5H20.864z"
                            clip-rule="evenodd"
                          />
                          <path
                            d="M23.5 39a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7.5-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M21.5 33a4.5 4.5 0 1 0 0 9h16a4.5 4.5 0 1 0 0-9zm16 2h-16a2.5 2.5 0 0 0 0 5h16a2.5 2.5 0 0 0 0-5"
                            clip-rule="evenodd"
                          />
                        </g>
                      </svg>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col cols="4" sm="12" md="4" lg="4">
                <v-card height="100">
                  <v-row>
                    <v-col cols="5"
                      ><h2 class="pl-2 mt-2">254</h2>
                      <div class="text-red pl-2">Active Machine</div></v-col
                    >
                    <v-col class="mt-4"></v-col>

                    <v-col cols="5" class="pl-10 pr-5">
                      <svg
                        class="animated-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="100"
                        viewBox="0 0 64 64"
                      >
                        <ellipse
                          cx="45.594"
                          cy="53.243"
                          fill="#205072"
                          rx=".469"
                          ry=".461"
                        />
                        <path
                          fill="#205072"
                          d="M61.063 58.313h-1.875l-.375-7.745l-.376-7.743l-.375-7.744l-.374-7.743l-.375-7.744h-.173a2.802 2.802 0 0 0 .704-1.844c0-.825-.364-1.597-.973-2.128c.023-.162.035-.324.035-.484c0-2.124-1.816-3.882-3.959-3.762a4.859 4.859 0 0 0-.47-.807c.014-.125.021-.25.021-.379c0-2.991-2.467-5.424-5.499-5.424a4.77 4.77 0 0 0-.658.046A5.742 5.742 0 0 0 41.375 2a5.764 5.764 0 0 0-3.649 1.308A6.477 6.477 0 0 0 33.796 2a6.546 6.546 0 0 0-3.586 1.07c-1.974-1.427-4.901-1.379-6.845.162c-2.212-1.438-5.187-1.618-7.57-.424A9.59 9.59 0 0 0 11.925 2c-5.294 0-9.601 4.242-9.601 9.457s4.307 9.458 9.601 9.458c3.153 0 6.05-1.497 7.852-4.031a7.531 7.531 0 0 0 6.062-3.853A5.47 5.47 0 0 0 29 12.717a6.544 6.544 0 0 0 4.797 2.091a6.506 6.506 0 0 0 4.838-2.137a5.585 5.585 0 0 0 3.845.586c.306.443.672.837 1.087 1.168c.498 2.223 2.504 3.85 4.841 3.85c.709 0 1.401-.148 2.04-.436c.516.499 1.159.84 1.865.985c.115.284.277.542.473.77h-1.097l-.375 7.744l-.376 7.743l-.375 7.744l-.374 7.743l-.375 7.745V39.875h-11.25l-11.25-9.219v9.219l-11.25-9.219v9.219l-11.25-9.219v27.656H2.938a.934.934 0 0 0-.938.923v1.843c0 .507.421.922.938.922h58.125a.933.933 0 0 0 .937-.922v-1.843a.933.933 0 0 0-.937-.922m-9.518-42.279l-.553-.904l-.871.605a2.997 2.997 0 0 1-1.715.539c-1.486 0-2.748-1.096-2.935-2.548l-.059-.452l-.379-.252a3.483 3.483 0 0 1-1.185-1.373l-.389-.798l-.839.292c-1.375.478-2.579.196-3.593-.6l-.853-.673l-.599.91a4.504 4.504 0 0 1-3.779 2.027a4.528 4.528 0 0 1-3.706-1.916l-.533-.759l-.797.474c-.951.566-1.979.707-3.124.296l-.903-.324l-.361.888c-.846 2.08-2.865 3.429-5.145 3.437l-.55.002l-.293.465c-1.4 2.218-3.815 3.543-6.459 3.543c-4.191 0-7.601-3.346-7.601-7.458C4.324 7.345 7.733 4 11.925 4c1.208 0 2.37.277 3.453.822l.489.246l.471-.279c2.009-1.191 4.688-.97 6.462.506l.734.61l.644-.704A3.63 3.63 0 0 1 26.882 4a3.66 3.66 0 0 1 2.59 1.059l.657.649l.699-.604A4.54 4.54 0 0 1 33.796 4c1.235 0 2.389.484 3.247 1.364l.76.778l.712-.823A3.786 3.786 0 0 1 41.375 4c1.545 0 2.915.913 3.491 2.325l.335.823l.857-.237c.36-.1.659-.146.941-.146c1.93 0 3.499 1.536 3.499 3.424c0 .164-.027.321-.057.512l-.069.454l.299.349c.319.371.532.783.634 1.224l.24 1.04l1.021-.307c.204-.062.371-.09.526-.09c.999 0 1.813.792 1.813 1.766c0 .185-.037.377-.114.59l-.32.879l.856.377a.848.848 0 0 1 .516.767c0 .466-.393.844-.875.844a.851.851 0 0 1-.863-.775l-.076-.917l-.991.001a1.802 1.802 0 0 1-1.493-.869m.966 17.547l.23-4.743h3.517l.229 4.743zm-.749 15.487l.229-4.743h5.017l.23 4.743zm-4.074 12.16h-7v-.82h7zm.125-12.134v7.22H47.5v-7.22zm-5.938 8.719v-8.22H46.5v8.22zm-.25 2.094v-1.094h5.125v1.094zM16.531 49.555h10.313v3.228H16.531zm-.937 3.227H6.813v-3.228h8.781zm12.187-3.227h9.844v3.228h-9.844zm0-.922v-3.227h9.844v3.227zm-.937 0H16.531v-3.227h10.313zm-11.25 0H6.813v-3.227h8.781z"
                        />
                        <path
                          fill="#205072"
                          d="M22.529 8.597a2.126 2.126 0 0 0-.366-.245a2.405 2.405 0 0 0-.411-.196a3.227 3.227 0 0 0-.522-.155a2.885 2.885 0 0 0-.815-1.438a3.292 3.292 0 0 0-.875-.629a4.486 4.486 0 0 0-1.022-.372c-1.323-.303-2.792.067-3.71.894c-.011-.004-.018-.011-.027-.014a2.809 2.809 0 0 0-.54-.158a3.024 3.024 0 0 0-1.111.015c-.705.16-1.294.592-1.502 1.124a2.44 2.44 0 0 1 1.592-.545c.271.001.528.059.757.151c.133.053.169.073.326.16c.088.052.178.13.257.203l.346.317l.431-.358c.762-.635 1.871-.881 2.851-.669c.117.022.247.06.352.092c.091.028.218.076.368.149c.185.097.419.229.597.376c.374.298.643.697.808 1.137l.134.352l.333-.002c.231-.001.482.002.698.037c.205.021.492.119.699.201c.448.193.854.496 1.17.904c-.068-.488-.368-.969-.818-1.331m27.444 2.73a1.816 1.816 0 0 0-.217-.26a2.236 2.236 0 0 0-.304-.267a2.128 2.128 0 0 0-.091-1.226a2.369 2.369 0 0 0-.392-.697a2.931 2.931 0 0 0-.257-.291a3.449 3.449 0 0 0-.315-.278c-.8-.615-1.912-.819-2.8-.544l-.014-.018a2.016 2.016 0 0 0-.315-.274a2.266 2.266 0 0 0-.757-.335c-.528-.11-1.065 0-1.377.296a1.825 1.825 0 0 1 1.253.124c.183.084.339.204.464.336c.074.077.091.102.17.209c.043.063.078.144.108.217l.134.322l.406-.109c.719-.194 1.549-.017 2.144.43c.072.052.148.117.209.171c.053.047.123.12.201.215c.095.123.21.285.283.44c.157.318.213.671.184 1.02l-.022.28l.227.102c.156.071.326.15.46.241a2.178 2.178 0 0 1 .912 1.328c.113-.349.064-.767-.125-1.152a1.693 1.693 0 0 0-.169-.28"
                        />
                      </svg>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col cols="4" sm="12" md="4" lg="4">
                <v-card height="100">
                  <v-row>
                    <v-col cols="5"
                      ><h2 class="pl-2 mt-2">$247.1 K</h2>
                      <div class="text-red pl-2">Sale Avanue</div></v-col
                    >
                    <v-col class="mt-4"></v-col>

                    <v-col cols="5" class="pl-10 pr-5">
                      <svg
                        class="animated-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="100"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#205072"
                          d="M30 6V4h-3V2h-2v2h-1c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h4v2h-6v2h3v2h2v-2h1c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2h-4V6zm-6 14v2h2.586L23 25.586l-2.292-2.293a1 1 0 0 0-.706-.293H20a.997.997 0 0 0-.706.293L14 28.586L15.414 30l4.587-4.586l2.292 2.293a1 1 0 0 0 1.414 0L28 23.414V26h2v-6zM4 30H2v-5c0-3.86 3.14-7 7-7h6c1.989 0 3.89.85 5.217 2.333l-1.49 1.334A5.008 5.008 0 0 0 15 20H9c-2.757 0-5 2.243-5 5zm8-14a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 1 1 0 10a5 5 0 0 1 0-10"
                        />
                      </svg>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" sm="12" md="6" lg="6">
                <v-card height="350">
                  <v-chip
                    variant="elevated"
                    class="text-white"
                    color="#205072"
                    label
                  >
                    <h3>Current Day</h3></v-chip
                  >
                  <apexchart
                    type="donut"
                    :options="data.chartOptions"
                    :series="this.currentOEE"
                    height="250"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="6" sm="12" md="6" lg="6">
                <v-card height="350">
                  <v-chip
                    variant="elevated"
                    class="text-white"
                    color="#205072"
                    label
                  >
                    <h3>OEE</h3>
                  </v-chip>
                  <apexchart
                    type="bar"
                    height="300"
                    :options="data2.chartOptions"
                    :series="this.OEEdataTable"
                  ></apexchart>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-card height="350">
                  <v-chip
                    variant="elevated"
                    class="text-white"
                    color="#205072"
                    label
                  ><h3>Production</h3>
                  </v-chip>

                  <apexchart
                    type="bar"
                    height="280"
                    :options="data3.chartOptions"
                    :series="this.pcsdipData"
                  ></apexchart>
                </v-card>
              </v-col>

              <v-col cols="6">
                <v-card height="350">
                  <v-chip
                    variant="elevated"
                    class="text-white"
                    color="#205072"
                    label
                  >
                  <h3>Work Hour</h3>
                  </v-chip>

                  <v-data-table
                    fixed-header
                    height="272"
                    :headers="headers"
                    :items="this.oeeData.WorkHour"
                    :items-per-page="5"
                    class="elevation-1"
                  ></v-data-table>

               
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

const urlOEE = import.meta.env.VITE_APP_IPNODERED;
export default {
  data() {
    return {
      overallOee: "",
      tab: null,
      oeeData: "",
      OEEdataTable: "",

      data: {
        series: [44, 55, 41, 17, 15],

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
            formatter: function (val, opts) {
              return opts.w.config.series[opts.seriesIndex];
            },
          },
          labels: ["%OEE", "%A", "%P", "%Q"],
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
      },

      headers: [
        {
          title: "name",
          align: "start",
          sortable: false,
          key: "name",
        },
        { title: "runtime", align: "end", key: "runtime" },
        { title: "stoptime", align: "end", key: "stoptime" },
      
      ],

      testseries:  [
          {
            name: "pcs",
            data: [1956, 1904, 1982, 1950, 1929],
          },
       
        ],



      data2: {
        series: [
          {
            name: "OEE",
            data: [99, 98, 95, 96, 99],
          },
          {
            name: " A",
            data: [99, 98, 96, 95, 99],
          },
          {
            name: " P",
            data: [97, 99, 95, 95, 0],
          },
          {
            name: "Q",
            data: [99, 95, 99, 95, 0],
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
          xaxis: {
            categories: [
              "Previous day",
              "Shift A",
              "Shift B",
              "Shift C",
              "Current Day",
            ],
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


      data3: {
      
        chartOptions: {
          chart: {
            type: "bar",
            height: 300,
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
          colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
          xaxis: {
            categories: [
              "Previous day",
              "Shift A",
              "Shift B",
              "Shift C",
              "Current Day",
            ],
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
    
      pcsdipData: "",
      seriesSpeed: [],
      currentOEE: [],
      sumPcsDip: "",

      dataOEE: "",
    };
  },

  created() {
    this.OEEload();
  },

  methods: {
    async OEEload() {
      try {
        const response = await axios.get(urlOEE + "/overalloee");
        console.log(response);
        this.oeeData = response.data[0];

        this.pcsdipData = this.oeeData.PieceDipSeries

        this.sumPcsDip = this.oeeData.PieceDipSeries[0].data[1] + this.oeeData.PieceDipSeries[0].data[2] + this.oeeData.PieceDipSeries[0].data[3] + this.oeeData.PieceDipSeries[0].data[4]

      

        this.OEEdataTable = [
          {
            name: "% OEE",
            data: response.data[0].OEEDatatable.map((item) => item.oee),
          },
          {
            name: "% A",
            data: response.data[0].OEEDatatable.map((item) => item.a),
          },
          {
            name: "% P",
            data: response.data[0].OEEDatatable.map((item) => item.p),
          },
          {
            name: "% Q",
            data: response.data[0].OEEDatatable.map((item) => item.q),
          },
        ];
        

        this.currentOEE = [
          response.data[0].OEE,
          response.data[0].Availability,
          response.data[0].Performance,
          response.data[0].Quality,
        ];
      } catch (error) {
        console.error("Error fetching OEE data:", error);
      }
    },
  },
};
</script>
  
  <style>
.v-data-table .v-data-table-header tr {
  font-size: 24px !important;
}

.animated-svg {
  animation: bounce 1s infinite alternate; /* You can adjust the animation properties */
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>
  