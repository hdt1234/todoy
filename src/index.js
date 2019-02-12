import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { loadTodo } from './actions';

// DB SHIT
const {app} = window.require('electron').remote;
var todos = app.db;


const store = createStore(reducers);

todos.find({}, (error, doc)=>{
    doc.map(el => {
        store.dispatch(loadTodo(el));
    });
});

store.subscribe(()=>{
    todos.find({}, (err, doc)=>{
        doc.map(el => {
            if(store.getState().todo.find(o => o.id === el.id) === undefined){
                todos.remove({id: el.id}, {}, function(err, removed){
                    console.log("Removed: ", removed.toString());
                });
            }
        });
    })
    store.getState().todo.map(el => {
        todos.findOne({id: el.id}, (err, doc) => {
            if(err != null) {
                console.log(err);
                return;
            }
            if(doc === null) {
                console.log("Document is null");
                todos.insert(el);
            } else if (doc !== null) {
                if(
                    doc.id !== el.id || 
                    doc.title !== el.title || 
                    doc.content !== el.content || 
                    doc.isDone !== el.isDone
                ){
                    todos.update({id: el.id}, {id: el.id, content: el.content, title: el.title, isDone: el.isDone, selected: false}, {});
                }
            }
        })
    });
});
// DB SHIT

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));