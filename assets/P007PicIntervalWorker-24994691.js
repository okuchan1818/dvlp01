(function(){"use strict";let e=0;self.addEventListener("message",async s=>{e++,self.postMessage({type:"xxx",value:"Test",count:e})})})();
