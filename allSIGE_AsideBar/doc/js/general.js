$(document).ready(function () {
    $('[data-toggle="dropdown"]').dropdown();

    $.allSIGEDynamicMessageBoxSettings({
        defaultStyle: "style02"
    }, true);
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
    }
}