
import React from "react";
import {AddMessageActionCreator, ChangeMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";




const DialogsContainer = () =>
{


    return (

            <StoreContext.Consumer>
              {
                (store) =>
                {

                  const AddMessage = () =>
                  {
                    store.dispatch(AddMessageActionCreator())
                  }

                  const ChangeMessage = (message) =>
                  {
                    store.dispatch(ChangeMessageActionCreator(message))
                  }

                  let state = store.getState().messagesPage
                  return   <Dialogs AddMessage={AddMessage} ChangeMessage={ChangeMessage} messagesPage={state}/>
                }
              }

            </StoreContext.Consumer>
    );
}

export  default  DialogsContainer;