(this["webpackJsonpfls-playground-client-beta"]=this["webpackJsonpfls-playground-client-beta"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(13),r=n.n(c),i=n(57),o=n(60),l=n(1),h=function(){return Object(l.jsx)(o.a,{className:"header",variant:"",children:Object(l.jsxs)(i.a,{className:"header-content",children:[Object(l.jsx)(o.a.Brand,{className:"header-title",children:"FLite# Playground "}),Object(l.jsx)(o.a.Toggle,{}),Object(l.jsx)(o.a.Collapse,{className:"justify-content-end",children:Object(l.jsx)(o.a.Text,{className:"header-github",children:Object(l.jsx)("a",{href:"https://github.com/Rye-Catcher/FLS-playground-client/tree/master/",children:"Github"})})})]})})},u=n(10),j=n(11),d=n(19),b=n(17),g=n(16),O=n(58),p=n(59),m=n(61),f=n(62),x=n(25),v=n.n(x),y=(n(34),n(35),{boarder:"1px solid lightgray",width:"inherit",height:"100%"}),C=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a.onChange=a.onChange.bind(Object(d.a)(a)),a}return Object(j.a)(n,[{key:"onChange",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){return Object(l.jsx)(v.a,{onChange:this.onChange,style:y,mode:"java",theme:"monokai",fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:this.props.code,editorProps:{$blockScrolling:!0},setOptions:{showLineNumbers:!0,tabSize:4}})}}]),n}(s.a.Component),w=function(){return Object(l.jsx)(m.a,{className:"view-info",children:Object(l.jsx)(m.a.Body,{className:"view-info-body",children:Object(l.jsxs)(m.a.Text,{children:["This website is a playground to try FLite# programming language.",Object(l.jsx)("br",{}),"FLite# is a subset of F# programming language developed by Team Salamanca as their project for CS4215 module in NUS. You can check it out on",Object(l.jsx)("a",{href:"https://github.com/Rye-Catcher/FLiteSharp",children:" GitHub "}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Currently this platform supports constant declaration, functions, lambda expressions, and basic arithmetic operations.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"The first response sent from server may be slow. Please wait."]})})})},N={boarder:"1px solid lightgray",width:"inherit",height:"50%"},S=function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(l.jsx)(v.a,{style:N,mode:"java",theme:"monokai",readOnly:!0,fontSize:14,highlightActiveLine:!0,value:this.props.res,editorProps:{$blockScrolling:!0},setOptions:{showLineNumbers:!1,tabSize:4}})}}]),n}(s.a.Component),k=function(){function e(){Object(u.a)(this,e)}return Object(j.a)(e,null,[{key:"run",value:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})};return fetch("https://fls-playground-server.herokuapp.com/api/run/",t).then(console.log(t)).then((function(e){return e.json()})).catch((function(e){throw e}))}}]),e}(),L=(n(54),function(e){Object(b.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={code:"//1 + 1;",res:{runStatus:"0",message:""}},a.handleCodeChange=a.handleCodeChange.bind(Object(d.a)(a)),a.handleRun=a.handleRun.bind(Object(d.a)(a)),a}return Object(j.a)(n,[{key:"handleCodeChange",value:function(e){var t=this.state.code;return t=e,console.log(t),this.setState({code:t})}},{key:"handleRun",value:function(e){var t=this;e.preventDefault();var n=this.state.code;console.log("Running code: "+n),k.run(n).then((function(e){console.log("status: ".concat(e.runStatus)),console.log("msg:\n ".concat(e.message)),t.setState({res:e})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(l.jsx)(i.a,{fluid:!0,className:"run-page",children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(p.a,{className:"editor-panel",children:Object(l.jsx)(m.a,{className:"editor-card",children:Object(l.jsx)(m.a.Body,{children:Object(l.jsx)(C,{onChange:this.handleCodeChange,code:this.state.code})})})}),Object(l.jsx)(p.a,{className:"view-panel",children:Object(l.jsx)(m.a,{className:"view-card",children:Object(l.jsxs)(m.a.Body,{children:[Object(l.jsx)(w,{}),Object(l.jsx)(f.a,{className:"view-run-button",type:"button",sz:"sm",onClick:this.handleRun,children:"Run"}),Object(l.jsx)(S,{className:"view-result",res:this.state.res.message})]})})})]})})}}]),n}(s.a.Component));var R=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(L,{})]})},T=n(40);r.a.render(Object(l.jsx)(T.a,{children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.fd861d84.chunk.js.map