var subjectObject= {
    "Weight": ["Pounds", "Kilograms", "Ounces", "Grams", "Stones"],
    "Temperature": ["Fahrenheit", "Celsius", "Kelvin"],
    "Length": ["Feet", "Meters", "Inches", "cm", "Yards", "Kilometers", "Miles"],
    "Speed": ["MPH", "KPH", "Knots", "Mach"]
  }
   
  window.onload = function() {
    var measureSel = document.getElementById("measure");
    var unit1Sel = document.getElementById("unit1");
    var unit2Sel = document.getElementById("unit2");
    for (var x in subjectObject) {
      measureSel.options[measureSel.options.length] = new Option(x, x);
    }
    measureSel.onchange = function() {
      unit1Sel.length = 1;
      for (var y in subjectObject[this.value]) {
        // console.log(subjectObject[this.value][y])
        unit1Sel.options[unit1Sel.options.length] = new Option(subjectObject[this.value][y], subjectObject[this.value][y]);
      }

      unit2Sel.length = 1;
      for (var y in subjectObject[this.value]) {
        // console.log(subjectObject[this.value][y])
        unit2Sel.options[unit2Sel.options.length] = new Option(subjectObject[this.value][y], subjectObject[this.value][y]);
      }

    }
  }

  

// function ola()
// {
//     var e = document.getElementById("unit1");
//     var text = e.options[e.selectedIndex].text;
//     document.getElementById("txtbox").value=text;
//     console.log(text)
//     return false;
// }

function check()
{
    var e = document.getElementById("unit1");
    var text = e.options[e.selectedIndex].text;
    var f = document.getElementById("unit2");
    var textt = f.options[f.selectedIndex].text;
    if(text==textt)
    {
        document.getElementById("res-place").innerHTML="PICK DIFFERENT OPTIONS";
    }
}

function conv()
{
    var bru = document.getElementById("measure");
    var zero = bru.options[bru.selectedIndex].text;
    var e = document.getElementById("unit1");
    var one = e.options[e.selectedIndex].text;
    var f = document.getElementById("unit2");
    var two = f.options[f.selectedIndex].text;
    var num=document.getElementById("txtbox").value;
    var result;
    if(one==two)
    {
        result="SAME UNITS ARE SELECTED";
        console.log(one+two);
    }
    else if(zero=="Weight")
    {
        if(one=="Pounds"&&two=="Kilograms")
        {
            result=num/2.2046;
        }
        else if(one=="Pounds" && two == "Ounces")
        {
            result=num*16;
        }
        else if(one=="Pounds" && two == "Grams")
        {
            result=num/0.0022046;
        }
        else if(one=="Pounds" && two == "Stones")
        {
            result=num*0.071429;
        }
        else if(one=="Kilograms" && two == "Pounds")
        {
            result=num*2.2046;
        }
        else if(one == "Kilograms" && two == "Ounces")
        {
            result=num*35.274;
        }
        else if(one == "Kilograms" && two == "Grams")
        {
            result=num*1000;
        }
        else if(one == "Kilograms" && two == "Stones")
        {
            result=num*0.1574;
        }
        else if(one == "Ounces" && two == "Pounds")
        {
            result=num*0.0625;
        }
        else if(one == "Ounces" && two == "Kilograms")
        {
            result=num/35.274;
        }
        else if(one == "Ounces" && two == "Grams")
        {
            result=num/0.035274;
        }
        else if(one == "ounces" && two == "Stones")
        {
            result=num*0.0044643;
        }
        else if(one == "Grams" && two == "Pounds")
        {
            result=num*0.0022046;
        }
        else if(one == "Grams" && two == "Kilograms")
        {
            result=num/1000;
        }
        else if(one == "Grams" && two == "Ounces")
        {
            result=num*0.035274;
        }
        else if(one == "Grams" && two == "Stones")
        {
            result=num*0.00015747;
        }
        else if(one == "Stones" && two == "Pounds")
        {
            result=num*14;
        }
        else if(one == "Stones" && two == "Kilograms")
        {
            result=num/0.15747;
        }
        else if(one == "Stones" && two == "Ounces")
        {
            result=num*224;
        }
        else if(one == "Stones" && two == "Grams")
        {
            result=num/0.00015747;
        }
    }
    else if(zero == "Temperature")
    {
        if(one == "Fahrenheit" && two =="Celsius")
        {
            result=(num-32)/18;
        }
        else if(one == "Fahrenheit" && two =="Kelvin")
        {
            result=((num-32)/1.8)+273.15;
        }
        else if(one == "Celsius" && two =="Fahrenheit")
        {
            result=(num*1.8)+32;
        }
        else if(one == "Celsius" && two =="Kelvin")
        {
            result=num+273.15;
        }
        else if(one == "Kelvin" && two =="Fahrenheit")
        {
            result=n((num-273.15)*1.8)+32;
        }
        else if(one == "Kelvin" && two =="Celsius")
        {
            result=num-273.15;
        }
    }

    else if(zero == "Length")
    {
        if(one=="Feet" && two == "Meters")
        {
            result=num/3.2808;
        }
        else if(one == "Feet" && two == "Inches")
        {
            result=num*12;
        }
        else if(one == "Feet" && two == "cm")
        {
            result=num/0.032808;
        }
        else if(one == "Feet" && two == "Yards")
        {
            result=num*0.33333;
        }
        else if(one == "Feet" && two == "Kilometers")
        {
            result=num/3280.8;
        }
        else if(one == "Feet" && two == "Miles")
        {
            result=num*0.00018939;
        }
        else if(one == "Meters" && two == "Feet")
        {
            result=num*3.2808;
        }
        else if(one == "Meters" && two == "Inches")
        {
            result=num*39.370;
        }
        else if(one == "Meters" && two == "cm")
        {
            result=num/0.01;
        }
        else if(one == "Meters" && two == "Yards")
        {
            result=num*1.0936;
        }
        else if(one == "Meters" && two == "Kilometers")
        {
            result=num/1000;
        }
        else if(one == "Meters" && two == "Miles")
        {
            result=num*0.00062137;
        }
        else if(one == "Inches" && two == "Feet")
        {
            result=num*0.083333;
        }
        else if(one == "Inches" && two == "Meters")
        {
            result=num/39.370;
        }
        else if(one == "Inches" && two == "cm")
        {
            result=num/0.39370;
        }
        else if(one == "Inches" && two == "Yards")
        {
            result=num*0.027778;
        }
        else if(one == "Inches" && two == "Kilometers")
        {
            result=num/39370;
        }
        else if(one == "Inches" && two == "Miles")
        {
            result=num*0.000015783;
        }
        else if(one == "cm" && two == "Feet")
        {
            result=num*0.032808;
        }
        else if(one == "cm" && two == "Meters")
        {
            result=num/100;
        }
        else if(one == "cm" && two == "Inches")
        {
            result=num*0.39370;
        }
        else if(one == "cm" && two == "Yards")
        {
            result=num*0.010936;
        }
        else if(one == "cm" && two == "Kilometers")
        {
            result=num/100000;
        }
        else if(one == "cm" && two == "Miles")
        {
            result=num*0.0000062137;
        }
        else if(one == "Yards" && two == "Feet")
        {
            result=num*3;
        }
        else if(one == "Yards" && two == "Meters")
        {
            result=num/1.0936;
        }
        else if(one == "Yards" && two == "Inches")
        {
            result=num*36;
        }
        else if(one == "Yards" && two == "cm")
        {
            result=num/0.010936;
        }
        else if(one == "Yards" && two == "Kilometers")
        {
            result=num/1093.6;
        }
        else if(one == "Yards" && two == "Miles")
        {
            result=num*0.00056818;
        }
        else if(one == "Kilometers" && two == "Feet")
        {
            result=num*3280.8;
        }
        else if(one == "Kilometers" && two == "Meters")
        {
            result=num*1000;
        }
        else if(one == "Kilometers" && two == "Inches")
        {
            result=num*39370;
        }
        else if(one == "Kilometers" && two == "cm")
        {
            result=num*100000;
        }
        else if(one == "Kilometers" && two == "Yards")
        {
            result=num*1093.6;
        }
        else if(one == "Kilometers" && two == "Miles")
        {
            result=num*0.62137;
        }
        else if(one == "Miles" && two == "Feet")
        {
            result=num*5280;
        }
        else if(one == "Miles" && two == "Meters")
        {
            result=num/0.00062137;
        }
        else if(one == "Miles" && two == "Inches")
        {
            result=num*63360;
        }
        else if(one == "Miles" && two == "cm")
        {
            result=num/0.0000062137;
        }
        else if(one == "Miles" && two == "Yards")
        {
            result=num*1760;
        }
        else if(one == "Miles" && two == "Kilometers")
        {
            result=num*0.62137;
        }
    }

    else if(zero == "Speed")
    {
        if(one == "MPH" && two == "KPH")
        {
            result=num*1.609344;
        }
        else if(one == "MPH" && two == "Knots")
        {
            result=num/1.150779;
        }
        else if(one == "MPH" && two == "Mach")
        {
            result=num/761.207;
        }
        else if(one == "KPH" && two == "MPH")
        {
            result=num/1.609344;
        }
        else if(one == "KPH" && two == "Knots")
        {
            result=num/1.852;
        }
        else if(one == "KPH" && two == "Mach")
        {
            result=num/1225.044;
        }
        else if(one == "Knots" && two == "MPH")
        {
            result=num*1.150779;
        }
        else if(one == "Knots" && two == "KPH")
        {
            result=num*1.852;
        }
        else if(one == "Knots" && two == "Mach")
        {
            result=num/661.4708;
        }
        else if(one == "Mach" && two == "MPH")
        {
            result=num*761.207;
        }
        else if(one == "Mach" && two == "KPH")
        {
            result=num*1225.044;
        }
        else if(one == "Mach" && two == "Knots")
        {
            result=num*661.4708;
        }
    }
    



    document.getElementById("res-place").innerHTML=result;
}



  
  