(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e){e.exports=[{id:"5c5e94edfa87475c9c7433f0",name:"iMac 27 Retina",image:"https://i.imgur.com/s7zey8T.jpg",manufacture:"Apple",amount:"2099.99",category:"desktop",featured:!0},{id:"5c5e94eddb3b43421561cd1a",name:"Surface Studio",image:"https://i.imgur.com/CCanSEL.jpg",manufacture:"Microsoft",amount:"3749.99",category:"desktop",featured:!1},{id:"5c5e94edd28c711337302817",name:"Dell Inspion 23",image:"https://i.imgur.com/qQx2zmv.jpg",manufacture:"Dell",amount:"1899.99",category:"desktop",featured:!0},{id:"5c5e94ed2b2975200c75d16d",name:"Lenovo IdeaCenter",image:"https://i.imgur.com/7Zp9oiW.jpg",manufacture:"Lenovo",amount:"2499.99",category:"desktop",featured:!0},{id:"5c5e94ed2a5b84772cafa6a6",name:"Mi Pad 2",image:"https://i.imgur.com/uROXKvy.jpg",manufacture:"Xiaomi",amount:"899.99",category:"tablet",featured:!1},{id:"5c5e94edd128902db221ebcd",name:"Apple iPad Air",image:"https://i.imgur.com/9bliZbf.jpg",manufacture:"Apple",amount:"1299.99",category:"tablet",featured:!1},{id:"5c5e94edaca115996d9bcf1f",name:"Asus Transformer",image:"https://i.imgur.com/f6vLn7N.jpg",manufacture:"Asus",amount:"1149.99",category:"tablet",featured:!0},{id:"5c5e94eda99dbca4e20d37e7",name:"iPad Mini",image:"https://i.imgur.com/NUsqPRC.jpg",manufacture:"Apple",amount:"699.99",category:"tablet",featured:!0},{id:"5c5e94ed1810a470928a294b",name:"Dell Vostro 3455",image:"https://i.imgur.com/4aplzsb.jpg",manufacture:"Dell",amount:"2499.99",category:"desktop",featured:!0},{id:"5c5e94edb9ca8ca175eea230",name:"Lenovo AIO 520",image:"https://i.imgur.com/rfyjMEY.jpg",manufacture:"Lenovo",amount:"2599.99",category:"desktop",featured:!1},{id:"5c5e94edc60727170b4fd86a",name:"Mac mini",image:"https://i.imgur.com/6kvyk4J.jpg",manufacture:"Apple",amount:"2199.99",category:"desktop",featured:!1},{id:"5c5e94eda6a3d1cb9a0d5f58",name:"Asus VivoMini",image:"https://i.imgur.com/lVjRNUx.jpg",manufacture:"Asus",amount:"1499.99",category:"desktop",featured:!1},{id:"5c5e94ed6c057f83f991a1e0",name:"Intel NUC",image:"https://i.imgur.com/6kg58c9.jpg",manufacture:"Intel",amount:"899.99",category:"desktop",featured:!1},{id:"5c5e94eda3068277e72e1eba",name:"Galaxy Tab S4",image:"https://i.imgur.com/iciYcmv.jpg",manufacture:"Samsung",amount:"1299.99",category:"tablet",featured:!0},{id:"5c5e94ed65021259bed07a6a",name:"Asus Transformers 2",image:"https://i.imgur.com/9stIz7E.jpg",manufacture:"Asus",amount:"1499.99",category:"tablet",featured:!0},{id:"5c5e94ed939720ae8f3a7af5",name:"Apple new iMac",image:"https://i.imgur.com/RtjlreF.jpg",manufacture:"Apple",amount:"3999.99",category:"desktop",featured:!1}]},19:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),u=a.n(c),i=(a(25),a(5)),l=a(6),o=a(9),s=a(7),m=a(8),d=a(35),p=a(36),f=a(34),g=function(e){return r.a.createElement("div",{className:"container"},e.children)},h=a(37),v=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement(g,null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(h.a,{to:"/shop",activeClassName:"is-active",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/catalog",activeClassName:"is-active",exact:!0},"Catalog")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/about",activeClassName:"is-active"},"About")))))},b=function(e){var t=e.children;return r.a.createElement("p",null,t)},E=function(){return r.a.createElement("footer",null,r.a.createElement(g,null,r.a.createElement(b,null,"Shop \xa9 2020",r.a.createElement("br",null)," Designed by Andrzej")))},j=function(e){return r.a.createElement("h1",{className:"header-big"},e.text)},y=function(e){var t=e.image,a=e.name,n=e.amount;return r.a.createElement("div",{className:"product"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("p",{className:"price"},n),r.a.createElement("h3",null,a))},k=a(13),C=a(14),O=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getProducts",value:function(){return C}},{key:"getProductByCategory",value:function(e){return C.filter(function(t){return t.category===e&&!0===t.featured})}},{key:"getManufactures",value:function(){return Object(k.a)(new Set(C.map(function(e){return e.manufacture}).sort()))}}]),e}(),S=function(e){return r.a.createElement("h2",{className:"header-small"},e.text)},A=function(e){return r.a.createElement("div",{className:"products"},e.children)},N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={products:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=O.getProductByCategory(this.props.category);this.setState({products:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,{text:this.props.heading}),r.a.createElement(A,null,this.state.products.map(function(e){return r.a.createElement(y,Object.assign({key:e.id},e))})))}}]),t}(n.Component),M=function(){return r.a.createElement("div",null,r.a.createElement(j,{text:"WELCOME TO OUR STORE"}),r.a.createElement(N,{heading:"desktops",category:"desktop"}),r.a.createElement(N,{heading:"tablets",category:"tablet"}))},w=a(10),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={products:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=O.getProducts();this.setState({products:e})}},{key:"render",value:function(){return r.a.createElement(A,null,this.products.map(function(e){return r.a.createElement(y,Object.assign({key:e.id},e))}))}},{key:"products",get:function(){var e=this.props,t=e.manufacture,a=e.search;return t||a?this.state.products.filter(function(e){return e.manufacture.toLowerCase().includes(t.toLowerCase())&&e.name.toLowerCase().includes(a.toLowerCase())}):this.state.products}}]),t}(r.a.Component),q=function(e){var t=e.item,a=e.onChange,n=e.checked;return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"manufacturere",id:t,value:t,checked:n,onChange:a}),r.a.createElement("label",{htmlFor:t},t))},L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleSearchInput=function(e){a.setState({inputSearch:e.target.value}),console.log({inputSearch:e.target.value})},a.state={inputSearch:"",selected:"All",manufactures:[]},a.handleManufactureChange=a.handleManufactureChange.bind(Object(w.a)(Object(w.a)(a))),a.handleClearFilters=a.handleClearFilters.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=O.getManufactures();this.setState({manufactures:e})}},{key:"handleClearFilters",value:function(){this.setState({inputSearch:"",selected:"All"})}},{key:"handleManufactureChange",value:function(e){var t=this;return function(){return t.setState({selected:e})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.selected,n=t.inputSearch,c="All"===a?"":a;return r.a.createElement("div",null,r.a.createElement(j,{text:"Catalog"}),r.a.createElement("div",{className:"catalog"},r.a.createElement("div",{className:"column-left"},r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter-header"},r.a.createElement("h4",null,"Search"),r.a.createElement("a",{href:"#",className:"clear",onClick:this.handleClearFilters},"Clear")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"search...",value:n,onChange:this.handleSearchInput})),r.a.createElement("h4",null,"Manufacturer"),r.a.createElement("div",null,this.manufactures.map(function(t){return r.a.createElement(q,{key:t,item:t,checked:t===a,onChange:e.handleManufactureChange(t)})})))),r.a.createElement("div",{className:"column-right"},r.a.createElement(A,null,r.a.createElement(x,{manufacture:c,search:n})))))}},{key:"manufactures",get:function(){return["All"].concat(Object(k.a)(this.state.manufactures))}}]),t}(n.Component),D=function(){return r.a.createElement("div",null,r.a.createElement(j,{text:"About"}),r.a.createElement(b,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque odio pharetra, rhoncus velit eget, feugiat magna. Integer ac augue aliquam, tempor diam nec, pulvinar velit. Pellentesque et sem a diam fringilla egestas nec vel metus. Etiam ac convallis leo. Vivamus vitae volutpat nisl, mollis hendrerit libero. Vivamus sed lobortis ligula. Suspendisse a nisi erat. Donec mi ante, condimentum nec efficitur non, egestas et lorem. Duis at urna ut mauris fringilla dignissim at in odio. Ut consectetur purus et maximus aliquam. Sed consectetur diam quis accumsan condimentum. Proin porta condimentum velit quis convallis."),r.a.createElement(b,null,"Donec mauris tellus, lobortis id dignissim id, luctus ut purus. Etiam rutrum nibh consectetur purus tincidunt scelerisque. Etiam faucibus volutpat lectus, quis blandit diam consectetur ac. In hac habitasse platea dictumst. Sed rhoncus mattis condimentum. Vivamus sit amet mi volutpat enim tincidunt fringilla. Etiam porttitor dolor eleifend felis consectetur facilisis. Ut pulvinar sollicitudin erat, nec malesuada nunc scelerisque nec. Aliquam vel dolor diam. Cras efficitur dignissim justo, ac tristique tellus pellentesque pharetra. Quisque pharetra lectus molestie, posuere lectus eget, tempor justo."))},I=(a(31),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(g,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{path:"/shop",component:M,exact:!0}),r.a.createElement(f.a,{path:"/catalog",component:L,exact:!0}),r.a.createElement(f.a,{path:"/about",component:D}))),r.a.createElement(E,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.5eb8cd58.chunk.js.map