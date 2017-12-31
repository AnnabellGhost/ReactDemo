<template>
  <div class="hello">
    <input placeholder="Search key" v-model="searchKey"/>  
    
    <list @sendYourName="showYourName" :searchkey="searchKey">
      <div slot="selectedInfo">
      Book info:{{ msg }}
    </div>
    </list>
    <h1>{{ mode }}</h1> <button @click="toggleMode">toggleMode</button>
    <!-- <h5>Clicked data info: {{ msg }}</h5> -->
    
    
  </div>
</template>

<script>
/* eslint-disable */
import List from './List'
export default {
  name: 'HelloWorld',
  data () {
    return {
      mode:'happy',
      msg: 'Empty',
      searchKey:undefined
    }
  },
  components: {
    'list': List
  },
  filters:{
    formater:function(value){
      return ''
    }
  },
  methods: {
    toggleMode(){
      this.mode=this.mode=='happy'?'sad':this.mode==='sad'?'angry':this.mode==='angry'?'happy':null;
      this.$emit('modeChange',this.mode);
    },
    showYourName(rank,category){
      this.msg=`Rank : ${rank+1}  Category : ${category}`;
    },
    handleSearch(e){
      // alert(this.searchKey);
      this.$emit("filterKey");
      // this.searchKey=
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

* {
  box-sizing: border-box;
}

body {
  background: #333;
}


input {
  display: block;
  width: 100%;
  padding-top: 20px;
  border: none;
  border-radius: 0;
  color: white;
  background: #333;
  font-size: 24px;
  transition: .3s ease;
}
input:focus {
  outline: none;
}
input:focus ~ label {
  top: 0;
  font: 700 22px Roboto;
  color: #2196f3;
}
input:focus ~ .bar:before {
  transform: translateX(0);
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 10px #333 inset;
  -webkit-text-fill-color: white !important;
}



::selection {
  background: rgba(33, 150, 243, 0.3);
}


</style>
