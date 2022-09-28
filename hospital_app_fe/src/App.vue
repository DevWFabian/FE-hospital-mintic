<template>
  <div id="app" class="app">
    <header>
      <nav class="navbar navbar-expand-md shadow p-3 bg-light">
        <div class="container-fluid">
          <a class="navbar-brand me-5">
            <img src="@/images/logoHospital.png" alt="logo-hopital" width="60">
            HOSPITALIZACION EN CASA H&C
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            
            <div class="btn-group " role="group" aria-label="Basic outlined example">
              <button type="button" v-on:click="loadLogIn" class="btn btn-outline-success text-uppercase">Inicio</button>
              <button type="button" v-if="!is_auth" v-on:click="loadLogIn" class="btn btn-outline-success text-uppercase">Log-in</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div class="main-component">
      <router-view v-on:completedLogIn="completedLogIn">
      </router-view>
    </div>


  </div>
</template>
<script>
export default {name: 'App',
  data: function(){
    return{
      is_auth: false
    }
  },
  components:{
  },
  methods:{
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if(this.is_auth == false)
        this.$router.push({name: "Login"})
      else
        this.$router.push({ name: "Home" });
    },
    loadLogIn: function(){
      this.$router.push({name: "Login"})
    },
    loadHome: function() {
      this.$router.push({ name: "Home" });
    },
    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    loadAccount: function(){
      this.$router.push({name: "Account"})
    },
    completedLogIn: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
  }
}
</script>


<style>
  * {
    margin: 0%;
    padding: 0%;
  }
</style>