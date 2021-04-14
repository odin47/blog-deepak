import {post} from 'services/axios/request';
import {notification} from 'services/utils/notification';

const SUBSCRIBE_URL = 'https://ujc6h7s0xc.execute-api.ap-south-1.amazonaws.com/prod/email-subscribe';
const VERIFY_URL = 'https://ujc6h7s0xc.execute-api.ap-south-1.amazonaws.com/prod/email-verify';

const EmailService = {
    handleSubscribe: (email) => {
        post(SUBSCRIBE_URL, {
            "email": email
        }).then( ({data}) => {
            notification.show(data.message, 'success');
        })
    },
    handleVerify: (email, token) => {
        return post(VERIFY_URL, {
            "email": email,
            "token": token
        }).then(({data}) => {
                if(data.message.rowCount > 0) {
                    return 'success'
                } else {
                    return 'failure'
                }
        }).catch(err => {
            return 'failure'
        })
    }
}

export default EmailService;
export {EmailService};
