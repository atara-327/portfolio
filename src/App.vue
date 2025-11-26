<script setup lang="ts">
import QiitaIcon from '@/assets/img/qiita-icon.svg';
</script>

<template>
  <main class="py-5 px-md-5 px-1">
    <div class="container py-4 pb-5 px-md-5 bg-light text-center border border-white rounded shadow card">
      <h1 class="text-center mb-3">atara's PORTFOLIO</h1>

      <hr />

      <h2 class="mb-3">自己紹介</h2>
      <div>
        <p>
          あたらです。学生です。<br /><br />
          ゲームが大好きです。MinecraftとかVRChatをよくやります。<br />
          プログラミングも大好きです。<br />
          競プロとかCTFにも興味があるので、いつかやってみたいです。
        </p>
      </div>

      <h2 class="my-3">リンク</h2>
      <ul class="list-unstyled">
        <li class="py-1">
          <a class="icon-link" href="https://x.com/atara_0327" target="_blank"><i class="bi bi-twitter-x mb-2"></i>
            atara_0327</a>
        </li>
        <li class="py-1">
          <a class="icon-link" href="https://github.com/atara-327" target="_blank"><i class="bi bi-github mb-2"></i>
            atara-327</a>
        </li>
        <li class="py-1">
          <a class="icon-link" href="https://qiita.com/atara0327" target="_blank">
            <img :src="QiitaIcon" alt="Qiita" />
            atara0327
          </a>
        </li>
      </ul>

      <h2 class="my-3">成果物</h2>
      <ul class="list-unstyled">
        <li class="py-1">
          <a href="https://sia-songs.ataraman.com" target="_blank">依澄しあ
            歌枠検索</a>
        </li>
      </ul>
    </div>
    <br />
  </main>

  <footer class="d-flex justify-content-center gap-sm-5 gap-3 fw-light text-nowrap">
    <p class="my-auto">&copy; 2025 atara-327</p>
  </footer>
</template>

<style scoped>
a {
  color: var(--bs-body-text-rgb);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
