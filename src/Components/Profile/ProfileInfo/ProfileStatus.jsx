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
    onStatusChange=(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status != this.props.status) {
            this.setState({
                 status: this.props.status
            })

        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span style={{display: "block", width: "300 px"}} onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status||"DDDS"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}></input>
                    </div>
                }
            </div>

        )
    }
}

export default ProfileStatus