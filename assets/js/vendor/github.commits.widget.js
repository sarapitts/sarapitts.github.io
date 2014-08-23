(function(e){function t(t,n,r){this.element=t;this.options=n;this.callback=e.isFunction(r)?r:e.noop}t.prototype=function(){function t(t,n,r,i){e.ajax({url:"https://api.github.com/repos/"+t+"/"+n+"/commits?sha="+r,dataType:"jsonp",success:i})}function n(n){if(!n.options){n.element.append('<span class="error">Options for widget are not set.</span>');return}var r=n.callback;var i=n.element;var s=n.options.user;var o=n.options.repo;var u=n.options.branch;var a=n.options.avatarSize||20;var f=n.options.last===undefined?0:n.options.last;var l=n.options.limitMessageTo===undefined?0:n.options.limitMessageTo;t(s,o,u,function(t){function n(t,n){return e("<img>").attr("class","github-avatar").attr("src","https://www.gravatar.com/avatar/"+t+"?s="+n)}function u(t){return e("<a>").attr("href","https://github.com/"+t).text(t).prepend(" ")}function c(t,n){var r=t;if(l>0&&t.length>l){t=t.substr(0,l)+"..."}var i=e('<a class="github-commit"></a>').attr("title",r).attr("href","https://github.com/"+s+"/"+o+"/commit/"+n).text(t).append(" ").prepend(" - ");return i}function h(e){var t=(new Date(e)).getTime();var n=(new Date).getTime();var r=Math.floor((n-t)/(24*3600*1e3));if(r===0){var i=Math.floor((n-t)/(3600*1e3));if(i===0){var s=Math.floor((n-t)/(600*1e3));if(s===0){return"just now"}return"about "+s+" minutes ago"}return"about "+i+" hours ago"}else if(r==1){return"yesterday"}return r+" days ago"}var p=t.data;var d=f<p.length?f:p.length;i.empty();var v=e('<ul class="post-list">').appendTo(i);for(var m=0;m<d;m++){var g=p[m];var y=e("<li>");var b=e('<span class="github-user">');if(g.author!==null){b.append(n(g.author.gravatar_id,a));b.append(u(g.author.login))}else{b.append(g.commit.committer.name)}y.append(b);var w=e("<span class=github-commit-date style=float:right>");y.append(c(g.commit.message,g.sha));y.append(w.text(h(g.commit.committer.date)));v.append(y)}r(i)})}return{run:function(){n(this)}}}();e.fn.githubInfoWidget=function(n,r){this.each(function(){(new t(e(this),n,r)).run()});return this}})(jQuery)