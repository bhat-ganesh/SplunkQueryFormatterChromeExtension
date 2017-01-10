//alert("Code Executed ... ");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Search", "g"), "--- CHANGED ---");
document.getElementsByName("q")[0].innerHTML = document.getElementsByName("q")[0].innerHTML.replace(new RegExp("\\|", "g"), "\n\|");