import React from "react";
import css from './Dialogs.module.css'
import {Navigate, NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, } from "../../redux/store";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage
    const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    const messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    const newMessageBody = state.newMessageBody


    const addNewMessage = (values) => {
         props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Navigate to={"/login"}/>
    return (<div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs
