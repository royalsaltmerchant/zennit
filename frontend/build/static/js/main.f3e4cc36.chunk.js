(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(34),r=a.n(s),c=(a(87),a(9)),o=a.n(c),i=a(15),l=a(12),u=a(10),d=a.n(u),j=a(27),h=a(23),b=a(81),p=a(45),m="FETCH_POSTS",O="FETCH_USER",x={items:[],item:{}},g={item:{}},f=Object(h.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(p.a)(Object(p.a)({},e),{},{items:t.payload});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(p.a)(Object(p.a)({},e),{},{item:t.payload});default:return e}}}),v=[b.a],y=Object(h.e)(f,{},Object(h.d)(h.a.apply(void 0,v))),w=a(8),k=a(11),S=a(17),N=a(18),P=a(21),T=a(20),C=(a(25),a(51)),I=a(33),A=a(35),D=a(60),L=a(1),M=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(e){return Object(S.a)(this,a),t.call(this,e)}return Object(N.a)(a,[{key:"renderNavbarAccountOptions",value:function(){return this.props.authorization?Object(L.jsxs)(I.a,{children:[Object(L.jsx)(A.a,{children:Object(L.jsx)(I.a.Link,{as:w.b,to:"/new_post",children:"New Post"})}),Object(L.jsx)(A.a,{children:Object(L.jsx)(I.a.Link,{as:w.b,to:"/account",children:"Account"})}),Object(L.jsx)(A.a,{children:Object(L.jsx)(I.a.Link,{as:w.b,to:"/logout",children:"Logout"})})]}):Object(L.jsxs)(I.a,{children:[Object(L.jsx)(A.a,{children:Object(L.jsx)(I.a.Link,{as:w.b,to:"/login",children:"Login"})}),Object(L.jsx)(A.a,{children:Object(L.jsx)(I.a.Link,{as:w.b,to:"/register",children:"Register"})})]})}},{key:"render",value:function(){return Object(L.jsx)("div",{children:Object(L.jsx)(C.a,{expand:"md",bg:"color",variant:"dark",collapseOnSelect:!0,children:Object(L.jsxs)(D.a,{children:[Object(L.jsx)(C.a.Brand,{as:w.b,className:"mr-4",to:"/home",children:"Zennit"}),Object(L.jsx)(C.a.Toggle,{"aria-controls":"navbarToggle"}),Object(L.jsxs)(C.a.Collapse,{id:"navbarToggle",children:[Object(L.jsxs)(I.a,{className:"mr-auto",children:[Object(L.jsx)(A.a,{children:Object(L.jsx)(I.a.Link,{as:w.b,to:"/home",children:"Home"})}),Object(L.jsx)(A.a,{children:Object(L.jsx)(I.a.Link,{as:w.b,to:"/about",children:"About"})})]}),this.renderNavbarAccountOptions()]})]})})})}}]),a}(n.Component),_=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return Object(L.jsx)("div",{children:Object(L.jsx)("h1",{children:"About Page"})})}}]),a}(n.Component),U=a(47),z=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(){return Object(S.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return Object(L.jsx)("div",{className:"col-md-4",children:Object(L.jsxs)("div",{className:"content-section",children:[Object(L.jsx)("h3",{children:"Sidebar"}),Object(L.jsxs)("div",{className:"text-muted",children:["Sidebar under construction",Object(L.jsxs)(U.a,{children:[Object(L.jsx)(U.a.Item,{className:"list-group-item list-group-item-light",children:"Latest Posts"}),Object(L.jsx)(U.a.Item,{className:"list-group-item list-group-item-light",children:"Announcements"}),Object(L.jsx)(U.a.Item,{className:"list-group-item list-group-item-light",children:"Calendars"}),Object(L.jsx)(U.a.Item,{className:"list-group-item list-group-item-light",children:"etc"})]})]})]})})}}]),a}(n.Component),E=a(6),B=a(13);function H(e){var t=Object(k.f)();function a(){return(a=Object(i.a)(o.a.mark((function e(a){var n,s,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t.push("/login"),n=a.target.username.value.trim(),s=a.target.email.value.trim(),r=a.target.password.value,e.prev=5,e.next=8,d()({method:"post",url:"/api/register",data:{username:n,email:s,password:r}});case 8:c=e.sent,console.log(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}return Object(L.jsxs)("div",{children:[Object(L.jsxs)("div",{className:"content-section",children:[Object(L.jsx)("legend",{className:"border-bottom mb-4",children:"Join Zennit!"}),Object(L.jsxs)(E.a,{onSubmit:function(e){return function(e){return a.apply(this,arguments)}(e)},children:[Object(L.jsxs)(E.a.Group,{controlId:"username",children:[Object(L.jsx)(E.a.Label,{children:"Username"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"username",placeholder:"Username"})]}),Object(L.jsxs)(E.a.Group,{controlId:"email",children:[Object(L.jsx)(E.a.Label,{children:"Email"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"email",placeholder:"Enter email"}),Object(L.jsx)(E.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(L.jsxs)(E.a.Group,{controlId:"password",children:[Object(L.jsx)(E.a.Label,{children:"Password"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"password",placeholder:"Password","aria-describedby":"passwordHelpBlock"}),Object(L.jsx)(E.a.Text,{id:"passwordHelpBlock",muted:!0,children:"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."})]}),Object(L.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Sign Up"})]})]}),Object(L.jsx)("div",{className:"border-top pt-3",children:Object(L.jsxs)("small",{className:"text-muted",children:["Already Have An Account? ",Object(L.jsx)(w.b,{className:"ml-2",to:"/login",children:"Sign In"})]})})]})}var q=a(19);function G(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=(t[0],t[1]),s=Object(n.useState)(!1),r=Object(l.a)(s,2),c=r[0],u=r[1],j=Object(n.useState)("warning"),h=Object(l.a)(j,2),b=h[0],p=h[1],m=Object(n.useState)("Something went wrong, please try again later!"),O=Object(l.a)(m,2),x=O[0],g=O[1],f=Object(k.f)();function v(){return(v=Object(i.a)(o.a.mark((function e(t){var n,s,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.email.value.trim(),s=t.target.password.value,e.prev=3,e.next=6,d()({method:"post",url:"/api/login",data:{email:n,password:s}});case 6:r=e.sent,console.log(r),200===r.status?(c=r.data.token,localStorage.setItem("token","Bearer "+c),localStorage.setItem("loginMessage",!0),a(!0),f.replace("/"),f.go("/")):(a(!1),u(!0),p("warning"),g("Something went wrong, please try again later!")),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),a(!1),console.log(e.t0.response),400===e.t0.response.status?(u(!0),p("warning"),g("Incorrect Email or Password")):(u(!0),p("danger"),g("Something went wrong, please try again later!"));case 16:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){c&&setTimeout((function(){u(!1)}),5e3)})),Object(L.jsxs)("div",{children:[function(){if(c)return Object(L.jsx)(q.a,{variant:b,children:x})}(),Object(L.jsxs)("div",{className:"content-section",children:[Object(L.jsx)("legend",{className:"border-bottom mb-4",children:"Login"}),Object(L.jsxs)(E.a,{onSubmit:function(e){return function(e){return v.apply(this,arguments)}(e)},children:[Object(L.jsxs)(E.a.Group,{controlId:"email",children:[Object(L.jsx)(E.a.Label,{children:"Email"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"email",placeholder:"Account Email"})]}),Object(L.jsxs)(E.a.Group,{controlId:"password",children:[Object(L.jsx)(E.a.Label,{children:"Password"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"password",placeholder:"Account Password"})]}),Object(L.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Login"}),Object(L.jsx)("small",{className:"text-muted ml-2",children:Object(L.jsx)(w.b,{to:"/forgot_password",children:"Forgot Password?"})})]})]}),Object(L.jsx)("div",{className:"border-top pt-3",children:Object(L.jsxs)("small",{className:"text-muted",children:["Need An Account? ",Object(L.jsx)(w.b,{className:"ml-2",to:"/register",children:"Sign Up Here!"})]})})]})}function Y(){var e=Object(k.f)();return Object(n.useEffect)((function(){localStorage.removeItem("token"),localStorage.removeItem("loginMessage"),e.push("/"),e.go("/")})),Object(L.jsx)("div",{})}var W=function(){return function(e){d()({method:"get",url:"/api/get_user",headers:{"x-access-token":localStorage.getItem("token")}}).then((function(t){console.log(t),e({type:O,payload:t.data})}))}},R=a(28),V=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(S.a)(this,a),(n=t.call(this,e)).state={alert:!1,alertText:"Something went wrong, please try again later!",alertType:"warning",submission:!1},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"componentDidUpdate",value:function(){var e=this;this.state.submission&&(this.props.fetchUser(),this.setState({submission:!1})),this.state.alert&&setTimeout((function(){e.setState({alert:!1})}),5e3)}},{key:"renderAlert",value:function(){var e=this.state,t=e.alert,a=e.alertText,n=e.alertType;if(t)return Object(L.jsx)(q.a,{variant:n,children:a})}},{key:"handleSubmit",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.email.value.trim(),n=t.target.username.value.trim(),s=t.target.imageUpload.files[0],(r=new FormData(t.target)).append("username",n),r.append("email",a),r.append("image_file",s),e.prev=8,e.next=11,d()({headers:{"x-access-token":localStorage.getItem("token"),"Content-Type":"multipart/form-data"},method:"post",url:"/api/update_user",data:r});case 11:200===e.sent.status?this.setState({alert:!0,alertType:"success",alertText:"Successfully updated account info!",submission:!0}):this.setState({alert:!0}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),e.t0.response?(console.log(e.t0.response),400===e.t0.response.status?this.setState({alert:!0,alertType:"danger",alertText:"There was an issue updating your information, please try again later!"}):500===e.t0.response.status&&this.setState({alert:!0})):this.setState({alert:!0});case 18:case"end":return e.stop()}}),e,this,[[8,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.user;return Object(L.jsxs)("div",{children:[this.renderAlert(),Object(L.jsxs)("div",{className:"content-section",children:[Object(L.jsxs)(R.a,{children:[Object(L.jsx)("img",{width:64,height:64,className:"rounded-circle account-img",src:"https://zennitapp.s3.amazonaws.com/".concat(t.image_file),alt:"Current User Profile Avatar"}),Object(L.jsxs)(R.a.Body,{children:[Object(L.jsx)("h2",{className:"account-heading",children:t.username}),Object(L.jsx)("p",{className:"text-secondary",children:t.email})]})]}),Object(L.jsx)("legend",{className:"border-bottom mb-4",children:"Account Info"}),Object(L.jsxs)(E.a,{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(L.jsxs)(E.a.Group,{controlId:"email",children:[Object(L.jsx)(E.a.Label,{children:"Email"}),Object(L.jsx)(E.a.Control,{size:"lg",type:"email",placeholder:"New Email"})]}),Object(L.jsxs)(E.a.Group,{controlId:"username",children:[Object(L.jsx)(E.a.Label,{children:"Username"}),Object(L.jsx)(E.a.Control,{size:"lg",type:"username",placeholder:"New Username"})]}),Object(L.jsxs)(E.a.Group,{children:[Object(L.jsx)(E.a.File,{id:"imageUpload",label:"Update Profile Picture",accept:".png, .jpg, .jpeg","aria-describedby":"imageHelpBlock",name:"image_file"}),Object(L.jsx)(E.a.Text,{id:"imagedHelpBlock",muted:!0,children:"Your image must be a common format such as: .png .jpg .jpeg"})]}),Object(L.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Update"})]})]})]})}}]),a}(n.Component),F=Object(j.b)((function(e){return{user:e.users.item}}),{fetchUser:W})(V),J=function(){return function(e){d()({method:"get",url:"/api/posts"}).then((function(t){e({type:m,payload:t.data})}))}},Z=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={postsViewable:4},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderDatePosted",value:function(e){var t=a(66)(e).format("dddd, MMMM Do YYYY, h:mm:ss a");return Object(L.jsx)("small",{className:"text-muted",children:t})}},{key:"renderArticleContent",value:function(e,t){return e.length>1e3?Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:"article-content",children:e.substr(0,1e3)}),Object(L.jsx)(w.b,{className:"mr-2",to:"/post/".concat(t),children:"Read More"})]}):Object(L.jsx)("div",{children:Object(L.jsx)("p",{className:"article-content",children:e})})}},{key:"renderProfileImage",value:function(e){return Object(L.jsx)("img",{className:"rounded-circle article-img",src:"https://zennitapp.s3.amazonaws.com/".concat(e),alt:""})}},{key:"renderPostContent",value:function(){var e=this,t=this.state.postsViewable;return this.props.posts.map((function(t){return Object(L.jsxs)(R.a,{className:"content-section",children:[e.renderProfileImage(t["user.image_file"]),Object(L.jsxs)(R.a.Body,{children:[Object(L.jsxs)("div",{className:"article-metadata",children:[Object(L.jsx)(w.b,{className:"mr-2",to:"/user_posts/".concat(t["user.username"]),children:t["user.username"]}),e.renderDatePosted(t.date_posted)]}),Object(L.jsx)("h2",{children:Object(L.jsx)(w.b,{className:"article-title",to:"/post/".concat(t.id),children:t.title})}),e.renderArticleContent(t.content,t.id)]})]},t.id)})).slice(0,t)}},{key:"renderMorePosts",value:function(e){var t=e.target,a=this.state.postsViewable,n=this.props.posts;t.scrollHeight-t.scrollTop===t.clientHeight&&a!==n.length&&this.setState({postsViewable:a+2},(function(){console.log(a)}))}},{key:"render",value:function(){var e=this;return Object(L.jsxs)("div",{className:"scrolling",onScroll:function(t){return e.renderMorePosts(t)},children:[Object(L.jsx)("h1",{children:"Home"}),this.renderPostContent()]})}}]),n}(n.Component),K=Object(j.b)((function(e){return{posts:e.posts.items}}),{fetchPosts:J})(Z),Q=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={postsViewable:2},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderDatePosted",value:function(e){var t=a(66)(e).format("dddd, MMMM Do YYYY, h:mm:ss a");return Object(L.jsx)("small",{className:"text-muted",children:t})}},{key:"renderArticleContent",value:function(e,t){return e.length>1e3?Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{className:"article-content",children:e.substr(0,1e3)}),Object(L.jsx)(w.b,{className:"mr-2",to:"/post/".concat(t),children:"Read More"})]}):Object(L.jsx)("div",{children:Object(L.jsx)("p",{className:"article-content",children:e})})}},{key:"renderProfileImage",value:function(e){return Object(L.jsx)("img",{className:"rounded-circle article-img",src:"https://zennitapp.s3.amazonaws.com/".concat(e),alt:""})}},{key:"renderPostContent",value:function(){var e=this,t=this.state.postsViewable,a=this.props.match.params.username;return this.props.posts.filter((function(e){if(e["user.username"]===a)return!0})).map((function(t){return Object(L.jsxs)(R.a,{className:"content-section",children:[e.renderProfileImage(t["user.image_file"]),Object(L.jsxs)(R.a.Body,{children:[Object(L.jsxs)("div",{className:"article-metadata",children:[Object(L.jsx)(w.b,{className:"mr-2",to:"/user_posts/".concat(t["user.username"]),children:t["user.username"]}),e.renderDatePosted(t.date_posted)]}),Object(L.jsx)("h2",{children:Object(L.jsx)(w.b,{className:"article-title",to:"/post/".concat(t.id),children:t.title})}),e.renderArticleContent(t.content,t.id)]})]},t.id)})).slice(0,t)}},{key:"renderMorePosts",value:function(e){var t=e.target,a=this.state.postsViewable,n=this.props.posts;t.scrollHeight-t.scrollTop===t.clientHeight&&a!==n.length&&this.setState({postsViewable:a+2},(function(){console.log(a)}))}},{key:"render",value:function(){var e=this,t=this.props.match.params.username;return Object(L.jsxs)("div",{className:"scrolling",onScroll:function(t){return e.renderMorePosts(t)},children:[Object(L.jsx)("h1",{children:t}),this.renderPostContent()]})}}]),n}(n.Component),X=Object(h.d)(k.h,Object(j.b)((function(e){return{posts:e.posts.items}}),{fetchPosts:J}))(Q),$=a(46),ee=function(e){Object(P.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(S.a)(this,n),(a=t.call(this,e)).state={modalToggle:!1,alert:!1,alertText:"Something went wrong, please try again later!",alertType:"warning"},a}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),localStorage.getItem("token")&&this.props.fetchUser()}},{key:"componentDidUpdate",value:function(){var e=this;this.state.alert&&setTimeout((function(){e.setState({alert:!1})}),5e3)}},{key:"renderAlert",value:function(){var e=this.state,t=e.alert,a=e.alertType,n=e.alertText;if(t)return Object(L.jsx)(q.a,{variant:a,children:n})}},{key:"handleModalToggle",value:function(){var e=this.state.modalToggle;this.setState({modalToggle:!e})}},{key:"handleDeletePost",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,d()({headers:{"x-access-token":localStorage.getItem("token")},method:"post",url:"/api/delete_post",data:{post_id:t}});case 4:a=e.sent,console.log(a),200===a.status?(localStorage.setItem("deletePost",!0),this.props.history.replace("/")):this.setState({alert:!0}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response),this.setState({alert:!0});case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderDatePosted",value:function(e){var t=a(66)(e).format("dddd, MMMM Do YYYY, h:mm:ss a");return Object(L.jsx)("small",{className:"text-muted",children:t})}},{key:"renderProfileImage",value:function(e){return Object(L.jsx)("img",{className:"rounded-circle article-img",src:"https://zennitapp.s3.amazonaws.com/".concat(e),alt:""})}},{key:"renderEditButtons",value:function(e){var t=this,a=this.props.user.username,n=this.props.match.params.id;if(a===e&&localStorage.getItem("token"))return Object(L.jsxs)("div",{children:[Object(L.jsx)(B.a,{as:w.b,className:"mt-1 mb-1",size:"sm",to:"/update/post/".concat(n),children:"Update"}),Object(L.jsx)(B.a,{onClick:function(){return t.handleModalToggle()},className:"m-1",variant:"danger",size:"sm",children:"Delete"})]})}},{key:"renderPostContent",value:function(){var e=this,t=this.props.match.params.id;return this.props.posts.filter((function(e){if(e.id==t)return!0})).map((function(t){return Object(L.jsxs)(R.a,{className:"content-section",children:[e.renderProfileImage(t["user.image_file"]),Object(L.jsxs)(R.a.Body,{children:[Object(L.jsxs)("div",{className:"article-metadata",children:[Object(L.jsx)(w.b,{className:"mr-2",to:"/user_posts/".concat(t["user.username"]),children:t["user.username"]}),e.renderDatePosted(t.date_posted),e.renderEditButtons(t["user.username"])]}),Object(L.jsx)("h2",{children:Object(L.jsx)(w.b,{className:"article-title",to:"/post/".concat(t.id),children:t.title})}),Object(L.jsx)("p",{className:"article-content",children:t.content})]})]},t.id)}))}},{key:"render",value:function(){var e=this,t=this.state.modalToggle;return Object(L.jsxs)("div",{children:[this.renderAlert(),this.renderPostContent(),Object(L.jsx)($.a,{className:"fade",show:t,children:Object(L.jsxs)($.a.Dialog,{children:[Object(L.jsxs)($.a.Header,{children:[Object(L.jsx)($.a.Title,{children:"Delete Post?"}),Object(L.jsx)(B.a,{onClick:function(){return e.handleModalToggle()},variant:"close",children:Object(L.jsx)("span",{children:"\xd7"})})]}),Object(L.jsxs)($.a.Footer,{children:[Object(L.jsx)(B.a,{onClick:function(){return e.handleModalToggle()},variant:"secondary",children:"Close"}),Object(L.jsx)(B.a,{onClick:function(){return e.handleDeletePost()},variant:"danger",value:"delete",type:"submit",children:"Delete"})]})]})})]})}}]),n}(n.Component),te=Object(h.d)(k.h,Object(j.b)((function(e){return{posts:e.posts.items,user:e.users.item}}),{fetchPosts:J,fetchUser:W}))(ee);function ae(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)("Something went wrong, please try again later!"),c=Object(l.a)(r,2),u=c[0],j=(c[1],Object(k.f)());function h(){return(h=Object(i.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.title.value.trim(),n=t.target.content.value.trim(),e.prev=3,e.next=6,d()({headers:{"x-access-token":localStorage.getItem("token")},method:"post",url:"/api/new_post",data:{title:a,content:n}});case 6:r=e.sent,console.log(r),201===r.status?(localStorage.setItem("newPost",!0),j.replace("/")):s(!0),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0.response),s(!0);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){a&&a&&setTimeout((function(){s(!1)}),5e3)})),Object(L.jsxs)("div",{children:[function(){if(a)return Object(L.jsx)(q.a,{variant:"danger",children:u})}(),Object(L.jsxs)("div",{className:"content-section",children:[Object(L.jsx)("legend",{className:"border-bottom mb-4",children:"New Post"}),Object(L.jsxs)(E.a,{onSubmit:function(e){return function(e){return h.apply(this,arguments)}(e)},children:[Object(L.jsxs)(E.a.Group,{controlId:"title",children:[Object(L.jsx)(E.a.Label,{children:"Title"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"title",placeholder:"Post Title"})]}),Object(L.jsxs)(E.a.Group,{controlId:"content",children:[Object(L.jsx)(E.a.Label,{children:"Content"}),Object(L.jsx)(E.a.Control,{required:!0,as:"textarea",rows:"10",size:"lg",type:"content",placeholder:"Post Content"})]}),Object(L.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Post"})]})]})]})}var ne=function(e){Object(P.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(S.a)(this,a),(n=t.call(this,e)).state={modalToggle:!1,alert:!1,alertText:"Something went wrong, please try again later!",alertType:"warning"},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPosts(),this.props.fetchUser()}},{key:"componentDidUpdate",value:function(){var e=this;this.state.alert&&setTimeout((function(){e.setState({alert:!1})}),5e3)}},{key:"renderAlert",value:function(){var e=this.state,t=e.alert,a=e.alertType,n=e.alertText;if(t)return Object(L.jsx)(q.a,{variant:a,children:n})}},{key:"handleUpdatePost",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.props.match.params.id,n=t.target.title.value.trim(),s=t.target.content.value.trim(),e.prev=4,e.next=7,d()({headers:{"x-access-token":localStorage.getItem("token")},method:"post",url:"/api/update_post",data:{title:n,content:s,post_id:a}});case 7:r=e.sent,console.log(r),200===r.status?(localStorage.setItem("updatePost",!0),this.props.history.replace("/")):this.setState({alert:!0}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0.response),this.setState({alert:!0});case 16:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderPostContent",value:function(){var e=this,t=this.props.match.params.id;return this.props.posts.filter((function(e){if(e.id==t)return!0})).map((function(t){return Object(L.jsxs)("div",{className:"content-section",children:[Object(L.jsx)("legend",{className:"border-bottom mb-4",children:t.title}),Object(L.jsxs)(E.a,{onSubmit:function(t){return e.handleUpdatePost(t)},children:[Object(L.jsxs)(E.a.Group,{controlId:"title",children:[Object(L.jsx)(E.a.Label,{children:"Title"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"title",defaultValue:t.title})]}),Object(L.jsxs)(E.a.Group,{controlId:"content",children:[Object(L.jsx)(E.a.Label,{children:"Content"}),Object(L.jsx)(E.a.Control,{required:!0,as:"textarea",rows:"10",size:"lg",type:"content",defaultValue:t.content})]}),Object(L.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Update"})]})]},t.id)}))}},{key:"render",value:function(){return Object(L.jsxs)("div",{children:[this.renderAlert(),this.renderPostContent()]})}}]),a}(n.Component),se=Object(h.d)(k.h,Object(j.b)((function(e){return{posts:e.posts.items,user:e.users.item}}),{fetchPosts:J,fetchUser:W}))(ne);function re(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=(t[0],t[1],Object(n.useState)(!1)),s=Object(l.a)(a,2),r=s[0],c=s[1],u=Object(n.useState)("Something went wrong, please try again later!"),j=Object(l.a)(u,2),h=j[0],b=j[1],p=Object(n.useState)("warning"),m=Object(l.a)(p,2),O=m[0],x=m[1];Object(k.f)();function g(){return(g=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.email.value.trim(),e.prev=2,e.next=5,d()({method:"post",url:"/api/request_reset_email",data:{email:a}});case 5:n=e.sent,console.log(n),200===n.status?(c(!0),x("success"),b("Request Sent! Check Email For Password Reset Link!")):(c(!0),x("warning"),b("Something Went Wrong, Please Try Again Later!")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.response),400===e.t0.response.status?(c(!0),x("warning"),b("No User Found By This Email! Try Again!")):(c(!0),x("danger"),b("Something Went Wrong, Please Try Again Later!"));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){r&&setTimeout((function(){c(!1)}),9e3)})),Object(L.jsxs)("div",{children:[function(){if(r)return Object(L.jsx)(q.a,{variant:O,children:h})}(),Object(L.jsxs)("div",{className:"content-section",children:[Object(L.jsx)("legend",{className:"border-bottom mb-4",children:"Reset Password"}),Object(L.jsxs)(E.a,{onSubmit:function(e){return function(e){return g.apply(this,arguments)}(e)},children:[Object(L.jsxs)(E.a.Group,{controlId:"email",children:[Object(L.jsx)(E.a.Label,{children:"Email"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"email",placeholder:"Account Email"})]}),Object(L.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Request Password Reset"})]})]})]})}function ce(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)("Something went wrong, please try again later!"),c=Object(l.a)(r,2),u=c[0],j=c[1],h=Object(n.useState)("warning"),b=Object(l.a)(h,2),p=b[0],m=b[1],O=(Object(k.f)(),Object(k.g)().token);function x(){return(x=Object(i.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.password.value,e.prev=2,e.next=5,d()({method:"post",url:"/api/reset_password",data:{password:a,token:O}});case 5:n=e.sent,console.log(n),200===n.status?(s(!0),m("success"),j("Password Has Been Reset!")):(s(!0),m("warning"),j("Something Went Wrong, Please Try Again Later!")),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),s(!0),m("danger"),j("Something Went Wrong, Please Try Again Later!");case 16:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){a&&setTimeout((function(){s(!1)}),5e3)})),Object(L.jsxs)("div",{children:[function(){if(a)return Object(L.jsx)(q.a,{variant:p,children:u})}(),Object(L.jsxs)("div",{className:"content-section",children:[Object(L.jsx)("legend",{className:"border-bottom mb-4",children:"New Password"}),Object(L.jsxs)(E.a,{onSubmit:function(e){return function(e){return x.apply(this,arguments)}(e)},children:[Object(L.jsxs)(E.a.Group,{controlId:"password",children:[Object(L.jsx)(E.a.Label,{children:"New Password"}),Object(L.jsx)(E.a.Control,{required:!0,size:"lg",type:"password",placeholder:"New Password"})]}),Object(L.jsx)(B.a,{variant:"outline-info",type:"submit",children:"Reset Password"})]})]})]})}var oe=a(82);var ie=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(!1),c=Object(l.a)(r,2),u=c[0],h=c[1],b=Object(n.useState)("Welcome!"),p=Object(l.a)(b,2),m=p[0],O=p[1],x=localStorage.getItem("loginMessage"),g=localStorage.getItem("token");function f(){return(f=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=4;break}s(!1),e.next=16;break;case 4:return e.prev=4,e.next=7,d()({method:"get",url:"/api/verify_jwt",headers:{"x-access-token":localStorage.getItem("token")}});case 7:t=e.sent,console.log(t),200===t.status?(s(!0),h(!0),O("Login Successful! Welcome Back!")):(console.log("Token is invalid"),localStorage.removeItem("token")),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("could not connect to authorization check"),localStorage.removeItem("token");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[a||!g]),Object(L.jsx)(j.a,{store:y,children:Object(L.jsx)(w.a,{children:Object(L.jsxs)("div",{className:"main-body",children:[Object(L.jsx)(M,{authorization:a}),Object(L.jsx)(D.a,{children:Object(L.jsxs)(oe.a,{children:[Object(L.jsxs)("div",{className:"col-md-8",children:[function(){if(u&&a&&x)return setTimeout((function(){h(!1),O("Welcome!"),localStorage.removeItem("loginMessage")}),5e3),Object(L.jsx)(q.a,{variant:"success",children:m})}(),Object(L.jsxs)(k.c,{children:[Object(L.jsx)(k.a,{exact:!0,path:"/",children:Object(L.jsx)(K,{alert:u})}),Object(L.jsx)(k.a,{path:"/home",children:Object(L.jsx)(K,{alert:u})}),Object(L.jsx)(k.a,{path:"/user_posts/:username",children:Object(L.jsx)(X,{})}),Object(L.jsx)(k.a,{path:"/post/:id",children:Object(L.jsx)(te,{})}),Object(L.jsx)(k.a,{path:"/update/post/:id",children:Object(L.jsx)(se,{})}),Object(L.jsx)(k.a,{path:"/about",children:Object(L.jsx)(_,{})}),Object(L.jsx)(k.a,{path:"/account",children:Object(L.jsx)(F,{})}),Object(L.jsx)(k.a,{path:"/forgot_password",children:Object(L.jsx)(re,{})}),Object(L.jsx)(k.a,{path:"/reset_password/:token",children:Object(L.jsx)(ce,{})}),Object(L.jsx)(k.a,{path:"/register",children:Object(L.jsx)(H,{})}),Object(L.jsx)(k.a,{path:"/new_post",children:Object(L.jsx)(ae,{})}),Object(L.jsx)(k.a,{path:"/login",children:Object(L.jsx)(G,{})}),Object(L.jsx)(k.a,{path:"/logout",children:Object(L.jsx)(Y,{})})]})]}),Object(L.jsx)(z,{})]})})]})})})};r.a.render(Object(L.jsx)(ie,{}),document.getElementById("root"))},25:function(e,t,a){},87:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.f3e4cc36.chunk.js.map