export interface Work {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  year: string;
  details: string; // HTML content or long text
  demoUrl?: string; // Optional
  repoUrl?: string; // Optional
}

export const works: Work[] = [
  {
    slug: "portfolio",
    title: "ポートフォリオ",
    description: "自分用 & 友達に見せる用のポートフォリオサイトとして開発。",
    thumbnail: "https://placehold.co/600x400/1a1a1a/ffffff?text=Portfolio",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    year: "2026",
    details: `
      <p>かっこいいポートフォリオが欲しくて作りました。前までのものは少しダサかったので...</p>
      <p>ReactとVueを触ったことがあったのですが、そこまで思いの使わなくてもいいなと思い、初めてAstroを使ってみました。</p>
      <p>といっても、たたき台はAIに作ってもらい、文章や微調整のみ自分で行いました。</p>
      <p>アクセスしたときの最初の画面に印象的で面白いものをおいておきたくて、あんな感じになりました。</p>
    `,
  },
  {
    slug: "baken",
    title: "馬券シミュレーター",
    description: "らんらんるーさんの依頼で開発した馬券をシミュレートするウェブアプリ。",
    thumbnail: "https://placehold.co/600x400/2563eb/ffffff?text=baken+simulator",
    tags: ["React", "Tailwind CSS", "TypeScript", "Django REST Framework"],
    year: "2026",
    details: `
      <p>未執筆</p>
    `,
  },
  {
    slug: "todo",
    title: "Simple Stack TODO",
    description: "シンプルを追求したTODOアプリ。",
    thumbnail: "https://placehold.co/600x400/2563eb/ffffff?text=Simple+Stack+TODO",
    tags: ["Electron", "Vibe coding"],
    year: "2025",
    details: `
      <p>未執筆</p>
    `,
  },
  {
    slug: "sia-songs",
    title: "依澄しあ 歌検索",
    description: "依澄しあの歌を検索するウェブアプリ。",
    thumbnail: "https://placehold.co/600x400/eab308/ffffff?text=sia+songs",
    tags: ["Vue.js", "Bootstrap", "Typescript", "Django REST Framework"],
    year: "2025",
    details: `
      <p>未執筆</p>
    `,
  },
];
