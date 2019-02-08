import React from 'react';
import { ToastNotification } from 'carbon-components-react';
import Transition from 'react-transition-group/Transition';

const duration = 500;

const defaultStyle = {
    position: 'fixed',
    top: '0',
    zIndex: '1000'
};

// TODO add transition styles
const transitionStyles = {
    entering: {
    },
    entered: {
    },
    exiting: {
    },
    exited: {
    }
};

const Notification = ({ notification, closeNotification }) => {
    return (
        <Transition in={notification} timeout={duration} unmountOnExit>
            {(state) => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <ToastNotification
                        title={'Success!'}
                        kind={'success'}
                        subtitle={'You clicked me.'}
                        onCloseButtonClick={() => closeNotification()}
                        caption={new Date().toString()}
                    />
                </div>
            )}
        </Transition>
    );
}

export default Notification;
