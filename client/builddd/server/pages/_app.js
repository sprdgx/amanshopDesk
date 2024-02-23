(()=>{var t={};t.id=888,t.ids=[888],t.modules={3900:(t,e,r)=>{"use strict";r.a(t,async(t,i)=>{try{r.r(e),r.d(e,{default:()=>d});var s=r(997),a=r(6022),u=r(1106);r(108);var c=t([u]);function d({Component:t,pageProps:e}){return s.jsx(a.Provider,{store:u.h,children:s.jsx(t,{...e})})}u=(c.then?(await c)():c)[0],i()}catch(t){i(t)}})},7405:(t,e,r)=>{"use strict";r.d(e,{BF:()=>u,ZP:()=>o,gK:()=>s,nl:()=>c,rk:()=>d});let i=(0,r(5184).createSlice)({name:"cart",initialState:{products:[],total:0,quantity:0},reducers:{addProduct:(t,e)=>{t.products.push(e.payload),t.total+=e.payload.price*e.payload.quantity,t.quantity+=1},removeProduct:(t,e)=>{let r=e.payload;t.products=t.products.filter(t=>t._id!==r),t.total=t.products.reduce((t,e)=>t+e.price*e.quantity,0),t.quantity=t.products.reduce((t,e)=>t+e.quantity,0)},orderPlaced:t=>{t.products=[],t.quantity=0,t.total=0},increaseProductQuantity:(t,e)=>{let r=e.payload.id,i=t.products.find(t=>t._id===r);i&&(i.quantity+=1,t.total+=i.price)},decreaseProductQuantity:(t,e)=>{let{id:r}=e.payload,i=t.products.find(t=>t._id===r);if(i&&i.quantity>1)i.quantity-=1,t.total-=i.price;else if(i&&1===i.quantity){let e=t.products.findIndex(t=>t._id===r);-1!==e&&(t.total-=i.price*i.quantity,t.quantity-=1,t.products.splice(e,1))}}}}),{addProduct:s,removeProduct:a,increaseProductQuantity:u,decreaseProductQuantity:c,orderPlaced:d}=i.actions,o=i.reducer},1106:(t,e,r)=>{"use strict";r.a(t,async(t,i)=>{try{r.d(e,{h:()=>x});var s=r(9871),a=r(5184),u=r(7405),c=r(6281),d=r(4161),o=r(8936),n=r.n(o),l=t([s]);s=(l.then?(await l)():l)[0];let p={key:"root",version:1,storage:n()},y=(0,s.combineReducers)({user:c.ZP,cart:u.ZP}),q=(0,d.persistReducer)(p,y),x=(0,a.configureStore)({reducer:q,middleware:(0,a.getDefaultMiddleware)({serializableCheck:{ignoredActions:[d.FLUSH,d.REHYDRATE,d.PAUSE,d.PERSIST,d.PURGE,d.REGISTER]}})});(0,d.persistStore)(x),i()}catch(t){i(t)}})},6281:(t,e,r)=>{"use strict";r.d(e,{ZP:()=>d});let i=(0,r(5184).createSlice)({name:"user",initialState:{currentUser:null,isFetching:!1,error:!1},reducers:{loginStart:t=>{t.isFetching=!0},loginSuccess:(t,e)=>{t.isFetching=!1,t.currentUser=e.payload},loginFailure:t=>{t.isFetching=!1,t.error=!0},registerSuccess:(t,e)=>{t.isFetching=!1,t.currentUser=e.payload}}}),{loginStart:s,loginSuccess:a,loginFailure:u,registerSuccess:c}=i.actions,d=i.reducer},108:()=>{},5184:t=>{"use strict";t.exports=require("@reduxjs/toolkit")},6022:t=>{"use strict";t.exports=require("react-redux")},997:t=>{"use strict";t.exports=require("react/jsx-runtime")},4161:t=>{"use strict";t.exports=require("redux-persist")},8936:t=>{"use strict";t.exports=require("redux-persist/lib/storage")},9871:t=>{"use strict";t.exports=import("redux")}};var e=require("../webpack-runtime.js");e.C(t);var r=e(e.s=3900);module.exports=r})();