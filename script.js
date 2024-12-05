const navButton = document.getElementsByClassName('header')[0];

let playersData = [{"name":"Kenos","power":"19936089","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":1,"totalPoints":4,"tRank":1,"progress":0},{"name":"Koramur","power":"20412187","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":2,"totalPoints":4,"tRank":2,"progress":0},{"name":"xxxLISAxxx","power":"59612742","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false,"hRank":3,"totalPoints":3,"tRank":3,"progress":0},{"name":"LapaFoxZZ","power":"35139711","rank":"5","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":4,"totalPoints":4,"tRank":4,"progress":0},{"name":"VilIondes","power":"14266631","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":5,"totalPoints":4,"tRank":5,"progress":0},{"name":"Arielle","power":"18107896","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":6,"totalPoints":4,"tRank":6,"progress":0},{"name":"LeaD9","power":"18371654","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":7,"totalPoints":4,"tRank":7,"progress":0},{"name":"BELOV","power":"14314482","rank":3,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":8,"totalPoints":4,"tRank":8,"progress":0},{"name":"ВELOV","power":"57862289","rank":2,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":true,"hRank":9,"totalPoints":4,"tRank":9,"progress":0},{"name":"RØWDY","power":"17449512","rank":2,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":true,"hRank":10,"totalPoints":4,"tRank":10,"progress":0},{"name":"KapalLaud","power":"53069398","rank":2,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":true,"hRank":11,"totalPoints":4,"tRank":11,"progress":0},{"name":"Mooxeyy","power":"70021681","rank":2,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":true,"hRank":12,"totalPoints":3,"tRank":12,"progress":0},{"name":"WoLong","power":"21894482","rank":3,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":13,"totalPoints":4,"tRank":13,"progress":0},{"name":"toanna","power":"11049706","rank":2,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false,"hRank":14,"totalPoints":2,"tRank":14,"progress":0},{"name":"LIS1313","power":"12828837","rank":1,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false,"hRank":15,"totalPoints":2,"tRank":15,"progress":0},{"name":"Chelseaq","power":"15562025","rank":1,"tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":16,"totalPoints":4,"tRank":16,"progress":0},{"name":"MainVoron","power":"23229308","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":17,"totalPoints":4,"tRank":17,"progress":0},{"name":"アライグマ","power":"16954948","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false,"hRank":18,"totalPoints":4,"tRank":18,"progress":2}],
    legacyPlayersData = [{"name":"MainVoron","power":"22000000","rank":"4","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false, "progress":2},{"name":"LapaFox","power":"32000000","rank":"5","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":true,"trubles":false,"new":false},{"name":"kenos","power":"19000000","rank":"3","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false},{"name":"アライグマ","power":"20000000","rank":"1","tpoints":"undefined","hpoints":"undefined","apoints":"undefined","prefix":false,"trubles":false,"new":false}];

const parseCurrentURL = () => {
    const urlParts = {};

    [urlParts.page, urlParts.id] = location.hash.slice(1).split('/');

    return urlParts;
};

class Ranks {
    static render = () =>
        `<div class = "ranksZone">
        ${this.parseData(5)}
        ${this.parseData(4)}
        ${this.parseData(3)}
        ${this.parseData(2)}
        ${this.parseData(1)}
        </div>`;
    static parseData(index) { 
        return `
        <div class = "rankHeader R${index}">
            <p class = "hRanks">Rank ${index}${index < 5 ? index == 4 ? `<span>${playersData.filter(element => element.rank == index).length}/8</span>` : `<span>${playersData.filter(element => element.rank == index).length}</span>` : ''}</p>
        <div class = "rankContainer">
            ${playersData.filter(element => element.rank == index).map(element => `<div class = "playerItem${element.progress == '2' ? ' up' : element.progress == '1' ? ' down' : ''}" data-set = "${element.name}">
                    <p>${element.prefix ? `<sup>DE</sup>` : ''}${element.name}</p>
                    <p>Power: ${element.power}</p>
            </div>`).join('')}
            </div>
        </div>`};
    static afterRender = () => {
        const ranks = document.getElementsByClassName('ranksZone')[0];

        ranks.onclick = e => {
            let target = e.target.closest('.hRanks');
            let targetModal = e.target.closest('.playerItem');

            if(target && target.className == 'hRanks' && !target.parentElement.classList.contains('R5') && !target.parentElement.classList.contains('R4')) {
                target.parentElement.classList.toggle('fullList')
            }
            if(targetModal && targetModal.classList.contains('playerItem')) {
                let playerData = playersData.filter(element => element.name == targetModal.dataset.set)[0],
                    legacyData = legacyPlayersData.filter(element => element.name == targetModal.dataset.set)[0];

                const container = document.getElementsByClassName('container')[0];
                container.insertAdjacentHTML('afterend', `<div class = "modalWin">
                <div class = "info">
                <p class = "name">${playerData.prefix ? '<sup>DE</sup>' : ''}${playerData.name}</p>
                <div class = "dynamic">
                    <p></p><p>Last Week</p><p>Previous Week</p>
                    <p>Power</p><p>${playerData.power}</p><p>${legacyData.power}</p>
                    <p>Help points</p><p>${playerData.hpoints === "undefined" ? '0' : playerData.hpoints}</p><p>${legacyData.hpoints === "undefined" ? '0' : legacyData.hpoints}</p>
                    <p>Techno points</p><p>${playerData.tpoints === "undefined" ? '0' : playerData.tpoints}</p><p>${legacyData.tpoints === "undefined" ? '0' : legacyData.tpoints}</p>
                    <p>Action points</p><p>${playerData.apoints === "undefined" ? '0' : playerData.apoints}</p><p>${legacyData.apoints === "undefined" ? '0' : legacyData.apoints}</p>
                    <p>Prefix</p><p class = "pref${playerData.prefix}"></p><p class = "pref${legacyData.prefix}"></p>
                    <p>Punishment</p><p class = "trub${playerData.trubles}"></p><p class = "trub${legacyData.trubles}"></p>
                </div>
                </div>
                </div>`); 

                const modalWin = document.getElementsByClassName('modalWin')[0];

                function removeModalWin(e) {
                        modalWin.remove();
                        document.onclick = '';
                }

                modalWin.onclick = removeModalWin;
            }
        };
    }
}

class LastWeek {
    static render = (isLast = playersData) => {
        let playersList = isLast.filter(elem => +elem.rank < 4);
        let parsedList = playersList.map(elem => `<p>${elem.name}</p>
            <p>${elem.power}</p>
            <p>${elem.hpoints === "undefined" ? `0` : elem.hpoints}</p>
            <p>${elem.tpoints === "undefined" ? `0` : elem.tpoints}</p>
            <p>${elem.apoints === "undefined" ? `0` : elem.apoints}</p>
            <p class = "pref${elem.prefix}"></p><p class = "trubles${elem.trubles}"></p>
            <p>R${elem.rank}</p>`);
        return `<div class = "totalWeek">
        <p>Name</p>
        <p>Power</p>
        <p>Help points</p>
        <p>Techno points</p>
        <p>Ativity points</p>
        <p>Prefix</p>
        <p>Punishment</p>
        <p>Rank</p>
        ${parsedList.join('')}
    </div>`};
    static afterRender = () => true
}

class PreviousWeek {
    static render = () => LastWeek.render(legacyPlayersData)
    static afterRender = () => true
}

class Admin {
    static render = () => `
    ${this.renderData()}
    <button class = "ADD">ADD</button>
    <button class = "COPY">COPY</button>
    `;
    static afterRender = () => {
        let button = document.getElementsByClassName('ADD')[0],
            copyButton = document.getElementsByClassName('COPY')[0],
            topPower = prompt('Top 150 power'),
            lowPower = prompt('Top 250 power');

        button.addEventListener('click', () => {
            let forms = document.getElementsByTagName('form');
            forms[forms.length - 1].insertAdjacentHTML("afterend", this.parseData(''));
        });

        copyButton.addEventListener('click', () => {
            let forms = document.getElementsByTagName('form'),
                formsData = [];

            for(let i = 0; i < forms.length; i++) {
                let itemData = {};
                if(forms[i][0].value) {
                    for (let k = 0; k < forms[0].length; k++) {

                        if(k > 5) {
                            itemData[forms[i][k].name] = forms[i][k].checked;
                        } else {
                            itemData[forms[i][k].name] = forms[i][k].value;
                        }
                    }
                }
                formsData.push(itemData);
            }

            formsData.sort((a, b) => {
                if(+a.hpoints > +b.hpoints) {
                    return 1;
                }
                if(+a.hpoints < +b.hpoints) {
                    return -1;
                }
                return 0;
            });

            for(let i = 0; i < formsData.length; i++) {
                formsData[i].hRank = i + 1;

                formsData[i].totalPoints ? formsData[i].totalPoints : formsData[i].totalPoints = 0;

                if(i < 40) {
                    formsData[i].totalPoints++;
                }
            }

            formsData.sort((a, b) => {
                if(+a.tpoints > +b.tpoints) {
                    return 1;
                }
                if(+a.tpoints < +b.tpoints) {
                    return -1;
                }
                return 0;
            });

            for(let i = 0; i < formsData.length; i++) {
                formsData[i].tRank = i + 1;
                if(i < 40) {
                    formsData[i].totalPoints++;
                }
                if(formsData[i].prefix) {
                    formsData[i].totalPoints++;
                }
                if(formsData[i].trubles) {
                    formsData[i].totalPoints--;
                }
                if(+formsData[i].power > topPower) {
                    formsData[i].totalPoints++;
                }

                let aPoints = formsData[i].apoints == 'undefined' ? 0 : formsData[i].apoints;

                formsData[i].totalPoints += aPoints;

                if(formsData[i].rank != 5 && formsData[i].rank != 4 && !formsData[i].new) {
                    if (formsData[i].totalPoints > 3) {
                        formsData[i].rank = 3;
                    } else if (formsData[i].totalPoints < 2 || +formsData[i].power < lowPower) {
                        formsData[i].rank = 1;
                    } else {
                        formsData[i].rank = 2;
                    }
                }
                if(formsData[i].rank != 5 && formsData[i].rank != 4 && formsData[i].new) {
                    formsData[i].rank = 2;
                }

                if(legacyPlayersData.find(elem => elem.name == formsData[i].name) != undefined) {
                    if(legacyPlayersData.find(elem => elem.name == formsData[i].name).rank > formsData[i].rank) {
                        formsData[i].progress = 1;
                    } else if (legacyPlayersData.find(elem => elem.name == formsData[i].name).rank < formsData[i].rank) {
                        formsData[i].progress = 2;
                    } else {
                        formsData[i].progress = 0;
                    }
                } else {
                        formsData[i].progress = 0;
                }
            }
            navigator.clipboard.writeText(JSON.stringify(formsData));
        });
    };
    static parseData(data) {
        return `<form class = "statData">
        <input name="name" placeholder = "name" value = "${data.name}">
        <input name="power" placeholder = "power" value = "${data.power}">
        <input name="rank" placeholder = "power" value = "${data.rank}">
        <input name="tpoints" placeholder = "tpoints" value = "${data.techno}">
        <input name="hpoints" placeholder = "hpoints" value = "${data.help}">
        <input name="apoints" placeholder = "apoints" value = "${data.active}">
        <input type="checkbox" name="prefix" ${data.prefix ? 'checked' : ''}>
        <input type="checkbox" name="trubles" value = ${data.trubles ? 'checked' : ''}>
        <input type="checkbox" name="new" value = ${data.new ? 'checked' : ''}>
        </form>`
    };
    static renderData() {
        return playersData.map(element => this.parseData(element)).join('');
    }
}

class Error404 {
    static render = () => '404'
}

const Routes = {
    'ranks': Ranks,
    'lastWeek': LastWeek,
    'previousWeek': PreviousWeek,
    'admPnlFEd': Admin,
};

const router = async() => {
    const container = document.getElementsByClassName('content')[0];    

    const urlParts = parseCurrentURL(),
        pagePath = `${urlParts.page || ''}${urlParts.id ? '/:id' : ''}`,
        Page = Routes[pagePath] ? Routes[pagePath] : Error404;

    const workZone = document.getElementsByClassName('workZone')[0];

    workZone.innerHTML = await Page.render();
    Page.afterRender();
};

window.addEventListener('load', router);

window.onhashchange = router;

navButton.onclick = e => {
    let target = e.target;

    if (target.tagName == 'LI') {
        location.hash = target.classList[0];
        document.getElementsByClassName('active')[0].classList.toggle('active');
        target.classList.toggle('active');
    }
}