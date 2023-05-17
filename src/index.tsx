// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import store from './store';

function render(props){
  const { container } = props;
  ReactDOM.render(<React.StrictMode>
    <Provider store={store}>
      {/* @ts-ignore */}
      <BrowserRouter 
        // basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
