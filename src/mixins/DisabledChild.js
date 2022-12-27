/**
 * (Use with the DisabledParent mixin)
 * This mixin should be implemented on all components that can be disabled.
 */
// @kdujs/component
export default {
  inject: {
    KduDisableMixin: {
      default: null,
    },
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    finalDisabled () {
      return this.disabled || (this.KduDisableMixin && this.KduDisableMixin.data.value)
    },
  },
}
