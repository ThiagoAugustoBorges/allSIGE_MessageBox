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




