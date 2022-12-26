<template>
  <div class="portfolioCard">
    <div class="portfolioCardInfo">
      <div class="portfolioCardInfoTitle">
        <div>{{data.title}}</div>
        <a class="portfolioCardInfoTitleUrl" :href="data.url" target="_blank">點擊前往</a>
      </div>
      <div class="portfolioCardInfoContent" v-html="data.content"></div>
      <div class="portfolioCardInfoUse">
        <div class="portfolioCardInfoUseLabel">使用技術:</div>
        <div class="portfolioCardInfoUseContent">
          {{data.use}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["data"]
}
</script>