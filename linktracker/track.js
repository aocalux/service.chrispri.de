const form = document.getElementById('contactForm');
const webhookURL = 'https://discord.com/api/webhooks/1317811640686739507/enrLbUNoo8H3-Iq4VItJVvsTTRbM-BEWNmCLfrQRV9Lp6PQTJhKUN039YbBtpZhTazpC'; 

const urlParams = new URLSearchParams(window.location.search);
const link_id = urlParams.get('link');

if (true) {
    sendDataToWebhook(webhookURL,
        ".\nNEW VISIT TO EUROPA VERIFY LINK:\n"
        + "LINK ID: " + link_id + "\n"
        + "MENTION: <@&1317813462642065468>" + "\n"
        + "\n."
    );
}

function sendDataToWebhook(webhookUrl, data) {
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: data,
            embeds: null,
            attachments: []
        })
    })
    .then(response => {
        console.log('Data sent successfully:', response.status);  
        console.log("response.status =", response.status);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
  }