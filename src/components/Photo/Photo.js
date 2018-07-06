import React, { Component } from 'react';
import Modal from 'react-modal';

import images from '../../imgs/index.js';
import './Photo.css';

const modalStyles = {
    content: {
        width: '500px',
        height: '500px',
        marginRight: 'auto'
    }
}

class Photo extends Component {
    constructor(){
        super();
        
        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({modalIsOpen: true});
    }

    closeModal(){
        this.setState({modalIsOpen: false});
    }

    render(){
        return (
            <div className="all_photo">
                {images.map((image, idx) => {
                    return <div className="photo_area" key={idx}>
                                <img src={image} className="photo" onClick={this.openModal} alt="img" />
                            </div>
                })}
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={modalStyles}
                    contentLabel="each photo"
                    >
                    </Modal>
            </div>
        )
    }
}

export default Photo;