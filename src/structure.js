const createHtml = (structure, element) => {
  element.innerHTML = structure;
};

const newHtml = `<header class="header">
<nav>LOGO</nav>
</header>
<main class="main">

<section class="section">
<form class="form">
    <input class="input" placeholder='Search for images' type="text" name="searchterm">
</form>
</section>
<footer class="footer">gitHub url</footer>
</main>`;

export default createHtml(newHtml, document.querySelector('body'));
