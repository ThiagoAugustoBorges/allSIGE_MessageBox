$(document).ready(function () {
    $('[data-toggle="dropdown"]').dropdown();



    $.allSIGEDynamicMessageBoxSettings({
        defaultStyle: $('#chose-style').val()
    }, true);

    $('#chose-style').on('change', function () {
        $.allSIGEDynamicMessageBoxSettings({
            defaultStyle: $(this).val()
        }, true);
    });

});


function EX__boxType(par) {
    $.allSIGEDynamicMessageBox({
        boxType: par
    });
}

function EX__boxSize(par) {
    $.allSIGEDynamicMessageBox({
        boxSize: par
    });
}

function EX__boxTitle(par) {
    $.allSIGEDynamicMessageBox({
        boxTitle: par
    });
}

function EX__boxMessage(par) {
    $.allSIGEDynamicMessageBox({
        boxMessage: par
    });
}

function EX__boxButtonAlign(par) {
    $.allSIGEDynamicMessageBox({
        boxButtonAlign: par
    });
}

function EX__boxShowIcon(par) {
    par == "true" ? par = true : par = false;
    $.allSIGEDynamicMessageBox({
        boxShowIcon: par
    });
}

function EX__boxShowHeaderControls(par) {
    par == "true" ? par = true : par = false;
    $.allSIGEDynamicMessageBox({
        boxShowHeaderControls: par
    });
}

function EX__boxAutoClose(par) {
    switch (par) {
        case "1":
            $.allSIGEDynamicMessageBox({ boxMessage: "Timeout <= 0 ? (NO AUTOCLOSE)", boxAutoClose: { timeout: 0, message: 'Closing in %s% seconds...'} });
            break;
        case "2":
            $.allSIGEDynamicMessageBox({ boxAutoClose: { timeout: 10, message: 'Closing in %s% seconds...' } });
            break;
        case "3":
            $.allSIGEDynamicMessageBox({ boxAutoClose: { timeout: 5, message: '%s% seconds to close...' } });
            break;
    }
}

function EX__boxAlternateReturn(par) {
    switch (par) {
        case "1":
            $.allSIGEDynamicMessageBox({ boxMessage: "NO alternate return!" });
            break;
        case "2":
            var msg2 = $.allSIGEDynamicMessageBox({
                boxMessage: "Hey! click <strong id='click-me' style='color:red; cursor: pointer'>MEEE!</strong> ;D",
                boxAlternateReturn: { selector: "strong[id='click-me']", close: false },
                boxButtons: [{ close: false }],
                boxHeaderButtons: [{ close: false }],
                onSuccess: function (par) {
                    msg2.setBoxMessage('YES! You run the return by clicking on a word MEEE!. Or in header/footer button ;D');
                    msg2.setBoxType('success');
                }
            });
            break;
        case "3":
            var msg2 = $.allSIGEDynamicMessageBox({
                boxMessage: "<ul><li class='no-click'>I'M VALUE 1</li><li class='no-click'>I'M VALUE 2</li><li class='no-click'>I'M VALUE 3</li><li class='click-class'>I'M VALUE 4 (CLICK MEEEEEE)...</li></ul>",
                boxAlternateReturn: { selector: "li.click-class", close: false },
                boxButtons: [{ close: false }],
                boxHeaderButtons: [{ close: false }],
                onSuccess: function (par) {
                    msg2.setTopPosition('150px');
                    msg2.setTopPosition('135px');
                    msg2.setBoxMessage('Click... RESULT = "I\'M VALUE 4"');
                    msg2.setBoxType('alert');
                }
            });
            break;
        case "4":
            $.allSIGEDynamicMessageBox({
                boxMessage: "<button id='btn-exit' class='btn btn-danger'>CLICK ME TO EXIT!</button>",
                boxAlternateReturn: { selector: "#btn-exit", close: true },
            });
            break;
    }
}


function EX__boxHeaderButtons(par) {
    switch (par) {
        case "1":
            $.allSIGEDynamicMessageBox({ boxMessage: "Default header button: CROSS!" });
            break;
        case "2":
            $.allSIGEDynamicMessageBox({
                boxMessage: "Header buttons: Close and Bank",
                boxHeaderButtons: [
                    { iconClass: "fa fa-close" },
                    { iconClass: "fa fa-bank" }
                ]
            });
            break;
        case "3":
            $.allSIGEDynamicMessageBox({
                boxMessage: "Header buttons: Close, Bank and Adjust",
                boxHeaderButtons: [
                    { iconClass: "fa fa-close" },
                    { iconClass: "fa fa-bank" },
                    { iconClass: "fa fa-adjust" }
                ]
            });
            break;
        case "4":
            $.allSIGEDynamicMessageBox({
                boxMessage: "Header buttons: Bug, Beer and Bus",
                boxHeaderButtons: [
                    { iconClass: "fa fa-bug" },
                    { iconClass: "fa fa-beer" },
                    { iconClass: "fa fa-bus" }
                ]
            });
            break;
        case "5":
            var msg = $.allSIGEDynamicMessageBox({
                boxMessage: "Header buttons: Bluetooth",
                boxHeaderButtons: [
                    { return: "BLU", iconClass: "fa fa-bluetooth", close: false },
                ],
                onSuccess: function (par) {
                    if (par.result == "BLU") {
                        msg.setBoxMessage('Establishing connection with the bluetooth device...').setBoxType('error').setTopPosition('100px').setTopPosition('150px');
                    }
                }
            });
            break;
    }
}



function EX__boxButtons(par) {
    switch (par) {
        case "1":
            $.allSIGEDynamicMessageBox({
                boxMessage: "Footer buttons: OK",
            });
        break;
        case "2":
            $.allSIGEDynamicMessageBox({
                boxMessage: "Footer buttons: OK, Cancel",
                boxButtons: [{}, { label:"Cancel" }]
            });
        break;
        case "3":
            $.allSIGEDynamicMessageBox({
                boxMessage: "Footer buttons: OK, Retry and Cancel",
                boxButtons: [{}, { label: "Retry", close: false }, { label: "Cancel" }]
            });
        break;
        case "4":
            $.allSIGEDynamicMessageBox({
                boxMessage: "Footer buttons: Redirect to Google, Call Function and Close",
                boxButtons: [
                    {
                        label: "Redirect to Google", props: {
                            element: "a",
                            attribs: {
                                href: "https://www.google.com.br/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#newwindow=1&q=allsige",
                                target: "_blank"
                            }
                        }
                    },
                    {
                        label: "Call Function", props: {
                        element: "button",
                        attribs: {
                            onclick: "alert('FIRE! Call Function!!!!!!')"
                        }
                    }
                    },
                    { iconClass: "fa fa-close" }
                ]
            });
        break;
        case "5":
            var msg = $.allSIGEDynamicMessageBox({
                boxMessage: "Footer buttons: Call Function, Write 'Hello!'",
                boxButtons: [
                    {
                        iconClass: "fa fa-bank", props: {
                            element: "button",
                            attribs: {
                                onclick: "alert('FIRE! Call Function!!!!!!')"
                            }
                        }
                    },
                    { return: "W", label: "Write 'Hello!'", close: false }
                ],
                onSuccess: function (par) {
                    if (par.result == 'W') {
                        msg.setBoxType('info');
                        msg.setBoxMessage('Hello!! ;D');
                    }
                }
            });
        break;
    }
}


function EX__boxButtonDefaultPosition(par) {
    $.allSIGEDynamicMessageBox({
        boxMessage: "Focus on button at position " + par,
        boxButtons: [{ label: "POS 1" }, { label: "POS 2" }, { label: "POS 3" }],
        boxButtonDefaultPosition: par
    });
}




function EX__effects(par) {
    switch (par) {
        case "1":
            $.allSIGEDynamicMessageBox({ effects: { modalIn: "fadeIn", modalOut: "fadeOut", boxIn: "fadeIn", boxOut: "fadeOut" } });
            break;
        case "2":
            $.allSIGEDynamicMessageBox({ effects: { modalIn: "fadeIn", modalOut: "fadeOut", boxIn: "rotateIn", boxOut: "rotateOut" } });
            break;
        case "3":
            $.allSIGEDynamicMessageBox({ effects: { modalIn: "fadeIn", modalOut: "fadeOut", boxIn: "tada", boxOut: "fadeOutLeftBig" } });
            break;
        case "4":
            $.allSIGEDynamicMessageBox({ effects: { modalIn: "flash", modalOut: "fadeOut", boxIn: "fadeInDown", boxOut: "fadeOutUp" } });
            break;
        case "5":
            $.allSIGEDynamicMessageBox({ effects: { modalIn: "flipInY", modalOut: "fadeOut", boxIn: "flipInX", boxOut: "flipOutX" } });
            break;
    }
}

function EX__closeOnClickModal(par) {
    par == "true" ? par = true : par = false;
    $.allSIGEDynamicMessageBox({
        boxMessage: "Click outside the box to try to close the window.",
        closeOnClickModal: par
    });
}

function EX__topPosition(par) {
    switch (par) {
        case "1":
            $.allSIGEDynamicMessageBox({ topPosition: "100px" });
            break;
        case "2":
            $.allSIGEDynamicMessageBox({ topPosition: "1%" });
            break;
        case "3":
            $.allSIGEDynamicMessageBox({ topPosition: "10px" });
            break;
    }
}