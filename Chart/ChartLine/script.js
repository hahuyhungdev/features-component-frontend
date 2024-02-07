const startDate = new Date(Date.UTC(2023, 6, 3)); // Month is 0-indexed, so 2 is March
const weekInMonth = 10;
const interval = 7;

const randomData = (min, max) => {
  return Array.from({ length: weekInMonth }, (_, index) => {
    const date = new Date(startDate);

    date.setDate(startDate.getDate() + index * interval);

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
  title: {
    text: 'chart daily week',
    align: 'left',
  },
  yAxis: {
    gridLineWidth: 0,
    lineWidth: 1, // Customize the yAxis border width
    tickLength: 10, // Customize the length of the tick marks
    tickWidth: 1, // Customize the width of the tick marks
    tickPosition: 'outside', // Position the tick marks inside the yAxis
    title: {
      enabled: false, // Hide the yAxis title
    },
    tickInterval: 5,
  },
  xAxis: {
    type: 'datetime', // Sử dụng dạng 'datetime' cho trục thời gian
    accessibility: {
      rangeDescription: 'Range: Week 1 to Week 11',
    },
    labels: {
      rotation: 0, // Set the rotation of x-axis labels to 0 degrees (horizontal)
      formatter: function () {
        const dateStart = Highcharts.dateFormat('%m.%d', this.value); // Lấy ngày bắt đầu tuần
        const dateEnd = Highcharts.dateFormat('%m.%d', this.value + 6 * 24 * 3600 * 1000); // Lấy ngày kết thúc tuần (cộng thêm 6 ngày)
        return `${dateStart} ~ ${dateEnd}`;
      },
    },
    tickInterval: interval * 24 * 3600 * 1000, // Khoảng cách giữa các nhãn là 1 tuần (7 ngày)
    min: startDate.getTime(),
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
    },
  },
  series,

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
});
