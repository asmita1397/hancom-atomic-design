<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <Header />
      </div>
      <div class="mainbody">
        <Split class="outersplit">
          
          <SplitArea :size="20" class="splitleft">
            <Split :direction="vertical">
              <SplitArea class="innersplit">
                <div v-if="noDisplayTree===false">
                  <div class="sideheader">
                    <span class="sideheader1">
                      <span >Project - VBAProject</span>
                      <div id="mdiv" v-on:click="noDisplayTreeBrowser">
                        <div class="mdiv">
                          <div class="md"></div>
                        </div>
                      </div>
                    </span>
                  </div>

                  <div>
                    <img src="@/FormDesigner/assets/projectExplorer-icons/view-code.svg" class="icons">
                    <img src="@/FormDesigner/assets/projectExplorer-icons/view-object.svg" class="icons">
                    <img src="@/FormDesigner/assets/projectExplorer-icons/close-folder.svg" class="icons"/>
                    <!-- <i class="material-icons">&#xe2c8;</i> -->
                  </div>
                  <hr />
                  <div>
                    
                    <TreeBrowser style="cursor:pointer;" :node="root" />
                  </div>
                </div>
              </SplitArea>

              <SplitArea class="innersplit">
                <PropertiesList />
              </SplitArea>
            </Split>
          </SplitArea>

          <SplitArea :size="70" style="background:gray;oveflow:hidden;">
            <div style="position:relative;">
              <Userform :Height="userFormData.properties.Height" :propControlData="userFormData" />
            </div>
          </SplitArea>

          <SplitArea :size="10">
            <ToolBox />
          </SplitArea>
        </Split>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToolBox from "@/FormDesigner/components/organisms/FDToolBox/index.vue";
import Userform from "@/FormDesigner/components/organisms/FDUserform/index.vue";
import { treeData } from "@/FormDesigner/models/TreeData";
import PropertiesList from '@/FormDesigner/components/organisms/FDPropertyList/index.vue'
import TreeBrowser from "@/FormDesigner/components/organisms/FDTreeBrowser/index.vue";
import Header from "@/FormDesigner/components/organisms/FDHeader/index.vue";
@Component({
  components: {
      ToolBox,
      Userform,
      TreeBrowser,
      PropertiesList,
      Header
  }
})
export default class FDPage extends Vue {

  vertical = "vertical";
  display = "";
  noDisplayTree = false;
  root = treeData
  noDisplayTreeBrowser() {
    this.noDisplayTree = true;
  }
  mounted() {
   /*  console.log("root", this.root); */

   /*  EventBus.$on("userFormButtonClicked", (userForm: string) => {
      this.display = userForm;
      console.log( this.display)
    }); */
  }
    get userFormData () {
    return this.$store.state.fd.controlData
  }
}
</script>


<style scoped>
#app {
  font-family: Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}

.splitleft {
  width: auto;
  z-index: 1;
  top: 5;
  left: 5;
  background-color: white;
  overflow-x: hidden;
  border: 2px solid grey;
}
.outersplit {
  height: 83%;
  position: fixed;
}
.innersplit {
  border: 1px solid grey;
}
.sideheader1 {
  display: grid;
  grid-template-columns: 1fr 25px;
  /* width: 250px; */
  background-color: rgb(142, 191, 231);
  margin-bottom: 8px;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
}
.sideheader {
  height: 22px;
  text-align: left;
  background-color: rgb(142, 191, 231);
}

.right {
  right: 0;
  background-color: #80888e;
  height: 100%;
  width: 75%;
  position: absolute;
  z-index: 1;
  overflow-x: hidden;
  /* padding-top: 20px; */
}
.container {
  width: 100%;
  height:600px;
  max-height: 500px;
}
.header {
  /* height: 40px; */
  height: 10%;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
}
#mdiv {
  float: right;
  margin: auto;
  position: relative;
  top: 0px;
  left:0px;
  width: 20px;
  height: 16px;
  background-color: lightgray;
  border: outset;
}

.mdiv {
  height: 17px;
  width: 2px;
  margin-left: 60px;
  background-color: black;
  transform: rotate(45deg);
  z-index: 1;
  position: absolute;
  right: 8px;
}

.md {
  height: 17px;
  width: 2px;
  background-color: black;
  transform: rotate(90deg);
  z-index: 2;
  position: absolute;
  right: 0px;
}
.commandbutton-element {
  border: 1px solid gray;
  border-radius: 3px;
  background-color: white;
  min-width: 50px;
  max-width: 112px;
  width: fit-content;
  height: fit-content;
  min-height: 20px;
  padding: 0px 5px 0px 5px;
  overflow: hidden;
}
.dialog-action-button {
  background-color: #f2eded;
  width: 79px;
  height: 35px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid gray;
  border-radius: 3px;
  overflow: hidden;
}
:focus {
  outline: none;
}
.mainbody{
  margin-top:37px;
}
</style>

