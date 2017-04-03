/*Final Project - API Beer Chart
* Sal DeMarco
* May 6th, 2015
* Create an application that graphs data. The data should come from at least one online data source
* (i.e. an API). The graphing tool recommended is JSChart. The graph is ideally dynamic. In otherwords,
* the graph should change based on user input/selections.
*/

// List of Global Arrays that was collected from API website called http://ontariobeerapi.ca/docs/


var beer = Array();
var country = Array();
var type = Array();
var image = Array();
var company = Array();
var abv = Array();
var package = Array();
var price = Array();
var style = Array();




// This calls out jschart
function make2Dimmensional(array1, array2) {

	var resultingArray = new Array();
	for (x in array1) {
		resultingArray[resultingArray.length] = [array1[x], array2[x]];
	}
	return resultingArray;
}


/*This function sorts the data by only allowing the elements to be unique in the
 beer name array and generate a list for the others.*/

	
	
$.getJSON("JSON Library/app.json", function(data) {	
	

for (var i = 0; i < data.beer.length; i = i + 1) {
  if (beer.indexOf(data.beer[i].name) < 0) {
    beer.push(data.beer[i].name);
    country.push(data.beer[i].origin);
	type.push(data.beer[i].secondary_category);
	image.push(data.beer[i].image_url);
	company.push(data.beer[i].producer_name);
	abv.push(data.beer[i].alcohol_content);
	package.push(data.beer[i].package);
	price.push(data.beer[i].price_in_cents);
    style.push(data.beer[i].style);
  }
}

	showBeerList();
	showTypeList();
	showCategoryList();
	showCountryList();
	
});



// This will allow the data to count all elements in the beer array to the select tag beerListing.
function showBeerList() {
	
	
	

	var select = document.getElementById('beerListing');
	for (var i = 0; i < beer.length; i++) {
		var obj = document.createElement("option");
	    obj.text = beer[i];
		obj.value = i;
		select.appendChild(obj);
		
		}

		
//puts values in alphabetical order		
	$("#beerListing").html($("#beerListing option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? 1 : -1
}));





// Get the select element
var option = document.getElementById("beerListing");
// Create a new option element
var el = document.createElement("option");
// Add our value to the option
el.textContent = "Pick Your Poison...";
el.value = "Pick Your Poison...";
// Set the option to selected
el.selected = true;
// Add the new option element to the select element
option.appendChild(el);

// Adds Selected element to the top
$("#beerListing option").each(function () {
    var listItem = $(this);
	listItem.insertBefore(listItem.siblings().first());
    var listItemPosition = $("#beerListing option").index(listItem) + 1;

    if (listItemPosition == 1) return true;

    listItem.insertBefore(listItem.prev());
  });
}



// This will allow the data to count all elements as unique in the type array to the typeListing tag.
function showTypeList() {

	var bType = new Array();
	for (x in type) {
		if (bType.indexOf(type[x]) < 0) {
			bType[bType.length] = type[x];
		}
	}

	var select = document.getElementById('typeListing');
	for (var i = 0; i < bType.length; i++) {
		var obj = document.createElement("option");
		obj.text = bType[i];
		obj.value = bType[i];
		select.appendChild(obj);
	}
	
//puts values in alphabetical order		
		$("#typeListing").html($("#typeListing option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? 1 : -1
}));

// Get the select element
var option = document.getElementById("typeListing");
// Create a new option element
var el = document.createElement("option");
// Add our value to the option
el.textContent = "Select Type of Beer";
el.value = "Select Type of Beer";
// Set the option to selected
el.selected = true;
// Add the new option element to the select element
option.appendChild(el);

// Adds Selected element to the top
$("#typeListing option").each(function () {
    var listItem = $(this);
	listItem.insertBefore(listItem.siblings().first());
    var listItemPosition = $("#typeListing option").index(listItem) + 1;

    if (listItemPosition == 1) return true;

    listItem.insertBefore(listItem.prev());
  });


}

// This will allow the data to count all elements as unique in the Category array to the showcategoryListing ID tag.
function showCategoryList() {

	var bCat = new Array();
	for (x in type) {
		if (bCat.indexOf(style[x]) < 0) {
			bCat[bCat.length] = style[x];
		}
	}

	var select = document.getElementById('categoryListing');
	for (var i = 0; i < bCat.length; i++) {
		var obj = document.createElement("option");
		obj.text = bCat[i];
		obj.value = bCat[i];
		select.appendChild(obj);
	}

//puts values in alphabetical order	
	$("#categoryListing").html($("#categoryListing option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? 1 : -1
}));


// Get the select element
var option = document.getElementById("categoryListing");
// Create a new option element
var el = document.createElement("option");
// Add our value to the option
el.textContent = "Select Style";
el.value = "Select Style";
// Set the option to selected
el.selected = true;
// Add the new option element to the select element
option.appendChild(el);

// Adds Selected element to the top
$("#categoryListing option").each(function () {
    var listItem = $(this);
	listItem.insertBefore(listItem.siblings().first());
    var listItemPosition = $("#category option").index(listItem) + 1;

    if (listItemPosition == 1) return true;

    listItem.insertBefore(listItem.prev());
  });


}

// This will allow the data to count all elements as unique in the country array to the showcountryListing ID tag.
function showCountryList() {

	var bCountry = new Array();
	for (x in type) {
		if (bCountry.indexOf(country[x]) < 0) {
			bCountry[bCountry.length] = country[x];
		}
	}

	var select = document.getElementById('countryListing');
	for (var i = 0; i < bCountry.length; i++) {
		var obj = document.createElement("option");
		obj.text = bCountry[i];
		obj.value = bCountry[i];
		select.appendChild(obj);
	}
//puts values in alphabetical order	
	$("#countryListing").html($("#countryListing option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? 1 : -1
}));

// Get the select element
var option = document.getElementById("countryListing");
// Create a new option element
var el = document.createElement("option");
// Add our value to the option
el.textContent = "Select Country";
el.value = "Select Country";
// Set the option to selected
el.selected = true;
// Add the new option element to the select element
option.appendChild(el);

// Adds Selected element to the top
$("#countryListing option").each(function () {
    var listItem = $(this);
	listItem.insertBefore(listItem.siblings().first());
    var listItemPosition = $("#countryListing option").index(listItem) + 1;

    if (listItemPosition == 1) return true;

    listItem.insertBefore(listItem.prev());
  });

$("<option>United States</option>").insertBefore("#countryListing option[value=Austria]");
$("#countryListing option[value='United States']").hide();

}

// This will allow the user to see all data when selecting a beer from the dropdown list.
function getBeerInfo(picked) {

	if (picked == "Pick Your Poison...") {
	location.reload();
	} else {
    document.getElementById("name").innerHTML = beer[picked];
    document.getElementById("country").innerHTML = country[picked];
	document.getElementById("type").innerHTML = type[picked];
	document.getElementById("pic").src = image[picked];
	document.getElementById("company").innerHTML = company[picked];
	document.getElementById("abv").innerHTML = abv[picked];
	document.getElementById("package").innerHTML =  package[picked];
	document.getElementById("price").innerHTML = "$" + price[picked];
	document.getElementById("style").innerHTML = style[picked];
	}
}

/*This function will call out the four arguments from the select tags in which the Condition object will
 alert the user to make the right selections. Also included was the Audio functions that made a sound
 when selecting and entering.   */
function createChart(picked, bType, bSty, bCountry) {

	var beerNew = new Array();
	var priceNew = new Array();
	var abvNew = new Array();
	var y;
	var sndDoh = new Audio("http://www.richmolnar.com/Sounds/Homer%20-%20D%27oh!%20%281%29.wav");
	var sndWoo = new Audio("http://www.richmolnar.com/Sounds/Homer%20-%20Woohoo!%20%281%29.wav");

// If first selection is selected, this will go as "picked" in basicBar() as a number in the parameter.
	if (picked == "Select ABV or Price") {

	} else if (picked == "ABV") {
		picked = abvNew;

	} else {
		picked = priceNew;

	}

// This will alert a sound and show the chart if entered correctly.
	for (y in beer) {
		if (picked != "Select ABV or Price" && type[y] == bType && style[y] == bSty && country[y] == bCountry) {
			beerNew[beerNew.length] = beer[y];
			priceNew[priceNew.length] = price[y];
			abvNew[abvNew.length] = abv[y];
			document.getElementById("pic").src = "img/woohoo.png";
			document.getElementById("country").innerHTML = "Woohoo!";
			document.getElementById("type").innerHTML = "Woohoo!";
			document.getElementById("name").innerHTML = "Woohoo!";
			document.getElementById("company").innerHTML = "Woohoo!";
			document.getElementById("abv").innerHTML = "Woohoo!";
			document.getElementById("package").innerHTML = "Woohoo!";
			document.getElementById("price").innerHTML = "Woohoo!";
			document.getElementById("style").innerHTML = "Woohoo!";
			sndWoo.play();		
		}

	}

//This will prompt an alert to the user that no item exists along with sound.
	if (beerNew.length == 0) {
		alert("No Beer Match!!! \nIt might help if all select fields are selected,\nor you might need to make some changes in the fields.");
		document.getElementById("pic").src = "img/DOH.png";
		document.getElementById("country").innerHTML = "DOH!";
		document.getElementById("type").innerHTML = "DOH!";
		document.getElementById("name").innerHTML = "DOH!";
		document.getElementById("company").innerHTML = "DOH!";
		document.getElementById("abv").innerHTML = "DOH!";
		document.getElementById("package").innerHTML = "DOH!";
		document.getElementById("price").innerHTML = "DOH!";
		document.getElementById("style").innerHTML = "DOH!";
		sndDoh.play();
	}

	
// All necessary data will go to drawing of the chart if entered correclty.
	basicBar(beerNew, picked, abvNew, priceNew, y);
}


/*// OLD CHART - Good Chart but has no responsive display

	function basicBar(beerNew, picked) {

	//create a bar chart and display it to the HTML object whose id is graph
	var myChart = new JSChart('chartContainer', 'bar');
	var myData = make2Dimmensional(beerNew, picked);
	myChart.setDataArray(myData);

	myChart.setTitle('Beer Chart');
	myChart.setTitleColor('#00688B');
	myChart.setAxisNameX(' ');
	myChart.setAxisNameY(' ');
	myChart.setAxisColor('#00688B');
	myChart.setAxisNameFontSize(16);
	myChart.setAxisNameColor('#00688B');
	myChart.setAxisValuesColor('#000000');
	myChart.setBarValuesColor('#000000');
	myChart.setAxisPaddingTop(30);
	myChart.setAxisPaddingRight(35);
	myChart.setAxisPaddingLeft(165);
	myChart.setAxisPaddingBottom(25);
	myChart.setTextPaddingLeft(25);
	myChart.setTitleFontSize(9);
	myChart.setBarBorderWidth(1);
	myChart.setBarBorderColor('#C4C4C4');
	myChart.setBarSpacingRatio(60);
	myChart.setGrid(true);
	myChart.setSize(300, 600);
	
	
	myChart.setAxisValuesDecimals(2);
	myChart.setAxisReversed(true);
  
  //display the chart
	myChart.draw();

}*/


//Finally, this function will draw the chart.
function basicBar(newBeer, picked, abvNew, priceNew){
	var data = [];
	var dataBeer = [];
    var allData = [];
	var allBeer = [];
    
	var callPicked = "";
    var len = picked.length;
	var lenBeer = newBeer.length;
    var colors = ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'];
    

		
	for(i=0; i<len; i++){ //This will allow each result have its own bar
        data.push({
            y: picked[i],
            color:colors[i]
        });
        allData.push(data[i]);
    }

	for(i=0; i<lenBeer; i++){ // This will allow names to appear as a list
        dataBeer.push({
            cat: newBeer[i],
            color:colors[i]
        });
        allBeer.push(dataBeer[i]);
    }

    if(picked == abvNew){  //To Show that Bar Chart as ABV or Price
		callPicked = 'ABV';
	}
	else if(picked == priceNew){
		callPicked = 'Price';
	}		 
	else{
		callPicked = ' ';
		}
	
			 
$('#container').highcharts({  //To populate chart
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Beer Chart'
        },
	
	    xAxis: {
			categories: newBeer,
            title: {
                text: 'Beer Categorization: ' + callPicked,
                align: 'high'
				
            },
            labels: {
                overflow: 'justify'
            
            }
        },
		
        yAxis: {
            min: 0,
            title: {
                text: 'Designed by Sal DeMarco, Jr. <br/> Drink Responsibly',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
	
	    tooltip: {
            valueSuffix: ' '
        },	
		
		series:[{
			name: 'Results',
			data: picked
			}] ,
			
		plotOptions:{
			series:{
				colorByPoint: true
}},


		
	});
	
	

}

	// JavaScript Document