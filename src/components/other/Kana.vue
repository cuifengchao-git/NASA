<template>
  <div class="">
    <main-layout>
      <main-header slot="header"></main-header>
      <div class="kana-main" slot="body-main">
        <div class="table-top">
          <!-- 上左-->
          <div class="table-left-top">
            <table>
              <tbody>
                <tr v-for="trinx of 6" :key="trinx">
                  <td v-for="tdinx of 6" :key="tdinx">222</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 上右-->
          <div class="table-right-top">
            <table>
              <tbody>
                <tr v-for="trinx of 6" :key="trinx">
                  <td v-for="tdinx of 6" :key="tdinx">222</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="table-bottom">
          <!-- 下左-->
          <div class="table-bottom-top">
            <table>
              <tbody>
                <tr v-for="trinx of 6" :key="trinx">
                  <td v-for="tdinx of 6" :key="tdinx">222</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 下右-->
          <div class="table-bottom-top">
            <table>
              <tbody>
                <tr v-for="trinx of 6" :key="trinx">
                  <td v-for="tdinx of 6" :key="tdinx">222</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <main-menu slot="body-left"></main-menu>
      <main-footer slot="footer"></main-footer>
    </main-layout>
  </div>
</template>

<script>
export default {
  name: 'Kana',
  data () {
    return {
    }
  },
  methods: {
    handleBefore(){
      console.log("handleBefore:",this.isTop)
      if(!this.isTop){
        this.isTop = true
      }
    },
    handleAfter(){
      console.log("handleAfter:",this.isTop)
      if(this.isTop){
        this.isTop = false
      }
    }
  }
}
</script>

<style scoped>
.kana-main .table-top{
  display: flex;
}

.kana-main .table-bottom{
  display: flex;
}
</style>
