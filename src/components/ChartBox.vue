<template>
  <div class="chartBox">
    <div class="chartBoxTitle">
      <div class="chartBoxTitleLight" :style="{'background-color':isOnline ? '#A8D8B9' : ''}"></div>
      <div class="chartBoxTitleText">{{isOnline ? '在線中' : '離線中'}}</div>
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
      alert("聊天室已斷線")
    },
    getAdminOnline(data) {
      this.isOnline=data
    }
  },
  methods: {
    sub() {
      if(!this.msg) return 0
      let data={msg:this.msg,opposite:false}
      this.$socket.emit("postMsg",data)
      this.msg=""
    }
  }
}
</script>