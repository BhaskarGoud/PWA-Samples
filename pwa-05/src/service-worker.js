importScripts("workbox-sw.prod.v2.1.2.js")

const workboxSW = new WorkboxSW();
workboxSW.precache([]);


workboxSW.router.registerRoute('https://query.yahooapis.com/v1/public/yql(.*)',
  workboxSW.strategies.networkFirst({
    cacheName: 'weather-data',
    cacheExpiration: {
      maxEntries: 20,
      maxAgeSeconds: 60*60
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

// We want no more than 50 images in the cache. We check using a cache first strategy
workboxSW.router.registerRoute(/\.(?:png|gif|jpg)$/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'images-cache',
    cacheExpiration: {
      maxEntries: 50
    }
  })
);

self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    console.log('clicked notification: ' + primaryKey);
    notification.close();
  }
});
 
self.addEventListener('push', function(e) {
  var body;

  if (e.data) {
    body = e.data.text();
  } else {
    body = 'Default body';
  }

  var options = {
    body: body,
    icon: 'images/notification-flat.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Go to the site',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Close the notification',
        icon: 'images/xmark.png'},
    ]
  };
  
  e.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

self.addEventListener('sync', function(event) {
  if (event.tag == 'dataSync') {
    event.waitUntil(fetchDogImage());
  }
});

function fetchDogImage () {
  fetch('/images/dragoon.jpg')
    .then(function (response) {
      return response;
    })
    .then(function (text) {
      console.log('Request successful', text);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
}