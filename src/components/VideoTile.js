import React from 'react';
import Dialog from 'material-ui/Dialog';
import {VideoContainer} from './style'
import IconButton from 'material-ui/IconButton';

const customContentStyle = {
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
  };

export default class VideoTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          open: false
        }
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
                <VideoContainer>
                <IconButton
                  onClick={this.handleOpen}
                  iconClassName="material-icons"
                  iconStyle ={{color: 'white', fontSize: '68px'}}
                  style={{position: 'absolute', zIndex:'1000'}}
                  >
                  play_circle_outline
                </IconButton>
                    <video onClick={this.handleOpen} width='inherit' height='100%' style={{ objectFit: 'cover' }}>
                        <source src={this.props.url} type={this.props.type} />
                    </video>
                </VideoContainer>
                <Dialog
                    modal={false}
                    bodyStyle={{padding: '0'}}
                    contentStyle={customContentStyle}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                <video width='100%' height='100%' style={{ objectFit: 'cover' }} controls>
                        <source src={this.props.url} type={this.props.type} />
                    </video>
        </Dialog>
            </div>
        )
    }
}