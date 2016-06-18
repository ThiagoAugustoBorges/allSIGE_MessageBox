# JQuery allSIGE MessageBox

O plugin allSIGE MessageBox foi criado com o propósito de facilitar a interação de usuários com caixas de diálogos, divindo as aplicações .js de messagem em um único plugin.

### DEFININDO A CONFIGURAÇÃO INICIAL

Para o funcionamento da DOC, será adotada a seguinte configuração padrão pelo plugin (lembrando que qualquer uma dessas configurações podem ser alteradas na chamada da função do plugin) 
```javascript
$.allSIGEDynamicMessageBoxSettings({
    boxTitle: "TÍTULO Das Configurações Gerais",
    closeOnClickModal: true,
}, true);
```

A configuração não é obrigatória inicialmente. Ela será usada apenas para a entrada de valores padrões.
Sendo necessário então apenas:
```javascript
$.allSIGEDynamicMessageBox({ 
	boxMessage: "Mensagem de exemplo do plugin"
    //closeOnClickModal: true, => closeOnClickModal IRÁ HERDAR DE Settings
});
```
Funciona! :+1:

##### ENTRADAS:

> BoxType
```javascript
//prop: boxType
//type: string
//accept: none, alert, error, info, success
//default: "none"
$.allSIGEDynamicMessageBox({ 
	boxType: "alert"
});
```
##
> boxSize
```javascript
//prop: boxSize
//type: string
//accept: xs, sm, md, lg, full or css metrics
//default: "md"
$.allSIGEDynamicMessageBox({ 
	boxSize: "480px"
});
```
##
> boxTitle
```javascript
//prop: boxTitle
//type: string
//accept: string
//default: "allSIGE MessageBox"
$.allSIGEDynamicMessageBox({ 
	boxTitle: "MY DIALOG BOX TITLE"
});
```
##
> boxMessage
```javascript
//prop: boxMessage
//type: string
//accept: string or html partial
//default: ""
$.allSIGEDynamicMessageBox({ 
	boxMessage: "<strong>Hello!</strong>"
});
```
##
> boxButtonAlign
```javascript
//prop: boxButtonAlign
//type: string
//accept: center, left, right
//default: "right"
$.allSIGEDynamicMessageBox({ 
	boxButtonAlign: "right"
});
```
##
> topPosition
```javascript
//prop: topPosition
//type: string
//accept: css metrics
//default: "100px"
$.allSIGEDynamicMessageBox({ 
	topPosition: "5%"
});
```
##
> boxShowIcon
```javascript
//prop: boxShowIcon
//type: bool
//accept: true,false
//default: false
$.allSIGEDynamicMessageBox({ 
	boxShowIcon: true
});
```
##
> boxTypeIcon
```javascript
//prop: boxTypeIcon
//type: object {string,object {string,string}}
//accept: object {string,object {string,string}}
//default: object
$.allSIGEDynamicMessageBox({ 
	boxTypeIcon: {
      "none"    : { type: "img", val: "none.png" },
      "success" : { type: "img", val: "success.png" },
      "error"   : { type: "ico", val: "fa fa-close" },
      "info"    : { type: "ico", val: "glyphicons glyphicons-leaf" },
      "alert"   : { type: "ico", val: "icon my-icon" }
    },
});
```
##
> boxShowHeaderControls
```javascript
//prop: boxShowHeaderControls
//type: bool
//accept: true,false
//default: true
$.allSIGEDynamicMessageBox({ 
	boxShowHeaderControls: true
});
```
##
> closeOnClickModal
```javascript
//prop: closeOnClickModal
//type: bool
//accept: true,false
//default: true
$.allSIGEDynamicMessageBox({ 
	closeOnClickModal: true
});
```
##
> boxAutoClose
```javascript
//prop: boxAutoClose
//type: object {int,string}
//accept: object {int,string}
//default: object {0,""}
$.allSIGEDynamicMessageBox({ 
	boxAutoClose: { 
    	timeout: 0, 
        message: "Closing in %s% seconds..."
    },
});
```
##
> effects
```javascript
//NEEDS: https://daneden.github.io/animate.css/animate.min.css IN PROJECT
//prop: effects
//type: object {string}
//accept: object {string}
//default: object {string}
$.allSIGEDynamicMessageBox({ 
	effects: { 
      modalIn: "fadeIn", 
      modalOut: "fadeOut", 
      boxIn: "fadeInDown", 
      boxOut: "fadeOutUp" 
    }
});
```
##
> defaultStyle
```javascript
//prop: defaultStyle
//type: string
//accept: style01, style02, another string..
//default: "style02"
$.allSIGEDynamicMessageBox({ 
	defaultStyle: "myOwnStyle"
    //and CSS come .message-box-body .myOwnStyle
});
```
##
> boxAlternateReturn
```javascript
//prop: boxAlternateReturn
//type: object {string,bool}
//accept: object {string,bool}
//default: object {"",true}
$.allSIGEDynamicMessageBox({ 
	boxAlternateReturn: { 
      selector: ".table > tbody > tr[data-row-id]", 
      close: true 
    }
    //onSuccess executed in tr click event!
});
```
##
> boxButtons
```javascript
//prop: boxButtons
//type: array
//accept: array of object
//default: [{}]
$.allSIGEDynamicMessageBox({ 
	boxButtons: 
    [
      { 
      	label: "YES", class: "btn", return: "_yes", close: true, 
        props: { 
          element: "button", 
          attribs: { } 
        } 
      },
      { 
      	label: "NO", class: "btn", return: "_no", close: false, 
        iconClass: "glyphicons glyphicons-dog", 
        props: { element: "a", attribs: { 
                  href:"http://www.google.com"
                  target: "_blank"
          		} 
        	} 
      },
    ]
});
```
##
> boxHeaderButtons
```javascript
//prop: boxHeaderButtons
//type: object {string,bool,string,object {string,object}}
//accept: object {string,bool,string,object {string,object}}
//default: object { "OK",true,"fa fa-close", {"li",{ }} }
$.allSIGEDynamicMessageBox({ 
	boxHeaderButtons: { 
      return: "clickHeader!", close: true, iconClass: "fa fa-close", 
      props: { 
        element: "li", 
        attribs: { } 
      } 
    }
});
```
##
> onSuccess
```javascript
//prop: onSuccess
//type: function
//accept: function
//default: function(data){ }
$.allSIGEDynamicMessageBox({ 
	onSuccess: function(data){
    	console.log(data.result);
    }
});
```
##
> onBeforeShow
```javascript
//prop: onBeforeShow
//type: function
//accept: function
//default: function(){ }
$.allSIGEDynamicMessageBox({ 
	onBeforeShow: function(){
    	alert('ON BEFORE SHOW MODAL!');
    }
});
```
##
> onAfterShow
```javascript
//prop: onAfterShow
//type: function
//accept: function
//default: function(){ }
$.allSIGEDynamicMessageBox({ 
	onAfterShow: function(){
    	alert('ON AFTER SHOW MODAL!');
    }
});
```
##
> onBeforeClose
```javascript
//prop: onBeforeClose
//type: function
//accept: function
//default: function(){ }
$.allSIGEDynamicMessageBox({ 
	onBeforeClose: function(){
    	alert('ON BEFORE CLOSE MODAL!');
    }
});
```
##
> onAfterClose
```javascript
//prop: onAfterClose
//type: function
//accept: function
//default: function(){ }
$.allSIGEDynamicMessageBox({ 
	onAfterClose: function(){
    	alert('ON AFTER CLOSE MODAL!');
    }
});
```
##

Todas as demais configurações como botões, estilo do modal, tamanho do modal, etc... assumem um padrão se não definidos. 

THX..  [http://www.allsige.com](https://www.allsige.com/)

Thiago Augusto Borges : [My LinkedIn](https://www.linkedin.com/in/thiagoaborges?trk=nav_responsive_tab_profile_pic)



