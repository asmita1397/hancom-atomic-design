<template>
  <div id="app">
    <UsePage />
    
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import UsePage from "@/FormDesigner/components/pages/FDPage/index.vue"
@Component({
  components: {
    UsePage
  }
})
export default class FdApp extends Vue {
 /*  get ctrlData() {
    return this.$store.state.fd.controlData;
  } */
}
</script>

<style lang="scss">
</style>
