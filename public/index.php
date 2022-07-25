<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
</head>

<body class="vh-100 bg-dark bg-gradient">
    <main class="h-100 d-flex justify-content-center align-items-center" id="content-main">
        <form>
            <div class="mb-3 fields">
                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 fields">
                <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                <input type="password" class="form-control password" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label text-white" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </main>
    <script src="assets/js/index.js"></script>
</body>

</html>