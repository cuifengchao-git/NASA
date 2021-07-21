<template>
  <div class="menu-main">
    <el-menu
      background-color="#112B47"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="$route.path"
      router
    >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-paperclip"></i>
          <span>其他</span>
        </template>
        <el-menu-item-group>
          <template slot="title">日语</template>
          <el-menu-item index="/other-kana">五十音图</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.menu-main{
    background-color: #112B47;
    width: 100%;
    height: 100%;
}
</style>
