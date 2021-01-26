<?php
header("Access-Control-Allow-Origin: *");
$estud->name = "Carlos";
$estud->age = "30";
$estud->city = "New York";

$estudJson = json_encode($estud);

echo $estudJson;
?>