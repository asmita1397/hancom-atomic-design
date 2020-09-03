<template>
  <div v-if="noDisplay===false">
    <div>
      <div class="sideheader">
        <span class="sideheader1">
          <span>Project - VBAProject</span>
          <div id="mdiv" v-on:click="noDisplayTable">
            <div class="mdiv">
              <div class="md"></div>
            </div>
          </div>
        </span>
      </div>
    </div>
    <div class="form-group">
      <label for="userForm"></label>

      <select class="form-control" name="selectedUserForm" id="selectedUserForm">
        <option>UserForm1 UserForm</option>
      </select>     
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import UserFormTable from "./UserFormTable.vue";

import ListControlTable from "./ListControlTable.vue";

@Component({
  components: {
    UserFormTable,
   
  }
})
export default class UserFormPropertiesList extends Vue {
  noDisplay = false;
  noDisplayTable() {
    this.noDisplay = true;
  }
  

  mounted() {
   
  }
}
</script>


<style scoped>
.sideheader1 {
   display: grid;
  grid-template-columns: 1fr 25px;
  background-color: rgb(142, 191, 231);
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.sideheader {
  height: 22px;
  text-align: left;
  padding: 0pc;
  background-color: #99b4d1;
}
.form-control {
  float: left;
  width: 100%;
  cursor: pointer;
  background-color: white;
}
#mdiv {
  float: right;
  margin: initial;
  position: relative;
  top: 0px;
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
</style>