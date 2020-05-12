<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>{{ listName }}</h1>
      </div>
    </div>
    <div class="row mb-3">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";
import axios from "axios"


export default {
  props: {
    listName: String
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      axios.post("http://localhost:3000/TodoList",{ description: newTodo, completed: false })
    .then(res=>this.todos.push({ id:res.data.id,description: res.data.description, completed: false }))
    .catch(err => console.log(err));
      
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
    axios.delete('http://localhost:3000/TodoList/'+ deletedTodo.id)
    .then(this.todos = this.todos.filter(todo => todo !== deletedTodo))
    .catch(err => console.log(err));
      
    },
    editTodo(todo, newTodoDescription) {
      console.log(todo.id)
    axios.put('http://localhost:3000/TodoList/'+ todo.id,{ description: newTodoDescription, completed: todo.completed })
    .then(todo.description = newTodoDescription)
    .catch(err => console.log(err));
      
    },
    
  },
  created(){
      axios.get('http://localhost:3000/TodoList/')
    .then(res => this.todos = res.data)
    .catch(err => console.log(err));
    },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>
