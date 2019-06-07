
<template>
   <div class="animals-show">
    <div class="container">
         <div class="row mt-5">
        <div class="col-md-5 offset-4">
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
             <a v-bind:href="animal['url']" class="card-link">Adopt Me</a>
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
             animal: []
            };
   },
   created: function() {

    axios.get('https://api.petfinder.com/v2/animals/' + this.$route.params.id,
        {headers: {
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdkYjYwMjJiYjU4MDcxYTY3ZGJlMTM5NDgwZjM1YTljMzcyM2FjZDFmNzNkNzU2NzRjNmFiN2M1NjdiZDhiZGQxM2Q3MDU1NTExOTcxZDY4In0.eyJhdWQiOiJwS0o3Rlp3RHVPZldRcFprU2R6RU9rOTZQbE1CYWh4UVRxS0s4NFV4MEd5OU5IcEpJRiIsImp0aSI6IjdkYjYwMjJiYjU4MDcxYTY3ZGJlMTM5NDgwZjM1YTljMzcyM2FjZDFmNzNkNzU2NzRjNmFiN2M1NjdiZDhiZGQxM2Q3MDU1NTExOTcxZDY4IiwiaWF0IjoxNTU5OTQwOTU0LCJuYmYiOjE1NTk5NDA5NTQsImV4cCI6MTU1OTk0NDU1NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.mQXqeDWOKBxAy8NGZo6Qvutxmx8OIFh7YiX5OvEUYd61b1NpoJL3G9EMQg3SG3F0r-Ug2i3-I1Sjb9F2VgO87ZQPd8R8yaMG24CnW159cjfhO0rPo0YLk9E7zIC26XDuepjYCrzyDo3P7v_XgjLZZL0SMxpYl-tRmlYbh5vwIZlEFJhMHfA8zS3r23dBurAsSZhXiVNMRWKeSHSEB31QgP7f4Z22AIOgfrXIZTmULfqPlOIB3XZV1Ky9jeO2yFUzd8wkM4s1xWVZCHrs_7hXS1AaU92ETHVWkUg0tNOfLbd1WngxGe6hlJOeMJtpF08fhY-m5gBveFdsJLYK3p2u7Q"}
        }
    ).then(response => {
        console.log(response.data);
        this.animal = response.data.animal;
        console.log(this.animal);
     });
   },
   methods: {}
 };
 </script>

