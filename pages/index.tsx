// import React from 'react';
// import {Replicache, WriteTransaction} from 'replicache';

// // const mutators = {
// //   hoge: async(tx: WriteTransaction) => {
// //     await tx.testMutator();
// //   }
// // }


// async function init() {
//   // const {pathname} = window.location;

//   // if (pathname === '/' || pathname === '') {
//   //   window.location.href = '/list/' + (await createSpace());
//   //   return;
//   // }

//   // URL layout is "/list/<listid>"
//   // const paths = pathname.split('/');
//   // const [, listDir, listID] = paths;
//   // if (
//   //   listDir !== 'list' ||
//   //   listID === undefined ||
//   //   !(await spaceExists(listID))
//   // ) {
//   //   window.location.href = '/';
//   //   return;
//   // }

//   // See https://doc.replicache.dev/licensing for how to get a license key.
//   const licenseKey = 'lf6aaecf9a78141a0bac5fa07b073fb2b' //あとでenvに格納
//   if (!licenseKey) {
//     throw new Error('Missing VITE_REPLICACHE_LICENSE_KEY');
//   }

//   const r = new Replicache({
//     licenseKey,
//     pushURL: `http://0.0.0.0:3000`,
//     pullURL: `http://0.0.0.0:3000`,
//     name: 'hoge',
//     mutators,
//   });

//   // Implements a Replicache poke using Server-Sent Events.
//   // If a "poke" message is received, it will pull from the server.
//   const ev = new EventSource(`http://0.0.0.0:3000/`, {
//     withCredentials: true,
//   });
//   ev.onmessage = async event => {
//     if (event.data === 'poke') {
//       await r.pull();
//     }
//   };


// }

import React from "react"
import {Replicache, WriteTransaction} from 'replicache';


export default function Home() {
  const licenseKey = 'lf6aaecf9a78141a0bac5fa07b073fb2b' //あとでenvに格納
  if (!licenseKey) {
    throw new Error('Missing VITE_REPLICACHE_LICENSE_KEY');
  }
  console.log(licenseKey)
  const r = new Replicache({
    licenseKey,
    pushURL: `http://0.0.0.0:3000/`,
    pullURL: `http://0.0.0.0:3000/`,
    name: String(Math.random())
  });
  console.log(r)
  return (
    <div>
      名前を入力してから入れるページ
    </div>
  )
}