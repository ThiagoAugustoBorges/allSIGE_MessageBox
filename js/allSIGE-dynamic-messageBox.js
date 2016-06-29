/*
 * Plugin Dynamic MessageBox
 * Thiago Augusto Borges - Uberaba MG - 01/05/2016
 * Versão 2.0.0.0
 *
 * Efeito: Plugin de mensagens
 * */
"use strict";
(function ($) {
    var ASMBErrorIdent = "allSIGE MessageBox - ";
    var ASMBSettings;
    $.allSIGEDynamicMessageBoxSettings = function (settings, cascade) {
        cascade === undefined ? cascade = false : "";

        var defaults = {
            boxType: "none",
            boxShowIcon: false,
            boxShowHeaderControls: true,
            boxTypeIcon: {
                "none"    : { type: "img", val: "none.png" },
                "success" : { type: "img", val: "success.png" },
                "error"   : { type: "img", val: "error.png" },
                "info"    : { type: "img", val: "info.png" },
                "alert"   : { type: "img", val: "alert.png" }
            },
            boxSize: "md",
            boxTitle: "allSIGE MessageBox",
            boxMessage: "",
            boxButtons: [],
            boxHeaderButtons: [],
            boxButtonDefaultPosition: 1,
            boxButtonAlign: "right",
            boxAutoClose: { timeout: 0, message: "Closing in %s% seconds...", container: "message" },
            boxAlternateReturn: {
                selector: "",
                close: true
            },

            defaultStyle: "style01",
            topPosition: "100px",
            closeOnClickModal: true,
            effects: { modalIn: "fadeIn", modalOut: "fadeOut", boxIn: "fadeInDown", boxOut: "fadeOutUp" },
            onSuccess: function (result) { },
            onBeforeShow: function () { },
            onAfterShow: function () { },
            onBeforeClose: function () { },
            onAfterClose: function () { },
        };


        if (cascade) {
            ASMBSettings = $.extend(true, {}, defaults, ASMBSettings, settings);
        }
        settings = $.extend(true, {}, defaults, ASMBSettings, settings);
        var localSettings = $.extend(true, {}, ASMBSettings, settings);

        var loValidate = {};
        var laAcceptSizesCSS = ['em', 'rem', 'ex', 'px', '%', 'pt', 'pc', 'mm', 'cm', 'in', 'vh', 'vw', 'vmin', 'vmax', 'ch'];
        loValidate['_doValid_boxType'] = function () {
            return localSettings['boxType'];
        };
        loValidate['_doValid_boxSize'] = function () {
            var par = localSettings['boxSize'];
            var laBoxSizes = ['330', '420', '585', '880', '100'];
            var laAcceptSizes = ['xs', 'sm', 'md', 'lg', 'full'];
            var letter;
            var number;
            var lnPositionInArray = $.inArray(par, laAcceptSizes);
            if (lnPositionInArray >= 0) {
                number = laBoxSizes[lnPositionInArray];
                laAcceptSizes[lnPositionInArray] == "full" ? letter = '%' : letter = 'px';
            } else {
                letter = par.replace(/[0-9]/g, '');
                number = parseInt(par);
                if ((number === "") || (number < 0) || (isNaN(number))) {
                    $.error(ASMBErrorIdent + "The paramater 'boxSize' it has to be a no empty and integer.");
                }
                if ($.inArray(letter, laAcceptSizesCSS) == -1) {
                    $.error(ASMBErrorIdent + "The allowable values for the parameter 'boxSize' are " + laAcceptSizesCSS.splice(0) + ".");
                }
            }
            return number + letter;
        };
        loValidate['_doValid_boxTitle'] = function () {
            return localSettings['boxTitle'];
        };
        loValidate['_doValid_boxMessage'] = function () {
            return localSettings['boxMessage'];
        };
        loValidate['_doValid_boxButtons'] = function () {
            var par = localSettings['boxButtons'];
            if (!$.isArray(par)) {
                $.error(ASMBErrorIdent + "The paramater 'boxButtons' it has to be a array of objects.");
            }

            var loDefaultButtonConf = {
                label: "", class: "btn", return: "OK", close: true, iconClass: "",
                props: {
                    element: "button",
                    attribs: {

                    }
                }
            }

            par.length <= 0 ? par.push(loDefaultButtonConf) : "";

            for (var i = 0; i < par.length; i++) {
                par[i] = $.extend(true, {}, loDefaultButtonConf, par[i]);
                if (par[i]['label'] === "" && par[i]['iconClass'] === "") {
                    par[i]['label'] = "OK";
                }
                var element = par[i]['props']['element'];
                if (element === "" || $.isNumeric(element)) {
                    $.error(ASMBErrorIdent + "The paramater 'boxButtons[props][element]' it has to be a html element.");
                }
            }

            return par;
        };
        loValidate['_doValid_boxHeaderButtons'] = function () {
            var par = localSettings['boxHeaderButtons'];
            if (!$.isArray(par)) {
                $.error(ASMBErrorIdent + "The paramater 'boxHeaderButtons' it has to be a array of objects.");
            }

            var loDefaultHeaderButtonConf = {
                return: "OK", close: true, iconClass: "fa fa-close",
                props: {
                    element: "li",
                    attribs: {

                    }
                }
            }

            par.length <= 0 ? par.push(loDefaultHeaderButtonConf) : "";

            for (var i = 0; i < par.length; i++) {
                par[i] = $.extend(true, {}, loDefaultHeaderButtonConf, par[i]);
                var element = par[i]['props']['element'];
                if (element === "" || $.isNumeric(element)) {
                    $.error(ASMBErrorIdent + "The paramater 'boxHeaderButtons[props][element]' it has to be a html element.");
                }
            }

            return par;
        };
        loValidate['_doValid_boxTypeIcon'] = function () {
            var par = localSettings['boxTypeIcon'];
            var loDefaultTypeIcon = { type: "img", val: "none.png" };
            for (var type in par) {
                par[type] = $.extend(true, {}, loDefaultTypeIcon, par[type]);
            }
            if (!par.hasOwnProperty(localSettings['boxType'])) {
                $.error(ASMBErrorIdent + "The paramater 'boxTypeIcon' must have a position with the same type of parameter 'boxType'.");
            }
            return par;
        };
        loValidate['_doValid_boxButtonDefaultPosition'] = function () {
            var par = parseInt(localSettings['boxButtonDefaultPosition'] - 1);
            if ((par === "") || (par < 0) || (isNaN(par))) {
                $.error(ASMBErrorIdent + "The paramater 'boxButtonDefaultPosition' it has to be a no empty and integer.");
            }
            if (localSettings['boxButtons'].length > 0) {
                if (localSettings['boxButtons'][par] === undefined) {
                    $.error(ASMBErrorIdent + "Not found an button in the position " + (par + 1) + " in 'boxButtonDefaultPosition'.");
                }
            }
            return par;
        };
        loValidate['_doValid_boxAlternateReturn'] = function () {
            var par = localSettings['boxAlternateReturn'];
            return par;
        };
        loValidate['_doValid_boxButtonAlign'] = function () {
            var par = localSettings['boxButtonAlign'];
            var laAccept = ['left', 'right', 'center'];
            if ($.inArray(par, laAccept) == -1) {
                $.error(ASMBErrorIdent + "The allowable values for the parameter 'boxButtonAlign' are " + laAccept.splice(0) + ".");
            }
            return par;
        };
        loValidate['_doValid_boxAutoClose'] = function () {
            var par = localSettings['boxAutoClose'];
            if (!$.isNumeric(par['timeout'])) {
                $.error(ASMBErrorIdent + "The paramater 'boxAutoClose[timeout]' it has to be a no empty and integer.");
            }
            par['timeout'] = par['timeout'] * 1000;
            return par;
        };
        loValidate['_doValid_defaultStyle'] = function () {
            return localSettings['defaultStyle'];
        };
        loValidate['_doValid_topPosition'] = function () {
            var par = localSettings['topPosition'];
            var letter = par.replace(/[0-9]/g, '');
            var number = parseInt(par);
            if ($.inArray(letter, laAcceptSizesCSS) == -1) {
                $.error(ASMBErrorIdent + "The allowable values for the parameter 'topPosition' are " + laAcceptSizesCSS.splice(0) + ".");
            }
            return par;
        };
        loValidate['_doValid_closeOnClickModal'] = function () {
            var par = localSettings['closeOnClickModal'];
            par ? par = true : par = false;
            return par;
        };
        loValidate['_doValid_boxShowIcon'] = function () {
            var par = localSettings['boxShowIcon'];
            par ? par = true : par = false;
            return par;
        };
        loValidate['_doValid_boxShowHeaderControls'] = function () {
            var par = localSettings['boxShowHeaderControls'];
            par ? par = true : par = false;
            return par;
        };
        loValidate['_doValid_effects'] = function () {
            var par = localSettings['effects'];
            return par;
        };
        loValidate['_doValid_onSuccess'] = function () {
            if (!$.isFunction(localSettings['onSuccess'])) {
                $.error(ASMBErrorIdent + "The paramater 'onSuccess' it has to be a function.");
            }
            return localSettings['onSuccess'];
        };
        loValidate['_doValid_onBeforeShow'] = function () {
            if (!$.isFunction(localSettings['onBeforeShow'])) {
                $.error(ASMBErrorIdent + "The paramater 'onBeforeShow' it has to be a function.");
            }
            return localSettings['onBeforeShow'];
        };
        loValidate['_doValid_onAfterShow'] = function () {
            if (!$.isFunction(localSettings['onAfterShow'])) {
                $.error(ASMBErrorIdent + "The paramater 'onAfterShow' it has to be a function.");
            }
            return localSettings['onAfterShow'];
        };
        loValidate['_doValid_onBeforeClose'] = function () {
            if (!$.isFunction(localSettings['onBeforeClose'])) {
                $.error(ASMBErrorIdent + "The paramater 'onBeforeClose' it has to be a function.");
            }
            return localSettings['onBeforeClose'];
        };
        loValidate['_doValid_onAfterClose'] = function () {
            if (!$.isFunction(localSettings['onAfterClose'])) {
                $.error(ASMBErrorIdent + "The paramater 'onAfterClose' it has to be a function.");
            }
            return localSettings['onAfterClose'];
        };



        var _isValid = function () {
            for (var lsSetting in localSettings) {
                //Primeira validação: Vejo se o parametro passado faz parte do meu dicionário
                if (!defaults.hasOwnProperty(lsSetting)) {
                    $.error(ASMBErrorIdent + "Setting '" + lsSetting + "' is not recognized as a word without making dictionary plugin.");
                } else {
                    var lsValidateFunction = '_doValid_' + lsSetting;
                    if (!loValidate.hasOwnProperty(lsValidateFunction)) {
                        $.error(ASMBErrorIdent + "Setting '" + lsSetting + "' needs a validation function.");
                    }
                    localSettings[lsSetting] = loValidate[lsValidateFunction]();
                }
            }
        }

        _isValid();
        this.toAMBObject = function () {
            return localSettings;
        };

        return this;
    };

    $.allSIGEDynamicMessageBox = function (settings) {
        var localSettings = $.allSIGEDynamicMessageBoxSettings(settings).toAMBObject();
        var lnTimeoutBoxOut = 500;
        var isOpen = false;
        var loMBSettings = {
            "modal": {
                tag: "div",
                styleClass: "message-box-modal",
                showModal: true,

                getContainer: function () {
                    return "body";
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-modal';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                doOpen: function () {
                    if (this.showModal) {
                        $(this.getDataSelector()).addClass(localSettings['effects']['modalIn']);
                        $(this.getDataSelector()).addClass('animated');
                        $(this.getDataSelector()).show();
                    }
                },
                doClose: function () {
                    $(this.getDataSelector()).removeClass(localSettings['effects']['modalIn']);
                    $(this.getDataSelector()).addClass(localSettings['effects']['modalOut']);
                    var $this = this;
                    window.setTimeout(function () {
                        $($this.getDataSelector()).hide();
                    }, lnTimeoutBoxOut);
                },
            },
            "container": {
                tag: "div",
                styleClass: "message-box-container",
                hasSpecialConfig: true,
                getContainer: function () {
                    return "body";
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-container';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                doOpen: function () {
                    $(this.getDataSelector()).show();
                },
                doClose: function () {
                    var $this = this;
                    window.setTimeout(function () {
                        $($this.getDataSelector()).hide();
                    }, lnTimeoutBoxOut);
                },
                doSpecialConfig: function () {
                    $(this.getDataSelector()).animate({ scrollTop: 0 }, 'fast');
                }
            },
            "main": {
                tag: "section",
                styleClass: "message-box-body",
                hasSpecialConfig: true,

                getContainer: function () {
                    return loMBSettings['container'].getDataSelector();;
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-main';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                doOpen: function () {
                    $(this.getDataSelector()).addClass(localSettings['effects']['boxIn']);
                    $(this.getDataSelector()).addClass('animated');
                    $(this.getDataSelector()).show();
                },
                doClose: function () {
                    $(this.getDataSelector()).removeClass(localSettings['effects']['boxIn']);
                    $(this.getDataSelector()).addClass(localSettings['effects']['boxOut']);
                    var $this = this;
                    window.setTimeout(function () {
                        $($this.getDataSelector()).hide();
                    }, lnTimeoutBoxOut);
                },
                doSpecialConfig: function () {
                    $(this.getDataSelector()).addClass(localSettings['defaultStyle']);
                    $(this.getDataSelector()).addClass(this.styleClass + '-' + localSettings['boxType']);
                    $(this.getDataSelector()).css("width", localSettings['boxSize']);
                    $(this.getDataSelector()).css("margin-top", localSettings['topPosition']);
                    $(this.getDataSelector()).css("margin-bottom", localSettings['topPosition']);
                }
            },
            "header": {
                tag: "header",
                styleClass: "message-box-header",

                getContainer: function () {
                    return loMBSettings['main'].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-header';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                }
            },
            "header-content": {
                tag: "div",
                styleClass: "content",

                getContainer: function () {
                    return loMBSettings['header'].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-header-content';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                setContent: function (content) {
                    $(this.getDataSelector()).html(content);
                }
            },
            "header-options": {
                tag: "ul",
                styleClass: "options",

                getContainer: function () {
                    return loMBSettings['header'].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-header-options';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                setContent: function (content) {
                    $(this.getDataSelector()).html(content);
                }
            },
            "message": {
                tag: "div",
                styleClass: "message-box-message",

                getContainer: function () {
                    return loMBSettings['main'].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-message';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
            },
            "message-content": {
                tag: "div",
                styleClass: "content",
                hasSpecialConfig: true,

                getContainer: function () {
                    return loMBSettings['message'].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-message-content';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                setContent: function (content) {
                    $(this.getDataSelector()).html($(this.getDataSelector()).html() + content);
                },
                doSpecialConfig: function () {
                    var showIcon = localSettings['boxShowIcon'];
                    if (showIcon) {
                        loMBSettings['message-icon'].doSpecialConfig();
                        _makeBoxGeneric('message-icon');
                    }
                },
            },
            "footer": {
                tag: "footer",
                styleClass: "message-box-footer",

                getContainer: function () {
                    return loMBSettings['main'].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-footer';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
            },
            "footer-content": {
                tag: "div",
                styleClass: "buttons",
                hasSpecialConfig: true,

                getContainer: function () {
                    return loMBSettings['footer'].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-footer-content';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                setContent: function (content) {
                    $(this.getDataSelector()).html(content);
                },
                doSpecialConfig: function () {
                    $(this.getDataSelector()).css('text-align', localSettings['boxButtonAlign']);
                }
            },
            "timeout": {
                tag: "p",
                styleClass: "message-box-timeout",
                isBlockAutoCreate: true,

                getContainer: function () {
                    var type = localSettings['boxAutoClose']['container'];
                    isTypeValid(type);
                    return loMBSettings[type].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-timeout';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                setContent: function (content) {
                    $(this.getDataSelector()).html(content);
                },
            },
            "message-icon": {
                tag: "span",
                styleClass: "message-box-icon",
                isBlockAutoCreate: true,
                hasSpecialConfig: true,

                getContainer: function () {
                    return loMBSettings['message-content'].getDataSelector();
                },
                getDataSelector: function (full) {
                    full == undefined ? full = true : "";
                    var data = 'box-message-icon';
                    full ? data = this.tag + '[data-amb-skel="' + data + '"]' : data = data;
                    return data;
                },
                setContent: function (content) {
                    $(this.getDataSelector()).html(content);
                },
                doSpecialConfig: function () {
                    var icons = localSettings['boxTypeIcon'];
                    var icon = icons[localSettings['boxType']];
                    if (icon['type'] == "img") {
                        loMBSettings['message-icon']['tag'] = "img"
                        var $this = $(this.getDataSelector());
                        $this.attr('src', "img/" + icon['val']);
                    } else {
                        loMBSettings['message-icon']['tag'] = "span"
                        var $this = $(this.getDataSelector());
                        $this.addClass(icon['val']);
                    }
                }
            },
        };


        //type
        var isTypeValid = function (type) {
            if (!loMBSettings.hasOwnProperty(type)) {
                $.error(ASMBErrorIdent + 'The type informed is a invalid type.');
                return false;
            }
            return true;
        };

        //return bool
        var _hasBoxGeneric = function (type) {
            isTypeValid(type);
            return $(loMBSettings[type].getDataSelector()).length > 0;
        };

        //return bool
        var _isVisibleBoxGeneric = function (type) {
            return $(loMBSettings[type].getDataSelector()).is(':visible');
        };

        //return void
        var _makeBoxGeneric = function (type) {
            isTypeValid(type);
            var html = $('<' + loMBSettings[type].tag + '>', { class: loMBSettings[type].styleClass });
            $(html).attr('data-amb-skel', loMBSettings[type].getDataSelector(false));
            $(html).appendTo(loMBSettings[type].getContainer());
            if (loMBSettings[type].hasSpecialConfig) {
                loMBSettings[type].doSpecialConfig();
            }
        };

        //return JQuery
        var _getBoxGeneric = function (type) {
            isTypeValid(type);
            return $(loMBSettings[type].getDataSelector());
        };

        //return void
        var _delBoxGeneric = function (type) {
            isTypeValid(type);
            $(loMBSettings[type].getDataSelector()).remove();
            return void 0;
        };


        var __dataAmbReturn = "amb-box-return";
        var __dataAmbClose = "amb-box-close";
        var __dataAmbControl = "data-amb-control";

        var __dataValueAmbIsButton = "control";
        var __dataValueAmbIsLabel = "label";
        var __dataValueAmbIsIcon = "icon";

        var _getArrayBoxFooterButtons = function () {
            var laButtons = [];
            for (var i = 0; i < localSettings['boxButtons'].length; i++) {
                var lsLabel =     localSettings['boxButtons'][i]['label'];
                var lsClass =     localSettings['boxButtons'][i]['class'];
                var lsReturn =    localSettings['boxButtons'][i]['return'];
                var lsIconClass = localSettings['boxButtons'][i]['iconClass'];
                var lbClose =     localSettings['boxButtons'][i]['close'];
                var loProps =     localSettings['boxButtons'][i]['props'];

                var htmlButton = $('<' + loProps['element'] + '>', { class: lsClass });
                var htmlIcon = $('<span>', { class: lsIconClass });


                if (loProps.hasOwnProperty('attribs')) {
                    if (!$.isEmptyObject(loProps['attribs'])) {
                        var lsAttrib = "";
                        for (lsAttrib in loProps['attribs']) {
                            $(htmlButton).attr(lsAttrib, loProps['attribs'][lsAttrib]);
                        }
                    }
                }

                $(htmlButton).attr(__dataAmbControl, __dataValueAmbIsButton);
                $(htmlButton).data(__dataAmbReturn, lsReturn);
                $(htmlButton).data(__dataAmbClose, lbClose);

                if (lsLabel != "") {
                    var htmlLabel = $('<span>').html(lsLabel);
                    $(htmlLabel).attr(__dataAmbControl, __dataValueAmbIsLabel);
                    $(htmlButton).html(htmlLabel);
                }
                if (lsIconClass != "") {
                    $(htmlIcon).prependTo(htmlButton);
                    $(htmlIcon).attr(__dataAmbControl, __dataValueAmbIsIcon);
                }
                laButtons.push(htmlButton);
            }
            return laButtons;
        };
        var _getArrayBoxHeaderButtons = function () {
            var laHeaderButtons = [];
            var par = localSettings['boxHeaderButtons'];
            for (var i = 0; i < par.length; i++) {
                var lsReturn = localSettings['boxHeaderButtons'][i]['return'];
                var lsIconClass = localSettings['boxHeaderButtons'][i]['iconClass'];
                var lbClose = localSettings['boxHeaderButtons'][i]['close'];
                var loProps = localSettings['boxHeaderButtons'][i]['props'];

                var htmlButton = $('<' + loProps['element'] + '>', { class: "control" });
                var htmlIcon = $('<span>', { class: lsIconClass });

                if (loProps.hasOwnProperty('attribs')) {
                    if (!$.isEmptyObject(loProps['attribs'])) {
                        var lsAttrib = "";
                        for (lsAttrib in loProps['attribs']) {
                            $(htmlButton).attr(lsAttrib, loProps['attribs'][lsAttrib]);
                        }
                    }
                }

                $(htmlButton).attr(__dataAmbControl, __dataValueAmbIsButton);
                $(htmlButton).data(__dataAmbReturn, lsReturn);
                $(htmlButton).data(__dataAmbClose, lbClose);
                $(htmlButton).append(htmlIcon);

                laHeaderButtons.push(htmlButton);
            }
            return laHeaderButtons;
        };
        var _setButtonFocus = function (lnPosition) {
            $($(loMBSettings['footer-content'].getContainer() + " [" + __dataAmbControl + "=" + __dataValueAmbIsButton + "]:eq(" + lnPosition + ")")).focus();
        };

        var _makePlugin = function () {
            for (var lsSetting in loMBSettings) {
                if (!loMBSettings[lsSetting]['isBlockAutoCreate']) {
                    if (lsSetting == "modal" && $(loMBSettings[lsSetting].getDataSelector()).length > 0) {
                        continue;
                    } 
                    _makeBoxGeneric(lsSetting);
                }
            }

            loMBSettings['header-content'].setContent(localSettings['boxTitle']);
            loMBSettings['message-content'].setContent(localSettings['boxMessage']);
            loMBSettings['footer-content'].setContent(_getArrayBoxFooterButtons());
            if (localSettings['boxShowHeaderControls']) {
                loMBSettings['header-options'].setContent(_getArrayBoxHeaderButtons());
            }

            _defineAlternateReturn();

            _eventButtonClick();
            _eventCloseModalClick();
            _eventAutoCloseLoad();
        };



        var _delPlugin = function () {
            __delPlugin(true); 
        };

        var _openPlugin = function () {
            isOpen = true;
            localSettings.onBeforeShow();
            loMBSettings['modal'].doOpen();
            loMBSettings['container'].doOpen();
            loMBSettings['main'].doOpen();
            localSettings.onAfterShow();
        };

        var _closePlugin = function () {
            isOpen = false;
            localSettings.onBeforeClose();
            loMBSettings['modal'].doClose();
            loMBSettings['container'].doClose();
            loMBSettings['main'].doClose();
            localSettings.onAfterClose();
            _eventAutoCloseClear();
            _delPlugin(true);
        };

        var _delPlugin = function (delay) {
            delay === undefined ? delay = false : "";
            if (delay) {
                window.setTimeout(function () {
                    for (var lsSetting in loMBSettings) {
                        _delBoxGeneric(lsSetting);
                    }
                }, 500);
            } else {
                for (var lsSetting in loMBSettings) {
                    _delBoxGeneric(lsSetting);
                }
            }
        };


        var _eventCloseModalClick = function () {
            if (localSettings['closeOnClickModal']) {
                $(loMBSettings['container'].getDataSelector()).click(function (e) {
                    if ($(e.target).data('amb-skel') == loMBSettings['container'].getDataSelector(false)) {
                        _closePlugin();
                    }
                });
            }
        };

        var _execSuccess = function (result, close, location) {
            var objReturn = {};
            objReturn['result'] = result;
            objReturn['resultLocation'] = location;
            localSettings.onSuccess(objReturn);
            if (close) {
                _closePlugin();
            }
        }

        var _eventButtonClick = function () {
            var lsBtnSelector = $(loMBSettings['footer-content'].getDataSelector()).selector + "," + $(loMBSettings['header-options'].getDataSelector()).selector;
            $(lsBtnSelector).find('[' + __dataAmbControl + '=' + __dataValueAmbIsButton + ']').click(function () {
                var lsReturn = ($(this).data(__dataAmbReturn));
                var lbClose = ($(this).data(__dataAmbClose));
                _execSuccess(lsReturn, lbClose, "BUT");
            });
        };

        var _defineAlternateReturn = function () {
            var objReturn = {};
            var par = localSettings['boxAlternateReturn'];
            if (par['selector'] !== "") {
                $(par['selector']).click(function () {
                    _execSuccess($(par['selector']).get(0), par['close'], "ALT");
                });
            }
        };

        var _globalIntervalCounter;
        var _globalTimeoutCounter;
        var _eventAutoCloseClear = function () {
            clearInterval(_globalIntervalCounter);
            clearTimeout(_globalTimeoutCounter);
        };

        var _eventAutoCloseLoad = function () {
            var lnAutoClose = localSettings['boxAutoClose']['timeout'];
            var lsMessageMask = localSettings['boxAutoClose']['message'];
            var fnMessage = function (parameter) {
                return lsMessageMask.replace("%s%", parameter);
            };
            if (lnAutoClose > 0) {
                _makeBoxGeneric('timeout');
                var defineIntervalCounter = function (seconds) {
                    loMBSettings['timeout'].setContent(fnMessage(seconds));
                }
                var lnCount = (lnAutoClose / 1000);
                defineIntervalCounter(lnCount);
                _globalIntervalCounter = setInterval(function () {
                    lnCount--;
                    defineIntervalCounter(lnCount);
                }, 1000);
                _globalTimeoutCounter = setTimeout(function () {
                    _closePlugin();
                    clearInterval(_globalIntervalCounter);
                }, lnAutoClose);
            }
        };

        var _init = function () {
            if ($(loMBSettings['container'].getDataSelector()).length >= 1) {
                _delPlugin(false);
                
            }

            _makePlugin();
            _openPlugin();
            _setButtonFocus(localSettings['boxButtonDefaultPosition']);
        };

        _init();

        this.getMBSettings = function () {
            return loMBSettings;
        };

        this.isOpen = function () {
            return isOpen;
        };

        return this;
    };
})(jQuery);