<?php


if($_SERVER['REQUEST_METHOD']=='GET') {

    require_once 'dbconnect.php';
    $upit = "SELECT * FROM racun";
    $rez = mysqli_query($conn,$upit);
    $racuni = [];
    if($rez) {
        while($r = mysqli_fetch_assoc($rez)) {
            $racuni['lista'][] = $r;
          }
        echo json_encode($racuni['lista']);
        mysqli_close($conn);
    }
    else {
        http_response_code(404);
    }

}

?>