export const filterOutMieuConTrung = (sites) => {
  return sites.filter(site => 
    !site.name.includes("Di tích Miếu Cồn Trứng")
  );
};

// Tạo function để lọc bỏ các di tích không có hình ảnh
export const filterSitesWithImages = (sites) => {
  return sites.filter(site => site.image && site.image.trim() !== "");
};
