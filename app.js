let taps = 0;
let count = 0;
var main;
const messages = ['Hi, sir.'
    , 'I am the space bar.'
    , 'I\'ve heard that you want a game.', 'Well then, bad luck, this is not a game.'
    , 'It\'s just an annoying AI that wants to annoy you.'
    , 'Or is it...???', 'Maybe we should stop talking about these mysterious stuff.'
    , 'Lets get on with the game.', '']
const talking = [
    '.'
    , '..'
    , '...'
    , '(^_^)'
    , '(-_-)'
    , '(-_-)z'
    , '(-_-)zz'
    , '(-_-)zzz'
    , '(\'_\')'
    , '(\'_\')-why are you still here?'
    , '(\'_\')-oh, what? You\'re here for a game?'
    , '(\'_\')-...'
    , '(\'_\')-okay, im gonna leave.'
    , '_(\'_\')'
    , '__(\'_\')'
    , '___(\'_\')'
    , '____(\'_\')__|'
    , '_____(\'_\')_|'
    , '______(\'_\')|'
    , '______(\'_\')| -clunk- '
    , '_____(-_-)| -ow.'
    , '_____(-_-)| -hurt.'
    , '______(\'_\')|'
    , '_____(\'_\')_|'
    , '____(\'_\')__|'
    , '___(\'_\')'
    , '__(\'_\')'
    , '_(\'_\')'
    , '(\'_\')-this is getting boring.'
    , '(\'_\')-lets get on with something.'
    , '(\'_\')-like a new upgrade?'
    , ''
    , ''
    , '...'
    , 'Like what?'
    , 'Why are you still here?'
    , 'Go on! Press 1!'
    , 'You just like annoying me don\'t you?'
    , 'Uggh.'
    , ''
    , 'WHAT? you didn\' think this was gonna end?'
    , 'You\'re stupid or something.'
    , 'Fine. Easter egg, here you go.'
    , 'undefined.'
]
const cursor = ['__<-'
    , '_<-'
    , 'X<-'
]
var speed = 1;
var cost = 150;
var floor = 50;
let cursorCount = 0;
let cursorMove = 0;
let isCursor = 0;
let speedIsBuy = 0;
let speedCost = 250;
let mapCost = 500;
let maps = 0;
let hpBase = 100;
let dmgBaseS = 1;
let dmgBaseB = 10;
let battle = 0;
let enemyHp = 0;
let hp = hpBase;
const names = [
    'Wolf'
    , 'Python'
    , 'Tiger'
    , 'Hyena'
    , 'Magical Wizard'
    , 'Elder Wand'
    , 'Starlight Shadow'
    , 'Sun\'s Curse'
    , 'Dimensional crack'
    , 'Spirit of the Void'
    , '\<NULL\>'
    , 'The Horror'
]
let add = 0;
let name = ''
let hpCost = 100;
let dmgCost = 150;
let enemyBase = 0;
let cashM = 1;
let cashMcost = 500;
let yesMap = 0;
let enemyDmgM = 0;
let enemyDmgB = 0;
document.addEventListener('keyup', event => {
    main = document.getElementById('show')
    cursorBuy = document.getElementById('buyCursor')
    speedBuy = document.getElementById('buyTap')
    mapBuy = document.getElementById('buyMap')
    map1 = document.getElementById('Map1')
    map2 = document.getElementById('Map2')
    map3 = document.getElementById('Map3')
    batlle = document.getElementById('fight')
    buyHp = document.getElementById('BuyHp')
    buyDmg = document.getElementById('BuyDmg')
    buyMult = document.getElementById('BuyCash')
    var a = event.keyCode;
    console.log(a)
    if (a == 187) {
        count += 5000000000000001;
    }
    if (a == 49) {
        if (count >= cost) {
            if (isCursor == 0) {
                cursorCount = 4;
            }
            count -= cost;
            cost = floor;
            isCursor = 1;
            cursorCount++;
            floor += cursorCount * 5;
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
            cursorBuy.innerHTML = `Buy cursor for ${cost}$ - press 1 - Cursors: ` + (cursorCount - 4) + ', earning ' + cursorCount + '$ per 3 taps.'
        }
    }
    if (a == 50) {
        if (count >= speedCost) {
            count -= speedCost;
            speedIsBuy = 1;
            speed += speed;
            speedCost += speed * 50;
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
            speedBuy.innerHTML = `Buy $ per tap for ${speedCost}$ - press 2 - Upgrades: ` + (speed - 1) + '.'
        }
    }
    if (a == 53){
        if(count >= hpCost){
            count-=hpCost;
            hpCost += hpBase;
            hpBase += Math.floor(hpBase / 5)
            buyDmg.innerHTML = '-Press 4- Buy more dmg for ' + dmgCost + '$, Max dmg:' + dmgBaseB + ', Least dmg:' + dmgBaseS + '.'
            buyHp.innerHTML = '-Press 5- Buy more hp for ' + hpCost + '$, your hp is ' + hpBase + '.'
            buyMult.innerHTML = '-Press 6- Buy battling mult for ' + cashMcost + '$, your current mult is ' + cashM + '.'
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
        }
    }
    if (a == 52){
        if(count >= dmgCost){
            count-=dmgCost
            dmgCost += dmgBaseB * 8
            dmgCost = Math.floor(dmgCost)
            dmgBaseB += Math.ceil(dmgBaseB*4)/10
            dmgBaseS += Math.ceil(dmgBaseS*4)/10
            dmgBaseB = Math.floor(dmgBaseB * 10)/10
            dmgBaseS = Math.floor(dmgBaseS * 10)/10
            buyDmg.innerHTML = '-Press 4- Buy more dmg for ' + dmgCost + '$, Max dmg:' + dmgBaseB + ', Least dmg:' + dmgBaseS + '.'
            buyHp.innerHTML = '-Press 5- Buy more hp for ' + hpCost + '$, your hp is ' + hpBase + '.'
            buyMult.innerHTML = '-Press 6- Buy battling mult for ' + cashMcost + '$, your current mult is ' + cashM + '.'
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
        }
    }
    if (a == 54){
        if(count >= cashMcost){
            count -= cashMcost;
            cashMcost += Math.floor(cashM * 400);
            cashM += Math.floor(cashM)/10
            cashM = Math.floor(cashM*10)/10
            buyDmg.innerHTML = '-Press 4- Buy more dmg for ' + dmgCost + '$, Max dmg:' + dmgBaseB + ', Least dmg:' + dmgBaseS + '.'
            buyHp.innerHTML = '-Press 5- Buy more hp for ' + hpCost + '$, your hp is ' + hpBase + '.'
            buyMult.innerHTML = '-Press 6- Buy battling mult for ' + cashMcost + '$, your current mult is ' + cashM + '.'
            main.innerHTML = `${count}$ ` + cursor[cursorMove]
        }
    }
    if (a == 81) {
        if (maps >= 1 && battle == 0) {
            battle = 1;
            name = names[Math.floor(Math.random() * 4)]
            enemyBase = Math.floor(Math.random() * 1250) + 875
            enemyHp = enemyBase
            hp = hpBase;
            enemyDmgM = 10;
            enemyDmgB = 25
            fight.innerHTML = 'You - HP:' + hp + '_' + name + ' - HP:' + enemyHp;
        }
    }
    if (a == 87) {
        if (maps >= 2 && battle == 0) {
            battle = 2;
            name = names[Math.floor(Math.random() * 4) + 4]
            enemyBase = Math.floor(Math.random() * 11665000) + 7750000
            enemyHp = enemyBase
            hp = hpBase;
            enemyDmgM = 280;
            enemyDmgB = 820;
            fight.innerHTML = 'You - HP:' + hp + '_' + name + ' - HP:' + enemyHp;
        }
    }
    if (a == 69) {
        if (maps >= 3 && battle == 0) {
            battle = 3;
            name = names[Math.floor(Math.random() * 4) + 8]
            enemyBase = Math.floor(Math.random() * 25000000000) + 90000000000
            enemyHp = enemyBase
            hp = hpBase;
            enemyDmgM = 7800000;
            enemyDmgB = 69000000;
            fight.innerHTML = 'You - HP:' + hp + '_' + name + ' - HP:' + enemyHp;
        }
    }
    if (a == 51) {
        if (count >= mapCost) {
            count -= mapCost;
            maps += 1;
            mapCost = mapCost * mapCost * 4
            mapBuy.innerHTML = `Buy map for ${mapCost}$ - press 3.`
            if (maps == 1) {
                map1.innerHTML = 'Press q to journey to the wild plains!'
                yesMap = 1;
            }
            else {
                if (maps == 2) {
                    map2.innerHTML = 'Press w to journey to the magical realm!'
                }
                else {
                    map3.innerHTML = 'Press e to journey to the alternate dimension!'
                }
            }
        }
    }
    if (event.code === 'Space') {
        count = Math.round(count)
        if (yesMap >= 1) {
            buyDmg.innerHTML = '-Press 4- Buy more dmg for ' + dmgCost + '$, Max dmg:' + dmgBaseB + ', Least dmg:' + dmgBaseS + '.'
            buyHp.innerHTML = '-Press 5- Buy more hp for ' + hpCost + '$, your hp is ' + hpBase + '.'
            buyMult.innerHTML = '-Press 6- Buy battling mult for ' + cashMcost + '$, your current mult is ' + cashM + '.'
        }
        if (battle >= 1) {
            enemyHp -= Math.floor(Math.random() * dmgBaseB - (dmgBaseS - 1) + 1) + Math.floor(dmgBaseS)
            hp -= Math.floor(Math.random() * enemyDmgB - (enemyDmgM - 1)) + Math.floor(enemyDmgM - 1)
            fight.innerHTML = 'You - HP:' + hp + '_' + name + ' - HP:' + enemyHp;
            if (enemyHp <= 0) {
                battle = 0;
                if (battle == 2) {
                    add = Math.floor(Math.floor(Math.random() * 7500) + 5000 * cashM)
                }
                else {
                    if (battle == 3){
                        add = Math.floor(Math.floor(Math.random * 80000000000) + 120000000000)
                    }
                    else {
                        add = Math.floor(Math.floor(Math.random() * 400) + 600 * cashM)
                    }
                }
                fight.innerHTML = 'Win : +' + add + '$, Extra cash gain based on difficulty: ' + Math.floor(enemyBase*cashM) + '$.'
                count += add + enemyBase * cashM;
                main.innerHTML = `${count}$ ` + cursor[cursorMove]
            }
            if (hp <= 0) {
                battle = 0;
                fight.innerHTML = 'K.O.  Cash gain based on dmg dealt: ' + Math.floor(Math.floor(enemyBase - enemyHp)* cashM) + '$'
                count += Math.floor(enemyBase - enemyHp) * cashM
                main.innerHTML = `${count}$ ` + cursor[cursorMove]
            }
        }
        else {
            if (messages[taps] != '') {
                main.innerHTML = messages[taps]
                taps++;
            }
            else {
                count += speed;
                if (count >= mapCost) {
                    mapBuy.innerHTML = `Buy map for ${mapCost}$ - press 3.`
                }
                if (count >= cost || isCursor == 1) {
                    cursorBuy.innerHTML = `Buy cursor for ${cost}$ - press 1 - Cursors: ` + (cursorCount - 4) + ', earning ' + cursorCount + '$ per 3 taps.'
                }
                if (count >= speedCost || speedIsBuy == 1) {
                    speedBuy.innerHTML = `Buy $ per tap for ${speedCost}$ - press 2 - Upgrades: ` + (speed - 1) + '.'
                }
                if (isCursor == 1) {
                    main.innerHTML = `${count}$ ` + cursor[cursorMove]
                    cursorMove++;
                    if (cursorMove == 3) {
                        cursorMove = 0;
                        count += cursorCount;
                    }
                }
                else {
                    main.innerHTML = `${count}$ ` + talking[Math.floor(count / 5)]
                    if (talking[Math.floor(count / 5)] == 'undefined.') {
                        count = 500;
                    }
                }
            }
        }
    }
});