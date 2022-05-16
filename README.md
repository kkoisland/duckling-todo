```
Start:
npm i
npm start
http://localhost:3000

What we did:
firebaseのサイトで、ducklingToDoを作成し、
Analitics名: todo_duckling
web app: DucklingToDoApp
host: DucklingToDo

npm version
{
  npm: '8.5.5',
  node: '14.19.1',
  v8: '8.4.371.23-node.85',
  uv: '1.42.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '83',
  nghttp2: '1.42.0',
  napi: '8',
  llhttp: '2.1.4',
  openssl: '1.1.1n',
  cldr: '40.0',
  icu: '70.1',
  tz: '2021a3',
  unicode: '14.0'
}

1. npm install firebase

  2. 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1e5GOmSJXYP_PUuoqM4NRyrrNRx_X90k",
  authDomain: "ducklingtodo.firebaseapp.com",
  projectId: "ducklingtodo",
  storageBucket: "ducklingtodo.appspot.com",
  messagingSenderId: "429815563004",
  appId: "1:429815563004:web:d8a18e5ee452cdd8410d79",
  measurementId: "G-5ECHXC5DMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

3.
npm install -g firebase-tools

4.
npm install @radix-ui/react-checkbox
npm install -g npm@8.5.5
npm install react@17.0.2
npm install react-dom@17.0.2
install @radix-ui/react-checkbox
install @radix-ui/react-label
npm install @stitches/react
npm install @radix-ui/colors

```