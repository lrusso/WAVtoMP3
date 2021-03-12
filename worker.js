const filesToCache = [
	"WAVtoMP3.htm",
	"WAVtoMP3.js",
	"WAVtoMP3.json",
	"WAVtoMP3.png",
	"WAVtoMP3FavIcon_16x16.png",
	"WAVtoMP3FavIcon_192x192.png",
	"WAVtoMP3FavIcon_512x512.png",
	"WAVtoMP3Share.png"
];

const staticCacheName = "WAVtoMP3-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});