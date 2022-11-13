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

  interface SquadMemberSkills {
    name: string;
    skills: Skill[];
  }

  const squadSkills: SquadMemberSkills[] = [];

  squad.forEach((squadMember) => {
    const squadMemberSkills = {} as SquadMemberSkills;

    squadMemberSkills.name = squadMember.name;
    squadMemberSkills.skills = [];

    squadMember.skills.forEach((skill) => {
      const skillDescriptionJson: ListNode = JSON.parse(
        skill.descriptionLevel10.raw
      );

      console.log();

      const skillClean: Skill = {
        name: skill.name,
        slot: skill.slot,
        type: skill.type,
        cooldown: skill.cooldown,
        targets: skillDescriptionJson.content[0].content[0].value,
        effect: skillDescriptionJson.content[1].content[0].value,
      };

      console.log(skillClean);
      const target: string | undefined =
        skillDescriptionJson.content[0].content[0].value
          .split('Affects ')[1]
          ?.split('.')[0];

      if (target) {
        if (target.includes('the enemy')) {
          console.log('Enemy attack');
        } else if (target.includes('self')) {
          console.log('Self');
        } else if (target.includes('ally')) {
          if (target.includes('the ally')) {
            console.log('Single buffer');
          } else {
            console.log(`Buffs ${Number(target.slice(0, 1))} allies`);
          }
        } else if (target.includes('allies')) {
          if (target.includes(' all ')) {
            console.log('Team buffer');
          } else {
            console.log('Targeted buffer');
          }
        }
      }

      try {
        squadMemberSkills.skills.push();
      } catch (error) {
        if (error instanceof Error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      }
    });

    squadSkills.push(squadMemberSkills);
  });

  return (
    <div>
      {squadSkills.map((squadMember, index) => {
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
