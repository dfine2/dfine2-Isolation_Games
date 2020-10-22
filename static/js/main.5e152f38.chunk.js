(this.webpackJsonpcodenames=this.webpackJsonpcodenames||[]).push([[0],{37:function(e,n,t){e.exports=t(74)},70:function(e,n){},74:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(31),i=t.n(c),u=t(1),l=t(2),o=t(15),d=t(32),s=t.n(d)()("http://360e5de41181.ngrok.io"),f=Object(r.createContext)(),p=Object(r.createContext)(),m={key:[],cards:[],deck:[],blueCards:0,redCards:0,turn:""},v=function(){return Object(r.useContext)(f)},b=function(){return Object(r.useContext)(p)},g=function(e){var n=e.children,t=Object(r.useState)(m),c=Object(o.a)(t,2),i=c[0],u=c[1],l=Object(r.useState)("agent"),d=Object(o.a)(l,2),v=d[0],b=d[1];s.on("gameState",(function(e){return u(e)})),s.on("newGame",(function(e){return u(e)}));return a.a.createElement(f.Provider,{value:{localState:i,view:v}},a.a.createElement(p.Provider,{value:{flipCard:function(e){s.emit("flipCard",e)},setView:b,startNewGame:function(){s.emit("startNewGame")},endTurn:function(){s.emit("endTurn")}}},n))};function x(){var e=Object(u.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    font-size: 14px;\n    cursor: pointer;\n"]);return x=function(){return e},e}function w(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 150px 150px;\n"]);return w=function(){return e},e}var E=l.a.div(w()),y=l.a.button(x()),j=function(){var e=b(),n=e.startNewGame,t=e.endTurn;return a.a.createElement(E,null,a.a.createElement(y,{onClick:function(){return t()}},"End Turn"),a.a.createElement(y,{onClick:function(){return n()}},"New Game"))};function h(){var e=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 50px;\n    padding-left: 24px;\n    background-color: ",";\n    color: white;\n    font-size: 16px;\n"]);return h=function(){return e},e}function O(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 150px 150px;\n\n"]);return O=function(){return e},e}var k=l.a.div(O()),C=l.a.div(h(),(function(e){return e.color})),S=function(){var e=v().localState,n=e.blueCards,t=e.redCards;return a.a.createElement(k,null,a.a.createElement(C,{color:"red"},"Red: ",t),a.a.createElement(C,{color:"blue"},"Blue: ",n))};function G(){var e=Object(u.a)(["\n    width: 100%;\n    color: ",";\n    background-color: ",";\n    cursor: pointer;\n    font-size: 24px;\n    height: 90px;\n    border: ",";\n    outline: 0;\n    font-family: 'Chalkduster'\n"]);return G=function(){return e},e}function N(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 200px 200px 200px;\n"]);return N=function(){return e},e}var T=l.a.div(N()),z=l.a.button(G(),(function(e){return e.isSelected?"white":"black"}),(function(e){return e.isSelected?"lightslategrey":"silver"}),(function(e){return e.isSelected?"4px inset lightslategrey":"4px groove silver"})),A=function(){var e=v().view,n=b().setView;return a.a.createElement(T,null,a.a.createElement(z,{isSelected:"agent"===e,onClick:function(){return n("agent")}},"Agent"),a.a.createElement(z,{isSelected:"spymaster"===e,onClick:function(){return n("spymaster")}},"Spymaster"),a.a.createElement(z,{isSelected:"arbiter"===e,onClick:function(){return n("arbiter")}},"Arbiter"))};function B(){var e=Object(u.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-weight: 20;\ncursor: ",";\ncolor: ",";\nbackground-color: ",";\nborder: ",";\n"]);return B=function(){return e},e}var I=l.a.div(B(),(function(e){return"arbiter"===e.view?"pointer":"default"}),(function(e){var n=e.card,t=e.view;return n.revealed?"white":"spymaster"===t?"".concat(n.color):"black"}),(function(e){var n=e.card;return n.revealed?n.color:"#e0c99b"}),(function(e){var n=e.isSelected,t=e.card;return n?"8px inset ".concat(t.color):"2px solid black"})),J=function(e){var n=e.card,t=v().view,r=b().flipCard;return a.a.createElement(I,{card:n,view:t,onClick:function(){return"arbiter"===t&&!1===n.revealed&&r(n.word)}},n.word)};function P(){var e=Object(u.a)(["\n    margin: 32px;\n    margin-top: 0px;\n    padding: 16px;\n    display: grid;\n    grid-template-rows: repeat(5, 100px);\n    grid-template-columns: repeat(5, 200px);\n    grid-gap: 15px;\n"]);return P=function(){return e},e}function V(){var e=Object(u.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: center;\n\n"]);return V=function(){return e},e}var D=l.a.div(V()),R=l.a.div(P()),q=function(e){var n=e.cards,t=[];if(n.length>0)for(var r=0;r<25;r++)t.push(a.a.createElement(J,{card:n[r]}));return a.a.createElement(D,null,a.a.createElement(R,null,t))};function F(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return F=function(){return e},e}function H(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 92%;\n  margin: 40px 32px 8px 32px;\n  "]);return H=function(){return e},e}var K=l.a.div(H()),L=l.a.div(F()),M=function(){var e=v().localState,n=e.cards,t=e.turn;return a.a.createElement(L,null,a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement(K,null,a.a.createElement(S,null),a.a.createElement("div",{style:{color:t}},t,"'s turn"),a.a.createElement(j,null)),n&&a.a.createElement(q,{cards:n}),a.a.createElement(A,null)))};i.a.render(a.a.createElement(g,null,a.a.createElement(M,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5e152f38.chunk.js.map