(window.webpackJsonp=window.webpackJsonp||[]).push([[9,13],{221:function(t,s,a){},228:function(t,s,a){"use strict";var e=a(221);a.n(e).a},230:function(t,s,a){},231:function(t,s,a){"use strict";a.r(s);var e={props:["page"],computed:{apage:function(){return this.page||{title:"",frontmatter:{}}}}},n=(a(228),a(6)),o=Object(n.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("router-link",{staticClass:"blog-post",style:{backgroundImage:"url("+t.apage.frontmatter.hero+")"},attrs:{to:t.apage.path||"#"}},[a("div",{staticClass:"post-overlay"}),t._v(" "),a("div",{staticClass:"post-info"},[a("span",{staticClass:"post-title"},[t._v(t._s(t.apage.title))]),a("br"),t._v(" "),a("span",{staticClass:"post-summary"},[t._v(t._s(t.apage.frontmatter.summary))])])])}),[],!1,null,null,null);s.default=o.exports},265:function(t,s,a){"use strict";var e=a(230);a.n(e).a},313:function(t,s,a){"use strict";a.r(s);var e=a(231),n={props:{pages:Array},created:function(){console.log(this.pages)},components:{BlogPostPage:e.default}},o=(a(265),a(6)),r=Object(o.a)(n,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"blog-simple-layout"},this._l(this.pages,(function(t){return s("BlogPostPage",{staticClass:"blog-simple-layout-post",attrs:{page:t}})})),1)}),[],!1,null,null,null);s.default=r.exports}}]);