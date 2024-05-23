/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-4b7c5883'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "fonts/CeraGRBlack.ttf",
    "revision": "d5029302cca7df63f92b945defedea3e"
  }, {
    "url": "fonts/CeraGRLight.ttf",
    "revision": "4c23d1c747b7c11cecbcc0bc4ecbed1a"
  }, {
    "url": "fonts/CeraGRMedium.ttf",
    "revision": "508fb4f19c40b7c6a170913ad9a5de34"
  }, {
    "url": "fonts/Gelasio-Bold.ttf",
    "revision": "af68d17f6239da986720e5c622c535ca"
  }, {
    "url": "fonts/Gelasio-BoldItalic.ttf",
    "revision": "e1999a9845836b5e88da9e31b4ebca9c"
  }, {
    "url": "fonts/Gelasio-Italic.ttf",
    "revision": "24422e8e2c6dad6def688c72cc315a8a"
  }, {
    "url": "fonts/Gelasio-Medium.ttf",
    "revision": "5909de6d20f07e68084b508b56df05c4"
  }, {
    "url": "fonts/Gelasio-MediumItalic.ttf",
    "revision": "0bd6f362b6576dedcf034494db7697fb"
  }, {
    "url": "fonts/Gelasio-Regular.ttf",
    "revision": "d6112a2452e42a3e8e93bb4baed1d010"
  }, {
    "url": "fonts/Gelasio-SemiBold.ttf",
    "revision": "ca1216f398475d8d1ef69a641df3b9ff"
  }, {
    "url": "fonts/Gelasio-SemiBoldItalic.ttf",
    "revision": "6c06bd475e4e124014f4066ad5aa3a9d"
  }, {
    "url": "images/background.svg",
    "revision": "fa27477493998c56dd43c56330681766"
  }, {
    "url": "images/client1.png",
    "revision": "c06fefe8e7666e9dd66c65d301a5c22b"
  }, {
    "url": "images/clock.svg",
    "revision": "8716b15b33cb8051470a4ac40110aa06"
  }, {
    "url": "images/Coaching.svg",
    "revision": "384838813b672853044fee705d3a41bb"
  }, {
    "url": "images/Coaching2.svg",
    "revision": "0c464b01809b4bd1d2b85b9bb28754b2"
  }, {
    "url": "images/comma.svg",
    "revision": "88bb0109fbc40fda3c013c21ff5a5552"
  }, {
    "url": "images/Consulting-1.svg",
    "revision": "b82d38da0f2c6fd2e51cf4abed589ba5"
  }, {
    "url": "images/Consulting2.svg",
    "revision": "23e4b8cac09e9d4a95656c4497ae9f87"
  }, {
    "url": "images/coursedetail.png",
    "revision": "415c59763ffa464162ece95f98694460"
  }, {
    "url": "images/coursesdefault.png",
    "revision": "4a22000ab29c2430c79547faa25f6e93"
  }, {
    "url": "images/dollar.svg",
    "revision": "723827ac6c7f4393b47a6b8ec66466e4"
  }, {
    "url": "images/facebook.svg",
    "revision": "727a72c2292eb0a8668bc068aac03b31"
  }, {
    "url": "images/fav.jpg",
    "revision": "d44fece9128cf3800e3061998ef0c6c9"
  }, {
    "url": "images/footerImage.png",
    "revision": "d3a1aed9c724c6f363ed0a38fd09a98f"
  }, {
    "url": "images/footertwo.png",
    "revision": "340bdd094d0cdd59b0b93068616ad63d"
  }, {
    "url": "images/green-left-arrow.svg",
    "revision": "e1c65f8ee0229e396db2694cdea88a54"
  }, {
    "url": "images/Group-202.jpg",
    "revision": "50f8577fbd26c5ca6803984fb4ab1d8c"
  }, {
    "url": "images/idea-1.svg",
    "revision": "d4364fc21b1e7e73a3bd63f9c3610537"
  }, {
    "url": "images/instagram.svg",
    "revision": "f8b8b2d92935ec8ac04cda759886677c"
  }, {
    "url": "images/kaizee.png",
    "revision": "76bc5b30105ddd790e701011ae201018"
  }, {
    "url": "images/linkedin.svg",
    "revision": "3133025ece5198fc274b99dccca96989"
  }, {
    "url": "images/logo-h.svg",
    "revision": "966d9cc7b1bae6746af6c414ad0731f9"
  }, {
    "url": "images/logo.png",
    "revision": "ac2f6b55dded594370e1bd64201f2500"
  }, {
    "url": "images/logo.svg",
    "revision": "99ce866012792169de7317a2385e2c62"
  }, {
    "url": "images/management-1.svg",
    "revision": "c3c64bb8399e520c3dd9a29ac19d9614"
  }, {
    "url": "images/mobile-services.jpg",
    "revision": "f0c90395eefde9dd56e675a6b8b15f6e"
  }, {
    "url": "images/pawn-1.svg",
    "revision": "ef4868b0ebf10b4dcbbb28414a3467be"
  }, {
    "url": "images/people.jpg",
    "revision": "0518facb978e214b76f00371c52477b4"
  }, {
    "url": "images/person.png",
    "revision": "37def059a586c8df32c702ffc0cb5736"
  }, {
    "url": "images/RonyKlayanyLogo.png",
    "revision": "cfccec53977f5865d59d232b7b73548b"
  }, {
    "url": "images/service.png",
    "revision": "31fa1c0ee2b1560b015d338a4cd16a08"
  }, {
    "url": "images/services.png",
    "revision": "1208d147ed1b09137df1c014aae51291"
  }, {
    "url": "images/Shape.jpg",
    "revision": "592ad0901272f82b7350424f1fb36e7c"
  }, {
    "url": "images/swipe1.png",
    "revision": "b322258b34fa1941fd7c4c016bc82d89"
  }, {
    "url": "images/swipe2.jpg",
    "revision": "1284d41a89586450e0c0c0fb48bd57f0"
  }, {
    "url": "images/Training-2.svg",
    "revision": "19ed2acd7c2a4951e080bf314372629f"
  }, {
    "url": "images/Training2.svg",
    "revision": "e8a7dea779373f7cb4e96bbe1fc4e068"
  }, {
    "url": "images/youtube.svg",
    "revision": "6e24466b725434f2670f6eb68a1a2f6f"
  }, {
    "url": "manifest.json",
    "revision": "9e00d3d643c8e73256f7fe3919d84c13"
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=sw-dev.js.map
