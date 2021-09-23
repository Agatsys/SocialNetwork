import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import StoreContext from '../../../storeContext';
import Dialogs from './dialogs';



const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
                state={state} />
        }
        } 
        </StoreContext.Consumer>
}

export default DialogsContainer;