(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(34),r=n.n(s),c=(n(87),n(9)),o=n.n(c),i=n(15),l=n(12),u=n(10),d=n.n(u),j=n(27),h=n(23),b=n(81),p=n(45),m="FETCH_POSTS",O="FETCH_USER",x={items:[],item:{}},g={item:{}},f=Object(h.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(p.a)(Object(p.a)({},e),{},{items:t.payload});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(p.a)(Object(p.a)({},e),{},{item:t.payload});default:return e}}}),v=[b.a],y=Object(h.e)(f,{},Object(h.d)(h.a.apply(void 0,v))),w=n(8),k=n(11),S=n(17),N=n(18),P=n(21),T=n(20),C=(n(25),n(50)),I=n(33),z=n(35),_=n(60),D=n(1),M=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){return Object(S.a)(this,n),t.call(this,e)}return Object(N.a)(n,[{key:"renderNavbarAccountOptions",value:function(){return this.props.authorization?Object(D.jsxs)(I.a,{children:[Object(D.jsx)(z.a,{children:Object(D.jsx)(I.a.Link,{as:w.b,to:"/new_post",children:"New Post"})}),Object(D.jsx)(z.a,{children:Object(D.jsx)(I.a.Link,{as:w.b,to:"/account",children:"Account"})}),Object(D.jsx)(z.a,{children:Object(D.jsx)(I.a.Link,{as:w.b,to:"/logout",children:"Logout"})})]}):Object(D.jsxs)(I.a,{children:[Object(D.jsx)(z.a,{children:Object(D.jsx)(I.a.Link,{as:w.b,to:"/login",children:"Login"})}),Object(D.jsx)(z.a,{children:Object(D.jsx)(I.a.Link,{as:w.b,to:"/register",children:"Register"})})]})}},{key:"render",value:function(){return Object(D.jsx)("div",{children:Object(D.jsx)(C.a,{expand:"md",bg:"color",variant:"dark",collapseOnSelect:!0,children:Object(D.jsxs)(_.a,{children:[Object(D.jsx)("img",{width:30,height:30,className:"zencircle",src:"https://zennitapp.s3.amazonaws.com/zencircle.png",alt:"zennit zen circle"}),Object(D.jsx)(C.a.Brand,{as:w.b,className:"mr-4",to:"/home",children:"Zennit"}),Object(D.jsx)(C.a.Toggle,{"aria-controls":"navbarToggle"}),Object(D.jsxs)(C.a.Collapse,{id:"navbarToggle",children:[Object(D.jsx)(I.a,{className:"mr-auto",children:Object(D.jsx)(z.a,{children:Object(D.jsx)(I.a.Link,{as:w.b,to:"/home",children:"Home"})})}),this.renderNavbarAccountOptions()]})]})})})}}]),n}(a.Component),A=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return Object(D.jsx)("div",{children:Object(D.jsx)("h1",{children:"About Page"})})}}]),n}(a.Component),L=n(51),U=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return Object(D.jsx)("div",{className:"col-md-4",children:Object(D.jsxs)("div",{className:"content-section",children:[Object(D.jsx)("h3",{children:"Expedients"}),Object(D.jsxs)("div",{className:"text-muted",children:["Currently Under Construction",Object(D.jsxs)(L.a,{children:[Object(D.jsx)(L.a.Item,{children:Object(D.jsx)(w.b,{to:"/about",children:"About"})}),Object(D.jsx)(L.a.Item,{children:Object(D.jsx)(w.b,{to:"/recent_comments",children:"Recent Comments"})}),Object(D.jsx)(L.a.Item,{children:Object(D.jsx)(w.b,{to:"/users",children:"Users"})})]})]})]})})}}]),n}(a.Component),E=n(6),B=n(13);function H(e){var t=Object(k.f)();function n(){return(n=Object(i.a)(o.a.mark((function e(n){var a,s,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t.push("/login"),a=n.target.username.value.trim(),s=n.target.email.value.trim(),r=n.target.password.value,e.prev=5,e.next=8,d()({method:"post",url:"/api/register",data:{username:a,email:s,password:r}});case 8:c=e.sent,console.log(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}return Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"content-section",children:[Object(D.jsx)("legend",{className:"border-bottom mb-4",children:"Join Zennit!"}),Object(D.jsxs)(E.a,{onSubmit:function(e){return function(e){return n.apply(this,arguments)}(e)},children:[Object(D.jsxs)(E.a.Group,{controlId:"username",children:[Object(D.jsx)(E.a.Label,{children:"Username"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"username",placeholder:"Username"})]}),Object(D.jsxs)(E.a.Group,{controlId:"email",children:[Object(D.jsx)(E.a.Label,{children:"Email"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"email",placeholder:"Enter email"}),Object(D.jsx)(E.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(D.jsxs)(E.a.Group,{controlId:"password",children:[Object(D.jsx)(E.a.Label,{children:"Password"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"password",placeholder:"Password","aria-describedby":"passwordHelpBlock"}),Object(D.jsx)(E.a.Text,{id:"passwordHelpBlock",muted:!0,children:"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."})]}),Object(D.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Sign Up"})]})]}),Object(D.jsx)("div",{className:"border-top pt-3",children:Object(D.jsxs)("small",{className:"text-muted",children:["Already Have An Account? ",Object(D.jsx)(w.b,{className:"ml-2",to:"/login",children:"Sign In"})]})})]})}var q=n(19);function G(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=(t[0],t[1]),s=Object(a.useState)(!1),r=Object(l.a)(s,2),c=r[0],u=r[1],j=Object(a.useState)("warning"),h=Object(l.a)(j,2),b=h[0],p=h[1],m=Object(a.useState)("Something went wrong, please try again later!"),O=Object(l.a)(m,2),x=O[0],g=O[1],f=Object(k.f)();function v(){return(v=Object(i.a)(o.a.mark((function e(t){var a,s,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.email.value.trim(),s=t.target.password.value,e.prev=3,e.next=6,d()({method:"post",url:"/api/login",data:{email:a,password:s}});case 6:r=e.sent,console.log(r),200===r.status?(c=r.data.token,localStorage.setItem("token","Bearer "+c),localStorage.setItem("loginMessage",!0),n(!0),f.replace("/"),f.go("/")):(n(!1),u(!0),p("warning"),g("Something went wrong, please try again later!")),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),n(!1),console.log(e.t0.response),400===e.t0.response.status?(u(!0),p("warning"),g("Incorrect Email or Password")):(u(!0),p("danger"),g("Something went wrong, please try again later!"));case 16:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){c&&setTimeout((function(){u(!1)}),5e3)})),Object(D.jsxs)("div",{children:[function(){if(c)return Object(D.jsx)(q.a,{variant:b,children:x})}(),Object(D.jsxs)("div",{className:"content-section",children:[Object(D.jsx)("legend",{className:"border-bottom mb-4",children:"Login"}),Object(D.jsxs)(E.a,{onSubmit:function(e){return function(e){return v.apply(this,arguments)}(e)},children:[Object(D.jsxs)(E.a.Group,{controlId:"email",children:[Object(D.jsx)(E.a.Label,{children:"Email"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"email",placeholder:"Account Email"})]}),Object(D.jsxs)(E.a.Group,{controlId:"password",children:[Object(D.jsx)(E.a.Label,{children:"Password"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"password",placeholder:"Account Password"})]}),Object(D.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Login"}),Object(D.jsx)("small",{className:"text-muted ml-2",children:Object(D.jsx)(w.b,{to:"/forgot_password",children:"Forgot Password?"})})]})]}),Object(D.jsx)("div",{className:"border-top pt-3",children:Object(D.jsxs)("small",{className:"text-muted",children:["Need An Account? ",Object(D.jsx)(w.b,{className:"ml-2",to:"/register",children:"Sign Up Here!"})]})})]})}function Y(){var e=Object(k.f)();return Object(a.useEffect)((function(){localStorage.removeItem("token"),localStorage.removeItem("loginMessage"),e.push("/"),e.go("/")})),Object(D.jsx)("div",{})}var R=function(){return function(e){d()({method:"get",url:"/api/get_user",headers:{"x-access-token":localStorage.getItem("token")}}).then((function(t){console.log(t),e({type:O,payload:t.data})}))}},W=n(28),V=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={alert:!1,alertText:"Something went wrong, please try again later!",alertType:"warning",submission:!1},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"componentDidUpdate",value:function(){var e=this;this.state.submission&&(this.props.fetchUser(),this.setState({submission:!1})),this.state.alert&&setTimeout((function(){e.setState({alert:!1})}),5e3)}},{key:"renderAlert",value:function(){var e=this.state,t=e.alert,n=e.alertText,a=e.alertType;if(t)return Object(D.jsx)(q.a,{variant:a,children:n})}},{key:"handleSubmit",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.email.value.trim(),a=t.target.username.value.trim(),s=t.target.imageUpload.files[0],(r=new FormData(t.target)).append("username",a),r.append("email",n),r.append("image_file",s),e.prev=8,e.next=11,d()({headers:{"x-access-token":localStorage.getItem("token"),"Content-Type":"multipart/form-data"},method:"post",url:"/api/update_user",data:r});case 11:200===e.sent.status?this.setState({alert:!0,alertType:"success",alertText:"Successfully updated account info!",submission:!0}):this.setState({alert:!0}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),e.t0.response?(console.log(e.t0.response),400===e.t0.response.status?this.setState({alert:!0,alertType:"danger",alertText:"There was an issue updating your information, please try again later!"}):500===e.t0.response.status&&this.setState({alert:!0})):this.setState({alert:!0});case 18:case"end":return e.stop()}}),e,this,[[8,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.user;return Object(D.jsxs)("div",{children:[this.renderAlert(),Object(D.jsxs)("div",{className:"content-section",children:[Object(D.jsxs)(W.a,{children:[Object(D.jsx)("img",{width:64,height:64,className:"rounded-circle account-img",src:"https://zennitapp.s3.amazonaws.com/".concat(t.image_file),alt:"Current User Profile Avatar"}),Object(D.jsxs)(W.a.Body,{children:[Object(D.jsx)("h2",{className:"account-heading",children:t.username}),Object(D.jsx)("p",{className:"text-secondary",children:t.email})]})]}),Object(D.jsx)("legend",{className:"border-bottom mb-4",children:"Account Info"}),Object(D.jsxs)(E.a,{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(D.jsxs)(E.a.Group,{controlId:"email",children:[Object(D.jsx)(E.a.Label,{children:"Email"}),Object(D.jsx)(E.a.Control,{size:"lg",type:"email",placeholder:"New Email"})]}),Object(D.jsxs)(E.a.Group,{controlId:"username",children:[Object(D.jsx)(E.a.Label,{children:"Username"}),Object(D.jsx)(E.a.Control,{size:"lg",type:"username",placeholder:"New Username"})]}),Object(D.jsxs)(E.a.Group,{children:[Object(D.jsx)(E.a.File,{id:"imageUpload",label:"Update Profile Picture",accept:".png, .jpg, .jpeg","aria-describedby":"imageHelpBlock",name:"image_file"}),Object(D.jsx)(E.a.Text,{id:"imagedHelpBlock",muted:!0,children:"Your image must be a common format such as: .png .jpg .jpeg"})]}),Object(D.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Update"})]})]})]})}}]),n}(a.Component),F=Object(j.b)((function(e){return{user:e.users.item}}),{fetchUser:R})(V),J=function(){return function(e){d()({method:"get",url:"/api/posts"}).then((function(t){e({type:m,payload:t.data})}))}},Z=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(S.a)(this,a),(n=t.call(this,e)).state={postsViewable:4},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderDatePosted",value:function(e){var t=n(66)(e).format("dddd, MMMM Do YYYY, h:mm:ss a");return Object(D.jsx)("small",{className:"text-muted",children:t})}},{key:"renderArticleContent",value:function(e,t){return e.length>1e3?Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{className:"article-content",children:e.substr(0,1e3)}),Object(D.jsx)(w.b,{className:"mr-2",to:"/post/".concat(t),children:"Read More"})]}):Object(D.jsx)("div",{children:Object(D.jsx)("p",{className:"article-content",children:e})})}},{key:"renderProfileImage",value:function(e){return Object(D.jsx)("img",{className:"rounded-circle article-img",src:"https://zennitapp.s3.amazonaws.com/".concat(e),alt:""})}},{key:"renderPostContent",value:function(){var e=this,t=this.state.postsViewable;return this.props.posts.map((function(t){return Object(D.jsxs)(W.a,{className:"content-section",children:[e.renderProfileImage(t["user.image_file"]),Object(D.jsxs)(W.a.Body,{children:[Object(D.jsxs)("div",{className:"article-metadata",children:[Object(D.jsx)(w.b,{className:"mr-2",to:"/user_posts/".concat(t["user.username"]),children:t["user.username"]}),e.renderDatePosted(t.date_posted)]}),Object(D.jsx)("h2",{children:Object(D.jsx)(w.b,{className:"article-title",to:"/post/".concat(t.id),children:t.title})}),e.renderArticleContent(t.content,t.id)]})]},t.id)})).slice(0,t)}},{key:"renderMorePosts",value:function(e){var t=e.target,n=this.state.postsViewable,a=this.props.posts;t.scrollHeight-t.scrollTop===t.clientHeight&&n!==a.length&&this.setState({postsViewable:n+2},(function(){console.log(n)}))}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{className:"scrolling",onScroll:function(t){return e.renderMorePosts(t)},children:[Object(D.jsx)("h1",{children:"Home"}),this.renderPostContent()]})}}]),a}(a.Component),K=Object(j.b)((function(e){return{posts:e.posts.items}}),{fetchPosts:J})(Z),Q=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(S.a)(this,a),(n=t.call(this,e)).state={postsViewable:2},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderDatePosted",value:function(e){var t=n(66)(e).format("dddd, MMMM Do YYYY, h:mm:ss a");return Object(D.jsx)("small",{className:"text-muted",children:t})}},{key:"renderArticleContent",value:function(e,t){return e.length>1e3?Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{className:"article-content",children:e.substr(0,1e3)}),Object(D.jsx)(w.b,{className:"mr-2",to:"/post/".concat(t),children:"Read More"})]}):Object(D.jsx)("div",{children:Object(D.jsx)("p",{className:"article-content",children:e})})}},{key:"renderProfileImage",value:function(e){return Object(D.jsx)("img",{className:"rounded-circle article-img",src:"https://zennitapp.s3.amazonaws.com/".concat(e),alt:""})}},{key:"renderPostContent",value:function(){var e=this,t=this.state.postsViewable,n=this.props.match.params.username;return this.props.posts.filter((function(e){if(e["user.username"]===n)return!0})).map((function(t){return Object(D.jsxs)(W.a,{className:"content-section",children:[e.renderProfileImage(t["user.image_file"]),Object(D.jsxs)(W.a.Body,{children:[Object(D.jsxs)("div",{className:"article-metadata",children:[Object(D.jsx)(w.b,{className:"mr-2",to:"/user_posts/".concat(t["user.username"]),children:t["user.username"]}),e.renderDatePosted(t.date_posted)]}),Object(D.jsx)("h2",{children:Object(D.jsx)(w.b,{className:"article-title",to:"/post/".concat(t.id),children:t.title})}),e.renderArticleContent(t.content,t.id)]})]},t.id)})).slice(0,t)}},{key:"renderMorePosts",value:function(e){var t=e.target,n=this.state.postsViewable,a=this.props.posts;t.scrollHeight-t.scrollTop===t.clientHeight&&n!==a.length&&this.setState({postsViewable:n+2},(function(){console.log(n)}))}},{key:"render",value:function(){var e=this,t=this.props.match.params.username;return Object(D.jsxs)("div",{className:"scrolling",onScroll:function(t){return e.renderMorePosts(t)},children:[Object(D.jsx)("h1",{children:t}),this.renderPostContent()]})}}]),a}(a.Component),X=Object(h.d)(k.h,Object(j.b)((function(e){return{posts:e.posts.items}}),{fetchPosts:J}))(Q),$=n(46),ee=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(S.a)(this,a),(n=t.call(this,e)).state={modalToggle:!1,alert:!1,alertText:"Something went wrong, please try again later!",alertType:"warning"},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),localStorage.getItem("token")&&this.props.fetchUser()}},{key:"componentDidUpdate",value:function(){var e=this;this.state.alert&&setTimeout((function(){e.setState({alert:!1})}),5e3)}},{key:"renderAlert",value:function(){var e=this.state,t=e.alert,n=e.alertType,a=e.alertText;if(t)return Object(D.jsx)(q.a,{variant:n,children:a})}},{key:"handleModalToggle",value:function(){var e=this.state.modalToggle;this.setState({modalToggle:!e})}},{key:"handleDeletePost",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,d()({headers:{"x-access-token":localStorage.getItem("token")},method:"post",url:"/api/delete_post",data:{post_id:t}});case 4:n=e.sent,console.log(n),200===n.status?(localStorage.setItem("deletePost",!0),this.props.history.replace("/")):this.setState({alert:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response),this.setState({alert:!0});case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderDatePosted",value:function(e){var t=n(66)(e).format("dddd, MMMM Do YYYY, h:mm:ss a");return Object(D.jsx)("small",{className:"text-muted",children:t})}},{key:"renderProfileImage",value:function(e){return Object(D.jsx)("img",{className:"rounded-circle article-img",src:"https://zennitapp.s3.amazonaws.com/".concat(e),alt:""})}},{key:"renderEditButtons",value:function(e){var t=this,n=this.props.user.username,a=this.props.match.params.id;if(n===e&&localStorage.getItem("token"))return Object(D.jsxs)("div",{children:[Object(D.jsx)(B.a,{as:w.b,className:"mt-1 mb-1",size:"sm",to:"/update/post/".concat(a),children:"Update"}),Object(D.jsx)(B.a,{onClick:function(){return t.handleModalToggle()},className:"m-1",variant:"danger",size:"sm",children:"Delete"})]})}},{key:"renderPostContent",value:function(){var e=this,t=this.props.match.params.id;return this.props.posts.filter((function(e){if(e.id==t)return!0})).map((function(t){return Object(D.jsxs)(W.a,{className:"content-section",children:[e.renderProfileImage(t["user.image_file"]),Object(D.jsxs)(W.a.Body,{children:[Object(D.jsxs)("div",{className:"article-metadata",children:[Object(D.jsx)(w.b,{className:"mr-2",to:"/user_posts/".concat(t["user.username"]),children:t["user.username"]}),e.renderDatePosted(t.date_posted),e.renderEditButtons(t["user.username"])]}),Object(D.jsx)("h2",{children:Object(D.jsx)(w.b,{className:"article-title",to:"/post/".concat(t.id),children:t.title})}),Object(D.jsx)("p",{className:"article-content",children:t.content})]})]},t.id)}))}},{key:"render",value:function(){var e=this,t=this.state.modalToggle;return Object(D.jsxs)("div",{children:[this.renderAlert(),this.renderPostContent(),Object(D.jsx)($.a,{className:"fade",show:t,children:Object(D.jsxs)($.a.Dialog,{children:[Object(D.jsxs)($.a.Header,{children:[Object(D.jsx)($.a.Title,{children:"Delete Post?"}),Object(D.jsx)(B.a,{onClick:function(){return e.handleModalToggle()},variant:"close",children:Object(D.jsx)("span",{children:"\xd7"})})]}),Object(D.jsxs)($.a.Footer,{children:[Object(D.jsx)(B.a,{onClick:function(){return e.handleModalToggle()},variant:"secondary",children:"Close"}),Object(D.jsx)(B.a,{onClick:function(){return e.handleDeletePost()},variant:"danger",value:"delete",type:"submit",children:"Delete"})]})]})})]})}}]),a}(a.Component),te=Object(h.d)(k.h,Object(j.b)((function(e){return{posts:e.posts.items,user:e.users.item}}),{fetchPosts:J,fetchUser:R}))(ee);function ne(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("Something went wrong, please try again later!"),c=Object(l.a)(r,2),u=c[0],j=(c[1],Object(k.f)());function h(){return(h=Object(i.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.title.value.trim(),a=t.target.content.value.trim(),e.prev=3,e.next=6,d()({headers:{"x-access-token":localStorage.getItem("token")},method:"post",url:"/api/new_post",data:{title:n,content:a}});case 6:r=e.sent,console.log(r),201===r.status?(localStorage.setItem("newPost",!0),j.replace("/")):s(!0),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0.response),s(!0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){n&&n&&setTimeout((function(){s(!1)}),5e3)})),Object(D.jsxs)("div",{children:[function(){if(n)return Object(D.jsx)(q.a,{variant:"danger",children:u})}(),Object(D.jsxs)("div",{className:"content-section",children:[Object(D.jsx)("legend",{className:"border-bottom mb-4",children:"New Post"}),Object(D.jsxs)(E.a,{onSubmit:function(e){return function(e){return h.apply(this,arguments)}(e)},children:[Object(D.jsxs)(E.a.Group,{controlId:"title",children:[Object(D.jsx)(E.a.Label,{children:"Title"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"title",placeholder:"Post Title"})]}),Object(D.jsxs)(E.a.Group,{controlId:"content",children:[Object(D.jsx)(E.a.Label,{children:"Content"}),Object(D.jsx)(E.a.Control,{required:!0,as:"textarea",rows:"10",size:"lg",type:"content",placeholder:"Post Content"})]}),Object(D.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Post"})]})]})]})}var ae=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={modalToggle:!1,alert:!1,alertText:"Something went wrong, please try again later!",alertType:"warning"},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),this.props.fetchUser()}},{key:"componentDidUpdate",value:function(){var e=this;this.state.alert&&setTimeout((function(){e.setState({alert:!1})}),5e3)}},{key:"renderAlert",value:function(){var e=this.state,t=e.alert,n=e.alertType,a=e.alertText;if(t)return Object(D.jsx)(q.a,{variant:n,children:a})}},{key:"handleUpdatePost",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.props.match.params.id,a=t.target.title.value.trim(),s=t.target.content.value.trim(),e.prev=4,e.next=7,d()({headers:{"x-access-token":localStorage.getItem("token")},method:"post",url:"/api/update_post",data:{title:a,content:s,post_id:n}});case 7:r=e.sent,console.log(r),200===r.status?(localStorage.setItem("updatePost",!0),this.props.history.replace("/")):this.setState({alert:!0}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0.response),this.setState({alert:!0});case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderPostContent",value:function(){var e=this,t=this.props.match.params.id;return this.props.posts.filter((function(e){if(e.id==t)return!0})).map((function(t){return Object(D.jsxs)("div",{className:"content-section",children:[Object(D.jsx)("legend",{className:"border-bottom mb-4",children:t.title}),Object(D.jsxs)(E.a,{onSubmit:function(t){return e.handleUpdatePost(t)},children:[Object(D.jsxs)(E.a.Group,{controlId:"title",children:[Object(D.jsx)(E.a.Label,{children:"Title"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"title",defaultValue:t.title})]}),Object(D.jsxs)(E.a.Group,{controlId:"content",children:[Object(D.jsx)(E.a.Label,{children:"Content"}),Object(D.jsx)(E.a.Control,{required:!0,as:"textarea",rows:"10",size:"lg",type:"content",defaultValue:t.content})]}),Object(D.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Update"})]})]},t.id)}))}},{key:"render",value:function(){return Object(D.jsxs)("div",{children:[this.renderAlert(),this.renderPostContent()]})}}]),n}(a.Component),se=Object(h.d)(k.h,Object(j.b)((function(e){return{posts:e.posts.items,user:e.users.item}}),{fetchPosts:J,fetchUser:R}))(ae);function re(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=(t[0],t[1],Object(a.useState)(!1)),s=Object(l.a)(n,2),r=s[0],c=s[1],u=Object(a.useState)("Something went wrong, please try again later!"),j=Object(l.a)(u,2),h=j[0],b=j[1],p=Object(a.useState)("warning"),m=Object(l.a)(p,2),O=m[0],x=m[1];Object(k.f)();function g(){return(g=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.email.value.trim(),e.prev=2,e.next=5,d()({method:"post",url:"/api/request_reset_email",data:{email:n}});case 5:a=e.sent,console.log(a),200===a.status?(c(!0),x("success"),b("Request Sent! Check Email For Password Reset Link!")):(c(!0),x("warning"),b("Something Went Wrong, Please Try Again Later!")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.response),400===e.t0.response.status?(c(!0),x("warning"),b("No User Found By This Email! Try Again!")):(c(!0),x("danger"),b("Something Went Wrong, Please Try Again Later!"));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){r&&setTimeout((function(){c(!1)}),9e3)})),Object(D.jsxs)("div",{children:[function(){if(r)return Object(D.jsx)(q.a,{variant:O,children:h})}(),Object(D.jsxs)("div",{className:"content-section",children:[Object(D.jsx)("legend",{className:"border-bottom mb-4",children:"Reset Password"}),Object(D.jsxs)(E.a,{onSubmit:function(e){return function(e){return g.apply(this,arguments)}(e)},children:[Object(D.jsxs)(E.a.Group,{controlId:"email",children:[Object(D.jsx)(E.a.Label,{children:"Email"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"email",placeholder:"Account Email"})]}),Object(D.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Request Password Reset"})]})]})]})}function ce(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("Something went wrong, please try again later!"),c=Object(l.a)(r,2),u=c[0],j=c[1],h=Object(a.useState)("warning"),b=Object(l.a)(h,2),p=b[0],m=b[1],O=(Object(k.f)(),Object(k.g)().token);function x(){return(x=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.password.value,e.prev=2,e.next=5,d()({method:"post",url:"/api/reset_password",data:{password:n,token:O}});case 5:a=e.sent,console.log(a),200===a.status?(s(!0),m("success"),j("Password Has Been Reset!")):(s(!0),m("warning"),j("Something Went Wrong, Please Try Again Later!")),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),s(!0),m("danger"),j("Something Went Wrong, Please Try Again Later!");case 16:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){n&&setTimeout((function(){s(!1)}),5e3)})),Object(D.jsxs)("div",{children:[function(){if(n)return Object(D.jsx)(q.a,{variant:p,children:u})}(),Object(D.jsxs)("div",{className:"content-section",children:[Object(D.jsx)("legend",{className:"border-bottom mb-4",children:"New Password"}),Object(D.jsxs)(E.a,{onSubmit:function(e){return function(e){return x.apply(this,arguments)}(e)},children:[Object(D.jsxs)(E.a.Group,{controlId:"password",children:[Object(D.jsx)(E.a.Label,{children:"New Password"}),Object(D.jsx)(E.a.Control,{required:!0,size:"lg",type:"password",placeholder:"New Password"})]}),Object(D.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Reset Password"})]})]})]})}var oe=n(82);var ie=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),c=Object(l.a)(r,2),u=c[0],h=c[1],b=Object(a.useState)("Welcome!"),p=Object(l.a)(b,2),m=p[0],O=p[1],x=localStorage.getItem("loginMessage"),g=localStorage.getItem("token");function f(){return(f=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=4;break}s(!1),e.next=16;break;case 4:return e.prev=4,e.next=7,d()({method:"get",url:"/api/verify_jwt",headers:{"x-access-token":localStorage.getItem("token")}});case 7:t=e.sent,console.log(t),200===t.status?(s(!0),h(!0),O("Login Successful! Welcome Back!")):(console.log("Token is invalid"),localStorage.removeItem("token")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("could not connect to authorization check"),localStorage.removeItem("token");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[n||!g]),Object(D.jsx)(j.a,{store:y,children:Object(D.jsx)(w.a,{children:Object(D.jsxs)("div",{className:"main-body",children:[Object(D.jsx)(M,{authorization:n}),Object(D.jsx)(_.a,{children:Object(D.jsxs)(oe.a,{children:[Object(D.jsxs)("div",{className:"col-md-8",children:[function(){if(u&&n&&x)return setTimeout((function(){h(!1),O("Welcome!"),localStorage.removeItem("loginMessage")}),5e3),Object(D.jsx)(q.a,{variant:"success",children:m})}(),Object(D.jsxs)(k.c,{children:[Object(D.jsx)(k.a,{exact:!0,path:"/",children:Object(D.jsx)(K,{alert:u})}),Object(D.jsx)(k.a,{path:"/home",children:Object(D.jsx)(K,{alert:u})}),Object(D.jsx)(k.a,{path:"/user_posts/:username",children:Object(D.jsx)(X,{})}),Object(D.jsx)(k.a,{path:"/post/:id",children:Object(D.jsx)(te,{})}),Object(D.jsx)(k.a,{path:"/update/post/:id",children:Object(D.jsx)(se,{})}),Object(D.jsx)(k.a,{path:"/about",children:Object(D.jsx)(A,{})}),Object(D.jsx)(k.a,{path:"/account",children:Object(D.jsx)(F,{})}),Object(D.jsx)(k.a,{path:"/forgot_password",children:Object(D.jsx)(re,{})}),Object(D.jsx)(k.a,{path:"/reset_password/:token",children:Object(D.jsx)(ce,{})}),Object(D.jsx)(k.a,{path:"/register",children:Object(D.jsx)(H,{})}),Object(D.jsx)(k.a,{path:"/new_post",children:Object(D.jsx)(ne,{})}),Object(D.jsx)(k.a,{path:"/login",children:Object(D.jsx)(G,{})}),Object(D.jsx)(k.a,{path:"/logout",children:Object(D.jsx)(Y,{})})]})]}),Object(D.jsx)(U,{})]})})]})})})};r.a.render(Object(D.jsx)(ie,{}),document.getElementById("root"))},25:function(e,t,n){},87:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.37f8aa71.chunk.js.map