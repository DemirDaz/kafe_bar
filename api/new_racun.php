<?php

require 'dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  
  $sto = $request->sto;
  $porudzbina = $request->porudzbina;
  $idRadnika = $request->idRadnika;
  $cenaUkupna = $request->cenaUkupna;
  
  

    if(!preg_match("/^[0-9]+$/",$cenaUkupna) ) {
    http_response_code(400);
    echo json_encode("Uneti podaci nisu validni.");
  }
  else {

 // $upit = "INSERT INTO racun (idRacuna, datumPlacanja, valuta, porudzbina, idRadnika, cenaUkupna, sto, placen) VALUES 
 // (NULL, NOW(), NULL, '$porudzbina', '$idRadnika', '$cenaUkupna', '$sto', 0)";
 
 $upit = "INSERT INTO racun (datumPlacanja, porudzbina, idRadnika, cenaUkupna, sto, placen) VALUES 
  (NOW(), '$porudzbina', '$idRadnika', '$cenaUkupna', '$sto', 0)";
 
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(201);
    echo json_encode("Dodato!"); }
    
   /* $racun = [
      'idRacuna' => mysqli_insert_id($conn),
      'datumPlacanja' => $rez['datumPlacanja'],
      'valuta' => 'rsd.',
	  'porudzbina' => $porudzbina,
	  'idRadnika' => $idRadnika,
      'cenaUkupna' => $cenaUkupna,
      'sto' => $sto,
      'placen' => $rez['placen']
      ];
    echo json_encode($racun); */
  
  else {
      http_response_code(404);
      echo "Unos novog racuna nije uspeo.";
  }

  }
}
else {
    http_response_code(405);
}

?>