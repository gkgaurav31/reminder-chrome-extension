var purpose = 'default';

chrome.alarms.onAlarm.addListener((alarm) => {

    const key = 'purpose';

    chrome.storage.local.get([key], (result) => {

        purpose = result.purpose;

        if (alarm.name === "remindMeAlarm") {
            createNotificationwithPurpose(purpose);
        }

    });

});


function createNotificationwithPurpose(purpose) {

    chrome.notifications.create(`my-notification-${purpose}-${Date.now()}`, {
        type: 'basic',
        iconUrl: '/images/alarm.png',
        title: 'Reminder!',
        message: `${purpose}`,
        priority: 2
    });
    
}

/*
function createNotification(){
    chrome.notifications.create(`my-notification-${Date.now()}`, {
        type: 'basic',
        iconUrl: '/images/alarm.png',
        title: 'REMINDER!',
        message: 'This is a reminder!',
        priority: 2
    });
}
*/
