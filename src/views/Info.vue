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
      <div class="PROFILEContent">我是畢業於華夏科技大學資管系五專部的鄭愉，就讀五專期間對程式設計及網頁深感興趣，因此開始自學前端技術，如HTML、CSS、Javascript、AJAX、PHP等技術... 並且在五專四年級的專題報告應用所學，一個人打造了個"線上測驗平台"，並且獲得評審高分，專題報告分數為全班第二。<br><br>五專畢業以後進入了小驢行股份有限公司，開始接觸了前端框架Vue，以及各種前端的前沿技術，比如動態路由、打包及模組化設計等等... 在那邊也參與開發過許多專案，包括大型系統的前台、後台的獨立開發，經過一年的磨練學會了非常多東西、克服了非常多困難，為我前端身涯當中非常重要的里程碑。</div>
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
        {img:"",url:"https://iga33087.github.io/",title:"遊戲王卡生產器",content:"做好玩的東西XD 是個能上傳圖片、選好外框、輸入文字，就能生產出遊戲王卡並且下載下來的東西",use:"HTML、CSS、Javascript"},
        {img:"",url:"",title:"線上測驗平台",content:"為五專四年級專題報告的作品，是個能讓使用者建立題庫供其他人進行測驗的系統，值得一提的是，該作品是自己一個人一組花了一個多月的時間開發的，並且得到了評審老師高度讚賞，該課程成績為獲得全班第二，是個前後端混和的專案，後端語言為PHP，以當時來講技術也算主流了。",use:"HTML、CSS、Javascript、PHP、MySQL、AJAX"},
        {img:"",url:"https://ntpc.donkeymove.com/Client/login",title:"長照交通接送平台",content:"進入小驢行公司的第一個專案，是個能供符合新北市長照交通條件的人預約接送的平台，廣泛的使用Google Map API以用來顯示地圖、畫出路線、計算車資，不僅使用前端框架Vue，也充分利用了Webpack模組化特點，讓程式碼不冗長、易維護、系統效能大幅提升，也能支援IE瀏覽器。",use:"HTML、CSS、Javascript、Vue、Webpack、Google API"},
        {img:"",url:"https://enroll.wzu.edu.tw/WZActivityFront/#/Member/login",title:"大學校務活動系統",content:"著重於活動報名功能的校務系統網站，也使用了Vuex來做全域管理，最大的特色為報名表單為動態的，使用者可於後台設定活動的報名表單，比如欄位名稱、欄位類型、欄位選項、是否必填等等... 然後會反映到前台的活動報名頁面",use:"HTML、CSS、SCSS、Javascript、Vue、Vuex、Webpack、Google API"},
      ]
    }
  },
  created() {
    this.$api.addView()
  },
  /*mounted() {
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
  }*/
}
</script>

<style>

</style>