import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Dialog from 'material-ui/Dialog';

const customContentStyle = {
    width: '60%',
    display: 'flex',
    maxHeight: '69vh',
    justifyContent: 'center',
};


export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            open: false
        }
        this.renderStyle = (picture_url) => {
            return {
                backgroundImage: 'url(' + picture_url + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '13vw',
                height: '13vw',
                margin: '1vw'
            }
        }
        this.renderHoverStyle = (picture_url) => {
            return {
                backgroundImage: 'linear-gradient(135deg, rgba(255, 33, 84, 0.45), rgba(221, 231, 255, 0.45)), url(' + picture_url + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '13vw',
                height: '13vw',
                margin: '1vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
            }
        }
    }

    handleMouseEnter = (e) => {
        this.setState({ hover: true })
    }

    handleMouseLeave = (e) => {
        this.setState({ hover: false })
    }

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        return (
            <div>
                {this.state.hover ?
                    <div
                        onClick={this.handleOpen}
                        style={this.renderHoverStyle(this.props.url)}
                        onMouseLeave={this.handleMouseLeave}>
                    </div>
                    :
                    <div
                        onClick={this.handleOpen}
                        style={this.renderStyle(this.props.url)}
                        onMouseEnter={this.handleMouseEnter}>
                    </div>
                }

                <Dialog
                    modal={false}
                    bodyStyle={{ padding: '0' }}
                    contentStyle={customContentStyle}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img style={{ maxHeight: '70vh' }} src={this.props.url} />
                </Dialog>
            </div>
        )
    }
}