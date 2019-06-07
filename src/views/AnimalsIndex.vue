<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4">Welcome to Paw-nder!</h1>
          <p class="lead">This is app will help find your new best friend. To begin simply enter your zip code below...</p>
        <div>
          <input type="text" class="form-control" placeholder="Zip Code" v-model="zip">
          <router-link v-bind:to="'/animals/' + zip">
            <button class="zip-search btn btn-secondary btn-lg">Enter</button>
          </router-link>
        </div>
      </div>

      
  </div>
</div>
</template>

<style>

  .jumbotron {
    text-align: center;
  }

  .zip-search {
    margin: 20px 500px;
  }

</style>

<script>
export default {
  data: function() {
    return {
      zip: ""
    };
  },
  created: function() {},
  methods: {}
};
</script>