import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";

const Dialogs = (props) => {
    let state=props.store.getState().dialogsPage
    const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    const newMessageBody = state.newMessageBody

    let newMessageElement=React.createRef()

    const addMessage=()=>{
        props.store.dispatch(sendMessageCreator())
        let text=newMessageElement.current.value;
        alert(text)
    }
    const onNewMessageChange=(e)=>{
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }
    return (<div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>

                <div>
                    <textarea ref={newMessageElement} onChange={onNewMessageChange}></textarea></div>
                <div>
                    <button onClick={addMessage}> Add blya</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs
