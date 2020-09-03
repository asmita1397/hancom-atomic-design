<template>
  
    <button class="commandbutton"
    :style="{
    left:`${Left}px`,
    width:`${Width}px`,
    height:`${Height}px`,
    top:`${Top}px`,
    backgroundColor:BackColor,
    textAlign: TextAlign===0? 'left': TextAlign===1? 'center': 'right',
    background: BackStyle? 'transparent':'',
    color:ForeColor,
    cursor:MousePointer===7?'default':'',
    fontSize:`${FontSize}px`,
    fontStyle:FontItalic?'italic':'',
    textDecoration:FontUnderline?'underline':'',
    fontWeight:FontBold? 'bold':''
     }"
     :tabindex="TabIndex"
     :title="ControlTipText"
    ><span>
     
       <slot></slot>
    </span></button>
 
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
/* import { EventBus } from "../../components/event-bus"; */

@Component({
  components: {}
})
export default class UseCommandButton extends Vue {
  @Prop({ default: "" }) private Accelerator!: string;
  @Prop({ default: false }) private AutoSize!: Boolean;
  @Prop({ default: " #ffffff" }) private BackColor!: String;
  @Prop({ default: 1 }) private BackStyle!: Number;
  @Prop({ default: true }) private Cancel!: Boolean;
  @Prop({ default: "CommandButton1" }) private Caption!: String;
  @Prop({ default: "helptext" }) private ControlTipText!: String;
  @Prop({ default: false }) private Default!: Boolean;
  @Prop({ default: true }) private Enabled!: Boolean;
  @Prop({ default: "Arial" }) private FontName!: String;
  @Prop({ default: 10 }) private FontSize!: Number;
  @Prop({ default: false }) private FontBold!: Boolean;
  @Prop({ default: true }) private FontItalic!: Boolean;
  @Prop({ default: true }) private FontUnderline!: Boolean;
  @Prop({ default: true }) private FontStrikethrough!: Boolean;
  @Prop({ default: "Arial Narrow Italic" }) private FontStyle!: String;
  @Prop({ default: "#000000" }) private ForeColor!: String;
  @Prop({ default: 18 }) private Height!: Number;
  @Prop({ default: 0 }) private HelpContextID!: Number;
  @Prop({ default: 0 }) private Left!: Number;
  @Prop({ default: true }) private Locked!: Boolean;
  @Prop({ default: "" }) private MouseIcon!: String;
  @Prop({ default: 0 }) private MousePointer!: Number;
  @Prop({ default: "Label1" }) private Name!: String;
  @Prop({ default: "none", required: true }) public readonly ID!: String;
  @Prop({ default: "" }) private Picture!: String;
  @Prop({ default: 7 }) private PicturePosition!: Number;
  @Prop({ default: 0 }) private TabIndex!: Number;
  @Prop({ default: true }) private TabStop!: Boolean;
  @Prop({ default: "" }) private Tag!: String;
  @Prop({ default: true }) private TakeFocusOnClick!: Boolean;
  @Prop({ default: 0 }) private Top!: Number;
  @Prop({ default: true }) private Visible!: Boolean;
  @Prop({ default: 72 }) private Width!: Number;
  @Prop({ default: true }) private WordWrap!: Boolean;
  
}
</script>

<style scoped>
:focus {
  outline: none;
}

.commandbutton {
  border: none;
  box-shadow: 2px 2px gray;
  overflow: hidden;
}
</style>