<template>
  <div class="login">
    <div class="box">
      <div class="inner">
        <div class="user">
          <input type="text" v-model="username" placeholder="用户名" />
          <div class="v1" v-html="yzuser"></div>
        </div>
        <div class="password">
          <input type="password" v-model="mima" placeholder="密码" />
          <div class="v2" v-html="yama"></div>
        </div>
        <div class="btnlogin" @click="sendlogin">登录</div>
        <div class="btnlogin" @click="showreg">注册用户</div>
        <div class="btnlogin" @click="showusers">游客登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import socket from '../socket'
export default {
  props: ["togglechooseuser", "togglelogin", "toggleregistershow"],
  data() {
    return {
      username: "",
      mima: "",
      yzuser: "",
      yama: ""
    };
  },
  methods: {
    sendlogin() {
      let obj = {
        username: this.username,
        mima: this.mima
      };
      axios.post("http://192.168.124.3:3000/api/login", obj).then(data => {
        if (data.data.state == "ok") {
          let item = data.data.dbs;
          if (item.socketid !== "null") {
            new Promise((resolve, reject) => {
              this.$root.$children[0].togglechoosepopshow(
                true,
                "当前用户已在线,是否登录"
              );
              let time = setInterval(() => {
                if (this.$root.$children[0].ischoosepopshow == false) {
                  clearInterval(time);
                  resolve();
                }
              }, 50);
            }).then(() => {
              if (!this.$root.$children[0].choosepopbacktrue) {
                return;
              } else {
                this.$root.me = item;
                localStorage.chatme = JSON.stringify(item);
                socket.emit("login", item);
                this.togglelogin(false)
                return;
              }
            });
          } else {
            this.$root.me = item;
            localStorage.chatme = JSON.stringify(item);
            socket.emit("login", item);
            this.togglelogin(false)
          }
        } else {
          this.yzuser = "用户或密码错误";
          this.yama = "用户或密码错误";
        }
      });
    },
    showusers() {
      this.togglechooseuser(true);
      this.togglelogin(false);
    },
    showreg() {
      this.toggleregistershow(true);
      this.togglelogin(false);
    }
  }
};
</script>

<style scoped>
.login {
  font-size: 14px;
  font-weight: 900;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 990;
  background-color: lightblue;
}
.box {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  height: 70%;
  width: 70%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.inner {
  margin-top: 20%;
}
.user {
  padding-bottom: 20px;
  position: relative;
}
input {
  height: 30px;
  border-radius: 10px;
}
input:focus {
  outline: none;
  background-color: aquamarine;
}
.password {
  position: relative;
  padding-bottom: 20px;
}
.user .v1,
.password .v2 {
  text-align: center;
  padding-top: 10px;
  color: red;
}
.btnlogin {
  line-height: 30px;
  margin-bottom: 20px;
  width: 150px;
  border-radius: 15px;
  text-align: center;
  background-color: white;
  margin-left: 10px;
}
</style>