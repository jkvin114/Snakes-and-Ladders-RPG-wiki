const OBSTACLES=[
      {
        "name": "Money",
        "desc": "Receives 10~30$",
        "val": 1,
        "idx": 1
      },
      {
        "name": "Money",
        "desc": "Receives 40~60$",
        "val": 2,
        "idx": 2
      },
      {
        "name": "Money",
        "desc": "Receives 70~100$",
        "val": 3,
        "idx": 3
      },
      {
        "name": "Trap",
        "desc": "HP -10",
        "val": -1,
        "idx": 4
      },
      {
        "name": "Robbery",
        "desc": " -30$",
        "val": -2,
        "idx": 5
      },
      {
        "name": "Subway",
        "desc": "Choose the type of the train",
        "val": 0,
        "idx": 6
      },
      {
        "name": "Mine",
        "desc": "HP -30 on step out",
        "val": -2,
        "idx": 7
      },
      {
        "name": "Knife",
        "desc": "HP -20",
        "val": -1,
        "idx": 8
      },
      {
        "name": "Fruit",
        "desc": "HP +50",
        "val": 2,
        "idx": 9
      },
      {
        "name": "Sleeping pill",
        "desc": "Silent(can`t use skill)",
        "val": -1,
        "idx": 10
      },
      {
        "name": "Potion",
        "desc": "Reset normal skill cooltimes, reduce ultimate cooltime by 50%",
        "val": 4,
        "idx": 11
      },
      {
        "name": "Magic castle",
        "desc": "Skill range x3, additional true damage for skill",
        "val": 2,
        "idx": 12
      },
      {
        "name": "Cobweb",
        "desc": "root 1 turn",
        "val": -2,
        "idx": 13
      },
      {
        "name": "Gamble",
        "desc": "Receives 10~60$ randomly",
        "val": 1,
        "idx": 14
      },
      {
        "name": "Snatcher",
        "desc": "Other players take 10% each of your money ",
        "val": -4,
        "idx": 15
      },
      {
        "name": "Snowball",
        "desc": "HP -20, slowness",
        "val": -2,
        "idx": 16
      },
      {
        "name": "Vampire",
        "desc": "Other players take away 20 HP each",
        "val": -2,
        "idx": 17
      },
      {
        "name": "Pickpocket",
        "desc": "Other players take away 30$ each",
        "val": -3,
        "idx": 18
      },
      {
        "name": "Summon",
        "desc": "Summon every player in range of 20",
        "val": 0,
        "idx": 19
      },
      {
        "name": "Change",
        "desc": "Change position with nearest playere",
        "val": 0,
        "idx": 20
      },
      {
        "name": "God`s hand",
        "desc": "Force move one player in range of 5",
        "val": 4,
        "idx": 21
      },
      {
        "name": "Annuity",
        "desc": "+30$ every turn ",
        "val": 3,
        "idx": 22
      },
      {
        "name": "Daylight Robbery",
        "desc": "HP -30, -30$, (-3tokens)",
        "val": -3,
        "idx": 23
      },
      {
        "name": "Shelter",
        "desc": "HP +70, Invisibility 1 turn, get shield, remove all harmful effects",
        "val": 4,
        "idx": 24
      },
      {
        "name": "Shield",
        "desc": "Ignore one skill",
        "val": 2,
        "idx": 25
      },
      {
        "name": "Big mine",
        "desc": "HP -70 on step out",
        "val": -3,
        "idx": 26
      },
      {
        "name": "Murderer",
        "desc": "HP -100",
        "val": -4,
        "idx": 27
      },
      {
        "name": "Poison cobweb",
        "desc": "root and slowness",
        "val": -3,
        "idx": 28
      },
      {
        "name": "Poison",
        "desc": "-30 HP each turn",
        "val": -4,
        "idx": 29
      },
      {
        "name": "Bomb",
        "desc": " HP -1/3 of current HP",
        "val": -5,
        "idx": 30
      },
      {
        "name": "Nuclear bomb",
        "desc": " HP -1/2 of missing HP,radiation effect",
        "val": -5,
        "idx": 31
      },
      {
        "name": "Radiation",
        "desc": "damage x2 for 1 turn",
        "val": -6,
        "idx": 32
      },
      {
        "name": "Kidnapper",
        "desc": "choose between -300 HP and root for 2 turns",
        "val": -5,
        "idx": 33
      },
      {
        "name": "Slavery",
        "desc": "-80HP for every turn, dies if you reach the end",
        "val": -7,
        "idx": 34
      },
      {
        "name": "Jail",
        "desc": "speed effect after root for 3 turns",
        "val": -5,
        "idx": 35
      },
      {
        "name": "Hurricane",
        "desc": "Move back to original position",
        "val": -1,
        "idx": 36
      },
      {
        "name": "Death Court",
        "desc": "Roll a roullete",
        "val": -6,
        "idx": 37
      },
      {
        "name": "Casino",
        "desc": "Roll a roullete",
        "val": 0,
        "idx": 38
      },
      {
        "name": "fair wind",
        "desc": "next dice x2",
        "val": 1,
        "idx": 39
      },
      {
        "name": "headwind",
        "desc": "next dice goes back",
        "val": -3,
        "idx": 40
      },
      {
        "name": "Net",
        "desc": "root 1 turn",
        "val": -2,
        "idx": 41
      },
      {
        "name": "Fish",
        "desc": "HP +50",
        "val": 2,
        "idx": 42
      },
      {
        "name": "Jellyfish",
        "desc": "-30 HP each turn for 3 turns",
        "val": -3,
        "idx": 43
      },
      {
        "name": "Shark attack",
        "desc": "HP -40",
        "val": -2,
        "idx": 44
      },
      {
        "name": "Squid",
        "desc": "Can`t use basic attack for 1 turn",
        "val": -1,
        "idx": 45
      },
      {
        "name": "Iceburg",
        "desc": "slowness, HP -30",
        "val": 3,
        "idx": 46
      },
      {
        "name": "gold",
        "desc": "100~150$",
        "val": 3,
        "idx": 47
      },
      {
        "name": "treasure",
        "desc": "",
        "val": 4,
        "idx": 48
      },
      {
        "name": "Pirate",
        "desc": "HP -50, -20$",
        "val": -4,
        "idx": 49
      },
      {
        "name": "Vikings",
        "desc": "HP -30,ignite effct for 3 turn",
        "val": -4,
        "idx": 50
      },
      {
        "name": "Dive",
        "desc": "Ignore every attack and obstacle for 1 turn",
        "val": 3,
        "idx": 51
      },
      {
        "name": "Lightning",
        "desc": "HP -75 for every player in range of 3",
        "val": -4,
        "idx": 52
      },
      {
        "name": "Tsunami",
        "desc": "Every player move back by 3, HP -30",
        "val": -6,
        "idx": 53
      },
      {
        "name": "Blue hole",
        "desc": "Summon every player in range of 20",
        "val": 0,
        "idx": 54
      },
      {
        "name": "Storm",
        "desc": "Randomly move to a square in range of 5",
        "val": 0,
        "idx": 55
      },
      {
        "name": "Tornado",
        "desc": "move to random player in range of 30",
        "val": 0,
        "idx": 56
      },
      {
        "name": "Underwater mine",
        "desc": "HP -70 on step out",
        "val": -3,
        "idx": 57
      },
      {
        "name": "Torpedo",
        "desc": "HP -120",
        "val": -4,
        "idx": 58
      },
      {
        "name": "Whale`s grace",
        "desc": "speed for 3 turns",
        "val": 2,
        "idx": 59
      },
      {
        "name": "Volcano",
        "desc": "HP - 1/4 of max HP, ignite effct for 3 turn ",
        "val": -5,
        "idx": 60
      },
      {
        "name": "SLBM",
        "desc": "HP -175",
        "val": -6,
        "idx": 61
      },
      {
        "name": "Loan",
        "desc": "get 10 tokens, -400$ after 5 turns",
        "val": 0,
        "idx": 62
      },
      {
        "name": "Threaten",
        "desc": "Choose between -50$ or -3 tokens",
        "val": -3,
        "idx": 63
      },
      {
        "name": "Debt",
        "desc": "Can`t earn money, can`t sell tokens for 2 turns ",
        "val": -4,
        "idx": 64
      },
      {
        "name": "scam",
        "desc": "take away half of your money and tokens",
        "val": -6,
        "idx": 65
      },
      {
        "name": "annuity lottery",
        "desc": "+50$, +1 token for every turn",
        "val": 4,
        "idx": 66
      },
      {
        "name": "coin store",
        "desc": "Can sell coin",
        "val": 3,
        "idx": 67
      },
      {
        "name": "Street vendor",
        "desc": "can use store with 10% higher price",
        "val": 1,
        "idx": 68
      },
      {
        "name": "Lottery",
        "desc": "get huge amount of money by 7%",
        "val": 4,
        "idx": 69
      },
      {
        "name": "Tax collector",
        "desc": "take away 5% + 2$ x coins for every player",
        "val": 4,
        "idx": 70
      },
      {
        "name": "Thief",
        "desc": "take away one of your common items ",
        "val": -3,
        "idx": 71
      },
      {
        "name": "Curse",
        "desc": "get worst result for next dice for 2 turns",
        "val": -6,
        "idx": 72
      },
      {
        "name": "Grief",
        "desc": "damage by 50% of your money you have",
        "val": -5,
        "idx": 73
      },
      {
        "name": "Tollgate",
        "desc": "can pass only if you have more than 150$ or 10 tokens",
        "val": 0,
        "idx": 74
      }
]