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
      <Label title="工作經歷">
        <div v-for="(item,index) in companyList" :key="index">{{item.position}} ({{item.title}}) {{item.time}}</div>
      </Label>
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
      <div class="PROFILEContent" v-html="profile" />
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
      companyList:[
        {title:'小驢行股份有限公司',position:'前端工程師',time:'2019/8/20 ~ 2020/9/30'},
        {title:'中華龍網股份有限公司',position:'前端工程師',time:'2021/3/2 ~ 2022/4/6'},
        {title:'合華科技股份有限公司',position:'前端工程師',time:'2022/4/19 ~ 2022/12/26'},
        {title:'新漢股份有限公司 - 椰棗科技',position:'高級工程師',time:'2023/5/08 ~ 仍在職'},
      ],
      profile:`
      我是畢業於華夏科技大學資訊管理系五專部的鄭愉，目前已經有5年的網頁開發工作經驗(3年前端、2年全端)，熟悉Vue3、Nodejs、MongoDB、Webpack、Vite、Linux、Docker、CI/CD等等技術。<br/><br/>

      就讀五專期間，因相關課程而對網頁開發以程式設計深感興趣，網頁開發尤其擅長，五專期間的專題報告甚至有自己一個人開發線上系統的經驗。<br/><br/>
      
      畢業以後，想把自己的時間精力全部投入自己熱愛的事，因此馬上投入職場，於小驢行擔任前端工程師一年，接觸到了Vue、SCSS、RWD、Webpack、前後端分離等等現代化網頁開發的技術，在那邊主要開發派車系統及校務系統，學到了非常多經驗，比如用Google API估算行車路程來計算車資、製作可動態生成表單的校務系統、以及解決瀏覽器相容性問題等等... 克服了非常多困難。<br/><br/>
      
      之後進入到中華龍網的一年多實力更是大幅成長，學到了AWS、Linux、Docker、CI/CD等等重要技能，這些都是許多前端工程師缺乏的技能，讓我一個專案從規劃、開發、建置環境到部署上線都可一手包辦。<br/><br/>
      
      在合華科技股份有限公司也學到了Vue3、Pinia、Vite等等前沿的網頁技術及工具。<br/><br/>
      
      之後來到了新漢股份有限公司的子公司「椰棗科技」，雖職稱為高級工程師，不過做的是全端工程師的職務，在那邊更是得到了一展長才的機會，充分利用自己累積的經驗及專業，負責公司大大小小的專案及任務，如:幫原本前後端混合的系統改善成前後端分離、配合AI工程師開發新產品並實現Docker化、透過CI/CD自動產生更新包來更新產品韌體、配合公司的參展開發出專用的儀表板等等...<br/><br/>
      
      在椰棗科技我主要開發資安閘道器以及其管理系統，也了解到網頁如何跟系統韌體互動，如:如何透過Linux指令去抓出設備的監控指標(記憶體占用率、CPU占用率、系統負載等等)並呈現在前端、如何將底層的syslog轉換成json並且呈現在前端、如何寫出一個可以調整系統的IP、DNS、Gateway、防火牆等等數值的全端專案等等...<br/><br/>
      
      投入職場以來，我對網頁開發的熱情始終如一，是個走到哪學到哪、一步一腳印的人，希望我的能力能為貴公司帶來最大的效益!
      `,
      PortfolioCardList:[
        {img:"",url:"https://iga33087.github.io/",title:"遊戲王卡生產器",content:"做好玩的東西XD 是個能上傳圖片、選好外框、輸入文字，就能生產出遊戲王卡並且下載下來的東西",use:"HTML、CSS、Javascript"},
        //{img:"",url:"https://ntpc.donkeymove.com/Client/login",title:"長照交通接送平台",content:"進入小驢行公司的第一個專案，是個能供符合新北市長照交通條件的人預約接送的平台，廣泛的使用Google Map API以用來顯示地圖、畫出路線、計算車資，不僅使用前端框架Vue，也充分利用了Webpack模組化特點，讓程式碼不冗長、易維護、系統效能大幅提升，也能支援IE瀏覽器。",use:"HTML、CSS、Javascript、Vue、Webpack、Google API"},
        {img:"",url:"https://enroll.wzu.edu.tw/WZActivityFront/#/Member/login",title:"大學校務活動系統",content:"著重於活動報名功能的校務系統網站，也使用了Vuex來做全域管理，最大的特色為報名表單為動態的，使用者可於後台設定活動的報名表單，比如欄位名稱、欄位類型、欄位選項、是否必填等等... 然後會反映到前台的活動報名頁面",use:"HTML、CSS、SCSS、Javascript、Vue、Vuex、Webpack、Google API"},
        {img:"",url:"https://iga33087.github.io/ExcelTODEList/",title:"Excel TODOList",content:"以「如果只是個基本的TODOList，那就太簡單了」為發想而製作的系統，以基本的TODOList為基礎再加入xlsx、xls、ods、csv的匯入匯出功能，在兩天內製作出來的系統",use:"HTML、CSS、SCSS、Javascript、Vue、Webpack"},
        {img:"",url:"https://iga33087.github.io/maskMap/",title:"口罩地圖",content:"主要使用leaflet的口罩地圖，可查到哪個縣市及地區有多少家藥局跟口罩",use:"HTML、CSS、SCSS、Javascript、Vue、Webpack、leaflet"},
        //{img:"",url:"https://iga33087.github.io/metaMap/#/Week",title:"天氣預報",content:"以Vue加上D3製作出來的天氣預報系統，拉動上方的拉桿即可將天氣資料反映在地圖上，API為中央氣象局所提供",use:"HTML、CSS、SCSS、Javascript、Vue、Webpack、D3"},
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
