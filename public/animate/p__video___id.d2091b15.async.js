(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{kS3o:function(e,n,t){e.exports=t.p+"static/level.367681e1.png"},ued4:function(e,n,t){"use strict";t.r(n);t("T2oS");var a=t("W9HT"),i=t("mrSG"),r=t("q1tI"),l=t.n(r),c=t("MuoO"),o=(t("IzEo"),t("bx4M")),s=(t("+L6B"),t("2/Rp")),m=(t("5Dmo"),t("3S7+")),d=t("qIgq"),p=t.n(d),u=t("fFZ8"),g=t.n(u),h=t("vOnD"),f=t("Gwa3"),b=t("LLXN"),v=t("yDSA"),E=t("zz3R"),x=t("wd/R"),y=t.n(x),w=t("xEAY");function k(){var e=g()(["\n  margin: 0 20px;\n\n  .head {\n    height: 30px;\n    line-height: 30px;\n    display: grid;\n    grid-template-columns: 50px 1fr 60px;\n    font-size: 0.9em;\n    opacity: 0.6;\n    font-weight: 700;\n  }\n\n  .main {\n    .list {\n      line-height: 24px;\n      display: grid;\n      grid-template-columns: 50px 170px 60px;\n      font-size: 0.8em;\n      opacity: 0.6;\n      cursor: pointer;\n\n      span:nth-child(2) {\n        font-weight: 500;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: pre;\n        word-break: keep-all;\n      }\n\n      span:nth-child(3) {\n        text-align: center;\n      }\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n"]);return k=function(){return e},e}var O=e=>{var n=Math.floor(e/60),t=Math.floor(e%60);return"".concat(Object(w["a"])(n),":").concat(Object(w["a"])(t))},j=h["a"].div(k(),e=>e.color),N=e=>{var n=e.id,t=Object(r["useContext"])(f["a"]),i=Object(r["useMemo"])(()=>t,[t]),c=Object(r["useState"])([]),o=p()(c,2),s=o[0],m=o[1],d=Object(r["useState"])(!0),u=p()(d,2),g=u[0],h=u[1];return Object(r["useEffect"])(()=>{n&&E["a"].queryDanmu({query:{id:n}}).then(e=>{m(e.data.list),h(!1)})},[n]),l.a.createElement(j,{color:i},l.a.createElement("div",{className:"head"},l.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.time"})),l.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.content"})),l.a.createElement("span",null,Object(b["formatMessage"])({id:"danmu.created"}))),l.a.createElement(a["a"],{spinning:g},l.a.createElement("div",{className:"main"},s.map(e=>l.a.createElement("div",{className:"list",key:e._id},l.a.createElement("span",null,O(e.time)),l.a.createElement("span",null,e.text),l.a.createElement("span",null,y()(e.createdAt).format("MM-DD")))))))},M=N,D=t("DNCa"),S=t("YO1i"),z=t("3a4m"),I=t.n(z),q=t("qHAN"),C=(t("Quhn"),t("NUga")),L=t.n(C),A=t("ulZh"),P=t.n(A),R=e=>{var n=e.target,t=e.link,a=e.danmu,i=e.type,c=Object(r["useContext"])(f["a"]),o=Object(r["useMemo"])(()=>c,[c]);window.Hls=P.a;var s=e=>{var n=e.color,t=e.id,a=e.link,i=e.type,r=(e.danmu,window.config.usePicInterface?window.config.picInterface:window.config.dplayer),l={container:document.getElementById("dplayer"),autoplay:!0,theme:n,screenshot:!1,hotkey:!0,preload:"auto",volume:.7,mutex:!0,video:{url:a,pic:r,type:"mp4"===i?"auto":"hls"},danmaku:{id:t,api:"/api/v2/danmus/",maximum:1e3,bottom:"15%",unlimited:!0}};new L.a(l)};return Object(r["useEffect"])(()=>{"php"!==i&&t&&s({color:o,id:n,link:t,type:i,danmu:a})},[e.target]),l.a.createElement(l.a.Fragment,null,"php"===i?l.a.createElement("iframe",{style:{width:"100%",height:"100%",border:"none"},src:t}):l.a.createElement("div",{id:"dplayer"}))},F=R,T=t("qki9"),H=t("kS3o"),B=t.n(H);function G(){var e=g()(["\n  padding: 60px;\n  min-height: 100vh;\n  .container {\n    display: grid;\n    grid-template-columns: 1fr 320px;\n    grid-gap: 20px;\n\n    .player {\n      background-color: rgba(0, 0, 0, 0.01);\n\n      .levelLimit {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        span {\n          font-size: 16px;\n          margin-top: 20px;\n          color: #1890ff;\n        }\n      }\n    }\n\n    .sidebar {\n      background-color: white;\n      padding: 5px 20px 0px 20px;\n\n      .header {\n        height: 40px;\n\n        span {\n          display: inline-block;\n          width: 50%;\n          height: 40px;\n          line-height: 40px;\n          cursor: pointer;\n          text-align: center;\n          border-bottom: solid 2px transparent;\n\n          &.active {\n            border-bottom-color: ",";\n          }\n        }\n      }\n\n      .content {\n        height: calc(100% - 50px);\n        overflow-y: scroll;\n        margin: 5px -20px;\n\n        .eposide,\n        .danmu {\n          display: none;\n        }\n\n        .eposide.active,\n        .danmu.active {\n          display: block;\n        }\n      }\n    }\n\n    .comment {\n      .report {\n        padding: 24px;\n        background-color: white;\n        border-radius: 2px;\n        margin-bottom: 20px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        .title {\n          span {\n            margin-right: 30px;\n\n            i {\n              margin-right: 5px;\n            }\n          }\n        }\n\n        .btn .ant-btn.ant-btn-primary {\n          font-size: 12px;\n        }\n      }\n    }\n\n    .info {\n      .info-main {\n        .cover {\n          width: 112px;\n          height: 144px;\n          border-radius: 2px;\n          background-color: rgba(0, 0, 0, 0.05);\n          margin: 0 auto;\n          box-shadow: 0 3px 14px 0 hsla(22, 4%, 52%, 0.4);\n          background-size: cover;\n          background-position: center;\n          cursor: pointer;\n        }\n        .title {\n          font-size: 1.2em;\n          height: 50px;\n          line-height: 60px;\n          width: 100%;\n          text-align: center;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: keep-all;\n        }\n        .introduce {\n          color: #515a6e;\n          word-wrap: break-word;\n        }\n      }\n    }\n  }\n"]);return G=function(){return e},e}var J=h["a"].div(G(),e=>e.color),U=e=>{var n=e.play,t=Object(r["useContext"])(f["a"]),a=Object(r["useMemo"])(()=>t,[t]),i=Object(r["useState"])(0),c=p()(i,2),d=c[0],u=c[1],g=Object(r["useState"])(200),h=p()(g,2),x=h[0],y=h[1],w=Object(r["useRef"])(null),k=Object(r["useRef"])(null);return Object(r["useEffect"])(()=>{y(.5625*w.current.clientWidth),n.eposides.some((e,t)=>{if(e.id===n.id)return k.current.scrollTop=80*t,!0})}),l.a.createElement(J,{color:a},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"player",ref:w,style:{height:x}},n.levelLimit?l.a.createElement("div",{className:"levelLimit"},l.a.createElement("img",{src:B.a,alt:""}),l.a.createElement("span",null,Object(b["formatMessage"])({id:"animate.play.level.limit"}))):l.a.createElement(F,{target:n.id,link:n.link[0]?n.link[0].value:"",danmu:n.bilibili,type:n.target.playType})),l.a.createElement("div",{className:"sidebar",style:{height:x}},l.a.createElement("div",{className:"header"},["eposide","danmu"].map((e,n)=>l.a.createElement("span",{className:d===n?"active":"",onClick:()=>{u(n)},key:n},Object(b["formatMessage"])({id:"animate.play.tabs.".concat(e)})))),l.a.createElement("div",{className:"content",ref:k},l.a.createElement("div",{className:0===d?"eposide active":"eposide"},l.a.createElement(v["a"],{id:n.id,cover:n.target.coverVertical,eposide:n.eposides})),l.a.createElement("div",{className:1===d?"danmu active":"danmu"},l.a.createElement(M,{id:n.id})))),l.a.createElement("div",{className:"comment"},l.a.createElement("div",{className:"report"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,n.target.title," - ",n.title),l.a.createElement(m["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.play"})},l.a.createElement("span",null,l.a.createElement(S["a"],{type:"icon-youtube"}),n.countPlay)),l.a.createElement(m["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.comment"})},l.a.createElement("span",null,l.a.createElement(S["a"],{type:"icon-comment1"}),n.countComment)),l.a.createElement(m["a"],{placement:"top",title:Object(b["formatMessage"])({id:"animate.info.danmu"})},l.a.createElement("span",null,l.a.createElement(S["a"],{type:"icon-pinglun"}),n.countDanmu))),l.a.createElement("div",{className:"btn"},l.a.createElement(T["a"],null,l.a.createElement(q["a"],{type:"Animate",onModel:"Eposide",target:n.id,api:E["a"]},l.a.createElement(s["a"],{type:"primary",shape:"round"},Object(b["formatMessage"])({id:"report.question"})))))),l.a.createElement(D["a"],{target:n.id,api:E["a"],onModel:"Eposide"})),l.a.createElement("div",{className:"info"},l.a.createElement(o["a"],{bordered:!1,className:"info-main"},l.a.createElement("div",{className:"cover",style:{backgroundImage:"url(".concat(n.target.coverVertical,")")},onClick:()=>{I.a.push("/slug/".concat(n.target.slug))}}),l.a.createElement("div",{className:"title"},n.target.title),l.a.createElement("div",{className:"introduce"},n.target.introduce)))))},V=U,W=class extends r["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.id,n=this.props.dispatch;n({type:"animate/getPlayInfo",payload:{params:{id:e}}}).then(e=>{e&&this.setState({info:e.data})})}),this.state={id:e.match.params.id,info:{link:[],eposides:[],target:{}}}}static getDerivedStateFromProps(e,n){return e.match.params.id!==n.id?{id:e.match.params.id}:null}componentDidMount(){this.initData()}componentDidUpdate(e,n){n.id!==this.state.id&&this.initData()}render(){var e=this.props.loading,n=this.state.info;return l.a.createElement(l.a.Fragment,null,l.a.createElement(a["a"],{spinning:e,size:"large"},l.a.createElement(V,{play:n})))}};W=Object(i["a"])([Object(c["connect"])(e=>{var n=e.animate,t=e.loading;return{animate:n,loading:t.effects["animate/getPlayInfo"]}})],W);n["default"]=W}}]);