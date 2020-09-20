<?php 

    require_once 'dbconnect.php';

    $korisnik = file_get_contents("php://input");
	
    $novi = json_decode($korisnik);
    
	$ime = $novi->pIme;
	$adresa = $novi->adresaStan;
	$telefon = $novi->brMob;
	$email = $novi->email;
	$pinKod = $novi->pinKod;
  
    
    if(isset($korisnik) && !empty($korisnik)) {
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

    $upit = "INSERT into konobar (idRadnika, pIme, adresaStan, brMob, email, pinKod) VALUES 
  (NULL, '$ime', '$adresa', '$telefon', '$email', '$pinKod')";

    if(mysqli_query($conn, $upit)) {
        http_response_code(201);
        
        $to = $email;
        $message = "Hvala Vam na poverenju ," .$email. ". Uživajte u korišćenju sajta. Tim KafeBar";
        $message = wordwrap($message,70);
        $subject = "KafeBar registracija";
        $headers = 'From: demir-dazdarevic@live.com' . "\r\n" .
        'Reply-To: demir-dazdarevic@live.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        $mejl = mail($to, $subject, $message, $headers);

        $konobar = [
      'idRadnika' => mysqli_insert_id($conn),
      'pIme' => $ime,
      'adresaStan' => $adresa,
      'brMob' => $telefon,
      'email' => $email,
      'pinKod' => $pinKod
    ];
        echo json_encode($konobar);
    }
    else {
        http_response_code(404);
        echo "Email adresa koju ste uneli je zauzeta.";
   }
  }
}
else {
    http_response_code(422);
}

?>