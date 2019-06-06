<template>
   <div class="animals-index">
     <h1>All Animals</h1>
     <div v-for="animal in animals">
       <img v-bind:src=" animal['photos'][0]['medium'] ">
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
       </ul>
       

     </div>
   </div>
 </template>

 <style>
 img.index-recipes-img {
   width: 250px;
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

    axios.get("https://api.petfinder.com/v2/animals?type=dog&location=60610&limit=21&distance=20",
        {headers: {
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE4YzlmZjdkNzNkMDY3YmM4OGIxZGI2YjAxODJlYTNkM2MzZjgzMWI2NDQzMzdhYjA0ODY3NjRmNGM3NzI4NGQ5NzJlZTRkMzNlNjc0YTI5In0.eyJhdWQiOiJwS0o3Rlp3RHVPZldRcFprU2R6RU9rOTZQbE1CYWh4UVRxS0s4NFV4MEd5OU5IcEpJRiIsImp0aSI6IjE4YzlmZjdkNzNkMDY3YmM4OGIxZGI2YjAxODJlYTNkM2MzZjgzMWI2NDQzMzdhYjA0ODY3NjRmNGM3NzI4NGQ5NzJlZTRkMzNlNjc0YTI5IiwiaWF0IjoxNTU5ODU2OTYzLCJuYmYiOjE1NTk4NTY5NjMsImV4cCI6MTU1OTg2MDU2Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.d2GIdsWGzfQUgGyK9r4Vy-r3l56THPGQs0V2sYQE3cbpcz6a_18MhyO74HtpcC7688pCs1RkrnMSfXqtNZkdnC_e0CmPg8k8jG8Kbx-CTXYdlEqdEP0cNiengkHCJ5Yzf8pvuAPBSPg_bER4TA7PDLLpYHoReNNxQRsH_WQE44XClTELPrhG_b_6L6Ie_0cQjdXcjfNkCl8Qt6Spz8nKkbdntRJqjM82pOY9DZr5zpw4gcJSXpQzZXklfrpvpmHCejGN2iq2QTXI4j4CfbeFZpJ_g3vWl9LchZbdAZKBYuGptOHuFA41mlnjgmfaSPr88R0PLuCVyEpbXI1ykEWHnw"}
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

