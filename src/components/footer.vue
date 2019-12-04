<template>
  <div class="footer">
    <div class="foot">
        <router-link v-for="(item,index) in path" :key="index" :to='item.src'>{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      path:[
        {
          name:'消息',
          src:'/news'
        },{
          name:'我的',
          src:'/my'
        },{
          name:'动态',
          src:'/play'
        }
      ]
    }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
.foot{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
}
</style>