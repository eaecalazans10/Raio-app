const CACHE_NAME = 'raio-v1';

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(clients.claim());
});

// Handle notification clicks
self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(
    clients.openWindow('/')
  );
});

// Schedule notifications via messages from the app
self.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'SCHEDULE_NOTIFICATIONS') {
    // Notifications are scheduled from the main app
  }
});
