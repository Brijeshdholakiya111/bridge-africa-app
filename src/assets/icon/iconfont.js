(function(window) {
  var svgSprite =
    '<svg><symbol id="ly-icon-sousuo" viewBox="0 0 1024 1024"><path d="M1004.8 915.2l-243.2-243.2c0 0-6.4-6.4-6.4-6.4C800 595.2 832 505.6 832 416 832 185.6 646.4 0 416 0S0 185.6 0 416 185.6 832 416 832c89.6 0 179.2-32 243.2-83.2 0 6.4 6.4 6.4 6.4 6.4l243.2 243.2c25.6 25.6 70.4 25.6 96 6.4C1030.4 979.2 1030.4 940.8 1004.8 915.2zM64 416C64 224 224 64 416 64S768 224 768 416 608 768 416 768 64 608 64 416z"  ></path></symbol><symbol id="ly-icon-wode" viewBox="0 0 1025 1024"><path d="M2.327273 1010.036364c-2.327273-11.636364-2.327273-41.890909 0-74.472728 6.981818-58.181818 30.254545-100.072727 65.163636-125.672727 25.6-18.618182 58.181818-27.927273 86.109091-34.909091 13.963636-2.327273 27.927273-6.981818 39.563636-9.309091 69.818182-16.290909 141.963636-32.581818 195.490909-102.4 4.654545-4.654545 32.581818-46.545455-41.890909-137.309091-32.581818-39.563636-53.527273-93.090909-62.836363-160.581818-9.309091-69.818182-2.327273-134.981818 4.654545-176.872727 9.309091-48.872727 37.236364-93.090909 79.127273-125.672727 41.890909-32.581818 93.090909-48.872727 144.290909-48.872728s102.4 16.290909 144.290909 48.872728c41.890909 32.581818 69.818182 76.8 79.127273 128 6.981818 41.890909 13.963636 107.054545 4.654545 176.872727-9.309091 65.163636-30.254545 118.690909-62.836363 160.581818-74.472727 90.763636-44.218182 132.654545-41.890909 137.309091 53.527273 72.145455 125.672727 88.436364 195.490909 102.4 13.963636 2.327273 27.927273 6.981818 41.890909 9.309091 25.6 6.981818 58.181818 16.290909 83.781818 34.909091 76.8 53.527273 69.818182 169.890909 67.490909 197.818182H2.327273zM512 44.218182c-44.218182 0-88.436364 13.963636-125.672727 41.890909-18.618182 13.963636-32.581818 30.254545-44.218182 46.545454-11.636364 18.618182-18.618182 39.563636-23.272727 60.509091-6.981818 39.563636-13.963636 102.4-4.654546 167.563637 9.309091 60.509091 27.927273 109.381818 55.854546 144.290909 34.909091 44.218182 55.854545 83.781818 55.854545 118.690909 2.327273 30.254545-9.309091 48.872727-16.290909 55.854545-60.509091 81.454545-141.963636 97.745455-214.109091 114.036364-13.963636 2.327273-25.6 6.981818-39.563636 9.309091-23.272727 6.981818-51.2 16.290909-74.472728 30.254545-16.290909 11.636364-27.927273 25.6-37.236363 46.545455-6.981818 16.290909-13.963636 37.236364-16.290909 58.181818-2.327273 9.309091-2.327273 18.618182-2.327273 30.254546v9.30909h961.163636v-9.30909c0-11.636364 0-20.945455-2.327272-32.581819-6.981818-46.545455-23.272727-81.454545-53.527273-102.4-20.945455-16.290909-48.872727-23.272727-74.472727-30.254545-13.963636-2.327273-25.6-6.981818-41.890909-9.309091-72.145455-16.290909-153.6-34.909091-214.109091-114.036364-4.654545-6.981818-16.290909-25.6-16.290909-55.854545 2.327273-34.909091 20.945455-76.8 55.854545-118.690909 30.254545-34.909091 48.872727-83.781818 55.854545-144.290909 9.309091-65.163636 2.327273-125.672727-4.654545-167.563637-4.654545-20.945455-11.636364-41.890909-23.272727-60.509091s-25.6-34.909091-44.218182-46.545454c-23.272727-25.6-67.490909-41.890909-111.709091-41.890909z"  ></path></symbol><symbol id="ly-icon-icon--" viewBox="0 0 1024 1024"><path d="M524.8 117.76c-225.28 0-409.6 156.16-409.6 350.72 0 158.72 125.44 294.4 294.4 337.92l115.2 130.56 115.2-130.56c171.52-43.52 294.4-176.64 294.4-337.92 0-194.56-184.32-350.72-409.6-350.72zM614.4 747.52L558.08 819.2l-33.28 40.96-89.6-112.64c-153.6-33.28-268.8-148.48-268.8-284.16 0-163.84 161.28-294.4 358.4-294.4s358.4 133.12 358.4 294.4c0 135.68-115.2 250.88-268.8 284.16z"  ></path></symbol><symbol id="ly-icon-home" viewBox="0 0 1024 1024"><path d="M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 0.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z m217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"  ></path></symbol></svg>';
  var script = (function() {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  })();
  var shouldInjectCss = script.getAttribute("data-injectcss");
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn();
        };
        document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }
    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        init = function() {
          if (!done) {
            done = true;
            fn();
          }
        };
      var polling = function() {
        try {
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);
          return;
        }
        init();
      };
      polling();
      d.onreadystatechange = function() {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init();
        }
      };
    }
  };
  var before = function(el, target) {
    target.parentNode.insertBefore(el, target);
  };
  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };
  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body);
    }
  }
  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  ready(appendSvg);
})(window);