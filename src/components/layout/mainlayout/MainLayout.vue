<template>
  <div class="main-layout">
      <div class="layout-header">
        <slot name="header"></slot>
      </div>
      <div class="layout-body">
        <div class="layout-body-left">
          <slot name="body-left"></slot>
        </div>
        <div class="layout-body-main">
          <slot name="body-main"></slot>
        </div>
      </div>
      <div class="layout-footer">
        <slot name="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'mainLayout',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.main-layout .layout-header{
  /* border: 1px solid #405e8fbd; */
  width: 99.8%;
  height: 5em;
}
.main-layout .layout-body{
  display: flex;
}
.main-layout .layout-body .layout-body-left{
  /* border: 1px solid #405e8fbd; */
  width: 15%;
  height: 40em;
}
.main-layout .layout-body .layout-body-main{
  /* border: 1px solid #405e8fbd; */
  width: 84.8%;
  height: 40em;
}
.main-layout .layout-footer{
  /* border: 1px solid #405e8fbd; */
  width: 99.8%;
  height: 1.6em;
}
</style>
