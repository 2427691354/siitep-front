<template>
  <div class="hello">
    <h1>{{ data }}</h1>
    <br>
    <h1 style="color: red;">{{ data2 }}</h1>
  </div>
</template>

<script>
import { findLineByExample,findLineByLine } from "@/api/api";

export default {
  name: 'HelloWorld',
  data () {
    return {
      data:[],
      data2:[]
    }
  },
  created(){
    
    var params1 = {
        id: 'gj02',
        name: null,
    };
    findLineByExample(params1).then(res => {
      if (res.status === 200) {
        this.data = res.data.data
      } else {
        
      }
    });

    var params = {
        lineid: 'gj01',
        name: null,
    };
    findLineByLine(params).then(res => {
      if (res.status === 200) {
        this.data2 = res.data.data
      } else {
        
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
