// オープニング画面を取得
const opening = document.getElementById("opening");

// オープニング中はスクロールを禁止
document.body.classList.add("opening-active");

// 4秒後にオープニングを終了する
setTimeout(() => {
  opening.classList.add("opening-finished");

  // スクロールを許可
  document.body.classList.remove("opening-active");
}, 4000);

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

const selectedPhoto  = photos[randomIndex];

//調整用 INDEXを変更し、関数のsettimeoutをコメントアウトすると調整可

// const randomIndex = 3;
// const selectedPhoto = photos[randomIndex];

// 選んだ写真を表示する
const openingImage = document.getElementById("openingImage");
openingImage.src = selectedPhoto.src;

const openingLogo = document.querySelector(".opening-logo");

openingLogo.classList.remove("top-left", "bottom-right", "center","top-right");
openingLogo.classList.add(selectedPhoto.position);

openingLogo.classList.remove("white-logo");

if (selectedPhoto.color === "white") {
  openingLogo.classList.add("white-logo");
}



const openingContent = document.querySelector(".opening-content");

function adjustOpeningContent() {
  const imageWidth = opening.clientWidth;
  const imageHeight = opening.clientHeight;

  const naturalWidth = openingImage.naturalWidth;
  const naturalHeight = openingImage.naturalHeight;

  const scale = Math.min(
    imageWidth / naturalWidth,
    imageHeight / naturalHeight
  );

  openingContent.style.width = `${naturalWidth * scale}px`;
  openingContent.style.height = `${naturalHeight * scale}px`;
}

// 画像の読み込みが終わったら位置とサイズを調整
// openingImage.addEventListener("load", adjustOpeningContent);

// 画面サイズが変わったときも再調整
// window.addEventListener("resize", adjustOpeningContent);

// すでに画像が読み込まれている場合にも実行
// if (openingImage.complete && openingImage.naturalWidth > 0) {
  // adjustOpeningContent();
}


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
