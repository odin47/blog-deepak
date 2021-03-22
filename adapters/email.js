import {Email} from 'services';

const subscribeBlog = (email) => {
    Email.handleSubscribe(email)
}

export {
    subscribeBlog
}