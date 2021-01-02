<template>
  <div id="out">
    <div id="login">
      <div style="margin: auto">
        <h3></h3>
      </div>

      <div style="margin-left: 20px">
        <h2>请输入验证码</h2>
      </div>

      <div style="padding-right: 70px">
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="验证码"
            prop="age"
            :rules="[
              { required: true, message: '验证码不能为空' },
              { type: 'number', message: '验证码必须为数字值' },
            ]"
          >
            <el-input
              type="age"
              v-model.number="numberValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('numberValidateForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistCheck",
  data() {
    return {
      numberValidateForm: {
        age: "",
      },
    };
  },

  methods: {
    open1() {
      this.$message({
        message: "验证成功",
        type: "success",
      });
    },
    open2() {
      this.$message.error("验证失败请重新输入");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .get("check?code=" + this.numberValidateForm.age)
            .then((res) => {
              console.log(res.data);
              if (res.data == 1) {
                this.open1();
                this.$router.push("/regist/psw");
              } else {
                this.open2();
              }
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
#out {
  height: 100vh;
}
#login {
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px #000;
  display: grid;
  grid-auto-rows: 1fr 1fr 3fr;
}
</style>
