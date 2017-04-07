(function(){
    
    var deviceWidth = window.screen.width;
    // console.log(deviceWidth);
    var htmlWidth = 320;
    var scale = deviceWidth/htmlWidth;
    // console.log(scale);
    var meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'user-scalable=no,minimum-scale='+ scale +',maximum-scale='+ scale +',initial-scale='+ scale;
    document.head.appendChild(meta);
    // console.log(meta)	
})()