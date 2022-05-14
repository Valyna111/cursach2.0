const token ="https://run.mocky.io/v3/c806bebf-39f2-4a06-ad6e-99b6fea9cf34";
fetch(token)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("data", data[0]["url"]);
    var images = document.getElementsByClassName("image-json");
    for (let i = 0; i < images.length; i++) {
      images[i].src = data[i]["url"];
    }
  })
  .then(function () {
    console.log(document.querySelector(".testJson"));
  });


function alertWindow(){
  alert("Удачного ремонта!!");
}