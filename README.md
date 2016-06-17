<h4>INFORMAÇÕES INICIAIS.</h4>
A caixa de diálogo de elemento de controle gráfico (também chamado dialog box, ou message box) é uma pequena janela que comunica informações para o usuário e solicita ou não uma resposta.
<br/>
Caixas de diálogo são classificadas como "restrita (modal)" ou "sem janela restrita (modeless)", dependendo se eles bloqueiam a interação com o software que iniciou o diálogo. O tipo de caixa de diálogo exibida é dependente da interação de usuário desejada.
<br/>
O plugin <strong>allSIGE MessageBox</strong> foi criado com o propósito de facilitar a interação de usuários com caixas de diálogos, divindo as aplicações .js de messagem em um único plugin.


# EXEMPLO DE USO
    $.allSIGEDynamicMessageBoxSettings({
        boxTitle: "TÍTULO Das Configurações Gerais",
        closeOnClickModal: true,
    }, true);
    $.allSIGEDynamicMessageBox({ boxMessage: "Mensagem de exemplo do plugin" });
           
       
                

<table style="font-size: 12px;">
      <thead>
          <tr>
              <th>PROPRIEDADE</th>
              <td>VALORES</td>
              <td>PADRÃO</td>
              
          </tr>
      </thead>
      <tbody>
          <tr>
              <th><strong>boxType</strong></th>
              <td>none, alert, error, info, success</td>
              <td><strong>none</strong></td>
             
          </tr>
          <tr>
              <th><strong>boxSize</strong></th>
              <td>xs, sm, md, lg, full, ou qualquer outra medida CSS. Ex: 115px</td>
              <td><strong>md</strong></td>
             
          </tr>
          <tr>
              <th><strong>boxTitle</strong></th>
              <td>texto do título.</td>
              <td><strong>allSIGE MessageBox</strong></td>
             
          </tr>
          <tr>
              <th><strong>boxMessage</strong></th>
              <td>mensagem ou html partial do modal.</td>
              <td><strong></strong></td>
             
          </tr>
          <tr>
              <th><strong>boxButtonAlign</strong></th>
              <td>center, left, right</td>
              <td><strong>right</strong></td>
             
          </tr>
          <tr>
              <th><strong>topPosition</strong></th>
              <td>medida css</td>
              <td><strong>100px</strong></td>
             
          </tr>
          <tr>
              <th><strong>boxShowIcon</strong></th>
              <td>true, false</td>
              <td><strong>false</strong></td>
             
          </tr>
          <tr>
              <th><strong>boxTypeIcon</strong></th>
              <td>"none" : { type: "ico", val: "fa fa-close" },<br/>"error" : { type: "img", val: "error.png" },</td>
              <td><strong></strong></td>
            
          </tr>
          <tr>
              <th><strong>boxShowHeaderControls</strong></th>
              <td>true, false</td>
              <td><strong>true</strong></td>
             
          </tr>
          <tr>
              <th><strong>closeOnClickModal</strong></th>
              <td>true, false</td>
              <td><strong>true</strong></td>
             
          </tr>
          <tr>
              <th><strong>boxAutoClose</strong></th>
              <td>{ timeout: 0, message: "Closing in %s% seconds..." }</td>
              <td><strong></strong></td>
            
          </tr>
          <tr>
              <th><strong>effects</strong></th>
              <td>{ modalIn: "fadeIn", modalOut: "fadeOut", boxIn: "fadeInDown", boxOut: "fadeOutUp" }</td>
              <td><strong></strong></td>
            
          </tr>
          <tr>
              <th><strong>defaultStyle</strong></th>
              <td>style name. Ex: ".style",".myStyle"</td>
              <td><strong>style01</strong></td>
             
          </tr>
          <tr>
              <th><strong>boxAlternateReturn</strong></th>
              <td>{ selector: "", close: true }</td>
              <td><strong></strong></td>
              
          </tr>
          <tr>
              <th><strong>boxHeaderButtons</strong></th>
              <td>{ return: "OK", close: true, iconClass: "fa fa-close", props: { element: "li", attribs: { } } }</td>
              <td><strong></strong></td>
             
          </tr>
          <tr>
              <th><strong>boxButtons</strong></th>
              <td>{ label: "", class: "btn", return: "OK", close: true, iconClass: "", props: { element: "button", attribs: { } } }</td>
              <td><strong></strong></td>
             
          </tr>
          <tr>
              <th><strong>boxButtonDefaultPosition</strong></th>
              <td>int</td>
              <td><strong>1</strong></td>
             
          </tr>
          <tr>
              <th><strong>onSuccess</strong></th>
              <td>Function</td>
              <td></td>
             
          </tr>
          <tr>
              <th><strong>onBeforeShow</strong></th>
              <td>Function</td>
              <td></td>
             
          </tr>
          <tr>
              <th><strong>onAfterShow</strong></th>
              <td>Function</td>
              <td></td>
              
          </tr>
          <tr>
              <th><strong>onBeforeClose</strong></th>
              <td>Function</td>
              <td></td>
              
          </tr>
          <tr>
              <th><strong>onAfterClose</strong></th>
              <td>Function</td>
              <td></td>
              
          </tr>
      </tbody>
  </table>
