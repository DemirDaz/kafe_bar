<?php



    require_once 'dbconnect.php';
    $id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($conn, (int)$_GET['id']) : false;
    
    if(!$id)
{
  return http_response_code(400);
}
    $upit = "SELECT * FROM racun WHERE `sto` = '{$id}' AND `placen` = 0";
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



?>