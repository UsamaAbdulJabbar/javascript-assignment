    /*CHAPTER # 01*/ 

    alert("Welcome to Usama Web !")
    alert("Error! Please enter a valid Password")
    alert("Welcome to JS Land Happy Coding!") 
    alert("Hello... I can run JS through my web browser console")

    /*CHAPTER # 2*/

    var username;
    var myname = "Usama Jabbar";
    var message;
    message = "Hello World";
    alert(message);
    var fname  = "Jhone Doe";
    var age = "16 years old";
    var edu = "Certified Mobile Application Development";

    alert(fname);
    alert(age);
    alert(edu);

    var  p =  "pizza";

    alert(p);
    alert(p[3]);
    alert(p[2]);
    alert(p[1]);
    alert(p[0]);

    var email = "usamabest4u@gmail.com";
    alert("My email address is "+email);

    var book  = "Smarter way to learn Java Script";
    alert("I am trying to learn from the Book "+book);

    document.write("Yah ! I can write Html. Content through Java Script");
    document.write("<br/>");
    var s =  "---------@!*!@---------";
    alert(s)

    /*Chapter # 03 */

    var n1  = 20;
    alert("My age is " +age);
    
    var n2 = 14;
    alert("Ypu have visited this site "+n2+ "times");

    var n3 = 2002;
    document.write("My Birthday year is "+n3+"\n Data type of my declared variabe is number");
    document.write("<br/>");

  
    var n4 = "John Doe";
    var n5 = "5 T-Shirt";
    var n6 = "XYZ Clothing Store";
    
    document.write(n4+"orderes"+n5+"on"+n6);
    document.write("<br/>");


/*Chapter # 04 */

    var name = "usama",  lname = "Jabbar"  , age =20;

    var a  = 10;
    var b1 = 20;
    var c_2  = 30;
    var d_$ = 40;
    var $f = 50;

    // var 2 = "usama";
    // var ! = "xyz";
    // var c&% = 545;
    // var !!! = 5434;
    // var * = 548;

    document.write("a) A heading stating"+"Rules for naming JS variable\""+"\n b) Variable names ca onl contain ----------, ---------, -------------, and -----------");
    document.write("<br/>");
    document.write("For example $my_1stVaribale");
    document.write("<br/>");
    document.write("c) variabel must begin with a ---------------");
    document.write("<br/>");
    document.write("Variable names shoul not be JS ----------");
    document.write("<br/>");


    /*Chapter 05 */

    var a1 = 10;
    var a2 = 20;
    var a3 = a1 + a2;
    var a4 = a1 - a2;
    var a5 = a1 * a2;
    var a6 = a1 / a2;
    var a7 = a2%a1;

    document.write("Sum of"+a1+"and"+a2+"is"+a3);
    document.write("<br/>");
    document.write("Subtraction of"+a1+"and"+a2+"is"+a4);
    document.write("<br/>");
    document.write("Multiplication of"+a1+"and"+a2+"is"+a5);
    document.write("<br/>");
    document.write("Division of"+a1+"and"+a2+"is"+a6);
    document.write("<br/>");
    document.write("Modulus of"+a1+"and"+a2+"is"+a7);
    document.write("<br/>");



    var a8;
    a8 = 5;
    document.write("Initial Value is : "+a8);
    document.write("<br/>");
    a9 = a8++;
    document.write("value is : "+a8);

    document.write("<br/>");
    document.write("Value after addition is "+(7+a8));
    document.write("<br/>");
    var a10 = a8--;

    document.write("Value after decrement : "+a8)
    document.write("<br/>");
    document.write("The rminder is : "+1/a8);
    document.write("<br/>");
    var tkt = 600;
    var m = 5;
    var t = tkt * m;
    document.write("Total cost to buy"+m+"tickets to movie is "+t+"PKR");
    document.write("<br/>");
    var table = 4
    for(var i =1; i<=10 ;i++){
        document.write(table+"x"+i+"="+(table*i));
    }
    document.write("<br/>");
    var f = prompt("Enter fehrenhiet temperarture :")
    var calcius  = (f-32)*5/9
    document.write( f+"F is "+calcius+"C");
    document.write("<br/>");
    var cal = prompt("Enter calcius temp.")
    var fehrnheit = (cal*9/5)+32;
    
    document.write(cal+"C"+"is"+fehrnheit+"F");
    document.write("<br/>");
    var price1 = 650;
    var qty1 = 3;
    var qty2 = 7;
    var ship = 100;
    var total = price1+qty1+qt+ship;

    document.write("Total cost of your order is "+total);
    document.write("<br/>");

    var marks = 980;
    var markObtain = 804;
    var per = (980/804)*100;

    document.write("Total Mark : "+marks+"Marks Obtianed : "+markObtain+"Percantage : "+per);
    document.write("<br/>");
    var dollar = 10*104.80;
    var riyal = 25*28;
    var pkr = dollar+riyal;
    document.write("Total Currency is : "+pkr);
    document.write("<br/>");

    var cy = 2016;
    var by = 1992;
    var age = by-cy;
    document.write("Your age is :"+age);
    document.write("<br/>");

    var radius = 20;
    var circum  = 2*3.142*radius;
    document.write("radius"+radius+"The area of Circle is  : "+circum);

    document.write("<br/>");
    
    var fav = "Biryani";
    var curage = 20;
    var estage = 65;
    var amount = 2;
    var need  = (estage-curage)*amount;

    document.write("Favourite Scak :"+fav+"Current Age :"+curage+"Estimated age : "+estage+"Amount of snacks per day : "+amount+"You will need"+need+fav+"to last you until the ripe old age of"+estage);
    document.write("<br/>");
    /*Chapter 6-9 */


    var e = 10;
    document.write("value of e is :"+e)
    var q = ++10;
    document.write("value of ++e is :"+q)
    document.write("Now the value of e is :"+e)

    var p = 10++;
    document.write("value of e++ is :"+p)
    document.write("Now the value of e is :"+e)

    var your =  prompt("Enter your name :");
    alert("Good Morning" + your + "Have a Nice Day !");

    document.write("<br/>");

    var tbl  = prompt("Enter number for Table ")
    var five = 5
    for (var i = 1 ; i<=10;i++){
        if(tbl != 5){
            document.write(tbl+ "x" + i + "= " + (i*tbl));
        }
        else{
            document.write(five+ "x" + i + "= " + (five*tbl));
        }
    }
    document.write("<br/>");

    var sub1 = prompt("ENter Subject 1");
    var sub2 = prompt("ENter Subject 2");
    var sub3 = prompt("ENter Subject 3");
    var totalsub = 100;
    
    var sub1mark = prompt("Enter otained Marks subject"+sub1+":");
    var sub2mark = prompt("Enter otained Marks subject"+sub2+":");
    var sub3mark = prompt("Enter otained Marks subject"+sub3+":");

    document.write(sub1 + totalsub + sub1mark+((sub1mark/totalsub)*100)+"<br/>");
    document.write(sub2 + totalsub + sub2mark+((sub2mark/totalsub)*100)+"<br/>");
    document.write(sub3 + totalsub + sub3mark+((sub3mark/totalsub)*100)+"<br/>");


    /*Chapter 9-10 */

    var city = prompt("Enter you city ...");
    if(city=="karachi"){
        document.write("Welcome to City of Lights...<br/>");
    }

    var gender = prompt("Please enter gender .");
    if(gender=="male"){
        document.write("Good Morning Sir <br/>");
    }
    else{
        document.write("Good Morning Ma'am <br/>");
    }

    var color = prompt("Please enter Traffic color ?");
    if(color=="red"){
        document.write("Signal Color"+color+"Must Stop <br/>");
    }
    else if(color=="Yellow"){
        document.write("Signal Color"+color+"Ready To Move <br/>");
    }
    else{
        document.write("Signal Color"+color+"Move Now <br/>");
    }

    var fuel = prompt("Enter a Qty of Fuel ?");
    if(fuel <0.25){
        document.write("PLease refilll the fuel in your car <br/>");
    }

    var u = 82;
    if(u++===83){
        alert("Given condition for variable u is true");
    }

    var s = 12;
    if(s++===13){
        alert("Conditio is True");
    }

    if(s===13){
        alert("Condtion 2 is True")
    }

    if (++s<14){
        alert("Condtion 3 is true")
    }
    if(s===14){
        document.write("Conditon 4 is true")
    }

    var materialCost  = 20000;
    var labourCost = 2000;
    var totalCost =  materialCost + labourCost;
    if(totalCost === labourCost+materialCost){
        alert("The cost is equal ")
    }

    if(true){
        alert("True")
    }
    else{
        alert("False")
    }


    if("car" < "cat"){
        alert("Car is smallaer than cat");
    }


    var tm = 300;
    var s1 = prompt("Enter sub 1 obtained marks .");
    var s2 = prompt("Enter sub 1 obtained marks .");
    var s3 = prompt("Enter sub 1 obtained marks .");

    var subt = s1+s2+s3;
    var per = (subt/tm)*100;

    if(per >= 80){
        document.write("Total Marks : "+tm+"<br/>");
        document.write("Marks obtained : "+subt+"<br/>");
        document.write("Percentage  : "+per+"<br/>");
        document.write("Grade : A-one <br/>");
        document.write("Excellent <br/>");
    }

    if(per >= 70){
        document.write("Total Marks : "+tm+"<br/>");
        document.write("Marks obtained : "+subt+"<br/>");
        document.write("Percentage  : "+per+"<br/>");
        document.write("Grade : A <br/>");
        document.write("Very Good <br/>");
    }

    if(per >= 60){
        document.write("Total Marks : "+tm+"<br/>");
        document.write("Marks obtained : "+subt+"<br/>");
        document.write("Percentage  : "+per+"<br/>");
        document.write("Grade : B <br/>");
        document.write("You need to improve <br/>");
    }

    if(per < 60){
        document.write("Total Marks : "+tm+"<br/>");
        document.write("Marks obtained : "+subt+"<br/>");
        document.write("Percentage  : "+per+"<br/>");
        document.write("Grade : Fail <br/>");
        document.write("Work Hard!!! <br/>");
    }


    var secret = 7;
    var check = prompt("Enter a Secret Number Between 1 to 10 ...");

    if(check==secret){
        alert("Bingo! Correct Answer");
    }
    else if(check ==6){
        alert("Close enough to the correct answer");

    }
    else if(check ==8){
        alert("Close enough to the correct answer");

    }
    else{
        alert("Sorry Wrong Number .!!!")
    }



    var three =  3;
    var div = prompt("Enter number");

    if(div/three==0){
        alert("Yes this number is divisible by 3");
    }
    else{
        alert("No this is not divisible by 3");
    }


    var pass = prompt("Enter Password.");

    var pass1 = prompt("Please Enter a Password ");
    if(pass==pass1){
        alert("Correct password");
    }
    else{
        alert("Incorrect  Password")
    }

    var greeting;
    var hour = 13;
    if (hour < 18) {
    greeting = "Good day";
    }
    else{
    greeting = "Good evening";
    }

    var student = {};
    student.name = "usama";
    alert(student);

    var qulification = ['SSC','HSC','BCS','BS','BCOM','MS','M.PHIL','PhD'];
    alert("qualification <br/>"+qulification);

    var stu =  ['Michael','john','Tony'];
    var stumark = [320,230,480]

    alert("Score of"+stu[0]+"is"+stumark[0]+". Percantage is"+(stumark[0]/500)*100);
    alert("Score of"+stu[1]+"is"+stumark[1]+". Percantage is"+(stumark[1]/500)*100);
    alert("Score of"+stu[2]+"is"+stumark[2]+". Percantage is"+(stumark[2]/500)*100);


    for(var i = 1; i<=10;i++){
        document.write(i+"<br/>");
    }


    var tnum = prompt("Enter table number");
    var range = prompt("Enter range of number");

    for(var i =1;i<=range;i++){
        document.write(tnum + "X" + i + "=" + tnum*i + "<br/>");
    }

    var fruit = ['apple','banana','mango','orange','strawberry'];

    for(var i ; i<=fruit.length;i++){
        document.write("Element at index " + i + " is " + fruit[i] + "<br/>");
    }
    

    for(var i = 1 ; i<=15 ; i++){
        document.write(i+"<br/>");
    }

    for(var i = 10 ; i>=0 ;--i){
        document.write(i+"<br/>");
    }



    var bakery =  ["Cake","Apple pie","cookie","Chips","Patties"];

    var text = prompt("Enter Bakery item.");
    var itemFound ;

    for(var i = 0; i<=bakery.length; i++){
        if(text==bakery[i]){
            itemFound = true;
            break;
        }
        else{
            itemFound = false;
        }
    }

    if(itemFound==true){
        document.write("Yes this is available <br/>");
    }
    document.write(itemFound);



        var arr = [24,53,78,92,12];
        var largest = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (largest < arr[i] ) {
            largest = arr[i];
        }
    }
    document.write(largest);
    