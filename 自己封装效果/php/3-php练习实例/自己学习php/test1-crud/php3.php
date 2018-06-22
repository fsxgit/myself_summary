<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>创建数据库</title>
</head>
<body>
<?php

echo("<h1>数据库的链接，SQL语句：</h1>");


//第一步
$servername = "localhost";
$username = "root";
$password = "root";

// 创建连接
$conn = new mysqli($servername, $username, $password);


//第二步
// 检测连接方法1
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 检测连接方法2 兼容更早版本
if (mysqli_connect_error()) {
    die("数据库连接失败: " . mysqli_connect_error());
}

echo "连接成功";


//第三步
// 创建数据库fxName
$sql = "CREATE DATABASE fxName";
if ($conn->query($sql) === TRUE) {
    echo "数据库创建成功";
} else {
    echo "Error creating database: " . $conn->error;
}


//第四步
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "fxName";
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 使用 sql 创建数据表
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "创建数据表错误: " . $conn->error;
}

//第五步 插入数据
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

//$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
//VALUES ('诗晓', '樊', 'fan@example.com')";
//
//$sql .= "insert into MyGuests (firstname, lastname, email)
// values ('茜茜', '杜', 'du@qq.com')";

if ($conn->query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

//第六步 查询数据
$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 输出每行数据
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"];
    }
} else {
    echo "0 个结果";
}

//第四步
//关闭数据库
$conn->close();

?>
</body>
</html>