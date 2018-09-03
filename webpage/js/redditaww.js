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
        this.getPosts().then((response) => {
            var tempData = new Array();
            for(var index in response){
              tempData = tempData.concat(response[index]);
            }
            this.posts = tempData;
        })
    },
    methods: {
     getPosts() {
       return Promise.all([jsPromise1, jsPromise2, jsPromise3]);
     }
    }
});

new Vue({
    el: '#app',
});
