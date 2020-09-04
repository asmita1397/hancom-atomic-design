
import { MutationTree } from 'vuex'

interface IMaddControl {
  target: FdControlVue,
  item: controlData
}

interface IMupdateControl {
  target: FdControlVue,
  proprtyName: keyof controlProperties,
  value: any
}

interface IMdeleteControl {
  parent: FdControlVue,
  target: FdControlVue[]
}

interface IMselectControl extends selectedControls {
}

interface IMfdEmitAction {
  actionId: string,
  actionArg: any
}

interface IMideEmitAction {
  actionId: string,
  actionArg: any
}

export type FdMutations<S = fdState> = {
  addControl(state: S, payload: IMaddControl): void
  updateControl(state: S, payload: IMupdateControl): void
  deleteControl(state: S, payload: IMdeleteControl): void
  selectControl(state: S, payload: IMselectControl): void
  fdEmitAction(state: S, payload: IMfdEmitAction): void
  ideEmitAction(state: S, payload: IMideEmitAction): void
}

const mutations : MutationTree<fdState> & FdMutations = {
  fdActionSample (state, payload) {
  },
  addControl (state, payload) {
    const targetData = payload.target.propControlData
    targetData.controls.push(payload.item)
  },
  updateControl (state, payload) {
    
    const targetData = payload.target.propControlData
    if (payload.proprtyName && targetData.properties) {
      // ToDo: check update value is valid
      targetData.properties[payload.proprtyName] = payload.value
    }
  },
  deleteControl (state, payload) {
    const deleteIds = payload.target.map((fdcontrol) => {
      return fdcontrol.propControlData.properties.ID
    })
    const parentData = payload.parent.propControlData
    const parentControlIds = parentData.controls.map((fdcontrol) => {
      return fdcontrol.properties.ID
    })

    for (let i = 0; i < deleteIds.length; i++) {
      const targetName = deleteIds[i]
      for (let j = 0; j < parentControlIds.length; j++) {
        if (targetName === parentControlIds[j]) {
          parentData.controls.splice(j, 1)
          parentControlIds.splice(j, 1)
          break
        }
      }
    }
  },
  selectControl (state, payload) {
    state.selectedControls.main = payload.main
    state.selectedControls.selected = payload.selected
  },
  fdEmitAction (state, payload) {

  },
  ideEmitAction (state, payload) {

  }
}

export default mutations
