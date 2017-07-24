// var firebase = require('firebase');
// import firebase from 'firebase';

let downstairsBathroom = false
let upstairsBathroom = false
let washer = false
let dryer1 = false

firebase.database().ref(`/rooms`)
  .on('value', snapshot => {
    var dryer1 = document.getElementById("dryer1");
    var washer1 = document.getElementById("washer");
    var upstairsBathroom1 = document.getElementById("upstairsBathroom");
    var downstairsBathroom1 = document.getElementById("downstairsBathroom");

    dryer1.style.backgroundColor = snapshot.val().dryer1 ? "red": 'blue';
    washer1.style.backgroundColor = snapshot.val().washer ? "red": 'blue';
    upstairsBathroom1.style.backgroundColor = snapshot.val().upstairsBathroom ? "red": 'blue';
    downstairsBathroom1.style.backgroundColor = snapshot.val().downstairsBathroom ? "red": 'blue';

  }
);

function updateDryerStatus() {
  firebase.database().ref().child('rooms').update({dryer1: !dryer1});
  dryer1=!dryer1;
  console.log(dryer1);
}

function updateDowstairsBathroomStatus() {
  firebase.database().ref().child('rooms').update({downstairsBathroom: !downstairsBathroom});
  downstairsBathroom=!downstairsBathroom;
}

function updateUpstairsBathroomStatus() {
  firebase.database().ref().child('rooms').update({upstairsBathroom: !upstairsBathroom});
  upstairsBathroom=!upstairsBathroom;
  console.log(upstairsBathroom);
}

function updateWasherStatus() {
  firebase.database().ref().child('rooms').update({washer: !washer});
  washer=!washer;
}


