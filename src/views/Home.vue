<template>
  <div class="home">
    <div class="top"></div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footers">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/footer'
export default {
  name: 'home',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  // display: flex;
  flex-direction: column;
  .footers{
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    bottom: 0;
  }
  
}
</style>