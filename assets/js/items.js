const ITEMS=[
	{
		"id": 0,
		"name": "Epic Sword",
		"kor_name": "1등급 검",
		"price": 300,
		"itemlevel": 3,
		"ability": [
			{ "type": "AD", "value": 80, "type_kor": "공격력" },
			{ "type": "arP", "value": 10, "type_kor": "물리 관통" }
		],
		"children": [1, 1],
		"parents": [],
		"summary": {
			"kor": "공격력",
			"eng": "Attack Power"
		},
		"category": ["attack"]
	},
	{
		"id": 1,
		"name": "Rare Sword",
		"kor_name": "2등급 검",
		"price": 80,
		"itemlevel": 2,
		"ability": [{ "type": "AD", "value": 30, "type_kor": "공격력" }],
		"children": [2, 2],
		"parents": [0, 17, 23, 35,42],
		"summary": {
			"kor": "공격력",
			"eng": "Attack Power"
		},
		"category": ["attack"]
	},
	{
		"id": 2,
		"name": "Common Sword",
		"kor_name": "3등급 검",
		"price": 30,
		"itemlevel": 1,
		"ability": [{ "type": "AD", "value": 10, "type_kor": "공격력" }],
		"children": [],
		"parents": [1, 16],
		"summary": {
			"kor": "공격력",
			"eng": "Attack Power"
		},
		"category": ["attack"]
	},
	{
		"id": 3,
		"name": "Epic Crystal Ball",
		"kor_name": "1등급 구슬",
		"price": 320,
		"itemlevel": 3,
		"ability": [
			{ "type": "AP", "value": 120, "type_kor": "주문력" },
			{ "type": "MP", "value": 12, "type_kor": "마법 관통" }
		],
		"children": [4, 4],
		"parents": [],
		"summary": {
			"kor": "주문력",
			"eng": "Magic Power"
		},
		"category": ["magic"]
	},
	{
		"id": 4,
		"name": "Rare Crystal Ball",
		"kor_name": "2등급 구슬",
		"price": 120,
		"itemlevel": 2,
		"ability": [{ "type": "AP", "value": 50, "type_kor": "주문력" }],
		"children": [5, 5],
		"parents": [3, 20, 33, 38],
		"summary": {
			"kor": "주문력",
			"eng": "Magic Power"
		},
		"category": ["magic"]
	},
	{
		"id": 5,
		"name": "Common Crystal Ball",
		"kor_name": "3등급 구슬",
		"price": 40,
		"itemlevel": 1,
		"ability": [{ "type": "AP", "value": 15, "type_kor": "주문력" }],
		"children": [],
		"parents": [4, 38],
		"summary": {
			"kor": "주문력",
			"eng": "Magic Power"
		},
		"category": ["magic"]
	},
	{
		"id": 6,
		"name": "Epic Shield",
		"kor_name": "1등급 방패",
		"price": 300,
		"itemlevel": 3,
		"ability": [
			{ "type": "HP", "value": 80, "type_kor": "최대체력" },
			{ "type": "AR", "value": 60, "type_kor": "방어력" },
			{ "type": "obsR", "value": 10, "type_kor": "장애물 저항" }
		],
		"children": [7, 7],
		"parents": [],
		"summary": {
			"kor": "방어력",
			"eng": "Attack Resistance"
		},
		"category": ["defence"]
	},
	{
		"id": 7,
		"name": "Rare Shield",
		"kor_name": "2등급 방패",
		"price": 80,
		"itemlevel": 2,
		"ability": [
			{ "type": "HP", "value": 30, "type_kor": "최대체력" },
			{ "type": "AR", "value": 20, "type_kor": "방어력" }
		],
		"children": [8, 8],
		"parents": [6, 15, 33, 36],
		"summary": {
			"kor": "방어력",
			"eng": "Attack Resistance"
		},
		"category": ["defence"]
	},
	{
		"id": 8,
		"name": "Common Shield",
		"kor_name": "3등급 방패",
		"price": 30,
		"itemlevel": 1,
		"ability": [
			{ "type": "HP", "value": 10, "type_kor": "최대체력" },
			{ "type": "AR", "value": 7, "type_kor": "방어력" }
		],
		"children": [],
		"parents": [7],
		"summary": {
			"kor": "방어력",
			"eng": "Attack Resistance"
		},
		"category": ["defence"]
	},
	{
		"id": 9,
		"name": "Epic Fruit",
		"kor_name": "1등급 재생의열매",
		"price": 330,
		"itemlevel": 3,
		"ability": [
			{ "type": "HP", "value": 100, "type_kor": "최대체력" },
			{ "type": "regen", "value": 50, "type_kor": "턴당 체력재생" }
		],
		"children": [10, 21],
		"parents": [],
		"unique_effect": "regenerate 15% of additional HP every turn",
		"unique_effect_kor": "매턴마다 추가체력의 15% 추가회복",
		"summary": {
			"kor": "체력 재생",
			"eng": "HP regen"
		},
		"category": ["health"]
	},
	{
		"id": 10,
		"name": "Rare Fruit",
		"kor_name": "2등급 재생의열매",
		"price": 120,
		"itemlevel": 2,
		"ability": [
			{ "type": "HP", "value": 40, "type_kor": "최대체력" },
			{ "type": "regen", "value": 30, "type_kor": "턴당 체력재생" }
		],
		"children": [11, 11],
		"parents": [9],
		"summary": {
			"kor": "체력 재생",
			"eng": "HP regen"
		},
		"category": ["health"]
	},
	{
		"id": 11,
		"name": "Common Fruit",
		"kor_name": "3등급 재생의열매",
		"price": 25,
		"itemlevel": 1,
		"ability": [{ "type": "regen", "value": 10, "type_kor": "턴당 체력재생" }],
		"children": [],
		"parents": [10, 32],
		"summary": {
			"kor": "체력 재생",
			"eng": "HP regen"
		},
		"category": ["health"]
	},
	{
		"id": 12,
		"name": "Epic Armor",
		"kor_name": "1등급 갑옷",
		"price": 300,
		"itemlevel": 3,
		"ability": [
			{ "type": "HP", "value": 90, "type_kor": "최대체력" },
			{ "type": "MR", "value": 80, "type_kor": "마법 저항력" },
			{ "type": "obsR", "value": 10, "type_kor": "장애물 저항" }
		],
		"children": [13, 13],
		"parents": [],
		"summary": {
			"kor": "마법 저항",
			"eng": "Magic Resistance"
		},
		"category": ["defence"]
	},
	{
		"id": 13,
		"name": "Rare Armor",
		"kor_name": "2등급 갑옷",
		"price": 100,
		"itemlevel": 2,
		"ability": [
			{ "type": "HP", "value": 30, "type_kor": "최대체력" },
			{ "type": "MR", "value": 30, "type_kor": "마법 저항력" }
		],
		"children": [14, 14],
		"parents": [12, 15, 37],
		"summary": {
			"kor": "마법 저항",
			"eng": "Magic Resistance"
		},
		"category": ["defence"]
	},
	{
		"id": 14,
		"name": "Common Armor",
		"kor_name": "3등급 갑옷",
		"price": 40,
		"itemlevel": 1,
		"ability": [
			{ "type": "HP", "value": 10, "type_kor": "최대체력" },
			{ "type": "MR", "value": 10, "type_kor": "마법 저항력" }
		],
		"children": [],
		"parents": [13, 19],
		"summary": {
			"kor": "마법 저항",
			"eng": "Magic Resistance"
		},
		"category": ["defence"]
	},
	{
		"id": 15,
		"name": "Guardian Angel",
		"kor_name": "수호 천사",
		"price": 350,
		"itemlevel": 3,
		"ability": [
			{ "type": "HP", "value": 60, "type_kor": "최대체력" },
			{ "type": "AR", "value": 25, "type_kor": "방어력" },
			{ "type": "MR", "value": 35, "type_kor": "마법 저항력" }
		],
		"children": [7, 13],
		"parents": [],
		"unique_effect": "revive when dies with 50% HP",
		"unique_effect_kor": "사망시 50% 체력으로 부활함",
		"active_cooltime": 8,
		"summary": {
			"kor": "공격 방어, 사망시 부활",
			"eng": "Defence, Revive on death"
		},
		"active_summary": {
			"kor": "부활!",
			"eng": "Revival!"
		},
		"category": ["defence"]
	},
	{
		"id": 16,
		"name": "Bloodsucker",
		"kor_name": "흡혈의 검",
		"price": 140,
		"itemlevel": 2,
		"ability": [
			{ "type": "absorb", "value": 6, "type_kor": "모든 피해 흡혈" },
			{ "type": "AD", "value": 15, "type_kor": "공격력" }
		],
		"children": [2],
		"parents": [17],
		"summary": {
			"kor": "공격시 체력회복",
			"eng": "Heal on attack"
		},
		"category": ["health", "attack"]
	},
	{
		"id": 17,
		"name": "Sword of Blood",
		"kor_name": "피비린검",
		"price": 280,
		"itemlevel": 3,
		"ability": [
			{ "type": "AD", "value": 50, "type_kor": "공격력" },
			{ "type": "absorb", "value": 15, "type_kor": "모든 피해 흡혈" }
		],
		"children": [1, 16],
		"parents": [],
		"summary": {
			"kor": "공격력,공격시 체력회복",
			"eng": "Attack Power,Heal on attack"
		},
		"category": ["health", "attack"]
	},
	{
		"id": 18,
		"name": "Power of Mother Nature",
		"kor_name": "대자연의 힘",
		"price": 280,
		"itemlevel": 3,
		"ability": [
			{ "type": "HP", "value": 60, "type_kor": "최대체력" },
			{ "type": "MR", "value": 30, "type_kor": "마법 저항" },
			{ "type": "ultHaste", "value": 1, "type_kor": "궁극기 가속" }
		],
		"children": [19, 21],
		"parents": [],
		"unique_effect_kor": "스킬로 받는 피해 30% 감소, 이후 1턴간 이동속도 1 증가",
		"unique_effect": "30% skill damage reduction, movement speed +1 for 1 turn afterwards.",
		"active_cooltime": 3,
		"summary": {
			"kor": "스킬 방어",
			"eng": "Skill defence"
		},
		"active_summary": {
			"kor": "이동속도 증가!",
			"eng": "Move speed increased!"
		},
		"category": ["defence", "utility"]
	},
	{
		"id": 19,
		"name": "Power of Nature",
		"kor_name": "자연의 힘",
		"price": 110,
		"itemlevel": 2,
		"ability": [
			{ "type": "MR", "value": 20, "type_kor": "마법 저항" },
			{ "type": "HP", "value": 10, "type_kor": "최대체력" }
		],
		"children": [14],
		"parents": [18],
		"summary": {
			"kor": "스킬 방어",
			"eng": "Skill defence"
		},
		"unique_effect_kor": "스킬로 받는 피해 10% 감소",
		"unique_effect": "10% skill damage reduction",
		"category": ["defence"]
	},
	{
		"id": 20,
		"name": "Card of Deception",
		"kor_name": "속임수의 마법카드",
		"price": 280,
		"itemlevel": 3,
		"ability": [
			{ "type": "AP", "value": 80, "type_kor": "주문력" },
			{ "type": "HP", "value": 50, "type_kor": "최대체력" }
		],
		"children": [4, 21],
		"parents": [],
		"unique_effect": "Hitting skill to enemies in front of you slows them, deals 10% more damage, then grants you speed",
		"unique_effect_kor": "자신보다 앞에있는 적에게 스킬 사용시 피해량 10% 증가, 둔화 부여 후 자신은 신속 효과를 받음",
		"active_cooltime": 3,
		"summary": {
			"kor": "주문력, 따라잡기",
			"eng": "Magic Power, Catch-up"
		},
		"active_summary": {
			"kor": "추가 피해와 둔화!",
			"eng": "Additional damage and slowness!"
		},
		"category": ["magic", "utility"]
	},
	{
		"id": 21,
		"name": "Diamond Crystal",
		"kor_name": "다이아몬드 수정",
		"price": 90,
		"itemlevel": 2,
		"ability": [{ "type": "HP", "value": 50, "type_kor": "최대체력" }],
		"children": [34],
		"parents": [18, 9, 20, 32, 35],
		"summary": {
			"kor": "최대체력",
			"eng": "Maximum HP"
		},
		"category": ["health"]
	},
	{
		"id": 22,
		"name": "Ancient Spear",
		"kor_name": "고대의 창",
		"price": 325,
		"itemlevel": 3,
		"ability": [
			{ "type": "adStat", "value": 60, "type_kor": "적응형 능력치" },
			{ "type": "ultHaste", "value": 1, "type_kor": "궁극기 가속" }
		],
		"children": [25, 27],
		"parents": [],
		"unique_effect": "Skill attack deals bonus magic damage equal to 10%(5% for basic attack) of target`s maximum HP",
		"unique_effect_kor": "스킬공격시 대상 최대체력의 10%, 기본공격시 5%의 추가 마법 피해를 입힘",
		"summary": {
			"kor": "공격시 추가피해",
			"eng": "Additional damage on attack"
		},
		"category": ["attack", "magic"]
	},
	{
		"id": 23,
		"name": "Fury Whip",
		"kor_name": "살의의 채찍",
		"price": 340,
		"itemlevel": 3,
		"ability": [
			{ "type": "AD", "value": 45, "type_kor": "공격력" },
			{ "type": "attackRange", "value": 2, "type_kor": "기본 공격 사거리" },
			{ "type": "basicAttackSpeed", "value": 1, "type_kor": "공격 속도" }
		],
		"children": [24, 1],
		"parents": [],
		"summary": {
			"kor": "기본공격 강화",
			"eng": "Enhance basic attack"
		},
		"category": ["attack"]
	},
	{
		"id": 24,
		"name": "Reach Whip",
		"kor_name": "교활한 채찍",
		"price": 145,
		"itemlevel": 2,
		"ability": [{ "type": "attackRange", "value": 1, "type_kor": "기본 공격 사거리" }],
		"children": [],
		"parents": [23,42],
		"summary": {
			"kor": "기본공격 강화",
			"eng": "Enhance basic attack"
		},
		"category": ["attack"]
	},
	{
		"id": 25,
		"name": "Rare Magic Axe",
		"kor_name": "중급 마법의 도끼",
		"price": 110,
		"itemlevel": 2,
		"ability": [{ "type": "adStat", "value": 40, "type_kor": "적응형 능력치" }],
		"children": [26, 26],
		"parents": [22, 31],
		"summary": {
			"kor": "적응형 능력치",
			"eng": "Adaptative Stat"
		},
		"category": ["attack", "magic"]
	},
	{
		"id": 26,
		"name": "Common Magic Axe",
		"kor_name": "초급 마법의 도끼",
		"price": 35,
		"itemlevel": 1,
		"ability": [{ "type": "adStat", "value": 10, "type_kor": "적응형 능력치" }],
		"children": [],
		"parents": [25],
		"summary": {
			"kor": "적응형 능력치",
			"eng": "Adaptative Stat"
		},
		"category": ["attack", "magic"]
	},
	{
		"id": 27,
		"name": "Piercing Spear",
		"kor_name": "꿰뚫는 창",
		"price": 90,
		"itemlevel": 2,
		"ability": [{ "type": "adStat", "value": 20, "type_kor": "적응형 능력치" }],
		"children": [],
		"parents": [22, 31],
		"unique_effect": "Skill attack deals bonus magic damage equal to 5%(2% for basic attack) of target`s maximum HP",
		"unique_effect_kor": "스킬공격시 대상 최대체력의 5%, 기본공격시 2% 의 추가 마법 피해를 입힘",
		"summary": {
			"kor": "공격시 추가피해",
			"eng": "Additional damage on attack"
		},
		"category": ["attack", "magic"]
	},
	{
		"id": 28,
		"name": "Boots",
		"kor_name": "장화",
		"price": 100,
		"itemlevel": 2,
		"ability": [],
		"children": [],
		"parents": [29, 36, 37],
		"unique_effect": "dice number +1 when fell behind",
		"unique_effect_kor": "뒤쳐져 있으면 추가 주사위 +1",
		"summary": {
			"kor": "따라잡기",
			"eng": "Catch-up"
		},
		"category": ["utility"]
	},
	{
		"id": 29,
		"name": "Boots of Haste",
		"kor_name": "성급함의 장화",
		"price": 300,
		"itemlevel": 3,
		"ability": [
			{ "type": "ultHaste", "value": 1, "type_kor": "궁극기 가속" },
			{ "type": "moveSpeed", "value": 1, "type_kor": "이동 속도" }
		],
		"children": [28],
		"parents": [],
		"unique_effect": "Ignores slow effect, dice number +1 when fell behind",
		"unique_effect_kor": "둔화 무시, 뒤쳐져 있으면 추가 주사위 +1",
		"summary": {
			"kor": "더 빠른 이동",
			"eng": "Faster movement"
		},
		"category": ["utility"]
	},
	{
		"id": 30,
		"name": "Medieval Bow",
		"kor_name": "국궁",
		"price": 120,
		"itemlevel": 2,
		"ability": [
			{ "type": "arP", "value": 15, "type_kor": "물리 관통" },
			{ "type": "MP", "value": 15, "type_kor": "마법 관통" }
		],
		"children": [],
		"parents": [31],
		"summary": {
			"kor": "탱커 대항",
			"eng": "Anti-tank"
		},
		"category": ["attack", "magic"]
	},
	{
		"id": 31,
		"name": "Crossbow of Piercing",
		"kor_name": "관통의 석궁",
		"price": 350,
		"itemlevel": 3,
		"ability": [{ "type": "adStat", "value": 60, "type_kor": "적응형 능력치" }],
		"children": [30, 27, 25],
		"parents": [],
		"unique_effect": "40% armor and magic penetration. Skill attack deals bonus fixed damage equal to 7%(4% for basic attack) of target`s maximum HP",
		"unique_effect_kor": "적 방어력과 마법저항력을 40% 무시. 스킬공격시 대상 최대체력의 7%, 기본공격시 4% 의 추가 고정 피해를 입힘",
		"summary": {
			"kor": "탱커 대항",
			"eng": "Anti-tank"
		},
		"category": ["attack", "magic"]
	},
	{
		"id": 32,
		"name": "Full Diamond Armour",
		"kor_name": "다이아몬드 전신갑주",
		"price": 330,
		"itemlevel": 3,
		"ability": [
			{ "type": "HP", "value": 160, "type_kor": "최대체력" },
			{ "type": "regen", "value": 25, "type_kor": "턴당 체력재생" }
		],
		"children": [21, 21, 11],
		"parents": [],
		"unique_effect": "Max Hp increases by 10 permanently on every attack",
		"unique_effect_kor": "적 공격시 최대체력 10 영구 증가",
		"summary": {
			"kor": "최대체력",
			"eng": "Maximum HP"
		},
		"category": ["health"]
	},
	{
		"id": 33,
		"name": "Invisibility Cloak",
		"kor_name": "방어의 투명망토",
		"price": 280,
		"itemlevel": 3,
		"ability": [
			{ "type": "AP", "value": 60, "type_kor": "주문력" },
			{ "type": "AR", "value": 40, "type_kor": "방어력" },
			{ "type": "HP", "value": 25, "type_kor": "최대체력" }
		],
		"children": [7, 4],
		"parents": [],
		"unique_effect": "Become invisible for 1 turn if HP is below 30%",
		"unique_effect_kor": "체력이 30% 이하로 떨어지면 1턴간 투명화",
		"active_cooltime": 6,
		"summary": {
			"kor": "주문력,생존",
			"eng": "Magic Power, Survival from attack"
		},
		"active_summary": {
			"kor": "투명화!",
			"eng": "Invisible!"
		},
		"category": ["defence", "magic"]
	},
	{
		"id": 34,
		"name": "Diamond Shard",
		"kor_name": "다이아몬드 조각",
		"price": 40,
		"itemlevel": 1,
		"ability": [{ "type": "HP", "value": 20, "type_kor": "최대체력" }],
		"children": [],
		"parents": [21],
		"summary": {
			"kor": "최대체력",
			"eng": "Maximum HP"
		},
		"category": ["health"]
	},
	{
		"id": 35,
		"name": "Fortitude Shieldsword",
		"kor_name": "전사의 방패검",
		"price": 300,
		"itemlevel": 3,
		"ability": [
			{ "type": "HP", "value": 70, "type_kor": "최대체력" },
			{ "type": "AD", "value": 40, "type_kor": "공격력" }
		],
		"children": [1, 21],
		"parents": [],
		"summary": {
			"kor": "공격력,생존",
			"eng": "Attack Power, Survival from attack"
		},
		"active_summary": {
			"kor": "방어막 획득!",
			"eng": "Obtained shield!"
		},
		"unique_effect": "If HP goes below 30%, gain shield based on attack power for 2 turns and absorb increases 30%",
		"unique_effect_kor": "체력이 30% 이하로 내려가면 2턴간 공격력 비례 방어막 획득, 모든피해 흡혈 30% 증가",
		"active_cooltime": 7,
		"category": ["health", "attack", "defence"]
	},
	{
		"id": 36,
		"name": "Boots of Preservation",
		"kor_name": "수호의 장화",
		"price": 270,
		"itemlevel": 3,
		"ability": [
			{ "type": "moveSpeed", "value": 1, "type_kor": "이동 속도" },
			{ "type": "AR", "value": 30, "type_kor": "방어력" },
			{ "type": "obsR", "value": 10, "type_kor": "장애물 저항" }
		],
		"children": [28, 7],
		"parents": [],
		"unique_effect": "Reduces incoming basic attack damage by 35%",
		"unique_effect_kor": "기본 공격으로 받는 피해 35% 감소",
		"summary": {
			"kor": "빠른 이동, 방어력",
			"eng": "Fast Movement, Attack Defence"
		},
		"category": ["utility", "defence"]
	},
	{
		"id": 37,
		"name": "Boots of Endurance",
		"kor_name": "불굴의 장화",
		"price": 270,
		"itemlevel": 3,
		"ability": [
			{ "type": "moveSpeed", "value": 1, "type_kor": "이동 속도" },
			{ "type": "MR", "value": 40, "type_kor": "마법 저항" },
			{ "type": "obsR", "value": 10, "type_kor": "장애물 저항" }
		],
		"children": [28, 13],
		"parents": [],
		"unique_effect": "Reduces damage from constant damages(poison,ignite,etc) by 25%",
		"unique_effect_kor": "지속 피해(독,점화 등)로부터 입는 피해 25% 감소",
		"summary": {
			"kor": "빠른 이동, 마법 저항",
			"eng": "Fast Movement, Magic Resistance"
		},
		"category": ["utility", "defence"]
	},
	{
		"id": 38,
		"name": "Time Warp Potion",
		"kor_name": "시간 가속 물약",
		"price": 350,
		"itemlevel": 3,
		"ability": [
			{ "type": "AP", "value": 70, "type_kor": "주문력" },
			{ "type": "ultHaste", "value": 1, "type_kor": "궁극기 가속" }
		],
		"children": [5, 39],
		"parents": [],
		"unique_effect": "When AP is higher than 200, Normal skill cooltime resets if you kill an enemy",
		"unique_effect_kor": "주문력이 200 이상일 때, 적 처치시 기본스킬 쿨타임 초기화",
		"active_cooltime": 1,
		"summary": {
			"kor": "주문력, 쿨타임감소",
			"eng": "Magic power, Cooltime reduction"
		},
		"active_summary": {
			"kor": "스킬쿨타임 초기화!",
			"eng": "Skill cooltime reset!"
		},
		"category": ["magic"]
	},{
		"id": 39,
		"name": "Mystic Wand",
		"kor_name": "마법 지팡이",
		"price": 80,
		"itemlevel": 2,
		"ability": [
			{ "type": "AP", "value": 35, "type_kor": "주문력" }
		],
		"children": [5],
		"parents": [38,41],
		"summary": {
			"kor": "주문력",
			"eng": "Magic Power"
		},
		"category": ["magic"]
	},{
		"id": 40,
		"name": "Charged Dagger",
		"kor_name": "정전기의 단검",
		"price": 70,
		"itemlevel": 2,
		"ability": [
		],
		"children": [],
		"parents": [41,42],
		"summary": {
			"kor": "충전 공격",
			"eng": "Charged attack"
		},"unique_effect": "Moving by dice generates stacks. Next attack deals additional magic damage based on stacks",
		"unique_effect_kor": "주사위를 던져 이동 거리만큼 충전됨, 다음 공격시 충전을 소모해 추가 마법 피해를 입힘",
		"active_cooltime": 1,
		"category": ["attack","magic"]
	}
	,{
		"id": 41,
		"name": "Thunderbolt Staff",
		"kor_name": "심판의 지팡이",
		"price": 280,
		"itemlevel": 3,
		"ability": [
			{ "type": "AP", "value": 70, "type_kor": "주문력" },
			{ "type": "MP", "value": 10, "type_kor": "마법 관통" }
		],
		"children": [39,40],
		"parents": [],
		"summary": {
			"kor": "스킬 강화",
			"eng": "Enhance skill"
		},"unique_effect": "Moving by dice generates stacks. Next skill attack deals additional magic damage based on stacks",
		"unique_effect_kor": "주사위를 던져 이동 거리만큼 충전됨, 다음 스킬 사용시 충전량 비례 추가 마법피해를 입힘(스킬사용시 충전량 소모) ",
		"active_cooltime": 1,
		"category": ["magic"]
	},{
		"id": 42,
		"name": "Energized Flail of Reach",
		"kor_name": "심판의 철퇴",
		"price": 310,
		"itemlevel": 3,
		"ability": [
			{ "type": "AD", "value": 40, "type_kor": "공격력" },
			{ "type": "attackRange", "value": 1, "type_kor": "기본 공격 사거리" },
			{ "type": "arP", "value": 8, "type_kor": "물리 관통" }
		],
		"children": [1,40,24],
		"parents": [],
		"summary": {
			"kor": "기본공격 강화",
			"eng": "Enhance basic attack"
		},"unique_effect": "Moving by dice generates stacks. Next basic attack range increases and deals additional magic damage based on stacks",
		"unique_effect_kor": "주사위를 던져 이동 거리만큼 충전됨, 충전량에 비례해 다음 기본공격 사거리 증가와 추가 마법피해(충전량 소모)",
		"active_cooltime": 1,
		"category": ["attack"]
	}
]

async function fetchjson(){
	console.log("fetch")
	const data=await(await fetch("https://raw.githubusercontent.com/jkvin114/snakes-and-ladders-RPG/master/res/item_new.json")).json()
	return data
}
  
$(document).ready(async function(){
	// fetchjson()
	const imagepath="https://raw.githubusercontent.com/jkvin114/snakes-and-ladders-RPG/master/frontend/public/res/img/store/items.png"
    let lvl1=""
    let lvl2=""
    let lvl3=""
	const items=(await fetchjson()).items
	const itemlocales=(await(await fetch("https://raw.githubusercontent.com/jkvin114/snakes-and-ladders-RPG/master/frontend/public/res/locale/game/ko.json")).json()).item
    // console.log(itemlocales)
	for(const item of items){
        let txt=`<div class=toast_itemimg data-itemid=${item.id}><img src='${imagepath}' style='margin-left:${-1*100*item.id}px'; > </div>`
        if(item.itemlevel===1){
            lvl1+=txt
        }
        if(item.itemlevel===2){
            lvl2+=txt
        }
        if(item.itemlevel===3){
            lvl3+=txt
        }
    }
    $("#items-level1").html(lvl1)
    $("#items-level2").html(lvl2)
    $("#items-level3").html(lvl3)
    $(".toast_itemimg").click(function(){
        $("#overlay").show()
        $("#item-tooltip").show()
        const item=items[$(this).data("itemid")]
		const locale=itemlocales[$(this).data("itemid")]
        let ability=""
        for (let a of item.ability) {
            let ab = "<a class=ability_name>" + a.type + "</a> +" + a.value
    
            if (a.type === "addMdmg" || a.type === "skillDmgReduction" || a.type === "absorb" || a.type === "obsR") {
                ab += "%"
            }
            ability += ab
            ability += "<br>"
        }
        if (locale.unique_effect != null) {
            ability += `<b class=unique_effect_name>[Unique Passive]</b>:
                 ${locale.unique_effect}`
            if(item.active_cooltime!=null){
                ability+=`(cooltime ${item.active_cooltime} turns)`
            }
        }
        $(".item-name").html(`
        <div class=inline-itemimg-container>
                  <div class='inline-itemimg large'><img src='${imagepath}' style='margin-left:${-1*100*item.id}px'; > </div>
        </div>`+locale.name)

        $(".item-price").html("$"+item.price)
        $(".item-ability").html(ability)
        $(".item-build").html("")
        $(".item-parents").html("")
        if(item.children.length>0){
             let childs=""
             let priceLeft=item.price
            for(let c of item.children){
                childs+=`
                <div class=inline-itemimg-container>
                  <div class=inline-itemimg><img src='assets/img/items/items.png' style='margin-left:${-1*100*c}px'; > </div>
                </div> +`
                priceLeft-=items[c].price
            }
            $(".item-build").html("Recipe:"+childs+"<b class=price>$"+priceLeft+"</b>")
        }
        if(item.parents.length>0){
            let parents=""
           for(let c of item.parents){
            parents+=`
               <div class=inline-itemimg-container>
                 <div class=inline-itemimg><img src='assets/img/items/items.png' style='margin-left:${-1*100*c}px'; > </div>
               </div>`
           }
           $(".item-parents").html("Builds into:"+parents)
       }
    })
    $("#overlay").click(()=>{
        $("#overlay").hide()
        $("#item-tooltip").hide()
    })
	$("#item-tooltip").click(()=>{
        $("#overlay").hide()
        $("#item-tooltip").hide()
    })
})
