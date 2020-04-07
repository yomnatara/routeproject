

var allProducts = [];



function addProduct()
{

   var proName = document.getElementById("proNameInp").value;
    var proPrice = document.getElementById("proPriceInp").value;
    var proCat = document.getElementById("proCategoryInp").value;
    var proDesc = document.getElementById("proDescInp").value;
    

    var oneProduct = {

        name:proName,
        price:proPrice,
        category :proCat,
        Description:proDesc
    }

    allProducts.push(oneProduct);

    dispplayData(allProducts);

    clearData()

}






function dispplayData(AllData) //Array bt3i elli fih kol el data
{
    temp=""
    for(var i =0; i < AllData.length ;i++)
    {

        temp = temp + "<tr><td>"+AllData[i].name+"</td><td>"+AllData[i].price+"</td><td>"+AllData[i].category+"</td><td>"+AllData[i].Description+"</td></tr>"
    }

    document.getElementById("myBody").innerHTML = temp
}




function clearData()
{
    document.getElementById("proNameInp").value = "";
    document.getElementById("proPriceInp").value = "";
    document.getElementById("proCategoryInp").value= "";
    document.getElementById("proDescInp").value="";
}











