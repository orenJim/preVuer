<template>
  <div class="container" id="left-container">
    <!-- 'Enter Component Name' text input field -->
    <div id="input-text-button-pair">
      <md-field id="component-input">
        <label>enter component name</label>
        <md-input
          @change="updateText"
          @keyup.enter="addComponent" 
          :value="currentText" 
        ></md-input>
        <span class="md-helper-text md-accent">Add a new component</span>
      </md-field>
      <!-- add component button -->
      <md-button 
        id="add-component" 
        class="md-icon-button md-raised md-accent" 
        @click="addComponent"
      >
        <md-icon>+</md-icon>
      </md-button>
    </div>
    <!-- ComponentList component -->
    <component-list class="component-list" />

    <div id="clear-workspace-container">
      <!-- ENABLED Clear All Components button -->
      <md-button 
        id="clear-workspace" 
        class="md-raised md-primary md-accent" 
        @click="clearAllComponents"
        v-if="componentsExist"
      >Clear All Components</md-button>
      <!-- DISABLED Clear All Components button -->
      <md-button 
        id="clear-workspace" 
        class="md-raised md-primary md-accent" 
        v-else disabled
      >Clear All Components</md-button>
    </div>
  </div>
</template>

<script>
  import ComponentList from '../components/LeftContainer/ComponentList.vue';
  import clearAllComponentsAlert from '../utils/clearAllComponentsAlert.util.js'

  export default {
    name: 'left-container',
    components: {
      ComponentList
    },
    methods: {
      // takes user input, generates a new component, renders component representation to canvas
      addComponent(e) {
        // dispatch to add the component to state first, then draw the box
        this.$store.dispatch('addComponent');
        this.$store.dispatch('drawBox');
      },
      updateText(e) {
        e.preventDefault();
        this.$store.dispatch('updateText', e.target.value);
        e.target.value = '';
      },
      // re-initializes application
      clearAllComponents() {
        const response = clearAllComponentsAlert();
        if (response === 0) {
          this.$store.dispatch('clearAllComponents');
        }
      }
    },
    computed: {
      // gets current text of input field from state
      currentText() {
        return this.$store.getters.getCurrentText;
      },
      // returns length of components array. used to conditionally Enable/Disable 'Clear All Components' button
      componentsExist() {
        return this.$store.getters.getComponents.length
      }
    },
  }
</script>

<style>
  #left-container {
    max-height: 840px;
  }
  #component-input {
    width: 75%;
  }
  #input-text-button-pair{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #clear-workspace-container{
    display: flex;
    justify-content: center;
  }
  #clear-workspace {
    margin-top: 80px;
  }
  #add-component {
    margin-left: 10px;
    padding-bottom: 8px;
    border: none;
  }
  .component-list {
    /*overflow: scroll;*/
  }
</style>