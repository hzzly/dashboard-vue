<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'

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
          'rgba(108, 203, 199, 1)',
          'rgba(75, 163, 203, 1)',
          'rgba(179, 179, 179, 1)',
          'rgba(243, 186, 67, 1)'
        ],
        tooltip: {
          trigger: 'item',
          formatter: '<div style="text-align:left;font-size:12px;line-height:20px;padding: 5px 10px; color: rgba(255,255,255,.9)">{b}: {c}个<br/> 占比: {d}%<div>'
        },
        grid: {
          top: '5%',
          left: '0',
          right: '0',
          bottom: '5%',
          containLabel: true
        },
        legend: {
          data: data[0].data.map(e => ({ name: e.name, icon: 'circle' })),
          orient: 'vertical',
          right: '10%',
          top: '20%'
        },
        series: data.map(e => ({
          radius: '50%',
          center: ['50%', '50%'],
          type: 'pie',
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            emphasis: {
              show: false,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          ...e
        }))
      }
    }
  }
}
</script>
