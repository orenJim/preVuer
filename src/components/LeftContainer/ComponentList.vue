<template>
  <!-- renders Component List Items -->
  <div id="component-list">
    <component-list-item 
      v-for="(component, index) in getComponents" 
      :component="component" 
      :key="index" 
      :id="index"
    />
  </div>
</template>

<script>
  import ComponentListItem from './ComponentListItem.vue';

  export default {
    name: 'component-list',
    components: {
      ComponentListItem,
    },
    computed: {
      // returns array of component objects
      getComponents() {
        return this.$store.getters.getComponents;
      },
    }
  }
</script>

<style> 
  #component-list{
    margin-top: 20px;
    max-height: 580px;
    /*overflow: scroll;*/
  }
</style>
