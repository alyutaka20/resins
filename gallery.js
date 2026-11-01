// =========================
// ライトボックスの準備
// =========================

// ギャラリー内のすべての写真を取得
const galleryImages = document.querySelectorAll(".gallery-grid img");

// ライトボックス全体を取得
const lightbox = document.getElementById("lightbox");

// 拡大表示する画像を取得
const lightboxImage = document.getElementById("lightboxImage");

// 閉じるボタンを取得
const lightboxClose = document.getElementById("lightboxClose");

// =========================
// 写真をクリックしたときの処理
// =========================

// 取得した写真すべてにクリックイベントを設定
galleryImages.forEach((image) => {

  image.addEventListener("click", () => {

    // クリックした写真の画像URLを取得
    lightboxImage.src = image.src;

    // クリックした写真の説明文を取得
    lightboxImage.alt = image.alt;

    // ライトボックスにactiveクラスを追加
    lightbox.classList.add("active");

  });

});

// =========================
// ライトボックスを閉じる処理
// =========================

// ×ボタンをクリックしたとき
lightboxClose.addEventListener("click", () => {

  // activeクラスを削除して非表示にする
  lightbox.classList.remove("active");

});

// =========================
// 背景をクリックして閉じる処理
// =========================

lightbox.addEventListener("click", (event) => {

  // クリックした場所が背景そのものか確認
  if (event.target === lightbox) {

    // ライトボックスを閉じる
    lightbox.classList.remove("active");

  }

});