import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let Users =
    [
        {name: 'Ivan', id: 1},
        {name: 'Nikolay', id: 2}
    ]
let Messages =
    [
        {text: 'Hi', id:1},
        {text: 'Hi', id:2}

    ]

let PostsData =
    [
        {id: 1, text: 'Hi', likes: 20},
        {id: 2, text: 'Where are you from?', likes: 15}
    ]

ReactDOM.render(
  <React.StrictMode>
    <App post={PostsData} messages={Messages} users={Users}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
