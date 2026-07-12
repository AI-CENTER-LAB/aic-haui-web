# Content Integration

## Entry point

`src/content/site.ts` xuất một object theo type `SiteContent`. Hiện object dùng `emptySiteContent`, không chứa record giả.

## Workflow

1. Xác minh nội dung với người phụ trách.
2. Tạo object content mới trong `src/content` theo `src/content/types.ts`.
3. Thay export trong `src/content/site.ts`.
4. Chạy `npm test`, `npm run lint` và `npm run build`.
5. Kiểm tra desktop 1440px, tablet 768px và mobile 320px.

## Rules

- Không sửa component để nhập content.
- Không thêm record tạm, tên giả, số liệu ước đoán hoặc link chưa duyệt.
- Email phải nằm trong config; component tự tạo `mailto:`.
- Mảng rỗng tự hiện empty state ở development và ẩn ở production.
- `JoinProcess`, partner grid và CTA không render nếu chưa có dữ liệu/config thật.

## Checklist

- [ ] Tên, chức vụ, BIO và email đã được duyệt.
- [ ] Bảy nhóm nghiên cứu và kết quả đã được xác minh.
- [ ] Đối tác và logo có quyền sử dụng.
- [ ] Quy trình tham gia là bản chính thức.
- [ ] Địa chỉ, email và map URL chính xác.
- [ ] Không có nội dung nghiệp vụ mới trong `src/components` hoặc `src/pages`.
