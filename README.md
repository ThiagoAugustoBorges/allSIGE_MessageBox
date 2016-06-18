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

A configuração não é obrigatória inicialmente. Ela será usada apenas para uma configuração padrão entre todas as janelas de mensagens, para que não exista a necessidade de informar a mesma configuração para todas as mensagens exibidas. Tomando essa configuração de exemplo, se executarmos agora uma chamada de função do plugin, informando apenas um paramêtro. 
```javascript
$.allSIGEDynamicMessageBox({ boxMessage: "Mensagem de exemplo do plugin" });
```
Funciona! :+1:
