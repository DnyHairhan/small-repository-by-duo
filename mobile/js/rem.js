(function() {
	var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width,user-scalable=no,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0';
    document.head.appendChild(meta);
	var html =  document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    // 把页面的宽分成15分，相当于1rem = hWidth/15 + 'px';这个值不是固定值可以变
    html.style.fontSize = hWidth/15 + 'px';         
    // console.log(hWidth);
    // console.log(html.style.fontSize);
	
})()