export default {
  name: 'KduLoadingIndicator',

  functional: true,

  render (h, { data, children }) {
    return <div class="kdu-ui-loading-indicator" {...data}>
      <div class="animation" />
      {children}
    </div>
  },
}
