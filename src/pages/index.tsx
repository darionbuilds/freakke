import Container from '@mui/material/Container';
import React, { useState } from 'react';

import nikkes from '../../allCharacters.json';
import type { Node } from '../characterDataTypes';
import SynergyPanel from '../layouts/components/Synergy';
import Tile from '../layouts/components/Tile';
import { Meta } from '../layouts/Meta';

const Index = () => {
  const NIKKE_TEAM_SIZE = 5;

  const [selectedNikkes, setSelectedNikkes] = useState<Node[]>([]);

  const handleNikkeClick = (nikke: Node, isInSquad: boolean) => {
    try {
      if (selectedNikkes.length < NIKKE_TEAM_SIZE && !isInSquad) {
        setSelectedNikkes([...selectedNikkes, nikke]);
      } else if (isInSquad) {
        setSelectedNikkes([
          ...selectedNikkes.filter(
            (squadMember) => squadMember.name !== nikke.name
          ),
        ]);
      } else {
        throw new Error(
          `Cannot add more than ${NIKKE_TEAM_SIZE} Nikke to a team.`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        // TODO: Refactor to toast error
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
          <Tile
            nikke={nikke}
            isInSquad={true}
            handleNikkeClick={handleNikkeClick}
          />
        </div>
      );
    }

    return <React.Fragment>{teamTiles.map((node) => node)}</React.Fragment>;
  };

  return (
    <div className="h-full w-full bg-slate-800">
      <Meta />
      <Container>
        <SynergyPanel squad={selectedNikkes} />
      </Container>
      <Container sx={{ display: 'flex' }}>{renderTeam()}</Container>
      <Container
        sx={{ display: 'flex', flexWrap: 'wrap', overflowY: 'scroll' }}
      >
        {nikkes.allCharacters.nodes
          .filter((nikke) => !selectedNikkes.includes(nikke))
          .sort((a, b) => {
            return `${b.rarity}`.localeCompare(a.rarity);
          })
          .map((nikke, index) => {
            return (
              <div key={index}>
                <Tile
                  nikke={nikke}
                  isInSquad={false}
                  handleNikkeClick={handleNikkeClick}
                />
              </div>
            );
          })}
      </Container>
    </div>
  );
};

export default Index;
