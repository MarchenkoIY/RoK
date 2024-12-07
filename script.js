const navButton = document.getElementsByClassName('header')[0];

let playersData = [{"name":"cloud","power":"15570782","rank":2,"tpoints":"54900","hpoints":"550","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":14,"totalPoints":3,"tRank":1,"progress":0},{"name":"Rizz","power":"17954404","rank":2,"tpoints":"53400","hpoints":"746","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":4,"totalPoints":3,"tRank":2,"progress":0},{"name":"RYA 75","power":"19777323","rank":3,"tpoints":"51800","hpoints":"645","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":7,"totalPoints":4,"tRank":3,"progress":0},{"name":"ipltli","power":"13910923","rank":1,"tpoints":"50900","hpoints":"593","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":9,"totalPoints":3,"tRank":4,"progress":0},{"name":"VuCuMu","power":"16768292","rank":2,"tpoints":"50000","hpoints":"198","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":48,"totalPoints":2,"tRank":5,"progress":0},{"name":"Redding","power":"12304312","rank":1,"tpoints":"49600","hpoints":"398","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":21,"totalPoints":3,"tRank":6,"progress":0},{"name":"WoLong","power":"22202985","rank":3,"tpoints":"48800","hpoints":"1051","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":1,"totalPoints":4,"tRank":7,"progress":0},{"name":"MainVoron","power":"23362542","rank":"4","tpoints":"47800","hpoints":"814","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":2,"totalPoints":4,"tRank":8,"progress":0},{"name":"Chelseaq","power":"15936369","rank":2,"tpoints":"47500","hpoints":"742","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":5,"totalPoints":3,"tRank":9,"progress":0},{"name":"LIS1313","power":"13300059","rank":1,"tpoints":"46600","hpoints":"587","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":11,"totalPoints":2,"tRank":10,"progress":0},{"name":"kkirai","power":"14937339","rank":2,"tpoints":"46600","hpoints":"192","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":49,"totalPoints":2,"tRank":11,"progress":0},{"name":"T R Q Y A","power":"18041234","rank":2,"tpoints":"45900","hpoints":"670","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":6,"totalPoints":3,"tRank":12,"progress":0},{"name":"Theanh","power":"17110426","rank":2,"tpoints":"44600","hpoints":"562","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":13,"totalPoints":3,"tRank":13,"progress":0},{"name":"RØWDY","power":"17643309","rank":3,"tpoints":"44600","hpoints":"352","apoints":"1","prefix":true,"trubles":false,"new":false,"hRank":23,"totalPoints":4,"tRank":14,"progress":0},{"name":"Chuột","power":"20944308","rank":3,"tpoints":"44400","hpoints":"586","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":12,"totalPoints":4,"tRank":15,"progress":0},{"name":"TeDoK","power":"24448151","rank":3,"tpoints":"44000","hpoints":"468","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":18,"totalPoints":4,"tRank":16,"progress":0},{"name":"Arielle","power":"18134296","rank":"4","tpoints":"43600","hpoints":"339","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":25,"totalPoints":3,"tRank":17,"progress":0},{"name":"ToiR","power":"12608739","rank":1,"tpoints":"42200","hpoints":"210","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":44,"totalPoints":2,"tRank":18,"progress":0},{"name":"Xpedition","power":"14541469","rank":2,"tpoints":"41700","hpoints":"228","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":42,"totalPoints":2,"tRank":19,"progress":0},{"name":"Dạ Lan","power":"14910414","rank":2,"tpoints":"41600","hpoints":"182","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":51,"totalPoints":2,"tRank":20,"progress":0},{"name":"Kojjak","power":"20044812","rank":3,"tpoints":"41500","hpoints":"285","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":32,"totalPoints":4,"tRank":21,"progress":0},{"name":"J1uc","power":"27422779","rank":3,"tpoints":"41300","hpoints":"593","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":10,"totalPoints":4,"tRank":22,"progress":0},{"name":"cemek","power":"13358832","rank":1,"tpoints":"40800","hpoints":"317","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":29,"totalPoints":3,"tRank":23,"progress":0},{"name":"Nanaaa","power":"12878809","rank":1,"tpoints":"40400","hpoints":"244","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":36,"totalPoints":3,"tRank":24,"progress":0},{"name":"kelvin","power":"14680535","rank":2,"tpoints":"40300","hpoints":"484","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":17,"totalPoints":3,"tRank":25,"progress":0},{"name":"LapaFoxZZ","power":"35162324","rank":"5","tpoints":"40000","hpoints":"619","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":8,"totalPoints":4,"tRank":26,"progress":0},{"name":"MrDuck1","power":"9933398","rank":1,"tpoints":"40000","hpoints":"279","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":34,"totalPoints":2,"tRank":27,"progress":0},{"name":"Zombie","power":"11165300","rank":1,"tpoints":"39000","hpoints":"165","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":56,"totalPoints":2,"tRank":28,"progress":0},{"name":"MèoĐen","power":"20440479","rank":3,"tpoints":"38900","hpoints":"539","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":15,"totalPoints":4,"tRank":29,"progress":0},{"name":"Roman24","power":"14013153","rank":1,"tpoints":"38800","hpoints":"211","apoints":"1","prefix":true,"trubles":false,"new":false,"hRank":43,"totalPoints":3,"tRank":30,"progress":0},{"name":"toanna","power":"11061058","rank":1,"tpoints":"38500","hpoints":"421","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":20,"totalPoints":2,"tRank":31,"progress":0},{"name":"Chilapp","power":"14296508","rank":1,"tpoints":"38300","hpoints":"285","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":33,"totalPoints":2,"tRank":32,"progress":0},{"name":"DuduViana","power":"14035731","rank":1,"tpoints":"38100","hpoints":"203","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":46,"totalPoints":2,"tRank":33,"progress":0},{"name":"LeaD9","power":"19533326","rank":"4","tpoints":"36900","hpoints":"327","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":28,"totalPoints":4,"tRank":34,"progress":0},{"name":"Nkall","power":"11406123","rank":1,"tpoints":"36500","hpoints":"182","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":52,"totalPoints":1,"tRank":35,"progress":0},{"name":"Dix King","power":"9759004","rank":1,"tpoints":"35800","hpoints":"338","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":26,"totalPoints":3,"tRank":36,"progress":0},{"name":"3li7m","power":"16861948","rank":2,"tpoints":"34000","hpoints":"199","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":47,"totalPoints":2,"tRank":37,"progress":0},{"name":"Smirnoff13","power":"9611690","rank":1,"tpoints":"33300","hpoints":"311","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":30,"totalPoints":2,"tRank":38,"progress":0},{"name":"ObiJuan","power":"15407760","rank":2,"tpoints":"32500","hpoints":"230","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":41,"totalPoints":2,"tRank":39,"progress":0},{"name":"Urchin","power":"14212742","rank":1,"tpoints":"30800","hpoints":"129","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":62,"totalPoints":1,"tRank":41,"progress":0},{"name":"Goku金","power":"10316182","rank":1,"tpoints":"29600","hpoints":"150","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":60,"totalPoints":1,"tRank":42,"progress":0},{"name":"AZUMIR","power":"9579604","rank":1,"tpoints":"29400","hpoints":"75","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":75,"totalPoints":1,"tRank":43,"progress":0},{"name":"Max","power":"14912238","rank":2,"tpoints":"28900","hpoints":"293","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":31,"totalPoints":2,"tRank":44,"progress":0},{"name":"アライグマ","power":"84921168","rank":"4","tpoints":"28600","hpoints":"278","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":35,"totalPoints":3,"tRank":45,"progress":0},{"name":"JohnyQuik","power":"18639606","rank":2,"tpoints":"28600","hpoints":"163","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":57,"totalPoints":2,"tRank":46,"progress":0},{"name":"Gohun","power":"16823493","rank":1,"tpoints":"28100","hpoints":"231","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":39,"totalPoints":1,"tRank":47,"progress":0},{"name":"ROKOKS","power":"11005054","rank":1,"tpoints":"27500","hpoints":"187","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":50,"totalPoints":1,"tRank":48,"progress":0},{"name":"Táo","power":"14918480","rank":2,"tpoints":"27100","hpoints":"172","apoints":"1","prefix":true,"trubles":false,"new":false,"hRank":55,"totalPoints":2,"tRank":49,"progress":0},{"name":"乂Angel","power":"11551947","rank":1,"tpoints":"21800","hpoints":"232","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":38,"totalPoints":2,"tRank":52,"progress":0},{"name":"huu trang","power":"10020799","rank":1,"tpoints":"21000","hpoints":"104","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":67,"totalPoints":1,"tRank":53,"progress":0},{"name":"VilIondes","power":"14306304","rank":"4","tpoints":"20700","hpoints":"77","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":74,"totalPoints":1,"tRank":54,"progress":0},{"name":"sybog","power":"11165961","rank":1,"tpoints":"20600","hpoints":"98","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":69,"totalPoints":1,"tRank":55,"progress":0},{"name":"Koramur","power":"20412688","rank":"4","tpoints":"20500","hpoints":"58","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":78,"totalPoints":2,"tRank":56,"progress":0},{"name":"III Harambe","power":"9946044","rank":1,"tpoints":"19600","hpoints":"54","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":80,"totalPoints":0,"tRank":57,"progress":0},{"name":"namiii","power":"10592753","rank":1,"tpoints":"19500","hpoints":"44","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":83,"totalPoints":0,"tRank":58,"progress":0},{"name":"YORICK","power":"11132557","rank":1,"tpoints":"18700","hpoints":"39","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":88,"totalPoints":0,"tRank":59,"progress":0},{"name":"BELOV","power":"57957599","rank":3,"tpoints":"18600","hpoints":"769","apoints":"1","prefix":true,"trubles":false,"new":false,"hRank":3,"totalPoints":4,"tRank":60,"progress":0},{"name":"G O K U","power":"34378720","rank":2,"tpoints":"17400","hpoints":"239","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":37,"totalPoints":3,"tRank":61,"progress":0},{"name":"Rgusti69","power":"18334321","rank":1,"tpoints":"17200","hpoints":"89","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":72,"totalPoints":1,"tRank":62,"progress":0},{"name":"TaoTao","power":"28310506","rank":2,"tpoints":"16700","hpoints":"120","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":64,"totalPoints":2,"tRank":63,"progress":0},{"name":"DavidDWK2","power":"11912289","rank":1,"tpoints":"16500","hpoints":"344","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":24,"totalPoints":1,"tRank":64,"progress":0},{"name":"STORMS","power":"14028072","rank":1,"tpoints":"15600","hpoints":"154","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":59,"totalPoints":0,"tRank":66,"progress":0},{"name":"Mooxeyy","power":"70212521","rank":2,"tpoints":"15100","hpoints":"180","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":53,"totalPoints":2,"tRank":67,"progress":0},{"name":"JHUNIX","power":"15414725","rank":1,"tpoints":"14800","hpoints":"136","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":61,"totalPoints":1,"tRank":68,"progress":0},{"name":"Spring","power":"3309323","rank":1,"tpoints":"13600","hpoints":"457","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":19,"totalPoints":2,"tRank":69,"progress":0},{"name":"KapalLaud","power":"53124028","rank":2,"tpoints":"13300","hpoints":"231","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":40,"totalPoints":3,"tRank":70,"progress":0},{"name":"RAION","power":"29493054","rank":2,"tpoints":"12600","hpoints":"333","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":27,"totalPoints":3,"tRank":72,"progress":0},{"name":"荒野Dog","power":"19188812","rank":1,"tpoints":"11800","hpoints":"179","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":54,"totalPoints":1,"tRank":73,"progress":0},{"name":"Dancer","power":"undefined","rank":1,"tpoints":"11400","hpoints":"163","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":58,"totalPoints":1,"tRank":74,"progress":0},{"name":"Mijonis","power":"15290514","rank":1,"tpoints":"11100","hpoints":"39","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":89,"totalPoints":0,"tRank":75,"progress":0},{"name":"Amir 75","power":"28089329","rank":2,"tpoints":"10400","hpoints":"208","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":45,"totalPoints":2,"tRank":76,"progress":0},{"name":"HAFFO 523","power":"9448703","rank":1,"tpoints":"10000","hpoints":"41","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":86,"totalPoints":1,"tRank":77,"progress":0},{"name":"Vizn Huy","power":"16061519","rank":1,"tpoints":"9300","hpoints":"71","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":77,"totalPoints":0,"tRank":78,"progress":0},{"name":"Ha tuyen","power":"14475608","rank":1,"tpoints":"8700","hpoints":"114","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":65,"totalPoints":1,"tRank":79,"progress":0},{"name":"Bakulaw","power":"17396699","rank":1,"tpoints":"8700","hpoints":"111","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":66,"totalPoints":1,"tRank":80,"progress":0},{"name":"Goon","power":"40662632","rank":2,"tpoints":"8200","hpoints":"95","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":70,"totalPoints":2,"tRank":81,"progress":0},{"name":"Lillo","power":"35066101","rank":1,"tpoints":"6100","hpoints":"34","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":91,"totalPoints":1,"tRank":82,"progress":0},{"name":"Zurgan","power":"11331698","rank":1,"tpoints":"6100","hpoints":"26","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":95,"totalPoints":0,"tRank":83,"progress":0},{"name":"Sexfreaks","power":"9748629","rank":1,"tpoints":"5800","hpoints":"95","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":71,"totalPoints":0,"tRank":84,"progress":0},{"name":"Sarsi","power":"9527578","rank":1,"tpoints":"5700","hpoints":"42","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":85,"totalPoints":0,"tRank":85,"progress":0},{"name":"MADARA","power":"11291525","rank":1,"tpoints":"5300","hpoints":"514","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":16,"totalPoints":2,"tRank":86,"progress":0},{"name":"vuathongminh","power":"9315656","rank":1,"tpoints":"4600","hpoints":"53","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":81,"totalPoints":0,"tRank":87,"progress":0},{"name":"Yo","power":"19804377","rank":1,"tpoints":"4400","hpoints":"27","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":94,"totalPoints":1,"tRank":88,"progress":0},{"name":"Levi","power":"17014478","rank":1,"tpoints":"4000","hpoints":"16","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":97,"totalPoints":1,"tRank":90,"progress":0},{"name":"Kenos","power":"19936089","rank":"4","tpoints":"3700","hpoints":"17","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":96,"totalPoints":2,"tRank":91,"progress":0},{"name":"Atroian","power":"60045278","rank":2,"tpoints":"3200","hpoints":"84","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":73,"totalPoints":2,"tRank":92,"progress":0},{"name":"MiterSaw","power":"33763441","rank":1,"tpoints":"3200","hpoints":"33","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":92,"totalPoints":1,"tRank":93,"progress":0},{"name":"Khoa AG","power":"26652026","rank":1,"tpoints":"1900","hpoints":"74","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":76,"totalPoints":1,"tRank":95,"progress":0},{"name":"NaoBawel","power":"33430355","rank":2,"tpoints":"0","hpoints":"56","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":79,"totalPoints":2,"tRank":96,"progress":0},{"name":"RA bondplao","power":"9436842","rank":1,"tpoints":"0","hpoints":"32","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":93,"totalPoints":0,"tRank":99,"progress":0},{"name":"D Merkky","power":"14888480","rank":1,"tpoints":"0","hpoints":"15","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":98,"totalPoints":1,"tRank":100,"progress":0},{"name":"Firza","power":"12312378","rank":1,"tpoints":"0","hpoints":"14","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":100,"totalPoints":0,"tRank":101,"progress":0},{"name":"LISA","power":"59866742","rank":"4","tpoints":"0","hpoints":"0","apoints":"0","prefix":true,"trubles":false,"new":false,"hRank":103,"totalPoints":2,"tRank":103,"progress":0},{"name":"GUAZON II","power":"14519244","rank":1,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":104,"totalPoints":0,"tRank":104,"progress":0},{"name":"DEXAMENO","power":"12754070","rank":1,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"MATARAM","power":"14185795","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"Svarog","power":"22384559","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"Insanity","power":"16827034","rank":1,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"HNam0211","power":"11951676","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":true,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"ITACHI","power":"29029267","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"loqman123","power":"12361648","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"ЛогопеД","power":"19537611","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"dkhoiii","power":"10818296","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":true,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"Filin999","power":"13246054","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"YellowSub","power":"15290570","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"DrBeneda2","power":"14331927","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"sharks fang","power":"13260944","rank":1,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"sabela","power":"27271785","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"Figalio","power":"19985757","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":true,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"DeadSaxkas","power":"13857762","rank":1,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":false,"hRank":105,"totalPoints":0,"tRank":105,"progress":0},{"name":"Lily","power":"14243171","rank":2,"tpoints":"0","hpoints":"0","apoints":"0","prefix":false,"trubles":false,"new":true,"hRank":105,"totalPoints":0,"tRank":105,"progress":0}],
    legacyPlayersData = [];

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
            ${playersData.filter(element => element.rank == index).sort((a, b) => {
                if(+a.power > +b.power) {
                    return -1;
                }
                if(+a.power < +b.power) {
                    return 1;
                }
                return 0;
            }).map(element => `<div class = "playerItem${element.progress == '2' ? ' up' : element.progress == '1' ? ' down' : ''}" data-set = "${element.name}">
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

                if(legacyData == undefined) {
                    legacyData = {name: playerData.name, power: 0, hpoints: 0, prefix: playerData.prefix, trubles: playerData.trubles, tpoints: 0, apoints: 0}
                }

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
        let parsedList = playersList.map(elem => `<p>${elem.prefix ? '<sup>DE</sup>' : ''}${elem.name}</p>
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
                    return -1;
                }
                if(+a.hpoints < +b.hpoints) {
                    return 1;
                }
                return 0;
            });

            console.log(formsData)

            for(let i = 0; i < formsData.length; i++) {
                formsData[i].hRank = i + 1;

                formsData[i].totalPoints ? formsData[i].totalPoints : formsData[i].totalPoints = 0;

                if(i < 40) {
                    formsData[i].totalPoints += 1;
                }
            }

            formsData.sort((a, b) => {                
                if(+a.tpoints > +b.tpoints) {
                    return -1;
                }
                if(+a.tpoints < +b.tpoints) {
                    return 1;
                }
                return 0;
            });

            console.log(formsData)

            for(let i = 0; i < formsData.length; i++) {
                formsData[i].tRank = i + 1;
                if(i < 40) {
                    formsData[i].totalPoints += 1;
                }
                if(formsData[i].prefix) {
                    formsData[i].totalPoints += 1;
                }
                if(formsData[i].trubles) {
                    formsData[i].totalPoints -= 1;
                }
                if(+formsData[i].power > topPower) {
                    formsData[i].totalPoints += 1;
                }

                let aPoints = formsData[i].apoints == 'undefined' ? 0 : formsData[i].apoints;

                formsData[i].totalPoints += +aPoints;

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
        <input name="tpoints" placeholder = "tpoints" value = "${data.tpoints}">
        <input name="hpoints" placeholder = "hpoints" value = "${data.hpoints}">
        <input name="apoints" placeholder = "apoints" value = "${data.apoints}">
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
