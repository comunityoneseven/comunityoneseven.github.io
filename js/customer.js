function PrintBill(imagen) {
    newWindow = window.open("","Imagenes","width=400,height=450,left=100,top=60");
    newWindow.document.open();
    newWindow.document.write('<html><head></head><body onload="window.print()"><img src="'+ imagen +'"/></body></html>');  
    newWindow.document.close();
    newWindow.focus();
}