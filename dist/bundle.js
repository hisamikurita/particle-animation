!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"norm",value:function(t,e,n){return(t-e)/(n-e)}},{key:"lerp",value:function(t,e,n){return(n-e)*t+e}},{key:"map",value:function(e,n,r,i,a){return t.lerp(t.norm(e,n,r),i,a)}},{key:"clamp",value:function(t,e,n){return Math.min(Math.max(t,Math.min(e,n)),Math.max(e,n))}},{key:"distance",value:function(t,e){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}},{key:"distanceXY",value:function(t,e,n,r){var i=n-t,a=r-e;return Math.sqrt(i*i+a*a)}},{key:"circleCollision",value:function(e,n){return t.distance(e,n)<=e.radius+n.radius}},{key:"circlePointCollision",value:function(e,n,r){return t.distanceXY(e,n,r.x,r.y)<r.radius}},{key:"pointInRect",value:function(e,n,r){return t.inRange(e,r.x,r.x+r.width)&&t.inRange(n,r.y,r.y+r.height)}},{key:"inRange",value:function(t,e,n){return t>=Math.min(e,n)&&t<=Math.max(e,n)}},{key:"rangeIntersect",value:function(t,e,n,r){return Math.max(t,e)>=Math.min(n,r)&&Math.min(t,e)<=Math.max(n,r)}},{key:"rectIntersect",value:function(e,n){return t.rangeIntersect(e.x,e.x+e.width,n.x,n.x+n.width)&&t.rangeIntersect(e.y,e.y+e.height,n.y,n.y+n.height)}},{key:"degreesToRads",value:function(t){return t/180*Math.PI}},{key:"radsToDegrees",value:function(t){return 180*t/Math.PI}},{key:"randomRange",value:function(t,e){return t+Math.random()*(e-t)}},{key:"randomInt",value:function(t,e){return Math.floor(t+Math.random()*(e-t+1))}},{key:"randomDist",value:function(e,n,r){for(var i=0,a=0;a<r;a+=1)i+=t.randomRange(e,n);return i/r}},{key:"randomColor",value:function(t){return t[Math.floor(Math.random()*t.length)]}}],(n=null)&&r(e.prototype,n),i&&r(e,i),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o={},u=["#607D8B","#FFF3E0","#0097A7"];window.addEventListener("mousemove",(function(t){o.x=t.clientX,o.y=t.clientY}));var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.querySelector("#canvas"),this.ctx=canvas.getContext("2d"),this.color=i.randomColor(u),this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.radius=10*Math.random()+10,this.ax=0,this.ay=0,this.friction=.05*Math.random()+.94,this.dest={x:e,y:n}}var e,n,r;return e=t,(n=[{key:"update",value:function(){this.ax=(this.dest.x-this.x)/30,this.ay=(this.dest.y-this.y)/30,this.x+=this.ax,this.y+=this.ay}},{key:"draw",value:function(){this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.color,this.dist<10*this.radius&&(this.ctx.fillStyle="#87d7f2"),this.ctx.globalAlpha=.8,this.ctx.fill(),this.ctx.restore()}},{key:"resize",value:function(){this.x=this.x,this.y=this.y}}])&&a(e.prototype,n),r&&a(e,r),t}();!function(){window.addEventListener("load",(function(){!function(){!function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=t}();var t=window.innerWidth,i=window.innerHeight;e.width=t,e.height=i,n.font="bold "+t/8+"px arial",n.textAlign="center",n.baseline="middle",n.fillText("Hello World !!",t/2,i/2);var u=n.getImageData(0,0,t,i).data;r.width=t,r.height=i;for(var s=0;s<t;s+=Math.round(t/100))for(var l=0;l<i;l+=Math.round(t/100))u[4*(s+l*t)+3]>100&&a.push(new c(s,l));o=a.length}(),u()})),window.onresize=function(){r.width=window.innerWidth,r.height=window.innerHeight};var t,e=document.createElement("canvas"),n=e.getContext("2d"),r=document.querySelector("#canvas"),i=r.getContext("2d"),a=[],o=0;function u(){i.clearRect(0,0,r.width,r.height);for(var e=0;e<o;e++)(t=a[e]).update(),t.draw();requestAnimationFrame(u)}}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiVXRpbHMiLCJtaW4iLCJtYXgiLCJub3JtIiwic291cmNlTWluIiwic291cmNlTWF4IiwiZGVzdE1pbiIsImRlc3RNYXgiLCJsZXJwIiwiTWF0aCIsInAwIiwicDEiLCJkeCIsIngiLCJkeSIsInkiLCJzcXJ0IiwieDAiLCJ5MCIsIngxIiwieTEiLCJjMCIsImMxIiwiZGlzdGFuY2UiLCJyYWRpdXMiLCJjaXJjbGUiLCJkaXN0YW5jZVhZIiwicmVjdCIsImluUmFuZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm1pbjAiLCJtYXgwIiwibWluMSIsIm1heDEiLCJyMCIsInIxIiwicmFuZ2VJbnRlcnNlY3QiLCJkZWdyZWVzIiwiUEkiLCJyYWRpYW5zIiwicmFuZG9tIiwiZmxvb3IiLCJpdGVyYXRpb25zIiwidG90YWwiLCJyYW5kb21SYW5nZSIsImNvbG9ycyIsImxlbmd0aCIsIm1vdXNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJQYXJ0aWNsZSIsInRoaXMiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3IiLCJyYW5kb21Db2xvciIsImF4IiwiYXkiLCJmcmljdGlvbiIsImRlc3QiLCJzYXZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbFN0eWxlIiwiZGlzdCIsImdsb2JhbEFscGhhIiwiZmlsbCIsInJlc3RvcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIldJRFRIIiwiaW5uZXJXaWR0aCIsIkhFSUdIVCIsImlubmVySGVpZ2h0Iiwib2Zmc2NyZWVuY2FudmFzIiwib2Zmc2NyZWVuY3R4IiwiZm9udCIsInRleHRBbGlnbiIsImJhc2VsaW5lIiwiZmlsbFRleHQiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiZGF0YSIsInJvdW5kIiwicGFydGljbGVzIiwicHVzaCIsImFtb3VudCIsImluaXQiLCJyZW5kZXIiLCJvbnJlc2l6ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGVhclJlY3QiLCJ1cGRhdGUiLCJkcmF3Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLDRNQ2xGOUMsSUFBTUMsRUFBYix5Qiw0RkFBQSxTLFVBQUEsTyxFQUFBLEUsRUFBQSw0QkFDZ0JmLEVBQU9nQixFQUFLQyxHQUNwQixPQUFRakIsRUFBUWdCLElBQVFDLEVBQU1ELEtBRnRDLDJCQUlnQkUsRUFBTUYsRUFBS0MsR0FDbkIsT0FBUUEsRUFBTUQsR0FBT0UsRUFBT0YsSUFMcEMsMEJBT2VoQixFQUFPbUIsRUFBV0MsRUFBV0MsRUFBU0MsR0FDN0MsT0FBT1AsRUFBTVEsS0FBS1IsRUFBTUcsS0FBS2xCLEVBQU9tQixFQUFXQyxHQUFZQyxFQUFTQyxLQVI1RSw0QkFXaUJ0QixFQUFPZ0IsRUFBS0MsR0FDckIsT0FBT08sS0FBS1IsSUFBSVEsS0FBS1AsSUFBSWpCLEVBQU93QixLQUFLUixJQUFJQSxFQUFLQyxJQUFPTyxLQUFLUCxJQUFJRCxFQUFLQyxNQVozRSwrQkFlb0JRLEVBQUlDLEdBQ2hCLElBQUlDLEVBQUtELEVBQUdFLEVBQUlILEVBQUdHLEVBQ2ZDLEVBQUtILEVBQUdJLEVBQUlMLEVBQUdLLEVBQ25CLE9BQU9OLEtBQUtPLEtBQUtKLEVBQUtBLEVBQUtFLEVBQUtBLEtBbEJ4QyxpQ0FxQnNCRyxFQUFJQyxFQUFJQyxFQUFJQyxHQUMxQixJQUFJUixFQUFLTyxFQUFLRixFQUNWSCxFQUFLTSxFQUFLRixFQUNkLE9BQU9ULEtBQUtPLEtBQUtKLEVBQUtBLEVBQUtFLEVBQUtBLEtBeEJ4QyxzQ0EyQjJCTyxFQUFJQyxHQUN2QixPQUFPdEIsRUFBTXVCLFNBQVNGLEVBQUlDLElBQU9ELEVBQUdHLE9BQVNGLEVBQUdFLFNBNUJ4RCwyQ0ErQmdDWCxFQUFHRSxFQUFHVSxHQUM5QixPQUFPekIsRUFBTTBCLFdBQVdiLEVBQUdFLEVBQUdVLEVBQU9aLEVBQUdZLEVBQU9WLEdBQUtVLEVBQU9ELFNBaENuRSxrQ0FtQ3VCWCxFQUFHRSxFQUFHWSxHQUNyQixPQUFPM0IsRUFBTTRCLFFBQVFmLEVBQUdjLEVBQUtkLEVBQUdjLEVBQUtkLEVBQUljLEVBQUtFLFFBQzFDN0IsRUFBTTRCLFFBQVFiLEVBQUdZLEVBQUtaLEVBQUdZLEVBQUtaLEVBQUlZLEVBQUtHLFVBckNuRCw4QkF3Q21CN0MsRUFBT2dCLEVBQUtDLEdBQ3ZCLE9BQU9qQixHQUFTd0IsS0FBS1IsSUFBSUEsRUFBS0MsSUFBUWpCLEdBQVN3QixLQUFLUCxJQUFJRCxFQUFLQyxLQXpDckUscUNBNEMwQjZCLEVBQU1DLEVBQU1DLEVBQU1DLEdBQ3BDLE9BQU96QixLQUFLUCxJQUFJNkIsRUFBTUMsSUFBU3ZCLEtBQUtSLElBQUlnQyxFQUFNQyxJQUMxQ3pCLEtBQUtSLElBQUk4QixFQUFNQyxJQUFTdkIsS0FBS1AsSUFBSStCLEVBQU1DLEtBOUNuRCxvQ0FpRHlCQyxFQUFJQyxHQUNyQixPQUFPcEMsRUFBTXFDLGVBQWVGLEVBQUd0QixFQUFHc0IsRUFBR3RCLEVBQUlzQixFQUFHTixNQUFPTyxFQUFHdkIsRUFBR3VCLEVBQUd2QixFQUFJdUIsRUFBR1AsUUFDL0Q3QixFQUFNcUMsZUFBZUYsRUFBR3BCLEVBQUdvQixFQUFHcEIsRUFBSW9CLEVBQUdMLE9BQVFNLEVBQUdyQixFQUFHcUIsRUFBR3JCLEVBQUlxQixFQUFHTixVQW5EekUsb0NBc0R5QlEsR0FDakIsT0FBT0EsRUFBVSxJQUFNN0IsS0FBSzhCLEtBdkRwQyxvQ0EwRHlCQyxHQUNqQixPQUFpQixJQUFWQSxFQUFnQi9CLEtBQUs4QixLQTNEcEMsa0NBOER1QnRDLEVBQUtDLEdBQ3BCLE9BQU9ELEVBQU1RLEtBQUtnQyxVQUFZdkMsRUFBTUQsS0EvRDVDLGdDQWtFcUJBLEVBQUtDLEdBQ2xCLE9BQU9PLEtBQUtpQyxNQUFNekMsRUFBTVEsS0FBS2dDLFVBQVl2QyxFQUFNRCxFQUFNLE1BbkU3RCxpQ0FzRXNCQSxFQUFLQyxFQUFLeUMsR0FHeEIsSUFGQSxJQUFJQyxFQUFRLEVBRUg1RSxFQUFJLEVBQUdBLEVBQUkyRSxFQUFZM0UsR0FBSyxFQUNqQzRFLEdBQVM1QyxFQUFNNkMsWUFBWTVDLEVBQUtDLEdBRXBDLE9BQU8wQyxFQUFRRCxJQTVFdkIsa0NBK0V1QkcsR0FDZixPQUFPQSxFQUFPckMsS0FBS2lDLE1BQU1qQyxLQUFLZ0MsU0FBV0ssRUFBT0MsYSxFQWhGeEQsTywyQkFBQSxLLHNLQ0VBLElBQU1DLEVBQVEsR0FDUkYsRUFBUyxDQUFDLFVBQVcsVUFBVyxXQUV0Q0csT0FBT0MsaUJBQWlCLGFBQWEsU0FBVUMsR0FDN0NILEVBQU1uQyxFQUFJc0MsRUFBTUMsUUFDaEJKLEVBQU1qQyxFQUFJb0MsRUFBTUUsV0FHWCxJQUFNQyxFQUFiLFdBQ0UsV0FBWXpDLEVBQUdFLEksNEZBQUcsU0FDaEJ3QyxLQUFLQyxPQUFTQyxTQUFTQyxjQUFjLFdBQ3JDSCxLQUFLSSxJQUFNSCxPQUFPSSxXQUFXLE1BQzdCTCxLQUFLTSxNQUFRN0QsRUFBTThELFlBQVloQixHQUMvQlMsS0FBSzFDLEVBQUlKLEtBQUtnQyxTQUFXYyxLQUFLQyxPQUFPM0IsTUFDckMwQixLQUFLeEMsRUFBSU4sS0FBS2dDLFNBQVdjLEtBQUtDLE9BQU8xQixPQUNyQ3lCLEtBQUsvQixPQUF5QixHQUFoQmYsS0FBS2dDLFNBQWdCLEdBQ25DYyxLQUFLUSxHQUFLLEVBQ1ZSLEtBQUtTLEdBQUssRUFDVlQsS0FBS1UsU0FBMkIsSUFBaEJ4RCxLQUFLZ0MsU0FBa0IsSUFDdkNjLEtBQUtXLEtBQU8sQ0FDVnJELEVBQUdBLEVBQ0hFLEVBQUdBLEcsVUFiVCxPLEVBQUEsRyxFQUFBLGdDQWlCSXdDLEtBQUtRLElBQU1SLEtBQUtXLEtBQUtyRCxFQUFJMEMsS0FBSzFDLEdBQUssR0FDbkMwQyxLQUFLUyxJQUFNVCxLQUFLVyxLQUFLbkQsRUFBSXdDLEtBQUt4QyxHQUFLLEdBQ25Dd0MsS0FBSzFDLEdBQUswQyxLQUFLUSxHQUNmUixLQUFLeEMsR0FBS3dDLEtBQUtTLEtBcEJuQiw2QkF1QklULEtBQUtJLElBQUlRLE9BQ1RaLEtBQUtJLElBQUlTLFlBQ1RiLEtBQUtJLElBQUlVLElBQUlkLEtBQUsxQyxFQUFHMEMsS0FBS3hDLEVBQUd3QyxLQUFLL0IsT0FBUSxFQUFhLEVBQVZmLEtBQUs4QixJQUFRLEdBQzFEZ0IsS0FBS0ksSUFBSVcsVUFBWWYsS0FBS00sTUFDdEJOLEtBQUtnQixLQUFxQixHQUFkaEIsS0FBSy9CLFNBQ25CK0IsS0FBS0ksSUFBSVcsVUFBWSxXQUV2QmYsS0FBS0ksSUFBSWEsWUFBYyxHQUN2QmpCLEtBQUtJLElBQUljLE9BQ1RsQixLQUFLSSxJQUFJZSxZQWhDYiwrQkFtQ0luQixLQUFLMUMsRUFBSTBDLEtBQUsxQyxFQUNkMEMsS0FBS3hDLEVBQUl3QyxLQUFLeEMsTywyQkFwQ2xCLE1DUEEsV0FFSWtDLE9BQU9DLGlCQUFpQixRQUFRLFlBZ0JoQyxZQUdJLFdBQ0ksSUFBTXlCLEVBQXdCMUIsT0FBTzBCLHVCQUNqQzFCLE9BQU8yQiwwQkFDUDNCLE9BQU80Qiw2QkFDUDVCLE9BQU82Qix3QkFDWDdCLE9BQU8wQixzQkFBd0JBLEVBTG5DLEdBUUEsSUFBTUksRUFBUTlCLE9BQU8rQixXQUNmQyxFQUFTaEMsT0FBT2lDLFlBRXRCQyxFQUFnQnRELE1BQVFrRCxFQUN4QkksRUFBZ0JyRCxPQUFTbUQsRUFFekJHLEVBQWFDLEtBQU8sUUFBV04sRUFBUSxFQUFLLFdBQzVDSyxFQUFhRSxVQUFZLFNBQ3pCRixFQUFhRyxTQUFXLFNBQ3hCSCxFQUFhSSxTQUFTLGlCQUFrQlQsRUFBUSxFQUFHRSxFQUFTLEdBQzVELElBQU1RLEVBQVVMLEVBQWFNLGFBQWEsRUFBRyxFQUFHWCxFQUFPRSxHQUFRVSxLQUUvRG5DLEVBQU8zQixNQUFRa0QsRUFDZnZCLEVBQU8xQixPQUFTbUQsRUFHaEIsSUFEQSxJQUNTcEUsRUFBSSxFQUFHQSxFQUFJa0UsRUFBT2xFLEdBQUtKLEtBQUttRixNQUFNYixFQUQ5QixLQUVULElBQUssSUFBSWhFLEVBQUksRUFBR0EsRUFBSWtFLEVBQVFsRSxHQUFLTixLQUFLbUYsTUFBTWIsRUFGbkMsS0FHRFUsRUFBMkIsR0FBakI1RSxFQUFJRSxFQUFJZ0UsR0FBYyxHQUgvQixLQUlEYyxFQUFVQyxLQUFLLElBQUl4QyxFQUFTekMsRUFBR0UsSUFJM0NnRixFQUFTRixFQUFVOUMsT0FqRG5CaUQsR0FDQUMsT0FHSmhELE9BQU9pRCxTQUFXLFdBQ2QxQyxFQUFPM0IsTUFBUW9CLE9BQU8rQixXQUN0QnhCLEVBQU8xQixPQUFTbUIsT0FBT2lDLGFBRzNCLElBSUlwRixFQUpFcUYsRUFBa0IxQixTQUFTMEMsY0FBYyxVQUMzQ2YsRUFBZUQsRUFBZ0J2QixXQUFXLE1BQzFDSixFQUFTQyxTQUFTQyxjQUFjLFdBQ2hDQyxFQUFNSCxFQUFPSSxXQUFXLE1BQ3JCaUMsRUFBWSxHQUFJRSxFQUFTLEVBdUNoQyxTQUFTRSxJQUNMdEMsRUFBSXlDLFVBQVUsRUFBRyxFQUFHNUMsRUFBTzNCLE1BQU8yQixFQUFPMUIsUUFDekMsSUFBSyxJQUFJOUQsRUFBSSxFQUFHQSxFQUFJK0gsRUFBUS9ILEtBQ3hCOEIsRUFBSStGLEVBQVU3SCxJQUNacUksU0FDRnZHLEVBQUV3RyxPQUVOM0Isc0JBQXNCc0IsSUE5RDlCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgICBzdGF0aWMgbm9ybSh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGxlcnAobm9ybSwgbWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gKG1heCAtIG1pbikgKiBub3JtICsgbWluO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG1hcCh2YWx1ZSwgc291cmNlTWluLCBzb3VyY2VNYXgsIGRlc3RNaW4sIGRlc3RNYXgpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMubGVycChVdGlscy5ub3JtKHZhbHVlLCBzb3VyY2VNaW4sIHNvdXJjZU1heCksIGRlc3RNaW4sIGRlc3RNYXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKG1pbiwgbWF4KSksIE1hdGgubWF4KG1pbiwgbWF4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3RhbmNlKHAwLCBwMSkge1xyXG4gICAgICAgIHZhciBkeCA9IHAxLnggLSBwMC54LFxyXG4gICAgICAgICAgICBkeSA9IHAxLnkgLSBwMC55O1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXN0YW5jZVhZKHgwLCB5MCwgeDEsIHkxKSB7XHJcbiAgICAgICAgdmFyIGR4ID0geDEgLSB4MCxcclxuICAgICAgICAgICAgZHkgPSB5MSAtIHkwO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaXJjbGVDb2xsaXNpb24oYzAsIGMxKSB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxzLmRpc3RhbmNlKGMwLCBjMSkgPD0gYzAucmFkaXVzICsgYzEucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjaXJjbGVQb2ludENvbGxpc2lvbih4LCB5LCBjaXJjbGUpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuZGlzdGFuY2VYWSh4LCB5LCBjaXJjbGUueCwgY2lyY2xlLnkpIDwgY2lyY2xlLnJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcG9pbnRJblJlY3QoeCwgeSwgcmVjdCkge1xyXG4gICAgICAgIHJldHVybiBVdGlscy5pblJhbmdlKHgsIHJlY3QueCwgcmVjdC54ICsgcmVjdC53aWR0aCkgJiZcclxuICAgICAgICAgICAgVXRpbHMuaW5SYW5nZSh5LCByZWN0LnksIHJlY3QueSArIHJlY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5SYW5nZSh2YWx1ZSwgbWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPj0gTWF0aC5taW4obWluLCBtYXgpICYmIHZhbHVlIDw9IE1hdGgubWF4KG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZ2VJbnRlcnNlY3QobWluMCwgbWF4MCwgbWluMSwgbWF4MSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChtaW4wLCBtYXgwKSA+PSBNYXRoLm1pbihtaW4xLCBtYXgxKSAmJlxyXG4gICAgICAgICAgICBNYXRoLm1pbihtaW4wLCBtYXgwKSA8PSBNYXRoLm1heChtaW4xLCBtYXgxKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVjdEludGVyc2VjdChyMCwgcjEpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMucmFuZ2VJbnRlcnNlY3QocjAueCwgcjAueCArIHIwLndpZHRoLCByMS54LCByMS54ICsgcjEud2lkdGgpICYmXHJcbiAgICAgICAgICAgIFV0aWxzLnJhbmdlSW50ZXJzZWN0KHIwLnksIHIwLnkgKyByMC5oZWlnaHQsIHIxLnksIHIxLnkgKyByMS5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWdyZWVzVG9SYWRzKGRlZ3JlZXMpIHtcclxuICAgICAgICByZXR1cm4gZGVncmVlcyAvIDE4MCAqIE1hdGguUEk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJhZHNUb0RlZ3JlZXMocmFkaWFucykge1xyXG4gICAgICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tRGlzdChtaW4sIG1heCwgaXRlcmF0aW9ucykge1xyXG4gICAgICAgIHZhciB0b3RhbCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IFV0aWxzLnJhbmRvbVJhbmdlKG1pbiwgbWF4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsIC8gaXRlcmF0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tQ29sb3IoY29sb3JzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbmNvbnN0IG1vdXNlID0ge307XHJcbmNvbnN0IGNvbG9ycyA9IFsnIzYwN0Q4QicsICcjRkZGM0UwJywgJyMwMDk3QTcnXTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBtb3VzZS54ID0gZXZlbnQuY2xpZW50WDtcclxuICBtb3VzZS55ID0gZXZlbnQuY2xpZW50WTtcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSB7XHJcbiAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FudmFzJyk7XHJcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB0aGlzLmNvbG9yID0gVXRpbHMucmFuZG9tQ29sb3IoY29sb3JzKTtcclxuICAgIHRoaXMueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICB0aGlzLnJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAxMCArIDEwO1xyXG4gICAgdGhpcy5heCA9IDA7XHJcbiAgICB0aGlzLmF5ID0gMDtcclxuICAgIHRoaXMuZnJpY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMC4wNSArIDAuOTQ7XHJcbiAgICB0aGlzLmRlc3QgPSB7XHJcbiAgICAgIHg6IHgsXHJcbiAgICAgIHk6IHksXHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuYXggPSAodGhpcy5kZXN0LnggLSB0aGlzLngpIC8gMzA7XHJcbiAgICB0aGlzLmF5ID0gKHRoaXMuZGVzdC55IC0gdGhpcy55KSAvIDMwO1xyXG4gICAgdGhpcy54ICs9IHRoaXMuYXg7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy5heTtcclxuICB9XHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICBpZiAodGhpcy5kaXN0IDwgdGhpcy5yYWRpdXMgKiAxMCkge1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzg3ZDdmMic7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IC44O1xyXG4gICAgdGhpcy5jdHguZmlsbCgpXHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG4gIHJlc2l6ZSgpIHtcclxuICAgIHRoaXMueCA9IHRoaXMueDtcclxuICAgIHRoaXMueSA9IHRoaXMueTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQYXJ0aWNsZSB9IGZyb20gJy4vcGFydGljbGUnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG4oKCkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGluaXQoKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuICAgIH0pXHJcblxyXG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2Zmc2NyZWVuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyksXHJcbiAgICAgICAgb2Zmc2NyZWVuY3R4ID0gb2Zmc2NyZWVuY2FudmFzLmdldENvbnRleHQoJzJkJyksXHJcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpLFxyXG4gICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdmFyIHAsIHBhcnRpY2xlcyA9IFtdLCBhbW91bnQgPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICBjb25zdCBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNvbnN0IEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgb2Zmc2NyZWVuY2FudmFzLndpZHRoID0gV0lEVEg7XHJcbiAgICAgICAgb2Zmc2NyZWVuY2FudmFzLmhlaWdodCA9IEhFSUdIVDtcclxuXHJcbiAgICAgICAgb2Zmc2NyZWVuY3R4LmZvbnQgPSBcImJvbGQgXCIgKyAoV0lEVEggLyA4KSArIFwicHggYXJpYWxcIjtcclxuICAgICAgICBvZmZzY3JlZW5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgb2Zmc2NyZWVuY3R4LmJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgb2Zmc2NyZWVuY3R4LmZpbGxUZXh0KCdIZWxsbyBXb3JsZCAhIScsIFdJRFRIIC8gMiwgSEVJR0hUIC8gMik7XHJcbiAgICAgICAgY29uc3QgaW1nRGF0YSA9IG9mZnNjcmVlbmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgV0lEVEgsIEhFSUdIVCkuZGF0YTtcclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gV0lEVEg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IEhFSUdIVDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2tpcCA9IDEwMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IFdJRFRIOyB4ICs9IE1hdGgucm91bmQoV0lEVEggLyBza2lwKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IEhFSUdIVDsgeSArPSBNYXRoLnJvdW5kKFdJRFRIIC8gc2tpcCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbWdEYXRhWygoeCArIHkgKiBXSURUSCkgKiA0KSArIDNdID4gc2tpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh4LCB5KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYW1vdW50ID0gcGFydGljbGVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICAgICAgcCA9IHBhcnRpY2xlc1tpXTtcclxuICAgICAgICAgICAgcC51cGRhdGUoKTtcclxuICAgICAgICAgICAgcC5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xyXG4gICAgfVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=