/**
 * 4K LUXURY CINEMA PRO - SPATIAL CORE APPLICATION ENGINE
 * Inspired by Apple VisionOS, Philips Ambilight, and Cyber-Luxury Aesthetics.
 * Integrates Real Edge APIs, Cloudflare Pages backend, D1 database and Super Admin controls.
 */

// =====================================================================
// 1. DATA REPOSITORY: 4K MASTER MOVIES, SERIES & LIVE INTERACTION
// =====================================================================
const APP_DATA = {
  spotlights: [
    {
      id: "dune-2",
      slug: "dune-hanh-tinh-cat-phan-hai",
      title: "DUNE: HÀNH TINH CÁT 2",
      originalTitle: "Dune: Part Two (2024)",
      rating: 8.8,
      year: 2024,
      duration: "2 giờ 46 phút",
      country: "us",
      countryName: "Âu Mỹ",
      age: "T18",
      format: "single",
      status: "BẢN ĐẸP 4K HDR • VIETSUB + THUYẾT MINH VIP",
      genres: ["Khoa Học Viễn Tưởng", "Phiêu Lưu Sử Thi", "Hành Động Bom Tấn"],
      genreKeys: ["sci-fi", "action"],
      synopsis: "Paul Atreides liên minh cùng Chani và tộc người Fremen trong hành trình báo thù những kẻ đã tàn sát gia tộc mình. Giữa tình yêu duy nhất và số mệnh vũ trụ, anh phải đối mặt với viễn cảnh tương lai tăm tối mà chỉ mình anh có thể thấu thị.",
      backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=85",
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85",
      episodesCount: 1,
      totalEpisodes: "Full Movie",
      views: "1.420.500",
      themeColor: "#f59e0b"
    },
    {
      id: "shogun-2024",
      slug: "shogun-2024",
      title: "SHŌGUN: TƯỚNG QUÂN",
      originalTitle: "Shōgun (Season 1)",
      rating: 9.1,
      year: 2024,
      duration: "10 Tập • 60 phút/tập",
      country: "us",
      countryName: "Âu Mỹ / Nhật Bản",
      age: "T18",
      format: "series",
      status: "TẬP 10 / 10 • TRỌN BỘ 4K VIETSUB",
      genres: ["Lịch Sử", "Chính Kịch", "Chiến Tranh Khốc Liệt"],
      genreKeys: ["drama", "action"],
      synopsis: "Lấy bối cảnh Nhật Bản năm 1600 đầy biến động, Lãnh chúa Yoshii Toranaga phải chiến đấu chống lại các đối thủ trong Hội đồng Nhiếp chính. Cuộc chạm trán với thủy thủ người Anh John Blackthorne đã xoay chuyển cục diện lịch sử.",
      backdrop: "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1920&q=85",
      poster: "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=85",
      episodesCount: 10,
      totalEpisodes: "10 Tập",
      views: "2.180.000",
      themeColor: "#ef4444"
    },
    {
      id: "solo-leveling",
      slug: "solo-leveling",
      title: "TÔI THĂNG CẤP MỘT MÌNH",
      originalTitle: "Solo Leveling (Arise)",
      rating: 8.7,
      year: 2024,
      duration: "12 Tập • 24 phút/tập",
      country: "kr",
      countryName: "Hàn Quốc / Nhật Bản",
      age: "T16",
      format: "series",
      status: "TẬP 12 / 12 • TRỌN BỘ 4K HDR",
      genres: ["Anime 4K", "Hành Động Kỳ Ảo", "Siêu Năng Lực"],
      genreKeys: ["anime", "action"],
      synopsis: "Sung Jinwoo - thợ săn yếu nhất thế giới bất ngờ nhận được 'Hệ Thống' bí ẩn giúp anh nâng cấp chỉ số không giới hạn, từng bước vươn lên thành Hoàng Đế Bóng Đêm thống trị ngục tối.",
      backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1920&q=85",
      poster: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85",
      episodesCount: 12,
      totalEpisodes: "12 Tập",
      views: "3.650.000",
      themeColor: "#00f2fe"
    },
    {
      id: "oppenheimer",
      slug: "oppenheimer-2023",
      title: "OPPENHEIMER",
      originalTitle: "Oppenheimer (2023)",
      rating: 8.9,
      year: 2023,
      duration: "3 giờ 00 phút",
      country: "us",
      countryName: "Âu Mỹ",
      age: "T18",
      format: "single",
      status: "BẢN IMAX 70MM 4K • THUYẾT MINH VIP",
      genres: ["Lịch Sử", "Tâm Lý - Chính Kịch", "Chiến Lược"],
      genreKeys: ["drama"],
      synopsis: "Kiệt tác điện ảnh của Christopher Nolan tái hiện cuộc đời J. Robert Oppenheimer - cha đẻ của bom nguyên tử, cùng những giằng xé đạo đức khi nắm giữ sức mạnh hủy diệt nhân loại.",
      backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=85",
      poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=85",
      episodesCount: 1,
      totalEpisodes: "Full Movie",
      views: "1.950.000",
      themeColor: "#f97316"
    }
  ],

  seriesList: [
    {
      id: "shogun-2024",
      slug: "shogun-2024",
      title: "Shōgun: Tướng Quân",
      currentEp: "Tập 10/10",
      quality: "4K HDR",
      lang: "Vietsub + Thuyết Minh",
      rating: 9.1,
      year: 2024,
      country: "us",
      format: "series",
      genres: ["drama", "action"],
      poster: "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1920&q=85",
      views: "2.1M lượt xem",
      episodesCount: 10,
      themeColor: "#ef4444",
      synopsis: "Cuộc chiến vương quyền khốc liệt tại Nhật Bản thế kỷ 17 với mưu lược quân sự đỉnh cao."
    },
    {
      id: "solo-leveling",
      slug: "solo-leveling",
      title: "Tôi Thăng Cấp Một Mình",
      currentEp: "Tập 12/12",
      quality: "4K 60FPS",
      lang: "Vietsub",
      rating: 8.7,
      year: 2024,
      country: "kr",
      format: "series",
      genres: ["anime", "action"],
      poster: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1920&q=85",
      views: "3.6M lượt xem",
      episodesCount: 12,
      themeColor: "#00f2fe",
      synopsis: "Thợ săn yếu nhất thức tỉnh khả năng thăng cấp bí ẩn, trở thành Chúa tể bóng tối."
    },
    {
      id: "queen-of-tears",
      slug: "queen-of-tears",
      title: "Nữ Hoàng Nước Mắt",
      currentEp: "Tập 16/16",
      quality: "4K UHD",
      lang: "Lồng Tiếng VIP",
      rating: 8.5,
      year: 2024,
      country: "kr",
      format: "series",
      genres: ["drama"],
      poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=85",
      views: "4.8M lượt xem",
      episodesCount: 16,
      themeColor: "#ec4899",
      synopsis: "Khủng hoảng hôn nhân hào môn giữa tiểu thư tài phiệt và giám đốc pháp lý tài hoa."
    },
    {
      id: "fallout-2024",
      slug: "fallout-2024",
      title: "Fallout: Thảm Họa Hạt Nhân",
      currentEp: "Tập 08/08",
      quality: "4K Dolby Vision",
      lang: "Vietsub",
      rating: 8.6,
      year: 2024,
      country: "us",
      format: "series",
      genres: ["sci-fi", "action"],
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=85",
      views: "1.7M lượt xem",
      episodesCount: 8,
      themeColor: "#f59e0b",
      synopsis: "Hành trình sinh tồn nơi vùng đất hoang tàn sau chiến tranh hạt nhân hủy diệt."
    },
    {
      id: "jujutsu-kaisen-s2",
      slug: "jujutsu-kaisen-phan-2",
      title: "Chú Thuật Hồi Chiến (Mùa 2)",
      currentEp: "Tập 23/23",
      quality: "4K HDR",
      lang: "Vietsub + Thuyết Minh",
      rating: 9.0,
      year: 2023,
      country: "jp",
      format: "series",
      genres: ["anime", "action"],
      poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=85",
      views: "5.2M lượt xem",
      episodesCount: 23,
      themeColor: "#8b5cf6",
      synopsis: "Biến cố Shibuya đẫm máu làm rung chuyển toàn bộ giới chú thuật sư Nhật Bản."
    },
    {
      id: "moving-kr",
      slug: "moving-doi-thieu-nien-sieu-dang",
      title: "Moving: Đội Thiếu Niên Siêu Đẳng",
      currentEp: "Tập 20/20",
      quality: "4K UHD",
      lang: "Vietsub + Lồng Tiếng",
      rating: 8.8,
      year: 2023,
      country: "kr",
      format: "series",
      genres: ["action", "sci-fi", "drama"],
      poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=85",
      views: "3.1M lượt xem",
      episodesCount: 20,
      themeColor: "#38bdf8",
      synopsis: "Những đứa trẻ mang siêu năng lực tiềm ẩn cùng cha mẹ che giấu quá khứ đặc vụ nguy hiểm."
    }
  ],

  cinemaList: [
    {
      id: "dune-2",
      slug: "dune-hanh-tinh-cat-phan-hai",
      title: "Dune: Hành Tinh Cát 2",
      currentEp: "Full 166 Phút",
      quality: "4K IMAX HDR",
      lang: "Vietsub + Thuyết Minh",
      rating: 8.8,
      year: 2024,
      country: "us",
      format: "single",
      genres: ["sci-fi", "action"],
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=85",
      views: "1.4M lượt xem",
      episodesCount: 1,
      themeColor: "#f59e0b",
      synopsis: "Cuộc chiến bảo vệ sa mạc Arrakis cùng loài giun cát khổng lồ chấn động màn ảnh."
    },
    {
      id: "oppenheimer",
      slug: "oppenheimer-2023",
      title: "Oppenheimer",
      currentEp: "Full 180 Phút",
      quality: "4K 70mm",
      lang: "Thuyết Minh VIP",
      rating: 8.9,
      year: 2023,
      country: "us",
      format: "single",
      genres: ["drama"],
      poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=85",
      views: "1.9M lượt xem",
      episodesCount: 1,
      themeColor: "#f97316",
      synopsis: "Tác phẩm lịch sử đoạt 7 giải Oscar về người kiến tạo vũ khí hủy diệt tối thượng."
    },
    {
      id: "deadpool-wolverine",
      slug: "deadpool-va-wolverine",
      title: "Deadpool & Wolverine",
      currentEp: "Full 128 Phút",
      quality: "4K HDR",
      lang: "Vietsub Chuẩn Rạp",
      rating: 8.2,
      year: 2024,
      country: "us",
      format: "single",
      genres: ["marvel", "action"],
      poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1920&q=85",
      views: "2.8M lượt xem",
      episodesCount: 1,
      themeColor: "#ef4444",
      synopsis: "Màn kết hợp lầy lội và đẫm máu giải cứu đa vũ trụ Marvel."
    },
    {
      id: "avatar-way-of-water",
      slug: "avatar-dong-chay-cua-nuoc",
      title: "Avatar: Dòng Chảy Của Nước",
      currentEp: "Full 192 Phút",
      quality: "4K HFR 3D",
      lang: "Lồng Tiếng Rạp",
      rating: 8.6,
      year: 2022,
      country: "us",
      format: "single",
      genres: ["sci-fi", "action"],
      poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=85",
      views: "4.5M lượt xem",
      episodesCount: 1,
      themeColor: "#0ea5e9",
      synopsis: "Thế giới đại dương tráng lệ của Pandora trong siêu phẩm vượt mốc 2 tỷ USD."
    },
    {
      id: "godzilla-minus-one",
      slug: "godzilla-minus-one",
      title: "Godzilla Minus One",
      currentEp: "Full 125 Phút",
      quality: "4K HDR",
      lang: "Vietsub",
      rating: 8.4,
      year: 2023,
      country: "jp",
      format: "single",
      genres: ["sci-fi", "action"],
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=85",
      views: "1.3M lượt xem",
      episodesCount: 1,
      themeColor: "#10b981",
      synopsis: "Quái thú nguyên tử trỗi dậy tàn phá nước Nhật hậu chiến tranh."
    },
    {
      id: "exhuma-2024",
      slug: "quat-mo-trung-ma",
      title: "Quật Mộ Trùng Ma (Exhuma)",
      currentEp: "Full 134 Phút",
      quality: "4K UHD",
      lang: "Vietsub + Thuyết Minh",
      rating: 8.1,
      year: 2024,
      country: "kr",
      format: "single",
      genres: ["horror", "drama"],
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=85",
      backdrop: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=85",
      views: "2.6M lượt xem",
      episodesCount: 1,
      themeColor: "#64748b",
      synopsis: "Bí ẩn kinh hoàng đằng sau ngôi mộ cổ bị nguyền rủa của gia tộc giàu có."
    }
  ],

  ranking: [
    { rank: 1, id: "dune-2", title: "Dune: Hành Tinh Cát 2", ep: "Full 4K", views: "1.420.500 lượt xem", rating: 8.8, poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=200&q=85" },
    { rank: 2, id: "shogun-2024", title: "Shōgun: Tướng Quân", ep: "Tập 10/10", views: "1.180.200 lượt xem", rating: 9.1, poster: "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=200&q=85" },
    { rank: 3, id: "solo-leveling", title: "Tôi Thăng Cấp Một Mình", ep: "Tập 12/12", views: "980.400 lượt xem", rating: 8.7, poster: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=200&q=85" },
    { rank: 4, id: "queen-of-tears", title: "Nữ Hoàng Nước Mắt", ep: "Tập 16/16", views: "850.120 lượt xem", rating: 8.5, poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85" },
    { rank: 5, id: "deadpool-wolverine", title: "Deadpool & Wolverine", ep: "Full Rạp", views: "740.900 lượt xem", rating: 8.2, poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=85" }
  ],

  comments: [
    {
      id: "c1",
      user: "Trần Anh Tuấn (VIP 4K)",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
      time: "5 phút trước",
      text: "Server VIP 1 tải mượt dã man! Âm thanh Dolby Atmos nghe tiếng cát bụi với sâu bọ rợn người luôn anh em ạ. 10/10 cho quả chất lượng bản này!",
      likes: 42,
      liked: false
    },
    {
      id: "c2",
      user: "Ngọc Mai Cinema",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      time: "24 phút trước",
      text: "Cảnh Paul cưỡi giun cát khổng lồ xem trên màn 4K nét từng hạt bụi. Phim đỉnh nhất năm nay rồi không còn gì để bàn cãi.",
      likes: 29,
      liked: false
    },
    {
      id: "c3",
      user: "Minh Khang Otaku",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
      time: "1 giờ trước",
      text: "Tốc độ load phim ở 4K Luxury nhanh thật, không bị chèn quảng cáo nhảy pop-up rác như mấy web khác. Giao diện quá đẹp!",
      likes: 18,
      liked: false
    }
  ]
};

// =====================================================================
// 2. STATE MANAGER
// =====================================================================
const state = {
  currentSpotlightIndex: 0,
  activeMovie: APP_DATA.spotlights[0],
  activeServer: "vip1",
  activeEpisode: 1,
  totalEpisodes: 10,
  isPlaying: false,
  isTheaterMode: false,
  isMuted: false,
  volume: 0.85,
  currentTimeSec: 2535,
  durationSec: 9960,
  playbackTimer: null,
  streamAnimId: null,
  dustAnimId: null,
  watchlist: JSON.parse(localStorage.getItem("4kluxury_watchlist") || "[]"),
  filter: {
    genre: "all",
    country: "all",
    format: "all"
  },
  audioContext: null,
  isSoundAmbientOn: false,
  isPipDismissed: false
};

// =====================================================================
// 3. INITIALIZATION & API SYNC
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundDustCanvas();
  initTactileTouchFeedback();
  initHeroSpotlight();
  initHeroCoverflowDeck();
  initPlayerHub();
  initEpisodeGrid();
  initServerPicker();
  initCatalogs();
  initTactileSegmentedFilter();
  initRanking();
  initComments();
  initWatchlistDrawer();
  initGlobalSearch();
  initAudioAmbience();
  initTheaterMode();
  initStickyPiPPlayer();
  initTrafficTicker();
  initMobileBottomDock();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Sync real catalog feed from Edge Worker / D1 API in background
  syncCatalogFromApi();

  showToast("4K LUXURY SPATIAL PRO: Đã sẵn sàng kết nối CDN VIP 1!");
});

async function syncCatalogFromApi() {
  try {
    if (typeof API !== 'undefined' && API.getHomeFeed) {
      const feed = await API.getHomeFeed();
      if (feed && Array.isArray(feed.sections) && feed.sections.length > 0) {
        const allItems = feed.sections.flatMap(s => s.items || []);
        if (allItems.length > 0) {
          // Transform items into our rich cards
          const newSeries = [];
          const newCinema = [];

          allItems.forEach(item => {
            const card = {
              id: item.slug || String(item._id || Math.random()),
              slug: item.slug,
              title: item.name || item.title || "Phim 4K",
              currentEp: item.episode_current || "Full 4K",
              quality: item.quality || "4K HDR",
              lang: item.lang || "Vietsub",
              rating: item.vote_average ? Number(item.vote_average).toFixed(1) : 8.8,
              year: item.year || 2024,
              country: "us",
              format: item.type === "series" ? "series" : "single",
              genres: ["action", "sci-fi"],
              poster: item.poster_url || item.thumb_url || "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=85",
              backdrop: item.thumb_url || item.poster_url || "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=85",
              views: "1.2M lượt xem",
              episodesCount: 1,
              themeColor: "#00f2fe",
              synopsis: item.content ? item.content.replace(/<[^>]*>/g, '').slice(0, 160) + '...' : "Bản đẹp 4K chuẩn rạp không quảng cáo."
            };

            if (item.type === "series") {
              newSeries.push(card);
            } else {
              newCinema.push(card);
            }
          });

          if (newSeries.length > 0) {
            APP_DATA.seriesList = [...newSeries.slice(0, 8), ...APP_DATA.seriesList];
            renderSeriesGrid(APP_DATA.seriesList);
          }
          if (newCinema.length > 0) {
            APP_DATA.cinemaList = [...newCinema.slice(0, 8), ...APP_DATA.cinemaList];
            renderCinemaGrid(APP_DATA.cinemaList);
          }
        }
      }
    }
  } catch (err) {
    console.log('[CatalogSync] Bundled 4K assets active:', err);
  }
}

// =====================================================================
// 4. TACTILE TOUCH & RIPPLE ENGINE
// =====================================================================
function initTactileTouchFeedback() {
  document.addEventListener("pointerdown", (e) => {
    const target = e.target.closest("button, .episode-btn, .server-node-pill, .seg-pill, .cat-pill-switch, .deck-item-card, .catalog-card, .rank-item, .dock-pill, .mob-dock-item");
    if (!target) return;

    if (navigator.vibrate) {
      try { navigator.vibrate(12); } catch (err) {}
    }

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "tactile-ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    target.appendChild(ripple);
    setTimeout(() => {
      if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
    }, 450);
  });
}

// =====================================================================
// 5. FLOATING DUST PARTICLES AMBIENT CANVAS
// =====================================================================
function initBackgroundDustCanvas() {
  const canvas = document.getElementById("spatial-dust-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const dustCount = 45;
  const dustParticles = [];
  for (let i = 0; i < dustCount; i++) {
    dustParticles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.1
    });
  }

  function renderDust() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#00f2fe";
    dustParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;
    state.dustAnimId = requestAnimationFrame(renderDust);
  }
  renderDust();
}

// =====================================================================
// 6. SPOTLIGHT HERO & 3D HORIZON COVERFLOW DECK
// =====================================================================
function initHeroSpotlight() {
  updateHeroDisplay(state.currentSpotlightIndex);

  const watchNowBtn = document.getElementById("hero-watch-now-btn");
  if (watchNowBtn) {
    watchNowBtn.addEventListener("click", () => {
      playTactileClick();
      scrollToPlayer(APP_DATA.spotlights[state.currentSpotlightIndex]);
    });
  }

  const trailerBtn = document.getElementById("hero-trailer-btn");
  if (trailerBtn) {
    trailerBtn.addEventListener("click", () => {
      playTactileClick();
      scrollToPlayer(APP_DATA.spotlights[state.currentSpotlightIndex]);
      simulateStreamLoad();
      showToast("Đang phát Trailer 4K Ultra HD bản quyền...");
    });
  }

  const addFavBtn = document.getElementById("hero-add-fav-btn");
  if (addFavBtn) {
    addFavBtn.addEventListener("click", () => {
      playHeartChime();
      toggleWatchlist(APP_DATA.spotlights[state.currentSpotlightIndex]);
    });
  }

  const shareBtn = document.getElementById("hero-share-btn");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      playTactileClick();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        showToast("Đã sao chép liên kết phim vào bộ nhớ tạm!");
      } else {
        showToast("Liên kết: " + window.location.href);
      }
    });
  }
}

function updateHeroDisplay(index) {
  const movie = APP_DATA.spotlights[index];
  if (!movie) return;

  const backdrop = document.getElementById("hero-backdrop");
  const title = document.getElementById("hero-title");
  const status = document.getElementById("hero-status");
  const rating = document.getElementById("hero-rating");
  const year = document.getElementById("hero-year");
  const duration = document.getElementById("hero-duration");
  const genres = document.getElementById("hero-genres");
  const synopsis = document.getElementById("hero-synopsis");

  if (backdrop) {
    backdrop.style.backgroundImage = `url('${movie.backdrop}')`;
  }
  if (title) title.textContent = movie.title;
  if (status) status.textContent = movie.status;
  if (rating) rating.textContent = movie.rating;
  if (year) year.textContent = movie.year;
  if (duration) duration.textContent = movie.duration;
  if (synopsis) synopsis.textContent = movie.synopsis;

  if (genres) {
    genres.innerHTML = movie.genres.map(g => `<span class="genre-capsule">${g}</span>`).join("");
  }

  document.querySelectorAll(".deck-item-card").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

function initHeroCoverflowDeck() {
  const container = document.getElementById("hero-carousel-selector");
  if (!container) return;

  container.innerHTML = APP_DATA.spotlights.map((movie, idx) => `
    <div class="deck-item-card ${idx === 0 ? 'active' : ''}" data-index="${idx}" title="${movie.title}">
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="deck-item-overlay">
        <h5 class="deck-item-title">${movie.title}</h5>
        <span class="deck-item-meta">⭐ ${movie.rating} • ${movie.year}</span>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".deck-item-card").forEach(item => {
    item.addEventListener("click", () => {
      playTactileClick();
      const idx = parseInt(item.getAttribute("data-index"), 10);
      state.currentSpotlightIndex = idx;
      updateHeroDisplay(idx);
    });
  });
}

// =====================================================================
// 7. THEATER PLAYER HUB & REAL-TIME 4K STREAM CANVAS
// =====================================================================
function initPlayerHub() {
  const centerPlayBtn = document.getElementById("btn-center-play");
  const ctrlPlayBtn = document.getElementById("ctrl-btn-play");
  const timeline = document.getElementById("seek-timeline");
  const volRange = document.getElementById("vol-range");
  const volBtn = document.getElementById("ctrl-btn-vol");
  const thxBtn = document.getElementById("btn-thx-boom");
  const qualityBtn = document.getElementById("btn-quality-switch");
  const rewindBtn = document.getElementById("ctrl-btn-rewind");
  const forwardBtn = document.getElementById("ctrl-btn-forward");
  const fullscreenBtn = document.getElementById("ctrl-btn-fullscreen");
  const reportBtn = document.getElementById("btn-report-error");
  const downloadBtn = document.getElementById("btn-download-movie");

  loadMovieToPlayer(state.activeMovie);

  const togglePlay = () => {
    state.isPlaying = !state.isPlaying;
    const centerOverlay = document.getElementById("player-center-play");
    const ctrlIcon = document.getElementById("ctrl-icon-play");
    const pipIcon = document.getElementById("pip-icon-play");

    if (state.isPlaying) {
      if (centerOverlay) centerOverlay.style.display = "none";
      if (ctrlIcon) ctrlIcon.setAttribute("data-lucide", "pause");
      if (pipIcon) pipIcon.setAttribute("data-lucide", "pause");
      startPlaybackSimulation();
      startCinematicStreamCanvas();
      playCinemaChime();
      showToast("Đang phát 4K Master: " + state.activeMovie.title);
    } else {
      if (centerOverlay) centerOverlay.style.display = "flex";
      if (ctrlIcon) ctrlIcon.setAttribute("data-lucide", "play");
      if (pipIcon) pipIcon.setAttribute("data-lucide", "play");
      stopPlaybackSimulation();
      stopCinematicStreamCanvas();
    }
    if (window.lucide) window.lucide.createIcons();
  };

  if (centerPlayBtn) centerPlayBtn.addEventListener("click", togglePlay);
  if (ctrlPlayBtn) ctrlPlayBtn.addEventListener("click", togglePlay);

  if (timeline) {
    timeline.addEventListener("click", (e) => {
      playTactileClick();
      const rect = timeline.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      state.currentTimeSec = Math.floor(pct * state.durationSec);
      updateTimelineUI();
    });
  }

  if (rewindBtn) {
    rewindBtn.addEventListener("click", () => {
      playTactileClick();
      state.currentTimeSec = Math.max(0, state.currentTimeSec - 10);
      updateTimelineUI();
      showToast("Tua lại -10 giây");
    });
  }
  if (forwardBtn) {
    forwardBtn.addEventListener("click", () => {
      playTactileClick();
      state.currentTimeSec = Math.min(state.durationSec, state.currentTimeSec + 10);
      updateTimelineUI();
      showToast("Tua tới +10 giây");
    });
  }

  if (volRange) {
    volRange.addEventListener("input", (e) => {
      state.volume = e.target.value / 100;
      updateVolumeIcon();
    });
  }

  if (volBtn) {
    volBtn.addEventListener("click", () => {
      playTactileClick();
      state.isMuted = !state.isMuted;
      updateVolumeIcon();
      showToast(state.isMuted ? "Đã tắt tiếng" : "Đã bật âm lượng");
    });
  }

  if (thxBtn) {
    thxBtn.addEventListener("click", () => {
      triggerThxBoomEffect();
    });
  }

  if (qualityBtn) {
    const qualities = ["4K ULTRA HD", "2K 1440P", "1080P FULL HD", "720P FAST"];
    let qIdx = 0;
    qualityBtn.addEventListener("click", () => {
      playTactileClick();
      qIdx = (qIdx + 1) % qualities.length;
      qualityBtn.textContent = qualities[qIdx];
      simulateStreamLoad();
      showToast("Chuyển chất lượng: " + qualities[qIdx]);
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      playTactileClick();
      const stage = document.getElementById("player-stage-box");
      if (!document.fullscreenElement) {
        if (stage.requestFullscreen) stage.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  if (reportBtn) {
    reportBtn.addEventListener("click", () => {
      playTactileClick();
      showToast("Hệ thống đã tiếp nhận báo lỗi tập " + state.activeEpisode + ". Kỹ thuật viên đang kiểm tra!");
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      playTactileClick();
      showToast("Đang tạo liên kết tải file MP4 4K VIP tốc độ cao...");
    });
  }
}

function updateTimelineUI() {
  const seekProgress = document.getElementById("seek-progress");
  const seekThumb = document.getElementById("seek-thumb");
  const curTimeEl = document.getElementById("cur-time");

  const pct = (state.currentTimeSec / state.durationSec) * 100;
  if (seekProgress) seekProgress.style.width = `${pct}%`;
  if (seekThumb) seekThumb.style.left = `${pct}%`;
  if (curTimeEl) curTimeEl.textContent = formatTime(state.currentTimeSec);
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const pad = (n) => String(n).padStart(2, '0');
  if (h > 0) return `${pad(h)}:${pad(m)}:${pad(s)}`;
  return `${pad(m)}:${pad(s)}`;
}

function startPlaybackSimulation() {
  stopPlaybackSimulation();
  state.playbackTimer = setInterval(() => {
    if (state.currentTimeSec < state.durationSec) {
      state.currentTimeSec += 1;
      updateTimelineUI();
    } else {
      stopPlaybackSimulation();
      stopCinematicStreamCanvas();
      state.isPlaying = false;
      const centerOverlay = document.getElementById("player-center-play");
      if (centerOverlay) centerOverlay.style.display = "flex";
    }
  }, 1000);
}

function stopPlaybackSimulation() {
  if (state.playbackTimer) {
    clearInterval(state.playbackTimer);
    state.playbackTimer = null;
  }
}

function updateVolumeIcon() {
  const volIcon = document.getElementById("ctrl-icon-vol");
  if (!volIcon) return;
  if (state.isMuted || state.volume === 0) {
    volIcon.setAttribute("data-lucide", "volume-x");
  } else if (state.volume < 0.5) {
    volIcon.setAttribute("data-lucide", "volume-1");
  } else {
    volIcon.setAttribute("data-lucide", "volume-2");
  }
  if (window.lucide) window.lucide.createIcons();
}

function simulateStreamLoad() {
  const loader = document.getElementById("player-loader");
  if (loader) {
    loader.classList.add("active");
    setTimeout(() => {
      loader.classList.remove("active");
    }, 600);
  }
}

function loadMovieToPlayer(movie, episodeNum = 1) {
  state.activeMovie = movie;
  state.activeEpisode = episodeNum;

  const titleEl = document.getElementById("player-film-title");
  const epEl = document.getElementById("player-current-ep");
  const posterEl = document.getElementById("player-screen-poster");
  const pipTitle = document.getElementById("pip-title");
  const pipEp = document.getElementById("pip-ep");
  const pipPoster = document.getElementById("pip-poster");

  if (titleEl) titleEl.textContent = movie.title;
  if (epEl) epEl.textContent = `Tập ${String(episodeNum).padStart(2, '0')} (${movie.quality || 'Bản 4K Vietsub'})`;
  if (posterEl) posterEl.src = movie.backdrop || movie.poster;

  if (pipTitle) pipTitle.textContent = movie.title;
  if (pipEp) pipEp.textContent = `Tập ${String(episodeNum).padStart(2, '0')} • 4K Vietsub`;
  if (pipPoster) pipPoster.src = movie.poster;

  updateAmbilightGlow(movie.themeColor || "#00f2fe");
  initEpisodeGrid();

  // If real API detail is available, attempt stream resolution
  if (movie.slug && typeof API !== 'undefined' && API.getDetail) {
    API.getDetail(movie.slug).then(res => {
      if (res && res.episodes && res.episodes.length > 0) {
        const epData = res.episodes[0].server_data;
        if (epData && epData[0]) {
          const streamUrl = epData[0].link_embed || epData[0].link_m3u8;
          if (streamUrl && epData[0].link_embed) {
            const embed = document.getElementById("playerEmbed");
            if (embed) {
              embed.src = streamUrl;
              embed.classList.remove("hidden");
              if (posterEl) posterEl.style.display = "none";
            }
          }
        }
      }
    }).catch(() => {});
  }
}

function scrollToPlayer(movie) {
  loadMovieToPlayer(movie, 1);
  const playerSection = document.getElementById("player-section");
  if (playerSection) {
    playerSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  simulateStreamLoad();
}

function updateAmbilightGlow(colorHex) {
  const backlight = document.getElementById("player-ambient-backlight");
  if (backlight) {
    backlight.style.background = `radial-gradient(circle at 50% 50%, ${colorHex}88 0%, rgba(59, 130, 246, 0.25) 45%, transparent 70%)`;
  }

  const canvas = document.getElementById("player-ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 340;

  const grad = ctx.createRadialGradient(300, 170, 20, 300, 170, 300);
  grad.addColorStop(0, colorHex + "44");
  grad.addColorStop(0.7, colorHex + "11");
  grad.addColorStop(1, "transparent");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// =====================================================================
// 8. CINEMATIC 4K VIDEO STREAM SIMULATION
// =====================================================================
let streamParticles = [];
function startCinematicStreamCanvas() {
  const canvas = document.getElementById("player-stream-canvas");
  if (!canvas) return;
  canvas.classList.add("active");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.clientWidth || 960;
  canvas.height = canvas.clientHeight || 540;

  streamParticles = [];
  for (let i = 0; i < 90; i++) {
    streamParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 1.8,
      speedY: (Math.random() - 0.5) * 1.8,
      alpha: Math.random() * 0.7 + 0.3
    });
  }

  let tick = 0;
  const renderFrame = () => {
    if (!state.isPlaying) return;
    tick++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(4, 6, 12, 0.45)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const themeColor = state.activeMovie.themeColor || "#00f2fe";
    ctx.fillStyle = themeColor;
    streamParticles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.globalAlpha = p.alpha * (0.6 + 0.4 * Math.sin(tick * 0.05));
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;

    const barCount = 42;
    const barWidth = 4;
    const startX = canvas.width / 2 - (barCount * 8) / 2;
    for (let i = 0; i < barCount; i++) {
      const h = (Math.sin(tick * 0.15 + i * 0.35) * 0.5 + 0.5) * 32 + 6;
      ctx.fillStyle = themeColor;
      ctx.fillRect(startX + i * 8, canvas.height - 75 - h, barWidth, h);
    }

    state.streamAnimId = requestAnimationFrame(renderFrame);
  };

  if (state.streamAnimId) cancelAnimationFrame(state.streamAnimId);
  renderFrame();
}

function stopCinematicStreamCanvas() {
  const canvas = document.getElementById("player-stream-canvas");
  if (canvas) canvas.classList.remove("active");
  if (state.streamAnimId) {
    cancelAnimationFrame(state.streamAnimId);
    state.streamAnimId = null;
  }
}

// =====================================================================
// 9. EPISODES HUB & SERVER SELECTOR
// =====================================================================
function initEpisodeGrid() {
  const grid = document.getElementById("episodes-buttons-grid");
  const totalBadge = document.getElementById("episodes-total-badge");
  if (!grid) return;

  const total = state.activeMovie.episodesCount || 10;
  state.totalEpisodes = total;

  if (totalBadge) {
    totalBadge.textContent = total > 1 ? `${total} Tập • Trọn Bộ` : "Bản Chiếu Rạp Full";
  }

  let html = "";
  for (let i = 1; i <= total; i++) {
    const isAct = i === state.activeEpisode;
    html += `
      <button class="episode-btn ${isAct ? 'active' : ''}" data-ep="${i}">
        <span>Tập ${String(i).padStart(2, '0')}</span>
        <span class="ep-subtext">4K HDR</span>
      </button>
    `;
  }

  grid.innerHTML = html;

  grid.querySelectorAll(".episode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const ep = parseInt(btn.getAttribute("data-ep"), 10);
      playEpisodeChime(ep);
      state.activeEpisode = ep;
      grid.querySelectorAll(".episode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const epLabel = document.getElementById("player-current-ep");
      if (epLabel) {
        epLabel.textContent = `Tập ${String(ep).padStart(2, '0')} (Bản 4K Vietsub)`;
      }

      state.currentTimeSec = 0;
      updateTimelineUI();
      simulateStreamLoad();
      showToast(`Đã chuyển sang Tập ${ep} từ ${getServerName(state.activeServer)}`);
    });
  });
}

function initServerPicker() {
  const container = document.getElementById("server-chips-list");
  const pingLabel = document.getElementById("hud-ping-label");
  if (!container) return;

  container.querySelectorAll(".server-node-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      playServerSwitchChirp();
      container.querySelectorAll(".server-node-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const serverKey = btn.getAttribute("data-server");
      state.activeServer = serverKey;
      
      if (pingLabel) {
        pingLabel.textContent = serverKey === "vip1" ? "CDN VIP 1 (12ms)" : (serverKey === "vip2" ? "CDN VIP 2 (18ms)" : "HYDRA STREAM (45ms)");
      }

      simulateStreamLoad();
      showToast(`Đã kết nối ${getServerName(serverKey)} siêu tốc!`);
    });
  });
}

function getServerName(key) {
  switch (key) {
    case "vip1": return "Server VIP 1 (FPT/VNPT Siêu Tốc)";
    case "vip2": return "Server VIP 2 (Viettel CDN 4K)";
    case "backup": return "Server Dự Phòng (Hydra Stream)";
    default: return "Server VIP 1";
  }
}

// =====================================================================
// 10. TACTILE SEGMENTED ADVANCED FILTER
// =====================================================================
function initTactileSegmentedFilter() {
  document.querySelectorAll("#filter-genre-pills .seg-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      playFilterPillPop();
      document.querySelectorAll("#filter-genre-pills .seg-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.filter.genre = pill.getAttribute("data-genre");
      executeFilter();
    });
  });

  document.querySelectorAll("#filter-country-pills .seg-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      playFilterPillPop();
      document.querySelectorAll("#filter-country-pills .seg-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.filter.country = pill.getAttribute("data-country");
      executeFilter();
    });
  });

  document.querySelectorAll("#filter-format-pills .seg-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      playFilterPillPop();
      document.querySelectorAll("#filter-format-pills .seg-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.filter.format = pill.getAttribute("data-format");
      executeFilter();
    });
  });
}

function executeFilter() {
  const { genre, country, format } = state.filter;

  const matches = (item) => {
    if (genre !== "all" && !item.genres.includes(genre)) return false;
    if (country !== "all" && item.country !== country) return false;
    if (format !== "all") {
      if (format === "series" && item.format !== "series") return false;
      if (format === "single" && item.format !== "single") return false;
    }
    return true;
  };

  const filteredSeries = APP_DATA.seriesList.filter(matches);
  const filteredCinema = APP_DATA.cinemaList.filter(matches);

  renderSeriesGrid(filteredSeries);
  renderCinemaGrid(filteredCinema);

  const totalFound = filteredSeries.length + filteredCinema.length;
  const countLabel = document.getElementById("filter-result-count");
  if (countLabel) {
    countLabel.textContent = `Tìm thấy ${totalFound} phim phù hợp`;
  }
}

// =====================================================================
// 11. CATALOGS WITH 3D GYRO PERSPECTIVE TILT
// =====================================================================
function initCatalogs() {
  renderSeriesGrid(APP_DATA.seriesList);
  renderCinemaGrid(APP_DATA.cinemaList);

  document.querySelectorAll(".catalog-category-switchers .cat-pill-switch").forEach(tab => {
    tab.addEventListener("click", () => {
      playTactileClick();
      document.querySelectorAll(".catalog-category-switchers .cat-pill-switch").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const cat = tab.getAttribute("data-series-tab");

      let filtered = APP_DATA.seriesList;
      if (cat === "us") filtered = APP_DATA.seriesList.filter(m => m.country === "us");
      if (cat === "kr") filtered = APP_DATA.seriesList.filter(m => m.country === "kr");
      if (cat === "anime") filtered = APP_DATA.seriesList.filter(m => m.genres.includes("anime"));

      renderSeriesGrid(filtered);
    });
  });
}

function renderSeriesGrid(list) {
  const grid = document.getElementById("series-grid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; padding: 50px; text-align: center; color: var(--text-dim); font-size: 14px;">Không tìm thấy phim bộ phù hợp tiêu chí lọc.</div>`;
    return;
  }

  grid.innerHTML = list.map(item => createCatalogCardHTML(item)).join("");
  bindCatalogCardEvents(grid);
  if (window.lucide) window.lucide.createIcons();
}

function renderCinemaGrid(list) {
  const grid = document.getElementById("cinema-grid");
  const countLabel = document.getElementById("cinema-count-label");
  if (!grid) return;

  if (countLabel) countLabel.textContent = `${list.length} Siêu Phẩm`;

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; padding: 50px; text-align: center; color: var(--text-dim); font-size: 14px;">Không tìm thấy phim chiếu rạp phù hợp tiêu chí lọc.</div>`;
    return;
  }

  grid.innerHTML = list.map(item => createCatalogCardHTML(item)).join("");
  bindCatalogCardEvents(grid);
  if (window.lucide) window.lucide.createIcons();
}

function createCatalogCardHTML(item) {
  return `
    <div class="catalog-card" data-id="${item.id}">
      <div class="card-poster-box">
        <img src="${item.poster}" alt="${item.title}" loading="lazy">
        <span class="card-tag-status">${item.currentEp || 'Full Movie'}</span>
        <span class="card-tag-quality">${item.quality || '4K'}</span>
        <div class="card-hover-box">
          <div class="hover-play-circle">
            <i data-lucide="play"></i>
          </div>
          <p class="hover-synopsis">${item.synopsis || 'Nhấn để bắt đầu xem với chuẩn âm thanh Dolby Atmos 4K.'}</p>
        </div>
      </div>
      <div class="card-meta-info">
        <h4 class="card-film-name" title="${item.title}">${item.title}</h4>
        <div class="card-film-sub">
          <span class="card-rating">⭐ ${item.rating}</span>
          <span>${item.year}</span>
          <span>${item.lang || 'Vietsub'}</span>
        </div>
      </div>
    </div>
  `;
}

function bindCatalogCardEvents(container) {
  container.querySelectorAll(".catalog-card").forEach(card => {
    const movieId = card.getAttribute("data-id");
    const movieObj = findMovieById(movieId);

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
    });

    card.addEventListener("click", () => {
      playTactileClick();
      if (movieObj) scrollToPlayer(movieObj);
    });
  });
}

function findMovieById(id) {
  return (
    APP_DATA.spotlights.find(m => m.id === id) ||
    APP_DATA.seriesList.find(m => m.id === id) ||
    APP_DATA.cinemaList.find(m => m.id === id)
  );
}

// =====================================================================
// 12. RANKING LEADERBOARD & COMMENTS SYSTEM
// =====================================================================
function initRanking() {
  const listEl = document.getElementById("ranking-list");
  if (!listEl) return;

  listEl.innerHTML = APP_DATA.ranking.map(item => `
    <div class="rank-item" data-id="${item.id}">
      <span class="rank-num">${item.rank}</span>
      <img src="${item.poster}" alt="${item.title}" class="rank-thumb">
      <div class="rank-info">
        <h4 class="rank-title">${item.title}</h4>
        <div class="rank-views">
          <span>${item.ep}</span>
          <span>•</span>
          <span>${item.views}</span>
        </div>
      </div>
      <div class="card-rating">⭐ ${item.rating}</div>
    </div>
  `).join("");

  listEl.querySelectorAll(".rank-item").forEach(item => {
    item.addEventListener("click", () => {
      playTactileClick();
      const mId = item.getAttribute("data-id");
      const movie = findMovieById(mId);
      if (movie) scrollToPlayer(movie);
    });
  });

  document.querySelectorAll(".ranking-period-buttons .period-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      playTactileClick();
      document.querySelectorAll(".ranking-period-buttons .period-btn").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      showToast(`Đã cập nhật Bảng xếp hạng theo: ${tab.textContent}`);
    });
  });
}

function initComments() {
  const postBtn = document.getElementById("btn-post-comment");
  const textarea = document.getElementById("comment-textarea");

  renderCommentsFeed();

  if (postBtn && textarea) {
    postBtn.addEventListener("click", () => {
      const text = textarea.value.trim();
      if (!text) {
        showToast("Vui lòng nhập nội dung bình luận!");
        return;
      }
      playHeartChime();

      const newComment = {
        id: "c_" + Date.now(),
        user: "Bạn (VIP Khách Quý)",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        time: "Vừa xong",
        text: text,
        likes: 1,
        liked: true
      };

      APP_DATA.comments.unshift(newComment);
      textarea.value = "";
      renderCommentsFeed();
      showToast("Bình luận của bạn đã được đăng thành công!");
    });
  }
}

function renderCommentsFeed() {
  const feed = document.getElementById("comments-feed");
  if (!feed) return;

  feed.innerHTML = APP_DATA.comments.map(c => `
    <div class="comment-card" data-cid="${c.id}">
      <img src="${c.avatar}" alt="${c.user}" class="comment-avatar">
      <div class="comment-content">
        <div class="comment-user-row">
          <span class="c-username">${c.user}</span>
          <span class="c-time">${c.time}</span>
        </div>
        <p class="c-text">${escapeHTML(c.text)}</p>
        <div class="comment-footer-actions">
          <button class="c-act-btn c-like-btn" data-cid="${c.id}">
            <i data-lucide="heart" style="${c.liked ? 'fill: #ef4444; color: #ef4444;' : ''}"></i> 
            <span>${c.likes}</span>
          </button>
          <button class="c-act-btn"><i data-lucide="corner-down-right"></i> Trả lời</button>
        </div>
      </div>
    </div>
  `).join("");

  feed.querySelectorAll(".c-like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      playHeartChime();
      const cid = btn.getAttribute("data-cid");
      const c = APP_DATA.comments.find(x => x.id === cid);
      if (c) {
        c.liked = !c.liked;
        c.likes += c.liked ? 1 : -1;
        renderCommentsFeed();
      }
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function escapeHTML(str) {
  return String(str || '').replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// =====================================================================
// 13. WATCHLIST DRAWER SYSTEM
// =====================================================================
function initWatchlistDrawer() {
  const drawer = document.getElementById("watchlist-drawer");
  const openBtn = document.getElementById("open-watchlist-btn");
  const closeBtn = document.getElementById("btn-close-drawer");
  const clearBtn = document.getElementById("btn-clear-watchlist");

  updateWatchlistBadge();

  if (openBtn && drawer) {
    openBtn.addEventListener("click", () => {
      playTactileClick();
      drawer.classList.add("open");
      renderWatchlistItems();
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener("click", () => {
      playTactileClick();
      drawer.classList.remove("open");
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      playTactileClick();
      state.watchlist = [];
      localStorage.setItem("4kluxury_watchlist", "[]");
      updateWatchlistBadge();
      renderWatchlistItems();
      showToast("Đã dọn sạch tủ phim yêu thích.");
    });
  }
}

function toggleWatchlist(movie) {
  const idx = state.watchlist.findIndex(w => w.id === movie.id);
  if (idx > -1) {
    state.watchlist.splice(idx, 1);
    showToast(`Đã bỏ "${movie.title}" khỏi tủ phim.`);
  } else {
    state.watchlist.push({
      id: movie.id,
      title: movie.title,
      poster: movie.poster,
      rating: movie.rating,
      year: movie.year
    });
    showToast(`Đã thêm "${movie.title}" vào tủ phim!`);
  }
  localStorage.setItem("4kluxury_watchlist", JSON.stringify(state.watchlist));
  updateWatchlistBadge();
}

function updateWatchlistBadge() {
  const countBadge = document.getElementById("watchlist-count");
  const mobBadge = document.getElementById("mob-watchlist-count");
  if (countBadge) countBadge.textContent = state.watchlist.length;
  if (mobBadge) mobBadge.textContent = state.watchlist.length;
}

function renderWatchlistItems() {
  const listEl = document.getElementById("watchlist-items-list");
  if (!listEl) return;

  if (state.watchlist.length === 0) {
    listEl.innerHTML = `<div style="padding: 40px 20px; text-align: center; color: var(--text-dim);"><p>Tủ phim của bạn chưa có gì. Nhấn biểu tượng dấu trang để lưu phim muốn xem!</p></div>`;
    return;
  }

  listEl.innerHTML = state.watchlist.map(item => `
    <div class="drawer-film-card" data-id="${item.id}">
      <img src="${item.poster}" alt="${item.title}" class="drawer-thumb">
      <div class="drawer-info">
        <h5 class="drawer-name">${item.title}</h5>
        <div class="drawer-actions">
          <span style="font-size: 11px; color: var(--text-dim);">⭐ ${item.rating} • ${item.year}</span>
          <button class="btn-play-drawer" data-id="${item.id}">Xem</button>
          <button class="btn-del-drawer" data-id="${item.id}" title="Xóa"><i data-lucide="trash-2" style="width: 14px; height: 14px;"></i></button>
        </div>
      </div>
    </div>
  `).join("");

  listEl.querySelectorAll(".btn-play-drawer").forEach(b => {
    b.addEventListener("click", () => {
      playTactileClick();
      const mId = b.getAttribute("data-id");
      const movie = findMovieById(mId);
      if (movie) {
        document.getElementById("watchlist-drawer").classList.remove("open");
        scrollToPlayer(movie);
      }
    });
  });

  listEl.querySelectorAll(".btn-del-drawer").forEach(b => {
    b.addEventListener("click", () => {
      playTactileClick();
      const mId = b.getAttribute("data-id");
      const movie = findMovieById(mId);
      if (movie) {
        toggleWatchlist(movie);
        renderWatchlistItems();
      }
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

// =====================================================================
// 14. MOBILE BOTTOM SPATIAL NAV DOCK
// =====================================================================
function initMobileBottomDock() {
  const dockItems = document.querySelectorAll("#mobile-bottom-dock .mob-dock-item");
  const drawer = document.getElementById("watchlist-drawer");

  dockItems.forEach(item => {
    item.addEventListener("click", (e) => {
      playTactileClick();
      if (item.id === "mob-watchlist-trigger") {
        e.preventDefault();
        if (drawer) {
          drawer.classList.add("open");
          renderWatchlistItems();
        }
        return;
      }

      dockItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const sections = [
    { id: "home", nav: "home" },
    { id: "player-section", nav: "player" },
    { id: "series-section", nav: "series" },
    { id: "cinema-section", nav: "cinema" }
  ];

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 200;
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = document.getElementById(sections[i].id);
      if (sec && sec.offsetTop <= scrollPos) {
        dockItems.forEach(item => {
          if (item.getAttribute("data-nav") === sections[i].nav) {
            dockItems.forEach(x => x.classList.remove("active"));
            item.classList.add("active");
          }
        });
        break;
      }
    }
  }, { passive: true });
}

// =====================================================================
// 15. GLOBAL INSTANT SEARCH
// =====================================================================
function initGlobalSearch() {
  const input = document.getElementById("global-search-input");
  const suggestions = document.getElementById("search-suggestions");

  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
    if (e.key === "Escape") {
      suggestions?.classList.remove("show");
    }
  });

  if (!input || !suggestions) return;

  const allMovies = [...APP_DATA.spotlights, ...APP_DATA.seriesList, ...APP_DATA.cinemaList];

  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      suggestions.classList.remove("show");
      suggestions.innerHTML = "";
      return;
    }

    const matches = allMovies.filter(m => 
      m.title.toLowerCase().includes(q) || 
      (m.originalTitle && m.originalTitle.toLowerCase().includes(q))
    ).slice(0, 5);

    if (matches.length === 0) {
      suggestions.innerHTML = `<div style="padding: 14px; color: var(--text-dim); font-size: 12px; text-align: center;">Không tìm thấy phim "${escapeHTML(q)}"</div>`;
      suggestions.classList.add("show");
      return;
    }

    suggestions.innerHTML = matches.map(m => `
      <div class="search-sug-item" data-id="${m.id}">
        <img src="${m.poster}" alt="${m.title}" class="search-sug-thumb">
        <div class="search-sug-info">
          <h4>${m.title}</h4>
          <span>⭐ ${m.rating} • ${m.year} • ${m.quality || '4K'}</span>
        </div>
      </div>
    `).join("");

    suggestions.classList.add("show");

    suggestions.querySelectorAll(".search-sug-item").forEach(item => {
      item.addEventListener("click", () => {
        playTactileClick();
        const id = item.getAttribute("data-id");
        const found = findMovieById(id);
        if (found) {
          scrollToPlayer(found);
          suggestions.classList.remove("show");
          input.value = "";
        }
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!document.getElementById("dock-search")?.contains(e.target)) {
      suggestions?.classList.remove("show");
    }
  });
}

// =====================================================================
// 16. FLOATING STICKY MINI-PLAYER (PiP)
// =====================================================================
function initStickyPiPPlayer() {
  const pip = document.getElementById("sticky-pip-player");
  const playerSection = document.getElementById("player-section");
  const pipPlayBtn = document.getElementById("pip-btn-play");
  const pipExpandBtn = document.getElementById("pip-btn-expand");
  const pipCloseBtn = document.getElementById("pip-btn-close");

  if (!pip || !playerSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && !state.isPipDismissed) {
        pip.classList.add("visible");
      } else {
        pip.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  observer.observe(playerSection);

  if (pipPlayBtn) {
    pipPlayBtn.addEventListener("click", () => {
      const centerPlayBtn = document.getElementById("btn-center-play");
      if (centerPlayBtn) centerPlayBtn.click();
    });
  }

  if (pipExpandBtn) {
    pipExpandBtn.addEventListener("click", () => {
      playTactileClick();
      playerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (pipCloseBtn) {
    pipCloseBtn.addEventListener("click", () => {
      playTactileClick();
      state.isPipDismissed = true;
      pip.classList.remove("visible");
    });
  }
}

// =====================================================================
// 17. REAL-TIME LIVE TRAFFIC TICKER
// =====================================================================
function initTrafficTicker() {
  const countEl = document.getElementById("traffic-count");
  if (!countEl) return;

  let baseCount = 14820;
  setInterval(() => {
    const delta = Math.floor(Math.random() * 9) - 4;
    baseCount = Math.max(12000, baseCount + delta);
    countEl.textContent = baseCount.toLocaleString("vi-VN");
  }, 3500);
}

// =====================================================================
// 18. THEATER MODE (TẮT ĐÈN RẠP CHIẾU)
// =====================================================================
function initTheaterMode() {
  const toggleBtn1 = document.getElementById("theater-toggle-btn");
  const toggleBtn2 = document.getElementById("btn-toggle-lights");

  const toggleTheater = () => {
    playTactileClick();
    state.isTheaterMode = !state.isTheaterMode;
    document.body.classList.toggle("theater-mode-dim", state.isTheaterMode);
    if (toggleBtn1) toggleBtn1.classList.toggle("active", state.isTheaterMode);
    showToast(state.isTheaterMode ? "Đã tắt đèn: Chế độ rạp chiếu phim kích hoạt!" : "Đã bật đèn trở lại.");
  };

  if (toggleBtn1) toggleBtn1.addEventListener("click", toggleTheater);
  if (toggleBtn2) toggleBtn2.addEventListener("click", toggleTheater);
}

// =====================================================================
// 19. TACTILE ACOUSTIC SYNTHESIZER (WEB AUDIO API)
// =====================================================================
function getAudioContext() {
  if (!state.audioContext) {
    state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (state.audioContext.state === "suspended") {
    state.audioContext.resume().catch(() => {});
  }
  return state.audioContext;
}

function playTactileClick() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(950, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.035);
  } catch (e) {}
}

function playEpisodeChime(epNumber) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
    const freq = notes[(epNumber - 1) % notes.length];

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
}

function playServerSwitchChirp() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1280, ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.09, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {}
}

function playHeartChime() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    [523.25, 659.25].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.06);
      gain.gain.setValueAtTime(0.1, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.12);
    });
  } catch (e) {}
}

function playFilterPillPop() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(850, ctx.currentTime + 0.03);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) {}
}

function playCinemaChime() {
  try {
    const ctx = getAudioContext();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = "sine";
    osc2.type = "triangle";
    osc1.frequency.setValueAtTime(261.63, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(523.25, ctx.currentTime + 0.6);
    osc2.frequency.setValueAtTime(329.63, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.6);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 1.2);
    osc2.stop(ctx.currentTime + 1.2);
  } catch (err) {}
}

function triggerThxBoomEffect() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(28, ctx.currentTime + 1.4);

    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.6);

    const stage = document.getElementById("player-stage-box");
    if (stage) {
      stage.style.animation = "stageShake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97)";
      setTimeout(() => stage.style.animation = "", 600);
    }
    showToast("⚡ THX SUB-BASS BOOM KÍCH HOẠT! Âm trầm rung rạp chiếu.");
  } catch (err) {
    showToast("⚡ THX BOOM: Âm thanh rạp chiếu chuẩn IMAX kích hoạt!");
  }
}

function initAudioAmbience() {
  const btn = document.getElementById("sound-ambience-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    state.isSoundAmbientOn = !state.isSoundAmbientOn;
    btn.classList.toggle("active", state.isSoundAmbientOn);
    if (state.isSoundAmbientOn) {
      playCinemaChime();
      showToast("Đã kích hoạt mô phỏng âm thanh vòm Dolby Atmos");
    } else {
      showToast("Đã tắt âm thanh không gian");
    }
  });
}

// =====================================================================
// 20. TOAST NOTIFICATION HUB
// =====================================================================
function showToast(message) {
  const hub = document.getElementById("toast-hub");
  if (!hub) return;

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.textContent = message;

  hub.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.4s ease";
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }
  }, 3200);
}

// =====================================================================
// 21. SUPER ADMIN & MODAL SYSTEM INTEGRATION
// =====================================================================
window.openAdminPanel = async function() {
  if (window.Auth?.activeKeyData?.isAdmin) {
    if (window.Admin?.open) window.Admin.open();
    return;
  }
  const key = prompt('🔑 NHẬP KEY QUẢN TRỊ VIÊN (ADMIN MASTER KEY):', '');
  if (!key) return;
  try {
    const res = await API.activate(key.trim(), '@mnhutdznecon', Auth.getDeviceId());
    if (res.success && res.isAdmin) {
      await SessionVault.save(res);
      Auth.unlockApp(res);
      triggerThxBoomEffect();
      alert('👑 Xin chào Super Admin mnhut! Xác thực thành công.');
      if (window.Admin?.open) window.Admin.open();
    } else {
      alert(res.message || 'Key Admin không chính xác!');
    }
  } catch (err) {
    alert('Lỗi xác thực: ' + err.message);
  }
};

window.openDownloadModal = function() {
  const modal = document.getElementById('downloadAppModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.setProperty('display', 'flex', 'important');
    modal.style.setProperty('visibility', 'visible', 'important');
    modal.style.setProperty('opacity', '1', 'important');
    modal.style.setProperty('pointer-events', 'auto', 'important');
  }
  if (typeof window.refreshPublicDownloads === 'function') window.refreshPublicDownloads();
};

window.closeDownloadModal = function(e) {
  if (!e || e.target.id === 'downloadAppModal' || e.target.closest?.('.modal-close-btn') || e.target.closest?.('.btn-close-modal')) {
    window.hideDownloadModal();
  }
};

window.hideDownloadModal = function() {
  const modal = document.getElementById('downloadAppModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.setProperty('display', 'none', 'important');
    modal.style.setProperty('visibility', 'hidden', 'important');
    modal.style.setProperty('opacity', '0', 'important');
    modal.style.setProperty('pointer-events', 'none', 'important');
  }
};

window.openFeedbackModal = function() {
  const modal = document.getElementById('feedbackModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.setProperty('display', 'flex', 'important');
  }
  if (window.Feedback?.load) window.Feedback.load();
};

window.closeFeedbackModal = function(e) {
  if (!e || e.target.id === 'feedbackModal' || e.target.closest?.('.modal-close-btn')) {
    window.hideFeedbackModal();
  }
};

window.hideFeedbackModal = function() {
  const modal = document.getElementById('feedbackModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.setProperty('display', 'none', 'important');
  }
};

// Global escape key listener to close any open modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.hideDownloadModal?.();
    window.hideFeedbackModal?.();
    if (typeof hideAdminModal === 'function') hideAdminModal();
    if (typeof hideEditExpiryModal === 'function') hideEditExpiryModal();
    document.querySelectorAll('.modal-overlay:not(.hidden)').forEach(modal => {
      modal.classList.add('hidden');
      modal.style.setProperty('display', 'none', 'important');
    });
  }
});

// Legacy compatibility object
window.App = {
  syncPageScrollLock() {},
  init() {}
};
