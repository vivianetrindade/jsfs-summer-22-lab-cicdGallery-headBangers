export const createHtml = (structure, element) => {
  element.innerHTML = structure;
};

export const newHtml = `<header class="header">
<nav>LOGO</nav>
</header>
<main class="main">

<section class="section">
<form class="form">
    <input class="input" placeholder='Search for images' type="text" name="searchterm">
</form>
</section>
<section class="section__photos"></section>
<footer class="footer">gitHub url</footer>
</main>`;
