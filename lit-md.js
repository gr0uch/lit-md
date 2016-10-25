#!/usr/bin/env node

/* (DEFVAR *INDENT* (REGEX ^    )) */
var INDENT = /^    /;
/* ((@
     ((@ (REQUIRE 'READLINE) CREATE-INTERFACE)
      (CREATE INPUT (@ PROCESS STDIN)))
     ON)
    'LINE
    (LAMBDA (LINE)
      (IF ((@ *INDENT* TEST) LINE)
          ((@ PROCESS STDOUT WRITE)
           (+ ((@ LINE REPLACE) *INDENT* ) 
))))) */
require('readline').createInterface({ input : process.stdin }).on('line', function (line) {
    return INDENT.test(line) ? process.stdout.write(line.replace(INDENT, '') + '\n') : null;
});
