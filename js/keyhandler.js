AJAX.registerTeardown("keyhandler.js",function(){$("#table_columns").die("keydown");$("table.insertRowTable").die("keydown")});AJAX.registerOnload("keyhandler.js",function(){$("#table_columns").live("keydown",function(a){onKeyDownArrowsHandler(a.originalEvent)});$("table.insertRowTable").live("keydown",function(a){onKeyDownArrowsHandler(a.originalEvent)})});function onKeyDownArrowsHandler(d){d=d||window.event;var f=(d.srcElement||d.target);if(!f){return}if(f.tagName!="TEXTAREA"&&f.tagName!="INPUT"&&f.tagName!="SELECT"){return}if(navigator.userAgent.toLowerCase().indexOf("applewebkit/")!=-1){if(d.ctrlKey||d.shiftKey||!d.altKey){return}}else{if(!d.ctrlKey||d.shiftKey||d.altKey){return}}if(!f.id){return}var j=f.id.split("_");if(j[0]!="field"||typeof j[2]=="undefined"){return}var a=j[2],h=j[1];var c=null;for(var b=0;b<10;b++){switch(d.keyCode){case 38:h--;break;case 40:h++;break;case 37:a--;break;case 39:a++;break;default:return}var g="field_"+h+"_"+a;c=document.getElementById(g);if(!c){g="field_"+h+"_"+a+"_0";c=document.getElementById(g)}if(c){break}}if(!c){return}c.focus();if(c.tagName!="SELECT"){c.select()}d.returnValue=false};