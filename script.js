$(document).ready(() => {
    $("#form").on("submit", (e) => {
        e.preventDefault()
        let fname = $("#fname")
        let lname = $("#lname")
        let email = $("#email")
        let mobile = $("#mobile")
        let pass = $("#pass")
        let repass = $("#repass")

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



        console.log(status)

    })


})