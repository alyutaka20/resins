// オープニング画面を取得
const opening = document.getElementById("opening");
// オープニング中はスクロールを禁止
document.body.classList.add("opening-active");

// 写真の候補
const photos = [
  {
    src: "img/IMG_5414.jpeg",
    position: "top-left"
  },
  {
    src: "img/IMG_5415.jpeg",
    position: "bottom-right"
  },
  {
    src: "img/IMG_5416.jpeg",
    position: "center",
    size: "small"
  },
  {
    src: "img/黄金色に輝く静かな海辺の夕景.png",
    position: "top-right",
    color: "white"
  }
];

// 写真をランダムに選ぶ
const randomIndex = Math.floor(Math.random() * photos.length);
const selectedPhoto = photos[randomIndex];

// 選んだ写真を表示する
const openingImage = document.getElementById("openingImage");
const openingLogo = document.querySelector(".opening-logo");
const openingContent = document.querySelector(".opening-content");

openingImage.src = selectedPhoto.src;

// 位置クラスをセット
openingLogo.classList.remove("top-left", "bottom-right", "center", "top-right");
openingLogo.classList.add(selectedPhoto.position);

// 白いロゴ対応
openingLogo.classList.remove("white-logo");
if (selectedPhoto.color === "white") {
  openingLogo.classList.add("white-logo");
}

// サイズ調整関数
function adjustOpeningContent() {
  const imageWidth = opening.clientWidth;
  const imageHeight = opening.clientHeight;
  const naturalWidth = openingImage.naturalWidth;
  const naturalHeight = openingImage.naturalHeight;

  // 画像がまだ読み込めていない場合は何もしない
  if (!naturalWidth || !naturalHeight) return;

  const scale = Math.min(
    imageWidth / naturalWidth,
    imageHeight / naturalHeight
  );

  openingContent.style.width = `${naturalWidth * scale}px`;
  openingContent.style.height = `${naturalHeight * scale}px`;

  // ★ここが重要：サイズ確定後に ready を付けてアニメーション開始
  if (!opening.classList.contains("ready")) {
    opening.classList.add("ready");

    // サイズ確定から4秒後にオープニング終了
    setTimeout(() => {
      opening.classList.add("opening-finished");
      document.body.classList.remove("opening-active");
    }, 4000);
  }
}

// 画像読み込み完了時に調整
openingImage.addEventListener("load", adjustOpeningContent);

// すでにキャッシュなどで読み込み済みの場合
if (openingImage.complete && openingImage.naturalWidth > 0) {
  adjustOpeningContent();
}

// 画面サイズ変更時も再調整（アドレスバーの出し入れ対策）
window.addEventListener("resize", () => {
  if (!opening.classList.contains("opening-finished")) {
    adjustOpeningContent();
  }
});
// =========================
// メイン画像カルーセル
// =========================

// 写真の一覧
const picture = [
  { src: "img/IMG_5428.jpeg" },
  { src: "img/IMG_5429.jpeg" },
  { src: "img/IMG_5430.jpeg" },
  { src: "img/IMG_5431.jpeg" },
  { src: "img/IMG_5432.jpeg" },
  { src: "img/IMG_5433.jpeg" },
  { src: "img/IMG_5434.jpeg" },
  { src: "img/IMG_5435.jpeg" },
  { src: "img/IMG_5436.jpeg" },
  { src: "img/IMG_5437.jpeg" },
];

// HTMLの画像要素を取得
const mainImage = document.getElementById("mainImage");

// 現在表示している写真の番号
let currentIndex = 0;

// 写真を切り替える関数
function changePicture() {

  // 現在の写真をふわっと消す
  mainImage.classList.add("fade-out");

  // 1秒後に次の写真へ切り替える
  setTimeout(() => {

    // 次の写真番号に進む
    currentIndex++;

    // 最後の写真まで進んだら最初に戻す
    if (currentIndex >= picture.length) {
      currentIndex = 0;
    }

    // 次の写真を設定する
    mainImage.src = picture[currentIndex].src;

    // 写真をふわっと表示する
    mainImage.classList.remove("fade-out");

  }, 1000);
}

// 3秒ごとに写真を切り替える
setInterval(changePicture, 4000);
