<template>
  <div class="">
    <main-layout>
      <main-header slot="header"></main-header>
      <div class="home-main" slot="body-main">
        <div id="homeBodyId" class="home-body"></div>
      </div>
      <main-menu slot="body-left"></main-menu>
      <main-footer slot="footer"></main-footer>
    </main-layout>
  </div>
</template>

<script>
import echarts from 'echarts'
import homeJson from '@/json/home/Home.js'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted(){
    console.log("homeJson:",homeJson.homeData);
    this.loadMap();
  },
  methods: {
    loadMap(){
      let myChart = echarts.init(document.getElementById('homeBodyId')); 
      var option = {
            title: {
              show:"true",//是否显示标题，默认显示，可以不设置
              text:"世界遗迹分布图",//图表标题文本内容
              left: 'center',
              top: 'top'
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                console.log("params:", params);
                // console.log("params-data:", params.data);
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')+ '.' + value[1];
                return params.seriesName + 
                      '<br/>' + 
                      params.name +
                      ' : ' + 
                      value;
              }  
            },    
            visualMap: {
              min: 0,
              max: 100,
              text:['High','Low'],
              realtime: false,// 拖拽时，是否实时更新
              calculable: true,// 是否显示拖拽用的手柄
              color: ['orangered','yellow','#88e22e']
            },
            series: [{
              name: 'World Heritage (2021)',
              type: 'map',
              mapType: 'world',
              roam: true,// 是否开启鼠标缩放和平移漫游 默认不开启 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
              itemStyle:{
                emphasis:{label:{show:true}}
              },
              data: homeJson.homeData
            }]
          };
          myChart.setOption(option);
      }
  }
}
</script>

<style scoped>
.home-main{
    width: 100%;
    height: 100%;
}

.home-main .home-body{
    background-color: #80d6ff;
    width: 100%;
    height: 100%;
}
</style>
