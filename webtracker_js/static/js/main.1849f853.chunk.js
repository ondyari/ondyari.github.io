(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(10),i=n(11),c=n(15),s=n(12),u=n(16),f=n(13),l=n(1),d=n.n(l),v=n(14),h=n.n(v),m=n(3),b=n(2);n(36);m.c("webgl");var p=.75,x=0,w=0,y=0;function g(){return(g=Object(f.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("https://raw.githubusercontent.com/hugozanini/TFJS-object-detection/master/models/kangaroo-detector/model.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var F={1:{name:"Kangaroo",id:1},2:{name:"Other",id:2}},j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).videoRef=d.a.createRef(),n.canvasRef=d.a.createRef(),n.detectFrame=function(e,t){m.b().startScope(),t.executeAsync(n.process_input(e)).then(function(a){n.renderPredictions(a,e),requestAnimationFrame(function(){n.detectFrame(e,t)}),m.b().endScope()})},n.renderPredictions=function(e){var t=n.canvasRef.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var a="16px sans-serif";t.font=a,t.textBaseline="top";var r=e[4].arraySync(),o=e[5].arraySync(),i=e[6].dataSync(),c=n.buildDetectedObjects(o,p,r,i,F);c.forEach(function(e){var n=e.bbox[0],r=e.bbox[1],o=e.bbox[2],i=e.bbox[3];t.strokeStyle="#00FFFF",t.lineWidth=4,t.strokeRect(n,r,o,i),t.fillStyle="#00FFFF";var c=t.measureText(e.label+" "+(100*e.score).toFixed(2)+"%").width,s=parseInt(a,10);t.fillRect(n,r,c+4,s+4)}),c.forEach(function(e){var n=e.bbox[0],a=e.bbox[1];t.fillStyle="#000000",t.fillText(e.label+" "+(100*e.score).toFixed(2)+"%",n,a)}),w+=1;var s=new Date;if(0==x&&(x=s),w%10==0){var u=(s-x)/10;y=Math.round(1e3/u),x=s}t.fillText(y,500,400)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){var t=navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(t){return window.stream=t,e.videoRef.current.srcObject=t,new Promise(function(t,n){e.videoRef.current.onloadedmetadata=function(){t()}})}),n=function(){return g.apply(this,arguments)}();Promise.all([n,t]).then(function(t){e.detectFrame(e.videoRef.current,t[0])}).catch(function(e){console.error(e)})}}},{key:"process_input",value:function(e){return m.a.fromPixels(e).toInt().transpose([0,1,2]).expandDims()}},{key:"buildDetectedObjects",value:function(e,t,n,a,r){var o=[],i=document.getElementById("frame");return e[0].forEach(function(e,c){if(e>t){var s=[],u=n[0][c][0]*i.offsetHeight,f=n[0][c][1]*i.offsetWidth,l=n[0][c][2]*i.offsetHeight,d=n[0][c][3]*i.offsetWidth;s[0]=f,s[1]=u,s[2]=d-f,s[3]=l-u,o.push({class:a[c],label:r[a[c]].name,score:e.toFixed(4),bbox:s})}}),o}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("h1",null,"Real-Time Object Detection Test via Javascript and Tensorflow.js"),d.a.createElement("h3",null,"MobileNetV2 for now"),d.a.createElement("video",{style:{height:"600px",width:"500px"},className:"size",autoPlay:!0,playsInline:!0,muted:!0,ref:this.videoRef,width:"600",height:"500",id:"frame"}),d.a.createElement("canvas",{className:"size",ref:this.canvasRef,width:"600",height:"500"}))}}]),t}(d.a.Component),R=document.getElementById("root");h.a.render(d.a.createElement(j,null),R)},30:function(e,t){},31:function(e,t){},32:function(e,t){},33:function(e,t){},34:function(e,t){},35:function(e,t){},36:function(e,t,n){}},[[17,2,1]]]);
//# sourceMappingURL=main.1849f853.chunk.js.map