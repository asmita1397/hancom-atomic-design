import { ActionTree } from 'vuex'
import { FdMutations } from './mutations'

export interface IaddControl {
  target: FdControlVue,
  item: controlData
}

export interface IupdateControl {
  target: FdControlVue,
  proprtyName: keyof controlProperties,
  value: any
}

export interface IdeleteControl {
  parent: FdControlVue,
  target: FdControlVue[]
}

export interface IselectControl extends selectedControls {
}

export interface IfdEmitAction {
  actionId: string,
  actionArg: any
}

export interface IideEmitAction {
  actionId: string,
  actionArg: any
}

type AugmentedActionContext = {
  commit<K extends keyof FdMutations>(
    key: K,
    payload: Parameters<FdMutations[K]>[1]
    ): ReturnType<FdMutations[K]>
  }

interface FdActions {
  addControl (
    context: AugmentedActionContext,
    payload: IaddControl
    ): void
  updateControl (
    context: AugmentedActionContext,
    payload: IupdateControl
  ): void
  deleteControl (
    context: AugmentedActionContext,
    payload: IdeleteControl
  ): void
  selectControl (
    context: AugmentedActionContext,
    payload: IselectControl
  ): void
  fdEmitAction (
    context: AugmentedActionContext,
    payload: IfdEmitAction
  ): void
  ideEmitAction (
    context: AugmentedActionContext,
    payload: IideEmitAction
  ): void
}

const actions : ActionTree<fdState, rootState> & FdActions = {
  fdActionSample (context, payload) {
    context.commit('fdActionSample', payload)
  },
  addControl (context, payload) {
    context.commit('addControl', payload)
  },
  updateControl (context, payload) {
    context.commit('updateControl', payload)
  },
  deleteControl (context, payload) {
    context.commit('deleteControl', payload)
  },
  selectControl (context, payload) {
    context.commit('selectControl', payload)
  },
  fdEmitAction (context, payload) {
    context.commit('fdEmitAction', payload)
  },
  ideEmitAction (context, payload) {
    context.commit('ideEmitAction', payload)
  }
}

export default actions
