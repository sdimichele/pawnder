<template>
  <div class="animals-index">
  <div class="container">
    <h1>All Animals</h1>
    <div class="row">
          <div class="col-md-4" v-for="animal in animals">
         
            <img class="indeximage" v-bind:src=" animal['photos'][0]['full'] ">
            <!-- <ul>
              <li>Name: {{ animal["name"] }}</li>
              <li>Breed: {{ animal["breeds"]["primary"] }}</li>
              <li>Age: {{ animal["age"] }}</li>
            </ul> -->



              <p>Name: {{ animal["name"] }}</p>
              <p>Breed: {{ animal["breeds"]["primary"] }}</p>
              <p>Age: {{ animal["age"] }}</p>
       
   
        </div>
      </div>

    </div>
  </div>
</template>

<style>
  .indeximage {
    max-height: 250px;
    max-width: 250px;
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
        },
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
            }
        },
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
            "name": "Poppelson",
            "description": "Spot is an amazing dog",
            "photos": [
                {
                    "small": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=100",
                    "medium": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=300",
                    "large": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=600",
                    "full": "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
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
        },{
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
            "name": "John",
            "description": "Spot is an amazing dog",
            "photos": [
                {
                    "small": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=100",
                    "medium": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=300",
                    "large": "http://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=600",
                    "full": "https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548__340.jpg"
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
