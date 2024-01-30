"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[354,46,514],{3780:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(9231),o=n(9841),l=n(8477),r=n(717),c=n(3782),i=n(9651),s=n(2338),d=n(4565),m=n(8350),u=n(5946),p=n(5047);const b={backToTopButton:"backToTopButton_SL5A",backToTopButtonShow:"backToTopButtonShow_kycz"};function h(){const{shown:e,scrollToTop:t}=(0,p.a)({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var f=n(3917),E=n(9409),g=n(2052),k=n(6354),v=n(6138),_=n(5527);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_OYCD",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_haS_"};function I(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(C,{className:S.collapseSidebarButtonIcon}))}var y=n(1085),N=n(3134),x=n(3075),T=n(1714),Z=n(3540),A=n(8120),B=n(6951),w=n(1990);function L(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:p,className:b,href:h}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,k.L)(),E=function(e){const t=(0,w.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,l),v=(0,A.Mg)(h,l),{collapsed:C,setCollapsed:S}=(0,Z.u)({initialState:()=>!!p&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:y}=(0,x.f)(),N=function(e){void 0===e&&(e=!C),y(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:C,updateCollapsed:N}),(0,a.useEffect)((()=>{p&&null!=I&&I!==s&&f&&S(!0)}),[p,I,s,S,f]),a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},b)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(B.default,(0,_.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{n?.(t),h?N(!1):(e.preventDefault(),N())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":p?!C:void 0,href:p?E??"#":E},d),u),h&&p&&a.createElement(L,{categoryLabel:u,onClick:e=>{e.preventDefault(),N()}})),a.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(z,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:c+1})))}var M=n(5994),F=n(5148);const H={menuExternalLink:"menuExternalLink_gjBU"};function W(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:p,autoAddBaseUrl:b}=t,h=(0,i._F)(t,l),f=(0,M.Z)(m);return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",p),key:u},a.createElement(B.default,(0,_.Z)({className:(0,o.Z)("menu__link",!f&&H.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:b,"aria-current":h?"page":void 0,to:m},f&&{onClick:n?()=>n(t):void 0},d),u,!f&&a.createElement(F.Z,null)))}const D={menuHtmlItem:"menuHtmlItem_dzQ_"};function O(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[D.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function R(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,_.Z)({item:t},n));case"html":return a.createElement(O,(0,_.Z)({item:t},n));default:return a.createElement(W,(0,_.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return a.createElement(x.D,null,t.map(((e,t)=>a.createElement(R,(0,_.Z)({key:t,item:e,index:t},n)))))}const z=(0,a.memo)(j),V={menu:"menu_CFuA",menuWithAnnouncementBar:"menuWithAnnouncementBar_O1yt"};function U(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,y.nT)(),[t,n]=(0,a.useState)(e);return(0,N.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",V.menu,c&&V.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:n,activePath:t,level:1})))}const Y="sidebar_yvIZ",Q="sidebarWithHideableNavbar_LaJl",q="sidebarHidden_gW5C",J="sidebarLogo_tyhh";function K(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,k.L)();return a.createElement("div",{className:(0,o.Z)(Y,c&&Q,r&&q)},c&&a.createElement(v.Z,{tabIndex:-1,className:J}),a.createElement(U,{path:t,sidebar:n}),i&&a.createElement(I,{onClick:l}))}const G=a.memo(K);var X=n(4509),$=n(6297);const ee=e=>{let{sidebar:t,path:n}=e;const l=(0,$.e)();return a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function te(e){return a.createElement(X.Zo,{component:ee,props:e})}const ne=a.memo(te);function ae(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(G,e),o&&a.createElement(ne,e))}const oe={expandButton:"expandButton_Rx8k",expandButtonIcon:"expandButtonIcon_QxmW"};function le(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:oe.expandButtonIcon}))}const re={docSidebarContainer:"docSidebarContainer_zmsq",docSidebarContainerHidden:"docSidebarContainerHidden_ixIp",sidebarViewport:"sidebarViewport_eBW6"};function ce(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ie(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,E.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,f.n)()&&s(!0),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&s(!0)}},a.createElement(ce,null,a.createElement("div",{className:(0,o.Z)(re.sidebarViewport,i&&re.sidebarViewportHidden)},a.createElement(ae,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(le,{toggleSidebar:d}))))}const se={docMainContainer:"docMainContainer_QDrF",docMainContainerEnhanced:"docMainContainerEnhanced_LAbN",docItemWrapperEnhanced:"docItemWrapperEnhanced_gtwK"};function de(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(se.docMainContainer,(t||!l)&&se.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",se.docItemWrapper,t&&se.docItemWrapperEnhanced)},n))}const me={docPage:"docPage_xBl6",docsWrapper:"docsWrapper_JS8j"};function ue(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:me.docsWrapper},a.createElement(h,null),a.createElement("div",{className:me.docPage},n&&a.createElement(ie,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(de,{hiddenSidebarContainer:o},t)))}var pe=n(8046),be=n(4042);function he(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(be.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function fe(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(pe.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(he,e),a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ue,null,c)))))}},8046:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9231),o=n(5946),l=n(8477),r=n(8350);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},3075:(e,t,n)=>{n.d(t,{D:()=>c,f:()=>i});var a=n(9231),o=n(1714);const l=Symbol("EmptyContext"),r=a.createContext(l);function c(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(r.Provider,{value:l},t)}function i(){const e=(0,a.useContext)(r);if(e===l)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}},5047:(e,t,n)=>{n.d(t,{a:()=>r});var a=n(9231),o=n(3134),l=n(7886);function r(e){let{threshold:t}=e;const[n,r]=(0,a.useState)(!1),c=(0,a.useRef)(!1),{startScroll:i,cancelScroll:s}=(0,o.Ct)();return(0,o.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(c.current?c.current=!1:a>=o?(s(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,l.S)((e=>{e.location.hash&&(c.current=!0,r(!1))})),{shown:n,scrollToTop:()=>i(0)}}},7298:(e,t,n)=>{const a=n(9231).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},9478:(e,t,n)=>{const a=["options","packages"];function o(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n(175),n(6501);const l=n(9231),r=n(3780),c=n(7298),i=e=>e&&e.__esModule?e:{default:e},s=i(l),d=i(r);function m(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function u(e,t,n){return Object.entries(e).forEach((a=>{let[o,l]=a;if("id"===o){const a="type"in e;(!a||a&&"reference"!==e.type)&&(t[Number(l)]=e,n&&(e.parentId=n.id))}else Array.isArray(l)?l.forEach((n=>{m(n)&&u(n,t,e)})):m(l)&&u(l,t,e)})),t}function p(e){const t={};return e.forEach((e=>{e.entryPoints.forEach((e=>{u(e.reflection,t)}))})),t}e.exports=function(e){let t=e.options,n=e.packages,r=o(e,a);const i=l.useMemo((()=>({options:t,reflections:p(n)})),[t,n]);return s.default.createElement(c.ApiDataContext.Provider,{value:i},s.default.createElement("div",{className:"apiPage"},s.default.createElement(d.default,r)))}},175:(e,t,n)=>{n.r(t)},6501:(e,t,n)=>{n.r(t)}}]);