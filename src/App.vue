<template>
  <div id="app">
    <router-link to="/refinedUI"><ou-link>RefinedUIView</ou-link></router-link>
    <router-link to="/"><ou-link>OriginUglyUI</ou-link></router-link>
    <router-link to="/todolist"><ou-link>TodoList</ou-link></router-link>
    <p @modeChange="getAttitude">{{myAttitudeTowardsYou}} World</p>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'app',
  data(){
    return {
      myAttitudeTowardsYou:'Hello'
    }
  },
  methods:{
    getAttitude(mode){
      this.myAttitudeTowardsYou=mode=='happy'?'Hello':mode==='sad'?'Bye':mode==='angry'?'Fuck':null;
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
