"use strict";(self.webpackChunkresustrant_app=self.webpackChunkresustrant_app||[]).push([[642],{6174:function(t,n,e){var i=e(885),o=e(2791),r=e(4164),a=e(7563),s=e(5721),u=e(2971);var c=o.forwardRef((function(t,n){var e=t.children,c=t.container,l=t.disablePortal,d=void 0!==l&&l,p=o.useState(null),f=(0,i.Z)(p,2),E=f[0],h=f[1],x=(0,a.Z)(o.isValidElement(e)?e.ref:null,n);return(0,s.Z)((function(){d||h(function(t){return"function"===typeof t?t():t}(c)||document.body)}),[c,d]),(0,s.Z)((function(){if(E&&!d)return(0,u.Z)(n,E),function(){(0,u.Z)(n,null)}}),[n,E,d]),d?o.isValidElement(e)?o.cloneElement(e,{ref:x}):e:E?r.createPortal(e,E):E}));n.Z=c},183:function(t,n,e){e.d(n,{Z:function(){return r}});var i=e(7462),o=e(627);function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2?arguments[2]:void 0;return(0,o.Z)(t)?n:(0,i.Z)({},n,{ownerState:(0,i.Z)({},n.ownerState,e)})}},627:function(t,n){n.Z=function(t){return"string"===typeof t}},3208:function(t,n,e){var i=e(7462),o=e(5245),r=e(2791),a=e(8875),s=e(3967),u=e(4999),c=e(2071),l=e(184),d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var f={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},E="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),h=r.forwardRef((function(t,n){var e=t.addEndListener,h=t.appear,x=void 0===h||h,m=t.children,g=t.easing,v=t.in,y=t.onEnter,b=t.onEntered,C=t.onEntering,S=t.onExit,Z=t.onExited,k=t.onExiting,T=t.style,N=t.timeout,R=void 0===N?"auto":N,D=t.TransitionComponent,O=void 0===D?a.ZP:D,L=(0,o.Z)(t,d),M=r.useRef(),w=r.useRef(),P=(0,s.Z)(),j=r.useRef(null),A=(0,c.Z)(m.ref,n),I=(0,c.Z)(j,A),H=function(t){return function(n){if(t){var e=j.current;void 0===n?t(e):t(e,n)}}},U=H(C),_=H((function(t,n){(0,u.n)(t);var e,i=(0,u.C)({style:T,timeout:R,easing:g},{mode:"enter"}),o=i.duration,r=i.delay,a=i.easing;"auto"===R?(e=P.transitions.getAutoHeightDuration(t.clientHeight),w.current=e):e=o,t.style.transition=[P.transitions.create("opacity",{duration:e,delay:r}),P.transitions.create("transform",{duration:E?e:.666*e,delay:r,easing:a})].join(","),y&&y(t,n)})),F=H(b),G=H(k),V=H((function(t){var n,e=(0,u.C)({style:T,timeout:R,easing:g},{mode:"exit"}),i=e.duration,o=e.delay,r=e.easing;"auto"===R?(n=P.transitions.getAutoHeightDuration(t.clientHeight),w.current=n):n=i,t.style.transition=[P.transitions.create("opacity",{duration:n,delay:o}),P.transitions.create("transform",{duration:E?n:.666*n,delay:E?o:o||.333*n,easing:r})].join(","),t.style.opacity=0,t.style.transform=p(.75),S&&S(t)})),W=H(Z);return r.useEffect((function(){return function(){clearTimeout(M.current)}}),[]),(0,l.jsx)(O,(0,i.Z)({appear:x,in:v,nodeRef:j,onEnter:_,onEntered:F,onEntering:U,onExit:V,onExited:W,onExiting:G,addEndListener:function(t){"auto"===R&&(M.current=setTimeout(t,w.current||0)),e&&e(j.current,t)},timeout:"auto"===R?null:R},L,{children:function(t,n){return r.cloneElement(m,(0,i.Z)({style:(0,i.Z)({opacity:0,transform:p(.75),visibility:"exited"!==t||v?void 0:"hidden"},f[t],T,m.props.style),ref:I},n))}}))}));h.muiSupportAuto=!0,n.Z=h},4999:function(t,n,e){e.d(n,{C:function(){return o},n:function(){return i}});var i=function(t){return t.scrollTop};function o(t,n){var e,i,o=t.timeout,r=t.easing,a=t.style,s=void 0===a?{}:a;return{duration:null!=(e=s.transitionDuration)?e:"number"===typeof o?o:o[n.mode]||0,easing:null!=(i=s.transitionTimingFunction)?i:"object"===typeof r?r[n.mode]:r,delay:s.transitionDelay}}},8875:function(t,n,e){e.d(n,{cn:function(){return p},d0:function(){return d},Wj:function(){return l},Ix:function(){return f},ZP:function(){return x}});var i=e(5245),o=e(4578),r=e(2791),a=e(4164),s=!1,u=e(5545),c="unmounted",l="exited",d="entering",p="entered",f="exiting",E=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var o,r=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?r?(o=l,i.appearStatus=d):o=p:o=n.unmountOnExit||n.mountOnEnter?c:l,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===c?{status:l}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==d&&e!==p&&(n=d):e!==d&&e!==p||(n=f)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===l&&this.setState({status:c})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[a.findDOMNode(this),i],r=o[0],u=o[1],c=this.getTimeouts(),l=i?c.appear:c.enter;!t&&!e||s?this.safeSetState({status:p},(function(){n.props.onEntered(r)})):(this.props.onEnter(r,u),this.safeSetState({status:d},(function(){n.props.onEntering(r,u),n.onTransitionEnd(l,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(r,u)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:a.findDOMNode(this);n&&!s?(this.props.onExit(i),this.safeSetState({status:f},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:l},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:l},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],r=o[0],s=o[1];this.props.addEndListener(r,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===c)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(u.Z.Provider,{value:null},"function"===typeof e?e(t,o):r.cloneElement(r.Children.only(e),o))},n}(r.Component);function h(){}E.contextType=u.Z,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},E.UNMOUNTED=c,E.EXITED=l,E.ENTERING=d,E.ENTERED=p,E.EXITING=f;var x=E}}]);
//# sourceMappingURL=642.0ab3cf68.chunk.js.map