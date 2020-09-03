<template>
  <label class="label" 
  :style="{
    left:`${Left}px`,
    width:`${Width}px`,
    height:`${Height}px`,
    top:`${Top}px`,
    backgroundColor:BackColor,
    borderColor:BorderColor,
    textAlign: TextAlign===0? 'left': TextAlign===1? 'center': 'right',
    border: BorderStyle?'1px solid black':'none',
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
    </span></label>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue, Emit } from "vue-property-decorator";

@Component
export default class UseLabel extends Vue {
  @Prop({ default: "" }) private Accelerator!: string;
  @Prop({ default: false }) private AutoSize!: Boolean;
  @Prop({ default: " #ffffff" }) private BackColor!: String;
  @Prop({ default: 1 }) private BackStyle!: Number;
  @Prop({ default: "#ffffff" }) private BorderColor!: String;
  @Prop({ default: 1 }) private BorderStyle!: Number;
  @Prop({ default: "Label1" }) private Caption!: String;
  @Prop({ default: "helptext" }) private ControlTipText!: String;
  @Prop({ default: true }) private Enable!: Boolean;
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
  @Prop({ default: "" }) private MouseIcon!: String;
  @Prop({ default: 0 }) private MousePointer!: Number;
  @Prop({ default: "Label1" }) private Name!: String;
  @Prop({ default: "none", required: true }) public readonly ID!: String;
  @Prop({ default: "" }) private Picture!: String;
  @Prop({ default: 7 }) private PicturePosition!: Number;
  @Prop({ default: 0 }) private SpecilalEffect!: Number;
  @Prop({ default: 0 }) private TabIndex!: Number;
  @Prop({ default: true }) private TabStop!: Boolean;
  @Prop({ default: "" }) private Tag!: String;
  @Prop({ default: 1 }) private TextAlign!: Number;
  @Prop({ default: 0 }) private Top!: Number;
  @Prop({ default: true }) private Visible!: Boolean;
  @Prop({ default: 72 }) private Width!: Number;
  @Prop({ default: true }) private WordWrap!: Boolean;
}
</script>


<style scoped>
.label {
  border: none;
  background-color: rgb(238, 238, 238);
  text-align: left;
  background: white;
  float: left;
  padding-left: 2px;
  overflow: hidden;
  outline:none;
}
</style>