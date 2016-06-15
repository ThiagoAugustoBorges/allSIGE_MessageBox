<h4>INFORMAÇÕES INICIAIS.</h4>
A caixa de diálogo de elemento de controle gráfico (também chamado dialog box, ou message box) é uma pequena janela que comunica informações para o usuário e solicita ou não uma resposta.
<br/>
Caixas de diálogo são classificadas como "restrita (modal)" ou "sem janela restrita (modeless)", dependendo se eles bloqueiam a interação com o software que iniciou o diálogo. O tipo de caixa de diálogo exibida é dependente da interação de usuário desejada.

O plugin <strong>allSIGE MessageBox</strong> foi criado com o propósito de facilitar a interação de usuários com caixas de diálogos, divindo as aplicações .js de messagem em um único plugin.


# EXEMPLO DE USO
    $.allSIGEDynamicMessageBoxSettings({
        boxTitle: "TÍTULO Das Configurações Gerais",
        closeOnClickModal: true,
    }, true);
    $.allSIGEDynamicMessageBox({ boxMessage: "Mensagem de exemplo do plugin" });
           
       
                

<table class="table table-condensed table-bordered table-hover">
      <thead>
          <tr>
              <th style="background-color: #FFF;">PROPRIEDADE</th>
              <td style="background-color: #FFF;">VALORES</td>
              <td style="background-color: #FFF;">PADRÃO</td>
              
          </tr>
      </thead>
      <tbody>
          <tr>
              <th style="background-color: #FFF;"><strong>boxType</strong></th>
              <td>none, alert, error, info, success</td>
              <td><strong>none</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxSize</strong></th>
              <td>xs, sm, md, lg, full, ou qualquer outra medida CSS. Ex: 115px</td>
              <td><strong>md</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxTitle</strong></th>
              <td>texto do título.</td>
              <td><strong>allSIGE MessageBox</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxMessage</strong></th>
              <td>mensagem ou html partial do modal.</td>
              <td><strong></strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxButtonAlign</strong></th>
              <td>center, left, right</td>
              <td><strong>right</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>topPosition</strong></th>
              <td>medida css</td>
              <td><strong>100px</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxShowIcon</strong></th>
              <td>true, false</td>
              <td><strong>false</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxTypeIcon</strong></th>
              <td>"none" : { type: "ico", val: "fa fa-close" },<br/>"error" : { type: "img", val: "error.png" },</td>
              <td><strong></strong></td>
            
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxShowHeaderControls</strong></th>
              <td>true, false</td>
              <td><strong>true</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>closeOnClickModal</strong></th>
              <td>true, false</td>
              <td><strong>true</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxAutoClose</strong></th>
              <td>{ timeout: 0, message: "Closing in %s% seconds..." }</td>
              <td><strong></strong></td>
            
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>effects</strong></th>
              <td>{ modalIn: "fadeIn", modalOut: "fadeOut", boxIn: "fadeInDown", boxOut: "fadeOutUp" }</td>
              <td><strong></strong></td>
            
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>defaultStyle</strong></th>
              <td>style name. Ex: ".style",".myStyle"</td>
              <td><strong>style01</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxAlternateReturn</strong></th>
              <td>{ selector: "", close: true }</td>
              <td><strong></strong></td>
              
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxHeaderButtons</strong></th>
              <td>{ return: "OK", close: true, iconClass: "fa fa-close", props: { element: "li", attribs: { } } }</td>
              <td><strong></strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxButtons</strong></th>
              <td>{ label: "", class: "btn", return: "OK", close: true, iconClass: "", props: { element: "button", attribs: { } } }</td>
              <td><strong></strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>boxButtonDefaultPosition</strong></th>
              <td>int</td>
              <td><strong>1</strong></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>onSuccess</strong></th>
              <td>Function</td>
              <td></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>onBeforeShow</strong></th>
              <td>Function</td>
              <td></td>
             
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>onAfterShow</strong></th>
              <td>Function</td>
              <td></td>
              
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>onBeforeClose</strong></th>
              <td>Function</td>
              <td></td>
              
          </tr>
          <tr>
              <th style="background-color: #FFF;"><strong>onAfterClose</strong></th>
              <td>Function</td>
              <td></td>
              
          </tr>
      </tbody>
  </table>
