<?= snippet('header') ?>
<main>
    <article>
        <h1><?= $page->title() ?></h1>
        <?= $page->article()->kirbytext() ?>
    </article>
</main>
<?= snippet('footer') ?>
