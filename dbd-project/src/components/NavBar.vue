<template>
    <nav class="col-12">
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/members">Membri</RouterLink></li>
            <li><RouterLink to="/products">Prodotti</RouterLink></li>
            <li><RouterLink to="/new-product">Nuovo Prodotto</RouterLink></li>
            <li><RouterLink to="/login">Login</RouterLink></li>
            
        </ul>
    </nav>
</template>

<style>

    nav li > a{
        color:var(--black)
    }

    a:link{
        text-decoration: none;
        font-size: 20px;
    }

    a:hover{
        font-weight: bold;
        color: var(--primary)
    }

    @media only screen and (min-width: 768px){
        nav li{
            display: inline-block;
            padding-left: 20px;
            padding-right: 20px;
            border-left: 2px solid var(--primary);
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
    
    nav li{
        list-style-type: none;
    }
    

    nav li:first-child{
        border-left: none;
    }

    
</style>