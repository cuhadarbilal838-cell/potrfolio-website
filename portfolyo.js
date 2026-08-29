
// --- TEMA DEĞİŞTİRME ---
function temaDegistir(mod) {
    if (mod == 'acik') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } 
    else if (mod == 'kapali') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'aliceblue';
    }

    else if (mod == 'mavi' ) 
    {
      document.body.style.backgroundColor='#39c0ff'
    document.body.style.color = 'aliceblue'
    } 

}



// --- LİSTE VE DÖNGÜ MANTIĞI ---
const diller = ["HTML", "CSS", "C#" ,"Python", "JavaScript", "C++",];
let sira = 0;

function dilDegistir() {
    // Yazılacak yeri seçiyoruz
    const alan = document.getElementById("dilGosterici");

    // Ekrana yazdırıyoruz
    alan.innerHTML = " <span style='font-size: 24px;'>" + diller[sira] + "</span>";

    // Sayacı artırıyoruz
    sira++;

    // Başa sarma kontrolü (C#'taki if mantığı)
    if (sira === diller.length) {
        sira = 0;
    }
}
