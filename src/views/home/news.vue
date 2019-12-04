<template>
  <div class="news">
      <Item :item="list"/>
  </div>
</template>

<script>
import Item from '../../components/item'
export default {
  components:{
    Item
  },
  data(){
    return {
      list:[
        {
          name:'同桌',
          main:'昨天作业做了吗'
        },{
          name:'小红',
          main:'今天中午一起吃饭'
        },{
          name:'小明',
          main:'放学值日'
        },{
          name:'小刚',
          main:'明天早上早点来'
        },{
          name:'小亮',
          main:'周六一起去图书馆'
        },{
          name:'小美',
          main:'周末一起补课'
        }
      ]
    }
  }
}
</script>

<style>

</style>