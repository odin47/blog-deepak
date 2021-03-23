import {useState} from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

import {subscribeBlog} from 'adapters/email';

import styles from './Subscribe.module.scss';

const Subscribe = () => {
    const [state, setState] = useState('');

    const handleEmailChange = (ev) => {
        setState(ev.target.value);
    };

    const handleEmailAction = () => {
        console.log(state);
        subscribeBlog(state);
        setState('');
    };

    return (
        <div className={'flexCenter'}>
            <Input value={state} handleChange={handleEmailChange} type='email' placeholder='Enter your email'/>
            <Button handleAction={handleEmailAction}>Subscribe</Button>
        </div>
    )
}

export default Subscribe;
