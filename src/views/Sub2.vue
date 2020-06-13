<template>
  <div>我是sub2组件</div>
</template>
<script>
export default{
  name:'Sub2',
  data:()=>({
    name:'Sub2'
  }),
  beforeCreate(){
    console.log('Sub2---beforeCreate');
    
  },
  mounted(){
    console.log('Sub2---mounted');

  },
  beforeUpdate(){
    console.log('Sub2---beforeUpdate');

  },
  updated(){
    console.log('Sub2---updated');

  },
  beforeDestroy(){
    console.log('Sub2---beforeDestroy');

  },
  destoryed(){
    console.log('Sub2---destoryed');

  },
  beforeRouteEnter(to,from,next){
    debugger
    console.log(to,'sub2---totobeforeRouteEnter');
    next()
  },
  beforeUpdate(to,from,next){
    debugger
    console.log(to,'sub2---totobeforeUpdate');
    next()

  },
  beforeRouteLeave(to,from,next){
    debugger
    console.log(to,'sub2---totobeforeUpdate');
    next()

  }
}
</script>