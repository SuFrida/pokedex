<!-- ProgressBar.vue -->
<template>
    <div class="progress">
      <div
        class="progress-bar"
        :class="{
          'bg-danger': percentage <= 30,
          'bg-warning': percentage > 30 && percentage <= 70,
          'bg-success': percentage > 70,
        }"
        :style="{ width: percentage + '%' }"
      >
        {{ value }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Number,
        required: true,
      },
    },
    computed: {
      percentage() {
        return Math.min(100, this.value); // Ensure the percentage does not exceed 100
      },
    },
  };
  </script>
  
  <style>
  .progress {
    height: 20px;
    margin-bottom: 10px;
  }
  
  .progress-bar {
    color: #fff;
    font-weight: bold;
    border-radius: 25px;
  }
  
  /* Customize progress bar colors based on your requirements */
  .bg-danger {
    background-color: red;
  }
  
  .bg-warning {
    background-color: yellow;
  }
  
  .bg-success {
    background-color: green;
  }
  </style>
  