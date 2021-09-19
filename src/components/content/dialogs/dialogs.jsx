import React from 'react';
import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import i from './dialogs.module.scss';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={i.dialog} activeClassName={i.activeLink}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={i.messages}>{props.message}</div>
    )
}
const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    
    let dialogsElements = state.dialogsData.map( (d) => <DialogItem name={d.name} id={d.id} /> );
    let messageElements = state.messagesData.map( (m) => <Message message={m.message} /> );
    let newMessageBody = state.newMessageBody;

    let addMessage = (props) => {
        debugger;
        props.store.dispatch(sendMessageCreator());
    }
    let pizdez = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
        
    return (
        <div className={i.dialogs}>
            <div className={i.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={i.messages}>
                    {messageElements}
                </div>
                <div>
                    <div>
                        <textarea 
                            value={newMessageBody}
                            onChange={pizdez}
                            placeholder='Писати сюди'>
                        </textarea>    
                    </div>
                    <div>
                        <button onClick={addMessage}>Надіслати</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;