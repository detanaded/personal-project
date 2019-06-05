import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import Login from './Login/login'
import Register from './Login/register'
 
export default class PopUp  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }
 
    render() {
        return (
            <section>
                <input type="button" value="Login/Signup" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                      <Login/>
                      <Register/>
                        {/* <h1>Login</h1>
                        <p>Some Contents</p> */}
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}