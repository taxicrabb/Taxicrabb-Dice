Hooks.on('diceSoNiceReady', (dice3d) => {

	dice3d.addTexture("Mapleleaf", {
	    name: "⧋ Maple Leaf",
	    composite: "multiply",
	    source: "modules/taxicrabb-dice/textures/Mapleleaftext.webp",
	    bump: "modules/taxicrabb-dice/textures/Mapleleaftext.webp"
	});

  dice3d.addSystem({id:"Rollplayer1",name:"⧋ Rollplayer1 (d20, 20 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'No','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/taxicrabb-dice/faces/RollP1.webp'
    ],
    system:"Rollplayer1"
  });
	
  dice3d.addSystem({id:"uwu",name:"⧋ UWU (d20, 20 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'QwQ','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'UwU'
    ],
    system:"uwu"
  });
	
});
