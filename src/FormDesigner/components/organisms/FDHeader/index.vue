<template>
  <div>
    <div class="firstrow">
      <div class="ui-titlebar">
        <div class="ui-titletext">Visual Basic for Applications - Book1</div>
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

    <div class="secondrow">
      <i style="float:left" class="material-icons">&#xe5d4;</i>
      <div id="menu-bar">
        <ul class="main-menu">
          <li>File</li>
          <li>Edit</li>
          <li>
            View
            <ul>
              <li>Code</li>
              <li>object</li>
              <li class="separator"></li>
              <li>Objet Browser</li>
              <li class="separator"></li>
              <li>Immediate Window</li>
              <li>Locals Window</li>
              <li>Watch Window</li>
              <li>Call Stack</li>
              <li class="separator"></li>
              <li>Project Explorer</li>
              <li>Properties Window</li>
              <li class="separator"></li>
              <li>ToolBox</li>
              <li>Tab Order</li>
              <li>Microscoft Excel
                <ul class="submenu">
                   <li>hhhhh</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Insert
            <ul>
              <li>Procedure</li>
              <li >Userform</li>
              <li>Module</li>
              <li>class Module</li>
              <li class="separator"></li>
              <li>File</li>
            </ul>
          </li>
          <li>Format</li>
          <li>Debug</li>
          <li>Run</li>
          <li>Tools</li>
          <li>Add-Ins</li>
          <li>Window</li>
          <li>Help</li>
        </ul>
      </div>
    </div>

    <div class="thirdrow">
       <i class="material-icons">&#xe5d4;</i>
      <!--<i style="font-size:17px" class="fa">&#xf1c3;</i>
      <i style="font-size:17px" class="fa">&#xf0c7;</i>
      <i style="font-size:17px" class="fa">&#xf0c4;</i>
      <i style="font-size:17px" class="fa">&#xf0c5;</i>
      <i style="font-size:17px" class="fa">&#xf0ea;</i>
      <i style="font-size:17px" class="fa">&#xf0e2;</i>
      <i style="font-size:17px" class="fa">&#xf01e;</i>
      <i style="font-size:15px" class="fa">&#xf04b;</i>
      <i style="font-size:17px" class="fa">&#xf28c;</i>
      <i style="font-size:17px" class="fa">&#xf04d;</i> -->
      <img src="../../../assets/header-icons/file-save.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/cut.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/copy.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/paste.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/find.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/undo.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/redo.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/design-mode.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/pj-explorer.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/pj-property.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/obj-browser.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/tool-box.svg" class="fa"/>
      <img src="@/FormDesigner/assets/header-icons/help.svg" class="fa"/>
      
     

    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation, Getter } from "vuex-class";
/* import {  } from "../../../assets"; */
@Component({})
export default class Header extends Vue {

}
</script>

<style scoped>
.body {
  width: 100%;
}
.tablink {
  background-color: rgba(240, 234, 234, 0.877);
  color: rgb(17, 17, 17);
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  border: none;
  float: left;
}
.thirdrow{
margin-top: 5px;
}  
.tablink:hover {
  background-color: #4dbce0;
}

.firstrow {
  font-size: 15px;
}
.secondrow {
  border: 1px transparent;
  /* color: rgba(194, 189, 189, 0.616); */
  padding: 5px;
  background-color: rgba(240, 234, 234, 0.877);
  height: 20px;
}
.buttons {
  float: right;
  line-height: normal;
}
.min .max .close1 {
  width: 40px;
}
.close1:hover {
  background-color: red;
}
.fa {
  /* padding: 3px; */
  margin-left: 3px;
  margin-right:3px;
}
.material-icons {
  size: 15px;
}
i:hover {
  background-color: #4dbce0;
  cursor: default;
}

.ui-titlebar {
  display: flex;
  width: 100%;
  height: 32px;
  background: #0072c6;
  user-select: none;
  cursor: default;
}
.ui-titleicon {
  flex-grow: 1;
  max-width: 32px;
  max-height: 32px;
}
.ui-titletext {
  flex-grow: 2;
  max-height: 32px;
  width: auto;
  font: 12px/32px "Segoe UI", Arial, sans-serif;
  color: #fff;
  text-indent: 10px;
}
.ui-titlecontrols {
  max-width: 144px;
  max-height: 32px;
  flex-grow: 1;
}
.ui-btn {
  margin: 0;
  width: 48px;
  height: 32px;
  border: 0;
  outline: 0;
  background: transparent;
}
.ui-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
.ui-btn.close:hover {
  background: #e81123;
}
.ui-btn svg path,
.ui-btn svg rect,
.ui-btn svg polygon {
  fill: #fff;
}
.ui-btn svg {
  width: 10px;
  height: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.tablink:hover .dropdown-content {
  display: block;
}
.dropdown {
  position: relative;
  display: inline-block;
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
.btn-style{
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  min-width: 50px;
  max-width: 112px;
  width: fit-content;
  height: fit-content;
  min-height: 20px;
  padding: 0px 5px 0px 5px;
  overflow: hidden;
  top: -3px;
  position: relative;
}
:focus{
  outline:none
}
#menu-bar
{
}
ul.main-menu
{
    list-style-type: none;
    margin: 0px 0px 10px 0px;
    padding: 0px;  
    z-index: 1000000;  
}
ul.main-menu > li
{
    margin: 0;
    display: inline;
    list-style-type: none;
    padding: 6px 4px 6px 6px;
    line-height: 28px;
    vertical-align: middle;
    cursor: default;
    outline: none;
    border-style: solid;
    border-width: 1px 1px 0 1px;
    border-color: transparent;
    z-index: 1000000;
}

ul.main-menu > li.active-menu
{
    background-color: #fff;
    border-color: #ccc;
    -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000000;
}

ul.main-menu ul li a
{
    color: #000;
    text-decoration: none;
    display: block;
    white-space: nowrap;
}
ul.main-menu li ul li a span
{
    font-size: 11px;
    color: #999;
    float:right;
    right: 10px;
    left: auto;
    position: absolute;
}

/* SUBMENU */
ul.main-menu > li  ul
{
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: none;
    border-width:1px;
    border-style: solid;
    border-color: #ccc;
    background-color: #fff;
    -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000000;
}
ul.main-menu li ul li
{
    display:list-item;
    margin: 0;
    line-height: 26px;
    padding-right: 40px;
    min-width: 100px;
    cursor: pointer;
    text-indent: 30px;
    white-space:nowrap;
    z-index: 1000000;
}
ul.main-menu li:hover
{
    background-color: whiteSmoke; /*#fef7cb;*/
}
ul.main-menu li.active-menu:hover
{
    background-color: #fff;
}
ul.main-menu li ul li.disabled, ul.main-menu li ul li.disabled:hover, ul.main-menu li ul li.disabled a
{
    color: #ddd;
    cursor:default;
    background-color: #fff;
}

ul.main-menu li.separator  
{
    border-top: 1px solid #ddd; 
    margin-top: 5px;
    margin-bottom: 5px;
}

.submenu 
{
    /* background-image: url(../images/menu-right-arrow.png); */
    background-repeat: no-repeat;
    background-position: right center;
}

/* .tablink:hover .dropbtn {background-color: #3e8e41;} */
</style>