(function() {
  var iframes = document.getElementsByTagName('iframe');

  for (var iframeI in iframes) {
    var iframe = iframes[iframeI];

    if (typeof iframe.className !== 'undefined') {

      // Ignore any iframes that are specifically marked as ignorable
      if (iframe.className.match(/responsive-ignore/) === null) {

        // Loop through the iframe array and apply the responsive wrapper

        // Extract the elements width first and try to account for 100% width
        // responsive elements
        var elmWidth = iframe.width;
        var widthPercent;

        // If the width is a percent width, then find its parent's width and
        // compute a value
        if (widthPercent = elmWidth.match(/(\d+)%/)) {
          elmWidth = iframe.parentNode.getBoundingClientRect().width * (parseInt(widthPercent[1]) / 100);
        }

        // Calculate the video ratio based on the iframe's w/h dimensions
        var elmRatio = iframe.height > 0 ? (iframe.height / elmWidth) * 100 : 56.25;

        // Change the iframe styling so that it scales exactly according to its
        // parents size
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.width = '100%';
        iframe.height = '100%';

        // Wrap the iframe in a new <div> which will maintain an aspect ratio
        // relative to the width of its parent. The aspect ratio used is the
        // one derived from the settings of the iframe
        var wrap = document.createElement('div');
        wrap.style.width = '100%';
        wrap.style.position = 'relative';
        wrap.style.paddingTop = elmRatio + '%';
        wrap.style.overflow = 'auto';
        wrap.style.margin = '0 auto';

        // Add the iframe inside our newly created <div>
        var iframeParent = iframe.parentNode;
        iframeParent.insertBefore(wrap, iframe);
        wrap.appendChild(iframe);
      }
    }
  }
})();