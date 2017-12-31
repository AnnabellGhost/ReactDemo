<script>
/* eslint-disable */
var filters = {
    all: function (todos) {
        return todos;
    },
    active: function (todos) {
        return todos.filter(function (todo) {
            return !todo.completed;
        });
    },
    completed: function (todos) {
        return todos.filter(function (todo) {
            return todo.completed;
        });
    }
};
var store={
    fetch:function(){
        return JSON.parse(localStorage.getItem("TODOS")||'[]');
    },
    save:function(list){
        localStorage.setItem("TODOS",JSON.stringify(list))
    }
}

export default {
    name: 'Todos',
    data () {
        return{
            todos:[
                ...store.fetch()
            ],
            newTodo:'',
            editedTodo:null,
            visibility:'all'
        }
    },
    watch:{
        todos:{
            deep:true,
            handler:function(newList){
                console.log(newList);
                store.save(newList);
            }
        }
    },
    computed:{
        filteredTodos:function(){
            return filters[this.visibility](this.todos);
            // return this.todos;
        },
        remaining:function(){
            return filters.active(this.todos).length;
        },
        allDone:{
            get:function(){
                return this.remaining===0;
            },
            set:function(value){
                this.todos.forEach(todo=>todo.completed=value);
            }
        }
    },
    methods:{
        pluralize: function (word, count) {
            return word + (count === 1 ? '' : 's');
        },

        addTodo: function () {
            var value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.todos.push({ id: this.todos.length>0?this.todos[this.todos.length-1].id + 1:0, content: value, completed: false });
            /* ID ,take the last todos's id plus one , if empty ,started from zero */
            this.newTodo = '';
        },

        removeTodo: function (todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },

        editTodo: function (todo) {
            this.beforeEditCache = todo.content;
            this.editedTodo = todo;/* reference assigned */
        },

        doneEdit: function (todo) {
            if (!this.editedTodo) {
                return;
            }
            this.editedTodo = null;
            todo.content = todo.content.trim();
            if (!todo.content) {
                this.removeTodo(todo);
            }
        },

        cancelEdit: function (todo) {
            this.editedTodo = null;
            todo.content = this.beforeEditCache;
        },

        clearDone: function () {
            this.todos = filters.active(this.todos);
        },
        filterStatus: function(status){
            this.visibility=status;
        }

        
    }
}
</script>
<template>
  <div>
      <header>
          <h5>Todos</h5>
          <input placeholder="Add one" v-model="newTodo" @keyup.enter="addTodo" />
      </header>
      <section v-show="todos.length">
          <ul class="todolist">
              <li v-for="todo in filteredTodos" v-bind:key="todo.id" :class="{completed:todo.completed,editng:todo==editedTodo}">
                  <div>
                        <input name="todoStatus" type="checkbox" v-model="todo.completed" />
                        <input v-if="editedTodo==todo" type="text" v-model="todo.content" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
                        <span v-if="!(editedTodo==todo)" v-text="todo.content" @dblclick="editTodo(todo)"></span>
                        
                      <button @click="removeTodo(todo)">Delete</button>
                  </div>
              </li>
          </ul>
      </section>
      <footer v-show="todos.length">
          <span>{{remaining}} {{pluralize('item', remaining)}} left</span>
          <ul class="statusButton">
              <li @click="filterStatus('all')">All</li>
              <li @click="filterStatus('completed')">Completed</li>
              <li @click="visibility='active'">TobeDone</li>
          </ul>
          <button @click="clearDone" v-show="todos.length>remaining">ClearDone</button>
      </footer>

  </div>
</template>
<style>
ul,li{
    list-style-type:none;
}
.todolist{
    list-style-type:none;
    display: flex;
    flex-direction: column;

}
.statusButton{
    list-style-type:none;
    display: flex;
    align-items: center;
}
.statusButton li{
    margin:0 10px;
}
</style>


