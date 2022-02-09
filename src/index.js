

import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import StoreContext, {Provider} from "./StoreContext";



 const Rerender = (state) =>
{

    ReactDOM.render(

        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                <App/>
                    </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
Rerender(store.getState());
store.subscribe(() =>
{
    let state = store.getState();
    Rerender(state);
});