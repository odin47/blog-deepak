import ReactDOM from 'react-dom';
import Notification from 'components/Notification';

const notification = {
    show: (message, type) => {
        ReactDOM.render(<Notification message={message} type={type} />, document.getElementById("root-portal"));
    }
}

export {
    notification
}