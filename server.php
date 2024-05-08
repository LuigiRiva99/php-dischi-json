<?php
//recupero il contenuto di dischi.json
$discs_string = file_get_contents('dischi.json'); //str

//'converto' il contenuto del file in un array associativo (leggibile da php)
$discs = json_decode($discs_string, true); //array


header('Content-type: application/json');

$data = [
  'results' => $discs,
];

echo json_encode($data);
?>