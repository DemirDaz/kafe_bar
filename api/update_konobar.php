<?php

require 'dbconnect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  $idR = $request->idRadnika;
  $ime = $request->pIme;
  $adresa = $request->adresaStan;
  $telefon = $request->brMob;
  $email = $request->email;
  $pinKod = $request->pinKod;

     if(!preg_match("/^([a-zA-Z ćčČĆ0-9,]{5,30}+)$/",$ime))
            {http_response_code(400);
             echo "Uneto ime nije validno.";}
        else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
            {http_response_code(400);
             echo "Uneti mejl nije validan.";}
        
        else if (strlen($pinKod) < '6' || strlen($pinKod) > '6') {http_response_code(400);
             echo "Uneta duzina sifre nije validna, pin kod mora imati 6 cifara.";} 
            //else if ( !preg_match("#[0-9]+#",$pinKod) || !preg_match("#[A-Z]+#",$pinKod) || !preg_match("#[a-z]+#",$pinKod ))
            else if ( !preg_match("#[0-9]+#",$pinKod))
             {http_response_code(400);
             echo "Sifra mora posedovati samo brojeve.";} 
            else if (!preg_match("/^([a-zA-Z ćčČĆ0-9,]{10,150}+)$/",$adresa))
            {http_response_code(400);
             echo "Uneta adresa nije validna.";}
             else if (!preg_match("/^([0-9+ ]{6,15}+)$/",$telefon))
             {http_response_code(400);
             echo "Uneti broj telefona nije validan.";}
             
              else {

    $pinKod = password_hash($pinKod, PASSWORD_DEFAULT);

  $upit = "UPDATE konobar SET `pIme`='$ime', `adresaStan`='$adresa', `brMob`='$telefon', `email`='$email', `pinKod`='$pinKod'
   WHERE `idRadnika` = '{$idR}'";
  $rez  = mysqli_query($conn, $upit);

  if($rez) {
    http_response_code(200);
  }
  else {
      http_response_code(404);
      echo "Izmena radnika nije uspela.";
  }

  }
}
else {
    http_response_code(404);
}
?>