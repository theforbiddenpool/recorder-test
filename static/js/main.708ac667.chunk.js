(this["webpackJsonprecording-test-react"]=this["webpackJsonprecording-test-react"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(8),i=n.n(a),s=(n(14),n(2)),o=n.n(s),u=n(3),d=n(4),f=n(9);function b(e){return void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(n,r){t.call(navigator,e,n,r)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),navigator.mediaDevices.getUserMedia(e)}function j(e,t,n){var c=Object(r.useState)(!1),a=Object(d.a)(c,2),i=a[0],s=a[1],j=Object(r.useState)(!0),v=Object(d.a)(j,2),p=v[0],l=v[1],h=Object(r.useState)(),O=Object(d.a)(h,2),m=O[0],g=O[1],w=Object(r.useState)([]),x=Object(d.a)(w,2),k=x[0],S=x[1],y=Object(r.useRef)();Object(r.useEffect)((function(){var e;p?(console.log("stopped recording"),null===(e=y.current)||void 0===e||e.stop()):(console.log("started recording"),Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,R(m,n.current);case 4:M(n.current.captureStream());case 5:case"end":return e.stop()}}),e)})))())}),[p,m,n]),Object(r.useEffect)((function(){var t=!0;return i&&Object(u.a)(o.a.mark((function n(){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(e);case 2:r=n.sent,t&&g(r);case 4:case"end":return n.stop()}}),n)})))(),function(){t=!1}}),[e,i]);var R=function(e,t){return t.srcObject=e,t.captureStream=t.captureStream||t.mozCaptureStream,new Promise((function(e){return t.onplaying=e}))},M=function(e){y.current=new MediaRecorder(e),S([]),y.current.ondataavailable=function(e){var t=e.data;S((function(e){return[].concat(Object(f.a)(e),[t])}))},y.current.start(),console.log(y.current.state);var n,r=new Promise((function(e,t){y.current.onstop=e,y.current.onerror=t})),c=(n=t,new Promise((function(e){return setTimeout(e,n)}))).then((function(){i&&(l(!0),s(!1))}));return Promise.all([r,c])};return{start:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),l(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),stop:function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!1),l(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),chunks:k,isFinished:p,isRecording:i}}var v=n(1);var p=function(e){var t=e.constraints,n=e.maxRecordingMS,c=void 0===n?5e3:n,a=Object(r.useState)(""),i=Object(d.a)(a,2),s=i[0],f=i[1],b=Object(r.useRef)(),p=Object(r.useRef)(),l=j(t,c,b),h=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{l.start()}catch(t){console.error(t),f(t.message||t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.stop();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(l.isFinished&&0!==l.chunks.length){var e=new Blob(l.chunks,{type:"video/webm"});p.current.src=URL.createObjectURL(e)}}),[l.isFinished,l.chunks]),Object(v.jsxs)("main",{children:[s&&Object(v.jsx)("div",{className:"error",children:s}),Object(v.jsx)("video",{ref:b,muted:!0,autoPlay:!0,style:{display:l.isFinished&&0!==l.chunks.length?"none":"block"}}),Object(v.jsx)("video",{ref:p,controls:!0,style:{display:l.isFinished&&0!==l.chunks.length?"block":"none"}}),Object(v.jsxs)("div",{className:"buttons",children:[Object(v.jsx)("button",{onClick:h,children:"Start"}),Object(v.jsx)("button",{onClick:O,disabled:!l.isRecording&&l.isFinished,children:"Stop"})]})]})},l={audio:!0,video:!0,width:640,height:480};var h=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Record Your Video!"}),Object(v.jsx)(p,{maxRecordingMS:7e3,constraints:l})]})};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.708ac667.chunk.js.map