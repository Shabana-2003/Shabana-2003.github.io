'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "59d0d19fc45ca69230d858f60a5557f8",
".git/config": "e1891058ccadc14eb87396173734ede3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4e47cefa6a2a9285459626508732cc1d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed8637e2c06b9cab7d5d4b978a05d91b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75b2b8c438c05e7bd339f15528a4aff1",
".git/logs/refs/heads/main": "23995b5adb5f22fe765f4efbf55ddcd9",
".git/logs/refs/remotes/origin/main": "0325a7525c9f86f0ea7bd6366d30e7f4",
".git/objects/05/fb89047b1b26cba94d2ddd5645f1de2e184fdb": "c0437a1297e5d4f4320ba29240c9cc94",
".git/objects/06/06a643697dd7d543e6ec14ea76a8df1b96f601": "0482f70eb7efd2cc2a3e8ecfa41b027e",
".git/objects/06/128bb06c00a914d65e197bf519320305625c1a": "4dab8fe89ffd3a02c06f099aabeb1ff7",
".git/objects/0b/f9491b7200eb7fbee376744740e5956e3f5ad6": "48cd4504c5281f69d410eeb23fc43a5a",
".git/objects/0f/5b1ff24152d632fe39d97e6ee1766273b3deed": "bff7e849ba10da2198debcaae54d3803",
".git/objects/14/6f17b39e720b95afe714c4123287f0a8f4f42f": "6d7934fcf5375c9ad82b3a05a9638203",
".git/objects/15/26127613b7c91c0c8266f56611d859ad3e63bc": "ed7e584954c9ade203189ffbbaabff37",
".git/objects/2a/dd44f17ffb2a931dca9c76cbb96d68e716ea7e": "9ba4f8878e5cc6702085888d285d2af1",
".git/objects/2d/7293cc2cfdb4f7e0e099cd92abcd96be82fdc9": "f9545a9fd924f1d1f02fe44f7c406c01",
".git/objects/30/f0428a3aedfed8a71adc2bb5e93079640e7f0b": "18b8aea1980259dd22f6fec0c05e5f83",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/726e965485283199daeec8ce3a5b932321fda9": "1420ad8d513d44d6b3a8cbac73146fb1",
".git/objects/37/853f0951cd9fa1f9440c8cf91fa937cc60a15c": "38b3907306dd17a73b84fb354d03d54a",
".git/objects/37/f0581eddff7d67866326e542463d50826f64fe": "4f83b3d690167a218d58d54bc1be2768",
".git/objects/3b/c89f2f0f3c72f6b38e790e09295f599e0a5124": "57f5f4f5277198423e551b6da63e99bf",
".git/objects/3e/626019d93190bd622cef5fedd549fbb0cd6928": "d94572496fad9a6962491a8fd25da401",
".git/objects/3e/e7317f78034f097ded3d25413ae679fa685fc1": "e35ecef9c02582206842be7a3529a19a",
".git/objects/3e/eee959a034509a04a135b3bccf44cd57f4024c": "f122bec054f1ae82157a45f4a0654cc7",
".git/objects/41/af6591d30db3d0b94c9d23ed250d27b13dc0d9": "b8faa97ff7de9d660fa214bd84e07235",
".git/objects/49/b7b2e096f291f21fae424888818d1b91268502": "5e077b4a3898f4f87242805c0602a8c8",
".git/objects/4d/5631ffc906d726ea53efef4020dff3e88798fa": "b8c534f2da52e6b06037e32aefb767ca",
".git/objects/51/9d4a39e48885d9b0419d0547573dfc5bc5c1b4": "3115a8296dc3e20138045f75c42c802d",
".git/objects/52/a1928275634d3b844bd4e3a483c160106a5bf8": "8a2afe9da4826249959ebaa5e0cbd0c0",
".git/objects/52/bbedf475ae3c0e3a9f11557f02c9b42a8d5dac": "db047bdfcb4628ea78808f8687c5f017",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/54f487b6d4daa7b7f73d9b2928d84535000126": "e63b5dd9067a0dba62eed3065c21871f",
".git/objects/58/8d7614fcc0560549b8b9672267aebfff5a0ed9": "f667797222c7bc740971aab5a4932958",
".git/objects/59/a8f7debb07f0c2790a4ac8777cfe3e92fa594b": "2cf72d3dfe2e5354944d01a8fbd6410f",
".git/objects/5f/55cbce28eb2777d425437de903c0a5a7880474": "d796fdcc602feca6d418ffaff533da34",
".git/objects/61/bb9e5c7886852b95f3b27ebc691821f75f3050": "17372106ce1da91132f0014bed7adbb2",
".git/objects/65/70b9f0c25989a5fabc31ef8d66512bc99c01d2": "76022ed2823550f4d3ba10c6cf78852f",
".git/objects/68/e21ed05aac1a2776db015da25a48e4015c08cf": "1fdacada240e44a5e2d728af441a2191",
".git/objects/69/8dfec50ba51b044bae8a7700fdac53675fcae1": "60b3f851b8aa34d9c2641abda63872e3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/cadb9e444d219902814ba38195bd2eb372c445": "51c671a7ed5def1b1d10812a457f7917",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/de388482ed2f8a0bdcc5b284748a8d35487e96": "bd3e86697e79371be26d292a9cbeddea",
".git/objects/97/52e7e63933b588b79ceb7a27c974b8cf5cd8b2": "1ad58cf06bee6265e12bca20c87c885d",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a2/ffeb0323542209182c28ec96cf747c237dd3bb": "0a03518355709be79a20c8d43934169a",
".git/objects/a6/8d910372f91e39afa3fe4857d5eb653accfb2e": "b69047ebd207bd63b88ddf142453a1f7",
".git/objects/a9/bcbff12589fcd5b5bbd71e03b19946dd217647": "e72ce7e834bd44bb0b68e61938eec514",
".git/objects/ac/17fb3656c88d63b694b6f2c1548018d2270bfc": "5eff2ddee2cd6967073ca42d40ee4a3d",
".git/objects/b0/828f7228073ec13cf43b88c3067bbbeb35c029": "c5b038534d56c57dbed559848c5a39b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/aa9f78c65d765ccb4898a481ba76138ef022ff": "51f3a1ff8519a8b490125dafc73dc77c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/f6bf90a7ed7f68be9db92398e749788b4c3c10": "5d15acba383044f13de7c6e745899a27",
".git/objects/be/79f487c9ac16c3bc52e86f450ec6baf379f565": "902298093e2880b175c5d98749274f25",
".git/objects/c2/cbd0565eacb517e82256924f75c1d98882bd77": "70d5da5df55e61b61575a1e68ea51573",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/75ac218d47f5d2c5077aca185f93954dc6af5c": "7f0164f6e099aff25ff7b4bbd6aa1626",
".git/objects/c7/9f552bf400d9f2a49ff8c9e82b0708a420e049": "3d8113cbb2f6ed9013f2448b0c748a19",
".git/objects/ce/7ec1a39314d50d19de3b58ef946e9dbdafc847": "e9cb637c4ccf8e58b9ad4acfed53c986",
".git/objects/d1/9cee6a6d0bfe2e828547bb66fa528515e82faa": "cbbaaaeb454e772041e08552871c20aa",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/585baf5b5eedcd1ecde7aa6930ef7b4cc8fef4": "02ce4cef2c2f62cd059d6b4b0c716217",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/b9f89e7dbd4ed54bca7586ed2e0e17ea8d6330": "e31a2896cee89430bfe2fdb104565e11",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/de/112408efc89414077ddd4a8c6bcffde6c9ddaf": "419f5e4fe1591d420dd3f93a67150c9a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/c036986ecabad563d65c9f9c4bac2340e013a0": "a46af4a0335db09a025a29c96e5d3689",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/5101f863f5457d33720dd8f21b501c6b59c061": "06ecc3bdc3d3386487126591ae2d4830",
".git/objects/f9/fa653b2f6f8082687f7c0aaeceb9f3a05ca970": "208904ca59e773ef009ccb78f76e97b1",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "0aacc80c459c1beeff91a2ba73bb275a",
".git/refs/remotes/origin/main": "0aacc80c459c1beeff91a2ba73bb275a",
"assets/AssetManifest.bin": "6440a6e29eb3b75c4d132da5fa874e5f",
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
"assets/NOTICES": "e06f2d6c51488f1f3f06108cd1d10c5c",
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
"index.html": "78f86cec071984bd235438a838e235cc",
"/": "78f86cec071984bd235438a838e235cc",
"main.dart.js": "317c38bd8000cc0cc6f6381ae901413e",
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
