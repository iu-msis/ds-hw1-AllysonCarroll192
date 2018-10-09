<?php
class Comments
{
  public $id;
  public $comment;
  public function __construct($data){
    $this->id = intval($data['id']);
    $this->comment = $data['comment'];
  }
  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT INTO Comment (id, comment) VALUE(?, ?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->id,
      $this->comment,
    ]);
    $this->id = $db->lastInsertID();
  }
}
public static function fetchALL(){
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  $sql = 'SELECT * FROM Comment';
  $statement = $db->prepare($sql);
  $success = $statement->execute();
  $arr = [];
  while ($row = $statement->fetch(PDO::FETCH-ASSOC)){
    $theComment = new Comment($row);
    array_push($arr, $theComment);
  }
  return $arr;
}
