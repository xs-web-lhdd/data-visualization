<template>
  <common-card title="累计订单量" value="2,157,420" >
    <template v-slot:chart>
      <div id="total-orders-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template v-slot: footer>
      <span>昨日订单量 </span>
      <span class="emphasis">￥ 150,640,388</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixins from '../../mixins/commonCardMixins'

export default {
  name: 'TotalOrder',
  mixins: [CommonCardMixins],
  mounted () {
    const chartDom = document.getElementById('total-orders-chart')
    // init 接收三个参数：dom 样式 渲染方式
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'line',
        data: [620, 432, 220, 534, 790, 430, 220, 320, 660, 340, 239, 570],
        areaStyle: {
          color: 'purple'
        },
        lineStyle: {
          width: 0
        },
        itemStyle: {
          opacity: 0
        },
        smooth: true
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

<style scoped>

</style>
