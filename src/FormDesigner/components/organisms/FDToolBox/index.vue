<template>
  <div>
    <div class="outer-toolbox-div">
      <div class="toolbox-header">
        <div>
          <span style="margin-left:5px">ToolBox</span>
        </div>
        <div>
          <span class="closeButton">
            <img class="close" src="https://img.icons8.com/fluent/48/000000/close-window.png" />
          </span>
        </div>
      </div>
      <div class="toolbox-body">
        <div>
          <Button class="toolbox-tab">Controls</Button>
        </div>
        <!-- <div class="toolbox-icon-border"> -->
          <div class="toolbox-icons">
            <div class="container">
              <img
                src='../../../assets/toolbox-icons1/select-object.svg'
                alt="SelectIcon"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
             <div class="container" @click="selectedControl('Label')">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/label.svg"
                alt="Label"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/text-box.svg"
                alt="TextBox"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/combo-box.svg"
                alt="ComboBox"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/list-box.svg"
                alt="ListBox"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/check-button.svg"
                alt="CheckBox"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/option-button.svg"
                alt="OptionButton"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/toggle-button.svg"
                alt="ToggleButton"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/frame.svg"
                alt="Frame"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container"  @click="selectedControl('CommandButton')">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/command-button.svg"
                alt="CommandButton"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/multi-tab.svg"
                alt="TabStrip"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/multi-page.svg"
                alt="MultiPage"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/scroll-bar.svg"
                alt="ScrollBar"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/spin-button.svg"
                alt="SpinButton"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
            <div class="container">
              <img
                src="@/FormDesigner/assets/toolbox-icons1/image.svg"
                alt="Picture"
                class="image toolbox-icon"
              />
              <div class="overlay">
                <div class="text"></div>
              </div>
            </div>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EventBus } from '../../../event-bus';
// import {  } from "../../../assets/toolbox-icons1/"
@Component({
  components: {
  }
})
export default class ToolBox extends Vue {
  selectedControl(controlName: string)
  {
        console.log(controlName)
        EventBus.$emit('selectedControl',controlName)
  }
}
</script>

<style scoped>
.outer-toolbox-div {
  border: 0.1px solid gray;
  background-color: rgb(238, 238, 238);
  min-height: 26px;
  box-shadow: 2px 2px lightgrey;
  height: 510px;
  min-width: 26px;
  width: 100%;
  position: relative;
  left: 0px;
  top: 0px;
}
.toolbox-header {
  display: grid;
  grid-template-columns: 90% 10%;
  height: 26px;
  width: 100%;
  background-color: white;
  padding-top: 3px;
}
.toolbox-body {
  position: absolute;
  background-color: rgb(238, 238, 238);
  width: 100%;
  /* height: fit-content; */
  bottom: 34px;
    top: 29px;
    
}
.toolbox-tab {
  padding-bottom: 4px;
  border-color: gray;
  box-shadow: 1px 0px grey;
  border-bottom-width: 0px;
  border-top-color: white;
  border-left-color: white;
  /* width: 1px; */
  border-top-width: 0.3px;
  border-left-width: 0.3px;
  border-right-width: 0.1px;
  margin-left: 5px;
  margin-top: 6px;
}
.toolbox-icon-border {
  margin: 4px;
  margin-top: 0px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  box-shadow: 1px 1px grey;
  height: auto;
}
.toolbox-icons {
  position: relative;
  display: grid;
  overflow: auto;
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(24px, auto));
  grid-auto-rows:minmax(min-content,max-content);
  /* grid-auto-rows: minmax(5vh,5vh); */
  margin: 4px;
  margin-top: 0px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  box-shadow: 1px 1px grey;
  /* height: 70px; */
  /* width: 100%;*/
  height: 100%;
}
.toolbox-icon {
  width: 24px;
  height: 24px;
}
/* img.toolbox-icon:hover {
  color: rgb(0, 153, 255);
  
} */
.container {
  position: relative;
  width: 18px;
  margin: 7px;
}

.image {
  display: block;
  width: 17px;
  height: 17px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 18px;
  width: 18px;
  opacity: 0;
  transition: 0.5s ease;
 /*  background-color: rgb(8, 130, 211); */
}
/* .overlay:focus {
  background-color: rgb(8, 130, 211);
} */

.container:hover .overlay {
  opacity: 0.5;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.close {
  height: 26px;
}
.closeButton {
  position: relative;
  right: 0px;
  float: right;
  cursor: pointer;
}
</style>