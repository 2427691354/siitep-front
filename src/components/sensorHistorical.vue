<template>
  <div class="main" >
    
    <ve-line :data="chartData" :settings="chartSettings" height="400px"></ve-line>
  </div>
</template>
<style  scoped>

</style>
<script>
 import VeLine from 'v-charts/lib/line'
 export default {
 data(){  
  return {
   chartData: {
    columns: ['日期','X1'],
    rows: [
     { '日期': '10月1日', 'X1': 6.32},
     { '日期': '10月2日', 'X1': 9.55 },
     { '日期': '10月3日', 'X1': 7.88},
     { '日期': '10月4日', 'X1': 7.63},
     { '日期': '10月5日', 'X1': 5.65 },
     { '日期': '10月6日', 'X1': 9.32 }
    ]
   },
   chartSettings: {
     yAxisName: ['Mpa'],
   },
  }
 },
 components: { VeLine }
}

</script>