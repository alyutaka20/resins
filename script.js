// =========================
// オープニング（実機安定版）
// =========================
const opening = document.getElementById("opening");
const openingImage = document.getElementById("openingImage");
const openingLogo = document.getElementById("openingLogo");

// logo-wrapper をJSで作る
const logoWrapper = document.createElement("div");
logoWrapper.className = "logo-wrapper";
openingLogo.parentNode.insertBefore(logoWrapper, openingLogo);
logoWrapper.appendChild(openingLogo);

document.body.classList.add("opening-active");

const photos = [
  { src: "img/IMG_5414.jpeg", position: "top-left" },
  { src: "img/IMG_5415.jpeg", position: "bottom-right" },
  { src: "img/IMG_5416.jpeg", position: "center" },
  { src: "img/黄金色に輝く静かな海辺の夕景.png", position: "top-right", color: "white" }
];

const selected = photos[Math.floor(Math.random() * photos.length)];

// ロゴの位置クラスと色
openingLogo.classList.add(selected.position);
if (selected.color === "white") {
  openingLogo.classList.add("white-logo");
}

openingImage.src = selected.src;

/**
 * 写真が実際に描画されている領域を計算して
 * logo-wrapper をその上にピッタリ乗せる
 */
function placeLogoOverImage() {
  const vw = opening.clientWidth;
  const vh = opening.clientHeight;
  const nw = openingImage.naturalWidth;
  const nh = openingImage.naturalHeight;

  if (!nw || !nh) return false;

  // object-fit: contain の実際の表示サイズを計算
  const scale = Math.min(vw / nw, vh / nh);
  const displayW = nw * scale;
  const displayH = nh * scale;

  // 中央配置のオフセット
  const offsetX = (vw - displayW) / 2;
  const offsetY = (vh - displayH) / 2;

  // logo-wrapper を写真の表示領域に合わせる
  logoWrapper.style.position = "absolute";
  logoWrapper.style.left = offsetX + "px";
  logoWrapper.style.top = offsetY + "px";
  logoWrapper.style.width = displayW + "px";
  logoWrapper.style.height = displayH + "px";

  return true;
}

function startOpening() {
  const success = placeLogoOverImage();
  if (!success) return;

  // レイアウト確定後に表示開始
  requestAnimationFrame(() => {
    opening.classList.add("is-ready");

    // 4秒後にフェードアウト
    setTimeout(() => {
      opening.classList.add("opening-finished");
      document.body.classList.remove("opening-active");
    }, 4000);
  });
}

openingImage.addEventListener("load", startOpening);

// キャッシュ済み対応
if (openingImage.complete && openingImage.naturalWidth > 0) {
  startOpening();
}

// 画面回転・アドレスバー対策
let resizeTimer;
window.addEventListener("resize", () => {
  if (opening.classList.contains("opening-finished")) return;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    placeLogoOverImage();
  }, 60);
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
