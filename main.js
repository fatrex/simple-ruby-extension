/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
    'use strict';
    
    var LanguageManager = brackets.getModule("language/LanguageManager");

    //Ruby Refine
    var ruby_language = LanguageManager.getLanguage("ruby");
    ruby_language.addFileExtension("rb");
    ruby_language.addFileName("Ruby");
    ruby_language.setLineCommentSyntax(["#"]);
    ruby_language.setBlockCommentSyntax("=begin\n", "\n=end");
    
    //Erb Refine
    var erb_language = LanguageManager.getLanguage("html");
    erb_language.addFileExtension("html.erb");
    erb_language.addFileName("ERB");
    erb_language.setBlockCommentSyntax("<!--", "-->");    
});