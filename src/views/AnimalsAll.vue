<template>

  <div class="animals-index">
    <div class="container">
      
     <h1 class="page-title">All Animals</h1>

      <div class="row mt-5">
        <div class="col-md-4" v-for="animal in animals">
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
<<<<<<< HEAD
  .card-img-top {
    max-height: 400px;
  }

 .card {
  text-align: center;
  height: 850px;
=======
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

>>>>>>> 0765d6d57d236e5e35f4c4b17565f671688dc7e8
 }

 .page-title {
  text-align: center;
<<<<<<< HEAD
=======
  font-size: 45px;

>>>>>>> 0765d6d57d236e5e35f4c4b17565f671688dc7e8
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

<<<<<<< HEAD
    axios.get('https://api.petfinder.com/v2/animals?type=dog&location=' + this.$route.params.zip + '&limit=21&distance=20',
=======
    axios.get("https://api.petfinder.com/v2/animals?type=dog&location=60202&limit=21&distance=20",
>>>>>>> 0765d6d57d236e5e35f4c4b17565f671688dc7e8
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
<<<<<<< HEAD

=======
 <!--    {
            "id": 120,
            "organization_id": "NJ333",
            "url": "https://www.petfinder.com/dog/spot-120/nj/jersey-city/nj333-petfinder-test-account/?referrer_id=d7e3700b-2e07-11e9-b3f3-0800275f82b1",
            "type": "Dog",
            "species": "Dog",
            "breeds": {
                "primary": "Akita",
                "secondary": null,
                "mixed": false,
                "unknown": false
            },
            "colors": {
                "primary": null,
                "secondary": null,
                "tertiary": null
            },
            "age": "Young",
            "gender": "Male",
            "size": "Medium",
            "coat": null,
            "attributes": {
                "spayed_neutered": false,
                "house_trained": true,
                "declawed": null,
                "special_needs": true,
                "shots_current": false
            },
            "environment": {
                "children": false,
                "dogs": false,
                "cats": false
            },
            "tags": [
                "Cute",
                "Intelligent",
                "Large",
                "Playful",
                "Happy",
                "Affectionate"
            ],
            "name": "Williams",
            "description": "Spot is an amazing dog",
            "photos": [
                {
                    "small": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=100",
                    "medium": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=300",
                    "large": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=600",
                    "full": "https://i.ytimg.com/vi/7NYaGOyJiCY/maxresdefault.jpg"
                }
            ],
            "status": "adoptable",
            "published_at": "2018-12-22T20:31:32+0000",
            "contact": {
                "email": "petfindertechsupport@gmail.com",
                "phone": "111-333-5555, 222-333-5555, 333-333-5353, 111-333-2222",
                "address": {
                    "address1": "Test address 1",
                    "address2": "Test address 2",
                    "city": "Jersey City",
                    "state": "NJ",
                    "postcode": "07097",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/120"
                },
                "type": {
                    "href": "/v2/types/dog"
                },
                "organization": {
                    "href": "/v2/organizations/nj333"
                }
            }animals:
        } -->
>>>>>>> 0765d6d57d236e5e35f4c4b17565f671688dc7e8
