if(document.getElementsByName("q")[0]) {
    document.getElementsByName("q")[0].value = document.getElementsByName("q")[0].value.replace(new RegExp("\\|", "g"), "\n\|");
    document.getElementsByName("q")[0].value = document.getElementsByName("q")[0].value.replace(new RegExp(" +", "g"), " ");
    document.getElementsByName("q")[0].value = document.getElementsByName("q")[0].value.replace(new RegExp("\\| join ", "g"), "\n\| join ");
    document.getElementsByName("q")[0].value = document.getElementsByName("q")[0].value.replace(new RegExp("\\] ", "g"), "\] \n");
}

if(document.getElementsByName("search")[0]) {
    document.getElementsByName("search")[0].value = document.getElementsByName("search")[0].value.replace(new RegExp("\\|", "g"), "\n\|");
    document.getElementsByName("search")[0].value = document.getElementsByName("search")[0].value.replace(new RegExp(" +", "g"), " ");
    document.getElementsByName("search")[0].value = document.getElementsByName("search")[0].value.replace(new RegExp("\\| join ", "g"), "\n\| join ");
    document.getElementsByName("search")[0].value = document.getElementsByName("search")[0].value.replace(new RegExp("\\] ", "g"), "\] \n");
}