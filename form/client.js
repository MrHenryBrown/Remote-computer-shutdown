const _0x4953=['parseInt','vibrate','documentElement','classList','length','navigator','getElementById','stringify','submit','Vibration\x20off','message','textContent','off','stop','emit','style','call','requestFullScreen','webkitRequestFullScreen','Vibration\x20on','mozRequestFullScreen','time','onclick','close','add','time-left','message-text','display','value','body','none','getTime','trunc'];(function(_0xe104cd,_0x4953fb){const _0x27edd1=function(_0x3d50b4){while(--_0x3d50b4){_0xe104cd['push'](_0xe104cd['shift']());}};_0x27edd1(++_0x4953fb);}(_0x4953,0x16b));const _0x27ed=function(_0xe104cd,_0x4953fb){_0xe104cd=_0xe104cd-0x0;let _0x27edd1=_0x4953[_0xe104cd];return _0x27edd1;};const _0x55b840=_0x27ed,socket=io();let timeSleep=null,intervalId=null,intervalId10=null,countCalls=0x0,flagVibrate=!![];socket['on'](_0x55b840('0x15'),_0x3d50b4=>{const _0xb307f2=_0x55b840;timeSleep=_0x3d50b4,document['getElementById']('submit')[_0xb307f2('0xf')][_0xb307f2('0x1b')]='none',document[_0xb307f2('0x6')](_0xb307f2('0x15'))['style']['display']=_0xb307f2('0x1e'),document[_0xb307f2('0x6')](_0xb307f2('0xd'))[_0xb307f2('0xf')][_0xb307f2('0x1b')]='',intervalId=showTime();}),socket[_0x55b840('0xe')](_0x55b840('0x15'),JSON['stringify'](null)),document[_0x55b840('0x6')](_0x55b840('0x8'))[_0x55b840('0x16')]=_0x20681d=>{const _0x59c771=_0x55b840;if(document[_0x59c771('0x6')](_0x59c771('0x15'))[_0x59c771('0x1c')][_0x59c771('0x4')]===0x0)document[_0x59c771('0x6')](_0x59c771('0x15'))[_0x59c771('0x1c')]='0';timeSleep=new Date()['getTime']()+Number[_0x59c771('0x0')](document[_0x59c771('0x6')](_0x59c771('0x15'))[_0x59c771('0x1c')])*0x3e8;if(isNaN(timeSleep))return;if(Number[_0x59c771('0x0')](document[_0x59c771('0x6')]('time')['value'])<0xa)countCalls=0xa-Number[_0x59c771('0x0')](document[_0x59c771('0x6')]('time')[_0x59c771('0x1c')]);try{flagVibrate&&window[_0x59c771('0x5')]['vibrate'](0x12c);}catch{}document[_0x59c771('0x6')](_0x59c771('0x8'))[_0x59c771('0xf')][_0x59c771('0x1b')]=_0x59c771('0x1e'),document[_0x59c771('0x6')](_0x59c771('0x15'))[_0x59c771('0xf')]['display']=_0x59c771('0x1e');if(document[_0x59c771('0x6')](_0x59c771('0x15'))['value']==='0')document[_0x59c771('0x6')]('stop')['style'][_0x59c771('0x1b')]='none';else document['getElementById'](_0x59c771('0xd'))[_0x59c771('0xf')]['display']='';socket[_0x59c771('0xe')](_0x59c771('0x15'),JSON[_0x59c771('0x7')]({'timeSleep':timeSleep,'timer':document['getElementById'](_0x59c771('0x15'))[_0x59c771('0x1c')]})),intervalId=showTime();},document['getElementById'](_0x55b840('0xd'))[_0x55b840('0x16')]=()=>{const _0x41ce1c=_0x55b840;if(intervalId){try{flagVibrate&&window['navigator']['vibrate']([0xc8,0x64,0x64]);}catch{}intervalId10&&(clearInterval(intervalId10),intervalId10=null,countCalls=0x0),document[_0x41ce1c('0x6')](_0x41ce1c('0x8'))[_0x41ce1c('0xf')][_0x41ce1c('0x1b')]='',document[_0x41ce1c('0x6')](_0x41ce1c('0x15'))[_0x41ce1c('0xf')]['display']='',document['getElementById']('stop')[_0x41ce1c('0xf')][_0x41ce1c('0x1b')]=_0x41ce1c('0x1e'),clearInterval(intervalId),intervalId=null,document[_0x41ce1c('0x6')]('time-left')['textContent']='',socket['emit'](_0x41ce1c('0xd'));}};function timeFormat(_0x3a3964){const _0x1f9537=_0x55b840;let _0x10ee34=Math[_0x1f9537('0x20')](_0x3a3964/0x3c/0x3c%0x3c),_0x307a82=Math['trunc'](_0x3a3964/0x3c%0x3c),_0x2d532c=_0x3a3964%0x3c;return(_0x10ee34<0xa?'0':'')+_0x10ee34+':'+((_0x307a82<0xa?'0':'')+_0x307a82)+':'+((_0x2d532c<0xa?'0':'')+_0x2d532c);}function showTime(){return setInterval(()=>{const _0xd39875=_0x27ed,_0x186514=timeSleep-new Date()[_0xd39875('0x1f')]();document[_0xd39875('0x6')](_0xd39875('0x19'))['innerHTML']=timeFormat(Math[_0xd39875('0x20')](_0x186514/0x3e8));if(!intervalId10&&_0x186514/0x3e8<=0xb)intervalId10=setInterval(()=>{const _0x3bca35=_0xd39875;countCalls<0x9?(flagVibrate&&window[_0x3bca35('0x5')][_0x3bca35('0x1')]([0xc8]),countCalls++):(clearInterval(intervalId10),intervalId10=null,countCalls=0x0);},0x3e8);if(timeSleep-new Date()[_0xd39875('0x1f')]()<=0x0){try{flagVibrate&&window[_0xd39875('0x5')][_0xd39875('0x1')]([0x12c,0xc8,0x64,0x64,0x64]);}catch{}clearInterval(intervalId),document[_0xd39875('0x6')](_0xd39875('0x19'))[_0xd39875('0xb')]='',document[_0xd39875('0x6')]('stop')[_0xd39875('0xf')][_0xd39875('0x1b')]=_0xd39875('0x1e'),window[_0xd39875('0x17')]();}},0x64);}function showMessage(_0x3e01a7){const _0x417490=_0x55b840;try{window[_0x417490('0x5')][_0x417490('0x1')]([0x12c,0xc8,0x64,0x64,0x64]);}catch{}const _0x3bf48b=document[_0x417490('0x6')](_0x417490('0xa')),_0xa27172=document[_0x417490('0x6')](_0x417490('0x1a'));if(_0x3bf48b[_0x417490('0x3')]['contains']('off'))_0x3bf48b[_0x417490('0x3')]['remove'](_0x417490('0xc'));_0xa27172[_0x417490('0xb')]=_0x3e01a7,setTimeout(()=>{const _0x3fa4cc=_0x417490;_0x3bf48b['classList'][_0x3fa4cc('0x18')]('off');},0x7d0);}let numberOfClicks=0x0;document[_0x55b840('0x1d')]['ontouchstart']=_0x18ef4f=>{numberOfClicks++,setTimeout(()=>{const _0x305a96=_0x27ed;if(numberOfClicks===0x2){flagVibrate=!flagVibrate;if(flagVibrate)showMessage(_0x305a96('0x13'));else showMessage(_0x305a96('0x9'));}else{if(numberOfClicks>0x2){const _0x1d4168=document[_0x305a96('0x2')],_0xcf9841=_0x1d4168[_0x305a96('0x11')]||_0x1d4168[_0x305a96('0x12')]||_0x1d4168[_0x305a96('0x14')];_0xcf9841[_0x305a96('0x10')](_0x1d4168);}}numberOfClicks=0x0;},0x190);};