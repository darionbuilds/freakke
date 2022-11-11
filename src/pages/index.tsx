import Container from '@mui/material/Container';
import React, { useState } from 'react';

import nikkes from '../../allCharacters.json';
import type { Node } from '../characterDataTypes';
import Tile from '../layouts/components/Tile';
import { Meta } from '../layouts/Meta';

const Index = () => {
  const NIKKE_TEAM_SIZE = 5;

  const [selectedNikkes, setSelectedNikkes] = useState<Node[]>([]);

  const handleNikkeSelect = (nikke: Node) => {
    try {
      if (selectedNikkes.length < NIKKE_TEAM_SIZE) {
        setSelectedNikkes([...selectedNikkes, nikke]);
      } else {
        throw new Error(
          `Cannot add more than ${NIKKE_TEAM_SIZE} Nikke to a team.`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        // TODO: Logging
        // eslint-disable-next-line no-console
        console.error(error.message);
      }
    }
  };

  const renderTeam = () => {
    const teamTiles = Array<JSX.Element>(NIKKE_TEAM_SIZE);

    for (let i = 0; i < 5; i += 1) {
      const nikke = selectedNikkes[i];
      teamTiles[i] = (
        <div key={i}>
          <Tile nikke={nikke} handleNikkeSelect={handleNikkeSelect} />
        </div>
      );
    }

    return <React.Fragment>{teamTiles.map((node) => node)}</React.Fragment>;
  };

  return (
    <div className="h-full w-full bg-slate-800">
      <Meta />
      <Container sx={{ display: 'flex' }}>{renderTeam()}</Container>
      <Container
        sx={{ display: 'flex', flexWrap: 'wrap', overflowY: 'scroll' }}
      >
        {nikkes.allCharacters.nodes
          .sort((a, b) => {
            return `${b.rarity}`.localeCompare(a.rarity);
          })
          .map((nikke, index) => {
            return (
              <div key={index}>
                <Tile nikke={nikke} handleNikkeSelect={handleNikkeSelect} />
              </div>
            );
          })}
      </Container>
    </div>
  );
};

export default Index;
