<?php

require 'dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  $idZ = $request->idZalihe;
  $kolicina = $request->kolicina;
  

  if(!preg_match("/^[0-9]+$/",$kolicina)) {
    http_response_code(400);
    echo json_encode("Uneti podaci nisu validni.");
  }
  else {

  $upit = "UPDATE zaliha SET kolicina={$kolicina}
   WHERE idZalihe='{$idZ}' ";
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(200);
  }
  else {
      http_response_code(404);
      echo "Izmena zalihe nije uspela.";
  }

  }
}
else {
    http_response_code(404);
}
?>