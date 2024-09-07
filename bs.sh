#!/usr/bin/env bash
cd /var/www/bonga.local
browser-sync http://bonga.local --files "*.css,assets/js/*.js,assets/scss/*.scss,assets/css/*.css,*.html,*.*"