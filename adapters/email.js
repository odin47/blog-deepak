import {Email} from 'services';

const subscribeBlog = (email) => {
	Email.handleSubscribe(email)
}

const verifyEmail = ({email, token}) => {
	return Email.handleVerify(email, token).then(res => {
		return res
	}).catch(err => {
		return err
	})
}

export {
	subscribeBlog,
	verifyEmail
}