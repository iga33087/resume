<template>
  <div>
    <div class="indexItem info animate__animated" v-scrollIn="'animate__bounceIn'">
      <Title content="INFO"></Title>
      <Label title="姓名" text="鄭愉"></Label>
      <Label title="性別" text="男"></Label>
      <Label title="生日" :text="'1997/09/14'+' ('+$global.getOld('1997/09/14')+'歲)'"></Label>
      <Label title="語言" text="中文 (精通)、英文 (略懂)"></Label>
      <Label title="Email" text="iga33087@gmail.com"></Label>
      <Label title="聯絡方式" text="0903615478"></Label>
      <Label title="居住地區" text="新北市板橋區"></Label>
      <Label title="希望待遇" text="面議"></Label>
      <Label title="工作經歷" text="前端工程師 (小驢行股份有限公司) 2019/8/20 ~ 2020/9/30<br>前端工程師 (中華龍網股份有限公司) 2021/3/2 ~ 2022/4/6<br>前端工程師 (合華科技股份有限公司) 2022/4/19 ~ 2022/12/26"></Label>
      <Label title="可工作範圍" text="新北市、台北市"></Label>
      <Label title="學歷" text="華夏科技大學 - 資訊管理系 - 五專部"></Label>
    </div>
    <div class="indexItem SKILLS animate__animated" v-scrollIn="'animate__bounceIn'">
      <Title content="SKILLS"></Title>
      <Label title="工作技能" text="HTML5、CSS3、SCSS、Javascript、AJAX、Vue、Vuex、Webpack、Git、NodeJS、WebSocket、MySQL、MongoDB、PHP、Linux、Docker、CI/CD、AWS"></Label>
      <div style="display:flex;flex-wrap:wrap;">
        <Label icon="icon-check-square-regular" title="開發過大型系統" style="width:calc(100% / 3);" width="100%"></Label>
        <Label icon="icon-check-square-regular" title="可獨立作業" style="width:calc(100% / 3);" width="100%"></Label>
        <Label icon="icon-check-square-regular" title="抗壓性高" style="width:calc(100% / 3);" width="100%"></Label>
      </div>
    </div>
    <div class="indexItem PROFILE animate__animated" v-scrollIn="'animate__bounceIn'">
      <Title content="PROFILE"></Title>
      <div class="PROFILEContent">
        我是畢業於華夏科技大學資管系五專部的鄭愉，就讀五專期間對程式設計及網頁深感興趣，因此開始自學前端技術，如HTML、CSS、Javascript、AJAX、PHP等技術... 並且在五專四年級的專題報告應用所學，一個人打造了個"線上測驗平台"，並且獲得評審高分，專題報告分數為全班第二，從此對這方面信心大增，想把所有時間精力投入在寫程式上，因此畢業後選擇以後馬上投入職場，不考慮繼續升學。<br><br>五專畢業以後進入了小驢行股份有限公司，開始接觸了前端框架Vue，以及各種前端的前沿技術，比如動態路由、打包及模組化設計等等... 在那邊也參與開發過許多專案，包括大型系統的前台、後台的獨立開發，經過一年的磨練學會了非常多東西、克服了非常多困難，為我前端身涯當中非常重要的里程碑。<br><br>
        之後進入了中華龍網實力更是大幅成長，也逐漸往全端工程師的方向發展，除了維護及開發新產品，更是學到了AWS、Linux、Docker、CI/CD等等實用技能，這些都是許多前端工程師缺乏的技能，讓我一個專案從規劃、開發、建置環境到部署上線都可以一手包辦，相信必定能成為貴公司傑出的助力!
      </div>
    </div>
    <div class="indexItem PORTFOLIO animate__animated" v-scrollIn="'animate__bounceIn'">
      <Title content="PORTFOLIO  (作品由新到舊)"></Title>
      <PortfolioCard class="animate__animated" v-for="(item,index) in PortfolioCardList" :key="index" :data="item" v-scrollIn="'animate__bounceInLeft'"></PortfolioCard>
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
        {img:"",url:"https://ntpc.donkeymove.com/Client/login",title:"長照交通接送平台",content:"進入小驢行公司的第一個專案，是個能供符合新北市長照交通條件的人預約接送的平台，廣泛的使用Google Map API以用來顯示地圖、畫出路線、計算車資，不僅使用前端框架Vue，也充分利用了Webpack模組化特點，讓程式碼不冗長、易維護、系統效能大幅提升，也能支援IE瀏覽器。",use:"HTML、CSS、Javascript、Vue、Webpack、Google API"},
        {img:"",url:"https://enroll.wzu.edu.tw/WZActivityFront/#/Member/login",title:"大學校務活動系統",content:"著重於活動報名功能的校務系統網站，也使用了Vuex來做全域管理，最大的特色為報名表單為動態的，使用者可於後台設定活動的報名表單，比如欄位名稱、欄位類型、欄位選項、是否必填等等... 然後會反映到前台的活動報名頁面",use:"HTML、CSS、SCSS、Javascript、Vue、Vuex、Webpack、Google API"},
        {img:"",url:"https://iga33087.github.io/ExcelTODEList/",title:"Excel TODOList",content:"以「如果只是個基本的TODOList，那就太簡單了」為發想而製作的系統，以基本的TODOList為基礎再加入xlsx、xls、ods、csv的匯入匯出功能，在兩天內製作出來的系統",use:"HTML、CSS、SCSS、Javascript、Vue、Webpack"},
        {img:"",url:"https://iga33087.github.io/maskMap/",title:"口罩地圖",content:"主要使用leaflet的口罩地圖，可查到哪個縣市及地區有多少家藥局跟口罩",use:"HTML、CSS、SCSS、Javascript、Vue、Webpack、leaflet"},
        {img:"",url:"https://iga33087.github.io/metaMap/#/Week",title:"天氣預報",content:"以Vue加上D3製作出來的天氣預報系統，拉動上方的拉桿即可將天氣資料反映在地圖上，API為中央氣象局所提供",use:"HTML、CSS、SCSS、Javascript、Vue、Webpack、D3"},
        {img:"",url:"https://yutest33087.com/",title:"愉之家 (部落格系統)",content:`
          這是自己做出來的一整套包含使用者前台、管理者後台、後端API的部落格系統，起初的目的是想活用在中華龍網所學習到的知識，嘗試自己一個人從無到有，從專案的規劃、設計、寫前端、寫後端，到建置伺服器、買域名、正式上線、掛憑證都自己一手包辦，這套部落格系統功能雖然簡單、頁面雖然簡陋，但是對我來講是非常寶貴的經驗，因為過程中我做到了許多前端工程師都做不到的事。<br/><br/>
          既然是部落格，那麼重點就在於「頁面要能讓使用者找到」，選用Nuxt是考量到傳統的SPA網頁無法讓搜尋引擎有效的爬到內容，因此必須使用支援SSR的框架來實現，<br/><br/>
          登入系統嘗試加入Google、Facebook的第三方登入功能，在盡可能不收集使用者個資下完成登入，<br/><br/>
          伺服器的部分我選用了AWS的Lightsail服務建立了一個雲端的Linux VM，作業系統為Ubuntu，再用Route 53來買下Domain，<br/><br/>
          部屬方式是把前端程式、後端程式打包成Docker Image，再事先寫好Nginx的設定檔，利用反向代理來將服務串在同一個Domain之下，<br/><br/>
          接著用Docker Compose連同資料庫( MongoDB )在雲端VM一次把整個系統建置起來，設定完DNS後，最後再用Certbot來申請免費的SSL憑證，網站正式上線。<br/><br/>
          由於是第一個所有東西都自己做的專案，也深刻感受到一個人負責全部環節有多麼不容易，途中遇到了許多挑戰，一一克服之後，變成了自己非常寶貴的經驗。`
          ,use:"HTML、CSS、SCSS、Javascript、Vue、Nuxt、Node.js、MONGODB、AWS、DOCKER、NGINX、CERTBOT、GOOGLE OAUT"},
      ]
    }
  },
  created() {
    //this.$api.addView()
    this.PortfolioCardList=this.PortfolioCardList.reverse()
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