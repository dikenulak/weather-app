(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/clouds.7f3ac0b6.svg"},49:function(e,t,a){e.exports=a(96)},54:function(e,t,a){},55:function(e,t,a){},73:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(15),l=a.n(r),i=(a(54),a(46)),o=a(4),s=(a(55),a(26)),u=a.n(s),m=a(42),d=a(16),f=a(17),h=a(2),E=a(43),p=a.n(E),v=new(function(){function e(){Object(d.a)(this,e),this.weatherData={},this.loading=!0,this.dataLoading=!0,this.unit="imperial",this.error="",Object(h.m)(this)}return Object(f.a)(e,[{key:"axiosCall",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a=this,n=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:this.unit;try{p.a.get("https://openweathermap.org/data/2.5/onecall?lat=27.72&lon=85.32&units=".concat(t,"&appid=439d4b804bc8187953eb36d2a8c26a02")).then(Object(h.f)("fetchSuccess",(function(e){a.weatherData=e.data,a.loading=!1,a.dataLoading=!1})),Object(h.f)("fetchError",(function(e){a.loading="error"})))}catch(c){this.error=c}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAPI",value:function(){this.loading=!0,this.axiosCall()}},{key:"getLoadedAPI",value:function(e){this.dataLoading=!0,this.axiosCall(e),this.unit=e}}]),e}()),b=function(e){return new Date(1e3*e).toDateString()},g=function(e){return new Date(1e3*e).toLocaleTimeString()},x=new(function(){function e(){Object(d.a)(this,e),this.sliderIndex=3,Object(h.m)(this)}return Object(f.a)(e,[{key:"sliderIndexFunction",value:function(e){this.sliderIndex=e}}]),e}()),N="Fahrenheit",k="\xb0F",y="imperial",w="Celcius",j="\xb0C",O="metri",D=Object(o.a)((function(e){var t=e.getHourlyData,a=e.unit,n=e.temp;return c.a.createElement("section",{key:n.dt,className:"card flex-col just-betw txt-center",onClick:function(){return t(n.dt)}},c.a.createElement("div",{className:"bold"},b(n.dt)),c.a.createElement("div",{className:"font-sm"},"Sunrise: ",g(n.sunrise)),c.a.createElement("div",{className:"font-sm"},"Sunset: ",g(n.sunset)),c.a.createElement("div",{className:"font-sm"},"Temperature:"," ",c.a.createElement("span",{className:"bold"},n.temp.day," ","".concat(a===y?k:j))),c.a.createElement("div",{className:"font-sm"},"Feels like:"," ",c.a.createElement("span",{className:"bold"},n.feels_like.day," ","".concat(a===y?k:j))))})),F=Object(o.a)((function(e){var t,a=e.getHourlyData,n=x.sliderIndex,r=v.unit,l=v.weatherData.daily,i=l.length;return c.a.createElement("section",null,c.a.createElement("div",{className:"slider flex just-betw"},c.a.createElement("span",{onClick:function(){var e=n-1;e<3?x.sliderIndexFunction(i-1):x.sliderIndexFunction(e)}},"<"),c.a.createElement("span",{onClick:function(){n===i-1?x.sliderIndexFunction(3):x.sliderIndexFunction((n+1)%i)}},">")),c.a.createElement("div",{className:"weather flex"},(t=l,t.slice(n-3,n)).map((function(e){return c.a.createElement(D,{key:e.dt,temp:e,getHourlyData:a,unit:r})}))))})),I=function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("div",{className:"dot"}),c.a.createElement("div",{className:"dot"}),c.a.createElement("div",{className:"dot"}),c.a.createElement("div",{className:"dot"}),c.a.createElement("div",{className:"dot"}))},C=(a(73),Object(o.a)((function(e){var t=e.children,a=v.loading;return c.a.createElement(n.Fragment,null,a?c.a.createElement(I,null):t)}))),A=a(44),S=a.n(A),L=Object(o.a)((function(e){var t=e.setUnitCallback,a=e.timezone,n=e.current;return c.a.createElement("section",{className:"top-info flex flex-col justify-betw txt-center"},c.a.createElement("div",{className:"selection"},c.a.createElement("div",null,c.a.createElement("input",{type:"radio",id:N,checked:y===v.unit,name:N,onChange:function(e){return t(y)}}),c.a.createElement("label",{htmlFor:N},N)),c.a.createElement("div",null,c.a.createElement("input",{type:"radio",id:w,name:w,checked:O===v.unit,onChange:function(e){return t(O)}}),c.a.createElement("label",{htmlFor:w},w))),c.a.createElement("div",{className:"time-info"},c.a.createElement("h1",null,a),c.a.createElement("div",{className:"bold"},b(n.dt),"-",g(n.dt)),c.a.createElement("div",null,"Sunrise: ",g(n.sunrise)),c.a.createElement("div",null,"Sunset: ",g(n.sunset)),c.a.createElement("div",null,"Temperature:"," ",c.a.createElement("span",{className:"bold"},n.temp," ","".concat(v.unit===y?k:j))),c.a.createElement("div",null,"Feels like:"," ",c.a.createElement("span",{className:"bold"},n.feels_like," ","".concat(v.unit===y?k:j)))),v.dataLoading&&c.a.createElement(I,null))})),T=a(8),H=Object(o.a)((function(e){var t,a=e.tempData,n=v.unit;return c.a.createElement("section",{key:a.dt,className:"chart txt-center"},c.a.createElement("h3",{className:"bold"},b(a.dt)),c.a.createElement(T.e,{margin:{bottom:50},padding:20,xType:"ordinal",width:300,height:300,animation:!0,color:"orange"},c.a.createElement(T.c,null),c.a.createElement(T.a,null),c.a.createElement(T.d,{tickLabelAngle:-45}),c.a.createElement(T.f,{tickTotal:10,attr:"y",attrAxis:"x",orientation:"left",position:"end",title:"temperature",tickFormat:function(e){return"".concat(e," ").concat(n===y?k:j)}}),c.a.createElement(T.b,{className:"vertical-bar-series-example",data:(t=a.temp,Object.keys([].concat([t])[0]).sort().filter((function(e){return"max"!==e&&"min"!==e})).map((function(e){return{x:e,y:[t].concat()[0][e]}})))})))})),P=Object(o.a)((function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=v.weatherData,s=l.current,u=l.daily,m=l.timezone,d=function(e){var t=u.filter((function(t){return b(t.dt)===b(e)}));r(t)};Object(n.useEffect)((function(){v.getAPI()}),[]);var f=function(e){v.getLoadedAPI(e),r([])},h=Object(o.a)((function(){return c.a.createElement("div",{className:"App-main"},c.a.createElement("section",{className:"flex align-center just-center pos-rel"},c.a.createElement("h1",null,"Weather App"),c.a.createElement("img",{src:S.a,className:"App-logo",alt:"logo"})),c.a.createElement(L,{setUnitCallback:f,timezone:m,current:s}),c.a.createElement(F,{getHourlyData:d}),a.map((function(e){return c.a.createElement(H,{tempData:e,key:e.dt})})))}));return c.a.createElement("div",{className:"App"},c.a.createElement(C,{children:c.a.createElement(h,null)}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.7fdc31c4.chunk.js.map