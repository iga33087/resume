<template>
  <div>
    <div class="indexItem info">
      <Title content="INFO"></Title>
      <Label title="姓名" text="鄭愉"></Label>
      <Label title="性別" text="男"></Label>
      <Label title="生日" :text="'1997/09/14'+' ('+$global.getOld('1997/09/14')+'歲)'"></Label>
      <Label title="語言" text="中文 (精通)、英文 (略懂)"></Label>
      <Label title="Email" text="iga33087@gmail.com"></Label>
      <Label title="聯絡方式" text="0903615478"></Label>
      <Label title="居住地區" text="新北市板橋區"></Label>
      <Label title="希望待遇" text="面議"></Label>
      <Label title="工作經歷" text="前端工程師 (小驢行股份有限公司) 2019/8/20 ~ 2020/09/30"></Label>
      <Label title="可工作範圍" text="新北市、台北市"></Label>
      <Label title="學歷" text="華夏科技大學 - 資訊管理系 - 五專部"></Label>
    </div>
    <div class="indexItem SKILLS">
      <Title content="SKILLS"></Title>
      <Label title="工作技能" text="HTML5、CSS3、SCSS、Javascript、AJAX、Vue、Vuex、Webpack、Git、NodeJS、WebSocket、MySQL、PHP"></Label>
      <div style="display:flex;flex-wrap:wrap;">
        <Label icon="icon-check-square-regular" title="開發過大型系統" style="width:calc(100% / 3);" width="100%"></Label>
        <Label icon="icon-check-square-regular" title="可獨立作業" style="width:calc(100% / 3);" width="100%"></Label>
        <Label icon="icon-check-square-regular" title="抗壓性高" style="width:calc(100% / 3);" width="100%"></Label>
      </div>
    </div>
    <div class="indexItem PROFILE">
      <Title content="PROFILE"></Title>
      <div class="PROFILEContent">我是畢業於華夏科技大學資管系五專部的鄭愉，就讀五專期間對程式設計及網頁深感興趣，因此開始自學前端技術，如HTML、CSS、Javascript、AJAX、PHP等技術... 並且在五專四年級的專題報告應用所學，一個人打造了個"線上測驗平台"，並且獲得評審高分，專題報告分數為全班第二。<br><br>五專畢業以後進入了小驢行股份有限公司，開始接觸了前端框架Vue，以及各種前端的前沿技術，比如動態路由、打包及模組化設計等等... 在那邊也參與開發過許多專案，經過一年的磨練學會了非常多東西、克服了非常多困難，為我前端身涯當中非常重要的里程碑，</div>
    </div>
    <div class="indexItem PORTFOLIO">
      <Title content="PORTFOLIO"></Title>
      <PortfolioCard v-for="(item,index) in PortfolioCardList" :key="index" :data="item"></PortfolioCard>
    </div>
  </div>
</template>

<script>
import Label from '@/components/Label'
import PortfolioCard from '@/components/PortfolioCard'
import Title from '@/components/Title'

export default {
  components:{Label,PortfolioCard,Title},
  data() {
    return {
      PortfolioCardList:[
        {img:"",title:"線上測驗平台",content:"測試文字",use:"HTML、CSS、Javascript、PHP、MySQL、AJAX"},
        {img:"",title:"長照交通接送平台",content:"測試文字",use:"HTML、CSS、Javascript、Vue、Webpack、Google API"},
        {img:"",title:"大學校務活動系統",content:"測試文字",use:"HTML、CSS、Javascript、Vue、Vuex、、Webpack、Google API"},
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll',()=> {
      let top=window.scrollY
      let num=""
      let ele=document.querySelectorAll(".indexItem")
      console.log(ele[0].offsetTop)
      for(let i in ele) {
        if(top<=ele[i].offsetTop+100) {
          num=i
          break;
        }
      }
      console.log(num)
    });
  }
}
</script>

<style>

</style>