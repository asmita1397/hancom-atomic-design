<template >
  <div class="tree" style="min-height:'50px'">
    <div @click="nodeClicked" :style="{'margin-left': `${depth * 2}px`}" class="node">
      <!-- <span v-if="hasChildren" class="fa">{{expanded ? '[-] &#xf07c;' : '[+] &#xf07b;'}}</span> -->
      <span v-if="hasChildren">
        <span v-if="expanded">
          [-]
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" fill-rule="evenodd">
              <path
                class="change"
                fill="#525252"
                fill-opacity="0.75"
                d="M0 1L5 1 7 3 15 3 15 6 14 6 14 4 6.586 4 4.585 2 1 2 1 10 0 14z"
              />
              <path fill="#DAA529" fill-rule="nonzero" d="M16 6L14 14 0 14 2 6z" />
            </g>
          </svg>
        </span>
        <span v-else>
          [+]
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#DAA529" d="M0 1L5 1 7 3 15 3 15 14 0 14z" />
          </svg>
        </span>
      </span>
      <span class="type" v-else>
        <!-- <i style="font-size:15px" class="fa">&#xf15c;</i> -->
        <img src="@/FormDesigner/assets/projectExplorer-icons/user-from.svg" />
      </span>
      {{node.name}}
    </div>

    <ul v-if="expanded">
      <TreeBrowser
        v-for="child in node.userForms"
        :key="child.name"
        :node="child"
        :depth="depth + 1"
      />
    </ul>
  </div>
</template>


<script lang="ts">
// import '../assets/projectExplorer-icons'
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class TreeBrowser extends Vue {
  @Prop() node!: any;
  expanded = false;
  depth: object = {
    type: 0,
    default: 0
  };

  nodeClicked() {
    this.expanded = !this.expanded;
  }

  get hasChildren() {
    return this.node.userForms;
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
