document.getElementsByName("q")[0].value = document.getElementsByName("q")[0].value.replace(new RegExp("\\|", "g"), "\n\|");
document.getElementsByName("q")[0].value = document.getElementsByName("q")[0].value.replace(new RegExp(" +", "g"), " ");
document.getElementsByName("q")[0].value = document.getElementsByName("q")[0].value.replace(new RegExp("\\| join ", "g"), "\n\| join ");
document.getElementsByName("q")[0].value = document.getElementsByName("q")[0].value.replace(new RegExp("\\] $", "g"), " \n");