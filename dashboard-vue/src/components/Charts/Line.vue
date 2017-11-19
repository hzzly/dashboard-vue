<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
const styles = 'display:inline-block;width:8px;height:8px;border-radius:4px;margin-right:6px;'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    options: {
      type: Object
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.chart = echarts.init(document.getElementById(this.id))
    const option = this.getOption()
    this.chart.setOption(option)
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    getOption () {
      const { colors, data } = this.options

      return {
        color: colors || [
          'rgba(255, 40, 39, 1)',
          'rgba(126, 211, 33, 1)',
          'rgba(254, 216, 74, 0)',
          'rgba(252, 49, 138, 0)'
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
            // label: {
            //   backgroundColor: '#6a7985'
            // }
          },
          backgroundColor: 'rgba(255,255,255,0.80)',
          borderColor: '#F1F1F1',
          borderWidth: 1,
          padding: [8, 16],
          textStyle: {
            color: '#666',
            fontSize: 10
          },
          extraCssText: 'box-shadow:0 1px 4px 0 rgba(0,0,0,0.20);border-radius:4px;',
          formatter: (params) => {
            return `
              <p style="text-align:left;font-size:12px;line-height:18px">
                <span>${params[0].name}</span>
              </p>
              ${params
          .map(({ color, seriesName, value }) => {
            return value !== '-'
              ? `
                      <p style="text-align:left;line-height:18px">
                        <i class="chart-circle" style="${styles}background-color:${color}"></i>
                        <span style="margin-right: 20px">${seriesName}</span>
                        <span style="float: right;">${value}</span>
                      </p>
                    `
              : null
          })
          .join('')}
            `
          }
        },
        grid: {
          top: '5%',
          left: '0',
          right: '0',
          bottom: '15%',
          containLabel: true
        },
        // legend: {
        //   data: data.map(e => ({ name: e.name, icon: 'circle' })),
        //   // left: '50%',
        //   bottom: 0,
        //   textStyle: {
        //     color: '#fff'
        //   }
        // },
        xAxis: [
          {
            type: 'category',
            interval: 2,
            boundaryGap: false,
            data: Array.apply(null, Array(25)).map((e, i) => `${i}:00`),
            axisLabel: {
              textStyle: {
                fontSize: 10,
                color: '#CCC'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
            // name: '时间',
            // nameLocation: 'end',
            // nameTextStyle: {
            //   color: '#CCC',
            //   fontSize: '10px'
            // }
          }
        ],
        yAxis: [
          {
            type: 'value',
            // interval: 100,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#F0F0F0',
                type: 'solid'
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 10,
                color: '#CCC'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
            // name: '数量           ',
            // nameLocation: 'end',
            // nameGap: 15,
            // nameTextStyle: {
            //   color: '#CCC',
            //   align: 'left',
            //   fontSize: '10px'
            // }
          }
        ],
        series: data.map(e => ({
          smooth: true,
          showSymbol: false,
          type: 'line',
          ...e
        }))
        // [
        //   {
        //     smooth: true,
        //     showSymbol: false,
        //     name: '已占用',
        //     type: 'line',
        //     data: [120, 132, 101, 134, 90, 230, 210]
        //   },
        //   {
        //     smooth: true,
        //     showSymbol: false,
        //     name: '可使用',
        //     type: 'line',
        //     data: [220, 182, 191, 234, 290, 330, 310]
        //   },
        // ]
      }
    }
  }
}
</script>
