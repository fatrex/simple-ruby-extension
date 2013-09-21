/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
	'use strict';

	var LanguageManager = brackets.getModule("language/LanguageManager");

	//Ruby Refine
	var ruby_language = LanguageManager.getLanguage("ruby");
	//RoR Extensions
	ruby_language.addFileExtension("rb");
	ruby_language.addFileExtension("ru");
	//RoR Specific Files
	ruby_language.addFileName("Gemfile");
	ruby_language.addFileName("Rakefile");
	//Ruby Comments
	ruby_language.setLineCommentSyntax(["#"]);
	ruby_language.setBlockCommentSyntax("=begin\n", "\n=end");

	//ERB Refine
	var erb_language = LanguageManager.getLanguage("html");
	//ERB Extensions
	erb_language.addFileExtension("html.erb");
	erb_language.addFileExtension("htm.erb");
	erb_language.addFileExtension("erb");
	//ERB Comments
	erb_language.setBlockCommentSyntax("<!--", "-->");
});
