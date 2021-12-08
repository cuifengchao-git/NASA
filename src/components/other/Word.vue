<template>
  <div class="">
    <main-layout>
      <main-header slot="header"></main-header>
      <div class="kana-main" slot="body-main">
        <div>
          
          <el-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</el-button>
        </div>

        
        <!-- 
          el-drawer: Drawer抽屉
          direction: Drawer 打开的方向；rtl / ltr / ttb / btt；
        -->
        <el-drawer 
          title="新增词汇"
          :visible.sync="dialog"
          direction="rtl"
          size="30%">
          <div>ddddddd</div>
        </el-drawer>
      </div>
      <main-menu slot="body-left"></main-menu>
      <main-footer slot="footer"></main-footer>
    </main-layout>
  </div>
</template>

<script>
export default {
  name: 'Word',
  data () {
    return {
      dialog: false
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
