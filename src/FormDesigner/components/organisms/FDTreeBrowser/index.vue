<template >
  <div class="tree" style="min-height:'50px';marginLeft:'20px'">
    <div v-bind:key="userFormKey" v-for="(userForm,userFormKey) in usrFrmData">
      <span style="margin-left:20px" @click="dispalyUserform(userFormKey)">
        <img src="../../../assets/user-from.svg" />
        {{userForm.properties.Name}}
      </span>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IupdateUserform } from "@/storeModules/fd/actions";
import { State, Action } from "vuex-class";

@Component({})
export default class TreeBrowser extends Vue {
  @Action("fd/updateUserform") updateUserform!: (
    payload: IupdateUserform
  ) => void;
  propControlData = "";
  dispalyUserform(userFormKey: string) {
    
    console.log("--------------", userFormKey);

    for (const key in this.usrFrmData) {
      this.propControlData = this.usrFrmData[key];
      if (key === userFormKey) {
        this.updateUserform({
          target: this,
          proprtyName: "display",
          value: "block"
        });
      } else {
        this.propControlData = this.usrFrmData[key];
        this.updateUserform({
          target: this,
          proprtyName: "display",
          value: "none"
        });
      }
    }
    console.log(this.usrFrmData)
  }
  get usrFrmData() {
    return this.$store.state.fd.userformData;
  }
}
</script>



<style scoped>
.tree {
  width: 300px;
  position: initial;
  z-index: 1;
  top: 30;
  left: 0;
}
.node {
  text-align: left;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 7px;
  margin-block-end: 1px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  cursor: pointer;
}
</style>
