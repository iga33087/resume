<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <LeftMenu></LeftMenu>
      <div class="contentBox">
        <router-view/>
      </div>
    </div>
    <ChartBox></ChartBox>
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftMenu from '@/components/LeftMenu'
import ChartBox from '@/components/ChartBox'

export default {
  components:{Header,LeftMenu,ChartBox},
}
</script>
