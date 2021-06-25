'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "281f2a7b1646c3dea6feea25f04fa556",
"index.html": "6b97d2e1da0c40554165c22d575bb536",
"/": "6b97d2e1da0c40554165c22d575bb536",
"main.dart.js": "279f17f5733f7d8fdc2b47cc03168846",
".git/ORIG_HEAD": "6af781c1b73dbdbc38b9c4c7172527c8",
".git/config": "072d5a78f4d72d56195eafea46d332ed",
".git/objects/0d/11731dce9c8dccadf3ab81156e4bb1fa2a8af9": "85d3df8da322622421c876c960e2bf15",
".git/objects/92/599a8efee1009033537677a45b4887c57214b1": "0e7f5c0af629ea4fc7409c2cfa53508e",
".git/objects/9e/5c19de07d9f65ac7a228782a1a43563b044baf": "2f9409928897ae063bdb7b3ab2b7c259",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/51/1c5ec75562df4f645cdf8ddbe8b37913003669": "5e2bf9d3ba4537a8bdb76eb57084d433",
".git/objects/58/dda6452b1038e7919a280a8aa575ea319429bb": "b61184808c33bf8d89ef72debf82649e",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/02/9badea2653a99fa2bd4387c11012b30690e6ea": "d7303f68595e6abbf8ab3c1936316e32",
".git/objects/d0/48083759a53f79e5b0be0ffaab624af5399eaa": "886c1d6baa25d3ebb05dee15c72b8153",
".git/objects/b3/07b20b4667ee26b020ff1887d3c24da628e05b": "9075377cbafd3cffc681b251591ce26d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/439e55e74579c0708cbe2e09be17385f92b535": "d43c6f92416563276e90dcc835982805",
".git/objects/fb/3416963bab649b94779a532ff66a77759fc5de": "33f18657886f8b0b03e71d8241a29834",
".git/objects/18/b94a759ae8bc49010a5b22ca5e94ea5296fa46": "b2703af0cc35820418004ae851910763",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/73/f261a1928c8e707beb13257028403a2fc972a7": "c9cbb2e800c9c8149b75832e0946be85",
".git/objects/7b/1f039e985b61f54971dd8a5a4bc6ad06acbe96": "4db036dd399f5dc17d87bba063aa7a10",
".git/objects/6e/6dcffc57bff60b16b29a75e79b669bb5db494a": "25499c4bddfd9e16c367e8e7365b0896",
".git/objects/5d/899c01fe0b906e3315b4cf09c1b23dfc376172": "092072a32079db83181ba4188bb74a42",
".git/objects/b6/5014393b61db02fd71a336228d1fc3f64df6b8": "6b579c21796d2342f35688f0a0e23fe0",
".git/objects/a9/1b2f66bed9b378b7778aaa4a4d2dd85da035d8": "1ef2ad3889f748a3d9df92f5bd0a05e7",
".git/objects/aa/85fd705f2d18fa3fea5e4346e877efcc2cc736": "9522ef44f03ecddbc5512fd7d2bb6dfb",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/c0007a8adcff564826dba818b0d3e3c664cb0e": "8039f1433b2edc7de4a32a6477489719",
".git/objects/f0/6c6517a881b95cb8014ea4e0e00e636f8ceb59": "cee4691ad8ee271fdbf127dd44bd58b0",
".git/objects/f7/df94bc77673965f34776c8b72cefa345ddadc2": "f3dd64b2c64a0322e25db965a5b89680",
".git/objects/e9/4380d0959dafe9e0664b62787d736bd0fa029c": "91760263070e198c99a4993d9d5ff2ce",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/5cb25384a6ed44c0990d652fe2f5bb92565b26": "63ec216d7a1e0453d3776b34c8b7cc67",
".git/objects/76/435f7b92b7f97734598cdb3cac6b39f52528cd": "59326d224ff2dbc19d905e153df0fccd",
".git/objects/78/73917b1c4133e81141c53fb50a1b8aaa75b463": "50b61d36b098bb11f319fe18275d60d7",
".git/objects/7f/e2102bb2076735985a2c08799208b90565633d": "11f069d5b2800eac1933a278f73b05b2",
".git/objects/14/7c2e4361814b9001c02440e7e3a56396cbbbea": "1a40bb945bf21c1c825c89c61bfe1d37",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1afc58b341e263531de50c3379991da8",
".git/logs/refs/heads/main": "edbdb69386acb94be989b0f07092b973",
".git/logs/refs/remotes/origin/main": "e8a626d0fc1ae81042aa6e4742217727",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6af781c1b73dbdbc38b9c4c7172527c8",
".git/refs/remotes/origin/main": "6af781c1b73dbdbc38b9c4c7172527c8",
".git/index": "fa29ba9b97190f12868469371c728b1b",
".git/COMMIT_EDITMSG": "7f63c9b601ecd0ed12dda10454a3e4c9",
".git/FETCH_HEAD": "7f1ae645129e9abd4c2430a73d983c3a",
"assets/AssetManifest.json": "563dd6adfc9d09a038066d2ff2473a94",
"assets/NOTICES": "820973b794cc526f83d333a8356e12e5",
"assets/FontManifest.json": "58e35e6dfeb4814163cfde9b39d825f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/typicons_flutter/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/json/publications.json": "fbf558395dad0efb3281cdf25913c35b",
"assets/assets/json/projects.json": "5d9c843423c6ce1aa21e9c46929fc93e",
"assets/assets/logo.png": "b67f0c2df821b6f01f60bd64b8cdb6a0",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
