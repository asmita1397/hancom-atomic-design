<template>
  <div>
    <div class="outer-userform-window">
      <div class="outer-userform-header">
        <div>
          <!-- <img src="@/assets/userform/OuterWindow.png" style="width:12px;height:12px" /> -->
        </div>
        <div>
          <span style="margin-left: 5px;">Book1 - UserForm1 (UserForm)</span>
        </div>
        <div>
          <div class="outer-window-button">
            <div class="ui-titlecontrols">
              <button class="ui-btn minimize">
                <svg x="0px" y="0px" viewBox="0 0 10.2 1">
                  <rect x="0" y="50%" width="10.2" height="1" />
                </svg>
              </button>
              <button class="ui-btn maximize">
                <svg viewBox="0 0 10 10">
                  <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" />
                </svg>
              </button>
              <button class="ui-btn close">
                <svg viewBox="0 0 10 10">
                  <polygon
                    points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="outer-userform-body">
        <div
          :class="[innerWindowFocused?'inner-window-border':null]"
          :style="{
           width:`${ctrlData.properties.Width+10}px`,
           height:`${ctrlData.properties.Height+10}px`,
           }"
        >
          <div v-if="innerWindowFocused" class="handle handle-tl"></div>
          <div v-if="innerWindowFocused" class="handle handle-tr"></div>
          <div v-if="innerWindowFocused" class="handle handle-tm"></div>
          <div v-if="innerWindowFocused" class="handle handle-ml"></div>
          <div v-if="innerWindowFocused" class="handle handle-mr"></div>
          <div v-if="innerWindowFocused" class="handle handle-bl"></div>
          <div v-if="innerWindowFocused" class="handle handle-br"></div>
          <div v-if="innerWindowFocused" class="handle handle-bm"></div>
          <div
            class="inner-userform-window"
            :style="{
                 margin:innerWindowFocused?'': '5px', 
                 left:`${ctrlData.properties.Left}px`,
                 width:`${ctrlData.properties.Width}px`,
                 height:`${Height}px`,
                 top:`${ctrlData.properties.Top}px`
                  }"
          >
            <div class="inner-userform-header">
              <div>
                <span>{{ctrlData.properties.Caption}}</span>
              </div>
              <div>
                <button class="ui-btn close closeButton">
                  <svg viewBox="0 0 10 10">
                    <polygon
                      points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              class="inner-window-content"
              :style="{zoom:`${ctrlData.properties.Zoom}%`,border:ctrlData.properties.BorderStyle?'1px solid black':'none',
              fontSize:`${ctrlData.properties.Font.FontSize}px`}"
              tabindex="0"
              @click.self="innerWindowFocus(true)"
              @blur="innerWindowFocus(false)"
            >
              <div v-for="(control,controlKey) in ctrlData.controls" :key="controlKey">
                <div
                  class="mainDiv"
                  :style="{
                    width:`${control.properties.Width+4}px`,
                  height: `${control.properties.Height+2}px`, 
                   left:`${control.properties.Left}px`,
                  top: `${control.properties.Top}px`
                  }"
                  @mousedown.stop="handleDrag($event,control.properties.ID)"
                  :ref="control.properties.ID"
                >
                  <ResizeHandlers :refOfResizeDiv="$refs" :controlData="control.properties.ID"  />
                <UseLabel
                    v-if="control.extraDatas.Type==='Label'"
                    :Accelerator="control.properties.Accelerator"
                    :AutoSize="control.properties.AutoSize"
                    :BackColor="control.properties.BackColor"
                    :BackStyle="control.properties.BackStyle"
                    :BorderColor="control.properties.BorderColor"
                    :BorderStyle="control.properties.BorderStyle"
                    :Caption=" control.properties.Caption"
                    :ControlTipText="control.properties.ControlTipText"
                    :Enable="control.properties.Enable"
                    :FontName="control.properties.Font.FontName"
                    :FontSize="control.properties.Font.FontSize"
                    :FontBold="control.properties.Font.FontBold"
                    :FontItalic="control.properties.Font.FontItalic"
                    :FontUnderline="control.properties.Font.FontUnderline"
                    :FontStrikethrough="control.properties.Font.FontStrikethrough"
                    :FontStyle="control.properties.Font.FontStyle"
                    :ForeColor="control.properties.ForeColor"
                    :Height="control.properties.Height"
                    :HelpContextID="control.properties.HelpContextID"
                    :Left="control.properties.Left+1"
                    :MouseIcon="control.properties.MouseIcon"
                    :MousePointer="control.properties.MousePointer"
                    :Name="control.properties.Name"
                    :ID="control.properties.ID"
                    :Picture="control.properties.Picture"
                    :PicturePosition="control.properties.PicturePosition"
                    :SpecilalEffect="control.properties.SpecilalEffect"
                    :TabIndex="control.properties.TabIndex"
                    :TabStop="control.properties.TabStop"
                    :Tag="control.properties.Tag"
                    :TextAlign="control.properties.TextAlign"
                    :Top="control.properties.Top"
                    :Visible="control.properties.Visible"
                    :Width="control.properties.Width"
                    :WordWrap="control.properties.WordWrap"
                    :key="control.properties.ID"
                  >{{ control.properties.Caption}}</UseLabel>


                    <UseCommandButton
                    v-if="control.extraDatas.Type==='CommandButton'"
                    :Accelerator="control.properties.Accelerator"
                    :AutoSize="control.properties.AutoSize"
                    :BackColor="control.properties.BackColor"
                    :BackStyle="control.properties.BackStyle"
                    :Cancel="control.properties.Cancel"
                    :Caption=" control.properties.Caption"
                    :ControlTipText="control.properties.ControlTipText"
                    :Default="control.properties.Default"
                    :Enabled="control.properties.Enabled"
                    :FontName="control.properties.Font.FontName"
                    :FontSize="control.properties.Font.FontSize"
                    :FontBold="control.properties.Font.FontBold"
                    :FontItalic="control.properties.Font.FontItalic"
                    :FontUnderline="control.properties.Font.FontUnderline"
                    :FontStrikethrough="control.properties.Font.FontStrikethrough"
                    :FontStyle="control.properties.Font.FontStyle"
                    :ForeColor="control.properties.ForeColor"
                    :Height="control.properties.Height"
                    :HelpContextID="control.properties.HelpContextID"
                    :Left="control.properties.Left"
                    :Locked="control.properties.Locked"
                    :MouseIcon="control.properties.MouseIcon"
                    :MousePointer="control.properties.MousePointer"
                    :Name="control.properties.Name"
                    :ID="control.properties.ID"
                    :Picture="control.properties.Picture"
                    :PicturePosition="control.properties.PicturePosition"
                    :TabIndex="control.properties.TabIndex"
                    :TabStop="control.properties.TabStop"
                    :Tag="control.properties.Tag"
                    :TakeFocusOnClick="control.properties.TakeFocusOnClick"
                    :Top="control.properties.Top"
                    :Visible="control.properties.Visible"
                    :Width="control.properties.Width"
                    :WordWrap="control.properties.WordWrap"
                    :key="control.properties.ID"
                  >{{ control.properties.Caption}}</UseCommandButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import UseLabel from "@/FormDesigner/components/atoms/FDLabel/index.vue";
import ResizeHandlers from "@/FormDesigner/components/organisms/FDResizeHandler/index.vue";
import UseCommandButton from "@/FormDesigner/components/atoms/FDCommandButton/index.vue";

import { EventBus } from "@/FormDesigner/event-bus";
@Component({
  components: {
    UseLabel,
    ResizeHandlers,
    UseCommandButton
  }
})
export default class UserForm extends Vue {
  @Prop({ default: 18 }) private Height!: Number;
  innerWindowFocused: boolean = false;
  innerWindowFocus(value: boolean) {
    this.innerWindowFocused = value;
  }
  handleDrag(event: any, controlID: any) {
    EventBus.$emit("drag", event, controlID);
  }
  get ctrlData() {
    return this.$store.state.fd.controlData;
  }
}
</script>

<style scoped>
.outer-userform-window {
 outline: 1px solid lightslategray;
  outline-style: auto;
  position: absolute;
  border: 5px solid rgb(180, 211, 252);
  width: 98.7%;
  height:535px;
  border-radius: 5px;
  font-size: 14px;
  font-family: Tahoma;
  font-weight: 200;
  position:absolute;
  background-color:white;
}
.outer-userform-header {
  display: grid;
  grid-template-columns: 12px 9fr 1fr;
  width: 100%;
  height: 30px;
  padding-left: 5px;
  background-color: rgb(180, 211, 252);
}
.outer-userform-body {
  z-index: 99;
  overflow: auto;
  height: calc(100% - 30px);
}
.inner-userform-window {
  outline: 1px solid lightslategray;
  outline-style: auto;
  position: relative;
  border: 5px solid rgb(180, 211, 252);
  width: 600px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
}
.inner-window-border {
  width: 610px;
  height: 310px;
  --border-width: 8;
  --stripe-distance: 1px;
  position: absolute;
  border: calc(var(--border-width) * 1px) solid transparent;
  border-image: repeating-linear-gradient(
      -18deg,
      black,
      transparent 0.1px,
      transparent var(--stripe-distance),
      black calc(var(--stripe-distance) + 0.9px)
    )
    var(--border-width);
}
.inner-userform-header {
  display: grid;
  grid-template-columns: 9fr 1fr;
  width: 100%;
  height: 30px;
  background-color: rgb(180, 211, 252);
}
.inner-window-content {
  width: 99%;
  height: calc(100% - 32px);
  position: absolute;
  left: 0px;
  background-color: #e3e3e357;
  background-size: 9px 10px;
  background-image: radial-gradient(
    circle,
    rgb(0, 0, 0) 0.5px,
    rgba(0, 0, 0, 0) 0.2px
  );
}
.inner-window-content:focus {
  outline: none;
}

.ui-btn {
  margin: 2px;
  background: #7e7ea666;
  border: 1px solid #7e7ea666;
  height: 18px;
  width: 30px;
  border-radius: 2px;
}
.ui-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
.ui-btn.close {
  background: #c42a37;
}
.ui-btn svg path,
.ui-btn svg rect,
.ui-btn svg polygon {
  fill: white;
}
.ui-btn svg {
  width: 10px;
  height: 10px;
  stroke: white;
  stroke-width: 2px;
}
.closeButton {
  float: right;
}
.outer-window-button {
  padding-right: 10px;
}
.ui-titlecontrols {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.mainDiv {
  position: absolute;
  --border-width: 5;
  --stripe-distance: 2px;
  border: calc(var(--border-width) * 1px) solid transparent;
  border-image: repeating-linear-gradient(
      -110deg,
      black,
      transparent 1px,
      transparent var(--stripe-distance),
      black calc(var(--stripe-distance) + 0.2px)
    )
    var(--border-width);
}
.handle {
  box-sizing: border-box;
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border: 1px solid #333;
}
.handle-tl {
  top: -8px;
  left: -8px;
  cursor: nw-resize;
  background: black;
  border: 1px solid white;
  cursor: default;
}
.handle-tm {
  top: -9px;
  left: 50%;
  margin-left: -8px;
  cursor: n-resize;
  background: black;
  border: 1px solid white;
  cursor: default;
}
.handle-tr {
  top: -8px;
  right: -8px;
  cursor: ne-resize;
  background: black;
  border: 1px solid white;
  cursor: default;
}
.handle-ml {
  top: 50%;
  margin-top: -8px;
  left: -9px;
  background: black;
  border: 1px solid white;
  cursor: default;
}
.handle-mr {
  top: 50%;
  margin-top: -8px;
  right: -9px;
  cursor: e-resize;
}
.handle-bl {
  bottom: -8px;
  left: -8px;
  cursor: sw-resize;
  background: black;
  border: 1px solid white;
  cursor: default;
}
.handle-bm {
  bottom: -9px;
  left: 50%;
  margin-left: -8px;
  cursor: s-resize;
}
.handle-br {
  bottom: -8px;
  right: -8px;
  cursor: se-resize;
}
</style>