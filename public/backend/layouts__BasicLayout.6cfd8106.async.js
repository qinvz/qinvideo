(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{BsfW:function(e,t,n){e.exports={list:"antd-pro-components-notice-icon-notice-list-list",item:"antd-pro-components-notice-icon-notice-list-item",meta:"antd-pro-components-notice-icon-notice-list-meta",avatar:"antd-pro-components-notice-icon-notice-list-avatar",iconElement:"antd-pro-components-notice-icon-notice-list-iconElement",read:"antd-pro-components-notice-icon-notice-list-read",title:"antd-pro-components-notice-icon-notice-list-title",description:"antd-pro-components-notice-icon-notice-list-description",datetime:"antd-pro-components-notice-icon-notice-list-datetime",extra:"antd-pro-components-notice-icon-notice-list-extra",loadMore:"antd-pro-components-notice-icon-notice-list-loadMore",loadedAll:"antd-pro-components-notice-icon-notice-list-loadedAll",notFound:"antd-pro-components-notice-icon-notice-list-notFound",clear:"antd-pro-components-notice-icon-notice-list-clear"}},IGtV:function(e,t,n){e.exports={fixedHeader:"antd-pro-layouts-header-fixedHeader"}},JwhZ:function(e,t,n){e.exports={head:"antd-pro-components-top-nav-header-index-head",light:"antd-pro-components-top-nav-header-index-light",main:"antd-pro-components-top-nav-header-index-main",wide:"antd-pro-components-top-nav-header-index-wide",left:"antd-pro-components-top-nav-header-index-left",right:"antd-pro-components-top-nav-header-index-right",logo:"antd-pro-components-top-nav-header-index-logo",menu:"antd-pro-components-top-nav-header-index-menu"}},MQ68:function(e,t,n){"use strict";n.r(t);n("IzEo");var a,o,r,i=n("bx4M"),l=(n("g9YV"),n("wCAj")),c=(n("14J3"),n("BMrR")),s=(n("jCWc"),n("kPKH")),d=(n("+L6B"),n("2/Rp")),u=(n("/zsF"),n("PArb")),m=(n("Telt"),n("Tckk")),p=(n("2qtc"),n("kLXV")),g=n("p0pE"),h=n.n(g),f=n("2Taf"),y=n.n(f),v=n("vZ4D"),M=n.n(v),b=n("l4Ni"),E=n.n(b),C=n("ujKo"),w=n.n(C),I=n("rlhR"),N=n.n(I),x=n("MhPg"),T=n.n(x),k=(n("5NDa"),n("5rEg")),j=n("q1tI"),D=n.n(j),O=n("MuoO"),S=n("LLXN"),z=n("kvWE"),A=n("ZeOv"),L=k["a"].Search,P=(a=Object(O["connect"])(function(e){var t=e.season,n=e.loading;return{season:t,loading:n.models.season}}),a((r=function(e){function t(e){var n;y()(this,t),n=E()(this,w()(t).call(this,e)),n.editRef=D.a.createRef(null),n.imgView={show:function(e){return function(){n.setState({imgView:!0,imgUrl:e})}},hide:function(){n.setState({imgView:!1,imgUrl:null})}},n.submit=function(e){var t=n.props,a=t.dispatch,o=t.match.params.type,r=n.state.selectedRowKeys,i=e.type;if("many"===i||"all"===i||"one"===i){var l="one"===i?[e.id]:"all"===i?[]:r;a({type:"season/putSeasonBatch",payload:{data:h()({},e,{ids:l,type:o})}}).then(function(e){e&&n.editRef.handleCancel(),n.initData()})}else a({type:"season/postSeason",payload:{data:h()({},e)}}).then(function(e){e&&n.editRef.handleCancel(),n.initData()})},n.editNew=function(){var e=n.props.match.params.type;n.edit({type:e})},n.editOne=function(e){var t={name:e.name,cover:e.cover,introduce:e.introduce,id:e._id};n.edit({type:"one",data:t})},n.editMany=function(){n.edit({type:"many"})},n.editAll=function(){n.edit({type:"all"})},n.edit=function(e){n.editRef.modalShow(e)},n.deleteMany=function(){var e=n.state.selectedRowKeys;n.destroy(e)},n.deleteAll=function(){n.destroy([])},n.deleteOne=function(e){return function(){n.destroy([e])}},n.destroy=function(e){var t=n.props,a=t.dispatch,o=t.match.params.type;p["a"].confirm({title:Object(S["formatMessage"])({id:"season.list.delete.season"}),content:Object(S["formatMessage"])({id:"common.delete.tips"}),okText:Object(S["formatMessage"])({id:"common.confirm"}),cancelText:Object(S["formatMessage"])({id:"common.cancel"}),onOk:function(){return a({type:"season/deleteSeasonBatch",payload:{data:{ids:e,type:o}}}).then(function(e){e&&n.initData()})}})},n.onSearch=function(e){n.query.title=e,n.query.page=1,n.initData()},n.onChangeTable=function(e,t,a){var o,r,i=e.current,l=e.pageSize;a.order&&(o="descend"===a.order?-1:1,r=a.field),n.query=h()({},n.query,{size:l,page:i,sortBy:r,sortOrder:o}),n.initData()},n.initData=function(){var e=N()(n),t=e.query,a=n.props.dispatch;a({type:"season/querySeason",payload:{query:t}}),n.setState({selectedRowKeys:[]});var o=n.props,r=o.location.pathname,i=o.history;i.push({pathname:r,state:n.query})};var a=e.location.state,o=void 0===a?{}:a,r=e.match.params.type;return n.state={selectedRowKeys:[],imgView:!1,imgUrl:""},n.query={title:o.title,size:o.size?o.size:10,page:o.page?o.page:1,sortBy:o.sortBy,sortOrder:o.sortOrder,type:r},n}return T()(t,e),M()(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"componentDidUpdate",value:function(e){e.match.params.type!==this.props.match.params.type&&(this.query.type=this.props.match.params.type,this.initData())}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectedRowKeys,a=t.imgView,o=t.imgUrl,r=this.props,g=r.season,h=r.loading,f=r.match.params.type,y=g[f],v=g.total[f],M=[{title:Object(S["formatMessage"])({id:"season.slug"}),dataIndex:"name",key:"name",sort:!0},{title:Object(S["formatMessage"])({id:"season.cover"}),dataIndex:"cover",key:"cover",render:function(t){return D.a.createElement(m["a"],{src:t,icon:"cloud",shape:"square",size:40,onClick:e.imgView.show(t)})}},{title:Object(S["formatMessage"])({id:"season.count"}),dataIndex:"".concat(f,"Count")},{title:Object(S["formatMessage"])({id:"season.introduce"}),dataIndex:"introduce",key:"introduce"},{title:Object(S["formatMessage"])({id:"season.impress"}),dataIndex:"impress",key:"impress"},{title:Object(S["formatMessage"])({id:"animate.option"}),key:"action",dataIndex:"_id",align:"center",render:function(t,n){return D.a.createElement("span",null,D.a.createElement("a",{onClick:function(){return e.editOne(n)}},Object(S["formatMessage"])({id:"animate.option.full.edit"})),D.a.createElement(u["a"],{type:"vertical"}),D.a.createElement("a",{onClick:e.deleteOne(t)},Object(S["formatMessage"])({id:"animate.option.full.delete"})))}}],b={selectedRowKeys:n,onChange:function(t){e.setState({selectedRowKeys:t})}},E=Object(A["h"])(this.query.page,this.query.size,v);return D.a.createElement(i["a"],{className:"tableList",bordered:!1},D.a.createElement(c["a"],{className:"head"},D.a.createElement(s["a"],{span:16},D.a.createElement(d["a"],{icon:"plus",type:"primary",onClick:this.editNew},Object(S["formatMessage"])({id:"common.add.new"})),n.length>0&&D.a.createElement(A["b"],{edit:this.editMany,delete:this.deleteMany}),D.a.createElement(A["a"],{edit:this.editAll,delete:this.deleteAll})),D.a.createElement(s["a"],{span:8},D.a.createElement(L,{placeholder:Object(S["formatMessage"])({id:"common.search"}),onSearch:this.onSearch,enterButton:!0}))),D.a.createElement(c["a"],null,D.a.createElement(l["a"],{loading:h,rowKey:"_id",rowSelection:b,columns:M,onChange:this.onChangeTable,dataSource:y,pagination:E})),D.a.createElement(z["a"],{submit:this.submit,wrappedComponentRef:function(t){return e.editRef=t}}),D.a.createElement(p["a"],{visible:a,footer:null,onCancel:this.imgView.hide,centered:!0,width:"70vw",style:{textAlign:"center"}},D.a.createElement("img",{alt:Object(S["formatMessage"])({id:"common.image"}),style:{maxWidth:"100%",maxHeight:"60vh"},src:o})))}}]),t}(j["Component"]),o=r))||o);t["default"]=P},"S/9j":function(e,t,n){"use strict";function a(e){var t=e.split("/").filter(function(e){return e});return t.map(function(e,n){return"/".concat(t.slice(0,n+1).join("/"))})}n.d(t,"a",function(){return a})},W660:function(e,t,n){e.exports={content:"antd-pro-layouts-basic-layout-content"}},btmg:function(e,t,n){e.exports={popover:"antd-pro-components-notice-icon-index-popover",noticeButton:"antd-pro-components-notice-icon-index-noticeButton",icon:"antd-pro-components-notice-icon-index-icon",badge:"antd-pro-components-notice-icon-index-badge",tabs:"antd-pro-components-notice-icon-index-tabs"}},h3zL:function(e,t,n){e.exports={header:"antd-pro-components-global-header-index-header",logo:"antd-pro-components-global-header-index-logo",menu:"antd-pro-components-global-header-index-menu",trigger:"antd-pro-components-global-header-index-trigger",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",modal:"antd-pro-components-global-header-index-modal",name:"antd-pro-components-global-header-index-name"}},m8Tn:function(e,t,n){"use strict";n.r(t);var a=n("p0pE"),o=n.n(a),r=n("jehZ"),i=n.n(r),l=n("2Taf"),c=n.n(l),s=n("vZ4D"),d=n.n(s),u=n("l4Ni"),m=n.n(u),p=n("ujKo"),g=n.n(p),h=n("MhPg"),f=n.n(h),y=(n("B9cy"),n("Ol7k")),v=n("q1tI"),M=n.n(v),b=n("ZFw/"),E=n.n(b),C=n("MuoO"),w=n("E6Dt"),I=n("TSYQ"),N=n.n(I),x=n("bALw"),T=n.n(x),k=n("lU33"),j=n("HZnN"),D=n("mxmt"),O=n.n(D),S=(n("Pwec"),n("CtXQ")),z=n("ggcP"),A=y["a"].Footer,L=function(){return M.a.createElement(A,{style:{padding:0}},M.a.createElement(z["a"],{copyright:M.a.createElement(v["Fragment"],null,"Copyright ",M.a.createElement(S["a"],{type:"copyright"})," Qinmei \u63d0\u4f9b\u6280\u672f\u652f\u6301")}))},P=L,K=n("LLXN"),W=n("MFj2"),B=n("3a4m"),R=n.n(B),U=n("SQvw"),H=n.n(U),Z=n("wY1l"),V=n.n(Z),F=n("fqkP"),G=n.n(F),q=n("h3zL"),Y=n.n(q),Q=(n("2qtc"),n("kLXV")),X=(n("T2oS"),n("W9HT")),J=(n("Telt"),n("Tckk")),_=(n("5Dmo"),n("3S7+")),$=(n("+BJd"),n("mr32")),ee=(n("lUTK"),n("BvKs")),te=n("wd/R"),ne=n.n(te),ae=(n("Awhp"),n("KrTs")),oe=(n("Znn+"),n("ZTPi")),re=n("i8i4"),ie=n.n(re),le=n("+jAw"),ce=(n("cWXX"),n("/ezw")),se=(n("Mwp2"),n("VXEj")),de=n("eHn4"),ue=n.n(de),me=n("gWZ8"),pe=n.n(me),ge=n("BsfW"),he=n.n(ge),fe=null;function ye(e){var t=e.data,n=void 0===t?[]:t,a=e.onClick,o=e.onClear,r=e.title,l=e.locale,c=e.emptyText,s=e.emptyImage,d=e.loading,u=e.onLoadMore,m=e.visible,p=e.loadedAll,g=void 0===p||p,h=e.scrollToLoad,f=void 0===h||h,y=e.showClear,v=void 0===y||y,b=e.skeletonCount,E=void 0===b?5:b,C=e.skeletonProps,w=void 0===C?{}:C;if(0===n.length)return M.a.createElement("div",{className:he.a.notFound},s?M.a.createElement("img",{src:s,alt:"not found"}):null,M.a.createElement("div",null,c||l.emptyText));var I=Array.from({length:d?E:0}).map(function(){return{loading:d}}),x=g?M.a.createElement("div",{className:N()(he.a.loadMore,he.a.loadedAll)},M.a.createElement("span",null,l.loadedAll)):M.a.createElement("div",{className:he.a.loadMore,onClick:u},M.a.createElement("span",null,l.loadMore)),T=function(e){if(f&&!d&&!g&&"function"===typeof u){var t=e.currentTarget;t.scrollHeight-t.scrollTop-t.clientHeight<=40&&(u(e),fe=t)}};if(!m&&fe)try{fe.scrollTo(null,0)}catch(e){fe=null}return M.a.createElement("div",null,M.a.createElement(se["a"],{className:he.a.list,loadMore:x,onScroll:T},[].concat(pe()(n),pe()(I)).map(function(e,t){var n=N()(he.a.item,ue()({},he.a.read,e.read)),o=e.avatar?"string"===typeof e.avatar?M.a.createElement(J["a"],{className:he.a.avatar,src:e.avatar}):M.a.createElement("span",{className:he.a.iconElement},e.avatar):null;return M.a.createElement(se["a"].Item,{className:n,key:e.key||t,onClick:function(){return a(e)}},M.a.createElement(ce["a"],i()({avatar:!0,title:!1,active:!0},w,{loading:e.loading}),M.a.createElement(se["a"].Item.Meta,{className:he.a.meta,avatar:o,title:M.a.createElement("div",{className:he.a.title},e.title,M.a.createElement("div",{className:he.a.extra},e.extra)),description:M.a.createElement("div",null,M.a.createElement("div",{className:he.a.description,title:e.description},e.description),M.a.createElement("div",{className:he.a.datetime},e.datetime))})))})),v?M.a.createElement("div",{className:he.a.clear,onClick:o},l.clear," ",r):null)}var ve=n("btmg"),Me=n.n(ve),be=oe["a"].TabPane,Ee=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=m()(this,(e=g()(t)).call.apply(e,[this].concat(o))),n.state={visible:!1},n.onItemClick=function(e,t){var a=n.props.onItemClick,o=e.clickClose;a(e,t),o&&n.popover.click()},n.onClear=function(e){var t=n.props,a=t.onClear,o=t.clearClose;a(e),o&&n.popover.click()},n.onTabChange=function(e){var t=n.props.onTabChange;t(e)},n.onLoadMore=function(e,t){var a=n.props.onLoadMore;a(e,t)},n.handleVisibleChange=function(e){var t=n.props.onPopupVisibleChange;n.setState({visible:e}),t(e)},n}return f()(t,e),d()(t,[{key:"getNotificationBox",value:function(){var e=this,t=this.state.visible,n=this.props,a=n.children,o=n.loading,r=n.locale;if(!a)return null;var i=M.a.Children.map(a,function(n){var a=n.props,o=a.list,i=a.title,l=a.name,c=a.count,s=a.emptyText,d=a.emptyImage,u=a.showClear,m=a.loadedAll,p=a.scrollToLoad,g=a.skeletonCount,h=a.skeletonProps,f=a.loading,y=o&&o.length?o.length:0,v=c||0===c?c:y,b=v>0?"".concat(i," (").concat(v,")"):i;return M.a.createElement(be,{tab:b,key:l},M.a.createElement(ye,{data:o,emptyImage:d,emptyText:s,loadedAll:m,loading:f,locale:r,onClear:function(){return e.onClear(l)},onClick:function(t){return e.onItemClick(t,n.props)},onLoadMore:function(t){return e.onLoadMore(n.props,t)},scrollToLoad:p,showClear:u,skeletonCount:g,skeletonProps:h,title:i,visible:t}))});return M.a.createElement(v["Fragment"],null,M.a.createElement(X["a"],{spinning:o,delay:0},M.a.createElement(oe["a"],{className:Me.a.tabs,onChange:this.onTabChange},i)))}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.count,o=t.popupVisible,r=t.bell,l=this.state.visible,c=N()(n,Me.a.noticeButton),s=this.getNotificationBox(),d=r||M.a.createElement(S["a"],{type:"bell",className:Me.a.icon}),u=M.a.createElement("span",{className:N()(c,{opened:l})},M.a.createElement(ae["a"],{count:a,style:{boxShadow:"none"},className:Me.a.badge},d));if(!s)return u;var m={};return"popupVisible"in this.props&&(m.visible=o),M.a.createElement(le["a"],i()({placement:"bottomRight",overlay:s,overlayClassName:Me.a.popover,trigger:["click"],visible:l,onVisibleChange:this.handleVisibleChange},m,{ref:function(t){return e.popover=ie.a.findDOMNode(t)}}),u)}}]),t}(v["PureComponent"]);Ee.Tab=be,Ee.defaultProps={onItemClick:function(){},onPopupVisibleChange:function(){},onTabChange:function(){},onClear:function(){},loading:!1,clearClose:!1,locale:{emptyText:"No notifications",clear:"Clear",loadedAll:"Loaded",loadMore:"Loading more"},emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"};var Ce,we,Ie,Ne,xe,Te,ke=n("bfXr"),je=(Ce=Object(C["connect"])(function(e){var t=e.cloud,n=e.loading;return{cloud:t,loadingTab:n.effects["cloud/message"],loadingItem:n.effects["cloud/info"]}}),Ce((Ie=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=m()(this,(e=g()(t)).call.apply(e,[this].concat(o))),n.state={visible:!1,info:{}},n.showModal=function(e){var t=n.props.dispatch;n.setState({visible:!0}),t({type:"cloud/info",payload:{params:{id:e}}}).then(function(e){e&&n.setState({info:e.data})});var a=JSON.parse(localStorage.getItem("message"));a?a.push(e):a=[e],localStorage.setItem("message",JSON.stringify(a))},n.hideModal=function(){n.setState({visible:!1})},n}return f()(t,e),d()(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.visible,a=t.info,o=this.props,r=o.currentUser,i=o.onMenuClick,l=o.theme,c=o.cloud,s=c.messageList,d=c.messageTotal,u=o.loadingTab,m=o.loadingItem,p=M.a.createElement(ee["a"],{className:Y.a.menu,selectedKeys:[],onClick:i},M.a.createElement(ee["a"].Item,{key:"userCenter"},M.a.createElement(S["a"],{type:"user"}),M.a.createElement(K["FormattedMessage"],{id:"menu.account.center",defaultMessage:"account center"})),M.a.createElement(ee["a"].Divider,null),M.a.createElement(ee["a"].Item,{key:"logout"},M.a.createElement(S["a"],{type:"logout"}),M.a.createElement(K["FormattedMessage"],{id:"menu.account.logout",defaultMessage:"logout"}))),g=Y.a.right;"dark"===l&&(g="".concat(Y.a.right,"  ").concat(Y.a.dark));var h,f=JSON.parse(localStorage.getItem("message"))||[],y=s.map(function(e){return{id:e._id,title:e.title,description:e.introduce,extra:M.a.createElement($["a"],{color:f.includes(e._id)?"blue":"red"},ne()(e.updatedAt).format("YYYY-MM-DD")),clickClose:!0,read:f.includes(e._id)}}),v=y.filter(function(e){return!f.includes(e.id)});return h=v.length,M.a.createElement("div",{className:g},M.a.createElement(_["a"],{title:Object(K["formatMessage"])({id:"component.globalHeader.help"})},M.a.createElement("a",{target:"_blank",href:"https://qinvideo.org",rel:"noopener noreferrer",className:Y.a.action},M.a.createElement(S["a"],{type:"question-circle-o"}))),M.a.createElement(Ee,{className:Y.a.action,count:h,onItemClick:function(t,n){e.showModal(t.id)},loading:u,locale:{emptyText:Object(K["formatMessage"])({id:"component.noticeIcon.empty"}),clear:Object(K["formatMessage"])({id:"component.noticeIcon.clear"}),loadedAll:Object(K["formatMessage"])({id:"component.noticeIcon.loaded"}),loadMore:Object(K["formatMessage"])({id:"component.noticeIcon.loading-more"})}},M.a.createElement(Ee.Tab,{title:Object(K["formatMessage"])({id:"component.noticeIcon.tab.title"}),name:"event",emptyText:Object(K["formatMessage"])({id:"component.globalHeader.message.empty"}),emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg",count:d,list:y,showClear:!1})),r.name?M.a.createElement(le["a"],{overlay:p},M.a.createElement("span",{className:"".concat(Y.a.action," ").concat(Y.a.account)},M.a.createElement(J["a"],{size:"small",className:Y.a.avatar,src:r.avatar,alt:"avatar"}),M.a.createElement("span",{className:Y.a.name},r.name))):M.a.createElement(X["a"],{size:"small",style:{marginLeft:8,marginRight:8}}),M.a.createElement(ke["a"],{className:Y.a.action}),M.a.createElement(Q["a"],{visible:n,onCancel:this.hideModal,footer:null,destroyOnClose:!0},M.a.createElement(X["a"],{spinning:m},M.a.createElement("div",{className:Y.a.modal},M.a.createElement("h3",null,a.title),M.a.createElement("span",null,ne()(a.updatedAt).format("YYYY-MM-DD")),M.a.createElement("p",null,a.content)))))}}]),t}(v["PureComponent"]),we=Ie))||we),De=je,Oe=(Ne=G()(600),Te=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=m()(this,(e=g()(t)).call.apply(e,[this].concat(o))),n.toggle=function(){var e=n.props,t=e.collapsed,a=e.onCollapse;a(!t),n.triggerResizeEvent()},n}return f()(t,e),d()(t,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,n=e.isMobile,a=e.logo;return M.a.createElement("div",{className:Y.a.header},n&&M.a.createElement(V.a,{to:"/",className:Y.a.logo,key:"logo"},M.a.createElement("img",{src:a,alt:"logo",width:"32"})),M.a.createElement("span",{className:Y.a.trigger,onClick:this.toggle},M.a.createElement(S["a"],{type:t?"menu-unfold":"menu-fold"})),M.a.createElement(De,this.props))}}]),t}(v["PureComponent"]),xe=Te,H()(xe.prototype,"triggerResizeEvent",[Ne],Object.getOwnPropertyDescriptor(xe.prototype,"triggerResizeEvent"),xe.prototype),xe),Se=n("oFg3"),ze=n("pMM0"),Ae=n("JwhZ"),Le=n.n(Ae),Pe=n("T+dw"),Ke=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=m()(this,(e=g()(t)).call.apply(e,[this].concat(o))),n.state={maxWidth:void 0},n}return f()(t,e),d()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.theme,a=t.contentWidth,o=t.menuData,r=t.logo,l=this.state.maxWidth,c=Object(ze["b"])(o);return M.a.createElement("div",{className:"".concat(Le.a.head," ").concat("light"===n?Le.a.light:"")},M.a.createElement("div",{ref:function(t){e.maim=t},className:"".concat(Le.a.main," ").concat("Fixed"===a?Le.a.wide:"")},M.a.createElement("div",{className:Le.a.left},M.a.createElement("div",{className:Le.a.logo,key:"logo",id:"logo"},M.a.createElement(V.a,{to:"/"},M.a.createElement("img",{src:r,alt:"logo"}),M.a.createElement("h1",null,Pe["title"]))),M.a.createElement("div",{style:{maxWidth:l}},M.a.createElement(Se["default"],i()({},this.props,{flatMenuKeys:c,className:Le.a.menu})))),M.a.createElement(De,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-280-165-40}}}]),t}(v["PureComponent"]),We=n("IGtV"),Be=n.n(We),Re=y["a"].Header,Ue=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=m()(this,(e=g()(t)).call.apply(e,[this].concat(o))),n.state={visible:!0},n.getHeadWidth=function(){var e=n.props,t=e.isMobile,a=e.collapsed,o=e.setting,r=o.fixedHeader,i=o.layout;return t||!r||"topmenu"===i?"100%":a?"calc(100% - 80px)":"calc(100% - 256px)"},n.handleMenuClick=function(e){var t=e.key,a=n.props.dispatch;"userCenter"!==t?"triggerError"!==t?"userinfo"!==t?"logout"===t&&a({type:"login/logout"}):R.a.push("/account/settings/base"):R.a.push("/exception/trigger"):R.a.push("/user/list")},n.handScroll=function(){var e=n.props.autoHideHeader,t=n.state.visible;if(e){var a=document.body.scrollTop+document.documentElement.scrollTop;n.ticking||(n.ticking=!0,requestAnimationFrame(function(){n.oldScrollTop>a?n.setState({visible:!0}):a>300&&t?n.setState({visible:!1}):a<300&&!t&&n.setState({visible:!0}),n.oldScrollTop=a,n.ticking=!1}))}},n}return f()(t,e),d()(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,n=e.handleMenuCollapse,a=e.setting,o=a.navTheme,r=a.layout,l=a.fixedHeader,c=this.state.visible,s="topmenu"===r,d=this.getHeadWidth(),u=c?M.a.createElement(Re,{style:{padding:0,width:d},className:l?Be.a.fixedHeader:""},s&&!t?M.a.createElement(Ke,i()({theme:o,mode:"horizontal",onCollapse:n,onMenuClick:this.handleMenuClick},this.props)):M.a.createElement(Oe,i()({onCollapse:n,onMenuClick:this.handleMenuClick},this.props))):null;return M.a.createElement(W["a"],{component:"",transitionName:"fade"},u)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),t}(v["Component"]),He=Object(C["connect"])(function(e){var t=e.global,n=e.setting;return{currentUser:t.currentUser,collapsed:t.collapsed,setting:n}})(Ue),Ze=Object(v["createContext"])(),Ve=n("luV/"),Fe=function(){return M.a.createElement(Ve["a"],{type:"403",desc:Object(K["formatMessage"])({id:"app.exception.description.403"}),linkElement:V.a,backText:Object(K["formatMessage"])({id:"app.exception.back"})})},Ge=Fe,qe=n("xqX8"),Ye=(n("bbsP"),n("/wGt")),Qe=n("mR0u"),Xe=n.n(Qe),Je=M.a.lazy(function(){return Promise.resolve().then(n.bind(null,"oFg3"))}),_e=y["a"].Sider,$e=!0,et=function(e){function t(e){var n;return c()(this,t),n=m()(this,g()(t).call(this,e)),n.isMainMenu=function(e){var t=n.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},n.handleOpenChange=function(e){var t=e.filter(function(e){return n.isMainMenu(e)}).length>1;n.setState({openKeys:t?[e.pop()]:pe()(e)})},n.state={openKeys:Object(ze["a"])(e)},n}return f()(t,e),d()(t,[{key:"componentDidMount",value:function(){$e=!1}},{key:"render",value:function(){var e,t=this.props,n=t.logo,a=t.collapsed,o=t.onCollapse,r=t.fixSiderbar,l=t.theme,c=t.isMobile,s=this.state.openKeys,d=a?{}:{openKeys:s},u=N()(Xe.a.sider,(e={},ue()(e,Xe.a.fixSiderBar,r),ue()(e,Xe.a.light,"light"===l),e));return M.a.createElement(_e,{trigger:null,collapsible:!0,collapsed:a,breakpoint:"lg",onCollapse:function(e){!$e&&c||o(e)},width:256,theme:l,className:u},M.a.createElement("div",{className:Xe.a.logo,id:"logo"},M.a.createElement(V.a,{to:"/"},M.a.createElement("img",{src:n,alt:"logo"}),M.a.createElement("h1",null,Pe["title"]))),M.a.createElement(v["Suspense"],{fallback:M.a.createElement(qe["default"],null)},M.a.createElement(Je,i()({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%"}},d))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.pathname,a=t.flatMenuKeysLen;return e.location.pathname!==n||e.flatMenuKeys.length!==a?{pathname:e.location.pathname,flatMenuKeysLen:e.flatMenuKeys.length,openKeys:Object(ze["a"])(e)}:null}}]),t}(v["PureComponent"]),tt=M.a.memo(function(e){var t=e.isMobile,n=e.menuData,a=e.collapsed,o=e.onCollapse,r=Object(ze["b"])(n);return t?M.a.createElement(Ye["a"],{visible:!a,placement:"left",onClose:function(){return o(!0)},style:{padding:0,height:"100vh"}},M.a.createElement(et,i()({},e,{flatMenuKeys:r,collapsed:!t&&a}))):M.a.createElement(et,i()({},e,{flatMenuKeys:r}))}),nt=tt,at=n("tGQQ"),ot=n("W660"),rt=n.n(ot),it=(M.a.lazy(function(){return Promise.all([n.e(0),n.e(39)]).then(n.bind(null,"PceP"))}),y["a"].Content),lt={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},ct=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=m()(this,(e=g()(t)).call.apply(e,[this].concat(o))),n.getRouteAuthority=function(e,t){var n=t.slice(),a=function e(t,n){var a;return t.forEach(function(t){T()("".concat(t.path,"(.*)")).test(n)&&(t.authority&&(a=t.authority),!T()(t.path).test(n)&&t.routes&&(a=e(t.routes,n)))}),a};return a(n,e)},n.getLayoutStyle=function(){var e=n.props,t=e.fixSiderbar,a=e.isMobile,o=e.collapsed,r=e.layout;return t&&"topmenu"!==r&&!a?{paddingLeft:o?"80px":"256px"}:null},n.handleMenuCollapse=function(e){var t=n.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},n.renderSettingDrawer=function(){return null},n}return f()(t,e),d()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.route,a=n.routes,o=n.authority;t({type:"global/getUserInfo"}),t({type:"category/queryCategoryAll",payload:{}}),t({type:"menu/getMenuData",payload:{routes:a,authority:o}})}},{key:"getContext",value:function(){var e=this.props,t=e.location,n=e.breadcrumbNameMap;return{location:t,breadcrumbNameMap:n}}},{key:"render",value:function(){var e=this,t=this.props,n=t.navTheme,a=t.layout,r=t.children,l=t.location.pathname,c=t.isMobile,s=t.menuData,d=t.breadcrumbNameMap,u=t.route.routes,m=t.fixedHeader,p="topmenu"===a,g=this.getRouteAuthority(l,u),h=m?{}:{paddingTop:0},f=M.a.createElement(y["a"],null,p&&!c?null:M.a.createElement(nt,i()({logo:O.a,theme:n,onCollapse:this.handleMenuCollapse,menuData:s,isMobile:c},this.props)),M.a.createElement(y["a"],{style:o()({},this.getLayoutStyle(),{minHeight:"100vh"})},M.a.createElement(He,i()({menuData:s,handleMenuCollapse:this.handleMenuCollapse,logo:O.a,isMobile:c},this.props)),M.a.createElement(it,{className:rt.a.content,style:h},M.a.createElement(j["a"],{authority:g,noMatch:M.a.createElement(Ge,null)},r)),M.a.createElement(P,null)));return M.a.createElement(M.a.Fragment,null,M.a.createElement(E.a,{title:Object(at["a"])(l,d)},M.a.createElement(w["ContainerQuery"],{query:lt},function(t){return M.a.createElement(Ze.Provider,{value:e.getContext()},M.a.createElement("div",{className:N()(t)},f))})),M.a.createElement(v["Suspense"],{fallback:M.a.createElement(qe["default"],null)},this.renderSettingDrawer()))}}]),t}(M.a.Component);t["default"]=Object(C["connect"])(function(e){var t=e.global,n=e.setting,a=e.menu;return o()({currentUser:t.currentUser,collapsed:t.collapsed,layout:n.layout,menuData:a.menuData,breadcrumbNameMap:a.breadcrumbNameMap},n)})(function(e){return M.a.createElement(k["a"],{query:"(max-width: 599px)"},function(t){return M.a.createElement(ct,i()({},e,{isMobile:t}))})})},mR0u:function(e,t,n){e.exports={logo:"antd-pro-components-sider-menu-index-logo",sider:"antd-pro-components-sider-menu-index-sider",fixSiderBar:"antd-pro-components-sider-menu-index-fixSiderBar",light:"antd-pro-components-sider-menu-index-light",icon:"antd-pro-components-sider-menu-index-icon"}},mxmt:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTA0MHB4IiBoZWlnaHQ9IjEwNDBweCIgdmlld0JveD0iMCAwIDEwNDAgMTA0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTIuNSAoNjc0NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPuacquWRveWQjTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTYyMCwyNTIgTDUyMCw1MDIgTDQyMCwyNTIgTDUyMCwyIEw2MjAsMjUyIFogTTc4MC4yMTUyOTUsNDAxLjIwNjA2MSBMNTMyLjcyNzkyMiw1MDcuMjcyMDc4IEw2MzguNzkzOTM5LDI1OS43ODQ3MDUgTDg4Ni4yODEzMTMsMTUzLjcxODY4NyBMNzgwLjIxNTI5NSw0MDEuMjA2MDYxIFogTTc4OCw2MjAgTDUzOCw1MjAgTDc4OCw0MjAgTDEwMzgsNTIwIEw3ODgsNjIwIFogTTYzOC43OTM5MzksNzgwLjIxNTI5NSBMNTMyLjcyNzkyMiw1MzIuNzI3OTIyIEw3ODAuMjE1Mjk1LDYzOC43OTM5MzkgTDg4Ni4yODEzMTMsODg2LjI4MTMxMyBMNjM4Ljc5MzkzOSw3ODAuMjE1Mjk1IFogTTQyMCw3ODggTDUyMCw1MzggTDYyMCw3ODggTDUyMCwxMDM4IEw0MjAsNzg4IFogTTI1OS43ODQ3MDUsNjM4Ljc5MzkzOSBMNTA3LjI3MjA3OCw1MzIuNzI3OTIyIEw0MDEuMjA2MDYxLDc4MC4yMTUyOTUgTDE1My43MTg2ODcsODg2LjI4MTMxMyBMMjU5Ljc4NDcwNSw2MzguNzkzOTM5IFogTTI1Miw0MjAgTDUwMiw1MjAgTDI1Miw2MjAgTDIsNTIwIEwyNTIsNDIwIFogTTQwMS4yMDYwNjEsMjU5Ljc4NDcwNSBMNTA3LjI3MjA3OCw1MDcuMjcyMDc4IEwyNTkuNzg0NzA1LDQwMS4yMDYwNjEgTDE1My43MTg2ODcsMTUzLjcxODY4NyBMNDAxLjIwNjA2MSwyNTkuNzg0NzA1IFoiIGlkPSLlkIjlubblvaLnirYiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"},oFg3:function(e,t,n){"use strict";n.r(t);var a=n("jehZ"),o=n.n(a),r=n("gWZ8"),i=n.n(r),l=n("2Taf"),c=n.n(l),s=n("vZ4D"),d=n.n(s),u=n("l4Ni"),m=n.n(u),p=n("ujKo"),g=n.n(p),h=n("MhPg"),f=n.n(h),y=(n("Pwec"),n("CtXQ")),v=(n("lUTK"),n("BvKs")),M=n("q1tI"),b=n.n(M),E=n("TSYQ"),C=n.n(E),w=n("wY1l"),I=n.n(w),N=n("S/9j"),x=n("pMM0"),T=n("+n12"),k=n("mR0u"),j=n.n(k),D=n("T+dw"),O=y["a"].createFromIconfontCN({scriptUrl:D["iconfontUrl"]});n.d(t,"default",function(){return A});var S=v["a"].SubMenu,z=function(e){return"string"===typeof e?Object(T["d"])(e)?b.a.createElement(y["a"],{component:function(){return b.a.createElement("img",{src:e,alt:"icon",className:j.a.icon})}}):e.startsWith("icon-")?b.a.createElement(O,{type:e}):b.a.createElement(y["a"],{type:e}):e},A=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=m()(this,(e=g()(t)).call.apply(e,[this].concat(o))),n.getNavMenuItems=function(e,t){return e?e.filter(function(e){return e.name&&!e.hideInMenu}).map(function(e){return n.getSubMenuOrItem(e,t)}).filter(function(e){return e}):[]},n.getSelectedMenuKeys=function(e){var t=n.props.flatMenuKeys;return Object(N["a"])(e).map(function(e){return Object(x["c"])(t,e).pop()})},n.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some(function(e){return e.name})){var t=e.name;return b.a.createElement(S,{title:e.icon?b.a.createElement("span",null,z(e.icon),b.a.createElement("span",null,t)):t,key:e.path},n.getNavMenuItems(e.children))}return b.a.createElement(v["a"].Item,{key:e.path},n.getMenuItemPath(e))},n.getMenuItemPath=function(e){var t=e.name,a=n.conversionPath(e.path),o=z(e.icon),r=e.target;if(/^https?:\/\//.test(a))return b.a.createElement("a",{href:a,target:r},o,b.a.createElement("span",null,t));var i=n.props,l=i.location,c=i.isMobile,s=i.onCollapse;return b.a.createElement(I.a,{to:a,target:r,replace:a===l.pathname,onClick:c?function(){s(!0)}:void 0},o,b.a.createElement("span",null,t))},n.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},n}return f()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.openKeys,n=e.theme,a=e.mode,r=e.location.pathname,l=e.className,c=e.collapsed,s=this.getSelectedMenuKeys(r);!s.length&&t&&(s=[t[t.length-1]]);var d={};t&&!c&&(d={openKeys:0===t.length?i()(s):t});var u=this.props,m=u.handleOpenChange,p=u.style,g=u.menuData,h=C()(l,{"top-nav-menu":"horizontal"===a});return b.a.createElement(v["a"],o()({key:"Menu",mode:a,theme:n,onOpenChange:m,selectedKeys:s,style:p,className:h},d),this.getNavMenuItems(g))}}]),t}(M["PureComponent"])},pMM0:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return d});var a=n("gWZ8"),o=n.n(a),r=n("bALw"),i=n.n(r),l=n("S/9j"),c=function e(t){var n=[];return t.forEach(function(t){n.push(t.path),t.children&&(n=n.concat(e(t.children)))}),n},s=function(e,t){return e.filter(function(e){return!!e&&i()(e).test(t)})},d=function(e){var t=e.location.pathname,n=e.flatMenuKeys;return Object(l["a"])(t).map(function(e){return s(n,e)[0]}).filter(function(e){return e}).reduce(function(e,t){return[].concat(o()(e),[t])},["/"])}}}]);