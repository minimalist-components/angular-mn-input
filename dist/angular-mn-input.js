"use strict";function mnInputDirective($compile,$parse){function link(scope,element,attributes){var dirtyInput=element[0].querySelector("input + input");dirtyInput&&element[0].removeChild(dirtyInput);var input=element.find("input");element[0].value=$parse(attributes.ngModel)(scope),input.attr("ng-model",attributes.ngModel),$compile(input)(scope)}return{restrict:"E",link:link,require:"ngModel"}}angular.module("mn-input",[]),mnInputDirective.$inject=["$compile","$parse"],angular.module("mn-input").directive("mnInput",mnInputDirective);
//# sourceMappingURL=angular-mn-input.js.map
