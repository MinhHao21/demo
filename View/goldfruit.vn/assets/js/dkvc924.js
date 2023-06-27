function debounce(fn,wait){var timeout;return function(){var context=this;var args=arguments;clearTimeout(timeout);timeout=setTimeout(function(){fn.apply(context,args);},wait);};};function strSlug(str){return str.toString().toLowerCase().replace(/\s+/g,'-').replace(/\-\-+/g,'-').replace(/^-+/,'').replace(/-+$/,'').replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi,'a').replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi,'e').replace(/i|í|ì|ỉ|ĩ|ị/gi,'i').replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi,'o').replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi,'u').replace(/ý|ỳ|ỷ|ỹ|ỵ/gi,'y').replace(/đ/gi,'d').replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,'').replace(/[^\w\-]+/g,'')}
$.ajaxSetup({headers:{'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')},error:function(jqXHR,textStatus,errorThrown){console.log(jqXHR)
let message=textStatus;if(jqXHR.responseJSON&&jqXHR.responseJSON.message){message=jqXHR.responseJSON.message;}else if(jqXHR.statusText){message=jqXHR.statusText}
AIZ.plugins.notify('danger',message)}});$.extend({jpost:function(url,body,success=null){const data={type:'POST',url:url,data:JSON.stringify(body),contentType:"application/json;charset=utf-8",dataType:'json'}
if(success){data.success=success}
return $.ajax(data);},jdelete:function(url,body,success=null){const data={type:'DELETE',url:url,data:JSON.stringify(body),contentType:"application/json;charset=utf-8",dataType:'json'}
if(success){data.success=success}
return $.ajax(data);},});function maskMoney(input){input.mask('000,000,000',{reverse:true});}
function maskMoneyToNumber(str){if(typeof str=='number'){return str}
return Number(str.replace(/\D/g,''))}
function numberFormat(number){number=Number(number)
let x=null
let n=0
var re='\\d(?=(\\d{'+(x||3)+'})+'+(n>0?'\\.':'$')+')';return number.toFixed(Math.max(0,~~n)).replace(new RegExp(re,'g'),'$&,');}
function moneyFormat(money){return numberFormat(money)+'₫'}
function makeid(){var result='';var characters='abcdefghijklmnopqrstuvwxyz';var charactersLength=characters.length;for(var i=0;i<20;i++){result+=characters.charAt(Math.floor(Math.random()*charactersLength));}
return result;}
function suggestCusMoney(str){let availableItems=[1000,2000,5000,10000,20000,50000,100000,200000,500000]
let usenx=function(money,x){let sum=0;while(sum<money){sum+=x}
return sum}
let use5n2=function(money){let sum=5000;while(sum<money){sum+=2000}
return sum}
let use50n20=function(money){let sum=50000;while(sum<money){sum+=20000}
return sum}
let use500n200=function(money){let sum=500000;while(sum<money){sum+=200000}
return sum}
let money=maskMoneyToNumber(str)
let suggests={[money]:1}
availableItems.forEach(e=>{suggests[usenx(money,e)]=1})
suggests[use5n2(money)]=1
suggests[use50n20(money)]=1
suggests[use500n200(money)]=1
suggests=Object.keys(suggests).map(Number)
suggests=suggests.sort((a,b)=>a-b)
return suggests}
$(function(){$('.dkv-money').each(function(){let $this=$(this)
maskMoney($this)})
try{$('.dkv-select2').select2();}catch(e){}})
function getFormJsonData($form,filterEmpty=false){var unindexed_array=$form.serializeArray();var indexed_array={};if(filterEmpty){unindexed_array=unindexed_array.filter(e=>{return!!e;})}
unindexed_array.map(function(n,i){if(n['name'].includes('[]')){const idx=n['name'].replace('[]','');if(!indexed_array[idx]){indexed_array[idx]=[]}
indexed_array[idx].push(n['value'])}else{indexed_array[n['name']]=n['value'];}});return indexed_array;}
$(document).ready(function(){$('.country-phone').each((i,input)=>{$(input).attr('maxlength',12)
let iti=intlTelInput(input,{separateDialCode:true,formatOnDisplay:false,utilsScript:"/assets/js/intlTelutils.js?1590403638580",onlyCountries:['vn'],customPlaceholder:function(selectedCountryPlaceholder,selectedCountryData){if(selectedCountryData.iso2=='bd'){return "01xxxxxxxxx";}
return "904 545 084";return selectedCountryPlaceholder;},initialCountry:'VN'})});})
if(typeof Vue!=='undefined'){Vue.filter('numberFormat',function(value){return numberFormat(value)})
Vue.filter('moneyFormat',function(value){return moneyFormat(value)})}
function printElement(html){var ifr=document.createElement('iframe');ifr.style='height: 0px; width: 0px; position: absolute'
document.body.appendChild(ifr);$(html).appendTo(ifr.contentDocument.body);ifr.contentWindow.print();}