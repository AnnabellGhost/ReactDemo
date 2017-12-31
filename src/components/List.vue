<script>
/* eslint-disable */
export default {
  name:'List',
  props:['searchkey'],
  data(){
      return {
          list:[
            {title: 'To the river',author: 'Anna',category: 'Fiction'},
            {title: 'The great enigma',author:'Tomas Transtromer',category: 'Non-fiction'},
            {title: 'Less than one',author: 'Clodia',category: 'Science'},
            {title: 'That I konw how to love',author: 'А́нна Ахма́това',category: 'Poem'},
        ]
  }},
  computed:{
      filteredList:function(){
          return this.searchkey?this.list.filter((item)=>item.title.indexOf(this.searchkey)!==-1):this.list
      }
  },
  methods: {
    emitEvent(index,name){
        this.$emit('sendYourName',index, name);
    },
    
  }
}
</script>
<template>
    <div class='list'>
    <h4>List</h4>
    <span>searchkey :{{searchkey}}</span>
        <ul>
            <li v-for="(item,index) in filteredList" class='item' v-bind:key="index"  @click="emitEvent(index,item.category)">
                {{item.title}}
                <span v-text="item.author"></span>
                
            </li>
        </ul>
        <slot name="selectedInfo"></slot>
    </div>
</template>

<style scoped>
.list{
    /* list-style-type:square; */
    padding:10px;
    background-color: grey;
}
li{
    list-style-type:none;
    font-weight: 700;
    text-align: left;
    
}
.item{
    color: black;
}
</style>
