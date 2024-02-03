import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem =(props) =>{
    return <div className={css.dialog+' '+css.active}>
        <NavLink to={'/dialogs/'+'{props.id}'}>{props.name} </NavLink>
</div>
}
const Message = (props) =>{
    return <div className={css.dialog}>{props.message}</div>
}
const Dialogs = (props) => {
  return (<div className={css.dialogs}>
          <div className={css.dialogsItems}>
              <DialogItem name="Piska" id="1"/>
              <DialogItem name="chert" id="2"/>
              <DialogItem name="Mraz" id="3"/>
              <DialogItem name="Suka" id="5"/>
              <DialogItem name="Osel" id="6"/>
              <DialogItem name="idiot" id="7"/>


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
              <Message message="соси"/>
              <Message message="соси"/>
              <Message message="соси"/>
              <div className={css.messages}>Подохни</div>
              <div className={css.messages}>Сука</div>
              <div className={css.messages}>Мразь</div>
          </div>
      </div>
      )
}
export default Dialogs
