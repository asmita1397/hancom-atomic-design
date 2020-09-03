<template>
  <div>
    <div :class="'handle handle-tl'" @mousedown.stop="handleMouseDown($event,'nw',controlData)"></div>
    <div :class="'handle handle-tr'" @mousedown.stop="handleMouseDown($event,'ne',controlData)"></div>
    <div :class="'handle handle-tm'" @mousedown.stop="handleMouseDown($event,'n-resize',controlData)"></div>
    <div :class="'handle handle-ml'" @mousedown.stop="handleMouseDown($event,'w-resize',controlData)"></div>
    <div :class="'handle handle-mr'" @mousedown.stop="handleMouseDown($event,'e-resize',controlData)"></div>
    <div :class="'handle handle-bl'" @mousedown.stop="handleMouseDown($event,'sw',controlData)"></div>
    <div :class="'handle handle-br'" @mousedown.stop="handleMouseDown($event,'se',controlData)"></div>
    <div :class="'handle handle-bm'" @mousedown.stop="handleMouseDown($event,'s-resize',controlData)"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EventBus } from "@/FormDesigner/event-bus";
import { IupdateControl } from "@/storeModules/fd/actions";
import { State, Action } from "vuex-class";
import UserForm from "./FDUserform/index.vue";

@Component({
  components: {}
})
export default class ResizeDiv extends Vue {
  positions: any = {
    clientX: "",
    clientY: "",
    movementX: 0,
    movementY: 0
  };
  resizeDiv = "";
  @Prop() refOfResizeDiv!: any;
  @Prop() controlData!: any;

  @Action("fd/updateControl") updateControl!: (payload: IupdateControl) => void;
  activeControlID: any = "";
  propControlData: any = {};
  /* 
  @Prop() index!: any;
  
  @Prop() activatedControl: any;
  activeControl: any={} 
  refName = ""; */

  /* selectedControls: any = [];
  divStyleArray: any=[]
  activatedGroup: any=[] */

  updateControlAction(propertyName: string, propertyValue: number) {
    this.updateControl({
      target: this,
      proprtyName: propertyName,
      value: propertyValue
    });
  }

  handleMouseDown(event: any, handler: string, controlID: any) {
    this.resizeDiv = handler;
    this.activeControlID = controlID;
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;
    document.onmousemove = this.elementDrag;
    document.onmouseup = this.closeDragElement;
  }
  elementDrag(event: any): void {
    event.preventDefault();
    this.positions.movementX = this.positions.clientX - event.clientX;
    this.positions.movementY = this.positions.clientY - event.clientY;
    this.positions.clientX = event.clientX;
    this.positions.clientY = event.clientY;

    for (let i = 0; i < this.ctrlData.length; i++) {
      if (this.ctrlData[i].properties.ID === this.activeControlID) {
        this.propControlData = this.ctrlData[i];
        const controlProperty = this.ctrlData[i].properties;
        /*   console.log(this.ctrlData[i].properties.ID) */
        const dragResizeRef = this.refOfResizeDiv[controlProperty.ID][0];
        const dragResizeControl = controlProperty;

        let top = -1;
        let left = -1;
        let incWidth = -1;
        let incHeight = -1;
        let decWidth = -1;
        let decHeight = -1;
        top =
          dragResizeControl.Height > 0
            ? dragResizeRef.offsetTop - this.positions.movementY
            : dragResizeControl.Top;
        left =
          dragResizeControl.Width > 0
            ? dragResizeRef.offsetLeft - this.positions.movementX
            : dragResizeControl.Left;
        incWidth = dragResizeControl.Width + this.positions.movementX;
        incHeight = dragResizeControl.Height + this.positions.movementY;
        decWidth = dragResizeControl.Width - this.positions.movementX;
        decHeight = dragResizeControl.Height - this.positions.movementY;
        if (this.resizeDiv === "drag") {
          this.updateControlAction("Top", top);
          this.updateControlAction("Left", left);
        } else if (this.resizeDiv === "nw") {
          this.updateControlAction("Top", top);
          this.updateControlAction("Left", left);
          this.updateControlAction("Width", incWidth);
          this.updateControlAction("Height", incHeight);
        } else if (this.resizeDiv === "ne") {
          this.updateControlAction("Top", top);
          this.updateControlAction("Width", decWidth);
          this.updateControlAction("Height", incHeight);
        } else if (this.resizeDiv === "se") {
          this.updateControlAction("Width", decWidth);
          this.updateControlAction("Height", decHeight);
        } else if (this.resizeDiv === "sw") {
          this.updateControlAction("Left", left);
          this.updateControlAction("Width", incWidth);
          this.updateControlAction("Height", decHeight);
        } else if (this.resizeDiv === "n-resize") {
          this.updateControlAction("Top", top);
          this.updateControlAction("Height", incHeight);
        } else if (this.resizeDiv === "s-resize") {
          this.updateControlAction("Height", decHeight);
        } else if (this.resizeDiv === "w-resize") {
          this.updateControlAction("Left", left);
          this.updateControlAction("Width", incWidth);
        } else if (this.resizeDiv === "e-resize") {
          this.updateControlAction("Width", decWidth);
        }
      }
    }
  }
  closeDragElement(): void {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  mounted() {
    EventBus.$on("drag", (event: any, controlID: any) => {
      /*   console.log("----",controlID); */
      this.activeControlID = controlID;
      this.handleMouseDown(event, "drag",controlID);
    });
  }
  get ctrlData() {
    return this.$store.state.fd.controlData.controls;
  }
}
</script>

<style  scoped>
.handle {
  box-sizing: border-box;
  position: absolute;
  width: 6px;
  height: 6px;

  background: white;
  border: 1px solid #333;
}
.handleActivate {
  box-sizing: border-box;
  position: absolute;
  width: 6px;
  height: 6px;

  background: black;
  border: 1px solid white;
}
.handle-tl {
  top: -5px;
  left: -5px;
  cursor: nw-resize;
}
.handle-tm {
  top: -5px;
  left: 50%;
  margin-left: -5px;
  cursor: n-resize;
}
.handle-tr {
  top: -5px;
  right: -5px;
  cursor: ne-resize;
}
.handle-ml {
  top: 50%;
  margin-top: -5px;
  left: -5px;
  cursor: w-resize;
}
.handle-mr {
  top: 50%;
  margin-top: -5px;
  right: -5px;
  cursor: e-resize;
}
.handle-bl {
  bottom: -5px;
  left: -5px;
  cursor: sw-resize;
}
.handle-bm {
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  cursor: s-resize;
}
.handle-br {
  bottom: -5px;
  right: -5px;
  cursor: se-resize;
}
</style>