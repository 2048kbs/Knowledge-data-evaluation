!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@babel/runtime-corejs3/helpers/defineProperty"),require("neo4j-driver"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/core-js/get-iterator-method"),require("@babel/runtime-corejs3/core-js-stable/array/from"),require("@babel/runtime-corejs3/core-js-stable/instance/slice"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("vis-network/standalone"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/helpers/typeof")):"function"==typeof define&&define.amd?define(["@babel/runtime-corejs3/helpers/defineProperty","neo4j-driver","@babel/runtime-corejs3/regenerator","@babel/runtime-corejs3/core-js-stable/object/values","@babel/runtime-corejs3/core-js-stable/array/is-array","@babel/runtime-corejs3/helpers/createClass","@babel/runtime-corejs3/core-js-stable/symbol","@babel/runtime-corejs3/core-js-stable/object/keys","@babel/runtime-corejs3/core-js/get-iterator","@babel/runtime-corejs3/core-js/get-iterator-method","@babel/runtime-corejs3/core-js-stable/array/from","@babel/runtime-corejs3/core-js-stable/instance/slice","@babel/runtime-corejs3/helpers/classCallCheck","@babel/runtime-corejs3/core-js-stable/instance/for-each","@babel/runtime-corejs3/helpers/asyncToGenerator","vis-network/standalone","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","@babel/runtime-corejs3/core-js-stable/promise","@babel/runtime-corejs3/core-js-stable/object/define-property","@babel/runtime-corejs3/core-js-stable/object/define-properties","@babel/runtime-corejs3/core-js-stable/instance/filter","@babel/runtime-corejs3/core-js-stable/set-timeout","@babel/runtime-corejs3/core-js-stable/instance/map","@babel/runtime-corejs3/core-js-stable/instance/concat","@babel/runtime-corejs3/helpers/typeof"],r):"object"==typeof exports?exports.NeoVis=r(require("@babel/runtime-corejs3/helpers/defineProperty"),require("neo4j-driver"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/core-js/get-iterator-method"),require("@babel/runtime-corejs3/core-js-stable/array/from"),require("@babel/runtime-corejs3/core-js-stable/instance/slice"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("vis-network/standalone"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/helpers/typeof")):e.NeoVis=r(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(window,(function(e,r,t,n,o,s,i,a,c,l,u,b,d,p,f,j,h,m,v,y,g,_,x,k,w,q,N){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=27)}([function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r){e.exports=n},function(e,r){e.exports=o},function(e,r){e.exports=s},function(e,r){e.exports=i},function(e,r){e.exports=a},function(e,r){e.exports=c},function(e,r){e.exports=l},function(e,r){e.exports=u},function(e,r){e.exports=b},function(e,r){e.exports=d},function(e,r){e.exports=p},function(e,r){e.exports=f},function(e,r){e.exports=j},function(e,r){e.exports=h},function(e,r){e.exports=m},function(e,r){e.exports=v},function(e,r){e.exports=y},function(e,r){e.exports=g},function(e,r){e.exports=_},function(e,r){e.exports=x},function(e,r){e.exports=k},function(e,r){e.exports=w},function(e,r){e.exports=q},function(e,r){e.exports=N},function(e,r,t){"use strict";t.r(r),t.d(r,"NEOVIS_DEFAULT_CONFIG",(function(){return ue})),t.d(r,"default",(function(){return be}));var n=t(8),o=t.n(n),s=t(9),i=t.n(s),a=t(10),c=t.n(a),l=t(11),u=t.n(l),b=t(20),d=t.n(b),p=t(21),f=t.n(p),j=t(16),h=t.n(j),m=t(17),v=t.n(m),y=t(22),g=t.n(y),_=t(18),x=t.n(_),k=t(23),w=t.n(k),q=t(19),N=t.n(q),E=t(3),O=t.n(E),C=t(24),S=t.n(C),I=t(25),T=t.n(I),L=t(4),A=t.n(L),P=t(2),V=t.n(P),M=t(26),R=t.n(M),U=t(13),D=t.n(U),W=t(14),z=t.n(W),H=t(7),F=t.n(H),G=t(12),B=t.n(G),Q=t(5),Y=t.n(Q),$=t(0),J=t.n($),K=t(6),X=t.n(K),Z=t(1),ee=t.n(Z),re=t(15),te={neo4j:{initialQuery:"MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",neo4jUri:"bolt://localhost:7687",neo4jUser:"neo4j",neo4jPassword:"neo4j",encrypted:"ENCRYPTION_OFF",trust:"TRUST_ALL_CERTIFICATES"},visjs:{interaction:{hover:!0,hoverConnectedEdges:!0,selectConnectedEdges:!1,multiselect:"alwaysOn",zoomView:!1,experimental:{}},physics:{barnesHut:{damping:.1}},nodes:{mass:4,shape:"neo",labelHighlightBold:!1,widthConstraint:{maximum:40},heightConstraint:{maximum:40}},edges:{hoverWidth:0,selectionWidth:0,smooth:{type:"continuous",roundness:.15},font:{size:9,strokeWidth:0,align:"top"},color:{inherit:!1},arrows:{to:{enabled:!0,type:"arrow",scaleFactor:.5}}}}};function ne(e,r){var t;if(void 0===X.a||null==i()(e)){if(A()(e)||(t=function(e,r){var t;if(!e)return;if("string"==typeof e)return oe(e,r);var n=u()(t=Object.prototype.toString.call(e)).call(t,8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return c()(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oe(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,b=!1;return{s:function(){t=o()(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){b=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(b)throw a}}}}function oe(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var se=function(){function e(){var r;B()(this,e),this._handlers=(r={},J()(r,"completed",[]),J()(r,"error",[]),J()(r,"clickNode",[]),J()(r,"clickEdge",[]),r)}return Y()(e,[{key:"register",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);this._handlers[e].push(r)}},{key:"generateEvent",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);var t,n=ne(this._handlers[e]);try{for(n.s();!(t=n.n()).done;){(0,t.value)(r)}}catch(e){n.e(e)}finally{n.f()}}}]),e}();function ie(e,r){var t;if(void 0===X.a||null==i()(e)){if(A()(e)||(t=function(e,r){var t;if(!e)return;if("string"==typeof e)return ae(e,r);var n=u()(t=Object.prototype.toString.call(e)).call(t,8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return c()(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,b=!1;return{s:function(){t=o()(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){b=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(b)throw a}}}}function ae(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ce(e,r){var t=F()(e);if(x.a){var n=x()(e);r&&(n=g()(n).call(n,(function(r){return v()(e,r).enumerable}))),t.push.apply(t,n)}return t}function le(e){for(var r=1;r<arguments.length;r++){var t,n=null!=arguments[r]?arguments[r]:{};if(r%2)D()(t=ce(Object(n),!0)).call(t,(function(r){J()(e,r,n[r])}));else if(h.a)f()(e,h()(n));else{var o;D()(o=ce(Object(n))).call(o,(function(r){d()(e,r,v()(n,r))}))}}return e}var ue=X()(),be=function(){function e(r){B()(this,e),J()(this,"_nodes",{}),J()(this,"_edges",{}),J()(this,"_data",{}),J()(this,"_network",null),J()(this,"_events",new se),this._init(r),this._consoleLog(r),this._consoleLog(te)}var r;return Y()(e,[{key:"nodes",get:function(){return this._data.nodes}},{key:"edges",get:function(){return this._data.edges}}]),Y()(e,[{key:"_consoleLog",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";("log"!==r||this._config.console_debug)&&console[r](e)}},{key:"_init",value:function(e){if(e.labels&&e.labels[ue])for(var r=0,t=F()(e.labels);r<t.length;r++){var n=t[r];e=le(le({},e),{},{labels:le(le({},e.labels),{},J()({},n,le(le({},e.labels[ue]),e.labels[n])))})}if(e.relationships&&e.relationships[ue])for(var o=0,s=F()(e.relationships);o<s.length;o++){var i=s[o];e=le(le({},e),{},{relationships:le(le({},e.relationships),{},J()({},i,le(le({},e.relationships[ue]),e.relationships[i])))})}this._config=e,this._encrypted=e.encrypted||te.neo4j.encrypted,this._trust=e.trust||te.neo4j.trust,this._driver=ee.a.driver(e.server_url||te.neo4j.neo4jUri,ee.a.auth.basic(e.server_user||te.neo4j.neo4jUser,e.server_password||te.neo4j.neo4jPassword),{encrypted:this._encrypted,trust:this._trust,maxConnectionPoolSize:100,connectionAcquisitionTimeout:1e4}),this._database=e.server_database,this._query=e.initial_cypher||te.neo4j.initialQuery,this._container=document.getElementById(e.container_id)}},{key:"_addNode",value:function(e){this._nodes[e.id]=e}},{key:"_addEdge",value:function(e){this._edges[e.id]=e}},{key:"buildNodeVisObject",value:(r=z()(V.a.mark((function e(r){var t,n,o,s,i,a,c,l,u,b,d,p,f,j,h,m,v,y,g;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},n=r.labels[0],o=this._config&&this._config.labels&&(this._config.labels[n]||this._config.labels[ue]),s=o&&o.caption,i=o&&o.size,a=o&&o.sizeCypher,c=o&&o.community,l=o&&o.image,u=o&&o.font,b=o&&o.title_properties||F()(r.properties),t.id=r.identity.toInt(),t.raw=r,!a){e.next=26;break}return t.value=1,d=this._driver.session(this._database&&{database:this._database}),e.prev=15,e.next=18,d.readTransaction((function(e){return e.run(a,{id:ee.a.int(t.id)})}));case 18:p=e.sent,f=ie(p.records);try{for(f.s();!(j=f.n()).done;)h=j.value,D()(h).call(h,(function(e){"number"==typeof e?t.value=e:ee.a.isInt(e)&&(t.value=e.toNumber())}))}catch(e){f.e(e)}finally{f.f()}case 21:return e.prev=21,d.close(),e.finish(21);case 24:e.next=27;break;case 26:"number"==typeof i?t.value=i:(m=r.properties[i])&&"number"==typeof m?t.value=m:m&&"object"===R()(m)&&ee.a.isInt(m)&&m.inSafeRange()?t.value=m.toNumber():t.value=1;case 27:if("function"==typeof s?t.label=s(r):s&&("number"==typeof r.properties[s]||ee.a.isInt(r.properties[s]))?t.label=r.properties[s].toString()||"":t.label=r.properties[s]||n||"",c)try{r.properties[c]?t.group=r.properties[c].toNumber()||n||0:t.group=0}catch(e){t.group=0}else t.group=n;t.title="",v=ie(b);try{for(v.s();!(y=v.n()).done;)g=y.value,r.properties.hasOwnProperty(g)&&(t.title+=this.propertyToString(g,r.properties[g]))}catch(e){v.e(e)}finally{v.f()}return l?(t.shape="image",t.image=l):t.shape="dot",u&&(t.font=u),e.abrupt("return",t);case 35:case"end":return e.stop()}}),e,this,[[15,,21,24]])}))),function(e){return r.apply(this,arguments)})},{key:"buildEdgeVisObject",value:function(e){var r=this._config&&this._config.relationships&&(this._config.relationships[e.type]||this._config.relationships[ue]),t=r&&r.thickness,n=r&&r.caption,o={};for(var s in o.id=e.identity.toInt(),o.from=e.start.toInt(),o.to=e.end.toInt(),o.raw=e,o.title="",e.properties)e.properties.hasOwnProperty(s)&&(o.title+=this.propertyToString(s,e.properties[s]));return o.value=t&&"string"==typeof t?e.properties[t]:t&&"number"==typeof t?t:1,"boolean"==typeof n?o.label=n?e.type:"":n&&"string"==typeof n?"number"==typeof e.properties[n]||ee.a.isInt(e.properties[n])?o.label=e.properties[n].toString()||"":o.label=e.properties[n]||"":o.label=e.type,o}},{key:"propertyToString",value:function(e,r){var t;if(A()(r)&&r.length>1){var n,o="<strong>".concat(e,":</strong><br /><ul>"),s=ie(r);try{for(s.s();!(n=s.n()).done;){var i=n.value;o+="<li>".concat(i,"</li>")}}catch(e){s.e(e)}finally{s.f()}return o+"</ul>"}return T()(t="<strong>".concat(e,":</strong> ")).call(t,r,"<br>")}},{key:"render",value:function(e){var r,t=this,n=0,o=e||this._query,s=this._driver.session(this._database&&{database:this._database}),i=[];s.run(o,{limit:30}).subscribe({onNext:function(e){var r;n++,t._consoleLog("CLASS NAME"),t._consoleLog(e&&e.constructor.name),t._consoleLog(e);var o=S()(r=O()(e.toObject())).call(r,function(){var e=z()(V.a.mark((function e(r){var n,o,s,i,a,c,l,u,b,d,p,f;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t._consoleLog("Constructor:"),t._consoleLog(r&&r.constructor.name),!(r instanceof ee.a.types.Node)){e.next=9;break}return e.next=5,t.buildNodeVisObject(r);case 5:n=e.sent;try{t._addNode(n)}catch(e){t._consoleLog(e,"error")}e.next=79;break;case 9:if(!(r instanceof ee.a.types.Relationship)){e.next=14;break}o=t.buildEdgeVisObject(r),t._addEdge(o),e.next=79;break;case 14:if(!(r instanceof ee.a.types.Path)){e.next=53;break}return t._consoleLog("PATH"),t._consoleLog(r),e.next=19,t.buildNodeVisObject(r.start);case 19:return s=e.sent,e.next=22,t.buildNodeVisObject(r.end);case 22:i=e.sent,t._addNode(s),t._addNode(i),a=ie(r.segments),e.prev=26,a.s();case 28:if((c=a.n()).done){e.next=43;break}return l=c.value,e.t0=t,e.next=33,t.buildNodeVisObject(l.start);case 33:return e.t1=e.sent,e.t0._addNode.call(e.t0,e.t1),e.t2=t,e.next=38,t.buildNodeVisObject(l.end);case 38:e.t3=e.sent,e.t2._addNode.call(e.t2,e.t3),t._addEdge(t.buildEdgeVisObject(l.relationship));case 41:e.next=28;break;case 43:e.next=48;break;case 45:e.prev=45,e.t4=e.catch(26),a.e(e.t4);case 48:return e.prev=48,a.f(),e.finish(48);case 51:e.next=79;break;case 53:if(!(r instanceof Array)){e.next=79;break}u=ie(r),e.prev=55,u.s();case 57:if((b=u.n()).done){e.next=71;break}if(d=b.value,t._consoleLog("Array element constructor:"),t._consoleLog(d&&d.constructor.name),!(d instanceof ee.a.types.Node)){e.next=68;break}return e.next=64,t.buildNodeVisObject(d);case 64:p=e.sent,t._addNode(p),e.next=69;break;case 68:d instanceof ee.a.types.Relationship&&(f=t.buildEdgeVisObject(d),t._addEdge(f));case 69:e.next=57;break;case 71:e.next=76;break;case 73:e.prev=73,e.t5=e.catch(55),u.e(e.t5);case 76:return e.prev=76,u.f(),e.finish(76);case 79:case"end":return e.stop()}}),e,null,[[26,45,48,51],[55,73,76,79]])})));return function(r){return e.apply(this,arguments)}}());i.push(N.a.all(o))},onCompleted:(r=z()(V.a.mark((function e(){var r,o,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.all(i);case 2:s.close(),t._network&&t._network.body.data.nodes.length>0?(t._data.nodes.update(O()(t._nodes)),t._data.edges.update(O()(t._edges))):(r={nodes:{font:{size:26,strokeWidth:7},scaling:{}},edges:{arrows:{to:{enabled:t._config.arrows||!1}},length:200},layout:{improvedLayout:!1,hierarchical:{enabled:t._config.hierarchical||!1,sortMethod:t._config.hierarchical_sort_method||"hubsize"}},physics:{adaptiveTimestep:!0,stabilization:{iterations:200,fit:!0}}},o=t._container,t._data={nodes:new re.DataSet(O()(t._nodes)),edges:new re.DataSet(O()(t._edges))},t._consoleLog(t._data.nodes),t._consoleLog(t._data.edges),t._network=new re.Network(o,t._data,r)),t._consoleLog("completed"),w()((function(){t._network.stopSimulation()}),1e4),t._events.generateEvent("completed",{record_count:n}),a=t,t._network.on("click",(function(e){if(e.nodes.length>0){var r=this.getNodeAt(e.pointer.DOM);a._events.generateEvent("clickNode",{nodeId:r,node:a._nodes[r]})}else if(e.edges.length>0){var t=this.getEdgeAt(e.pointer.DOM);a._events.generateEvent("clickEdge",{edgeId:t,edge:a._edges[t]})}}));case 9:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)}),onError:function(e){t._consoleLog(e,"error"),t._events.generateEvent("error",{error_msg:e})}})}},{key:"clearNetwork",value:function(){this._neo4jNodes={},this._neo4jEdges={},this._nodes={},this._edges={},this._network.setData([])}},{key:"registerOnEvent",value:function(e,r){this._events.register(e,r)}},{key:"reinit",value:function(e){this._init(e),this.render()}},{key:"reload",value:function(){this.clearNetwork(),this.render()}},{key:"stabilize",value:function(){this._network.stopSimulation(),this._consoleLog("Calling stopSimulation")}},{key:"renderWithCypher",value:function(e){this.clearNetwork(),this._query=e,this.render()}},{key:"updateWithCypher",value:function(e){this.render(e)}}]),e}()}])}));
//# sourceMappingURL=neovis-without-dependencies.js.map