<?php

/*
Plugin Name: JS Responsive IFrames
Plugin URI: http://www.paulhowardjohnson.com/plugins/js-responsive-iframes.zip
Description: Makes iframes responsive using a small bit of JavaScript
Author: Paul Johnson
Version: 1.0.0
Author URI: http://www.paulhowardjohnson.com
*/
function js_responsive_iframes_add_js() {
  wp_enqueue_script('responsive-iframes', plugins_url('js/js-responsive-iframes.js', __FILE__), array(), false, true);
}

add_action('wp_enqueue_scripts', 'js_responsive_iframes_add_js');