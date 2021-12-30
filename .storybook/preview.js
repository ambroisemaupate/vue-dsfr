import { defineComponent } from 'vue'
import { app } from '@storybook/vue3'
import { FocusTrap } from 'focus-trap-vue'

import '../src/main.css'

import './theme.css'

import VIcon from '../src/icons.js'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Docs',
        'Fondamentaux',
        'Composables',
        'Composants',
      ],
    },
  }
}


const RouterLink = defineComponent({
  name: 'router-link',
  props: {
    to: String,
  },
  template: `
    <a :href="to" v-bind="$attrs"><slot /></a>
  `,
})

app.component('router-link', RouterLink);
app.component('VIcon', VIcon)
app.component('FocusTrap', FocusTrap)
