<template>
  <div class="animals-index">
    <div class="container">
      
     <h1 class="page-title">All Animals</h1>
      <div class="row mt-5">
        <div class="col-md-4" v-for="animal in animals">
         <router-link v-bind:to="'/animals/' + animal['id']"><button> Click me!!!!!</button></router-link>
         <div class="card border-dark mb-5">
          <div class="image-top-spacer row align-items-center">
            <img v-bind:src="animal['photos'][0]['full']" class="col card-img-top" v-bind:alt="animal['name']">
          </div>
          <div class="card-body">
            <h5 class="card-title"> {{animal['name']}} </h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Age: {{animal['age']}} </li>
            <li class="list-group-item">Gender: {{animal['gender']}}</li>
            <li class="list-group-item">Breed: {{animal['breeds']['primary']}}</li>
          </ul>
          <div class="card-body card-links">
            <a href="#" class="card-link">More Info</a>
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
  .image-top-spacer {
    height: 340px;
    overflow: hidden;
  }

.card-title {
  font-size: 30px;
}
  .card-body {
    flex: none;
    padding: 15px;
  }
 .card {
  text-align: center;
  font-size: 18px;

  height: 800px;
 }

 .card-link{
  text-align: center;
  font-size: 13px;

 }

 .page-title {
  text-align: center;
  font-size: 45px;
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
    axios.get('https://api.petfinder.com/v2/animals?type=dog&location=' + this.$route.params.zip + '&limit=21&distance=20',
    axios.get("https://api.petfinder.com/v2/animals?type=dog&location=60202&limit=21&distance=20",
        {headers: {
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdkYjYwMjJiYjU4MDcxYTY3ZGJlMTM5NDgwZjM1YTljMzcyM2FjZDFmNzNkNzU2NzRjNmFiN2M1NjdiZDhiZGQxM2Q3MDU1NTExOTcxZDY4In0.eyJhdWQiOiJwS0o3Rlp3RHVPZldRcFprU2R6RU9rOTZQbE1CYWh4UVRxS0s4NFV4MEd5OU5IcEpJRiIsImp0aSI6IjdkYjYwMjJiYjU4MDcxYTY3ZGJlMTM5NDgwZjM1YTljMzcyM2FjZDFmNzNkNzU2NzRjNmFiN2M1NjdiZDhiZGQxM2Q3MDU1NTExOTcxZDY4IiwiaWF0IjoxNTU5OTQwOTU0LCJuYmYiOjE1NTk5NDA5NTQsImV4cCI6MTU1OTk0NDU1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.mQXqeDWOKBxAy8NGZo6Qvutxmx8OIFh7YiX5OvEUYd61b1NpoJL3G9EMQg3SG3F0r-Ug2i3-I1Sjb9F2VgO87ZQPd8R8yaMG24CnW159cjfhO0rPo0YLk9E7zIC26XDuepjYCrzyDo3P7v_XgjLZZL0SMxpYl-tRmlYbh5vwIZlEFJhMHfA8zS3r23dBurAsSZhXiVNMRWKeSHSEB31QgP7f4Z22AIOgfrXIZTmULfqPlOIB3XZV1Ky9jeO2yFUzd8wkM4s1xWVZCHrs_7hXS1AaU92ETHVWkUg0tNOfLbd1WngxGe6hlJOeMJtpF08fhY-m5gBveFdsJLYK3p2u7Q"}
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
