"use strict";function mnInputDirective($compile){function link(scope,element,attributes){var input=element.find("input");input.attr("ng-model",attributes.ngModel),$compile(input)(scope)}return{restrict:"E",link:link,require:"ngModel"}}angular.module("mn-input",[]),angular.module("mn-input").directive("mnInput",mnInputDirective);
//# sourceMappingURL=mn-input.js.map
