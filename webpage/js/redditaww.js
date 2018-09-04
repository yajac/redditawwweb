var urlBase = "https://ags1tu3mc8.execute-api.us-east-1.amazonaws.com/stage1/"

var jsPromise1 = Promise.resolve(
  $.ajax({
    type: "GET",
    url: urlBase + "catpictures",
    dataType: "json",
    crossDomain: true
  })
);

var jsPromise2 = Promise.resolve(
  $.ajax({
    type: "GET",
    url: urlBase + "dogpictures",
    dataType: "json",
    crossDomain: true
  })
);

var jsPromise3 = Promise.resolve(
  $.ajax({
    type: "GET",
    url: urlBase + "aww",
    dataType: "json",
    crossDomain: true
  })
);

Vue.component('results-list', {
    data: function () {
        return {
            posts: []
        }
    },
    mounted () {
      jsPromise1.then((response) => {
          for(var index in response){
            this.posts =  this.posts.concat(response[index]);
          }
      })
      jsPromise2.then((response) => {
          for(var index in response){
            this.posts =  this.posts.concat(response[index]);
          }
      })
      jsPromise3.then((response) => {
          for(var index in response){
            this.posts =  this.posts.concat(response[index]);
          }
      })
    }
});

Vue.filter('formatDate', function(value) {
  if (value) {
    return new Date(value * 1000).toDateString();
  }
});

Vue.filter('formatURL', function(id) {
  if (id) {
    return "https://www.reddit.com/" + id;
  }
});

new Vue({
    el: '#app',
});
