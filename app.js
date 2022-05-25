var imgRef_01 = storageRef.child('data/photo_01.jpg');
var imgRef_02 = storageRef.child('data/photo_02.jpg');


firebase.auth().signInAnonymously().then(function () {
  imgRef_01.getDownloadURL().then(function (url_01) {
    document.querySelector('img_01').src = url_01;
  }).catch(function (error) {
    console.error(error);
  });
  imgRef_02.getDownloadURL().then(function (url_02) {
    document.querySelector('img_02').src = url_02;
  }).catch(function (error) {
    console.error(error);
  });
});

imgRef_01.getMetadata()
  .then((metadata) => {
    date = new Date(metadata.timeCreated);
    var time_01 = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    var writtenDate_01 = (date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear());
    document.getElementById("date-time_01").innerHTML = writtenDate_01 + " в " + time_01;
  })
  .catch((error) => {
    console.error(error);
  });

imgRef_02.getMetadata()
  .then((metadata) => {
    date = new Date(metadata.timeCreated);
    var time_02 = (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    var writtenDate_02 = (date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear());
    document.getElementById("date-time_02").innerHTML = writtenDate_02 + " в " + time_02;
  })
  .catch((error) => {
    console.error(error);
  });
