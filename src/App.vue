<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "./api";
import openai from "openai-sdk";
export default {
  /* eslint-disable */
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    this.getSignature();
    // this.testSDK()
  },
  data() {
    return {
      signature: ""
    };
  },
  methods: {
    // https://github.com/WeChatAI/openai-sdk
    // https://developers.weixin.qq.com/doc/aispeech/platform/INTERFACEDOCUMENT.html
    async getSignature() {
      const res = await axios.post(
        "/openapi/sign/eQtfEhzKUvgVXkaudtzJWhbpbr6HEP",
        {
          userid: 123414
        }
      );
      this.signature = res.data.signature;
      await axios.post("/openapi/aibot/eQtfEhzKUvgVXkaudtzJWhbpbr6HEP", {
        signature: this.signature,
        query: "价格多少",
        // debug
        env: "debug"
      });
    },
    testSDK() {
      let { init, chat, nlp } = openai;
      console.log("!", init)
      // 这下面应该要配置好TOKEN和encode
      init({
        TOKEN: "eQtfEhzKUvgVXkaudtzJWhbpbr6HEP",
        EncodingAESKey: "f44I7GWgvN3dU43fqiwZLubfzSO3IgMBumthIjHSaeY"
      })
      chat({
        username: "uid",
        msg: "你好吗"
      }).then(res => {
          console.log('机器人返回:', res)
      }, res => {
          console.log('reject res:', res)
      }).catch(e => {
          console.log('error', e)
      })
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
