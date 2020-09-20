<?php

require_once 'dbconnect.php';

    $korisnik = file_get_contents("php://input");
    $info = json_decode($korisnik);

    $email = $info->email;
    $pin = $info->pin;
    

    if(isset($korisnik) && !empty($korisnik)) {

    $upit = "SELECT * FROM konobar WHERE email='$email'";

    $rez = mysqli_query($conn, $upit);

    if($rez) {

    if(mysqli_num_rows($rez)===1) {
        $row = mysqli_fetch_assoc($rez);
        if(password_verify($pin, $row['pinKod'])) {
            $user['idRadnika'] = $row['idRadnika'];
            $user['email'] = $row['email'];
            $user['pinKod'] = $row['pinKod'];
            $user['admin'] = $row['admin'];
            
            http_response_code(200);
            echo json_encode($user);

            mysqli_close($conn);
        }
        else {
            http_response_code(400);
            echo "Lozinka koju ste uneli nije ispravna.";
        }
    } else {
        http_response_code(400);
        echo "Korisnik ne postoji.";
    }
} else {
    http_response_code(404);
}
}
else {
    http_response_code(422);
}

?>