/// <reference path="./@types/vuex.d.ts"/>
/// <reference path="./@types/fd.d.ts"/>

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface FdControlVue extends Vue {
    propControlData: controlData
}

declare module 'vue-split-panel'