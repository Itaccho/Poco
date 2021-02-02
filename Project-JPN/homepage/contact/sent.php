<?php
$name = $_POST['name'];
$email = $_POST['e-mail'];
$opinion = $_POST['opinion'];
include "mail-contact-index.html";



if (!mb_send_mail(“shonesluxores@gmail.com”, $_POST[“subject”], $message, “From:
” . $_POST[“email”])) {
exit(“error”);
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>sent.form</title>
  </head>
  <body>
<h1>Please check the necessary items</h1>
<?php
 echo "name: ".$name;
 echo "email: ".$email;
 echo "opinion: ".$opinion;
?>
<form class="" action="confirmed-php" method="post">
  <p>Please make sure that you filled in the necessary items</p>
<!-- 確認画面には表示されませんが値が送信されます。 -->
  <input type="hidden" name="name" value="<?php echo $name; ?>">
  <input type="hidden" name="email" value="<?php echo $email; ?>">
  <input type="hidden" name="opinion" value="<?php echo $opinion; ?>">
  <input type="submit" name="" value="I'll submit this form">
</form>
  </body>
</html>
