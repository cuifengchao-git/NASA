<template>
  <div class="menu-main">
    <el-menu
      background-color="#1e1b33"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-paperclip"></i>
                <span>其他</span>
            </template>
            <el-menu-item-group>
                <template slot="title">日语</template>
                <el-menu-item index="1-1">五十音图</el-menu-item>
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
    background-color: #1e1b33;
    width: 100%;
    height: 100%;
}
</style>
