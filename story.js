const story = {
    'start': {
        q: 'Into the wild game',
        a: {
            'Start': 'enter alaska'
        }
    },
    'enter alaska': { 
        q: 'Jim Gallien insists again that the Alaskan wild is very harsh, but you tell him that you have already made up your mind. He offers you a pair of Wellington boots, which you accept. Jim waves as he drives away, leaving you in the wild. You look at the Stampede Trail before you. Your Alaskan Odyssey has begun.', // text in question
        a: {
            'You decide to start on the trail': 'intro two', //continue is a button leading to "Intro two"
            'You feel a sudden sense of regret, and you run after Jim\'s car, hoping that he will take you back to society': 'anchorage'
        }
    },
    'anchorage': {
        q: 'Jim tells you, "You have made a wise choice". He offers to take you to Anchorage, where you then get a job as an English teacher. You live for a long time in Alaska.'
    },
    'intro two': {
        q: 'It has been 2 days on the Stampede trail. You reach the Teklanika River. The water volume is quite low.',
        a: {
            'You wade across the river': 'intro three', //continue is a button leading to "Intro three"
        }
    },    
    'intro three': {
        q: 'On the fourth day, You see something over a hill. Do you explore it?',
        a: {
            'Yes': 'findBus', 
            'No': 'toTrail'
        }
    },
// does not find bus
    'toTrail': {
        q: 'Your goal is to keep walking west, hunting animals and camping along the way, until you reach the Bering sea. You make good progress today.',
        a: {
            'Continue': 'trail2', 
        }
    },
    'trail2': {
        q: 'As you continue further down the trail, the landscape gets more and more desolate. Your rice supply is getting low, and it doesn\'t seem like you can survive just by hunting alone.',
        a: {
            'You have had enough of the Alaskan wilderness and decide to head back towards Healy.': 'trailBack',
            'You decide to continue. You might not go all the way to the ocean, but you at least want to go further than where you currently are.': 'trail3'
        }
    },
    'trailBack': {
        q: 'You retrace your way back along the trail, but you reach an unfamiliar place and you are not sure to go left or right.',
        a: {
            'Left': 'trailBackLeft',
            'Right': 'trailBackRight'
        }
    },
    'trailBackLeft': {
        q: 'You successfully find your way back to the start of the trail, and you make it to the town of Healy. You get some rest there, and head back to Fairbanks a few days later.'
    },
    'trailBackRight': {
        q: 'You get lost in the woods, and you cannot find your way out no matter which direction you walk in. You slowly starve to death.'
    },
    'trail3': {
        q: 'As time goes on, your food supply grows more and more meager and you start starving. You try to head back, but you get too weak before you are able to even reach the river again. You die alone in the Alaskan wilderness.'
    },
// end of does not find bus
    'findBus': {
        q: 'It’s an abandoned bus. You decide that it would be a nice place for camp. You write in your journal: “Magic Bus Day”.',
        a: {
            'Continue': 'day9', 
        }
    },
    'day9': {
        q: 'You finally finish setting up your camp. You feel a growl in your stomach. The 9.9 pounds of rice you brought can only nourish you for so long. Do you go hunting?',
        a: {
            'Yes': 'huntPorcupine', 
            'No': 'readTolstoy'
        }
    },
    'huntPorcupine': {
        q: 'After several hours of fruitless labor, you finally hunt a porcupine.',
        a: {
            'Continue': 'day23',
        }
    },
    'readTolstoy': {
        q: 'You take out Tolstoy’s “Family Happiness” novel and begin reading.',
        a: {
            'Continue': 'day23',
        }
    },
    'day23': {
        q: 'Day 23. Your hunting skills have greatly improved since you have first came to Alaska. Today alone, you hunted 8 squirrels. You shout, “Hellooo? Is there anybody here? You’re missing out!” ',
        a: {
            'Continue': 'day26', 
        }
    },    
    'day26': {
        q: 'Day 26. You gaze at the beautiful butte to the north of the bus. You walk outside to get a better look. An urge to climb it rises in you. Do you follow your urge? ',
        a: {
            'Yes': 'climbButte', 
            'No': 'noClimbButte'
        }
    },
    'climbButte': {
        q: 'You hike up the three-thousand-foot butte that overlooks the surrounding. You finally climb to the top of the butte. You stand with arms akimbo as you view the beautiful icy expanse of the Alaskan Range. You close your eyes and feel the cold wind graze your cheeks. You want this moment to last forever.',
        a: {
            'Continue': 'day43',
        }
    },
    'noClimbButte': {
        q: 'You spend the rest of the day hunting before returning to your camp.',
        a: {
            'Continue': 'day43',
        }
    },
    'day43': {
        q: 'On your daily hunting routine, you spot a moose! You take a deep breath to contain your excitement. You take your rifle and aim carefully.',
        a: {
            'BANG!': 'day43part2',
        }
    },
    'day43part2': {
        q: 'The moose falls to the ground. You gleefully hop over at the dead corpse. You take a small chunk of meat back to the bus to eat it. You realize that there is enough meat left on the moose to feed you for weeks. What will you do with the rest of the moose?',
        a: {
            'Leave the dead moose where it died': 'leaveMoose',
            'Drag the moose back to your camp and leave it outside the bus': 'rottenMoose1',
            'Smoke the moose meat so it doesn\'t spoil': 'rottenMoose2',
            'Cut the moose meat into thin strips and air-dry it': 'preservedMoose'
        }
    },
    'leaveMoose': {
        q: 'You feel too tired to do anything with the moose. You will come back here to get more moose meat later on. You feel proud of your great accomplishment and you return to the magic bus.',
        a: {
            'Return to bus': 'rottenMoose0',
        }
    },
    'rottenMoose0': {
        q: 'You come back later in the day, only to see that a pack of wolves have already eaten most of the moose.',
        a: {
            'You fight with the wolves for the remaining meat': 'wolfFight',
            'You decide to leave them alone and head back to the bus': 'day50'
        }
    },
    'wolfFight': {
        q: 'You regret not bringing your machete. To the wolves\' surprise, You land a firm kick on a wolf\'s belly. Another wolf launches itself at you. The sharp wolf claws maim your torso. You fall to the ground in pain, too powerless to move. The wolves decide to stop eating the moose and start eating you instead. You die a sad and ugly death.'
    },
    'rottenMoose1': {
        q: 'The moose has been lying outside of your bus for two days. The meat has begun spoiling. You regret not trying to preserve the meat earlier. Now, the rest of the moose meat will go to waste. You feel depressed at such a waste of an opportunity.',
        a: {
            'Continue': 'day50',
        }
    },
    'rottenMoose2': {
        q: 'Although you followed the advice of the South Dakota hunters to preserve the moose, it has already started to rot and spawn maggots all over it. Disappointed, you leave the moose to the wild wolves. ',
        a: {
            'Continue': 'day50'
        }
    },
    'day50': {
        q: 'Your spirits drop to an all time low. You feel miserable. It is the greatest tragedy of your life. You wish you never hunted the moose now.',
        a: {
            'Continue': 'day66'
        }
    },
    
    'preservedMoose': {
        q: 'You smack your lips as you bite into the delicious moose flesh. You are grateful to God and that you remembered an Alaskan hunter\'s advice. You pray to the Lord for this blessing.' ,
        a: {
            'Continue': 'day66'
        }
    },
    
    'day66': {
        q: 'As you read Thoreau\'s Walden, you have an epiphany. For "when I had caught and cleaned and cooked and eaten my fish, they seemed not to have fed me essentially. It was insignificant and unnecessary, and cost more than it came to." In the margin, you write "Consciousness of food. Eat and cook with concentration."',
        a: {
            'Continue': 'day66part2'
        }
    },
    'day66part2': {
        q: 'You have been enlightened. You repeat Tolstoy\'s quote: "I have lived through much, and now I think I have found what is needed for happiness." You believe your Alaskan Odyssey has accomplished its purpose. Is it time to head home?',
        a: {
            'Pack and head home': 'rushingRiver',
            'Stay in Alaska': 'day'
        }
    },
    'rushingRiver': {
        q: 'Two days later, you reach the Teklanika River. To your surprise, the frozen river has become a three-acre lake with chest-deep water. What do you do now?',
        a: {
            'Try to swim across the river': 'crossRushingRiver',
            'Follow the river upstream': 'upstream',
            'Follow the river downstream': 'downstream',
            'Return to the bus': 'day'
        }
    },
    'crossRushingRiver': {
        q: 'You jump into the freezing, raging river. The current gobbles you in its wake. You flail your arms wildly trying to keep afloat. Water gushes down your lungs as you attempt to gasp for air. You realize your struggle is futile. You thank the Lord one last time as you are carried downstream.'
    },
    'upstream': {
        q: 'You walk along the river upstream, and about one mile later you come across a place where the river is shallower and spread out into multiple channels. You find a suitable place to cross the river.',
        a: {
            'Cross the river': ''
        }
    }
};
