(function(){

    document.getElementById("heading").style = "margin-left:43vw;color: red " ;
    
    let table = document.createElement("table");
    table.style =" border-collapse : collapse ;margin-left :26vw;margin-top:10%";

    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");


    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById("body").appendChild(table);

    //table headings

    let row1 = document.createElement("tr");
    let head1 = document.createElement("th");
    let thnode1 = document.createTextNode("Name");
    head1.appendChild(thnode1);
    head1.style = "border :1px solid black; padding : 20px;";
    
    let head2= document.createElement("th");
    let thnode2 = document.createTextNode("Age");
    head2.appendChild(thnode2);
    head2.style = "border :1px solid black; padding : 20px;";

    let head3 = document.createElement("th");
    let thnode3 = document.createTextNode("DOB");
    head3.appendChild(thnode3);
    head3.style = "border :1px solid black; padding : 20px;";

    let head4 = document.createElement("th");
    let thnode4 = document.createTextNode("Email");
    head4.appendChild(thnode4);
    head4.style = "border :1px solid black; padding : 20px;";

    let head5 = document.createElement("th");
    let thnode5 = document.createTextNode("Company");
    head5.appendChild(thnode5);
    head5.style = "border :1px solid black; padding : 20px;";

    row1.appendChild(head1);
    row1.appendChild(head2);
    row1.appendChild(head3);
    row1.appendChild(head4);
    row1.appendChild(head5);
    thead.appendChild(row1);


    // row2 

    let row2= document.createElement("tr");

    var data1 = document.createElement("td");
    var tdnode1 = document.createTextNode("Yash Gupta");
    data1.appendChild(tdnode1);
    data1.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data2 = document.createElement("td");
    var tdnode2 = document.createTextNode("21");
    data2.appendChild(tdnode2);
    data2.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";;

    var data3 = document.createElement("td");
    var tdnode3 = document.createTextNode("13-May-2000");
    data3.appendChild(tdnode3);
    data3.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data4 = document.createElement("td");
    var tdnode4 = document.createTextNode("yash@gmail.com");
    data4.appendChild(tdnode4);
    data4.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data5 = document.createElement("td");
    var tdnode5 = document.createTextNode("Gemini Solutions");
    data5.appendChild(tdnode5);
    data5.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    row2.appendChild(data1);
    row2.appendChild(data2);
    row2.appendChild(data3);
    row2.appendChild(data4);
    row2.appendChild(data5);

    tbody.appendChild(row2);


    // row3

    let row3= document.createElement("tr");

    var data1 = document.createElement("td");
    var tdnode1 = document.createTextNode("Rahul Sharma");
    data1.appendChild(tdnode1);
    data1.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data2 = document.createElement("td");
    var tdnode2 = document.createTextNode("24");
    data2.appendChild(tdnode2);
    data2.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data3 = document.createElement("td");
    var tdnode3 = document.createTextNode("24-Dec-1995");
    data3.appendChild(tdnode3);
    data3.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data4 = document.createElement("td");
    var tdnode4 = document.createTextNode("rahul@gmail.com");
    data4.appendChild(tdnode4);
    data4.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data5 = document.createElement("td");
    var tdnode5 = document.createTextNode("Microsoft");
    data5.appendChild(tdnode5);
    data5.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    row3.appendChild(data1);
    row3.appendChild(data2);
    row3.appendChild(data3);
    row3.appendChild(data4);
    row3.appendChild(data5);

    tbody.appendChild(row3);

    // row4

    let row4= document.createElement("tr");

    var data1 = document.createElement("td");
    var tdnode1 = document.createTextNode("Shruti Singh");
    data1.appendChild(tdnode1);
    data1.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data2 = document.createElement("td");
    var tdnode2 = document.createTextNode("30");
    data2.appendChild(tdnode2);
    data2.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data3 = document.createElement("td");
    var tdnode3 = document.createTextNode("1-Jan-1992");
    data3.appendChild(tdnode3);
    data3.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data4 = document.createElement("td");
    var tdnode4 = document.createTextNode("shruti@gmail.com");
    data4.appendChild(tdnode4);
    data4.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data5 = document.createElement("td");
    var tdnode5 = document.createTextNode("Wipro");
    data5.appendChild(tdnode5);
    data5.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    row4.appendChild(data1);
    row4.appendChild(data2);
    row4.appendChild(data3);
    row4.appendChild(data4);
    row4.appendChild(data5);

    tbody.appendChild(row4);

    // row5

    let row5= document.createElement("tr");

    var data1 = document.createElement("td");
    var tdnode1 = document.createTextNode("Umang Mishra");
    data1.appendChild(tdnode1);
    data1.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data2 = document.createElement("td");
    var tdnode2 = document.createTextNode("21");
    data2.appendChild(tdnode2);
    data2.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data3 = document.createElement("td");
    var tdnode3 = document.createTextNode("21-April-2001");
    data3.appendChild(tdnode3);
    data3.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data4 = document.createElement("td");
    var tdnode4 = document.createTextNode("umang@gmail.com");
    data4.appendChild(tdnode4);
    data4.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    var data5 = document.createElement("td");
    var tdnode5 = document.createTextNode("Gemini Solutions");
    data5.appendChild(tdnode5);
    data5.style = "border :1px solid black; padding : 10px; text-align:center;padding:20px;";

    row5.appendChild(data1);
    row5.appendChild(data2);
    row5.appendChild(data3);
    row5.appendChild(data4);
    row5.appendChild(data5);

    tbody.appendChild(row5);

})();