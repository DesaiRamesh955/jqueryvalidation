function validate(input) {

    const  inputType = input.attr("type")
    input =  (inputType == "radio") ? $(`.${input.attr("class")}`) : input

   
    let data = input.data()
    let value
    if(data.file){
        value = input[0].files
    }else{
        value = input.val().trim()
    }
   
   
    if (data.require) {
        if (value == "" || value.length < 1) {
            $(`#${data.display}`).text(data.error)
            return false
        } else {
            $(`#${data.display}`).text("")
        }
    }
       

    if(data.check){
        if(!checkCheckbox(input)){
            $(`#${data.display}`).text(data.error)
            return false
        }else{
            $(`#${data.display}`).text("")
        }
    }

    if (data.radio) {
        if (!checkRadio(input)) {
            $(`#${data.display}`).text(data.error)
            return false
        } else {
            $(`#${data.display}`).text("")
        }
    }

    if (data.email) {


        if (email(value)) {
            $(`#${data.display}`).text("")
        } else {
            $(`#${data.display}`).text(parseJSON(data.email).msg)
            return false
        }
    }

    if (data.onlychar) {
        if (charOnly(value)) {
            $(`#${data.display}`).text("")
        } else {
            $(`#${data.display}`).text(parseJSON(data.onlychar).msg)
            return false
        }
    }

    if (data.charwithspace) {

        if (charWithSpace(value)) {
            $(`#${data.display}`).text("")
        } else {
            $(`#${data.display}`).text(parseJSON(data.charwithspace).msg)
            return false
        }
    }

    if (data.number) {
        if (numberOnly(value)) {
            $(`#${data.display}`).text("")
        } else {
            $(`#${data.display}`).text(parseJSON(data.number).msg)
            return false
        }
    }

    if (data.long) {
        let numdata = parseJSON(data.long)
        if (value.length == numdata.len) {
            $(`#${data.display}`).text("")
        } else {
            $(`#${data.display}`).text(numdata.msg)
            return false
        }
    }

    if (data.min) {
        let numdata = parseJSON(data.min)
        if (value.length >= numdata.len) {
            $(`#${data.display}`).text("")
        } else {
            $(`#${data.display}`).text(numdata.msg)
            return false
        }
    }

    if (data.max) {
        let numdata = parseJSON(data.max)
        if (value.length <= numdata.len) {
            $(`#${data.display}`).text("")
        } else {
            $(`#${data.display}`).text(numdata.msg)
            return false
        }
    }

    if (data.match) {
        let tomatch = $(`#${parseJSON(data.match).to}`).val()

        if (value == tomatch) {
            $(`#${data.display}`).text("")
        } else {
            $(`#${data.display}`).text(parseJSON(data.match).msg)
            return false
        }
    }

    if(data.file){
      
        let isFile = false
        let allData = parseJSON(data.config)
        let allow = allData.allow.split(',').map(a => a.toLowerCase().trim())
      
        for(let i=0;i<value.length;i++){
            let ext = value[0].name.substring(value[0].name.lastIndexOf('.') + 1).toLowerCase().trim()
            if(allow.indexOf(ext) > -1){
                isFile= true
            }else{
                $(`#${data.display}`).text(allData.msg)
                isFile = false
                return false
            }
        }

        if(data.size){
            for(let i=0;i<value.length;i++){
                let allow_size = parseInt(parseJSON(data.size).size)
                let size = parseInt((value[i].size/1024).toFixed(0))
                
                if(size <= allow_size){
                    isFile = true
                }else{
                    $(`#${data.display}`).text(parseJSON(data.size).msg)
                    isFile= false
                }
            }
        }
        
       return isFile
       
}

  




    return true
}





function parseJSON(hash) {
    return JSON.parse(JSON.stringify(hash))
}

function email(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(email.toLowerCase())) {
        return true
    } else {
        return false
    }
}
function charOnly(hash) {
    let reg = /^[a-zA-Z]+$/

    if (reg.test(hash)) {
        return true
    } else {
        return false
    }
}

function charWithSpace(hash) {
    let reg = /^[a-zA-Z ]+$/

    if (reg.test(hash)) {
        return true
    } else {
        return false
    }
}

function numberOnly(hash) {
    let reg = /^[0-9]+$/

    if (reg.test(hash)) {
        return true
    } else {
        return false
    }
}

function checkRadio(input) {
    let isvalid = false
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked == true) {
            return true
        } else {
            isvalid = false
        }
    }
    return isvalid
}

function checkCheckbox(input){

    let isvalid = false
    let name = input.attr('class').split(' ')[0]
    if($(`.${name}:checked`).length > 0){
        isvalid = true
    }else{
        isvalid = false
    }

    return isvalid

}
