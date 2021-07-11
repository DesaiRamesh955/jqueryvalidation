$(document).ready(() => {
    $("#form").on("submit", (e) => {
        e.preventDefault()
        //easy way
        const form = $("#form input, #form select")
        let status =false
        
        form.each(function(){
            if(!validate($(this))){
               status = false
                //you can apply custom style or animation on $(this)
               return false
            }else{
                status = true
            }
        })
           if(status){
            //AJAX Request
        }
        
//------------------------------------------------------------
        
        //one by one
        let fname = $("#fname")
        let lname = $("#lname")
        let email = $("#email")
        let mobile = $("#mobile")
        let pass = $("#pass")
        let repass = $("#repass")
        let select = $("#select")
        let radio = $(".gender")
        let file = $("#file")

        let status = 0



        if (!validate(fname)) {
            status = 0
            return false
        } else { status = 1 }

        if (!validate(lname)) {
            status = 0
            return false
        } else { status = 1 }

        if (!validate(email)) {
            status = 0
            return false
        } else { status = 1 }

        if (!validate(mobile)) {
            status = 0
            return false
        } else { status = 1 }

        if (!validate(pass)) {
            status = 0
            return false
        } else { status = 1 }

        if (!validate(repass)) {
            status = 0
            return false
        } else { status = 1 }

        if (!validate(select)) {
            status = 0
            return false
        } else { status = 1 }

        if (!validate(radio)) {
            status = 0
            return false
        } else { status = 1 }
        
        if (!validate(file)) {
            status = 0
            return false
        } else { status = 1 }
        
        if(status){
            //AJAX Request
        }

    })


})
