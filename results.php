<?php 
$studentId = $_POST["studentId"];
$studentFName = $_POST["studentFName"];
$studentLName = $_POST["studentLName"];
$_studentBatch = isset($_POST["studentBatch"]);
$_email = isset($_POST["email"]);
$English = $_POST["English"];
$Hindi = $_POST["Hindi"];
$Math = $_POST["Math"];
$Science = $_POST["Science"];
$History = $_POST["History"];
$Geography = $_POST["Geography"];
if (empty($_POST["Remarks"])){
    $Remarks = "NONE";
}else{
    $Remarks = $_POST["Remarks"];
}
$Results = ($English + $Hindi + $Math + $Science + $Science + $History + $Geography)/600 * 100 ;
$ResultsArr = ['Distinction',"FirstClass","Pass","Fail"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Report</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="home.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="results.php">Results</a>
                  </li>
                </ul>
                </li>
                </ul>
            </div>
        </div>
    </nav>
    <br>

    <div class="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">Firt Name</th>
      <th scope="col">Last Name</th>
      <th scope="col"> Batch/Class</th>
      <th scope="col">  Email Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><?php echo($studentId) ?></th>
      <td><?php echo($studentFName) ?></td>
      <td><?php echo($studentLName) ?></td>
      <td><?php echo($_studentBatch) ?></td>
      <td><?php echo($_email) ?></td>
    </tr>
  </tbody>
</table>
    <b><p class = "text-center">Marks Details</p></b>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Student Id</th>
      <th scope="col">English</th>
      <th scope="col">Hindi</th>
      <th scope="col">Math</th>
      <th scope="col">Science</th>
      <th scope="col">History</th>
      <th scope="col">Geography</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><?php echo($studentId) ?></th>
      <td><?php echo($English) ?></td>
      <td><?php echo($Hindi) ?></td>
      <td><?php echo($Math) ?></td>
      <td><?php echo($Science) ?></td>
      <td><?php echo($History) ?></td>
      <td><?php echo($Geography) ?></td>
    </tr>
  </tbody>
</table>
<div class="row">
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Your Percentage</h5>
    <p class="card-text"><?php echo( sprintf("%0.2f", $Results) . "%") ;?></p>
  </div>
</div>


<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Your Grade</h5>
    <p class="card-text"><?php 
    
    if($Results >= 75){
        echo($ResultsArr[0]);
    }else if($Results >= 60 && $Results <75){
        echo($ResultsArr[1]);
    }else if($Results >= 33 && $Results < 59){
        echo($ResultsArr[2]);
    }else{
        echo($ResultsArr[3]);
    }
    
    ?></p>
    </div>
  </div>
  <div class="card" style="width: 100rem;">
  <div class="card-body">
    <h5 class="card-title">Remarks</h5>
    <p class="card-text"><?php echo($Remarks) ;?></p>
  </div>
</div>
</div>
</div>


    </body>

</html>