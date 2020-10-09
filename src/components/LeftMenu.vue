<template>
  <div class="leftMenu">
    <div class="leftMenuBox">
      <div class="leftMenuBoxItem" :class="{'isChange':isChange=='.info'}" @click="move('.info')">INFO</div>
      <div class="leftMenuBoxItem" :class="{'isChange':isChange=='.SKILLS'}" @click="move('.SKILLS')">SKILLS</div>
      <div class="leftMenuBoxItem" :class="{'isChange':isChange=='.PROFILE'}" @click="move('.PROFILE')">PROFILE</div>
      <div class="leftMenuBoxItem" :class="{'isChange':isChange=='.PORTFOLIO'}" @click="move('.PORTFOLIO')">PORTFOLIO</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChange:""
    }
  },
  methods: {
    move(x) {
      let ele=document.querySelectorAll(x)[0]
      ele.scrollIntoView({behavior: "smooth"});
      this.isChange=x
    }
  }
}
</script>