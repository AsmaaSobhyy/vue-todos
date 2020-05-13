<template>
  <li class="d-flex align-items-center list-group-item">
    <button class="btn border-0 flex-grow-1 text-left shadow-none">
      <span>{{ description }}</span>
    </button>
  </li>
</template>

<script>
export default {
  props: {
    description: String,
    completed: Boolean
  }
};
</script>
