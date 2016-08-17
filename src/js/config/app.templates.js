angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("layout/app-view.html","<!-- commom component like header and footer should put here -->\n<div ui-view></div>");
$templateCache.put("phrase/phrase.html","<div class=\'wrapper\'>\n\n\n    <div class=\"content-bg\">\n\n\n        <main class=\"o-main o-main--hasSubHeader o-main--hasLeftContainer\" role=\"main\">\n            <div class=\"o-container\">\n\n                <div class=\'row-fluid subtitle-box\'>\n                    <div class=\'span6\'>\n                        <h2>\n                            Phrases\n                        </h2>\n                    </div>\n                </div>\n\n                <div class=\'row-fluid project-nav-phrase-meta\'>\n                    <ol class=\'list-unstyled project-nav-phrase-meta-list\'>\n                        <li ng-class=\"$ctrl.searchFilter.status == \'visible\' ? \'span4 active\' : \'span4\'\">\n                            <a ng-click=\"$ctrl.setActiveStatus(\'visible\')\">\n                                <span class=\'highlight\'>\n                                  {{$ctrl.visiableCount}}\n                                </span>\n                                visible {{$ctrl.visiableCount != 1 ? \'phrases\' : \'phrase\'}} \n                            </a>\n                        </li>\n                        <li ng-class=\"$ctrl.searchFilter.status == \'hidden\' ? \'span4 active\' : \'span4\'\">\n                            <a ng-click=\"$ctrl.setActiveStatus(\'hidden\')\">\n                                <span class=\'highlight\'>\n                                  {{$ctrl._phrases.length - $ctrl.visiableCount}}\n                                </span>\n                                hidden {{$ctrl._phrases.length - $ctrl.visiableCount != 1 ? \'phrases\' : \'phrase\'}} \n                            </a>\n                        </li>\n                        <li ng-class=\"$ctrl.searchFilter.status == \'\' ? \'span4 active\' : \'span4\'\">\n                            <a ng-click=\"$ctrl.setActiveStatus(\'\')\">\n                                <span class=\'highlight\'>\n                                  {{::$ctrl._phrases.length}}\n                                </span>\n                                {{::$ctrl._phrases.length != 1 ? \'phrases\' : \'phrase\'}}  in total\n                            </a>\n                        </li>\n                    </ol>\n                </div>\n\n                <div class=\'row-fluid\'>\n                    <div class=\'span12 content-box bottom-no-radius bottom-no-border\'>\n                        <div class=\'row-fluid\'>\n                            <div class=\'span12 content-box-header\'>\n                                <div class=\'row-fluid\'>\n                                    <div class=\'span4 content-box-header-content fl\'>\n                                        <form>\n                                            <div class=\'input-prepend\'>\n                                                <span class=\'add-on\'>\n                                                  <i class=\'icon-search\'></i>\n                                                </span>\n                                                <input class=\'span12\' placeholder=\'Find a phrase...\' type=\'text\' \n                                                    ng-model=\"$ctrl.searchKeyword\">\n                                            </div>\n                                        </form>\n                                    </div>\n                                    <div class=\'content-box-header-content fr\'>\n                                        <div class=\'count-unit\'>\n                                            Filter:\n                                            <div class=\"btn-group bootstrap-select show-tick ng-pristine ng-untouched ng-valid ng-not-empty open\" style=\"width: 180px;\">\n                                                <button data-toggle=\"dropdown\" class=\"btn dropdown-toggle btn-default\" type=\"button\" title=\"All phrases\" aria-expanded=\"false\" ng-click=\"menuOpen = true\">\n                                                    <span class=\"filter-option pull-left\" ng-show=\"$ctrl.searchFilter.status == \'\'\">\n                                                        <i class=\"glyphicon icon-align-left\"></i> All phrases\n                                                    </span>\n                                                    <span class=\"filter-option pull-left\" ng-show=\"$ctrl.searchFilter.status == \'visible\'\">\n                                                        <i class=\"glyphicon icon-eye-open\"></i> Visible phrases\n                                                    </span>\n                                                    <span class=\"filter-option pull-left\" ng-show=\"$ctrl.searchFilter.status == \'hidden\'\">\n                                                        <i class=\"glyphicon icon-eye-close\"></i> Hidden phrases\n                                                    </span>\n                                                    &nbsp;\n                                                    <span class=\"bs-caret\">\n                                                        <span class=\"caret\"></span>\n                                                    </span>\n                                                </button>\n                                                <div class=\"dropdown-menu open\" style=\"max-height: 406px; overflow: hidden; min-height: 0px;\" ng-show=\"menuOpen\" ng-click=\"menuOpen = false\">\n                                                    <ul role=\"menu\" class=\"dropdown-menu inner\" style=\"max-height: 394px; overflow-y: auto; min-height: 0px;\">\n                                                        <li data-original-index=\"0\" ng-click=\"$ctrl.setActiveStatus(\'\')\">\n                                                            <a data-tokens=\"null\" tabindex=\"0\">\n                                                                <span class=\"glyphicon icon-align-left\"></span> <span class=\"text\">All phrases</span><span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                                                            </a>\n                                                        </li>\n                                                        <li data-original-index=\"1\" ng-click=\"$ctrl.setActiveStatus(\'visible\')\">\n                                                            <a data-tokens=\"null\" tabindex=\"0\">\n                                                                <span class=\"glyphicon icon-eye-open\"></span> <span class=\"text\">Visible phrases</span><span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                                                            </a>\n                                                        </li>\n                                                        <li data-original-index=\"2\" ng-click=\"$ctrl.setActiveStatus(\'hidden\')\">\n                                                            <a data-tokens=\"null\" tabindex=\"0\">\n                                                                <span class=\"glyphicon icon-eye-close\"></span> <span class=\"text\">Hidden phrases</span><span class=\"glyphicon glyphicon-ok check-mark\"></span>\n                                                            </a>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                                <select class=\'selectpicker show-tick\' data-width=\'180px\' ng-model=\"$ctrl.searchFilter.status\">\n                                                    <option ng-selected=\"$ctrl.searchFilter.status == \'\'\" value=\"\" data-icon=\'icon-align-left\'>All phrases</option>\n                                                    <option ng-selected=\"$ctrl.searchFilter.status == \'visible\'\" value=\"visible\" data-icon=\'icon-eye-open\'>Visible phrases</option>\n                                                    <option ng-selected=\"$ctrl.searchFilter.status == \'hidden\'\" value=\"hidden\" data-icon=\'icon-eye-close\'>Hidden phrases</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\'row-fluid\'>\n                            <div class=\'span12 content-box-subheader bulk-actions-box bulk-actions-box-language boxSized\'>\n                                <div class=\'row-fluid\'>\n                                    <div class=\'span9\'>\n                                        <input class=\'selectAllLangs checkbox-lang tt\' data-original-title=\'Select all\'\n                                               data-placement=\'top\' data-toggle=\'tooltip\' title=\'\' type=\'checkbox\'\n                                               ng-click=\"$ctrl.toggleAll()\" ng-model=\"$ctrl.isAllSelected\">\n                                        <button ng-class=\"$ctrl.selectedCount <= 0 ? \n                                                \'btn btn-download-multiple btn-narrow tt disabled\' : \'btn btn-download-multiple btn-narrow tt\'\"\n                                                data-original-title=\'Hide selected phrases from collaborators.\'\n                                                data-placement=\'top\' data-toggle=\'tooltip\' title=\'\' type=\'button\'\n                                                uib-tooltip=\"Hide selected phrases from collaborators.\"\n                                                ng-disabled=\"$ctrl.selectedCount <= 0\" ng-click=\"$ctrl.setPhrasesStatus(\'hidden\')\">\n                                            <i class=\'icon-eye-close\'></i>\n                                            Hide\n                                        </button>\n                                        <button ng-class=\"$ctrl.selectedCount <= 0 ? \n                                                \'btn btn-download-multiple btn-narrow tt disabled\' : \'btn btn-download-multiple btn-narrow tt\'\"\n                                                data-original-title=\'Make selected phrases visible to collaborators.\'\n                                                data-placement=\'top\' data-toggle=\'tooltip\' title=\'\' type=\'button\'\n                                                uib-tooltip=\"Make selected phrases visible to collaborators.\"\n                                                ng-disabled=\"$ctrl.selectedCount <= 0\" ng-click=\"$ctrl.setPhrasesStatus(\'visible\')\">\n                                            <i class=\'icon-eye-open\'></i>\n                                            Visible\n                                        </button>\n                <span class=\'selected-lang-no blue-txt hide\'>\n                  Selected {{$ctrl.selectedCount}} {{$ctrl.selectedCount != 1 ? \'phrases\' : \'phrase\'}}\n                  <span class=\'selected-phrase-no-txt\'></span>\n                </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\'row-fluid\'>\n                    <div class=\'span12\'>\n                        <div class=\'phrase-manage-list-container\'>\n                            <ul class=\'phrase-manage-list\'>\n\n                                <!-- start phrase list -->\n                                <li class=\'phrase-manage-list-item\' \n                                    ng-repeat=\"phrase in ($ctrl.filteredPhrases = ($ctrl._phrases | filter:$ctrl.searchFilter.status | searchOnFields:[\'id\', \'context\', \'value\', \'notes\']:$ctrl.searchKeyword | orderBy:$ctrl.orderFilter))\">\n                                    <div class=\'media-object\'>\n                                        <div class=\'media pull-left\'>\n                                            <input class=\'checkbox-lang checkbox-count selectedLang\' type=\'checkbox\' ng-model=\"phrase.selected\" ng-change=\"$ctrl.itemToggled(phrase.selected, $index)\">\n                                        </div>\n                                        <div class=\'media-body\'>\n                                            <div class=\'phrase-header\'>\n                                                <div class=\'phrase-meta\'>\n                                                    <div class=\'id\'>\n                                                        <span>ID:</span>\n                                                        {{::phrase.id}}\n                                                    </div>\n                                                    <div class=\'context\'>\n                                                        <span>Context:</span>\n                                                        {{::phrase.context}}\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\'phrase-body\'>\n                                                <p ng-bind-html=\"::phrase.value | trust\"></p>\n                                            </div>\n                                            <div class=\'phrase-footer\'>\n                                                <div class=\'fr\'>\n                                                    <ul class=\'phrase-actions\'>\n\n                                                        <li>\n                                                            <a class=\'tt\'\n                                                               data-original-title=\'Write notes to translators to help them understand the context of this phrase\'\n                                                               data-placement=\'top\' data-toggle=\'modal\'\n                                                               title=\'\'\n                                                               uib-tooltip=\"Write notes to translators to help them understand the context of this phrase\"\n                                                               ng-click=\'$ctrl.openModal($index)\'>\n                                                                Add notes\n                                                            </a>\n                                                        </li>\n                                                        <li><i ng-class=\"phrase.status == \'visible\' ? \'icon-eye-open\' : \'icon-eye-close\'\"></i></li>\n                                                    </ul>\n\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </li>\n                                <!-- end phrase list -->\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n            </div><!-- o container -->\n        </main><!-- main -->\n\n\n        <div aria-hidden=\'true\' aria-labelledby=\'modal-note-to-translators\'\n             ng-class=\"$ctrl.currentEditing ? \'modal-note-to-translators modal-phrase modal\' : \'modal-note-to-translators modal-phrase modal fade\'\" role=\'dialog\' tabindex=\'-1\'>\n            <form>\n                <div class=\'modal-header\'>\n                    <button aria-hidden=\'true\' class=\'close\' data-dismiss=\'modal\' type=\'button\'>×</button>\n                    <h3 id=\'myModalLabel\'>Note to translators</h3>\n                </div>\n                <div class=\'modal-body\'>\n                    <label class=\'hide\' for=\'notes-to-translator\'>Note to Translators</label>\n                    <textarea class=\'input-block-level\' id=\'notes-to-translator\' name=\'notes-to-translator\'\n                              placeholder=\'Write a note to help translators understand the context of your phrase, for example, This phrase belongs to the welcome screen.\'\n                              rows=\'3\'\n                              ng-model=\"$ctrl.tempNotes\"></textarea>\n                </div>\n                <div class=\'modal-footer\'>\n                    <button aria-hidden=\'true\' class=\'btn\' data-dismiss=\'modal\' ng-click=\"$ctrl.closeModal()\">Cancel</button>\n                    <button class=\'btn btn-primary\' ng-click=\"$ctrl.saveNotes()\">Save</button>\n                </div>\n            </form>\n        </div>\n\n\n        <div aria-hidden=\'true\' aria-labelledby=\'modal-length-limit\'\n             class=\'modal-length-limit modal-phrase modal hide fade\' role=\'dialog\' tabindex=\'-1\'>\n            <form>\n                <div class=\'modal-header\'>\n                    <button aria-hidden=\'true\' class=\'close\' data-dismiss=\'modal\' type=\'button\'>×</button>\n                    <h3 id=\'myModalLabel\'>Length Limit</h3>\n                </div>\n                <div class=\'modal-body\'>\n                    <div class=\'length-limit-box-option length-limit-box-absolute\'>\n                        <div class=\'alert\'>\n          <span>\n            Setting the maximum character to 0 means unlimited length.\n          </span>\n                        </div>\n                        <p>\n                            I want a maximum of\n                            <input class=\'span1\' name=\'max-characters\' placeholder=\'0\' type=\'number\'>\n                            characters,\n                        </p>\n                        <p class=\'last\'>\n                            The translator\n                            <select name=\'absolute-hard-soft\'>\n                                <option value=\'must not exceed that\'>\n                                    must not exceed that\n                                </option>\n                                <option value=\'man exceed a little\'>\n                                    can exceed a little\n                                </option>\n                            </select>\n                        </p>\n                        <a class=\'js-length-limit-box-absolute\' href=\'#\'>\n                            I don&rsquo;t know how long the length should be\n                        </a>\n                    </div>\n                    <div class=\'length-limit-box-option length-limit-box-relative hide\'>\n                        <div class=\'alert\'>\n          <span>\n            Setting the multiplier to 0 means unlimited length.\n          </span>\n                        </div>\n                        <p>\n                            This phrase is\n          <span class=\'label\'>\n            1000\n          </span>\n                            characters, I want it roughly up to\n          <span class=\'input-prepend\'>\n            <span class=\'add-on\'>\n              x\n            </span>\n            <input class=\'span1\' name=\'character-length-multiplier\' placeholder=\'2\' type=\'number\'>\n          </span>\n                            longer, which is a maximum of\n          <span class=\'label\'>\n            2000\n          </span>\n                            characters.\n                        </p>\n                        <p class=\'last\'>\n                            The translator\n                            <select name=\'relative-hard-soft\'>\n                                <option value=\'must not exceed that\'>\n                                    must not exceed that\n                                </option>\n                                <option value=\'can exceed a little\'>\n                                    can exceed a little\n                                </option>\n                            </select>\n                        </p>\n                        <a class=\'js-length-limit-box-relative\' href=\'#\'>\n                            Actually I want to set an absolute limit\n                        </a>\n                    </div>\n                </div>\n                <div class=\'modal-footer\'>\n                    <button aria-hidden=\'true\' class=\'btn\' data-dismiss=\'modal\'>Cancel</button>\n                    <button class=\'btn btn-primary\'>Save</button>\n                </div>\n            </form>\n        </div>\n\n\n    </div>\n\n\n</div><!-- wrapper -->\n\n<div ng-show=\"$ctrl.currentEditing\" class=\"modal-backdrop fade in\"></div>");}]);