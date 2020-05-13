<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 py-5">
          <h1>Done Todos</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-sm-10 col-lg-6">
          <ul class="list-group">
            <donetodo
              v-for="(todo, index) in todos"
              :key="index"
              :description="todo.description"
              :completed="todo.completed"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Donetodo from "../components/Donetodo.vue";
import axios from "axios";

export default {
  name: "DoneTodos",
  components: {
    Donetodo
  },
  data() {
    return {
      todos: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/TodoList/")
      .then(
        res => (this.todos = res.data.filter(todo => todo.completed == true))
      )
      .catch(err => console.log(err));
  }
};
</script>

<style scoped></style>
