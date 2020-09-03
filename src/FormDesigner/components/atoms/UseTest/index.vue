<template>
  <div>
    {{ propControlData.properties.Name }}
    {{ propControlData.properties.ID }}
    {{ compodata }}
    <br/>
    <button @click="onAdd">add</button>
    <button @click="onUpdate">update</button>
    <button @click="onDelete">delete</button>
    <button @click="onSelect">select</button>
    <use-test v-for="(key, index) in controls"
      :key="index"
      :propControlData="key"/>
  </div>
</template>

<script lang="ts">
import FdControlVue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { IaddControl, IupdateControl, IdeleteControl, IselectControl, IfdEmitAction, IideEmitAction } from '@/storeModules/fd/actions'
@Component({
  name: 'UseTest'
})
export default class UseTest extends FdControlVue {
  $parent!: UseTest | Vue
  compodata = 'test'
  @Action('fd/fdActionSample') fdActionSample!: (payload: any) => void
  @Action('fd/addControl') addControl!: (payload: IaddControl) => void
  @Action('fd/updateControl') updateControl!: (payload: IupdateControl) => void
  @Action('fd/deleteControl') deleteControl!: (payload: IdeleteControl) => void
  @Action('fd/selectControl') selectControl!: (payload: IselectControl) => void
  @Action('fd/fdEmitAction') fdEmitAction!: (payload: IfdEmitAction) => void
  @Action('fd/ideEmitAction') ideEmitAction!: (payload: IideEmitAction) => void

  @Prop({ required: true }) public propControlData!: controlData

  onAdd () {
    const propData = this.propControlData.properties
    const id = propData.ID + 1
    const Name = propData.Name ? propData.Name : ''

    const addTarget = this
    this.addControl({
      target: addTarget,
      item: { properties: { Name: Name, ID: id }, controls: [], extraDatas: null, type: 'Label' }
    })
  }

  onUpdate () {
    this.compodata = 'aaa'
    this.updateControl({
      target: this,
      proprtyName: 'Name',
      value: 'update'
    })
  }

  onDelete () {
    if (this.$parent instanceof UseTest) {
      this.deleteControl({ parent: this.$parent, target: [this] })
    }
  }

  onSelect () {
    this.selectControl({ main: this, selected: [this] })
  }

  get controls () {
    return this.propControlData.controls
  }

  mounted () {
    // debugger
  }
}
</script>

<style lang="scss">
</style>
