<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Find</router-link> |
      <router-link to="/sell">Sell</router-link> |
      <router-link to="/host">Host</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #731A00;
}

#nav a.router-link-exact-active {
  color: #AD0A00;
}
</style>
