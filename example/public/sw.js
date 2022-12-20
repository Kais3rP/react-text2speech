console.log('SERVICE WORKER ACTIVE')

self.addEventListener('message', async (event) => {
	console.log('Got message in the service worker', event)
})

self.addEventListener('push', function (e) {
	console.log('RECEIVING PUSH', e.data)
	e.waitUntil(
		self.registration
			.showNotification('Chatty: You have a notification!', {
				body: `New ${e.data}`,
				requireInteraction: true,
				vibrate: [300, 100, 40],
			})
			.then(() => console.log('NOTIFICATION SHOWED'))
	)
})
