import Vue from 'vue'

export default Vue.directive('delay', {
  bind: function (el,binding) {
    el.style.animationDelay=binding.value
  }
})
