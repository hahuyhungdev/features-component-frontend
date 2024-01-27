const startDate = new Date(Date.UTC(2023, 2, 1)); // Month is 0-indexed, so 2 is March
const daysInMonth = 20; // Updated to include all days from 1 to 31

const randomData = (min, max) => {
  return Array.from({ length: daysInMonth }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    const x = date.getTime(); // Use getTime() to get the UTC timestamp directly
    const y = Math.floor(Math.random() * (max - min) + min + 5); // Sample data, you can replace this with your actual data
    return [x, y];
  });
};
const titles = ['Series 1', 'Series 2', 'Series 3', 'Series 4'];
const series = titles.map((title, index) => {
  return {
    name: title,
    marker: {
      symbol: 'none', // Customize the marker symbol for Series 1
    },
    data: randomData(index * 2 - 1, index * 2 + 2),
  };
});

Highcharts.chart('container', {
  chart: {
    type: 'spline',
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
  },
  title: {
    text: 'daily Average Temperature',
  },
  // Other configurations...
  xAxis: {
    type: 'datetime', // Use datetime type for the xAxis
    gridLineWidth: 1,
    accessibility: {
      description: 'day of the year',
    },
    labels: {
      rotation: 0, // Set the rotation of x-axis labels to 0 degrees (horizontal)
    },
    min: startDate.getTime(),
  },
  yAxis: {
    gridLineWidth: 0,
    lineWidth: 1, // Customize the yAxis border width
    tickLength: 10, // Customize the length of the tick marks
    tickWidth: 1, // Customize the width of the tick marks
    gridLineWidth: 1,
    tickPosition: 'outside',
    min: 0,
    max: 15,
  },
  // Other configurations...
  series: series,
});
