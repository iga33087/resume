<template>
  <div>
    <Header />
    <div class="content">
      <CardBox class="c1" title="INFO">
        <div class="c1-1">111111</div>
      </CardBox>
      <CardBox class="c2 rightCard" title="SKILLS">
        111111
      </CardBox>
      <CardBox class="c3" title="PROFILE">
        {{profileText}}
      </CardBox>
      <CardBox class="c4 rightCard" title="PORTFOLIO">
        111111
      </CardBox>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {ref,onMounted} from 'vue'
import Header from './components/Header.vue'
import CardBox from './components/CardBox.vue'
gsap.registerPlugin(ScrollTrigger)

const profileText=ref(`
我是畢業於華夏科技大學資管系五專部的鄭愉，就讀五專期間對程式設計及網頁深感興趣，因此開始自學前端技術，如HTML、CSS、Javascript、AJAX、PHP等技術... 並且在五專四年級的專題報告應用所學，一個人打造了個"線上測驗平台"，並且獲得評審高分，專題報告分數為全班第二，從此對這方面信心大增，想把所有時間精力投入在寫程式上，因此畢業後選擇以後馬上投入職場，不考慮繼續升學。

五專畢業以後進入了小驢行股份有限公司，開始接觸了前端框架Vue，以及各種前端的前沿技術，比如動態路由、打包及模組化設計等等... 在那邊也參與開發過許多專案，包括大型系統的前台、後台的獨立開發，經過一年的磨練學會了非常多東西、克服了非常多困難，為我前端身涯當中非常重要的里程碑。

之後進入了中華龍網實力更是大幅成長，也逐漸往全端工程師的方向發展，除了維護及開發新產品，更是學到了AWS、Linux、Docker、CI/CD等等實用技能，這些都是許多前端工程師缺乏的技能，讓我一個專案從規劃、開發、建置環境到部署上線都可以一手包辦，相信必定能成為貴公司傑出的助力!
`)

onMounted(()=> {
  gsap.set('.c1', {x:-500,opacity:0})
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.c1',
      start: "top",
      scrub: true,
      pin: true,
    }
  })
  tl.to(".c1", {x:0,opacity:1})
  tl.to(".c1-1", {x:300})
  /*gsap.to('.c2', { 
    x: -300,
    scrollTrigger: {
      trigger: '.c2',
      start: "top",
      scrub: true,
      pin: true,
    }
  })*/
})
</script>
