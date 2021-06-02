import Chart from 'react-apexcharts';

const Mchart = () => {
  const options = {
    xaxis: {
      tickAmount: 4,
      min: -2,
      max: 2,
      decimalsInFloat: 0,
    },
    yaxis: {
      decimalsInFloat: 1,
      tickAmount: 4,
      min: -2,
      max: 2
    },
  };

  const mockData = {

    series: [
      {
        name: "Círculo",
        
        data: [
          [1.0,Math.sqrt(1-1.0**2)],[0.98,Math.sqrt(1-0.98**2)],[0.95,Math.sqrt(1-0.95**2)],[0.9,Math.sqrt(1-0.9**2)],[0.75,Math.sqrt(1-0.75**2)], [0.5,Math.sqrt(1-0.5**2)],[0.25,Math.sqrt(1-0.25**2)],[0.0,Math.sqrt(1-0.0**2)],
          [-0.25,Math.sqrt(1-0.25**2)],[-0.5,Math.sqrt(1-0.5**2)],[-0.75,Math.sqrt(1-0.75**2)],[-0.9,Math.sqrt(1-0.9**2)],[-0.95,Math.sqrt(1-0.95**2)],[-0.98,Math.sqrt(1-0.98**2)],[-1.0,Math.sqrt(1-1.0**2)],
          [-1.0,-Math.sqrt(1-1.0**2)],[-0.98,-Math.sqrt(1-0.98**2)],[-0.95,-Math.sqrt(1-0.95**2)],[-0.9,-Math.sqrt(1-0.9**2)],[-0.75,-Math.sqrt(1-0.75**2)], [-0.5,-Math.sqrt(1-0.5**2)],[-0.25,-Math.sqrt(1-0.25**2)],[-0.0,-Math.sqrt(1-0.0**2)],
          [0.25,-Math.sqrt(1-0.25**2)],[0.5,-Math.sqrt(1-0.5**2)],[0.75,-Math.sqrt(1-0.75**2)],[0.9,-Math.sqrt(1-0.9**2)],[0.95,-Math.sqrt(1-0.95**2)],[0.98,-Math.sqrt(1-0.98**2)],[1.0,-Math.sqrt(1-1.0**2)],
        ]
      },
      {
        name: "Dentro",
        
        data: [
          [0.8,0.0],[0.8,0.5]
        ]
      },
      {
        name: "Fora",
        
        data: [
          [0.8,0.8],[0.8,1.8]
        ]
      },
    ], 

  };

  return (
    <Chart
      options={options}
      series={mockData.series}
      type="line"
      height="500"
      width="500"
    />
  );
}

export default Mchart;