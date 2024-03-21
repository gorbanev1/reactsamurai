import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    // const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    // const messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    // const newMessageBody = state.newMessageBody
    //
    // let newMessageElement=React.createRef()
    return   <StoreContext.Consumer>{
        (store) => {
            let state = store.getState().dialogsPage
            const onSendMessageClick=()=>{
                store.dispatch(sendMessageCreator())

            }
            const onNewMessageChange=(body)=>{

                store.dispatch(updateNewMessageBodyCreator(body))

            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}
            />
        }
    }
        </StoreContext.Consumer>

}
export default DialogsContainer
