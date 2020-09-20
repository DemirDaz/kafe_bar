<?php

require 'dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  $idR = $request->idRacuna;
  

 /*if(!preg_match("/^[0-9]+$/",$cenaUkupna) ) {
    http_response_code(400);
    echo json_encode("Uneti podaci nisu validni.");
  }
  
else { }*/

  $upit = "UPDATE racun SET datumPlacanja=NOW(), placen=1
   WHERE idRacuna = '{$idR}'";
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(200);
  }
  else {
      http_response_code(404);
      echo "Izmena racuna nije uspela.";
  }

  
}
else {
    http_response_code(404);
}
?>