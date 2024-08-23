<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Training of Form with JS && TS</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
</head>

<body class="vh-100 bg-dark bg-gradient">
    <main class="h-100 d-flex justify-content-center align-items-center" id="content-main">
        <form style="width: 300px;" class="d-flex flex-column">
            <div class="mb-3 field" id="email-container">
                <label for="email-input" class="form-label text-white">Email address</label>
                <input type="text" class="form-control" id="email-input" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 field" id="password-container">
                <label for="password-input" class="form-label text-white">Password</label>
                <input type="password" class="form-control password" id="password-input" />
            </div>
            <button type="submit" class="btn btn-primary ms-auto">Send</button>
        </form>
    </main>
    <script src="./assets/dist/index.js"></script>
</body>

</html>