<template >
   <div >
    <Header></Header>
    <div   id="app">
        <div id="content">
          <router-view></router-view>
      </div>
    <Footer></Footer>
      </div>
   </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,

  },

}
</script>

<style>
    body {
         background-image: url("assets/77.jpg");
         background-size: cover;
         background-repeat: no-repeat;
         background-attachment: fixed;


     }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
    #content{
        margin-top: 60px;
    }
</style>
