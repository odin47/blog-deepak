import {User} from 'services';

const getAboutInfo = async() => {
    const aboutData = await User.getAboutPageInfo();
    return aboutData.data.data.aboutPageCollection.items[0];
}

export {
    getAboutInfo
}