<template>
  <div class="login-wrap">
    <div class="login-title">music 后台</div>
    <div class="login-form">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="密码"
            @keyup.enter.native="submitForm('ruleForm')"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="login-btn">
        <el-button type="primary" @click="submitForm">登录</el-button>
      </div>
      <p style="font-size:12px;line-height:30px;color:#999;">
        Tips: 用户名密码不能为空
      </p>
    </div>
  </div>
</template>

<script>
import { getLoginStatus } from "../api/index";
import { mixin } from "../mixins";
export default {
  mixins: [mixin],
  data: function() {
    return {
      ruleForm: {
        username: "root",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", tigger: "blur" }],
        password: [{ required: true, message: "请输入密码", tigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      let params = new URLSearchParams()
      params.append('name', this.ruleForm.username)
      params.append('password', this.ruleForm.password)
      getLoginStatus(params)
        .then((res) => {
          if (res.code === 1) {
            this.$router.push("/Info");
            this.notify("欢迎回来", "success");
          } else {
            this.notify("登录失败", "error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  background: url("../assets/img/background.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.login-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
}
.login-form {
  position: absolute;
  height: 160px;
  width: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 5px;
  background: #fff;
  background: rgba(0, 0, 0, 0.2);
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
