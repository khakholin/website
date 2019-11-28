<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>form</title>
    </head>
    <body>
        <p style="height: 1500px; background-color: grey;"></p>



        <h2>Заказать</h2>
        <a name="form-1"></a>
        <form action="index1.php#form-1" method="POST" name="f1">
            <input type="text" placeholder="Your name" name="name1" required><br><br>
            <input type="email" placeholder="Your email" name="email1" required="required"><br><br>

            <textarea placeholder="Your text" name="text" required="required"></textarea><br><br>

            <input type="submit" value="Confirm" name="sab">
        </form>
        <?php
            error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
            // создание переменных из полей формы		
            if (isset($_POST['name1'])) {
                $name1 = $_POST['name1'];		
                if ($name1 == '') {
                    unset($name1);
                }
            }
            if (isset($_POST['email1'])) {
                $email1	= $_POST['email1'];		
                if ($email1 == '') {
                    unset($email1);
                }
            }
            if (isset($_POST['text'])) {
                $text = $_POST['text'];		
                if ($text == '') {
                    unset($text);
                }
            }
            if (isset($_POST['sab'])) {
                $sab = $_POST['sab'];		
                if ($sab == '') {
                    unset($sab);
                }
            }
            //стирание треугольных скобок из полей формы
            if (isset($name1) ) {
                $name1=stripslashes($name1);
                $name1=htmlspecialchars($name1);
            }
            if (isset($email1) ) {
                $email1=stripslashes($email1);
                $email1=htmlspecialchars($email1);
            }
            if (isset($text) ) {
                $text=stripslashes($text);
                $text=htmlspecialchars($text);
            }
            // адрес почты куда придет письмо
            $address="khakholin@mail.ru";
            // текст письма 
            $note_text="Имя : $name1 \r\n Email : $email1 \r\n Дополнительная информация : $text";

            if (isset($name1)  &&  isset ($sab) ) {
                mail($address, "From site", $note_text,"Content-type:text/plain; windows-1251"); 
            }
        ?>
    </body>
</html>