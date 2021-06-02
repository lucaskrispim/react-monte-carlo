import * as Highcharts from 'highcharts';
import React, { useEffect, useState } from "react";
import HighchartsReact from 'highcharts-react-official';
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

type SeriesData = {
  data: number[][];
};

type SeriesData2 = {
  data: number[][];
};

const Chart = () => {

  const [SeriesData, setSeriesData] = useState<SeriesData>({
    data: []
  });

  const [SeriesData2, setSeriesData2] = useState<SeriesData2>({
    data: []
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const mySeries = [Math.random(), Math.random()];
      if ( (mySeries[0] ** 2.0 + mySeries[1] ** 2.0) < 1.0) {
        const temp = [...SeriesData.data, mySeries]
        setSeriesData({ data: temp });
      } else {
        const temp = [...SeriesData2.data, mySeries]
        setSeriesData2({ data: temp });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [SeriesData, SeriesData2]);

  const options: Highcharts.Options = {
    chart: {
      height: 500,
      width: 500
    },
    yAxis: {
      max: 1.2
    },
    xAxis: {
      max: 1.2
    },
    title: {
      text: ''
    },

    series: [{
      name: "1/4 de circunferência",
      type: 'line',
      data: [[0, 1], [0.1, Math.sqrt(1 - 0.1 ** 2)], [0.2, Math.sqrt(1 - 0.2 ** 2)], [0.3, Math.sqrt(1 - 0.3 ** 2)], [0.4, Math.sqrt(1 - 0.4 ** 2)], [0.5, Math.sqrt(1 - 0.5 ** 2)], [0.6, Math.sqrt(1 - 0.6 ** 2)],
      [0.7, Math.sqrt(1 - 0.7 ** 2)], [0.75, Math.sqrt(1 - 0.75 ** 2)], [0.8, Math.sqrt(1 - 0.8 ** 2)], [0.85, Math.sqrt(1 - 0.85 ** 2)], [0.9, Math.sqrt(1 - 0.9 ** 2)], [0.92, Math.sqrt(1 - 0.92 ** 2)],
      [0.93, Math.sqrt(1 - 0.93 ** 2)], [0.94, Math.sqrt(1 - 0.94 ** 2)], [0.95, Math.sqrt(1 - 0.95 ** 2)], [0.96, Math.sqrt(1 - 0.96 ** 2)], [0.97, Math.sqrt(1 - 0.97 ** 2)],
      [0.98, Math.sqrt(1 - 0.98 ** 2)], [0.99, Math.sqrt(1 - 0.99 ** 2)], [1, 0]]

    },
    {
      name: "dentro",
      type: 'scatter',
      data: SeriesData.data
    },
    {
      name: "fora",
      type: 'scatter',
      data: SeriesData2.data
    }
    ]
  }


  return (
    <div className="row">


      <div className="col-sm-6">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
      <div className="col-sm-6">
      <h4><Latex>{`$ \\pi \\approx 4 \\times \\frac{Pontos \\ dentro}{Pontos \\ dentro + Pontos \\ fora} = 4 \\times\\frac{${SeriesData.data.length}}{${SeriesData.data.length + SeriesData2.data.length }} = ${((4.0*SeriesData.data.length)/(SeriesData.data.length+SeriesData2.data.length)).toFixed(4)} $`}</Latex></h4>
      </div>
    </div>
  );

}

export default Chart;