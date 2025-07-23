<template>
  <div class="cardBox">
    <div class="cardBoxInner">
      <div class="cardBoxInnerTitle">{{title}}</div>
      <div class="cardBoxInnerBorder"></div>
      <div class="cardBoxInnerContent">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>