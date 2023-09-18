// Utilities
import { defineStore } from 'pinia'

import axios from 'axios'
//import  router  from '../router';

const urlOEE = import.meta.env.VITE_APP_IPNODERED

export const useOEEStore = defineStore({
  id: 'OEE',
  state: () => ({
    overallOee:'',
    seriesCurrent: [],
    seriesWorkHour: [],
    
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
      ],
    
  }), 
  actions: 
  {
    async load() {
      await axios
        .get( urlOEE + "/overalloee")
        .then((response) => {
          this.datas = response.data;

          this.series2 = [
            this.datas[0].OEE,
            this.datas[0].Availability,
            this.datas[0].Performance,
            this.datas[0].Quality,
          ];

          this.seriesWorkHour = [
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
        });
      this.overallOee = setInterval(() => {
        axios.get(urlOEE + "/overalloee").then((response) => {
          this.datas = response.data;
        });
      }, 10000);
    },
    
  },
  persist:true
})
