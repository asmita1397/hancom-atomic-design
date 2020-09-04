
import actions from './actions'
import mutations from './mutations'

const controlData: controlData = {
  properties: {
    BackColor: "#ffffff",
    BorderColor: "#ffffff",
    BorderStyle: 0,
    Caption: "UserForm1",
    Cycle: 1,
    DrawBuffer: 32000,
    Enable: true,
    Font: {
      FontName: "Arial",
      FontSize: 15,
      FontBold: false,
      FontItalic: true,
      FontUnderline: true,
      FontStrikethrough: true,
      FontStyle: "Arial Narrow Italic"
    },
    ForeColor: "#ffffff",
    Height:300,
    HelpContextID:'0',
    KeepScrollBarsVisible: 3,
    Left: 0,
    MouseIcon: "",
    MousePointer: 0,
    Name: "UserForm1",
    ID: 1,
    Picture: "",
    PictureAlignment: 2,
    PictureSizeMode: 0,
    PictureTiling: false,
    RightToLeft: false,
    ScrollBars: 0,
    ScrollHeight: 0,
    ScrollLeft: 0,
    ScrollTop: 0,
    ScrollWidth: 0,
    ShowModal: true,
    SpecilalEffect: 3,
    StartUpPosition: 1,
    Tag: "",
    Top: 0,
    Width:300,
    WhatsThisButton: false,
    WhatsThisHelp: false,
    Zoom: 100
  },
  controls: [],
  extraDatas: null,
  type: ''
}

const _main = new WeakMap()
const _selected = new WeakMap()

class SelectedControls {
  constructor() {
    _selected.set(this, [])
  }

  set main(value) {
    _main.set(this, value)
  }

  get main(): FdControlVue | FdControlVue[] {
    return _main.get(this)
  }
  get selected(): FdControlVue[] {
    return _selected.get(this)
  }
}

const state: fdState = {
  controlData: controlData,
  selectedControls: new SelectedControls()
}

export default {
  state,
  actions,
  mutations
}
