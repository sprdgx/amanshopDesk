exports.id=543,exports.ids=[543],exports.modules={2071:e=>{e.exports={container:"Footer_container__YfQ4y",left:"Footer_left__CJoW0",socialContainer:"Footer_socialContainer__Z1bHQ",socialIcon:"Footer_socialIcon__ldgz1",facebook:"Footer_facebook__1NM5T",instagram:"Footer_instagram__C9ShX",title:"Footer_title___58cJ",right:"Footer_right__TaXDo",contactItem:"Footer_contactItem__lfruD"}},7400:e=>{e.exports={container:"Navbar_container__V58TY",wrapper:"Navbar_wrapper__QmmpL",left:"Navbar_left__VuZ70",center:"Navbar_center__3FQ_o",right:"Navbar_right__hREN_",menuItem:"Navbar_menuItem__Nppw3",image:"Navbar_image__d349I"}},7224:e=>{e.exports={container:"Product_container__B4IDl",image:"Product_image__PPpiM",info:"Product_info__iAZ2l",infoT:"Product_infoT__qduUQ",infoP:"Product_infoP__3sm__"}},5237:e=>{e.exports={container:"Products_container___FY3P",searchContainer:"Products_searchContainer__IpVRB",search:"Products_search__nOLWf",left:"Products_left__WgtjQ",menuButton:"Products_menuButton__A0qGd","loading-icon":"Products_loading-icon__v2kKS",rotate:"Products_rotate__yqMQg"}},2540:e=>{e.exports={overlay:"SearchPopup_overlay__aIMtp",popup:"SearchPopup_popup__2cSTP",fadeInUp:"SearchPopup_fadeInUp__DDhTd",productList:"SearchPopup_productList__xRW9D"}},1744:e=>{e.exports={sidebar:"Sidebar_sidebar__oTTpu",open:"Sidebar_open__0s4q8",closeButton:"Sidebar_closeButton__zo0gX",imageList:"Sidebar_imageList__qzGLR",imageItem:"Sidebar_imageItem__Jq_un",imgitem:"Sidebar_imgitem__HfFfn",imageWrapper:"Sidebar_imageWrapper__wu3go"}},8442:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>l});var s=a(997),i=a(6689),c=a(8664),n=a(6339),o=e([n]);n=(o.then?(await o)():o)[0];let l=()=>{let[e,t]=(0,i.useState)([]);(0,i.useEffect)(()=>{a()},[]);let a=async()=>{try{let e=await n.g.get("/categories/");t(e.data)}catch(e){console.error("Error fetching categories:",e)}};return s.jsx("div",{children:e.map(e=>s.jsx(c.Z,{item:e},e._id))})};r()}catch(e){r(e)}})},8664:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(997),s=a(5675),i=a.n(s),c=a(1664),n=a.n(c),o=a(1744),l=a.n(o);let d=({item:e})=>r.jsx("div",{className:l().imageWrapper,children:r.jsx(n(),{href:`/categories/${e.cat}`,passHref:!0,children:r.jsx(i(),{src:e.img,alt:"",width:350,height:150,className:l().imgitem})})})},1538:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var r=a(997);a(6689);var s=a(7666),i=a.n(s),c=a(3281),n=a.n(c),o=a(9226),l=a.n(o),d=a(6872),u=a.n(d),h=a(2625),p=a.n(h),_=a(2071),m=a.n(_);let g=()=>(0,r.jsxs)("div",{className:m().container,children:[(0,r.jsxs)("div",{className:m().left,children:[r.jsx("h3",{className:m().title,children:"Contact"}),(0,r.jsxs)("div",{className:m().contactItem,children:[r.jsx(p(),{style:{marginRight:"10px"}}),r.jsx("span",{children:"24 Rue des Mandarines groupe des propri\xe9t\xe9s 243 Tamaris Mohammadia Alger"})]}),(0,r.jsxs)("div",{className:m().contactItem,children:[r.jsx(u(),{style:{marginRight:"10px"}})," ",r.jsx("span",{children:"0554628035 / 0550675280"})]}),(0,r.jsxs)("div",{className:m().contactItem,children:[r.jsx(l(),{style:{marginRight:"10px"}})," ",r.jsx("span",{children:"aman@ammanshopdz.com"})]})]}),r.jsx("div",{className:m().right,children:(0,r.jsxs)("div",{className:m().socialContainer,children:[r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61555665560838&mibextid=LQQJ4d",target:"_blank",rel:"noopener noreferrer",children:r.jsx("div",{className:`${m().socialIcon} ${m().facebook}`,children:r.jsx(i(),{})})}),r.jsx("a",{href:"https://www.instagram.com/aman.shop.dz/",target:"_blank",rel:"noopener noreferrer",children:r.jsx("div",{className:`${m().socialIcon} ${m().instagram}`,children:r.jsx(n(),{})})})]})})]})},8847:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>S});var s=a(997),i=a(6022),c=a(1664),n=a.n(c),o=a(2749),l=a.n(o),d=a(5168),u=a.n(d),h=a(7934),p=a.n(h),_=a(3365),m=a.n(_),g=a(6689),x=a(7400),j=a.n(x),f=a(5675),v=a.n(f),y=a(3941),N=e([y]);y=(N.then?(await N)():N)[0];let S=()=>{let e=(0,i.useSelector)(e=>e.cart.quantity),[t,a]=(0,g.useState)(!1),r=()=>{a(!t)};return s.jsx("div",{className:j().container,children:(0,s.jsxs)("div",{className:j().wrapper,children:[(0,s.jsxs)("div",{className:j().left,children:[s.jsx(p(),{className:j().menuButton,color:"inherit","aria-label":"open drawer",onClick:r,edge:"start",children:s.jsx(m(),{style:{color:"teal",height:"40px",width:"40px"}})}),s.jsx(y.Z,{isOpen:t,onClose:r})]}),s.jsx("div",{className:j().center,children:s.jsx(n(),{href:"/",passHref:!0,children:s.jsx(v(),{src:"https://github.com/sprdgx/ammanshop-pictures/blob/main/MNlogo.png?raw=true",width:90,height:60,alt:"",className:j().image})})}),s.jsx("div",{className:j().right,children:s.jsx(n(),{href:"/cart",passHref:!0,children:s.jsx("div",{className:j().menuItem,children:s.jsx(u(),{badgeContent:e,color:"primary",children:s.jsx(l(),{style:{color:"teal",height:"40px",width:"40px"}})})})})})]})})};r()}catch(e){r(e)}})},2376:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(997);a(6689);var s=a(1664),i=a.n(s),c=a(7224),n=a.n(c),o=a(5675),l=a.n(o);let d=({item:e})=>r.jsx("div",{className:n().container,children:(0,r.jsxs)(i(),{href:`/${e._id}`,children:[r.jsx(l(),{src:e.img,alt:"Product Image",className:n().image,width:335,height:335}),(0,r.jsxs)("div",{className:n().info,children:[r.jsx("h1",{className:n().infoT,children:e.title}),(0,r.jsxs)("h1",{className:n().infoP,children:["Prix: ",e.price," DA"]})]})]})})},8089:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>S});var s=a(997),i=a(6689),c=a(9648),n=a(6339),o=a(5237),l=a.n(o),d=a(2376),u=a(9379),h=a(6042),p=a.n(h),_=a(3941),m=a(7934),g=a.n(m),x=a(3365),j=a.n(x),f=a(1163),v=a(2749),y=a.n(v),N=e([c,n,u,_]);[c,n,u,_]=N.then?(await N)():N;let S=({sort:e})=>{let[t,a]=(0,i.useState)([]),[r,o]=(0,i.useState)([]),[h,m]=(0,i.useState)(""),[x,v]=(0,i.useState)(!1),[N,S]=(0,i.useState)(!1),[b,P]=(0,i.useState)(!1),[w,I]=(0,i.useState)(null),{categories:F}=(0,f.useRouter)().query;(0,i.useEffect)(()=>{(async()=>{P(!0),I(null);try{let e=`${n._}products`;F&&(e=`${n._}products/category/${F}`);let t=await c.default.get(e);a(t.data),P(!1)}catch(e){console.error("Error fetching products:",e),I("Failed to fetch products. Please try again later."),P(!1)}})()},[F]),(0,i.useEffect)(()=>{"newest"===e?o([...t].sort((e,t)=>e.createdAt-t.createdAt)):"asc"===e?o([...t].sort((e,t)=>e.price-t.price)):o([...t].sort((e,t)=>t.price-e.price))},[e,t]);let Z=()=>{S(!N)};return(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:l().searchContainer,children:!F&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:l().left,children:[s.jsx(g(),{className:l().menuButton,color:"inherit","aria-label":"open drawer",onClick:Z,edge:"start",children:s.jsx(j(),{style:{color:"teal",height:"65px",width:"65px"}})}),s.jsx(_.Z,{isOpen:N,onClose:Z})]}),(0,s.jsxs)("div",{className:l().search,children:[s.jsx("form",{onSubmit:e=>{e.preventDefault(),console.log("Searching for:",h)},children:s.jsx(p(),{className:l().searchInput,fullWidth:!0,placeholder:"Vous pouvez taper ici pour rechercher...",variant:"outlined",size:"small",value:h,onChange:e=>{m(e.target.value),v(e.target.value.length>0)},InputProps:{style:{color:"black",backgroundColor:"teal"}}})}),x&&s.jsx(u.Z,{searchValue:h,onClose:()=>v(!1)})]})]})}),b&&s.jsx("div",{className:l().Loading,children:s.jsx(y(),{className:`${l()["loading-icon"]} ${l().cartIcon}`})}),w&&(0,s.jsxs)("div",{children:["Error: ",w]}),s.jsx("div",{className:l().container,children:!b&&!w&&s.jsx(s.Fragment,{children:F?r.map(e=>s.jsx(d.Z,{item:e},e.id)):t.slice(0,8).map(e=>s.jsx(d.Z,{item:e},e.id))})})]})};r()}catch(e){r(e)}})},9379:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>h});var s=a(997),i=a(6689),c=a(2540),n=a.n(c),o=a(9648),l=a(6339),d=a(2376),u=e([o,l]);[o,l]=u.then?(await u)():u;let h=({searchValue:e,onClose:t})=>{let[a,r]=(0,i.useState)([]),[c,u]=(0,i.useState)(!1),[h,p]=(0,i.useState)(null);return(0,i.useEffect)(()=>{e&&(u(!0),p(null),o.default.get(`${l._}products/search/${e}`).then(e=>{r(e.data),u(!1)}).catch(e=>{console.error("Error fetching search results:",e),p("Failed to fetch search results. Please try again later."),u(!1)}))},[e]),s.jsx("div",{className:n().overlay,onClick:t,style:{background:"linear-gradient(to top, teal, gray)"},children:(0,s.jsxs)("div",{className:n().popup,onClick:e=>e.stopPropagation(),children:[s.jsx("button",{className:n().closeButton,onClick:t,children:"\xd7"}),(0,s.jsxs)("h2",{children:["Search Results for: ",e]}),c&&s.jsx("div",{children:"Loading..."}),h&&(0,s.jsxs)("div",{children:["Error: ",h]}),s.jsx("div",{className:n().productList,children:a.length>0?a.map(e=>s.jsx("div",{className:n().product,children:s.jsx(d.Z,{item:e})},e._id)):s.jsx("div",{children:"No products found"})})]})})};r()}catch(e){r(e)}})},3941:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{Z:()=>l});var s=a(997),i=a(1744),c=a.n(i),n=a(8442),o=e([n]);n=(o.then?(await o)():o)[0];let l=({isOpen:e,onClose:t})=>(0,s.jsxs)("div",{className:`${c().sidebar} ${e?c().open:""}`,style:{background:"linear-gradient(to top, teal, white)"},children:[s.jsx("button",{className:c().closeButton,onClick:t,children:"\xd7"}),s.jsx("ul",{className:c().imageList,children:s.jsx("li",{className:c().imageItem,children:s.jsx(n.Z,{})})})]});r()}catch(e){r(e)}})},3900:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.r(t),a.d(t,{default:()=>o});var s=a(997),i=a(6022),c=a(1106);a(108);var n=e([c]);function o({Component:e,pageProps:t}){return s.jsx(i.Provider,{store:c.h,children:s.jsx(e,{...t})})}c=(n.then?(await n)():n)[0],r()}catch(e){r(e)}})},4684:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(997),s=a(6859);function i(){return(0,r.jsxs)(s.Html,{lang:"en",children:[r.jsx(s.Head,{}),(0,r.jsxs)("body",{children:[r.jsx(s.Main,{}),r.jsx(s.NextScript,{})]})]})}},7405:(e,t,a)=>{"use strict";a.d(t,{BF:()=>c,ZP:()=>l,gK:()=>s,nl:()=>n,rk:()=>o});let r=(0,a(5184).createSlice)({name:"cart",initialState:{products:[],total:0,quantity:0},reducers:{addProduct:(e,t)=>{e.products.push(t.payload),e.total+=t.payload.price*t.payload.quantity,e.quantity+=1},removeProduct:(e,t)=>{let a=t.payload;e.products=e.products.filter(e=>e._id!==a),e.total=e.products.reduce((e,t)=>e+t.price*t.quantity,0),e.quantity=e.products.reduce((e,t)=>e+t.quantity,0)},orderPlaced:e=>{e.products=[],e.quantity=0,e.total=0},increaseProductQuantity:(e,t)=>{let a=t.payload.id,r=e.products.find(e=>e._id===a);r&&(r.quantity+=1,e.total+=r.price)},decreaseProductQuantity:(e,t)=>{let{id:a}=t.payload,r=e.products.find(e=>e._id===a);if(r&&r.quantity>1)r.quantity-=1,e.total-=r.price;else if(r&&1===r.quantity){let t=e.products.findIndex(e=>e._id===a);-1!==t&&(e.total-=r.price*r.quantity,e.quantity-=1,e.products.splice(t,1))}}}}),{addProduct:s,removeProduct:i,increaseProductQuantity:c,decreaseProductQuantity:n,orderPlaced:o}=r.actions,l=r.reducer},1106:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{h:()=>m});var s=a(9871),i=a(5184),c=a(7405),n=a(6281),o=a(4161),l=a(8936),d=a.n(l),u=e([s]);s=(u.then?(await u)():u)[0];let h={key:"root",version:1,storage:d()},p=(0,s.combineReducers)({user:n.ZP,cart:c.ZP}),_=(0,o.persistReducer)(h,p),m=(0,i.configureStore)({reducer:_,middleware:(0,i.getDefaultMiddleware)({serializableCheck:{ignoredActions:[o.FLUSH,o.REHYDRATE,o.PAUSE,o.PERSIST,o.PURGE,o.REGISTER]}})});(0,o.persistStore)(m),r()}catch(e){r(e)}})},6281:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>o});let r=(0,a(5184).createSlice)({name:"user",initialState:{currentUser:null,isFetching:!1,error:!1},reducers:{loginStart:e=>{e.isFetching=!0},loginSuccess:(e,t)=>{e.isFetching=!1,e.currentUser=t.payload},loginFailure:e=>{e.isFetching=!1,e.error=!0},registerSuccess:(e,t)=>{e.isFetching=!1,e.currentUser=t.payload}}}),{loginStart:s,loginSuccess:i,loginFailure:c,registerSuccess:n}=r.actions,o=r.reducer},6339:(e,t,a)=>{"use strict";a.a(e,async(e,r)=>{try{a.d(t,{_:()=>c,g:()=>n});var s=a(9648),i=e([s]);s=(i.then?(await i)():i)[0];let c="http://localhost:5000/api/",n=s.default.create({baseURL:c});r()}catch(e){r(e)}})},108:()=>{}};