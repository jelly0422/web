<template>
  <div id="out">
    <div id="login">
      <div style="margin: auto">
        <h3></h3>
      </div>

      <div style="margin-left: 20px">
        <h2>请输入密码</h2>
      </div>

      <div style="padding-right: 70px">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="密码">
            <el-input v-model="formLabelAlign.psw"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('formLabelAlign')"
              >注册</el-button
            >
            <el-button @click="resetForm('formLabelAlign')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistPsw",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        psw: "",
      },
    };
  },

  methods: {
    open1() {
      this.$message({
        message: "注册成功",
        type: "success",
      });
    },
    open2() {
      this.$message.error("注册失败");
    },
    submitForm(formName) {
      this.$http.get("psw?psw=" + this.formLabelAlign.psw).then((res) => {
        console.log(res.data);
        if (res.data == 1) {
          this.open1();
          this.$router.push("/login");
        } else {
          this.open2();
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
