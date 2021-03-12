<DOCTYPE!>
<html>
  <head>
    <title>Character Creator</title>
  </head>
  <body>
    <table>
      <tr>
        <td>
          <h3>Editor</h3>
          <form action="/action_page.php">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Doe"><br><br>
            <input type="submit" value="Submit">
          </form>
        </th>
        <td>
          <h3>Output</h3>
          <h1><?php echo "Hello World" ?></h1>
          <?php
            echo "Hello World"
            $dest = imagecreatefrompng('square.png');
            $src = imagecreatefromjpeg('star.jpg');

            imagealphablending($dest, false);
            imagesavealpha($dest, true);

            imagecopymerge($dest, $src, 10, 9, 0, 0, 181, 180, 100);

            header('Content-Type: image/png');
            imagepng($dest);

            imagedestroy($dest);
            imagedestroy($src);
            ?>
          <!--script src="https://unpkg.com/merge-images">
            var square = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/500px-Square_-_black_simple.svg.png";
            var star = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png";
            import mergeImages from 'merge-images';
            mergeImages(['square.png', 'star.png'])
              .then(b64 => document.querySelector('img').src = b64);
          </script-->
        </th>
      </tr>
    </table>
  </body>
</html>
