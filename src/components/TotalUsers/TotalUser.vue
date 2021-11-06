<template>
  <common-card title="累计订单量" value="3,124,673" >
    <template v-slot:chart>
      <div id="total-users-chart" :style="{ width: '100%', height: '100%' }"></div>
    </template>
    <template v-slot: footer>
      <span>退货率 </span>
      <span class="emphasis">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixins from '../../mixins/commonCardMixins'

export default {
  name: 'TotalUser',
  mixins: [CommonCardMixins],
  mounted () {
    const chartDom = document.getElementById('total-users-chart')
    // init 接收三个参数：dom 样式 渲染方式
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      color: ['#3398DB'],
      xAxis: {
        type: 'category',
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00']
      },
      yAxis: {
      },
      series: [{
        type: 'bar',
        data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134],
        barWidth: '60%'
      }],
      tooltip: {
        axisPointer: {
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
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
