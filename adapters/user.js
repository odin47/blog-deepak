import {User} from 'services';

const getAboutInfo = async() => {
    const aboutData = await User.getAboutPageInfo();
    return aboutData.data.data.aboutPageCollection.items[0];
}

const getFooterInfo = async() => {
    const footerData = await User.getFooterPageInfo();
    return footerData.data.data.footerCollection.items[0];
}

export {
    getAboutInfo,
    getFooterInfo
}