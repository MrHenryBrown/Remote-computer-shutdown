const _0xba9e=['exec','use','Wireless\x20network','The\x20computer\x20will\x20turn\x20off\x20after\x20','path','log','keys','child_process','socket.io','Wi-Fi','trunc','\x20seconds','emit','The\x20timer\x20has\x20been\x20stopped','volume','\x20minutes\x20','express','sudo\x20shutdown\x20-h\x20now','createServer','includes','parse','address','internal','connection','\x20hours\x20','Беспроводная\x20сеть','Ethernet','loudness','family','getVolume','form','shutdown\x20-s\x20-t\x200','time','http','timeSleep','stringify','IPv4','static'];(function(_0x2fb37b,_0x241f97){const _0xba9edd=function(_0x228378){while(--_0x228378){_0x2fb37b['push'](_0x2fb37b['shift']());}};_0xba9edd(++_0x241f97);}(_0xba9e,0xe3));const _0x2283=function(_0x2fb37b,_0x241f97){_0x2fb37b=_0x2fb37b-0x67;let _0xba9edd=_0xba9e[_0x2fb37b];return _0xba9edd;};const _0x12fc2f=_0x2283,PORT=0xbb8,exec=require(_0x12fc2f(0x6f))[_0x12fc2f(0x68)],express=require(_0x12fc2f(0x78)),app=express(),path=require(_0x12fc2f(0x6c)),server=require(_0x12fc2f(0x89))[_0x12fc2f(0x7a)](app),io=require(_0x12fc2f(0x70))(server),loudness=require(_0x12fc2f(0x83));let volume=0x0;(async()=>{const _0xcb290f=_0x12fc2f;volume=await loudness[_0xcb290f(0x85)]();})();const {networkInterfaces}=require('os'),nets=networkInterfaces();let serverAddress='';for(const name of Object[_0x12fc2f(0x6e)](nets)){for(const net of nets[name]){if(net[_0x12fc2f(0x84)]===_0x12fc2f(0x8c)&&!net[_0x12fc2f(0x7e)]){if(name[_0x12fc2f(0x7b)](_0x12fc2f(0x81))||name[_0x12fc2f(0x7b)](_0x12fc2f(0x6a))||name===_0x12fc2f(0x82)||name[_0x12fc2f(0x7b)](_0x12fc2f(0x71)))serverAddress=net[_0x12fc2f(0x7d)]+':'+PORT;}}}app[_0x12fc2f(0x69)](express[_0x12fc2f(0x67)](path['join'](__dirname,_0x12fc2f(0x86))));let timeSleep=null,timerId=null;io['on'](_0x12fc2f(0x7f),_0x36f8e9=>{const _0x195a20=_0x12fc2f;_0x36f8e9[_0x195a20(0x74)](_0x195a20(0x76),JSON[_0x195a20(0x8b)](volume)),_0x36f8e9['on'](_0x195a20(0x88),_0x251691=>{const _0xae015f=_0x195a20;if(JSON[_0xae015f(0x7c)](_0x251691)){timeSleep=JSON[_0xae015f(0x7c)](_0x251691)[_0xae015f(0x8a)];const _0x3321d4=JSON[_0xae015f(0x7c)](_0x251691)['timer'];console['info'](_0xae015f(0x6b)+timeFormat(_0x3321d4));if(timerId)clearTimeout(timerId);timerId=setTimeout(()=>{const _0x4c351f=_0xae015f;exec(_0x4c351f(0x87),function(_0x152ede,_0x1dce5d,_0x369f69){const _0x2111a0=_0x4c351f;if(_0x152ede)exec(_0x2111a0(0x79),function(_0x5915cf,_0x1ac07f,_0x551f68){});});},_0x3321d4*0x3e8);}else{if(timeSleep)_0x36f8e9[_0xae015f(0x74)](_0xae015f(0x88),timeSleep);}}),_0x36f8e9['on'](_0x195a20(0x76),async _0x539566=>{const _0x3158f0=_0x195a20;volume=JSON[_0x3158f0(0x7c)](_0x539566),await loudness['setVolume'](volume),_0x36f8e9['emit']('volume',JSON[_0x3158f0(0x8b)](volume));}),_0x36f8e9['on']('stop',()=>{const _0x24398d=_0x195a20;timerId&&(clearTimeout(timerId),timeSleep=null,timerId=null,console[_0x24398d(0x6d)](_0x24398d(0x75)));});}),server['listen'](PORT,()=>console['info']('\x0aThe\x20server\x20is\x20running\x0ahttp:\x5c\x5c'+serverAddress+'\x0a'));function timeFormat(_0x19b80b){const _0x2e2810=_0x12fc2f;return Math[_0x2e2810(0x72)](_0x19b80b/0x3c/0x3c%0x3c)+_0x2e2810(0x80)+Math['trunc'](_0x19b80b/0x3c%0x3c)+_0x2e2810(0x77)+_0x19b80b%0x3c+_0x2e2810(0x73);}