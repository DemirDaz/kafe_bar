<?php


if($_SERVER['REQUEST_METHOD']=='GET') {

    require_once 'dbconnect.php';
    $upit = "SELECT * FROM pice";
    $rez = mysqli_query($conn,$upit);
    $pica = [];
    if($rez) {
        while($r = mysqli_fetch_assoc($rez)) {
            $pica['lista'][] = $r;
          }
        echo json_encode($pica['lista']);
        mysqli_close($conn);
    }
    else {
        http_response_code(404);
    }

}

?>