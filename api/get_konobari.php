<?php


if($_SERVER['REQUEST_METHOD']=='GET') {

    require_once 'dbconnect.php';
    $upit = "SELECT * FROM konobar WHERE `admin` = 0";
    $rez = mysqli_query($conn,$upit);
    $konobari = [];
    if($rez) {
        while($r = mysqli_fetch_assoc($rez)) {
            $konobari['lista'][] = $r;
          }
        echo json_encode($konobari['lista']);
        mysqli_close($conn);
    }
    else {
        http_response_code(404);
    }

}

?>