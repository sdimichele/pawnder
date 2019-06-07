<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/animals">Select An Animal </router-link>
      
    </div>
    <router-view/>
  </div>
</template>

<style>

body {
  background-image: url('/pink_bonez.jpg');
  background-image: url('https://cdn.hipwallpaper.com/i/67/85/YetDNi.jpg');
}

</style>
