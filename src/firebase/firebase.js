import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY ,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   })


//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snaoshot.val());
// });

//child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snaoshot.val());
// })

//child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snaoshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
// })

// database.ref('expenses').push({
//   description: 'rent',
//   notes: '',
//   amount:300000,
//   createdAt: 768593232
// })

// database.ref('expenses').push({
//   description: 'books',
//   notes: '',
//   amount:1000,
//   createdAt: 342345232
// })

// database.ref('expenses').push({
//   description: 'food',
//   notes: '',
//   amount:40000,
//   createdAt: 102042940
// })

//database.ref('notes/-M8r5mgO639TK_tqkyNt').remove();

// database.ref('notes').push({
//   title: 'Course skills',
//   body: 'go for a run'
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job} at ${val.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref('age').set(28)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
//   }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
//   }, 10500)


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) => {
//       console.log('Error fetching data', e)
//   })

// database.ref().set({
//     name: 'Iris',
//     age: 30,
//     gender: 'F',
//     location: 'Palo Alto'
// })

// database.ref('gender').remove()
//  .then(() => {
//      console.log('success')
//  }).catch((e) => {
//      console.log('failed', e)
//  })

//  database.ref().set({
//       name: 'Iris Gao',
//       age: 26,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'palo alto',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('Data is saved!')
//   }).catch((e) => {
//       console.log('This failed', e)
//   })

// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
// });