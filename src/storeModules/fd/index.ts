
import actions from './actions'
import mutations from './mutations'

const controlData: any = {
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
    HelpContextID: 0,
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
  controls: [{
    properties:{
        Accelerator: "",
        AutoSize: false,
        BackColor: "red",
        BackStyle: 0,
        BorderColor: "#111111",
        BorderStyle: 1,
        Caption: "Label1",
        ControlTipText: "helptext",
        Enable: true,
        Font: {
            FontName: "Arial",
            FontSize: 20,
            FontBold: true,
            FontItalic: true,
            FontUnderline: true,
            FontStrikethrough: true,
            FontStyle: "Arial Narrow Italic"
        },
        ForeColor: "#000000",
        Height: 30,
        HelpContextID: 0,
        Left:50,
        MouseIcon: "",
        MousePointer: 7,
        Name: "Label1",
        ID: 'Label1',
        Picture: "",
        PicturePosition: 7,
        SpecilalEffect: 0,
        TabIndex: 0,
        TabStop: true,
        Tag: "",
        TextAlign: 1,
        Top: 50,
        Visible: true,
        Width: 100,
        WordWrap: true
    },extraDatas: {
      Type:"Label"
    }
  },
  {
    properties:{
      Accelerator: "",
      AutoSize: false,
      BackColor: "red",
      BackStyle: 0,
      Cancel:false,
      Caption: "CommandButton1",
      ControlTipText: "helptext",
      Default: false,
      Enabled: true,
      Font: {
          FontName: "Arial",
          FontSize: 20,
          FontBold: true,
          FontItalic: true,
          FontUnderline: true,
          FontStrikethrough: true,
          FontStyle: "Arial Narrow Italic"
      },
      ForeColor: "#000000",
      Height: 30,
      HelpContextID: 0,
      Left:50,
      Locked:false,
      MouseIcon: "",
      MousePointer: 7,
      Name: "CommandButton1",
      ID: 'CommandButton1',
      Picture: "",
      PicturePosition: 7,
      TabIndex: 0,
      TabStop: true,
      Tag: "",
      TakeFocusOnClick: 1,
      Top: 200,
      Visible: true,
      Width: 100,
      WordWrap: true
  },
  extraDatas: {
    Type:"CommandButton"
  }
  }],
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
