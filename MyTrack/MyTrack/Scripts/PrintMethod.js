$(document).ready(PageLoad);
function PageLoad() {
     var divToPrint = $('#contentToPrint');
    $('#btnPrint').click(printDiv(divToPrint));
}

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}