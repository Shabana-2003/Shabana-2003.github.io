'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6440a6e29eb3b75c4d132da5fa874e5f",
"assets/AssetManifest.json": "78f50818da49b411d88b4ec853acd9f7",
"assets/FontManifest.json": "cdb6b136dee98aa1c738cf12d6da82bc",
"assets/fonts/MaterialIcons-Regular.otf": "a7b2e34a527522ef58614b43c5374a9f",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/images/backg.jpeg": "3be6305365cb39fe6ac1743fc065c4be",
"assets/images/background.jpeg": "71b496da6cd9d286262ac98ed49fc438",
"assets/images/Childcare.png": "d373c26a36d38b6881371aac8f8b3869",
"assets/images/Clothing.png": "d01717792230d522fbf9f95a6291a5c2",
"assets/images/Debt%2520Payments.png": "a34ab83b13768e5e790ed2fdf397b468",
"assets/images/Education.png": "975a0361b00cf97c72461aa704365791",
"assets/images/Emergency%2520Fund.png": "6fe4aeaff14dacabf9fdabbeef5de1d9",
"assets/images/Entertainment.png": "3215be6ea28f53ba17d4bb3d1e990e76",
"assets/images/Food%2520and%2520Groceries.png": "f8a69da41b35beca16971c12d11c5a68",
"assets/images/four.png": "5948800c7e843903adda088a47a50e4c",
"assets/images/Gifts%2520and%2520Donations.png": "f97f564150de09ac2cfef25f176fb607",
"assets/images/graph.png": "0911cea2f421220ba031e6ff07784fe6",
"assets/images/Healthcare.png": "8076eda6e4dfbd04385c481001a466b2",
"assets/images/Home%2520Improvement.png": "545fb96550023e2902d063de3e3ade6f",
"assets/images/home.png": "2c7531826b4e98fa5311094176f6cc7b",
"assets/images/Housing.png": "20ed82863df18ed8e8387e87d5313260",
"assets/images/image1.jpeg": "caa31c3442925565f43233eb081c6468",
"assets/images/image11.jpeg": "e361230ae17365e92ba35b21a5476259",
"assets/images/image2.jpeg": "5b17095cfebbb5aaaa54bff3e1bc50df",
"assets/images/image22.jpeg": "d89ae06b277583d299f433506f623553",
"assets/images/image33.jpeg": "f75be36ec6f6fa4d0a5334d3d1954886",
"assets/images/Insurance.png": "0f569ded6556e563f0a2097c6dddbe0f",
"assets/images/intro1.jpeg": "e361230ae17365e92ba35b21a5476259",
"assets/images/Miscellaneous.png": "8fe04857424b959265c970a21840ecdc",
"assets/images/Personal%2520Care.png": "c458f23a86aff0ac27356864ccc24f6c",
"assets/images/Pet%2520Expenses.png": "3c8fa1f1e96f2e563b075716d563cac4",
"assets/images/profile.png": "67906584562cfe06b57d99c15a470a8d",
"assets/images/Savings.png": "e1fb462d0e744ce4244f973c3edfbc22",
"assets/images/Screenshot%25202023-10-30%2520140207.png": "141cd60640cf19ff39c00a5329405484",
"assets/images/search.png": "0faf355cc7787ca87af980db4525e784",
"assets/images/splash.png": "0b29c19b5cc59fd01b80a7d7ea67589f",
"assets/images/Subscriptions.png": "06937a494526c1b57b6ca1118d34059d",
"assets/images/Taxes.png": "080c25fd22af4b909881883acb0bed9e",
"assets/images/three.png": "7560a8f4a6e7e80422bf8bfa2219484c",
"assets/images/Transfer.png": "8ff55a683965eb3ed2faac85f94b66ff",
"assets/images/Transportation.png": "9d9f3a38692df96b5b4e5eb73fb14b60",
"assets/images/Travel.png": "57056f352fb35775a5f5a94d5660fd5b",
"assets/images/Utilities.png": "ce3911eb7773410ff31e953b633bb58b",
"assets/images%255Cbackground.jpeg": "71b496da6cd9d286262ac98ed49fc438",
"assets/images%255Chome.png": "2c7531826b4e98fa5311094176f6cc7b",
"assets/images%255Cimage11.jpeg": "e361230ae17365e92ba35b21a5476259",
"assets/images%255Cimage22.jpeg": "d89ae06b277583d299f433506f623553",
"assets/images%255Cimage33.jpeg": "f75be36ec6f6fa4d0a5334d3d1954886",
"assets/images%255Cprofile.png": "67906584562cfe06b57d99c15a470a8d",
"assets/images%255CScreenshot%25202023-10-30%2520140207.png": "141cd60640cf19ff39c00a5329405484",
"assets/images%255Csearch.png": "0faf355cc7787ca87af980db4525e784",
"assets/images%255Csplash.png": "0b29c19b5cc59fd01b80a7d7ea67589f",
"assets/NOTICES": "6b4613713295efa0bfc75f4ad662a9aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3de8f13c25a85ba128268d5ebe3717c4",
"/": "3de8f13c25a85ba128268d5ebe3717c4",
"main.dart.js": "706484047144b98aaebc4ce2bc493a14",
"manifest.json": "3207ab6fd4d96abff154feefd7548fba",
"version.json": "4e972586d5d08e0d2aa203a6baa7fb39"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
