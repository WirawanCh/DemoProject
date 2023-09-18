// Utilities
import { defineStore } from 'pinia'

import axios from 'axios'
//import  router  from '../router';

const urlEnergy = import.meta.env.VITE_APP_IPEnergy;

export const useDashboardEnergyStore = defineStore({
  id: 'Energy',
  state: () => ({
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
    csvPower:[],
    currentBar: [],
    kwhBar: [],
    VoltBar: [],
    kwhPermilBar: [],
    currentBarL2: [],
    VoltBarL2: [],
    kwhBarL2: [],
    kwhPermilBarL2: [],
    dataresultpmrealtimeL1:[],

    power: "",
    powerDay: "",
    powerL2: "",
    powerDayL2: "",

    resultpmseries: [],

    resultpmrealtimeL1: [],
    resultpmrealtimeL2: [],
  }), 
  actions: 
  {
    async Loadpm() 
    {
      //this.DataActual = [50];
      try {
        await axios.get(urlEnergy + "/pm").then((res) => {
          this.datas = res.data;
  
          this.power = this.datas[0].data.Power;
          this.powerDay = this.datas[0].data.Power_Day;
  
          this.powerL2 = this.datas[1].data.Power;
          this.powerDayL2 = this.datas[1].data.Power_Day;
  
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
          this.setTime = setInterval(() => {
            axios.get(urlEnergy + "/pm").then((res) => {
              this.datas = res.data;
    
              this.power = this.datas[0].data.Power;
              this.powerDay = this.datas[0].data.Power_Day;
    
              this.powerL2 = this.datas[1].data.Power;
              this.powerDayL2 = this.datas[1].data.Power_Day;
    
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
  
          console.log(res);
        });
      } catch (error) {
        console.error(error);
      }
    },
    async pmrealtimeload() 
    {
      try {
        await axios.get(urlEnergy + "/pmrealtimebuffer").then((response) => {
          console.log(response);
          this.resultpm = response.data;
  
          this.resultpmrealtimeL1 = [
            { data: this.resultpm[0].series[0].data },
          ];
  
          this.resultpmrealtimeL2 = [
            { data: this.resultpm[1].series[0].data },
          ];
        });
      }
      catch (error) {
        console.error(error);
      }

    },
  },
  persist:true
})
