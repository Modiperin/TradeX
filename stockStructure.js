async function apicall() {

    var url = 'http://localhost:3000/stock/getStock/'+window.sessionStorage.getItem('stockname')
    var res= await fetch(url,{
        "method":"GET"
    })
        var data= await res.json()
        console.log(data.shortName)
        // console.log(data.overView.eps)
        document.getElementById('shortName').innerHTML=data.shortName
        document.getElementById('fullName').innerHTML=data.fullName
        document.getElementById('crrPrice').innerHTML=data.crrPrice
        // console.log(data.changed+'perin')
        document.getElementById('changed').innerHTML=data.changed+'('+data.perChanged+'%)'
        document.getElementById('daysOpen').innerHTML='&#8377;'+' '+data.overView.daysOpen
        document.getElementById('daysLow').innerHTML='&#8377;'+' '+data.overView.daysLow
        document.getElementById('daysHigh').innerHTML='&#8377;'+' '+data.overView.daysHigh
        document.getElementById('previousClose').innerHTML='&#8377;'+' '+data.overView.previousClose
        document.getElementById('bestBid').innerHTML='&#8377;'+' '+data.overView.bestBid
        document.getElementById('bestAsk').innerHTML='&#8377;'+' '+data.overView.bestAsk
        document.getElementById('volume').innerHTML='&#8377;'+' '+data.overView.volume
        document.getElementById('marketCap').innerHTML='&#8377;'+' '+data.overView.marketCap
        document.getElementById('eps').innerHTML='&#8377;'+' '+data.keyRatios.eps
        document.getElementById('pe').innerHTML='&#8377;'+' '+data.keyRatios.pe
        document.getElementById('pbv').innerHTML='&#8377;'+' '+data.keyRatios.pbv
        document.getElementById('roe').innerHTML='&#8377;'+' '+data.keyRatios.roe
        document.getElementById('debt').innerHTML='&#8377;'+' '+data.keyRatios.debt
        document.getElementById('netMargin').innerHTML='&#8377;'+' '+data.keyRatios.netMargin
        // console.log(data.keyRatios.cagrSales)
        document.getElementById('cagrSales').innerHTML='&#8377;'+' '+data.keyRatios.cagrSales
        document.getElementById('cagrProfit').innerHTML='&#8377;'+' '+data.keyRatios.cagrProfit
        console.log(data)
        for(var i=0;i<3;i++)
        {
            console.log(data.profitLoss[i].sales)
            document.getElementsByClassName('sale')[i].innerHTML=data.profitLoss[i].sales
            document.getElementsByClassName('direct')[i].innerHTML=data.profitLoss[i].directExpendiature
            document.getElementsByClassName('gross')[i].innerHTML=data.profitLoss[i].grossProfit
            document.getElementsByClassName('operating')[i].innerHTML=data.profitLoss[i].operatingProfit
            document.getElementsByClassName('income')[i].innerHTML=data.profitLoss[i].otherIncome
            document.getElementsByClassName('interest')[i].innerHTML=data.profitLoss[i].interest
            document.getElementsByClassName('depriciation')[i].innerHTML=data.profitLoss[i].depreciation
            document.getElementsByClassName('pbTax')[i].innerHTML=data.profitLoss[i].profitBeforeTax            
            document.getElementsByClassName('paTax')[i].innerHTML=data.profitLoss[i].profitAfterTax
            document.getElementsByClassName('eps')[i].innerHTML=data.profitLoss[i].eps
            document.getElementsByClassName('divi')[i].innerHTML=data.profitLoss[i].dividend
            document.getElementsByClassName('tax')[i].innerHTML=data.profitLoss[i].tax
        }
        document.getElementById('chair').innerHTML="<b>"+data.chairmain+"</b>"
        document.getElementById('indeDir').innerHTML="<b>"+data.indeDir+"</b>"
        document.getElementById('nonIndeDir').innerHTML="<b>"+data.nonIndeDir+"</b>"
        document.getElementById('ceo').innerHTML="<b>"+data.ceo+"</b>"
        document.getElementById('coo').innerHTML="<b>"+data.coo+"</b>"
        document.getElementById('nonIndeDir1').innerHTML="<b>"+data.nonIndeDir1+"</b>"
        document.getElementById('nonIndeDir2').innerHTML="<b>"+data.nonIndeDir2+"</b>"
        document.getElementById('nonIndeDir3').innerHTML="<b>"+data.nonIndeDir3+"</b>"
        document.getElementById('nonIndeDir4').innerHTML="<b>"+data.nonIndeDir4+"</b>"
        document.getElementById('nse').innerHTML="NSE"+":"+data.nse
        document.getElementById('bse').innerHTML="BSE"+":"+data.bse
        document.getElementById('compDet').innerHTML=data.compDet
        document.getElementById('isin').innerHTML="ISIN:"+data.isin

}
apicall()