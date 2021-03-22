import {post} from 'services/axios/request';

const SUBSCRIBE_URL = 'https://lv2dybg5ka.execute-api.ap-south-1.amazonaws.com/default/subscribe_lambda';
const EmailService = {
    handleSubscribe: (email) => {
        post(SUBSCRIBE_URL, {
            "email": email
        }).then( res => console.log(res))
    }
}

export default EmailService;
export {EmailService};
