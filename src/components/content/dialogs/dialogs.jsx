import React from 'react';
import { NavLink } from 'react-router-dom';
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
    
    let dialogsElements = props.data.dialogsData.map( (d) => <DialogItem name={d.name} id={d.id} /> );
    
    let messageElements = props.data.messagesData.map( (m) => <Message message={m.message} /> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                        <textarea ref={newMessageElement}></textarea>    
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