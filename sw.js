// self.addEventListener('install', function (event) {
//   console.log('SW Installed');
//   event.waitUntil(
//     caches.open('static')
//       .then(function (cache) {
//         // cache.add('/');
//         // cache.add('/index.html');
//         // cache.add('/src/js/app.js');
//         cache.addAll([
//           '/',
//           '/index.html',
//           '/src/js/app.js',
//           '/src/js/index.js',
//           '/src/js/subjects/field.js',
//           '/src/css/style.css',
//           '/src/assets/Elogo.jpg'
//         ]);
//       })
//   );
// });

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});