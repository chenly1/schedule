<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
    <ul>
      <li v-for="article in articles">
        {{article.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import { getArticles } from '../api/api';
import mustache from 'mustache';
var demoEvents = [
	{
      title : 'Sunny Out of Office',
      start : '2016-08-25',
      end : '2017-07-27'
    }
]

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      articles: [],
      fcEvents : demoEvents
    }
  },
  mounted: function() {


var view = {
    title: "Joe",
    calc: function() {
      return 2 + 4;
    }
  }
    var msg =  mustache.render("{{title}} spends {{calc}}", view)
    console.log(msg);
    this.msg = msg;

    getArticles().then(response => {
      this.articles = response.data.body
      // this.articles = response.data["subjects"] 也可以
    })
  },
    components : {
	'full-calendar': require('vue-fullcalendar')	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
