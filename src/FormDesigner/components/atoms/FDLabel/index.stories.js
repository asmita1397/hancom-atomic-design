/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, number, boolean, select } from '@storybook/addon-knobs'
import { changeMode } from '@/stories/util'

import UseLabel from '.'
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
storiesOf('UseLabel', module)
    .add('label', () => ({
        components: { UseLabel },
        props: {
            caption: {
                default: text('Caption', 'Label1'),
            },
            tabIndex: {
                default: number('TabIndex', -1)
            },
            id: {
                default: text('ID', 'Label1')
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
            border: {
                default: boolean('BorderStyle', false)
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
            },
            textAlign: {
                default: select('TextAlign', textAlign, '0')
            },


        },
        template: `
     
        <use-label
        :style="styled"
          v-model="checked"
          @click="action"
          :id="id"
          :tabIndex="tabIndex"
          :outline="outline"
          :check="check"
          :disabled="disabled">{{ caption }}</use-label>
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
                    borderColor: this.backColor,
                    textAlign: this.textAlign === '0' ? 'left' : this.textAlign === '1' ? 'center' : 'right',
                    border: this.border ? '1px solid black' : 'none',
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