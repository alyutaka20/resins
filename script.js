// =========================
// オープニング
// =========================
const opening = document.getElementById("opening");
const openingContent = document.getElementById("openingContent");
const openingImage = document.getElementById("openingImage");
const openingLogo = document.getElementById("openingLogo");

document.body.classList.add("opening-active");

const photos = [
  { src: "img/IMG_5414.jpeg", position: "top-left" },
  { src: "img/IMG_5415.jpeg", position: "bottom-right" },
  { src: "img/IMG_5416.jpeg", position: "center" },
  { src: "img/黄金色に輝く静かな海辺の夕景.png", position: "top-right", color: "white" }
];

const selected = photos[Math.floor(Math.random() * photos.length)];

// ロゴ位置・色をセット
openingLogo.classList.add(selected.position);
if (selected.color === "white") {
  openingLogo.classList.add("white-logo");
}

// 画像をセット
openingImage.src = selected.src;

function adjustOpening() {
  const vw = opening.clientWidth;
  const vh = opening.clientHeight;
  const nw = openingImage.naturalWidth;
  const nh = openingImage.naturalHeight;

  if (!nw || !nh) return;

  const scale = Math.min(vw / nw, vh / nh);

  openingContent.style.width = `${nw * scale}px`;
  openingContent.style.height = `${nh * scale}px`;

  // サイズ確定後に表示開始
  if (!opening.classList.contains("is-ready")) {
    // 1フレーム待ってから表示（レイアウト確定を確実にする）
    requestAnimationFrame(() => {
      opening.classList.add("is-ready");

      // 4秒後にフェードアウト
      setTimeout(() => {
        opening.classList.add("opening-finished");
        document.body.classList.remove("opening-active");
      }, 4000);
    });
  }
}

openingImage.addEventListener("load", adjustOpening);

// キャッシュ済みの場合
if (openingImage.complete && openingImage.naturalWidth > 0) {
  adjustOpening();
}

// リサイズ対応（アドレスバー対策）
let resizeTimer;
window.addEventListener("resize", () => {
  if (opening.classList.contains("opening-finished")) return;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(adjustOpening, 50);
});

// =========================
// メイン画像カルーセル
// =========================
const pictures = [
  "img/IMG_5428.jpeg",
  "img/IMG_5429.jpeg",
  "img/IMG_5430.jpeg",
  "img/IMG_5431.jpeg",
  "img/IMG_5432.jpeg",
  "img/IMG_5433.jpeg",
  "img/IMG_5434.jpeg",
  "img/IMG_5435.jpeg",
  "img/IMG_5436.jpeg",
  "img/IMG_5437.jpeg"
];

const mainImage = document.getElementById("mainImage");
let currentIndex = 0;

function changePicture() {
  mainImage.classList.add("fade-out");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % pictures.length;
    mainImage.src = pictures[currentIndex];
    mainImage.classList.remove("fade-out");
  }, 1000);
}

setInterval(changePicture, 4000);
