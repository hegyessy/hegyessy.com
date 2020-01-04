<?= snippet('header') ?>
<main>
<?php foreach($page->children()->listed()->flip() as $article): ?>
<article>
	<a href="<?= $article->url() ?>">
		<?= $article->title()->html() ?>
		<?= $article->article()->excerpt(50) ?>
	</a>
</article>
<?php endforeach ?>
</main>
<?= snippet('footer') ?>