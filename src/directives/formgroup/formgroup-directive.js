/**
 * Created by rwatanabe on 07/02/16.
 */
var angular = require('angular');
var _ = require('lodash');


module.exports = function ($compile) {
    return {
        restrict: 'E',
        require: '^form',
        scope: false,
        replace: true,
        template: require('./formgroup-template.html'),
        compile: function (el, attrs) {
            var groupName = 'formgroup$' + _.uniqueId();
            var labelEl = el.find('.control-label');
            var controlWrapperEl = el.find('.form-group-control');
            var errorsEl = el.find('.form-group-errors');
            var hasErrorExp = groupName + '.$invalid && ' + groupName + '.$dirty';

            el.attr('ng-class', "{'has-error': " + hasErrorExp + '}');

            if (attrs.label) {
                labelEl.text(attrs.label);
                labelEl.attr('for', groupName);
            } else {
                labelEl.remove();
            }

            errorsEl.attr({
                'ng-if': hasErrorExp,
                'ng-messages': groupName + '.$error'
            });

            switch (attrs.type) {
                case 'number':
                case 'text':
                    buildInput();
                    break;

                case 'choice':
                    buildSelect();
                    break;

                case 'text-multiline':
                    buildTextarea();
                    break;
            }

            function buildInput() {
                var controlEl = angular.element('<input class="form-control">');
                controlEl.attr({
                    id: groupName,
                    name: groupName,
                    type: attrs.type,
                    'ng-model': attrs.model,
                    'ng-required': attrs.required
                });
                controlWrapperEl.append(controlEl);
            }

            function buildSelect() {
                var controlEl = angular.element('<select class="form-control"></select>');
                controlEl.attr({
                    id: groupName,
                    name: groupName,
                    type: attrs.type,
                    'ng-model': attrs.model,
                    'ng-options': attrs.options,
                    'ng-required': attrs.required
                });
                controlWrapperEl.append(controlEl);
            }

            function buildTextarea() {
                var controlEl = angular.element('<textarea class="form-control"></textarea>');
                controlEl.attr({
                    id: groupName,
                    name: groupName,
                    type: attrs.type,
                    rows: attrs.rows || 3,
                    'ng-model': attrs.model,
                    'ng-required': attrs.required
                });
                controlWrapperEl.append(controlEl);
            }

            return function (scope, el, attrs, form) {
                scope[groupName] = form[groupName];
                $compile(el)(scope);
            };
        }
    }
};