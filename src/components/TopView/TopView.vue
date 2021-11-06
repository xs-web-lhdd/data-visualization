<template>
  <div class="Top-view">
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="always">
          <total-sale />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-order />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <total-user />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <today-user />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSale from '../TotalSales/TotalSale.vue'
import TotalUser from '../TotalUsers/TotalUser.vue'
import TotalOrder from '../TotalOrders/TotalOrder.vue'
import TodayUser from '../TodayUsers/TodayUser.vue'

export default {
  name: 'TopView',
  components: { TotalSale, TotalUser, TotalOrder, TodayUser }
}
</script>

<style scoped>

</style>
