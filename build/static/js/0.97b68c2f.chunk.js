webpackJsonp([0,12],{100:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(101),i=o(r),a=n(105),s=o(a),l=n(98),u=o(l),c=n(95),p=o(c);t.exports={Transition:p.default,TransitionGroup:u.default,ReplaceTransition:s.default,CSSTransition:i.default}},101:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=n(1),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(l),c=n(102),p=o(c),f=n(104),d=o(f),h=n(0),m=o(h),E=n(95),y=o(E),v=n(97),g=function(t,e){return t&&e&&e.split(" ").forEach(function(e){return(0,p.default)(t,e)})},x=function(t,e){return t&&e&&e.split(" ").forEach(function(e){return(0,d.default)(t,e)})},b=(s({},y.default.propTypes,{classNames:v.classNamesShape,onEnter:u.func,onEntering:u.func,onEntered:u.func,onExit:u.func,onExiting:u.func,onExited:u.func}),function(t){function e(){var n,o,a;r(this,e);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=o=i(this,t.call.apply(t,[this].concat(l))),o.onEnter=function(t,e){var n=o.getClassNames(e?"appear":"enter"),r=n.className;o.removeClasses(t,"exit"),g(t,r),o.props.onEnter&&o.props.onEnter(t)},o.onEntering=function(t,e){var n=o.getClassNames(e?"appear":"enter"),r=n.activeClassName;o.reflowAndAddClass(t,r),o.props.onEntering&&o.props.onEntering(t)},o.onEntered=function(t,e){var n=o.getClassNames("enter"),r=n.doneClassName;o.removeClasses(t,e?"appear":"enter"),g(t,r),o.props.onEntered&&o.props.onEntered(t)},o.onExit=function(t){var e=o.getClassNames("exit"),n=e.className;o.removeClasses(t,"appear"),o.removeClasses(t,"enter"),g(t,n),o.props.onExit&&o.props.onExit(t)},o.onExiting=function(t){var e=o.getClassNames("exit"),n=e.activeClassName;o.reflowAndAddClass(t,n),o.props.onExiting&&o.props.onExiting(t)},o.onExited=function(t){var e=o.getClassNames("exit"),n=e.doneClassName;o.removeClasses(t,"exit"),g(t,n),o.props.onExited&&o.props.onExited(t)},o.getClassNames=function(t){var e=o.props.classNames,n="string"!==typeof e?e[t]:e+"-"+t;return{className:n,activeClassName:"string"!==typeof e?e[t+"Active"]:n+"-active",doneClassName:"string"!==typeof e?e[t+"Done"]:n+"-done"}},a=n,i(o,a)}return a(e,t),e.prototype.removeClasses=function(t,e){var n=this.getClassNames(e),o=n.className,r=n.activeClassName,i=n.doneClassName;o&&x(t,o),r&&x(t,r),i&&x(t,i)},e.prototype.reflowAndAddClass=function(t,e){e&&(t&&t.scrollTop,g(t,e))},e.prototype.render=function(){var t=s({},this.props);return delete t.classNames,m.default.createElement(y.default,s({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(m.default.Component));b.propTypes={},e.default=b,t.exports=e.default},102:function(t,e,n){"use strict";function o(t,e){t.classList?t.classList.add(e):(0,i.default)(t,e)||("string"===typeof t.className?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(103),i=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports=e.default},103:function(t,e,n){"use strict";function o(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,t.exports=e.default},104:function(t,e,n){"use strict";function o(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}t.exports=function(t,e){t.classList?t.classList.remove(e):"string"===typeof t.className?t.className=o(t.className,e):t.setAttribute("class",o(t.className&&t.className.baseVal||"",e))}},105:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=n(1),u=o(l),c=n(0),p=o(c),f=n(25),d=n(98),h=o(d),m=(u.default.bool.isRequired,function(t){function e(){var n,o,r;i(this,e);for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];return n=o=a(this,t.call.apply(t,[this].concat(l))),E.call(o),r=n,a(o,r)}return s(e,t),e.prototype.handleLifecycle=function(t,e,n){var o,r=this.props.children,i=p.default.Children.toArray(r)[e];i.props[t]&&(o=i.props)[t].apply(o,n),this.props[t]&&this.props[t]((0,f.findDOMNode)(this))},e.prototype.render=function(){var t=this.props,e=t.children,n=t.in,o=r(t,["children","in"]),i=p.default.Children.toArray(e),a=i[0],s=i[1];return delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,p.default.createElement(h.default,o,n?p.default.cloneElement(a,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):p.default.cloneElement(s,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},e}(p.default.Component)),E=function(){var t=this;this.handleEnter=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEnter",0,n)},this.handleEntering=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEntering",0,n)},this.handleEntered=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onEntered",0,n)},this.handleExit=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExit",1,n)},this.handleExiting=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExiting",1,n)},this.handleExited=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.handleLifecycle("onExited",1,n)}};m.propTypes={},e.default=m,t.exports=e.default},106:function(t,e,n){"use strict";function o(t,e){var n=function(t){return e&&(0,l.isValidElement)(t)?e(t):t},o=Object.create(null);return t&&l.Children.map(t,function(t){return t}).forEach(function(t){o[t.key]=n(t)}),o}function r(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var o=Object.create(null),r=[];for(var i in t)i in e?r.length&&(o[i]=r,r=[]):r.push(i);var a=void 0,s={};for(var l in e){if(o[l])for(a=0;a<o[l].length;a++){var u=o[l][a];s[o[l][a]]=n(u)}s[l]=n(l)}for(a=0;a<r.length;a++)s[r[a]]=n(r[a]);return s}function i(t,e,n){return null!=n[e]?n[e]:t.props[e]}function a(t,e){return o(t.children,function(n){return(0,l.cloneElement)(n,{onExited:e.bind(null,n),in:!0,appear:i(n,"appear",t),enter:i(n,"enter",t),exit:i(n,"exit",t)})})}function s(t,e,n){var a=o(t.children),s=r(e,a);return Object.keys(s).forEach(function(o){var r=s[o];if((0,l.isValidElement)(r)){var u=o in e,c=o in a,p=e[o],f=(0,l.isValidElement)(p)&&!p.props.in;!c||u&&!f?c||!u||f?c&&u&&(0,l.isValidElement)(p)&&(s[o]=(0,l.cloneElement)(r,{onExited:n.bind(null,r),in:p.props.in,exit:i(r,"exit",t),enter:i(r,"enter",t)})):s[o]=(0,l.cloneElement)(r,{in:!1}):s[o]=(0,l.cloneElement)(r,{onExited:n.bind(null,r),in:!0,exit:i(r,"exit",t),enter:i(r,"enter",t)})}}),s}e.__esModule=!0,e.getChildMapping=o,e.mergeChildMappings=r,e.getInitialChildMapping=a,e.getNextChildMapping=s;var l=n(0)},86:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n.n(a),l=n(27),u=(n.n(l),n(92)),c=(n.n(u),n(100)),p=(n.n(c),n(13)),f=n(28),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),h=Object(p.f)(function(t){var e=t.history,n=(t.location,t.match);return console.log(JSON.stringify(n)),s.a.createElement("div",{className:"list"},s.a.createElement("p",{onClick:function(){return e.push(n.path+"/view0")}},"0\u3001React hash \u6a21\u5f0f\u8def\u7531\u5b9e\u73b0\u7684\u624b\u6bb5"),s.a.createElement("p",{onClick:function(){return e.push(n.path+"/view1")}},"1\u3001React Route \u8def\u7531\u7684\u57fa\u672c\u914d\u7f6e \u4ee5\u53ca \u5b9e\u73b0\u8def\u7531\u7684\u6a21\u7cca\u5339\u914d\uff08\u52a8\u6001\u8def\u7531\uff0c\u5d4c\u5957\u8def\u7531\uff09"),s.a.createElement("p",{onClick:function(){return e.push(n.path+"/view2")}},"2\u3001React \u8def\u7531\u53c2\u6570"),s.a.createElement("p",{onClick:function(){return e.push(n.path+"/view3")}},"3\u3001\u8def\u7531\u91cd\u5b9a\u5411"),s.a.createElement("p",{onClick:function(){return e.push(n.path+"/view4")}},"4\u3001\u8def\u7531\u5339\u914d404 \u5904\u7406"),s.a.createElement("p",{onClick:function(){return e.push(n.path+"/view5")}},"5\u3001Router \u4fa7\u680f / \u9875\u9762\u8fc7\u6e21 /"),s.a.createElement("p",{onClick:function(){return e.push(n.path+"/view6")}},"6\u3001Route Render \u6e32\u67d3\u7684\u65b9\u5f0f\uff0c\u53ef\u9009component\u3001render\u3001children"),s.a.createElement("p",{onClick:function(){return e.push(n.path+"/view7")}},"7\u3001React Router Api"),s.a.createElement("p",{onClick:function(){return e.push(n.path+"/404")}},"8\u3001404 \u5339\u914d"))}),m=function(t){function e(t){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),d(e,[{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"app-container"},s.a.createElement(h,null),s.a.createElement(c.TransitionGroup,null,s.a.createElement(c.CSSTransition,{key:this.props.location.key,classNames:"fade",timeout:300},s.a.createElement(p.e,{location:this.props.location},f.b.map(function(e,n){return s.a.createElement(p.d,{key:n,exact:!0,path:""+t.props.match.path+e.path,component:e.component})})))))}}]),e}(s.a.Component);e.default=Object(l.hot)(t)(m)}.call(e,n(26)(t))},92:function(t,e,n){var o=n(99);"string"===typeof o&&(o=[[t.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(88)(o,r);o.locals&&(t.exports=o.locals)},95:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(){}e.__esModule=!0,e.EXITING=e.ENTERED=e.ENTERING=e.EXITED=e.UNMOUNTED=void 0;var u=n(1),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u),p=n(0),f=o(p),d=n(25),h=o(d),m=n(96),E=(n(97),e.UNMOUNTED="unmounted"),y=e.EXITED="exited",v=e.ENTERING="entering",g=e.ENTERED="entered",x=e.EXITING="exiting",b=function(t){function e(n,o){i(this,e);var r=a(this,t.call(this,n,o)),s=o.transitionGroup,l=s&&!s.isMounting?n.enter:n.appear,u=void 0;return r.appearStatus=null,n.in?l?(u=y,r.appearStatus=v):u=g:u=n.unmountOnExit||n.mountOnEnter?E:y,r.state={status:u},r.nextCallback=null,r}return s(e,t),e.prototype.getChildContext=function(){return{transitionGroup:null}},e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===E?{status:y}:null},e.prototype.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.prototype.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==v&&n!==g&&(e=v):n!==v&&n!==g||(e=x)}this.updateStatus(!1,e)},e.prototype.componentWillUnmount=function(){this.cancelNextCallback()},e.prototype.getTimeouts=function(){var t=this.props.timeout,e=void 0,n=void 0,o=void 0;return e=n=o=t,null!=t&&"number"!==typeof t&&(e=t.exit,n=t.enter,o=t.appear),{exit:e,enter:n,appear:o}},e.prototype.updateStatus=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments[1];if(null!==e){this.cancelNextCallback();var n=h.default.findDOMNode(this);e===v?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===y&&this.setState({status:E})},e.prototype.performEnter=function(t,e){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:e,i=this.getTimeouts();if(!e&&!o)return void this.safeSetState({status:g},function(){n.props.onEntered(t)});this.props.onEnter(t,r),this.safeSetState({status:v},function(){n.props.onEntering(t,r),n.onTransitionEnd(t,i.enter,function(){n.safeSetState({status:g},function(){n.props.onEntered(t,r)})})})},e.prototype.performExit=function(t){var e=this,n=this.props.exit,o=this.getTimeouts();if(!n)return void this.safeSetState({status:y},function(){e.props.onExited(t)});this.props.onExit(t),this.safeSetState({status:x},function(){e.props.onExiting(t),e.onTransitionEnd(t,o.exit,function(){e.safeSetState({status:y},function(){e.props.onExited(t)})})})},e.prototype.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.prototype.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},e.prototype.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},e.prototype.onTransitionEnd=function(t,e,n){this.setNextCallback(n),t?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},e.prototype.render=function(){var t=this.state.status;if(t===E)return null;var e=this.props,n=e.children,o=r(e,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"===typeof n)return n(t,o);var i=f.default.Children.only(n);return f.default.cloneElement(i,o)},e}(f.default.Component);b.contextTypes={transitionGroup:c.object},b.childContextTypes={transitionGroup:function(){}},b.propTypes={},b.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:l,onEntering:l,onEntered:l,onExit:l,onExiting:l,onExited:l},b.UNMOUNTED=0,b.EXITED=1,b.ENTERING=2,b.ENTERED=3,b.EXITING=4,e.default=(0,m.polyfill)(b)},96:function(t,e,n){"use strict";function o(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function r(t){function e(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!==n&&void 0!==n?n:null}this.setState(e.bind(this))}function i(t,e){try{var n=this.props,o=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function a(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof t.getDerivedStateFromProps&&"function"!==typeof e.getSnapshotBeforeUpdate)return t;var n=null,a=null,s=null;if("function"===typeof e.componentWillMount?n="componentWillMount":"function"===typeof e.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof e.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof e.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof e.componentWillUpdate?s="componentWillUpdate":"function"===typeof e.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s){var l=t.displayName||t.name,u="function"===typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof t.getDerivedStateFromProps&&(e.componentWillMount=o,e.componentWillReceiveProps=r),"function"===typeof e.getSnapshotBeforeUpdate){if("function"!==typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=i;var c=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,t,e,o)}}return t}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"polyfill",function(){return a}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},97:function(t,e,n){"use strict";function o(t){var e="transition"+t+"Timeout",n="transition"+t;return function(t){if(t[n]){if(null==t[e])return new Error(e+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!==typeof t[e])return new Error(e+" must be a number (in milliseconds)")}return null}}e.__esModule=!0,e.classNamesShape=e.timeoutsShape=void 0,e.transitionTimeout=o;var r=n(1),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.timeoutsShape=i.default.oneOfType([i.default.number,i.default.shape({enter:i.default.number,exit:i.default.number}).isRequired]),e.classNamesShape=i.default.oneOfType([i.default.string,i.default.shape({enter:i.default.string,exit:i.default.string,active:i.default.string}),i.default.shape({enter:i.default.string,enterDone:i.default.string,enterActive:i.default.string,exit:i.default.string,exitDone:i.default.string,exitActive:i.default.string})])},98:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u=n(1),c=o(u),p=n(0),f=o(p),d=n(96),h=n(106),m=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},E=(c.default.any,c.default.node,c.default.bool,c.default.bool,c.default.bool,c.default.func,{component:"div",childFactory:function(t){return t}}),y=function(t){function e(n,o){i(this,e);var r=a(this,t.call(this,n,o)),s=r.handleExited.bind(r);return r.state={handleExited:s,firstRender:!0},r}return s(e,t),e.prototype.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},e.prototype.componentDidMount=function(){this.appeared=!0},e.getDerivedStateFromProps=function(t,e){var n=e.children,o=e.handleExited;return{children:e.firstRender?(0,h.getInitialChildMapping)(t,o):(0,h.getNextChildMapping)(t,n,o),firstRender:!1}},e.prototype.handleExited=function(t,e){var n=(0,h.getChildMapping)(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.setState(function(e){var n=l({},e.children);return delete n[t.key],{children:n}}))},e.prototype.render=function(){var t=this.props,e=t.component,n=t.childFactory,o=r(t,["component","childFactory"]),i=m(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===e?i:f.default.createElement(e,o,i)},e}(f.default.Component);y.childContextTypes={transitionGroup:c.default.object.isRequired},y.propTypes={},y.defaultProps=E,e.default=(0,d.polyfill)(y),t.exports=e.default},99:function(t,e,n){e=t.exports=n(87)(!0),e.push([t.i,".list p{color:rgba(64,158,255,.9);text-decoration:underline;cursor:pointer;margin-top:35px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list p:active{color:#ccc}","",{version:3,sources:["E:/_RaccoonSmall/react-router-example/src/component/list/list.css"],names:[],mappings:"AAAA,QACI,0BAA2B,AAC3B,0BAA2B,AAC3B,eAAgB,AAChB,gBAAiB,AACjB,0BAA2B,AAC3B,uBAAwB,AACxB,iBAAmB,CACtB,AACD,eACI,UAAY,CACf",file:"list.css",sourcesContent:[".list p{\r\n    color: rgba(64,158,255,.9);\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    margin-top: 35px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.list p:active{\r\n    color: #ccc;\r\n}"],sourceRoot:""}])}});
//# sourceMappingURL=0.97b68c2f.chunk.js.map