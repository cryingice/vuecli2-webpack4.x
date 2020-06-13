<template>
  <div>我是sub1组件</div>
</template>
<script>
export default{
  name:'Sub1',
  data:()=>({
    name:'sub1'
  }),
  beforeCreate(){
    console.log('sub1---beforeCreate');
    
  },
  mounted(){
    console.log('sub1---mounted');

  },
  beforeUpdate(){
    console.log('sub1---beforeUpdate');

  },
  updated(){
    console.log('sub1---updated');

  },
  beforeDestroy(){
    console.log('sub1---beforeDestroy');

  },
  destoryed(){
    console.log('sub1---destoryed');

  },
  beforeRouteEnter(to,from,next){
    debugger
    console.log(to,'sub1---totobeforeRouteEnter');
    next()
  },
  beforeUpdate(to,from,next){
    debugger
    console.log(to,'sub1---totobeforeUpdate');
    next()

  },
  beforeRouteLeave(to,from,next){
    debugger
    console.log(to,'sub1---totobeforeUpdate');
    next()

  }
}
</script>