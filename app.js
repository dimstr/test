var imgRef = storageRef.child('data/photo.jpg');

firebase.auth().signInAnonymously().then(function() {
  imgRef.getDownloadURL().then(function(url){
    document.querySelector('img').src = url;
  }).catch(function(error) {
    console.error(error);
  });
});

imgRef.getMetadata()
  .then((metadata) => {
    date = new Date(metadata.timeCreated);
    var time = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    var writtenDate = (date.getDate() + '-' + (date.getMonth()+1)  + '-' + date.getFullYear());
    document.getElementById("date-time").innerHTML = writtenDate + " в " + time;
  })
  .catch((error)=> {
    console.error(error);
  });
