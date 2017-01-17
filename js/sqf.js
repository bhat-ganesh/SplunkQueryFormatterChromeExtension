var ele = document.getElementsByName("q")[0];
if (!ele) {
    ele = document.getElementsByName("search")[0];
}

if(ele) {
    ele.value = ele.value.replace(new RegExp("\\|", "g"), "\n\|");
    ele.value = ele.value.replace(new RegExp(" +", "g"), " ");
    ele.value = ele.value.replace(new RegExp("\\| join ", "g"), "\n\| join ");
    ele.value = ele.value.replace(new RegExp("\\] ", "g"), "\] \n");
}