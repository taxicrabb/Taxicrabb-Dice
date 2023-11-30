
Hooks.on('diceSoNiceReady', (dice3d) => {

	dice3d.addTexture("Mapleleaf", {
	    name: "🦀 Maple Leaf",
	    composite: "multiply",
	    source: "modules/taxicrabb-dice/textures/Mapleleaftext.webp",
	    bump: "modules/taxicrabb-dice/textures/Mapleleaftext.webp"
	});
	
 	dice3d.addTexture("Cherryblossom", {
	    name: "🦀 Cherryblossom",
	    composite: "multiply",
	    source: "modules/taxicrabb-dice/textures/CherryBlossomB2.webp",
        bump: "modules/taxicrabb-dice/textures/CherryBlossomB.webp"
	});

 	dice3d.addTexture("Cherryblossom2", {
	    name: "🦀 Cherryblossom2",
	    composite: "difference",
	    source: "modules/taxicrabb-dice/textures/CherryBlossomdiff.webp",
	});

 	dice3d.addTexture("Sparklecore", {
	    name: "🦀 Sparklecore",
	    composite: "multiply",
	    source: "modules/taxicrabb-dice/textures/sparklecore.webp",
        bump: "modules/taxicrabb-dice/textures/sparklecore.webp"
	});
	
  dice3d.addSystem({id:"Rollplayer1",name:"🦀 Rollplayer1 (d20, 20 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/taxicrabb-dice/faces/RollP1.webp'
    ],
    system:"Rollplayer1"
  });
	
  dice3d.addSystem({id:"uwu",name:"🦀 UWU (d20, 20 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/taxicrabb-dice/faces/qwqd20.webp','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/taxicrabb-dice/faces/uwud20.webp'
    ],
    system:"uwu"
  });
	
  dice3d.addSystem({id:"qwq",name:"🦀 UWU (d20, 1 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/taxicrabb-dice/faces/uwud20.webp','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/taxicrabb-dice/faces/qwqd20.webp'
    ],
    system:"qwq"
  });
	
  dice3d.addSystem({id:"Wolf",name:"🦀 Werewolf (d20)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/taxicrabb-dice/faces/wolfd1.webp','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/taxicrabb-dice/faces/wolfd20.webp'
    ],
    system:"Wolf"
  });

  dice3d.addSystem({id:"Goat",name:"🦀 Goat (d20)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'Bah','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/taxicrabb-dice/faces/goatd20.webp'
    ],
    system:"Goat"
  });

  dice3d.addSystem({id:"Raven1",name:"🦀 Raven1 (d20)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'Caw','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/taxicrabb-dice/faces/Raven1d20.webp'
    ],
    system:"Raven1"
  });
	
  dice3d.addSystem({id:"Raven2",name:"🦀 Raven2 (d20)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'Caw','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/taxicrabb-dice/faces/Raven2d20.webp'
    ],
    system:"Raven2"
  });
	
});
