import React from 'react';

import Gallery from '../../../../../../../components/Gallery';

import GuidePage from '../../../../GuidePageComponent';
import ClassCard from '../../ClassCard';
import ClassBody from '../../ClassBody';
import Skill from '../../Skill';

import icon from '../../../../../../../img/guide/classes/tier3/reaper/icon.png';
import skillOne from '../../../../../../../img/guide/skills/12.png';
import skillTwo from '../../../../../../../img/guide/skills/55.png';
import skillThree from '../../../../../../../img/guide/skills/40.png';
import skillPassive from '../../../../../../../img/guide/skills/38.png';
import skillUltimate from '../../../../../../../img/guide/skills/58.png';

export default (
  <GuidePage
    right={
      <ClassCard
        name="Reaper"
        icon={icon}
        classTier={3}
        element="element.lightning"
        weapons={['Dagger', 'Sword']}
        armors={['Feather', 'Light', 'Cloth']}
        offhand={['Dagger']}
        damage={10}
        defense={6}
        health={8}
        mana={4}
      />
    }
  >
    <ClassBody
      intro="classes.tier3.reaper.intro"
      playstyle="classes.tier3.reaper.playstyle"
      skillComponent={
        <Skill
          icons={[skillOne, skillTwo, skillThree, skillPassive, skillUltimate]}
          names={[
            'Consuming Strike',
            'Soul Spike',
            'Realm of Darkness',
            'Soul Collector',
            "Assassin's Execution",
          ]}
          descriptions={[
            'classes.tier3.reaper.skill_one',
            'classes.tier3.reaper.skill_two',
            'classes.tier3.reaper.skill_three',
            'classes.tier3.reaper.skill_passive',
            'classes.tier3.reaper.skill_ultimate',
          ]}
        />
      }
    />
    <h2>Gallery</h2>
    <Gallery
      pictures={[
        {
          src: 'https://media.giphy.com/media/vVnIh1ZhwHmrasKKlE/source.gif',
          name: "Assassin's Execution",
          description: "Player casting Assassin's Execution on Test monster",
        },
      ]}
    />
  </GuidePage>
);
