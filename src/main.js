// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("skillMap"));

// 指定图表的配置项和数据
var option = {
  tooltip: {},
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#999",
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: "学习能力", max: 100 },
      { name: "Vue", max: 100 },
      { name: "JS", max: 100 },
      { name: "数据结构与算法", max: 100 },
      { name: "CSS", max: 100 },
      { name: "HTML", max: 100 }
    ]
  },
  series: [
    {
      name: "能力雷达",
      type: "radar",
      // areaStyle: {normal: {}},
      data: [
        {
          value: [50, 50, 50, 50, 50, 50],
          name: "能力雷达"
        }
      ]
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
