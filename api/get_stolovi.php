<?php


if($_SERVER['REQUEST_METHOD']=='GET') {

    require_once 'dbconnect.php';
    $upit = "SELECT * FROM stolovi";
    $rez = mysqli_query($conn,$upit);
    $stolovi = [];
    if($rez) {
        while($r = mysqli_fetch_assoc($rez)) {
            $stolovi['lista'][] = $r;
          }
        echo json_encode($stolovi['lista']);
        mysqli_close($conn);
    }
    else {
        http_response_code(404);
    }

}

?>