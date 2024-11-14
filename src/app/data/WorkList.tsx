export type Work = {
  imagePath: string;
  title: string;
  details: {
    content: string;
    description: string;
    language: string;
    github: string;
  };
};

export const WorkList: Work[] = [
  {
    imagePath: "toype.png",
    title: "TOYPE",
    details: {
      content: "TOEICの英単語をTypingGameで学習できるサイト",
      description:
        "toeic-tyinggameをtyoescriptとNext.jsとfirebaseを使用して作成しました。ログイン機能を追加し、",
      language: "HTML,CSS / JavaScript / React",
      github: "https://toeic-typing-game.vercel.app/",
    },
  },
  {
    imagePath: "fashonista.png",
    title: "FASHONISTA",
    details: {
      content: "天気と季節からコーディネートを提案してくれるwebアプリ",
      description:
        " Next.jsとTypescriptとshadcnを使用して作成しました。「今日何着ようという朝の悩みを解決するためのアプリ」",
      language: "Typescript / Next.js / Firebase / shadcn/",
      github: "https://fashonista-pi.vercel.app/",
    },
  },

  {
    imagePath: "keyaki2024.png",
    title: "欅祭アンケート",
    details: {
      content: "学校の文化祭のコメントを投稿できるwebサイト",
      description:
        "私が在籍している成蹊大学の文化祭で、出展するPeachTechのコメントをいただくために作成しました。初めてのチーム開発で、Next.jsとSupabaseを使用しました。",
      language: "Typescript / Next.js / Supabase",
      github: "https://github.com/ryolingo/Keyaki2024",
    },
  },
  {
    imagePath: "portfolio.png",
    title: "ポートフォリオ",
    details: {
      content: "このサイトです！",
      description:
        " Next.jsとTypescriptとMaterial-UIを使用して作成しました。初めてのポートフォリオ作成で、「シンプルにわかりやすく」をテーマにしてました。",
      language: "Typescript / Next.js / Supabase",
      github: "https://ryotaportfolio.vercel.app/",
    },
  },

  {
    imagePath: "typinggame.png",
    title: "TOEIC Vocabulary Typing Game",
    details: {
      content: "TOEICの英単語をTypingGameで学習できるサイト",
      description:
        "初めての個人開発。TOEICの英単語を楽しく学習できるように作成しました。",
      language: "HTML,CSS / JavaScript / React",
      github: "https://github.com/ryolingo/Typing-game",
    },
  },
];
