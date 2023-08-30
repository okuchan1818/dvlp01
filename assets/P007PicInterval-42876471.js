(function(){"use strict";let e=0;self.addEventListener("message",t=>{e++,self.postMessage({type:"barcode",value:"123",count:e})})})();
