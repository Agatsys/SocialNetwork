import React from 'react';
import { NavLink } from 'react-router-dom';
import i from './dialogs.module.scss';
import { connect } from 'react-redux';
import { sendMessageCreator } from '../../../redux/dialogs.reducer';
//import { WithAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={i.dialog} >  {/* activeClassName={i.activeLink} */}
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

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messageElements = state.messagesData.map((m) => <Message message={m.message} key={m.id} />);
    //let newMessageBody = state.newMessageBody;

    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body)
    // }
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Писати сюди'/>
                {/* <textarea
                    value={props.newMessageBody}
                    onChange={props.onNewMessageChange}
                    placeholder='Писати сюди'>
                </textarea> */}
            </div>
            <div>
                <button >Надіслати</button> {/*  onClick={props.onSendMessageClick}  */}
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
})
let mapDispatchToProps = (dispatch) => {
    return {
        //updateNewMessageBody: (body) => {
        //    dispatch(updateNewMessageBodyCreator(body))
        //},
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //WithAuthRedirect
)(Dialogs)