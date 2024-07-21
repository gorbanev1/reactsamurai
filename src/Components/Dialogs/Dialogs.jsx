import React from "react";
import css from './Dialogs.module.css'
import {Navigate, NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage
    const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    const newMessageBody = state.newMessageBody

    let newMessageElement = React.createRef()

    const onSendMessageClick = () => {
        props.sendMessage()
        let text = newMessageElement.current.value;


        /*alert(text)*/
    }
    const onNewMessageChange = (e) => {
        let body = e.target.value
        debugger
        props.updateNewMessageBody(body)
    }
    const addNewMessage = (values) => {
        alert(values.newMessageBody);
    }
    if (!props.isAuth) return <Navigate to={"/login"}/>
    return (<div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name={"newMessageBody"} placeholder="Enter your mesage"/>
            </div>
            <div>
                <button> Add blya</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux=reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialogs
