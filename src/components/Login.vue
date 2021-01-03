<template>
  <div id="out">
    <div id="login">
      <div style="margin: auto">
        <h3></h3>
      </div>

      <div style="margin-left: 20px">
        <h2>登陆</h2>
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

          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'密码'"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true,
              message: '密码不能为空',
              trigger: 'blur',
            }"
          >
            <el-input v-model="domain.value"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')"
              >提交</el-button
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
  name: "Login",

  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],

        email: "",
      },
    };
  },

  methods: {
    open1() {
      this.$message({
        message: "登陆成功",
        type: "success",
      });
    },

    open2() {
      this.$message.error("邮箱或密码有误");
    },
    //提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.get("login?email="+this.dynamicValidateForm.email+"&password="+this.dynamicValidateForm.domains[0].value).then((res) => {
            // if (res.data.status == "success") {
            //   this.open1();
            //   this.$router.push("/home");
            //   localStorage.setItem("name", res.data.name);
            // } else {
            //   this.open2();
            //   this.resetForm("ruleForm");
            // }

            let flag = res.data.flag;
            if(flag){
              this.open1();
              localStorage.setItem("email",res.data.email);
              this.$router.push("/");
            }else{
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
