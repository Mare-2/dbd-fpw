<script></script>
    

<template>
    <!-- logo immagine e titolo -->
    <header class="col-12">
        <RouterLink to="/"> <img id="logo_header" src="../assets/img/logo.png" alt="Logo di dbd" width="100"> </RouterLink>
    
        <h1 id="titolo_header">Debugging Ducks</h1>
        <NavBar></NavBar>
    </header>
</template>

<style>

    @media only screen and (min-width: 768px){
    
        #titolo_header{
            text-align: left;
            color : var(--white);
            font-size: 30px;
            padding-top:10px;
        }

        #logo_header{
            float: left;
            padding: 20px;
        }
    
    }

    @media only screen and (max-width: 768px){
        #titolo_header{
            text-align: center;
            color : var(--white);
            font-size: 40px;
            
        }

        #logo_header{
            float: center;
            padding-top: 15px;
        }
        
    }
</style>