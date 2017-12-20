<html>
  <head>
        <title>Input Addition</title>
        <script language="javascript">
                function addNumbers()
                {
                        var v1 = parseFloat(document.getElementById("value1").value);
             
                        var v3 = v1*3.28*3.28*3.28/1000;
                     var v4 = v1*3.28*3.28*3.28;
                        var ans = document.getElementById("answer");
                        var ans1 = document.getElementById("answer1");
                        ans.value = v3 ;
                        ans1.value = v4
                }
        </script>
  </head>
  <body>
<center>
<br />
        Input Value in Cubic Meters <br /> <input id="value1" name="value1" type="text" value="" />
        <br />
       <br />
        <input name="Add" onclick="javascript:addNumbers()" type="button" value="Convert" />
        <br />
        <br />
             Brass <br /> <input id="answer" name="answer" type="text" value="" /> 
        <br />     
             Cubic Feet <br /> <input id="answer1" name="answer" type="text" value="" />
<center>
  </center>
</center>
</body>

</html>
