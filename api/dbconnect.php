<?php

/*header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, Accept, Client-Security-Token, Authorization, Accept-Encoding, Access-Control-Request-Method, X-API-KEY");
header("Access-Control-Max-Age: 86400");
header("Content-Type: application/json, charset=utf-8");
*/


$conn = mysqli_connect('localhost', 'id14208488_roote','Dazdarevic064.','id14208488_kafebar');

$upit = "SET SESSION time_zone = '+2:00'";
$rez = mysqli_query($conn,$upit);



?>