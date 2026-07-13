import { PageContainer } from "../ui/PageContainer";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Link } from "react-router-dom";

const mockNews = [
  {
    id: "1",
    date: "12 Th08, 2026",
    title: "AIC công bố 3 bài báo khoa học tại hội nghị quốc tế",
    category: "Nghiên cứu",
  },
  {
    id: "2",
    date: "05 Th08, 2026",
    title: "Tuyển sinh thành viên Gen mới tham gia các nhóm nghiên cứu",
    category: "Tuyển sinh",
  },
  {
    id: "3",
    date: "28 Th07, 2026",
    title: "Seminar: Ứng dụng AI trong Xử lý ngôn ngữ tự nhiên",
    category: "Sự kiện",
  }
];

export function HomeNews() {
  return (
    <Section data-testid="home-news" className="bg-white">
      <PageContainer>
        <SectionHeading
          title="Tin tức & Sự kiện"
          description="Cập nhật những hoạt động nghiên cứu, hội thảo và tin tức mới nhất từ trung tâm."
          align="center"
          className="mb-10"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {mockNews.map((news) => (
            <Card key={news.id} className="group flex flex-col justify-between !rounded-xl border border-aic-line/60 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div>
                <div className="mb-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-aic-blue">{news.category}</span>
                  <span className="text-aic-muted">{news.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold leading-snug text-aic-navy transition-colors group-hover:text-aic-blue">
                  <Link to="#">{news.title}</Link>
                </h3>
              </div>
              <div className="mt-6">
                <span className="text-sm font-semibold text-aic-blue group-hover:underline">Xem chi tiết &rarr;</span>
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
