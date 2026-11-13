import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import AppearanceMenu from './AppearanceMenu.vue'
import AppearancePanel from './AppearancePanel.vue'
import './custom.css'

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            // Replaces the 3-dot extra button in the navbar with the 3-state flyout
            'nav-bar-content-after': () => h(AppearanceMenu),
            // Replaces the appearance switch inside the mobile drawer screen
            'nav-screen-content-after': () => h(AppearancePanel)
        })
    }
}
