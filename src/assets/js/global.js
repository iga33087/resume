import moment from "moment"

export default {
  getOld(birthDay) {
    let now=new Date().getTime()
    birthDay=new Date(birthDay).getTime()
    let num=Math.floor(((now-birthDay)/31536000)*0.001)
    return num
  },
  YYYYMMDD(x) {
    return moment(x).format("YYYY/MM/DD")
  },
  YYYYMMDDHHmm(x) {
    return moment(x).format("YYYY/MM/DD HH:mm")
  }
}