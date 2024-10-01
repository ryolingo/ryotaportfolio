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
];
