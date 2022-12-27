let count = 0

function getScrollingElements () {
  return document.querySelectorAll('.kdu-ui-disable-scroll, body')
}

function updateScroll () {
  if (count === 0) {
    getScrollingElements().forEach(el => el.classList.remove('kdu-ui-no-scroll'))
  } else if (count === 1) {
    getScrollingElements().forEach(el => el.classList.add('kdu-ui-no-scroll'))
  }
}

export default {
  mounted () {
    count++
    updateScroll()
  },

  beforeDestroy () {
    count--
    updateScroll()
  },
}
