<template>
  <common-card title="累计销售额" value="32039165">
    <template v-slot:chart>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span>7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span>17.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot: footer>
      <span>昨日销售额 </span>
      <span class="emphasis">￥ 300,000,0</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixins from '../../mixins/commonCardMixins'

export default {
  name: 'TotalSale',
  mixins: [CommonCardMixins]
}
</script>

<style lang="scss" scoped>
span{
  font-size: 12px;
}
.compare-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}

</style>
