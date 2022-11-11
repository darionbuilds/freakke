import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import type { Node } from '../../characterDataTypes';

interface TileProps {
  nikke: Node | undefined;
  handleNikkeSelect: (nikke: Node) => void;
}

const Tile = (props: TileProps) => {
  const { nikke, handleNikkeSelect: handleNikkeSelection } = props;

  if (!nikke) {
    return (
      <Card sx={{ width: 160, height: 440, margin: 0.5 }}>
        <Typography>Nikke</Typography>
      </Card>
    );
  }

  let rarityColor: string;

  switch (nikke.rarity) {
    case 'SSR':
      rarityColor = '#ffc000';
      break;
    case 'SR':
      rarityColor = '#bf00fe';
      break;
    case 'R':
      rarityColor = '#0090ff';
      break;
    default:
      rarityColor = 'grey';
      break;
  }

  return (
    <Card
      sx={{ minWidth: 160, height: 440, margin: 0.5, bgcolor: rarityColor }}
      onClick={() => handleNikkeSelection(nikke)}
    >
      <CardMedia
        component="img"
        image={`https://www.prydwen.gg${nikke.cardImage.localFile.childImageSharp.gatsbyImageData.images.fallback.src}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {nikke.name}
        </Typography>
        <Typography>{nikke.class}</Typography>
        <Typography>{nikke.weapon}</Typography>
        <Typography>{`Burst Level ${nikke.burstType}`}</Typography>
        <Typography>{nikke.element}</Typography>
      </CardContent>
    </Card>
  );
};

export default Tile;
