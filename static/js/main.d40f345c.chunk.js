(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"naruto1","image":"/images/naruto1clicky.jpg","clicked":false},{"id":2,"name":"naruto2","image":"/images/naruto2clicky.jpeg","clicked":false},{"id":3,"name":"naruto3","image":"/images/naruto3clicky.jpeg","clicked":false},{"id":4,"name":"naruto4","image":"/images/naruto4clicky.jpeg","clicked":false},{"id":5,"name":"naruto5","image":"/images/naruto5clicky.jpg","clicked":false},{"id":7,"name":"naruto7","image":"/images/naruto7clicky.png","clicked":false},{"id":8,"name":"naruto8","image":"/images/naruto8clicky.png","clicked":false},{"id":9,"name":"naruto9","image":"/images/naruto9clicky.jpg","clicked":false},{"id":10,"name":"naruto10","image":"/images/naruto10clicky.jpg","clicked":false},{"id":11,"name":"naruto11","image":"/images/naruto11clciky.png","clicked":false}]')},,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(3),r=t.n(i),s=(t(13),t(4)),o=t(5),l=t(7),m=t(6),u=(t(14),function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.handleClick(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{className:0===e.score&&"Click an image to begin!"!==e.message?"shake":"",alt:e.name,src:e.image})))}),d=(t(15),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),g=(t(16),function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("li",{className:"brand"},e.brand),n.a.createElement("li",{id:"message",className:"You guess correctly!"===e.message?"correct":"You guess incorrectly!"===e.message?"incorrect":void 0},e.message),n.a.createElement("li",null,n.a.createElement("span",{className:"score"}," Score: ",e.score)," ",n.a.createElement("span",{className:"scoreSplit"},"|")," ",n.a.createElement("span",{className:"score"},"Top Score: ",e.hiScore))))}),k=(t(17),{title:{background:"url('./images/naruto11clciky.png')",backgroundSize:"100% auto",color:"#fff",minHeight:"400px",padding:"180px 20px",paddingBottom:"140px",textAlign:"center",borderBottom:"1px solid #fff"}}),f=function(e){return n.a.createElement("div",{className:"title",style:k.title},n.a.createElement("h1",null,e.children),n.a.createElement("p",{className:"subtitle"},e.subtitle))},h=t(1),p=(t(18),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={cards:h,clicked:[],score:0,hiScore:0,message:"Click an image to begin!"},e.handleShuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}return e},e.handleClick=function(a){-1===e.state.clicked.indexOf(a)?e.setState({cards:h,clicked:e.state.clicked.concat(a),score:e.state.score+1,hiScore:e.state.hiScore>e.state.score?e.state.hiScore:e.state.hiScore+1,message:"You guessed correctly!"}):e.setState({cards:h,clicked:[],score:0,topScore:e.state.score>e.state.hiScore?e.state.score:e.state.hiScore,message:"You guessed incorrectly!"}),e.handleShuffleArray(h)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(d,null,n.a.createElement(g,{brand:"Clicky Game",message:this.state.message,score:this.state.score,hiScore:this.state.hiScore}),n.a.createElement(f,{subtitle:"Click on an image to earn points, but don't click on the same more than once!"},"Clicky Game: Naruto Uzomaki Edition"),this.state.cards.map((function(a){return n.a.createElement(u,{handleClick:e.handleClick,id:a.id,key:a.id,name:a.name,message:e.state.message,image:"/Clicky-Game"+a.image,score:e.state.score})})))}}]),t}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.d40f345c.chunk.js.map