import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
/*    let dialogsData = [
        {id: 1, name: 'Piska'},
        {id: 2, name: 'chert'},
        {id: 3, name: 'Mraz'},
        {id: 4, name: 'Suka'},
        {id: 5, name: 'Osel'},
        {id: 6, name: 'idiot'},
    ]

    let messagesData = [
        {id: 1, message: 'Piska'},
        {id: 2, message: 'chert'},
        {id: 3, message: 'Mraz'},
        {id: 4, message: 'Suka'},
        {id: 5, message: 'Osel'},
        {id: 6, message: 'idiot'},
    ]*/

    const dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let newMessageElement=React.createRef()

    const addMessage=()=>{
        let text=newMessageElement.current.value;
        alert(text)

    }
    const messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    return (<div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
                {/*              <div className={css.dialog+' '+css.active}>
                  <NavLink to="/dialogs/1">опорпор</NavLink>
              </div>
              <div className={css.dialog}>
                  <NavLink to="/dialogs/1"> Eblan</NavLink>

              </div>
              <div className={css.dialog}>
                  <NavLink to="/dialogs/2"> Suka</NavLink>
              </div>
              <div className={css.dialog}>
                  <NavLink to="/dialogs/3"> Chmo</NavLink>
              </div>
              <div className={css.dialog}>
                  <NavLink to="/dialogs/4"> Padla</NavLink>
              </div>
              <div className={css.dialog}>
                  <NavLink to="/dialogs/5"> Anus</NavLink>
              </div>*/}
            </div>
            <div className={css.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}> Add blya</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs
