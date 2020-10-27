import Vue from 'vue'

export default Vue.directive('scrollIn', {
  inserted: (el,binding)=> {
    let className=binding.value
    let top=el.offsetTop+el.offsetParent.offsetTop
    //let height=el.offsetHeight
    console.log(1111,window.innerHeight+window.scrollY)
    if(top>window.innerHeight+window.scrollY) {
      el.classList.remove(className)
      el.style.visibility="hidden"
    }
    else {
      el.style.visibility="visible"
      el.classList.add(className)
    }
    console.log(el,top)
    window.addEventListener('scroll', ()=> {
      let now=window.innerHeight+window.scrollY
      //console.log(now,height,top)
      if(now>top) {
        console.log("!!!")
        el.style.visibility="visible"
        el.classList.add(className)
      }
      else {
        el.style.visibility="hidden"
        el.classList.remove(className)
      }
    });
  }
})
