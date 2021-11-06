<template>
  <common-card title="累计订单量" value="2,157,420" >
    <template v-slot:chart>
      <div id="today-users-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template v-slot: footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">8.13%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">35.91%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixins from '../../mixins/commonCardMixins'

export default {
  name: 'TodayUser',
  mixins: [CommonCardMixins],
  mounted () {
    const chartDom = document.getElementById('today-users-chart')
    // init 接收三个参数：dom 样式 渲染方式
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [{
        type: 'bar',
        stack: '总量',
        data: [150],
        barWidth: 10,
        itemStyle: {
          color: '#45c946'
        }
      }, {
        type: 'bar',
        stack: '总量',
        data: [200],
        barWidth: 10,
        itemStyle: {
          color: '#eee'
        }
      }, {
        type: 'custom',
        stack: '总量',
        data: [150],
        renderItem: (params, api) => {
          const value = api.value(0)
          const endPoint = api.coord([value, 0])
          return {
            type: 'group',
            position: endPoint,
            children: [{
              type: 'path',
              position: endPoint,
              shape: {
                d: 'M209.656 344.031l298.604 335.938 306.084-335.839-604.688-0.099z',
                x: -82.5,
                y: -40,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: '#45c946'
              }
            }, {
              type: 'path',
              position: endPoint,
              shape: {
                d: 'M512 341.333333l-298.666667 298.666667h597.333334z',
                x: -82.5,
                y: 10,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: 'red'
              }
            }]
          }
        }
      }],
      grid: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer{
  display: flex;
  align-items: center;
  .month{
    margin-left: 10px;
  }
}
</style>
