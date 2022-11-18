import type { ListNode, Node } from '../../characterDataTypes';

interface SynergyPanelProps {
  squad: Node[];
}

const SynergyPanel = (props: SynergyPanelProps) => {
  const { squad } = props;

  interface Skill {
    name: string;
    slot: string;
    type: string;
    cooldown: number | null;
    targets: string;
    effect: string;
  }

  interface SquadMember {
    name: string;
    skills: Skill[];
  }

  const squadSkills: SquadMember[] = [];

  const burstCooldowns: [number[], number[], number[]] = [[], [], []];

  squad.forEach((squadMember) => {
    const squadMemberSkills = {} as SquadMember;

    squadMemberSkills.name = squadMember.name;
    squadMemberSkills.skills = [];

    squadMember.skills.forEach((skill) => {
      const skillDescriptionJson: ListNode = JSON.parse(
        skill.descriptionLevel10.raw
      );

      const skillClean: Skill = {
        name: skill.name,
        slot: skill.slot,
        type: skill.type,
        cooldown: skill.cooldown,
        targets: skillDescriptionJson.content[0].content[0].value,
        effect: skillDescriptionJson.content[1].content[0].value,
      };

      if (skill.slot.toLowerCase() === 'burst' && skill.cooldown) {
        switch (squadMember.burstType) {
          case '1':
            burstCooldowns[0].push(skill.cooldown);
            break;
          case '2':
            burstCooldowns[1].push(skill.cooldown);
            break;
          case '3':
            burstCooldowns[2].push(skill.cooldown);
            break;
          default:
            throw new Error('Skill does not have a burst type');
        }
      }

      // const target: string | undefined =
      //   skillDescriptionJson.content[0].content[0].value
      //     .split('Affects ')[1]
      //     ?.split('.')[0];

      // if (target) {
      //   if (target.includes('the enemy')) {
      //     console.log('Enemy attack');
      //   } else if (target.includes('self')) {
      //     console.log('Self');
      //   } else if (target.includes('ally')) {
      //     if (target.includes('the ally')) {
      //       console.log('Single buffer');
      //     } else {
      //       console.log(`Buffs ${Number(target.slice(0, 1))} allies`);
      //     }
      //   } else if (target.includes('allies')) {
      //     if (target.includes(' all ')) {
      //       console.log('Team buffer');
      //     } else {
      //       console.log('Targeted buffer');
      //     }
      //   }
      // }

      try {
        squadMemberSkills.skills.push(skillClean);
      } catch (error) {
        if (error instanceof Error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      }
    });

    squadSkills.push(squadMemberSkills);
  });

  // TODO: Toast notification of the problem
  burstCooldowns.forEach((currentLevelCDs, index) => {
    if (!currentLevelCDs.length) {
      console.log(`Missing Burst ${index + 1}!`);
    } else {
      currentLevelCDs.sort((a, b) => a - b);

      const greatestCD = currentLevelCDs[currentLevelCDs.length - 1];
      if (typeof greatestCD === 'number') {
        // if the greatest cooldown divided by 20
        // is greater than the number of bursts in that tier
        // there is a bottleneck

        if (greatestCD / 20 > currentLevelCDs.length) {
          console.log('Burst 1 Cooldown Conflict!', currentLevelCDs);
        }
      }
    }
  });

  return (
    <div>
      {squadSkills.map((squadMember, index) => {
        console.log(squadMember);
        return (
          <div key={index}>
            {squadMember.skills.map((skill, indexI) => {
              return <div key={indexI}>{skill.name}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SynergyPanel;
