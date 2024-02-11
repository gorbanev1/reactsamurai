import React from "react";
import css from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={css.dialog}>{props.message}</div>
}


export default Message
