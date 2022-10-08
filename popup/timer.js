setalartbutton.addEventListener("click", async () => {

    var minutes = parseFloat(document.getElementById("minutes").value);
    var purpose = document.getElementById("purpose").value;

    if(minutes === '' || purpose === '') return;

    chrome.storage.local.set({'purpose': purpose}, () => {
        console.log('Stored name: ' + purpose);
    });

    chrome.alarms.create('remindMeAlarm', {when: Date.now() + minutes*60*1000 });

    acknowledge(minutes);

});

function acknowledge(minutes){

    chrome.notifications.create('', {
        type: 'basic',
        iconUrl: '/images/ack.svg',
        title: 'Reminder Set!',
        message: 'I will remind you in ' + minutes + ' minutes',
        priority: 0,
        silent: true
    });
}
