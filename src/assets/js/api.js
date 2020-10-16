import axios from "axios"

let baseUrl=process.env.VUE_APP_OIDC_BASEURL

export default {
  addView() {
    return axios.get(baseUrl+"add").then(res=>res.data)
  }
}