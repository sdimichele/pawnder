<template>
   <div class="animals-show">
     <h1>Animal</h1>
     <div v-for="animal in animals">
       <img v-bind:src=" animal['photos'][0]['medium'] ">
       <ul>
         <li>Name: {{ animal["name"] }}</li>
         <li>Type: {{ animal["type"] }}</li>
         <li>Breed: {{ animal["breeds"]["primary"] }}</li>
         <li>Age: {{ animal["age"] }}</li>
         <li>Spayed/Neutered: {{ animal["attributes"]["spayed_neutered"] }}</li>
       </ul>

       <ul>
         <li>Personality traits: {{ animal["tags"] }}</li>
       </ul>  
         <li>Type: {{ animal["age"] }}</li>
       

     </div>
   </div>
 </template>

 <style>
 img.index-animals-img {
   width: 250px;
 }
 </style>

 <script>
 // var axios = require('axios');
 export default {
   data: function() {
     
     return {
       animals: [
        {
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
            "name": "Spot",
            "description": "Spot is an amazing dog",
            "photos": [
                {
                    "small": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=100",
                    "medium": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=300",
                    "large": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=600",
                    "full": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081"
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
            }
        }
                ]
     };
   },
   created: function() {
     // axios.get("/api/recipes").then(response => {
     //   this.recipes = response.data;
     // });
   },
   methods: {}
 };
 </script>