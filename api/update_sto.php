<?php

require 'dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  $idS = $request->sifraStola;
  $zauzet = $request->zauzet;
  $opisStola = $request->opisStola;
  $brStolica = $request->brStolica;
  $idRadnika = $request->idRadnika;
  
  

if(!preg_match("/^[0-9]+$/",$brStolica)) {
    http_response_code(400);
    echo json_encode("Uneti podaci nisu validni.");
  }
  else {

  $upit = "UPDATE `stolovi` SET `zauzet`= $zauzet, `idRadnika`=$idRadnika
   WHERE `sifraStola`=$idS ";
  $rez = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(200);
  }
  else {
      http_response_code(404);
      echo "Izmena stola nije uspela.";
  }

  }
}
else {
    http_response_code(404);
}
?>