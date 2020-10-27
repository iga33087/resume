<template>
  <div class="chartBox" :class="{'isOpen':isOpen}">
    <div class="chartBoxTitle" @click="changeOpen">
      <div class="chartBoxTitleLight" :style="{'background-color':isOnline ? '#A8D8B9' : ''}"></div>
      <div class="chartBoxTitleText">即時聊天({{isOnline ? '在線中' : '離線中'}})</div>
      <div class="chartBoxTitleIconsBox">
        <i class="chartBoxTitleIconsBoxItem" :class="isOpen ? 'icon-window-minimize-regular' : 'icon-window-maximize-regular'"></i>
      </div>
    </div>
    <div class="chartBoxContent" ref="chartBoxContent">
      <div class="chartBoxContentItem" v-for="(item,index) in history" :key="index" :class="{'opposite':item.opposite}">
        <div class="chartBoxContentItemTime">{{$global.YYYYMMDDHHmm(item.time)}}</div>
        <div class="chartBoxContentItemContent">{{item.content}}</div>
      </div>
    </div>
    <div class="chartBoxButtonList">
      <input type="text" class="chartBoxButtonListInput" v-model="msg" @keyup.enter="sub">
      <div class="chartBoxButtonListSub" @click="sub">送出</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:"",
      socketId:"",
      isOnline:false,
      isOpen:false,
      history:[],
    }
  },
  sockets: {
    connect() {
      console.log('聊天室準備就緒')
      this.socketId=this.$socket.id
      this.sockets.subscribe(this.socketId,(data)=> {
        this.history.push(data)
        this.$nextTick(()=> {
          this.$refs.chartBoxContent.scrollTop=9999999
        })
      })
    },
    disconnect() {
      console.log('聊天室已斷線')
    },
    getAdminOnline(data) {
      this.isOnline=data
    }
  },
  methods: {
    changeOpen() {
      this.isOpen=!this.isOpen
      this.$nextTick(()=> {
        if(this.isOpen) {
          this.newCount=0
          this.$refs.chartBoxContent.scrollTop=9999999
        }
      })
    },
    sub() {
      if(!this.isOnline) {
        alert("離線狀態時我收不到訊息喔，若想約面試可以使用人力銀行的私信功能來連絡我喔^_^")
        return 0
      }
      if(!this.msg) return 0
      let data={msg:this.msg,opposite:false}
      this.$socket.emit("postMsg",data)
      this.msg=""
    }
  }
}
</script>