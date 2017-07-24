// var firebase = require('firebase');
// import firebase from 'firebase';

let downstairsBathroom = false
let upstairsBathroom = false
let washer = false
let dryer = false

firebase.database().ref(`/`)
  .on('value', snapshot => {
    var dryer = document.getElementById("dryer");
    var washer = document.getElementById("washer");
    var upstairsBathroom = document.getElementById("upstairsBathroom");
    var downstairsBathroom = document.getElementById("downstairsBathroom");
    dryer.body.style.backgroundColor = snapshot.val().dryer ? "red": 'blue';
    washer.body.style.backgroundColor = snapshot.val().washer ? "red": 'blue';
    upstairsBathroom.body.style.backgroundColor = snapshot.val().upstairsBathroom ? "red": 'blue';
    downstairsBathroom.body.style.backgroundColor = snapshot.val().downstairsBathroom ? "red": 'blue';
  }
);

// function getStatus(room) {
//   switch (room) {
//     case 'downstairsBathroom':
//       return downstairsBathroom;
//     case 'upstairsBathroom':
//       return upstairsBathroom;
//     case 'washer':
//       return washer;
//     case 'dryer':
//       return dryer;
//   }
// }

function updateDowstairsBathroomStatus() {
  firebase.database().ref('/')
    .set({ downstairsBathroom: !downstairsBathroom })
}

function updateUpstairsBathroomStatus() {
  firebase.database().ref('/')
    .set({ upstairsBathroom: !upstairsBathroom })
}

function updateWasherStatus() {
  firebase.database().ref('/')
    .set({ washer: !washer })
}

function updateDryerStatus() {
  firebase.database().ref('/')
    .set({ dryer: !dryer })
}
