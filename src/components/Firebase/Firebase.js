import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyD-qnYnahm7CMnDZkefKh7sE8Lw6CyOPPg",
  authDomain: "marvel-quiz-c8ab5.firebaseapp.com",
  projectId: "marvel-quiz-c8ab5 ",
  storageBucket: "marvel-quiz-c8ab5.appspot.com",
  messagingSenderId: "75784436509",
  appId: "1:75784436509:web:bbbcbea33730b474f0fff4",
};
class Firebase {
  constructor() {
    initializeApp(config);
  }
}

export default Firebase;
