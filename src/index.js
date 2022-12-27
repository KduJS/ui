import KduIcons from './icons'
import KTooltip from 'k-tooltip'
import KduResize from 'kdu-resize'
import 'focus-visible'

import 'kdu-resize/dist/kdu-resize.css'
import 'k-tooltip/dist/k-tooltip.css'

import KduButton from './components/KduButton.kdu'
import KduDisable from './components/KduDisable.kdu'
import KduDropdown from './components/KduDropdown.kdu'
import KduDropdownButton from './components/KduDropdownButton.kdu'
import KduFormField from './components/KduFormField.kdu'
import KduGroup from './components/KduGroup.kdu'
import KduGroupButton from './components/KduGroupButton.kdu'
import KduIcon from './components/KduIcon'
import KduInput from './components/KduInput.kdu'
import KduLoadingBar from './components/KduLoadingBar'
import KduLoadingIndicator from './components/KduLoadingIndicator'
import KduModal from './components/KduModal.kdu'
import KduSelect from './components/KduSelect.kdu'
import KduSelectButton from './components/KduSelectButton.kdu'
import KduSwitch from './components/KduSwitch.kdu'
import KduTab from './components/KduTab.kdu'
import KduTabs from './components/KduTabs.kdu'
import KduTypeAhead from './components/KduTypeAhead.kdu'

// Exported mixins
export { default as CoupledChild } from './mixins/CoupledChild'
export { default as CoupledParent } from './mixins/CoupledParent'
export { default as DisabledChild } from './mixins/DisabledChild'
export { default as DisableScroll } from './mixins/DisableScroll'

// Exported utils
export { generateHtmlIcon } from './icons'

export function install (Kdu, options = {}) {
  Kdu.use(KduIcons)

  Kdu.use(KTooltip, mergeOptions({
    bondary: document.body,
    themes: {
      tooltip: {
        delay: {
          show: 1000,
          hide: 800,
        },
        instantMove: true,
      },
      dropdown: {
        handleResize: false,
      },
    },
  }, options.ktooltip))

  Kdu.use(KduResize)

  Kdu.component('KduButton', KduButton)
  Kdu.component('KduDisable', KduDisable)
  Kdu.component('KduDropdown', KduDropdown)
  Kdu.component('KduDropdownButton', KduDropdownButton)
  Kdu.component('KduFormField', KduFormField)
  Kdu.component('KduGroup', KduGroup)
  Kdu.component('KduGroupButton', KduGroupButton)
  Kdu.component('KduIcon', KduIcon)
  Kdu.component('KduInput', KduInput)
  Kdu.component('KduLoadingBar', KduLoadingBar)
  Kdu.component('KduLoadingIndicator', KduLoadingIndicator)
  Kdu.component('KduModal', KduModal)
  Kdu.component('KduSelect', KduSelect)
  Kdu.component('KduSelectButton', KduSelectButton)
  Kdu.component('KduSwitch', KduSwitch)
  Kdu.component('KduTab', KduTab)
  Kdu.component('KduTabs', KduTabs)
  Kdu.component('KduTypeAhead', KduTypeAhead)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin

function mergeOptions (to, from) {
  for (const key in from) {
    if (to[key] && from[key] && typeof to[key] === 'object' && typeof from[key] === 'object') {
      mergeOptions(to[key], from[key])
    } else {
      to[key] = from[key]
    }
  }
  return to
}

// Auto-install
let GlobalKdu = null
if (typeof window !== 'undefined') {
  GlobalKdu = window.Kdu
} else if (typeof global !== 'undefined') {
  GlobalKdu = global.Kdu
}
if (GlobalKdu) {
  GlobalKdu.use(plugin)
}
