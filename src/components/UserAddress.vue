<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 22px">收货地址</span>
        <el-button style="float: right; padding: 3px 0;font-size: 15px" type="text" @click="addAddress">添加</el-button>
      </div>
      <span style="visibility: hidden;color: crimson;font-size: 15px" ref="pleAdd">请先添加收货地址</span>
      <div ref="item">
        <div v-for="(item,index) in addressList" :key="index" class="text item">
          <span style="font-size: 18px">{{item}}</span>
          <span style="margin-left: 85%">
            <el-tooltip content="删除" placement="top">
              <el-popconfirm
                icon="el-icon-info"
                icon-color="red"
                title="确定删除吗？"
                @confirm="doDel(item)">
                <el-button type="danger" icon="el-icon-delete" circle slot="reference"></el-button>
              </el-popconfirm>
            </el-tooltip>
          </span>
          <div><el-divider></el-divider></div>
        </div>
      </div>
    </el-card>
    <el-dialog
      title="添加收货地址"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <el-form :model="formData">
        <el-form-item
          label="选择省市"
          prop="value"
          :rules="[
            {required: true,message: '省市不能为空'}
          ]">
          <div class="block">
            <el-cascader
              ref="cascaderAddr"
              type="value"
              v-model="formData.value"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"></el-cascader>
          </div>
        </el-form-item>
        <br>
        <el-form-item
          label="请输入精确地址"
          prop="input"
          :rules="[
            { required: true, message: '地址不能为空'},
          ]">
          <el-input
            type="input"
            placeholder="请输入内容"
            v-model="formData.input"
            clearable
            style="width: 50%">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="doAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {_areaDict} from '../assets/area.js'
export default {
  name: "UserAddress",
  data(){
    return{
      addressList:[],
      options: _areaDict,
      dialogVisible: false,
      newAddress: "",
      formData: {
        value: [],//级联选择器选中的值
        input: '',//精确地址的值
      }
    }
  },
  methods:{
    addAddress: function () {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleChange(value) {
      //console.log(value);
      console.log(this.$refs['cascaderAddr'].getCheckedNodes()[0].pathLabels);
      this.$refs['cascaderAddr'].getCheckedNodes()[0].pathLabels.forEach((item)=>{
        this.newAddress += item
      })
    },
    doAdd: function () {
      console.log(this.formData.value);
      if (this.formData.value.length === 0){
        this.$message({
          message: "请选择省份和城市以及所住区",
          type: "error"
        })
      }else{
        this.newAddress = this.newAddress + this.formData.input
        console.log(this.newAddress);
        this.$http('addAddress',{params:{id:localStorage.getItem("id"), address: this.newAddress}}).then(res=>{
          console.log(res);
          if (res.data === 1){
            this.dialogVisible = false
            this.$notify({
              title: '成功',
              message: '添加成功',
              type: 'success'
            });
            this.doCreate()
          }
        })
      }
    },
    doCreate() {
      this.$http('getAddressById',{params:{id:localStorage.getItem("id")}}).then(res=>{
        var split = res.data.split("|");
        if (split.length === 0){
          this.$nextTick(()=>{
            this.$refs.pleAdd.style.visibility = "visible"
            this.$refs.item.style.visibility = "hidden"
          })
        }else{
          split.pop();
          this.addressList = split
        }
      })
    },
    doDel(item){
      console.log(item);
      this.$http('deleteAddressById',{params:{id: localStorage.getItem("id"),address: item}}).then(res=>{
        if (res.data === 1){
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success'
          });
          this.doCreate()
        }else{
          this.$notify({
            title: '失败',
            message: '删除失败',
            type: 'error'
          });
        }
      })
    }
  },
   created() {
    this.doCreate()
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
}
</style>
