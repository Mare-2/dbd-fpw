
<script>
</script>

<template>
    <main id="newReview_content" class="col-6">
        <div id="newReview_form">
            <h1>Nuova Papera</h1>
            <form action="/" method="post">
                <div id="displ_block">
                    <label for="title_cell">Titolo</label>
                    <input type="text" id="title_cell" name="title_cell">

                    <label for="desc_text">Descrizione</label>
                    <textarea rows="4" cols="20" name="desc_text" id="desc_text"></textarea>
            
                    <label for="prezzo">Prezzo</label>
                    <input type="text" id="serie_tv" name="review_type" value="Prezzo">
                </div>

                <input type="submit" value="Invia"></input>
            </form>
        </div>
    </main>
</template>

<style>
#newReview_content {
    height: 600px;
    width: auto;
}

#newReview_form {
    text-align: center;
    background-color: var(--primary);
    color: var(--white);

    position: absolute;
    top: 50%;
    /* orig 65% */
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 20px;
    margin: 0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

#newReview_form h1 {
    color: var(--white);
}

#displ_block input,
textarea {
    display: block;
    width: 66%;
    margin-left: 17%;
    margin-top: 2%;
}

#newReview_form input[type="submit"] {
    background-color: var(--white);
    color: var(--primary);
    font-weight: bold;
    cursor: pointer;

    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
}

#newReview_form input[type="submit"]:hover {
    background: var(--tertiary);
    color: var(--white);
}

#newReview_form label {
    font-weight: bold;
    margin-top: 20%;
}
</style>