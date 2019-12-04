<template>
  <div class="item">
      <div class="div" v-for="(item,index) in item" :key="index">
          <h2>{{item.name}}</h2>
          <p>{{item.main}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props:[
        'item'
    ]
}
</script>
<style lang="scss" scoped>
.div{
    width: 100%;
    height: 80px;
    line-height: 40px;
    text-align: left;
    padding-left: 15px;
    border-bottom: 1px solid #ccc;
}
</style>