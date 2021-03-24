import {post} from 'services/axios/request';
import {notification} from 'services/utils/notification';

const SUBSCRIBE_URL = 'https://lv2dybg5ka.execute-api.ap-south-1.amazonaws.com/default/subscribe_lambda';
const EmailService = {
    handleSubscribe: (email) => {
        post(SUBSCRIBE_URL, {
            "email": email
        }).then( res => {
            notification.show(res.data, 'success');
        })
    }
}

export default EmailService;
export {EmailService};
