/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var webPush = require('web-push');

var pushSubscription =
{
    "endpoint":"https://fcm.googleapis.com/fcm/send/erBJdrL3jdQ:APA91bG6XS_bUSLb-VeKrxfK5P1wmyR4lQhf7GwiRhi1NcHJz8oXKKgB4iULOsGGqtrubsXSBitRRido9Tq1ti7oktS2npce1PN1VHNnqBk1An5t1NkCVMcGjWKHx72GW7r6w3AL62LR",
    "expirationTime":null,
    "keys":
    {
        "p256dh":"BCH5fRXnYNTw6KET-rAcL9V5YW_cdu_sGTul8HVoHnxrjexpivhYC9bdIk4JCKa_ynRXii2LIESJo0vd1BA5m3c=",
        "auth":"b9ZZSPMrhfywG2WkMFEpNw=="
    }
};

var vapidPublicKey = 'BIu23LRUv7gPmuyy9aIXLZw2zE_frAf94fFUwwJyw-n8-dOZFi3hjgh7Byg-LViN_Rid8vAMqwfVTUrk6a8n3no';
var vapidPrivateKey = 'EtlRP2ywYlJ1JkTsvGdEiXj0_9e-iAji-u6EpdbS20c';
var payload = 'Here is a payload!';

var options = {
    TTL: 60,
    vapidDetails: {
        subject: 'mailto:kbhaskar48@gmail.com',
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);