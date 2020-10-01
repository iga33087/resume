<template>
  <div class="label">
    <div class="labelTitle" :style="{'width':width}">
      <i :class="icon" v-if="icon"></i>  
      {{title}} 
    </div>
    <div class="labelText" :style="{'width':'calc(100% - '+width+')'}" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type:String,
      default:"150px"
    },
    title: {
      type:String
    },
    text: {
      type:String
    },
    icon: {
      type:String
    }
  }
}
</script>