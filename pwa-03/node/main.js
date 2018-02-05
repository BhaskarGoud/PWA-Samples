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
    "endpoint":"https://fcm.googleapis.com/fcm/send/dWjhf0Y_0Fw:APA91bHeSfEhVRSdK9I-sSAvQj3DkWBFTM2NpOfuzVSb-Uu8RQ5ZWPadlaxSzFYdZrMVdtqOT7Bz0CC-vNBbMsbLo3d9RhodAE07mCdjEEzVVl8rh8DtzJKR8obVwO7fsexdsbPe47rR",
    "expirationTime":null,
    "keys":
    {
        "p256dh":"BN9tdnBCOgoOFI9RsOkBFTV236uFOf2UjAs7jtrY0MWncQ6SvnKeuz7hg7EpDj_rjrpLd4Tgr6wyP3j0vU3_e1U=",
        "auth":"yHndpoN3SakfSyra5FjqDA=="
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