export default {
  name: 'KduIcon',

  functional: true,

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  render (h, { props, data }) {
    return <div
      class="kdu-ui-icon"
      {...data}
    >
      <svg>
        <use href={`#ic_${props.icon}_standard`} />
      </svg>
    </div>
  },
}
