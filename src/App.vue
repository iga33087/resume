<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <LeftMenu></LeftMenu>
      <div class="contentBox">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftMenu from '@/components/LeftMenu'

export default {
  components:{Header,LeftMenu},
}
</script>
