<?php

require 'dbconnect.php';
//$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($conn, (int)$_GET['id']) : false;
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  $idPorudz= $request->idPorudz;
  $kolicina = $request->kolicina;
  $idZalihe = $request->idZalihe;
  
  

    if(!preg_match("/^[0-9]+$/",$kolicina) ) {
    http_response_code(400);
    echo json_encode("Uneti podaci nisu validni.");
  }
  else {

  $upit = "INSERT into stavkaporudzbine (idPorudz, redBr, kolicina, idZalihe) VALUES 
  ('$idPorudz', NULL, $kolicina, '$idZalihe')";
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(201);
    $stavkaporudz = [
	  'idPorudz' => $idPorudz,
      'redBr' => mysqli_insert_id($conn),
      'kolicina' => $kolicina,
      'idZalihe' => $idZalihe
      ];
    echo json_encode($stavkaporudz);
  }
  else {
      http_response_code(404);
      echo "Unos nove stavke u porudzbinu nije uspeo.";
  }

  }
}
else {
    http_response_code(404);
}

?>