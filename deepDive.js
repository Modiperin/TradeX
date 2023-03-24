function getStockDet(stockname)
{
    window.sessionStorage.setItem('stockname',stockname);
    window.location.href='stockStructure.html'
}