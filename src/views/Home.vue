<template>
  <div class="home">
    <span class="home-text"></span>
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <img alt="Vue logo" src="../assets/img/tab3.png" />
    <!-- <Button /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input autocomplete="new-password" type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form> -->
    <Mtable/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Mtable from "@V/Mtable.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
    Mtable
  },
  data:()=>({
    test2:'我在option里面声明了',
    formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
  }),
  methods:{
    handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
  },
  beforeCreate(){
    console.log('home---beforeCreate');
    
  },
  mounted(){
    console.log('home---mounted');

  },
  updated(){
    console.log('home---updated');

  },
  beforeDestroy(){
    console.log('home---beforeDestroy');

  },
  destoryed(){
    console.log('home---destoryed');

  },
  beforeRouteEnter(to,from,next){
    console.log(to,'home---totobeforeRouteEnter');
    next()
  },
  beforeUpdate(){
    console.log('home---totobeforeUpdate');
  },
  beforeRouteLeave(to,from,next){
    console.log(to,'home---beforeRouteLeave');
    next()

  }
};
</script>
<style>
.home-text {
  color: blue;
}
</style>
