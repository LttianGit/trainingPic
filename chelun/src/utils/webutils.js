// 引入移动端调试工具
(function () {
    var script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.head.appendChild(script);
    script.onload = function () {
      eruda.init()
    }
  })();