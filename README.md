# 🎬 4K LUXURY CINEMA (Cloudflare Pages)

> **Website:** [4kluxury.pages.dev](https://4kluxury.pages.dev)  
> **Kiến trúc:** Cloudflare Pages (Serverless Edge Worker `_worker.js` + Vanilla CSS/JS)  
> **Trải nghiệm:** Apple VisionOS Spatial UI • Dynamic Ambilight • Web Audio Synthesizer • Haptic Feedback  

---

## ✨ Điểm Nổi Bật & Tính Năng Đột Phá

### 1. 🌌 Spatial UI & Apple VisionOS Aesthetics
- **Liquid Glassmorphism:** Hệ thống kính mờ siêu mịn (`backdrop-filter: blur(28px) saturate(190%)`), viền phản quang quang học theo góc nhìn.
- **Floating Spatial Dock:** Thanh điều hướng nổi dạng viên thuốc (Pill Dock) với hiệu ứng trượt lò xo đàn hồi (Spring physics).
- **Holographic 4K Movie Cards:** Thẻ phim 3D với góc nghiêng phối cảnh động theo con trỏ chuột/chạm tay (`perspective: 1000px`), vệt sáng phản chiếu (specular sheen) chuyển động mượt mà.

### 2. 🌈 Dynamic Ambilight Aura Engine
- Tự động đồng bộ hào quang ánh sáng nền (Ambilight) dựa trên sắc độ màu phim đang xem hoặc chọn trong Coverflow.
- Chuyển tiếp mượt mà 60/120fps trên màn hình desktop và di động.

### 3. 🔊 Tactile Sound & Haptic Synthesizer
- Tích hợp bộ tổng hợp âm thanh Web Audio API không cần nạp file mp3 nặng:
  - **Mechanical Click:** Âm thanh switch cơ học giòn tan khi bấm nút.
  - **Bubble Pop:** Âm bọt nước mượt mà khi chọn chip thể loại/quốc gia.
  - **Pentatonic Chime:** Chuỗi âm ngũ âm tạo cảm giác dopamine khi chuyển phim / tập.
  - **Sub-Bass Boom:** Rung trầm rạp chiếu khi bắt đầu phát phim 4K.
  - **Vibration API:** Rung xúc giác haptic tự nhiên trên điện thoại di động (Android / iOS).

### 4. ⚡ Giữ Trọn 100% Logic & Nền Tảng Gốc
- **Cloudflare Edge Worker (`public/_worker.js`):** Xử lý API, proxy các nguồn phim (`phimapi.com`, `ophim1.com`, `phim.nguonc.com`), phân giải HLS stream.
- **Hệ thống Quản Trị Super Admin Panel:**
  - Quản lý License Key & Tạo key tự do
  - Quản lý thiết bị & Khóa máy theo key
  - Tường lửa chống DDoS & Rate Limiting
  - Bật / tắt chế độ Bảo trì & Truy cập trực tiếp (Free Access)
  - Xem nhật ký hoạt động qua Cyber Terminal
  - Cập nhật link tải app (APK, IPA, Windows EXE, TV)

---

## 🚀 Triển khai Cloudflare Pages

Dự án được tối ưu hóa sẵn cho Cloudflare Pages:

```bash
# Cài đặt dependencies (nếu cần build desktop hoặc tool)
npm install

# Kiểm tra cục bộ bằng Cloudflare Pages dev
npm run pages:dev

# Deploy trực tiếp lên Cloudflare Pages (dự án: 4kluxury -> 4kluxury.pages.dev)
npm run pages:deploy
```

Hoặc liên kết repo GitHub `nhut101107/4kluxury` trực tiếp trên Dashboard Cloudflare Pages:
- **Build command:** Để trống (hoặc `npm run pages:build` nếu có)
- **Build output directory:** `public`
- **Root directory:** `/`

---

## 🛡️ Bản quyền & Bảo Mật
- Không can thiệp hoặc thay đổi repo gốc `phim4k-cinema-build`.
- Mọi logic xác thực mã hóa, phiên làm việc D1 và chữ ký bảo mật được bảo lưu trọn vẹn.
