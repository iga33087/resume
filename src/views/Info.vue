<template>
  <div class="info">
    <Label title="姓名" text="鄭愉"></Label>
    <Label title="性別" text="男"></Label>
    <Label title="生日" :text="'1997/09/14'+' ('+$global.getOld('1997/09/14')+'歲)'"></Label>
    <Label title="語言" text="中文 (精通)、英文 (略懂)"></Label>
    <Label title="Email" text="iga33087@gmail.com"></Label>
    <Label title="聯絡方式" text="0903615478"></Label>
    <Label title="居住地區" text="新北市板橋區"></Label>
    <Label title="希望待遇" text="面議"></Label>
    <Label title="工作經歷" text="前端工程師 (小驢行股份有限公司) - 一年"></Label>
    <Label title="可工作範圍" text="新北市、台北市"></Label>
    <Label title="學歷" text="華夏科技大學 - 資訊管理系 - 五專部"></Label>
    <Label title="工作技能" text="HTML5、CSS3、SCSS、Javascript、AJAX、Vue、Vuex、Webpack、Git、NodeJS、MySQL、PHP"></Label>
    <div style="display:flex;flex-wrap:wrap;">
      <Label icon="icon-check-square-regular" title="開發過大型系統" style="width:calc(100% / 3);" width="100%"></Label>
      <Label icon="icon-check-square-regular" title="可獨立作業" style="width:calc(100% / 3);" width="100%"></Label>
      <Label icon="icon-check-square-regular" title="抗壓性高" style="width:calc(100% / 3);" width="100%"></Label>
    </div>
    <PortfolioCard></PortfolioCard>
  </div>
</template>

<script>
import Label from '@/components/Label'
import PortfolioCard from '@/components/PortfolioCard'
export default {
  components:{Label,PortfolioCard}
}
</script>

<style>

</style>