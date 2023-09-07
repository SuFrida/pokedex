<!-- Tab.vue -->
<template>
    <div>
      <div class="tab-buttons">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          :class="{ active: activeTab === index }"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="tab-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tabs: ['about', 'stats', 'evolution'],
        activeTab: 0,
      };
    },
    methods: {
      selectTab(index) {
        this.activeTab = index;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  .tab-buttons {
    display: flex;
    margin-bottom: 20px;
  }
  .tab-buttons button.active {
    background-color: #007bff;
    color: #fff;
  }
  </style>
  