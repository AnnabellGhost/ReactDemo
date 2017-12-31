<template>
    <div>
        <ou-text-field v-model="searchKey" type='underlined' label='Search' />
        <ou-table :data='list'>
            <ou-table-column prop='title'>Title</ou-table-column>
            <ou-table-column prop='author'>author</ou-table-column>
            <ou-table-column prop='category'>category</ou-table-column>
        </ou-table>
        <ou-button type='hero' icon='Add' click="addItem">Add customer Info</ou-button>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name:'RefinedUIDemo',
  data(){
      return {
          list:[
            {title: 'Anna',author: '45',category: 'Fiction'},
            {title: 'Pamela',author:'36',category: 'Non-fiction'},
            {title: 'Clodia',author: '25',category: 'Science'},
        ]
  }},
  methods:{
      addItem(){
        
      }
  }
}
</script>
