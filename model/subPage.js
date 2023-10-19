const subPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/substyle.css">
  <title>sub page</title>
</head>
<body>
  <div id="root">
    <label for="id" id="helloDiv"></label>
    <form action="/" method="post">
      <label for="title">
        title
        <input type="text">
      </label>
      <label for="textPart" >
        Text
        <input type="text" id="textPart">
      </label>
      <input type="submit" value="완료">
    </form>
  </div>
</body>
</html>
`
module.exports = subPage;