import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="TOEIC　Typing Game"
        dateにしたい
        subheader="2024年　6月  "
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/typinggame.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          TOIECの英単語をタイピンングゲームで覚えることができるアプリです。スコアを競い合いながら楽しく学習できます。
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography variant="h6">
            {expanded ? "閉じる" : "さらに見る"}
          </Typography>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>詳細</Typography>
          <Typography sx={{ marginBottom: 2 }}></Typography>
          <Typography sx={{ marginBottom: 2 }}>
            一人で開発を進め、サークルの先輩やChatGPTに質問しながら制作しました。HTMLやCSSの勉強を目的とし、先輩から簡単に作れると勧められたのがきっかけです。レベル選択できる機能を工夫しました。
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>serve.</Typography>
          <Typography>技術スキル:HTML, CSS, JavaScript,React</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
