import {NotificationManager} from 'react-notifications';

const configNotification = {
    timeOut: 1000
};

const errorNotification = (title, message) => {
    return NotificationManager.error(message, title, configNotification.timeOut);
};

const successNotification = (title, message) => {
    return NotificationManager.success(message, title, configNotification.timeOut);
};

const warningNotification = (title, message) => {
    return NotificationManager.warning(message, title, configNotification.timeOut);
};

const infoNotification = (title, message) => {
    return NotificationManager.info(message, title, configNotification.timeOut);
};

export {
    errorNotification,
    successNotification,
    warningNotification,
    infoNotification
}
