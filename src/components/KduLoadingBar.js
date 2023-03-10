export default {
  name: 'KduLoadingBar',

  functional: true,

  props: {
    value: {
      type: Number,
      default: 0,
    },

    unknown: {
      type: Boolean,
      default: false,
    },
  },

  render (h, { props, data }) {
    data.class = [
      data.class,
      {
        unknown: props.unknown,
      },
    ]
    return <div
      class="kdu-ui-loading-bar"
      {...data}
    >
      <div
        class="bar"
        style={!props.unknown && { width: `${props.value * 100}%` }}
      />
    </div>
  },
}
