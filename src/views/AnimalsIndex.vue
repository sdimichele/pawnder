<template>
  <div class="animals-index">
    <div class="container">
      
     <h1 class="page-title">All Animals</h1>
       <!-- <img v-bind:src=" animal['photos'][0]['medium'] ">
       <ul>
         <a class="btn btn-primary" href="/animals/:id" role="button">More Info</a>
         <li>{{ animal['photos'][0]['full'] }}</li>
         <li>Name: {{ animal["name"] }}</li>
         <li>Type: {{ animal["type"] }}</li>
         <li>Type: {{ animal["breeds"] }}</li>
         <li>Age: {{ animal["age"] }}</li>
         <li>Attributes: {{ animal["attributes"] }}</li>
         <li>Personality traits: {{ animal["tags"] }}</li>
         <li>Type: {{ animal["age"] }}</li>
       </ul> -->
      <div class="row mt-5">
        <div class="col-md-4" v-for="animal in animals">
         <div class="card border-dark mb-5">
           <img v-bind:src="animal['photos'][0]['full']" class="card-img-top" v-bind:alt="animal['name']">
           <div class="card-body">
             <h5 class="card-title"> {{animal['name']}} </h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">Gender: {{animal['gender']}}</li>
             <li class="list-group-item">Size: {{animal['size']}}</li>
             <li class="list-group-item">Breed: {{animal['breeds']['primary']}}</li>
             <li class="list-group-item">Colors: {{animal['colors']['primary']}} </li>
             <li class="list-group-item">Age: {{animal['age']}} </li>
           </ul>
           <div class="card-body card-links">
             <a href="#" class="card-link">Card link</a>
             <a href="#" class="card-link">Another link</a>
           </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .card-img-top {
    max-height: 400px;
  }

 .card {
  text-align: center;
  height: 850px;
 }

 .page-title {
  text-align: center;
  color: gold;
 }

 </style>

 <script>
 var axios = require('axios');

 export default {
   data: function() {
     
     return {
       animals: []
     };
   },

   created: function() {

    axios.get("https://api.petfinder.com/v2/animals?type=dog&location=25601&limit=21&distance=20",
        {headers: {
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY0NzUzMjhkMTY5MTAwYTk3MjkyNDM0ZDVmOWY0NzUwNTJjNjdmYjIxYjRhMGY0YjJmZjhlODBmMGY5NDg3NjI5MzNlNTUzYWNjYzc1NTQ2In0.eyJhdWQiOiJwS0o3Rlp3RHVPZldRcFprU2R6RU9rOTZQbE1CYWh4UVRxS0s4NFV4MEd5OU5IcEpJRiIsImp0aSI6ImY0NzUzMjhkMTY5MTAwYTk3MjkyNDM0ZDVmOWY0NzUwNTJjNjdmYjIxYjRhMGY0YjJmZjhlODBmMGY5NDg3NjI5MzNlNTUzYWNjYzc1NTQ2IiwiaWF0IjoxNTU5ODc4NDA2LCJuYmYiOjE1NTk4Nzg0MDYsImV4cCI6MTU1OTg4MjAwNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.w5pKWhCU1C_aebbqqoLDcTOr69PQPpB-rb-31sPQ44RJEe6zPQiRriYcZBv6Sl_MsfzVGjsnAWaP5ZCUDFoKRvxOJIs_BUUZY75PkLhoDbUNvealIsroZUqwtvhF7qKc2U3-9T_yqZR6DjbLnHWt_zb4t3DxyIcovrQzBdtUrclC6FL0kDEYuHZiQmSi0AO1Q5AP1stJb25Fanws9LMqX4a0zCcjXwwKGeyqn9hFJWe3FChkVebQqtZpAnA6D0wMBaYCXkQNwA6CCh21vJfESWNGSzpwX4mAmRdWs7FesEwcDuE34NXalSOevRJFn-awVUqGWIBGKP_D44OxzP-9vA"}
        }
    ).then(response => {
        console.log(response.data);
        this.animals = response.data.animals;
        console.log(this.animals);
     });
   },
   methods: {}
 };
 </script>

