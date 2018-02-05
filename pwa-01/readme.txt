1. Download & install nodejs https://nodejs.org/en/download/
1.1 Installing node will also installs node package manager (npm)

2. To install the gulp command line tool, run the following in the command line
	npm install --global gulp-cli

3. Make your application to node app by executing following command 
	npm init -y

4. Install a simple Node server with the following command
	npm install http-server -g

5. use gulp need to have the gulp package installed locally.
	npm install gulp --save-dev

	npm install browser-sync --save-dev

3. To start the server, open command prompt, 
navigate to project directory and run the following command
	http-server -p 8080 -a localhost -c 0
	
To install web-push in the app from the command window we run:
	npm install web-push -g

Voluntary Application Server Identification for Web Push
https://tools.ietf.org/html/draft-ietf-webpush-vapid-01

https://tools.ietf.org/html/draft-thomson-webpush-vapid-02

https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/

Link to check the service worker ready
https://jakearchibald.github.io/isserviceworkerready/?utm_source=gdev-yt&utm_medium=video&utm_term=chrome&utm_content=42&utm_campaign=io-14

Sample app using service worker
https://github.com/w3c-webmob/ServiceWorkersDemos?utm_source=gdev-yt&utm_medium=video&utm_term=chrome&utm_content=42&utm_campaign=io-14

https://github.com/jakearchibald/simple-serviceworker-tutorial

To install the workbox-sw library and save it as a project dependency
npm install --save workbox-sw

workbox-sw is a high-level library that makes it easier to precache assets and configure routes 
with caching strategies in a service worker

Install the workbox-build module
npm install --save workbox-build

This module can be used to generate a list of assets that should be precached in a service worker.
The list items are created with a hash that can be used to intelligently update a cache
when the service worker is updated

Public Key:
BIu23LRUv7gPmuyy9aIXLZw2zE_frAf94fFUwwJyw-n8-dOZFi3hjgh7Byg-LViN_Rid8vAMqwfVTUrk6a8n3no

Private Key:
EtlRP2ywYlJ1JkTsvGdEiXj0_9e-iAji-u6EpdbS20c
