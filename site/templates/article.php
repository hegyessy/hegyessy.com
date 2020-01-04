<?= snippet('header') ?>
<main>
    <article>
        <?= $page->title() ?>
        <?= $page->article()->kirbytext() ?>
    </article>
</main>
<?= snippet('footer') ?>
