'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5c59e2f596b8b2e7eaad04639c8bd599",
"index.html": "35c9eae1ea7196945a80118d29f6d1ff",
"/": "35c9eae1ea7196945a80118d29f6d1ff",
"main.dart.js": "785d03fdc65aee73f5346bb523114d30",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60901a8a289e143f2dcb2a9e50f6e54d",
".git/ORIG_HEAD": "3cc801316622f74db5f3c00e633a142b",
".git/config": "a49a00732be06301939de4d5c40acfa1",
".git/objects/0c/ca11f0465a09747ef6a297ef327c7359adb170": "15d6da30abac8dee9771cfc30de1174b",
".git/objects/57/f0c09025640b7041c7dafa0881733eaf94aaae": "db88a6de7442818a58eaa0c0825927bc",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/dcc1bb61f12fa153d6b7972971c341a83871eb": "8b12b707f284a42283366afd28dd67cb",
".git/objects/60/a4a2f2f75f4c7b1b467761941312969d939de2": "8fd64ef4a37bc454348cfde8f026c29c",
".git/objects/9d/359a649de142b5aa14d6b3582cd4972dd9b33a": "98e3fba71242b7c9c52c362b1c5d9be2",
".git/objects/02/43c3954a603466b0b375de7fcd4c1dd3487928": "e92de789428bae965d00769741ed8fff",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d0/248f25a4cdb47a1a9cd78aab45657710c9add7": "5ae74097b9ba941aa33bab707d0bb8b0",
".git/objects/d0/3b979d5b51ba3cbe5c4b7b252ae552f27f4cd1": "b3b10c5ea4dbee407ccbc9141031b583",
".git/objects/be/c47d871cad447365f1edb1ea8f556712c7df66": "819f3756956030dd06c098a4b981ae5f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0196d65fc98f31f9a0a5d657bbe289a685aa6d": "ec785b55bad165b4a86faa5e46acb9f4",
".git/objects/f4/bf23077fcc9a9217a8a677d2f958f239ee0800": "3d671bf5d4a74611eac2112ebc7fdc1f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/6a7098fbdf23081be55bb561520ef3dd5f8ddd": "41e0d0d36219c6ea3ec896624a622cf2",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/ec/71e9369601aa6b87dca4637c447b2646807bb7": "11056cddcdf0d25a3390693ea68781b7",
".git/objects/27/3e6a4dd6f6eae98c410eab9a49758c57b6efee": "0ef8951ddc1ae1f0e47f7aa5974856ba",
".git/objects/16/acffbef1d35e56d38503cb9ae9942bb5f8d1f7": "f6069eccf352df1e5db256d9c2ff4bf2",
".git/objects/1f/1936ee5c26e1e6f8408f5c52533a8928a6a39b": "928549da875e18f089604fd9108c38dd",
".git/objects/87/b2dce12bb38f7d1b2718b33669fdf900129910": "7599ed5e88c6b0201812ef53e58ebdba",
".git/objects/74/4884eb0f9662c6ae1dd58434830bbbc5614420": "4f89d712fb9cc57eaade78e05c2c1c7c",
".git/objects/17/e8dd98f478d895bf6a160577dc2b0054c6a11a": "d816816275e0ba1f9158daab9368cf7a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/19/f295fabc3f9c3f74a7f925683e8d64b6a8185a": "6a9903d931644dc0dea65a0cee7673c8",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/72/27a6a10b2e3f78c0c8f3f86bf4d072aea89e93": "fa23871f3475b085e178eb2a84e8521f",
".git/objects/44/327190768eebce109f453213056358093951ff": "4a742e9072d0c02be00c63189a7915ac",
".git/objects/88/9ea1de1a740c2c29c0455d959157ced94d2365": "d47f71cb2c5299e8a585459958f12c9f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/c192ed4b6b65529f4d5e5b1963de22390a2d9c": "1ef82b8f93ce65643738f86a010886fb",
".git/objects/38/bea76c018e21862199715cdfdfe87c8afb9d88": "784ee58e5082fe8e3be6f2b4846454e2",
".git/objects/36/b8703b792e656a1bcf2ce08c1d89393f33baea": "4c580e7b4d36eaa45863dd806f07d359",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/a421eb2003eb98645a2179dba7dd807f18c4e9": "983ae0217e635391a05ad78900bd36d9",
".git/objects/98/0c9f279c950982cb643c2bdcddc81198b54bd6": "812e7e293891ff9a83a1e6ca40387f47",
".git/objects/5e/1e5c61233f8463088d9469a5f24571321662ad": "358df751b4b9dd9867112174be93e3c5",
".git/objects/5b/8ef19ea000f826bfee870e7e65c041f18ece54": "390bc55b36072c4da0affd9efdf9f75b",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0a/9276fb661add3134dae897fd05567365827ec3": "a5860e0a61027cbf92f811d71c7fb9b8",
".git/objects/bf/76769940ce9ac44c1dd3fe093bf760dc7995af": "f41b973233fc1738775d4f2254d99729",
".git/objects/d3/938149f1b34139706bbb3ba8f0bf2a85f99501": "c7c409bd783b8738aca8b65e24ef842e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b9208944464084cfa3ed8259a6ceb73554333d": "42eab30cdda93a7e1652f81ea937ad29",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/23771181d78f4ec25face301c04681d5192eea": "45cd5626380f4bdcf16d8e817beccb25",
".git/objects/ea/0ea36f04044df7ec59ecc93122e0eb4bc3646b": "afd8f2544d6c2e517c80981c3274af7d",
".git/objects/cc/53cd1cc8b812a7f6c834eec7edbb59f60aee7f": "89f8317be273c4dfb1e8236ae445636e",
".git/objects/e6/04c74b871d14fab6b614224c36e8c1ae4287a8": "7a11e4be72839e8df68a37e21ffa1e4e",
".git/objects/f9/68d9118cc528422049ccbf69ab81f4bcec80a5": "b318908aeff21e622e47d4acd22a001e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/f6/00c55e15a3d10ee11a6a248083c58224e91439": "ac32a0bfbd0671495173dcc3f3ac1100",
".git/objects/f1/f451ff80815f35313547bc6adfc7f5f843a2c3": "faafde72afec0a7bdf0967cb200dc59f",
".git/objects/46/863510c196b999fa3657824a46ce0183121883": "8654682df0cafb8328ee74092cbd9a08",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/8eb8120d64bb3edec73f7a72d03ed42275b71a": "fa2e29d72eeb50be978ffef6e20b02df",
".git/objects/24/31fc85a516b043cc56471b7da8889534d0c160": "417f713979e8be2139dbb181e17c30a0",
".git/objects/4f/133a8f669e4d0a8a1908579505379ae36c84fc": "372f3268792ee581293657d17342b7f5",
".git/objects/8d/0924056156fd787ea90170f3de43eaa66621a8": "01a2d475f363e1382950d9a326c9cf3a",
".git/objects/8c/2f4cfb7899b1168142d4c1f457c5b7440505f0": "f2977020e3087117be7acf77744ad515",
".git/objects/85/304a7af4da75baa796eab47e822d3b221f9f3f": "a2076edd5a903951462d335176e9d02f",
".git/objects/1c/b2d63afc77bff85d120360c5cc379749a961a1": "53ef7f3a9c1ad14318b44435dbcca762",
".git/objects/2b/afc4f557356d7ad81cfb8b83cf2000b0404b2f": "934d11b89ef63e105344b4e4cb88274e",
".git/objects/8b/87699bd8668ee8f5ebe44b5cffd34ab73c1e8c": "61716478f1698bf17914b2fb20cabb51",
".git/objects/8e/182b1edbe90ecb77c76fd67e091f543de70cc2": "4353dc46c7fc3c26089153f307419f4f",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "258c903f9478f3bc350edd8c4ff5c89d",
".git/logs/refs/heads/main": "01cd2a45a5403173c4327c338c9c31c0",
".git/logs/refs/remotes/origin/HEAD": "c69cec11dc29ee3957de4118746b5ab2",
".git/logs/refs/remotes/origin/main": "817139e10a4b5006fc86441f81855589",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f1315a5f81e6a40e107a0e30aee33925",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f1315a5f81e6a40e107a0e30aee33925",
".git/index": "c00d1a05834e6c15b9f8ddde43e38f8e",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "1328c1bf09bd86618d57c77e55b87ab0",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "71688413102dcf1f8bf51173d8f360f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4ae8c089387481ace69c6155e9057dd8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "65016c16ac9cd93780b20f4b6805381f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
