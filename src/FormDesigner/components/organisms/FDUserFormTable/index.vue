<template>
  <div>
     <div class="btn-group">
      <button class="button" default>Alphabetic</button>
      <button class="button">Categorized</button>
    </div>

   <table class="table">
      <tr >
        <td class="lefttd">(Name)</td>
        <td>
          
          <input type="text" :value="userFormData.Name"  />
        </td>
      </tr>
      <tr>
        <td>BackColor</td>
        <td>
          <select :value="userFormData.BackColor">
            <option v-for="(item,key) in backColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
       <tr>
        <td>BorderColor</td>
        <td>
          <select :value="userFormData.BorderColor" >
            <option v-for="(item,key) in borderColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>BorderStyle</td>
        <td>
          <select :value="userFormData.BorderStyle" >
            <option v-for="(item,key) in borderStyle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Caption</td>
        <td>
          <input type="text" :value="userFormData.Caption"   />
        </td>
      </tr>
     <tr>
        <td>Cycle</td>
        <td>
          <select :value="userFormData.Cycle" >
            <option v-for="(item,key) in cycle" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>DrawBuffer</td>
        <td>
          <input
            type="number"
            v-model="userFormData.DrawBuffer"
           
          />
        </td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td>
          <select :value="userFormData.Enabled" >
            <option :value="true" selected>True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
     <tr>
        <td>Font</td>
        <td>
          <select :value="userFormData.Font">
            <option v-for="(item,key) in font" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ForeColor</td>
        <td>
          <select :value="userFormData.ForeColor" >
            <option v-for="(item,key) in foreColor" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
     <tr>
        <td>Height</td>
        <td>
          <input
            type="number"
            :value="userFormData.Height"
          />
        </td>
      </tr>
      <tr>
        <td>HelpContextId</td>
        <td>
          <input
            type="number"
            v-model="userFormData.HelpContextId"
          
          />
          
        </td>
      </tr>
      <tr>
        <td>KeepScrollsBarsVisible</td>
        <td>
          <select :value="userFormData.KeepScrollsBarsVisible" >
            <option v-for="(item,key) in keepScrollsBarsVisible" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Left</td>
        <td>
          <input
            type="number"
            :value="userFormData.Left"
            
          />
        </td>
      </tr>
     <tr>
        <td>MouseIcon</td>
        <td>
          <input type="file" accept=".ico" />
        </td>
      </tr>
      <tr>
        <td>MousePointer</td>
        <td>
          <select :value="userFormData.MousePointer"> 
            <option v-for="(item,key) in  mousePointer" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Picture</td>
        <td>
          <input type="file" accept=".png, .jpg, .jpeg, .ico" />
        </td>
      </tr>
     <tr>
        <td>PictureAlignment</td>
        <td>
          <select :value="userFormData.PictureAlignment" >
            <option v-for="(item,key) in pictureAlignment" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PictureSizeMode</td>
        <td>
          <select :value="userFormData.PictureSizeMode">
            <option v-for="(item,key) in pictureSizeMode" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>PictureTiling</td>
        <td>
          <select :value="userFormData.PictureTiling" >
            <option :value="false" selected>False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
       <tr>
        <td>RightToLeft</td>
        <td>
          <select
            v-model="userFormData.RightToLeft"
          >
            <option selected :value="false">False</option>
            <option :value="true">True</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>ScrollBars</td>
        <td>
          <select :value="userFormData.ScrollBars" >
            <option v-for="(item,key) in scrollBars" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
       <tr>
        <td>ScrollHeight</td>
        <td>
          <input type="number" :value="userFormData.ScrollHeight"  />
        </td>
      </tr>
      <tr>
        <td>ScrollLeft</td>
        <td>
          <input type="number" :value="userFormData.ScrollLeft"  />
        </td>
      </tr>
      <tr>
        <td>ScrollTop</td>
        <td>
          <input type="number" :value="userFormData.ScrollTop"  />
        </td>
      </tr>

      <tr>
        <td>ScrollWidth</td>
        <td>
          <input type="number" :value="userFormData.ScrollWidth"   />
        </td>
      </tr>
      <tr>
        <td>ShowModal</td>
        <td>
          <select :value="userFormData.ShowModal" >
            <option :value="true" selected>True</option>
            <option :value="false">False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>SpecialEffect</td>
        <td>
          <select :value="userFormData.SpecialEffect" >
            <option v-for="(item,key) in specialEffect" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>StartUpPosition</td>
        <td>
          <select :value="userFormData.StartUpPosition" >
            <option v-for="(item,key) in startUpPosition" :key="key" :value="item">{{key}}</option>
          </select>
        </td>
      </tr>
     <tr>
        <td>Tag</td>
        <td>
          <input type="text" :value="userFormData.Tag" />
        </td>
      </tr>
      <tr>
        <td>Top</td>
        <td>
          <input
            type="number"
            :value="userFormData.Top"
           
          />
        </td>
      </tr>
      <tr>
        <td>WhatsThisButton</td>
        <td>
          <select
            v-model="userFormData.WhatsThisButton"
            
          >
            <option :value="true">True</option>
            <option :value="false" selected>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>WhatsThisHelp</td>
        <td>
          <select :value="userFormData.WhatsThisHelp" >
            <option :value="true">True</option>
            <option :value="false" selected>False</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Width </td>
        <td>
          <input
            type="number"
            :value="userFormData.Width"
           
          />
        </td>
      </tr>
      <tr>
        <td>Zoom</td>
        <td>
          <input
            type="number"
            :value="userFormData.Zoom"
          
          />
        </td>
      </tr>   
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import backColor from  "@/FormDesigner/models/backColor.json";
import borderColor from "@/FormDesigner/models/borderColor.json";
import borderStyle from "@/FormDesigner/models/borderStyle.json";
import cycle from "@/FormDesigner/models/cycle.json";
import font from "@/FormDesigner/models/font.json";
import foreColor from "@/FormDesigner/models/foreColor.json";
import keepScrollsBarsVisible from "@/FormDesigner/models/keepScrollsBarsVisible.json";
import mousePointer from "@/FormDesigner/models/mousePointer.json";
import pictureAlignment from "@/FormDesigner/models/pictureAlignment.json";
import scrollBars from "@/FormDesigner/models/scrollBars.json";
import specialEffect from "@/FormDesigner/models/specialEffect.json";
import startUpPosition from "@/FormDesigner/models/startUpPosition.json";
import pictureSizeMode from "@/FormDesigner/models/pictureSizeMode.json"; 
//  import { validators } from "@/validators/validator.js";
import { Getter, Mutation } from 'vuex-class';
@Component({
  
  
})


export default class UserFormTable extends Vue {
 /*  @Prop() userFormData: any; */

  
 /*  validators: object = validators; */
  pictureSizeMode: Object = pictureSizeMode;
  backColor: Object = backColor;
  borderColor: Object = borderColor;
  borderStyle: Object = borderStyle;
  cycle: Object = cycle;
  font: Object = font;
  foreColor: Object = foreColor;
  keepScrollsBarsVisible: Object = keepScrollsBarsVisible;
  mousePointer: Object = mousePointer;
  pictureAlignment: Object = pictureAlignment;
  scrollBars: Object = scrollBars;
  specialEffect: Object = specialEffect;
  startUpPosition: Object = startUpPosition

 get userFormData(){
    return this.$store.state.fd.controlData.properties;
  }
}

</script>

<style scoped>
.node {
  text-align: left;
}
.table
 {
  margin-right: 0%;
  width: 100%;
  border-collapse: collapse;
  color: black;

}
th,
td {
  text-align: left;
  width: fit-content;
  position: relative;
  border: 1px solid lightgray;
    font-size: 12px;
}
th {
  width: 120%;
 
  font-family: Tahoma;
}

.form-control {
  float: left;
  width: 280px;
  cursor: pointer;
  background-color: rgb(190, 185, 185);
 font-size: 12px;
}
label {
  float: left;
}
select {
  width:100%;
  /* padding: 1px 2px; */
  border:none;
}
input {
  width: 98%;
  border:none
}
select:focus
{
  outline: none;
}
input:focus{
  outline: none;
}
.button:focus{
  outline: none;
  background-color:white;
}

/* Must be added as style for the new data */
.btn-group .button {
  border: none;
  color: black;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  /* float: left; */
}
.btn-group .button {
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;

}
.lefttd{
  width: 130px;
}
</style>