<template>
  <div class="register">
    <div class="outer">
      <div class="back" @click="regshow">返回</div>
      <div class="inner">
        <input type="text" placeholder="用户名" v-model="username" />
        <div class="v1" v-html="yzuser"></div>
        <input type="password" placeholder="密码" v-model="mima" />
        <div class="v2" v-html="yzmima"></div>
        <input type="password" placeholder="确认密码" v-model="qrma" />
        <div class="v3" v-html="yzqr"></div>
        <div class="but" @click="sendreg">注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["toggleregistershow", "togglelogin", "togglepopshow"],
  data() {
    return {
      username: "",
      mima: "",
      qrma: "",
      yzuser: "",
      yzmima: ""
    };
  },
  computed: {
    yzqr() {
      if (this.mima !== this.qrma) return "输入密码不一致";
      else return "";
    }
  },
  methods: {
    regshow() {
      this.toggleregistershow(false);
      this.togglelogin(true);
    },
    async sendreg() {
      if (this.yzqr == "" && this.username != "" && this.mima != "") {
        let user = {
          username: this.username,
          mima: this.mima
        };
        axios.post("http://192.168.124.3:3000/api/register", user).then(data => {
          if (data.data == "ok") {
            this.togglepopshow("注册成功");
            this.regshow();
          } else {
            this.yzuser = "用户名重复";
          }
        });
      }
    }
  }
};
</script>

<style  scoped>
.register {
  height: 100vh;
  width: 100vw;
  background-color: lightblue;
  position: absolute;
  z-index: 899;
}
.outer {
  width: 60%;
  height: 60%;
  background-color: lightblue;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.inner {
  width: auto;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  height: 30px;
  width: 70%;
  border-radius: 20px;
}
input:focus {
  outline: none;
  background-color: aquamarine;
}
.v1,
.v2,
.v3 {
  margin-bottom: 20px;
  color: red;
  font-size: 14px;
}
.but {
  width: 50%;
  line-height: 30px;
  background-color: white;
  border-radius: 20px;
  text-align: center;
}
.back {
  width: 50px;
  background-color: rgb(115, 165, 214);
  text-align: center;
  border-radius: 10px;
}
</style>