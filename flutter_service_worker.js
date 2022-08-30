'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js": "bdd6d53f5ab948213573dbb3ae5b0ae6",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "094b59138b8ba9217ef8d2a31ac62e57",
"/": "2678360f9d6e710f91146527430674e4",
"WebMine.zip": "9edd7b176ab898091da3411410453f9f",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"version.json": "b94af747aff77b107b26d884d158cd6f",
"manifest.json": "583ab03244e101ff5af71d58f32b7f01",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "c61d048800f5229f9ce11757f5163a96",
"assets/NOTICES": "a7c5e219c448bd9afb32576432cd6c4b",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/lottiefiles/loading.json": "40fc9beff9e6d01a07dff59866b198a6",
"assets/assets/fonts/work_sans.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/title_font.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/images/svg3.svg": "3f0a188ebe3f0dadbe31e4edfaba191c",
"assets/assets/images/icon_main_transparent.png": "3a23766a77111dc1a7c1c7d613624c17",
"assets/assets/images/password.svg": "57d08bd7349cb497ec0490e9880c52c1",
"assets/assets/images/icon_main.png": "4b8ac023942b098665c15a65ab0d6d65",
"assets/assets/images/anlysis.svg": "293dcf1809e912af9fa86d98841eeee6",
"assets/assets/images/svg2.svg": "85e63605e2daeea1dd133df148032675",
"assets/assets/images/svg1.svg": "767690786fdbb486819c244cb5f116b0",
"assets/FontManifest.json": "61e1cd249858def0e341d6d79729fc62",
"WebMine/flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"WebMine/main.dart.js": "259b31bfde7fa6e91968cfddacd23564",
"WebMine/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"WebMine/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"WebMine/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"WebMine/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"WebMine/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"WebMine/index.html": "2678360f9d6e710f91146527430674e4",
"WebMine/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"WebMine/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"WebMine/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"WebMine/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"WebMine/version.json": "b94af747aff77b107b26d884d158cd6f",
"WebMine/manifest.json": "583ab03244e101ff5af71d58f32b7f01",
"WebMine/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"WebMine/assets/AssetManifest.json": "c61d048800f5229f9ce11757f5163a96",
"WebMine/assets/NOTICES": "a7c5e219c448bd9afb32576432cd6c4b",
"WebMine/assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"WebMine/assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"WebMine/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"WebMine/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"WebMine/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"WebMine/assets/assets/lottiefiles/loading.json": "40fc9beff9e6d01a07dff59866b198a6",
"WebMine/assets/assets/fonts/work_sans.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"WebMine/assets/assets/fonts/title_font.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"WebMine/assets/assets/images/svg3.svg": "3f0a188ebe3f0dadbe31e4edfaba191c",
"WebMine/assets/assets/images/icon_main_transparent.png": "3a23766a77111dc1a7c1c7d613624c17",
"WebMine/assets/assets/images/password.svg": "57d08bd7349cb497ec0490e9880c52c1",
"WebMine/assets/assets/images/icon_main.png": "4b8ac023942b098665c15a65ab0d6d65",
"WebMine/assets/assets/images/anlysis.svg": "293dcf1809e912af9fa86d98841eeee6",
"WebMine/assets/assets/images/svg2.svg": "85e63605e2daeea1dd133df148032675",
"WebMine/assets/assets/images/svg1.svg": "767690786fdbb486819c244cb5f116b0",
"WebMine/assets/FontManifest.json": "61e1cd249858def0e341d6d79729fc62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
