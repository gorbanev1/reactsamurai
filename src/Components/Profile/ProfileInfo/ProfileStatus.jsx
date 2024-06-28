import React from "react";
import css from './ProfileInfo.module.css'


class ProfileStatus extends React.Component {
    statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status

    }
    activateEditMode =()=>{
        this.setState(
            {
                editMode: true,
            }
        )
        this.state.editMode=true

    }
    deactivateEditMode =()=>{
        this.setState(
            {
                editMode: false,
            }
        )
        this.props.updateStatus(this.state.status)


    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input  autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}></input>
                    </div>
                }
            </div>

        )
    }
}

export default ProfileStatus