// var firebase = require('firebase');
// import firebase from 'firebase';

let downstairsBathroom = false
let upstairsBathroom = false
let washer = false
let dryer = false

firebase.database().ref(`/`)
  .on('value', snapshot => {
    downstairsBathroom = snapshot.val().downstairsBathroom
    upstairsBathroom = snapshot.val().downstairsBathroom
    washer = snapshot.val().washer
    dryer = snapshot.val().dryer
  }
);

function getStatus(room) {
  switch (room) {
    case 'downstairsBathroom':
      return downstairsBathroom;
    case 'upstairsBathroom':
      return upstairsBathroom;
    case 'washer':
      return washer;
    case 'dryer':
      return dryer;
  }
}

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
