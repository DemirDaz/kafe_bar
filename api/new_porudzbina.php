<?php

require 'dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  
  
  

   
  

  $upit = "INSERT into porudzbina (idPorudz, vremePorudz) VALUES 
  (NULL, NOW())";
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(201);
    $porudzbina = [
      'idPorudz' => mysqli_insert_id($conn),
      'vremePorudz' => date('Y-m-d H:i:s')
      
      ];
    echo json_encode($porudzbina);
  }
  else {
      http_response_code(404);
      echo json_encode("Unos nove porudzbine nije uspeo.");
  }

  }

else {
    http_response_code(404);
    echo json_encode("Nema podataka.");
    
}

?>