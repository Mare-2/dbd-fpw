<script setup>

</script>


<script setup>
</script>

<template>
     <!--
            Finto login form con opzione per registrazione
          -->
    <div id="loginContent">
        <div id="loginForm">
            <img src="../assets/img/logo.png" alt="logo" width="300">
            <h1>Login</h1>
            <form action="login" method="POST">
                <label for="username">Username</label>
                <input type="text" id="username" name="username">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
                <input type="submit" value="Accedi">
            </form>
        </div>
        
    </div>
    
    
</template>

<style>
    #loginContent{
        height: 600px;
        width: auto;
    }

    #loginForm{
        text-align: center;
        background: var(--primary);
        color: var(--white);

        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);

        padding: 20px;
        margin: 0;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
    }

    #loginForm input[type="submit"]:hover{
        background: var(--tertiary);
        color: var(--white);
    }

    #loginForm label{
        font-weight: bold;
    }

    #loginForm h1{
        color: var(--white);
    }

    #loginForm input{
        display: block;
        width: 66%;
        margin-left: 17%;
        margin-top: 2%;
    }

    #loginForm input[type="submit"]{
        background: var(--white);
        color: var(--primary);
        font-weight: bold;
        cursor: pointer;

        padding: 10px;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
    }
    
</style>