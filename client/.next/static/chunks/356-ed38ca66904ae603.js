(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{1538:function(e,t,a){"use strict";var r=a(5893);a(7294);var s=a(802),c=a(4020),n=a(891),i=a(1145),o=a(9308),l=a(7133),d=a.n(l);t.Z=()=>(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsxs)("div",{className:d().left,children:[(0,r.jsx)("h3",{className:d().title,children:"Contact"}),(0,r.jsxs)("div",{className:d().contactItem,children:[(0,r.jsx)(o.Z,{style:{marginRight:"10px"}}),(0,r.jsx)("span",{children:"24 Rue des Mandarines groupe des propri\xe9t\xe9s 243 Tamaris Mohammadia Alger"})]}),(0,r.jsxs)("div",{className:d().contactItem,children:[(0,r.jsx)(i.Z,{style:{marginRight:"10px"}})," ",(0,r.jsx)("span",{children:"0554628035 / 0550675280"})]}),(0,r.jsxs)("div",{className:d().contactItem,children:[(0,r.jsx)(n.Z,{style:{marginRight:"10px"}})," ",(0,r.jsx)("span",{children:"aman@ammanshopdz.com"})]})]}),(0,r.jsx)("div",{className:d().right,children:(0,r.jsxs)("div",{className:d().socialContainer,children:[(0,r.jsx)("a",{href:"https://www.facebook.com/profile.php?id=61555665560838&mibextid=LQQJ4d",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("div",{className:"".concat(d().socialIcon," ").concat(d().facebook),children:(0,r.jsx)(s.Z,{})})}),(0,r.jsx)("a",{href:"https://www.instagram.com/aman.shop.dz/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("div",{className:"".concat(d().socialIcon," ").concat(d().instagram),children:(0,r.jsx)(c.Z,{})})})]})})]})},8847:function(e,t,a){"use strict";var r=a(5893),s=a(9473),c=a(1664),n=a.n(c),i=a(6624),o=a(4948),l=a(3946),d=a(326),h=a(7294),u=a(685),_=a.n(u),m=a(5675),p=a.n(m),x=a(5436);t.Z=()=>{let e=(0,s.v9)(e=>e.cart.quantity),[t,a]=(0,h.useState)(!1),c=()=>{a(!t)};return(0,r.jsx)("div",{className:_().container,children:(0,r.jsxs)("div",{className:_().wrapper,children:[(0,r.jsxs)("div",{className:_().left,children:[(0,r.jsx)(l.Z,{className:_().menuButton,color:"inherit","aria-label":"open drawer",onClick:c,edge:"start",children:(0,r.jsx)(d.Z,{style:{color:"teal",height:"40px",width:"40px"}})}),(0,r.jsx)(x.Z,{isOpen:t,onClose:c})]}),(0,r.jsx)("div",{className:_().center,children:(0,r.jsx)(n(),{href:"/",passHref:!0,children:(0,r.jsx)(p(),{src:"https://github.com/sprdgx/ammanshop-pictures/blob/main/MNlogo.png?raw=true",width:90,height:60,alt:"",className:_().image})})}),(0,r.jsx)("div",{className:_().right,children:(0,r.jsx)(n(),{href:"/cart",passHref:!0,children:(0,r.jsx)("div",{className:_().menuItem,children:(0,r.jsx)(o.Z,{badgeContent:e,color:"primary",children:(0,r.jsx)(i.Z,{style:{color:"teal",height:"40px",width:"40px"}})})})})})]})})}},8174:function(e,t,a){"use strict";a.d(t,{Z:function(){return w}});var r=a(5893),s=a(7294),c=a(5121),n=a(6339),i=a(3350),o=a.n(i),l=a(1664),d=a.n(l),h=a(2069),u=a.n(h),_=a(5675),m=a.n(_),p=e=>{let{item:t}=e;return(0,r.jsx)("div",{className:u().container,children:(0,r.jsxs)(d(),{href:"/".concat(t._id),children:[(0,r.jsx)(m(),{src:t.img,alt:"Product Image",className:u().image,width:335,height:335}),(0,r.jsxs)("div",{className:u().info,children:[(0,r.jsx)("h1",{className:u().infoT,children:t.title}),(0,r.jsxs)("h1",{className:u().infoP,children:["Prix: ",t.price," DA"]})]})]})})},x=a(6080),g=a.n(x),j=e=>{let{searchValue:t,onClose:a}=e,[i,o]=(0,s.useState)([]),[l,d]=(0,s.useState)(!1),[h,u]=(0,s.useState)(null);return(0,s.useEffect)(()=>{t&&(d(!0),u(null),c.Z.get("".concat(n._,"products/search/").concat(t)).then(e=>{o(e.data),d(!1)}).catch(e=>{console.error("Error fetching search results:",e),u("Failed to fetch search results. Please try again later."),d(!1)}))},[t]),(0,r.jsx)("div",{className:g().overlay,onClick:a,style:{background:"linear-gradient(to top, teal, gray)"},children:(0,r.jsxs)("div",{className:g().popup,onClick:e=>e.stopPropagation(),children:[(0,r.jsx)("button",{className:g().closeButton,onClick:a,children:"\xd7"}),(0,r.jsxs)("h2",{children:["Search Results for: ",t]}),l&&(0,r.jsx)("div",{children:"Loading..."}),h&&(0,r.jsxs)("div",{children:["Error: ",h]}),(0,r.jsx)("div",{className:g().productList,children:i.length>0?i.map(e=>(0,r.jsx)("div",{className:g().product,children:(0,r.jsx)(p,{item:e})},e._id)):(0,r.jsx)("div",{children:"No products found"})})]})})},f=a(9813),v=a(5436),N=a(3946),b=a(326),P=a(1163),S=a(6624),w=e=>{let{sort:t}=e,[a,i]=(0,s.useState)([]),[l,d]=(0,s.useState)([]),[h,u]=(0,s.useState)(""),[_,m]=(0,s.useState)(!1),[x,g]=(0,s.useState)(!1),[w,y]=(0,s.useState)(!1),[I,Z]=(0,s.useState)(null),{categories:C}=(0,P.useRouter)().query;(0,s.useEffect)(()=>{(async()=>{y(!0),Z(null);try{let e="".concat(n._,"products");C&&(e="".concat(n._,"products/category/").concat(C));let t=await c.Z.get(e);i(t.data),y(!1)}catch(e){console.error("Error fetching products:",e),Z("Failed to fetch products. Please try again later."),y(!1)}})()},[C]),(0,s.useEffect)(()=>{"newest"===t?d([...a].sort((e,t)=>e.createdAt-t.createdAt)):"asc"===t?d([...a].sort((e,t)=>e.price-t.price)):d([...a].sort((e,t)=>t.price-e.price))},[t,a]);let k=()=>{g(!x)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:o().searchContainer,children:!C&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:o().left,children:[(0,r.jsx)(N.Z,{className:o().menuButton,color:"inherit","aria-label":"open drawer",onClick:k,edge:"start",children:(0,r.jsx)(b.Z,{style:{color:"teal",height:"65px",width:"65px"}})}),(0,r.jsx)(v.Z,{isOpen:x,onClose:k})]}),(0,r.jsxs)("div",{className:o().search,children:[(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault(),console.log("Searching for:",h)},children:(0,r.jsx)(f.Z,{className:o().searchInput,fullWidth:!0,placeholder:"Vous pouvez taper ici pour rechercher...",variant:"outlined",size:"small",value:h,onChange:e=>{u(e.target.value),m(e.target.value.length>0)},InputProps:{style:{color:"black",backgroundColor:"teal"}}})}),_&&(0,r.jsx)(j,{searchValue:h,onClose:()=>m(!1)})]})]})}),w&&(0,r.jsx)("div",{className:o().Loading,children:(0,r.jsx)(S.Z,{className:"".concat(o()["loading-icon"]," ").concat(o().cartIcon)})}),I&&(0,r.jsxs)("div",{children:["Error: ",I]}),(0,r.jsx)("div",{className:o().container,children:!w&&!I&&(0,r.jsx)(r.Fragment,{children:C?l.map(e=>(0,r.jsx)(p,{item:e},e.id)):a.slice(0,8).map(e=>(0,r.jsx)(p,{item:e},e.id))})})]})}},5436:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(5893),s=a(1972),c=a.n(s),n=a(7294),i=a(5675),o=a.n(i),l=a(1664),d=a.n(l),h=e=>{let{item:t}=e;return(0,r.jsx)("div",{className:c().imageWrapper,children:(0,r.jsx)(d(),{href:"/categories/".concat(t.cat),passHref:!0,children:(0,r.jsx)(o(),{src:t.img,alt:"",width:350,height:150,className:c().imgitem})})})},u=a(6339),_=()=>{let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{a()},[]);let a=async()=>{try{let e=await u.g.get("/categories/");t(e.data)}catch(e){console.error("Error fetching categories:",e)}};return(0,r.jsx)("div",{children:e.map(e=>(0,r.jsx)(h,{item:e},e._id))})},m=e=>{let{isOpen:t,onClose:a}=e;return(0,r.jsxs)("div",{className:"".concat(c().sidebar," ").concat(t?c().open:""),style:{background:"linear-gradient(to top, teal, white)"},children:[(0,r.jsx)("button",{className:c().closeButton,onClick:a,children:"\xd7"}),(0,r.jsx)("ul",{className:c().imageList,children:(0,r.jsx)("li",{className:c().imageItem,children:(0,r.jsx)(_,{})})})]})}},6339:function(e,t,a){"use strict";a.d(t,{_:function(){return s},g:function(){return c}});var r=a(5121);let s="http://localhost:5000/api/",c=r.Z.create({baseURL:s})},7133:function(e){e.exports={container:"Footer_container__YfQ4y",left:"Footer_left__CJoW0",socialContainer:"Footer_socialContainer__Z1bHQ",socialIcon:"Footer_socialIcon__ldgz1",facebook:"Footer_facebook__1NM5T",instagram:"Footer_instagram__C9ShX",title:"Footer_title___58cJ",right:"Footer_right__TaXDo",contactItem:"Footer_contactItem__lfruD"}},685:function(e){e.exports={container:"Navbar_container__V58TY",wrapper:"Navbar_wrapper__QmmpL",left:"Navbar_left__VuZ70",center:"Navbar_center__3FQ_o",right:"Navbar_right__hREN_",menuItem:"Navbar_menuItem__Nppw3",image:"Navbar_image__d349I"}},2069:function(e){e.exports={container:"Product_container__B4IDl",image:"Product_image__PPpiM",info:"Product_info__iAZ2l",infoT:"Product_infoT__qduUQ",infoP:"Product_infoP__3sm__"}},3350:function(e){e.exports={container:"Products_container___FY3P",searchContainer:"Products_searchContainer__IpVRB",search:"Products_search__nOLWf",left:"Products_left__WgtjQ",menuButton:"Products_menuButton__A0qGd","loading-icon":"Products_loading-icon__v2kKS",rotate:"Products_rotate__yqMQg"}},6080:function(e){e.exports={overlay:"SearchPopup_overlay__aIMtp",popup:"SearchPopup_popup__2cSTP",fadeInUp:"SearchPopup_fadeInUp__DDhTd",productList:"SearchPopup_productList__xRW9D"}},1972:function(e){e.exports={sidebar:"Sidebar_sidebar__oTTpu",open:"Sidebar_open__0s4q8",closeButton:"Sidebar_closeButton__zo0gX",imageList:"Sidebar_imageList__qzGLR",imageItem:"Sidebar_imageItem__Jq_un",imgitem:"Sidebar_imgitem__HfFfn",imageWrapper:"Sidebar_imageWrapper__wu3go"}}}]);