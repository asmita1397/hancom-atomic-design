/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, number, boolean, select } from '@storybook/addon-knobs'
import { changeMode } from '@/stories/util'

import UseCommandButton from '.'
import SpecNote from './index.spec.md'
const backColor = {
    Red: 'red',
    Black: 'black',
    Green: 'green',
}
const textAlign = {
    0: '0',
    1: '1',
    2: '2'
}
storiesOf('UseCommandButton', module)
    .add('CommandButton', () => ({
        components: { UseCommandButton },
        props: {
            caption: {
                default: text('Caption', 'CommandButton'),
            },
            tabIndex: {
                default: number('TabIndex', -1)
            },
            id: {
                default: text('ID', 'Hello')
            },
            fontStyle: {
                default: boolean('FontItalic', false)
            },
            fontWeight: {
                default: boolean('FontBold', false)
            },
            background: {
                default: boolean('BackStyle', false)
            },

            width: {
                default: number('Width', 100)
            },
            height: {
                default: number('Height', 100)
            },
            top: {
                default: number('Top', 100)
            },
            left: {
                default: number('Left', 100)
            },
            fontSize: {
                default: number('FontSize', 15)
            },
            backgroundColor: {
                default: select('BackColor', backColor, 'red')
            },
            color: {
                default: select('Color', backColor, 'black')
            }


        },
        template: `
     
        <UseCommandButton
        :style="styled"
          v-model="checked"
          @click="action"
          :id="id"
          :tabIndex="tabIndex"
         >{{ caption }}</UseCommandButton>
      `,
        methods: {
            action: action('clicked'),
            handleMouseOver() {
                console.log("nnnnn")
            }
        },
        data() {

            return {
                checked: false,

            }
        },
        computed: {
            styled() {

                console.log("----->", this)
                console.log(this.width)
                return {
                    left: `${this.left}px`,
                    width: `${this.width}px`,
                    height: `${this.height}px`,
                    top: `${this.top}px`,
                    backgroundColor: this.backgroundColor,
                    background: this.background ? 'transparent' : this.backgroundColor,
                    color: this.color,
                    cursor: 'nesw-resize',
                    fontSize: `${this.fontSize}px`,
                    fontStyle: this.fontStyle ? 'italic' : '',
                    textDecoration: this.textDecoration ? 'underline' : '',
                    fontWeight: this.fontWeight ? 'bold' : '',
                    position: 'absolute'
                }
            }
        }
    }), {
        notes: { markdown: SpecNote },
        info: {}
    })