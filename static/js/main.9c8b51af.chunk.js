(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,n){e.exports=n(316)},203:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),l=n.n(r),i=(n(203),n(17)),o=n(18),s=n(20),u=n(19),h=n(21),m=n(24),d=n(319),p=n(318),f=n(4),E=n(3),y=n(12),g=n(320),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",{className:e.root},c.a.createElement(f.a,{position:"static",className:e.colorPrimary},c.a.createElement(f.g,null,c.a.createElement(f.e,{className:e.menuButton,color:"inherit","aria-label":"Menu"}),c.a.createElement(f.h,{variant:"h6",color:"inherit",className:e.grow},"Finding Falcone!"),c.a.createElement(f.b,{variant:"text",className:"NavButton"},c.a.createElement("a",{href:"http://www.geektrust.in/"},"GeekTrust Home")))))}}]),t}(a.Component),v=Object(y.d)(Object(E.withStyles)(function(e){return{root:{flexGrow:1,colorPrimary:"yellow"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},colorPrimary:{background:"linear-gradient(45deg, #FDC830 30%, #F37335 90%)"}}}),g.a)(b),O=n(23),T=n.n(O),j=function(e){return{type:"GET_ERRORS",payload:e}},C=function(e){return{type:"INCREMENT_VEHICLE_COUNT",payload:e}},V=n(103),_=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onPlanetSelect=function(e){var t=n.props,a=t.onPlanetChange,c=t.combination,r=t.resetFilters;n.state.selectedVehicle&&r(c),a(e,c),n.setState({selectedPlanet:e.value})},n.onVehicleSelect=function(e){var t=n.props,a=t.onVehicleCountUpdate,c=t.combination,r=n.state.selectedVehicle!==e.target.name?n.state.selectedVehicle:null;e.target.checked?n.setState({selectedVehicle:e.target.name},a(e.target.name,e.target.checked,r,c)):n.setState({selectedVehicle:""},a(e.target.name,e.target.checked,r,c))},n.checkDistanceFeasibility=function(e){var t=n.props.planets.filter(function(e){return e.name===n.state.selectedPlanet});if(e)return t[0].distance>e.max_distance},n.state={selectedPlanet:"",selectedVehicle:n.props.currentVehicle},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.currentVehicle!==this.state.selectedVehicle&&this.setState({selectedVehicle:e.currentVehicle})}},{key:"render",value:function(){var e=this,t=this.props,n=t.selectedPlanets,a=t.planets,r=t.vehicles,l=t.currentVehicle,i=this.state,o=i.selectedPlanet,s=i.selectedVehicle,u=a.filter(function(e){return n&&n.length&&n.indexOf(e.name)<0}).length?a.filter(function(e){return n&&n.length&&n.indexOf(e.name)<0}):a;return c.a.createElement("div",null,c.a.createElement(V.a,{options:u&&u.map(function(e){return{value:e.name,label:e.name}}),onChange:this.onPlanetSelect.bind(this)}),o&&r.map(function(t){return c.a.createElement("div",{className:"form-group",style:{margin:"15px 15px 15px 0 "}},c.a.createElement("input",{type:"checkbox",name:t&&t.name,disabled:e.checkDistanceFeasibility(t)||!e.checked&&!t.total_no&&s!==t.name,checked:""!==l&&s===t.name,onChange:e.onVehicleSelect.bind(e)}),c.a.createElement("label",null,t.name," (",t.total_no,")")," ")}))}}]),t}(a.Component),S=Object(m.b)(function(e){return{planets:e.mainReducer.planets,vehicles:e.mainReducer.vehicles}},{incrementVehicleCount:C})(_),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onPlanetChange=function(e,t){var a=n.state.selectedPlanets;if(a&&a.length){var c=a.map(function(n,a){return a===t-1?e.value:n});n.setState({selectedPlanets:c},function(){return n.calculateTravelTime()})}},n.onVehicleCountUpdate=function(e,t,a,c){var r=n.props,l=r.incrementVehicleCount,i=r.decrementVehicleCount,o=n.state.selectedVehicles;if(o&&o.length){var s=o.map(function(t,n){return n===c-1?e:t});n.setState({selectedVehicles:s},function(){return n.calculateTravelTime()})}t?(i(e),a&&l(a)):l(e)},n.calculateTravelTime=function(){for(var e=n.state,t=e.planets,a=e.vehicles,c=e.selectedPlanets,r=e.selectedVehicles,l=0,i=function(e){""!==c[e]&&""!==r[e]&&(l+=t.filter(function(t){return t.name===c[e]})[0].distance/a.filter(function(t){return t.name===r[e]})[0].speed)},o=0;o<c.length;o++)i(o);n.props.updateTotalSearchTime(l)},n.resetFilters=function(e){if(e)n.onVehicleCountUpdate(n.state.selectedVehicles[e-1],!1,"",e),n.setState(function(t){return{selectedVehicles:t.selectedVehicles.map(function(t,n){return n===e-1?"":t})}});else{for(var t=0;t<n.state.selectedVehicles.length;t++)n.onVehicleCountUpdate(n.state.selectedVehicles[t],!1,"",t+1);n.setState({selectedVehicles:["","","",""]})}},n.onSubmitData=function(){n.props.findFalcone({token:n.props.token,planet_names:n.state.selectedPlanets,vehicle_names:n.state.selectedVehicles},n.props.history)},n.state={planets:[],vehicles:[],selectedPlanets:["","","",""],selectedVehicles:["","","",""],error:""},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAuthToken(),this.props.fetchPlanets(),this.props.fetchVehicles(),this.props.updateTotalSearchTime(0)}},{key:"componentWillReceiveProps",value:function(e){e.planets&&e.vehicles&&this.setState({planets:e.planets,vehicles:e.vehicles})}},{key:"render",value:function(){var e=this,t=this.state,n=t.planets,a=t.vehicles,r=t.selectedPlanets,l=t.selectedVehicles,i=this.props,o=i.classes,s=i.totalSearchTime,u=i.errorText;return c.a.createElement("div",{style:{height:"inherit",marginTop:"20px"}},c.a.createElement(f.f,{className:o.root},n.length&&a.length?c.a.createElement(f.d,{container:!0,justify:"center"},c.a.createElement(f.d,{item:!0,xs:12},c.a.createElement("h2",{style:{color:"white"},align:"center"},"Select planets you wish to search in:")),r.map(function(t,n){return c.a.createElement(f.d,{key:n,item:!0,xs:12,md:6,lg:2,style:{margin:"15px"}},c.a.createElement("h3",{style:{color:"white"},align:"center"},"Destination ",n+1),c.a.createElement(S,{currentPlanet:t,currentVehicle:l[n],selectedPlanets:r,onPlanetChange:e.onPlanetChange,onVehicleCountUpdate:e.onVehicleCountUpdate,resetFilters:e.resetFilters,combination:n+1}))}),c.a.createElement(f.d,{item:!0,xs:12,md:6,lg:2,style:{marginTop:"55px"}},c.a.createElement("h2",{style:{color:"white"},align:"center"},"Time taken : ",s||0)),c.a.createElement(f.d,{item:!0,xs:6,style:{marginTop:"30px",marginBottom:"30px",textAlign:"center"}},c.a.createElement(f.b,{variant:"contained",color:"primary",onClick:this.onSubmitData.bind(this)},"Find Falcone!")),c.a.createElement(f.d,{item:!0,xs:6,style:{marginTop:"30px",marginBottom:"30px",textAlign:"center"}},c.a.createElement(f.b,{variant:"contained",color:"secondary",disabled:!l.filter(function(e){return e.length>0}).length,onClick:this.resetFilters.bind(this,"")},"Reset Filters"))):c.a.createElement(f.d,{container:!0,justify:"center"},c.a.createElement(f.d,{item:!0,style:{marginTop:"15px"}},u?c.a.createElement("h2",{style:{color:"white"},align:"center"},"Please check your network and try again."):c.a.createElement(f.c,{color:"secondary"})))))}}]),t}(a.Component),w=Object(m.b)(function(e){return{planets:e.mainReducer.planets,vehicles:e.mainReducer.vehicles,totalSearchTime:e.timeReducer.totalSearchTime,token:e.authReducer.token,errorText:e.errorReducer.errorText}},{fetchAuthToken:function(){return function(e){T.a.defaults.headers.common.Accept="application/json",T.a.post("https://findfalcone.herokuapp.com/token").then(function(t){e({type:"GET_API_TOKEN",payload:t.data.token})}).catch(function(t){return e(j(t.message))})}},fetchPlanets:function(){return function(e){T.a.get("https://findfalcone.herokuapp.com/planets").then(function(t){e({type:"FETCH_PLANETS",payload:t.data})}).catch(function(t){return e(j(t.message))})}},fetchVehicles:function(){return function(e){T.a.get("https://findfalcone.herokuapp.com/vehicles").then(function(t){e({type:"FETCH_VEHICLES",payload:t.data})}).catch(function(t){return e(j(t.message))})}},incrementVehicleCount:C,decrementVehicleCount:function(e){return{type:"DECREMENT_VEHICLE_COUNT",payload:e}},updateTotalSearchTime:function(e){return{type:"UPDATE_SEARCH_TIME",payload:e}},findFalcone:function(e,t){return function(n){T.a.defaults.headers.common.Accept="application/json",T.a.defaults.headers.common["Content-Type"]="application/json",T.a.post("https://findfalcone.herokuapp.com/find",e).then(function(e){n({type:"FIND_FALCONE",payload:e.data}),t.push("/report")}).catch(function(e){return n(j(e.message))})}}})(Object(y.d)(Object(E.withStyles)(function(){return{root:{height:"inherit",overflow:"auto"}}}),g.a)(k)),x=n(317),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.totalSearchTime,a=e.planetFound,r=e.searchStatus,l=e.token;return c.a.createElement("div",{style:{height:"inherit",marginTop:"20px"}},""!==l?c.a.createElement(f.f,{className:t.root,style:{background:"linear-gradient(45deg, #34A5CB 40%, #E5AD9A 60%)"}},"success"===r?c.a.createElement(f.d,{container:!0,justify:"center"},c.a.createElement(f.d,{item:!0,xs:12},c.a.createElement("h2",{style:{color:"white"},align:"center"},"Success! Congratulations on Finding Falcone! King Shan is mighty pleased!")),c.a.createElement(f.d,{item:!0,xs:12},c.a.createElement("h3",{style:{color:"white"},align:"center"},"Time Taken : ",n)),c.a.createElement(f.d,{item:!0,xs:12},c.a.createElement("h3",{style:{color:"white"},align:"center"},"Planet found : ",a))):c.a.createElement(f.d,{container:!0,justify:"center"},c.a.createElement(f.d,{item:!0,xs:12},c.a.createElement("h2",{style:{color:"white"},align:"center"},"Failure! Unable to locate Falcone!"))),c.a.createElement(f.d,{container:!0,justify:"center"},c.a.createElement(f.d,{item:!0,xs:12},c.a.createElement("h2",{style:{color:"white"},align:"center"},c.a.createElement(x.a,{to:"/"},"Try another search"))))):this.props.history.push("/"))}}]),t}(a.Component),P=Object(m.b)(function(e){return{token:e.authReducer.token,totalSearchTime:e.timeReducer.totalSearchTime,planetFound:e.mainReducer.findFalconeResult.planet_name,searchStatus:e.mainReducer.findFalconeResult.status}})(Object(y.d)(Object(E.withStyles)(function(){return{root:{height:"inherit",overflow:"auto"}}}),g.a)(R)),F=n(101),N={token:""},A=n(14),D={planets:{},vehicles:{},findFalconeResult:{}},I={totalSearchTime:0},U={isErrorbarOpen:!1,errorText:""},H=Object(y.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_API_TOKEN":return{token:t.payload};default:return e}},mainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PLANETS":return Object(A.a)({},e,{planets:t.payload});case"FETCH_VEHICLES":return Object(A.a)({},e,{vehicles:t.payload});case"INCREMENT_VEHICLE_COUNT":return Object(A.a)({},e,{vehicles:e.vehicles.map(function(e){return e.name===t.payload?Object(A.a)({},e,{total_no:e.total_no+1}):Object(A.a)({},e)})});case"DECREMENT_VEHICLE_COUNT":return Object(A.a)({},e,{vehicles:e.vehicles.map(function(e){return e.name===t.payload&&e.total_no?Object(A.a)({},e,{total_no:e.total_no-1}):Object(A.a)({},e)})});case"FIND_FALCONE":return Object(A.a)({},e,{findFalconeResult:t.payload});default:return e}},timeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SEARCH_TIME":return{totalSearchTime:t.payload};default:return e}},errorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return Object(A.a)({},e,{isErrorbarOpen:!!t.payload,errorText:t.payload});default:return e}}}),L=Object(y.a)(F.a),M="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:y.d,B=Object(y.e)(H,{},M(L)),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,{store:B},c.a.createElement(d.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(v,null),c.a.createElement(p.a,{exact:!0,path:"/",component:w}),c.a.createElement(p.a,{exact:!0,path:"/report",component:P}))))}}]),t}(a.Component);l.a.render(c.a.createElement(G,null),document.getElementById("root"))}},[[198,2,1]]]);
//# sourceMappingURL=main.9c8b51af.chunk.js.map