var randomuser = new Vue({
  el: "#randomuser",
  data:{
  "person":
    {
      "name": {
        "title": "",
        "first": "",
        "last": ""
      },
      "location": {
        "street": "",
        "city": "",
        "state": "",
        "postcode": ""},

      "email": "",

      "dob": {
        "date": "",
        "age": ""
      },

      "picture": {
        "large": "",
        "medium": "",
        "thumbnail": ""
      }
    }
  },

computed:{
  todateage: function(){
    return moment().diff(moment(this.person.dob.date), 'years');
  }
},

methods: {
  pretty_date: function(d)
  {
    return moment(d).format('1');
  },
  fetchuser : function() {
  fetch('https://randomuser.me/api/')
  .then( response => response.json() )
  .then( json => {
    randomuser.person = json.results[0];
  console.log(randomuser.person);
})

  .catch(function (err) {
    console.log('PROJECT FETCH ERROR:');
    console.log(err);
  })
}},

created () {
this.fetchuser();
}
})
