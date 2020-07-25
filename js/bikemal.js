"use strict";

(function (hljs, domtoimage) {

    if (!hljs) {
        console.error("Highlight JS not loaded. Syntax highlighting will not work.")
    }

    if (!domtoimage) {
        console.error("dom-to-image not loaded. Cannot save output.")
    }

    // Get useful document elements
    var cmbSelect = document.getElementById("cmbSelect")
    var container = document.getElementById("container")
    var cmbStyleSelect = document.getElementById("cmbStyleSelect")
    var stylelinktag = document.getElementById("codestyle")
    var cmdEdit = document.getElementById("cmdEdit")
    var pnlView = document.getElementById("bm-codeview")
    var txtEditor = document.getElementById("bm-codeeditor")
    var cmdSave = document.getElementById("cmdSave")

    // Look selection
    var prevlook = "macesque"
    cmbSelect.value = prevlook
    container.classList.add(prevlook)
    cmbSelect.addEventListener("input", function cmbSelect_input(e) {
        let newlook = cmbSelect.value
        container.classList.toggle(prevlook)
        container.classList.toggle(newlook)
        prevlook = newlook
    })

    // Code style selection
    const STYLECSSBASE = "http://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/"
    cmbStyleSelect.addEventListener("input", function cmbStyleSelect_input(e) {
        stylelinktag.href = STYLECSSBASE + cmbStyleSelect.value + ".min.css"
    })

    // Editor state management
    var editstate = "view"
    cmdEdit.addEventListener("click", function cmdEdit_click(e) {
        pnlView.classList.toggle("hidden")
        txtEditor.classList.toggle("hidden")

        if (editstate === "view") {
            editstate = "edit"
            e.target.innerText = "View"
        } else {
            editstate = "view"
            e.target.innerText = "Edit"

            // Copy edited text into view panel
            // and trigger highlighting.
            let code = pnlView.childNodes[0]
            // Do NOT use innerText property.
            // textContent is required.
            code.textContent = txtEditor.value

            if (hljs) {
                hljs.highlightBlock(code)
            }
        }
    })

    // Image saving
    if (domtoimage) {
        cmdSave.addEventListener("click", function (e) {
            domtoimage.toJpeg(container, { quality: 1 })
                .then(function (dataUrl) {
                    let link = document.createElement('a');
                    link.download = 'code-snapshot.jpeg';
                    link.href = dataUrl;
                    link.click();
                });
        })
        cmdSave.classList.toggle("hidden")
    }

    // Syntax highlight on load
    if (hljs) {
        hljs.initHighlightingOnLoad()
    }

})(window.hljs, window.domtoimage);