<?php

/*
Plugin Name:  Web Greeting
Description:  Adds a welcome greeting to your page
Version:      1.0
Author:       cbevs
*/

  function webGreeting() {
    return 'Welcome to my site!';
  }

  add_shortcode('greeting', 'webGreeting');