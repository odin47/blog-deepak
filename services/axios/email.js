import {post} from 'services/axios/request';
import {notification} from 'services/utils/notification';

const SUBSCRIBE_URL = 'https://ujc6h7s0xc.execute-api.ap-south-1.amazonaws.com/prod/email-subscribe';
const EmailService = {
    handleSubscribe: (email) => {
        post(SUBSCRIBE_URL, {
            "email": email
        }).then( ({data}) => {
            notification.show(data.message, 'success');
        })
    }
}

export default EmailService;
export {EmailService};
