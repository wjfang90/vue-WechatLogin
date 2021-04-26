<template>
  <div>
    <h3>1.url获取二维码方式</h3>
    <a :href="getQrCdoeUrl">获取登录二维码</a>

    <h3>2.js获取二维码方式</h3>
    <!--5. 在页面上引用wxlogin 组件-->
    <wxlogin 
      :appid="this.appid"
      :scope="this.scope"
      :redirect_uri="this.redirect_uri"
      :state="this.state"
      :href="this.href"
    ></wxlogin>
  </div>
</template>

<script>
//1. npm i vue-wxlogin -D
//2. 导入 vue-wxlogin
import wxlogin from "vue-wxlogin";

let appid = "appid_value";
let redirect_uri = encodeURI("http://192.168.4.179:8058/api/login");
let scope = "snsapi_login";
let state = "fang";

let getQrCdoeUrl = `http://open.weixin.qq.com/connect/qrconnect?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;


export default {
  name: "login",
  data() {
    return {
      appid: appid,
      scope: scope, //应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写snsapi_login即可
      redirect_uri: redirect_uri, //重定向地址，需要进行UrlEncode
      state: state, //用于保持请求和回调的状态
      href: "https://baidu.com/Content/wechatimg.css", //自定义样式链接
      getQrCdoeUrl: getQrCdoeUrl,
    };
  },
  components: {
    //3. 设置wx组件到 login.vue组件
    wxlogin,
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
