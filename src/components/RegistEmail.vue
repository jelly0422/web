<template>
  <div id="out">
    <div id="login">
      <div style="margin: auto">
        <h3></h3>
      </div>

      <div style="margin-left: 20px">
        <h2>注册新账号</h2>
      </div>

      <div style="padding-right: 70px">
        <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="100px"
          class="demo-dynamic"
        >
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')"
              >立即注册</el-button
            >
            <el-button @click="resetForm('dynamicValidateForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistEmail",
  data() {
    return {
      dynamicValidateForm: {
        email: "",
      },
    };
  },

  methods: {
    open1() {
      this.$message({
        message: "验证码已发送",
        type: "success",
      });
    },

    open2() {
      this.$message.error("邮箱已存在");
    },
    //提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .get("email?email=" + this.dynamicValidateForm.email)
            .then((res) => {
              if (res.data == 1) {
                this.open1();
                this.$router.push("/regist/check");
              } else {
                this.open2();
              }
            });
        } else {
          return false;
        }
      });
    },
    //重置
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
