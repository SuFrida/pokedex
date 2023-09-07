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
        <p class="progress-value">{{ value }}</p>
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
    height: auto;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 25px;
  }
  
  .progress-bar {
    color: var(--white);
    font-size: 1.3em;
    font-weight: 600;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .progress-value {
    font-size: 1.5em;
    margin-bottom: 0;
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
  