<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
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
      msg: 'Welcome to Your Vue.js App',
      data:[],
      data2:[]
    }
  },
  created(){
    var params = {
        id: 'gdjt',
        name: null,
    };
    findLineByExample(params).then(res => {
      if (res.status === 200) {
        this.data = res.data
      } else {
        
      }
    });
    findLineByExample(params).then(res => {
      if (res.status === 200) {
        this.data2 = res.data
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
