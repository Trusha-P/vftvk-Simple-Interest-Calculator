function compute()
{
    var principal = Number(document.getElementById("principal").value);

    if (principal <= 0.0) //check for negative or zero principal amount
    {
        alert("You entered " + principal + " as Principal Amount. Please enter a positive value!")
        document.getElementById("principal").focus()
    }

    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    interest = principal*years*rate / 100; // interest calculation
    total = principal + interest;
    actual_year = 2021 + years;

    //alert("X \nY")
    var displaytext = "If you deposit <mark>" + principal + "</mark>," + "<br>at an interest rate of <mark>" + rate + "%</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + actual_year + "</mark>"; //text to show
    
    document.getElementById("result").innerHTML = displaytext; //write the texton page
}

function range_slider()
{
    var rate = document.getElementById("rate").value; //get slider value
    ratestring = rate.toString() + "%"; 
    document.getElementById("ratespan").textContent=ratestring;
}       