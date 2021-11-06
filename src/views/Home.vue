<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
  </div>
</template>

<script>
import TopView from '../components/TopView/TopView.vue'
import SalesView from '../components/SalesView/SalesView.vue'
import BottomView from '../components/BottomView/BottomView.vue'

export default {
  name: 'Home',
  components: { TopView, SalesView, BottomView }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>
