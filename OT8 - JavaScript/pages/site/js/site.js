function validaFaleConosco(){
    if (document.frmfaleconosco.txtnome.value==""){
        alert("Preencha o campo nome.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    //validação do telefone
    if (document.frmfaleconosco.txtfone.value==""){
        alert("Preencha o campo telefone.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }
    //validação do email
    if (document.frmfaleconosco.txtmail.value==""){
        alert("Preencha o campo e-mail.");
        document.frmfaleconosco.txtmail.focus();
        return false;
    }
    //validação do motivo
    if (document.frmfaleconosco.selemotivo.value==""){
        alert("Preencha o campo motivo.");
        document.frmfaleconosco.selemotivo.focus();
        return false;
    }
    //validação do comentário
    if (document.frmfaleconosco.comentario.value==""){
        alert("Preencha o campo comentário.");
        document.frmfaleconosco.comentario.focus();
        return false;
    }
    return true;
}

function verificaMotivo(motivo){
    //capturamos a estrutura da div cujo id é opcaoProduto na variavel elemento
    var elemento = document.getElementById("opcaoProduto");

    //se o valor da variavel motivo fo "pr"
    if(motivo=="PR"){
        //criamos um elemento (tag) <select> e guardamos na varialvel hemonima
        var select = document.createElement("select");
        //setamos nesse novo select o atributo 'name' com o valor 'selproduto'
        select.setAttribute("name", "selproduto");
        //conteudo atual da variavel select:
        //<select name="selproduto"></select>

    //criamos um elemento (tag) <option> e guardamos na varialvel homonima
    var option = document.createElement("option");
    //setamos nesse novo option o atributo 'value' com o valor vazio
    option.setAttribute("value", "");
    //criamos um nó de texto "escolha" e gravamos na variavel 'texto'
    var texto = document.createTextNode("escolha");
    //colocamos o nó de texto criado como "filho" da tag option criada
    option.appendChild(texto);
    //conteudo atual da variavel option
    //<option value="">escolha</option>

    //colocamos o option criado como "filho" da tag select criada
    select.appendChild(option);
    //conteudo atual da variavel select:
    //<select name="selproduto">option value="">Escolha</option></select>

    //criamos um elemento (tag) <option> e guardamos na variavel homonima
    var option = document.createElement("option");
    //setamos nesse novo option o atributo 'value' com o valor "GE"
    option.setAttribute("value", "GE");
    //criamos um nó de texto "geladeira" e gravamos na variavel 'texto'
    var texto = document.createTextNode("Geladeira");
    //colocamos o nó de texto criado como "filho" da tag option criada
    option.appendChild(texto);
    //conteudo atual da variavel option:
    //<option value="GE">Geladeira</option>

    //colocamos o option criado como "filho" da tag select criada
    select.appendChild(option);
    //conteudo atual da variavel select:
    /*
    <select name="selproduto">
    <option value="">Escolha</option><option value="FR">Freezer</option><option value="GE">Geladeira</option>
    </select>
    */

    //colocamos o select criado como "filho" da tag div capturada no inicio da função
    elemento.appendChild(select);
    //se o valor da variavel motivo nao for "PR"...
    }else{
        //se a div possuir algum "primeiro filho"
        if (elemento.firstChild)
            //removemos ele
        elemento.removeChild(elemento.firstChild);
    }
}//fim da funcao verificaMotivo