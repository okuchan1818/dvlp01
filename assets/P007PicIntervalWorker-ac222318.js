(function(){"use strict";let e=0;self.addEventListener("message",t=>{t.data,e++,self.postMessage({type:"barcode",value:"123",count:e})})})();
