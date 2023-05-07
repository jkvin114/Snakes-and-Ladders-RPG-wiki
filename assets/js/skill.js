(async function initskill(){
    await SkillParser.init("https://raw.githubusercontent.com/jkvin114/snakes-and-ladders-RPG/master/public/res/locale/game/",
    "https://raw.githubusercontent.com/jkvin114/snakes-and-ladders-RPG/master/res/skill.json","en")
    SkillParser.MODE="novalue"
    SkillParser.IconPath='assets/img/character/skillinfo/'
    SkillParser.SkillImagePath='assets/img/character/skills/'
    const skillwindows=$(".skillinfo").toArray()
    for(let i=0;i<skillwindows.length/3;++i){
        for(let j=0;j<3;++j){
            $(skillwindows[i*3+j]).html("")
            let desc=SkillParser.parseSkill(i, j)
            $(skillwindows[i*3+j]).append(`<div class=skillinfo>${desc}</div><hr>`)
        }
    }
})()