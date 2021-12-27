window.onload = function() {
    themeDefaultContent = $(
        '#app > .theme-container>.page > .theme-default-content'
    );

    themeDefaultContent.attr('id', 'container');
    btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
    btw.init({
        id: 'container',
        blogId: '28642-1640571535094-871',
        name: '云原生运维圈',
        qrcode: 'https://kubesre.com/img/wxg.jpg',
        keyword: '验证码',
    });
};