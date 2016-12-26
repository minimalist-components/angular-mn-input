"use strict";function mnInputDirective($compile){function link(scope,element,attributes){var input=element.find("input");input.attr("ng-model",attributes.ngModel),$compile(input)(scope);var formName=element[0].closest("form").getAttribute("name");attributes.name&&formName&&!function(){var setMessage=function(validation){var message=document.createElement("span");message.setAttribute("ng-message",validation.name),message.textContent=" "+validation.text,label.appendChild(message)},messagesRule="formName.$submitted && formName.inputName.$error".replace(/formName/g,formName).replace(/inputName/g,attributes.name),validations=[{name:"required",text:"is required"},{name:"email",text:"is invalid"}],label=element[0].querySelector("label");label.setAttribute("ng-messages",messagesRule),validations.forEach(setMessage),$compile(label)(scope)}()}return{restrict:"E",link:link,require:"ngModel"}}angular.module("mn-input",["ngMessages"]),mnInputDirective.$inject=["$compile"],angular.module("mn-input").directive("mnInput",mnInputDirective);
//# sourceMappingURL=angular-mn-input.js.map
