/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
	'use strict';

	var LanguageManager = brackets.getModule("language/LanguageManager");

	//Ruby Refine
	var ruby_language = LanguageManager.getLanguage("ruby");
	//RoR File Extensions
	ruby_language.addFileExtension("rb");
	ruby_language.addFileExtension("ru");
	//RoR Specific Files
	ruby_language.addFileName("Gemfile");
	ruby_language.addFileName("Rakefile");
	ruby_language.addFileName("Guardfile");
	//Ruby Comments
	ruby_language.setLineCommentSyntax(["#"]);
	ruby_language.setBlockCommentSyntax("=begin\n", "\n=end");

	//ERB Refine
	var erb_language = LanguageManager.getLanguage("html");
	//ERB File Extensions
	erb_language.addFileExtension("html.erb");
	erb_language.addFileExtension("htm.erb");
	erb_language.addFileExtension("erb");
	//ERB Comments
	erb_language.setBlockCommentSyntax("<!--", "-->");

	//HAML Definition
	LanguageManager.defineLanguage("haml", {
		name: "HAML",
		mode: "haml",
		//HAML Extensions
		fileExtensions: ["haml", "html.haml", "htm.haml"],
		lineComment: ["-#"]
	});
});
