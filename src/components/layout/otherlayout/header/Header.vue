<template>
  <div class="header-main">
    <div>
      <img class='image-size' src="@/assets/logo.png">
      <img class='logoname-size' src="@/assets/logoname.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.header-main{
  background-color: black;
  width: 100%;
  height: 100%;
}

.header-main .image-size{
  height: 80px;
}

.header-main .logoname-size{
  padding-bottom: 9px;
}
</style>
