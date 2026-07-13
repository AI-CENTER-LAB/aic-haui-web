# AIC Website Design Guide

> Project: AIC Website, Artificial Intelligence Research and Application Center, Hanoi University of Industry
> Version: v0.3 working
> Purpose: Working design contract for Stitch, Cursor, Claude, Copilot, Bolt, Lovable, or any AI coding assistant.

---

## 0. How to use this file

Use this file before generating UI, refining the Stitch prototype, or coding the React/Vite website.

Primary rule:

```text
AIC must feel official, academic, trustworthy, modern, and research-oriented.
The site may borrow visual craft from refined Vietnamese showcase websites, but the final identity must remain AIC / HaUI academic-tech, not tourism, crypto, gaming, cyberpunk, or generic AI SaaS.
```

Vibe-code rule:

```text
Prototype fast, but keep these rules locked:
- Top hero media is the first dynamic visual about AIC research center.
- The 03:20 introduction video is a separate section below the hero/about content.
- Navigation active state is a rounded pill/bubble, not an underline.
- Images, video frames, maps, and cards should be visibly rounded and premium.
- Media can be demo media in prototype, but the UI must not show placeholder/demo labels.
```

---

## 1. Product direction

AIC website is a market / landing website for the Artificial Intelligence Research and Application Center under the School of Information and Communications Technology, Hanoi University of Industry.

The website must communicate:

- Academic credibility
- AI research capability
- Applied technology and cooperation potential
- Student lab energy
- Clear contact, partnership, and participation paths
- Fast, polished, responsive user experience

### Core positioning

```text
A clean academic-tech website for a university AI research and application center.
Blue-white institutional base, dynamic first hero, subtle warm accents, rounded premium media, clear structure, lightweight motion, real lab media later, fast loading.
```

### Primary audiences

- University leaders and lecturers
- Research partners
- Business partners
- International collaborators
- Students interested in AI labs
- Mentors and reviewers evaluating the website

### V1 scope

V1 is a static market website. Do not add backend complexity unless explicitly approved.

Allowed in V1:

```text
React + Vite + TypeScript
Tailwind CSS
shadcn/ui
Static data files
Lightweight animation
Optimized images and video
Docker / Nginx deployment
```

Do not add in V1 unless approved:

```text
Backend API
CMS
Authentication
Chatbot LLM
Admin dashboard
Database
Complex contact automation
News publishing workflow
```

---

## 2. Reference synthesis

### 2.1 AIC / HaUI requirement source

The website must follow the AIC market website scope:

```text
Header navigation:
- Về chúng tôi
- Tổ chức
- Nghiên cứu
- Hợp tác
- Dành cho sinh viên
- Liên hệ

Homepage:
- Dynamic image / short visual about the center + center name + slogan
- About AIC
- Vision and mission
- 03:20 introduction video section
- Organization preview
- Research preview
- Student lab preview
- Cooperation CTA
- Contact preview

Other pages:
- Organization
- Research / Activities
- Cooperation
- Students
- Contact
```

### 2.2 What to borrow from the Viet Heritage / Di Sản Việt reference

Borrow these qualities:

- Strong first-fold visual impact
- Large atmospheric hero media
- Readable overlay over image/video
- Generous spacing
- Warm premium accents
- Refined rounded pills for navigation/interactions
- Soft tactile depth
- Calm, crafted, high-fidelity feel

Do not borrow these as dominant identity:

- Full heritage / tourism mood
- Earth-tone dominance
- Serif-heavy editorial typography
- Decorative cultural patterns as main visual language
- Underline-only active navigation

### 2.3 Final visual formula

```text
SICT institutional clarity
+ AIC academic-tech polish
+ dynamic research-center hero
+ rounded premium media frames
+ pill navigation inspired by refined showcase UI
+ subtle Vietnamese warmth
+ lightweight motion
```

---

## 3. Sitemap and routes

Header navigation must include these primary items:

```text
Trang chủ
Về chúng tôi
Tổ chức
Nghiên cứu
Hợp tác
Dành cho sinh viên
Liên hệ
```

Recommended routes:

```text
/               Trang chủ
/ve-chung-toi   Về chúng tôi
/to-chuc        Tổ chức
/nghien-cuu     Nghiên cứu / Hoạt động
/hop-tac        Hợp tác
/sinh-vien      Dành cho sinh viên
/lien-he        Liên hệ
```

Header desktop layout:

```text
[AIC Logo] [Trang chủ] [Về chúng tôi] [Tổ chức] [Nghiên cứu] [Hợp tác] [Dành cho sinh viên] [Liên hệ] [CTA]
```

Recommended header CTA:

```text
Liên hệ hợp tác
```

Alternative CTA for student-focused demo:

```text
Tham gia AIC
```

---

## 4. Homepage structure

The homepage must follow this order:

```text
1. Header
2. Top Hero: dynamic image / animated visual / short background video about AIC research center
3. About summary
4. Vision and mission
5. Separate 03:20 introduction video section
6. Organization preview
7. Research preview
8. Student labs preview
9. Cooperation CTA
10. Contact preview
11. Footer
```

### 4.1 Important media separation

Do not mix the two video/media concepts.

```text
Top hero media:
- First visual impression of the website.
- Animated image, motion-rich visual, or short silent background video about the AIC research center.
- Combined with center name, slogan, and CTA.
- Should not look like a video player.
- Should not display a play button as the main meaning.

03:20 introduction video:
- Separate section below the hero/about area.
- Has a video frame, play button, poster image, and short context.
- It is not the top hero.
```

### 4.2 Hero content

Hero must include:

- Label: `AIC · HaUI · SICT`
- Main title: `Trung tâm Nghiên cứu và Ứng dụng Trí tuệ nhân tạo`
- Short slogan / description: AIC is under SICT, Hanoi University of Industry
- Primary CTA: `Khám phá trung tâm`
- Secondary CTA: `Dành cho sinh viên` or `Liên hệ hợp tác`
- Dynamic media visual: lab / center image, short center clip, or motion-rich academic-tech visual

Hero pattern options:

```text
Option A: Full-width cinematic hero background video with navy overlay.
Option B: Split hero, left text + right rounded video/image frame.
Option C: Large framed hero media card inside dark navy hero section.
```

Preferred for current prototype:

```text
Large cinematic top hero with dynamic center visual, navy overlay, centered/left-aligned title, and pill CTA buttons.
```

Hero style rules:

```text
Hero should feel alive immediately.
Hero should be stronger than a static university banner.
Hero should remain official and readable.
Hero should not become a generic AI SaaS splash screen.
```

---

## 5. Page-level content

### 5.1 About page

Required content:

- Short introduction
- Unit relationship: under SICT, Hanoi University of Industry
- Vision
- Mission
- Core values
- What AIC does: research, application, cooperation, student labs

Official copy:

```text
Trung tâm Nghiên cứu và Ứng dụng Trí tuệ Nhân tạo là đơn vị trực thuộc Trường Công nghệ Thông tin và Truyền thông - Đại học Công nghiệp Hà Nội.
```

Vision:

```text
Trở thành đơn vị nghiên cứu mở, kết nối các nhà khoa học trong nước và quốc tế nhằm thúc đẩy nghiên cứu, đổi mới sáng tạo và ứng dụng Trí tuệ nhân tạo, Công nghệ thông tin.
```

Mission:

```text
Thúc đẩy nghiên cứu, đổi mới sáng tạo và ứng dụng Trí tuệ nhân tạo - Công nghệ thông tin; kết nối nhà trường, doanh nghiệp và cộng đồng để tạo ra các giải pháp có giá trị cho xã hội.
```

### 5.2 Organization page

Required groups:

```text
Ban giám đốc
Hội đồng khoa học & tư vấn
Trưởng Lab nghiên cứu giáo viên
Thủ lĩnh Lab sinh viên và các chỉ huy
```

Required people placeholders from brief:

Directors:

```text
Cô An
Thầy Hợp
Thầy Cường
```

Teacher lab leaders:

```text
Cô Hồng Lan
Thầy Hà
Thầy Mạnh Hùng
```

Student lab leaders / commanders:

```text
Đông Hưng
Nhã
Niên
Long Nhật
Bảo
Quân
```

Person card content:

```text
Photo
Name
Role
Email
Short bio
Group label
```

Rules:

```text
Never invent personal information.
Do not create fake official portraits for real people.
If role/email/bio is unknown, hide the row or use a neutral short updating state only where necessary.
For high-fidelity prototype, avoid visible “placeholder/demo” labels on media.
```

### 5.3 Research / Activities page

Required sections:

```text
1. Page hero
2. Research directions
3. Research results
4. Seven research groups
5. CTA: đề xuất hợp tác nghiên cứu
```

Research card content:

```text
Image or icon
Title
1-2 sentence description
Tags
CTA
```

Seven research groups must be supported even if content is still being collected.

### 5.4 Cooperation page

Required sections:

```text
Hợp tác doanh nghiệp
Hợp tác nghiên cứu
Hợp tác quốc tế
Chuyển giao công nghệ
Đối tác
Đề xuất hợp tác
```

Recommended layout:

```text
Page hero
Cooperation type grid
Technology transfer highlight panel
Partner logo strip / partner area
Proposal CTA section
Contact block
```

Do not invent official partner logos. Use neutral logo blocks or generic partner-card treatment until official logos exist.

### 5.5 Students page

Required sections:

```text
AIC Foundry Lab
AIC Innovation Lab
Thực tập nghiên cứu
Tuyển cộng tác viên
Quy trình trở thành thành viên của hai lab
```

Lab positioning:

```text
AIC Foundry Lab: research, publication, invention, academic development
AIC Innovation Lab: product, startup, applied AI, demos, real-world projects
```

Recruitment flow:

```text
1. Tìm hiểu lab
2. Gửi thông tin đăng ký
3. Phỏng vấn / trao đổi định hướng
4. Tham gia thử thách hoặc dự án nhỏ
5. Trở thành thành viên / cộng tác viên
```

Students page can be more energetic than the rest of the site, but it must remain official.

### 5.6 Contact page

Required information:

```text
Trung tâm Nghiên cứu và Ứng dụng Trí tuệ nhân tạo
Văn phòng: Phòng 1201, Tòa nhà A1, Đại học Công nghiệp Hà Nội, số 298, Đường Cầu Diễn, Phường Tây Tựu, Thành phố Hà Nội.
Phòng thí nghiệm 1: Phòng 1504, Tòa nhà A1, Đại học Công nghiệp Hà Nội, số 298, Đường Cầu Diễn, Phường Tây Tựu, Thành phố Hà Nội.
Email: aic-sict@haui.edu.vn
Map visual / map embed
```

Recommended layout:

```text
Left: contact cards
Right: rounded map frame
Bottom: cooperation CTA / student CTA
```

---

## 6. Visual direction

### Style keywords

```text
academic-tech
official
trustworthy
research-oriented
student-friendly
Vietnamese institutional
blue-white base
warm accent
rounded premium media
pill navigation
real lab media later
minimal motion
high readability
fast-loading
```

### Mood

The site should feel:

```text
Clear like a university website
Polished like a research center landing page
Warm like a real academic community
Technical without looking cold
Visually crafted without becoming decorative
```

### Avoid

```text
crypto landing page
startup hype overload
gaming UI
cyberpunk UI
excessive neon glow
heavy 3D robot visuals
busy particle effects
too many gradients
AI stock-image overload
long text walls
overly cultural tourism tone
serif-only editorial style
underline-only navigation active states
sharp default image corners
```

---

## 7. Design tokens

### 7.1 Colors

Primary institutional palette:

```text
Primary Navy        #0B2A4A
HaUI Blue           #0F5EA8
Tech Blue           #1D9BF0
Soft Blue           #EAF5FF
Ice Background      #F6FAFF
White               #FFFFFF
```

Warm accent palette:

```text
Heritage Gold       #9B7A3A
Golden Light        #F6D99B
Bronze Warm         #776F62
Warm Cream          #FFFAF0
Light Beige         #F8F1E3
```

Text and neutral palette:

```text
Text Strong         #102033
Text Body           #334155
Text Muted          #64748B
Border              #D8E3F0
Border Warm         #E5E7EB
Deep Charcoal       #2D2820
```

Usage ratio:

```text
Blue / navy: 55%
White / ice background: 25%
Warm cream / beige: 12%
Gold / bronze accents: 5%
Semantic colors: 3%
```

Do not let gold/brown become the dominant identity.

### 7.2 Typography

Typography must prioritize Vietnamese readability.

Recommended:

```text
Primary font: Be Vietnam Pro
Fallback: Inter, system-ui, sans-serif
Optional display accent: Space Grotesk for stat numbers, labels, or short technical headings only
Optional editorial accent: Georgia / serif for quote blocks only
```

Type scale:

```text
Display / Hero title
Desktop: 56-72px, line-height 1.05
Tablet: 44-56px
Mobile: 34-42px
Weight: 700-800

Page title
Desktop: 44-56px
Mobile: 32-40px
Weight: 700

Section title
Desktop: 32-40px
Mobile: 26-32px
Weight: 700

Card title
20-24px
Weight: 650-700

Body large
18px, line-height 1.75

Body
16px, line-height 1.7

Small / metadata
13-14px, line-height 1.5

Eyebrow / label
12-13px, uppercase optional, tracking-wide
```

Avoid relying on nonstandard local fonts unless the files and license are available.

### 7.3 Radius scale

This is important for the current design direction.

```text
Small controls: 10-12px
Utility buttons: 14-16px
Content cards: 20-24px
Research / lab image cards: 24px
Person cards: 20-24px
Person photo containers: 20-24px or full avatar circle
Hero media frame: 28-32px if framed
Video introduction frame: 28-32px
Contact map frame: 28px
Large CTA panels: 28-32px
Pill buttons / nav pills: 9999px
```

Rule:

```text
All images must be clipped inside rounded containers using overflow hidden.
No image should have sharp visible corners unless it is a full-bleed hero background.
```

Tailwind config warning:

```text
Do not redefine rounded-full as 0.75rem or any small radius.
rounded-full must remain 9999px.
```

Recommended Tailwind radius tokens:

```ts
borderRadius: {
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  "2xl": "28px",
  "3xl": "32px",
  full: "9999px",
}
```

### 7.4 Shadows

Use soft shadows only.

```css
--shadow-soft: 0 20px 60px rgba(15, 94, 168, 0.1);
--shadow-card: 0 12px 34px rgba(11, 42, 74, 0.08);
--shadow-float: 0 18px 44px rgba(7, 23, 28, 0.16);
--shadow-pill-dark:
  inset 0 0 0 1px rgba(255, 255, 255, 0.14), inset 1.5px 2.5px 0 -2px rgba(255, 255, 255, 0.72),
  inset -2px -2px 0 -2px rgba(255, 255, 255, 0.44), 0 6px 16px rgba(0, 0, 0, 0.1);
```

Avoid heavy black shadows and stacked shadow soup.

---

## 8. Layout system

Base unit: `8px`.

```text
Micro spacing: 8px
Small spacing: 12px
Base spacing: 16px
Card internal spacing: 24px
Section internal spacing: 32px
Section gap: 48px
Large section rhythm: 64px
Hero / landing rhythm: 80-96px
```

Container:

```text
Max width: 1200px or 1280px
Desktop horizontal padding: 32px
Tablet horizontal padding: 24px
Mobile horizontal padding: 16px
```

Section spacing:

```text
Desktop section padding: 96px top/bottom
Tablet section padding: 72px
Mobile section padding: 56px
```

Grid rules:

```text
Hero: full-width cinematic or 55/45 split
Card grids: 3 columns desktop, 2 tablet, 1 mobile
People cards: 3 columns desktop, 2 tablet, 1 mobile
Research groups: 3-column grid or controlled bento layout
Partner logos: horizontal strip, responsive wrap
Contact page: 45/55 or 50/50 split
```

---

## 9. Component system

### 9.1 Header and navigation

Purpose: Clear institutional navigation with refined interaction.

Requirements:

- Sticky top header
- AIC logo left
- Full navigation desktop
- CTA on right
- Mobile menu with drawer or dropdown
- Active state must be a pill/bubble, not an underline

Header style:

```text
Height: 72-80px
Border bottom: 1px solid soft blue-gray when on light background
Backdrop blur: optional and subtle
Mobile touch target: 44px minimum
```

Active navigation rule:

```text
Do not use underline-only active navigation.
Every nav item should have padding and rounded-full shape.
Active state must be a visible rounded pill/bubble.
Hover state should be a softer pill.
```

Dark / hero header nav pill:

```text
Background: rgba(255, 255, 255, 0.12)
Text: #F6D99B or white depending on contrast
Padding: 8px 12px or 8px 14px
Radius: 9999px
Shadow: soft inset glass highlight
No underline
```

Light header nav pill:

```text
Background: #EAF5FF or white
Text: #0B2A4A / #0F5EA8
Border: 1px solid #D8E3F0
Radius: 9999px
No underline
```

Tailwind dark nav example:

```tsx
<a className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white data-[active=true]:bg-white/15 data-[active=true]:text-[#F6D99B] data-[active=true]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),inset_1.5px_2.5px_0_-2px_rgba(255,255,255,0.72),inset_-2px_-2px_0_-2px_rgba(255,255,255,0.44)]">
  Về chúng tôi
</a>
```

Tailwind light nav example:

```tsx
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-800 data-[active=true]:bg-blue-50 data-[active=true]:text-blue-900 data-[active=true]:ring-1 data-[active=true]:ring-blue-100">
  Về chúng tôi
</a>
```

### 9.2 HeroSection

Purpose: First impression, explain what AIC is, and route users to action.

Must include:

- `AIC · HaUI · SICT`
- Main title
- Short description
- Primary CTA
- Secondary CTA
- Dynamic hero media about AIC research center

Acceptable hero motion:

```text
Short silent background video
Motion-rich image composition
Slow moving gradient/overlay
Subtle AI grid movement
Gentle parallax on image frame
Text reveal on initial load
```

Do not add:

```text
Full-screen heavy particle engine
3D robot model
Loud neon glow
Auto-playing audio
Video player controls in top hero
```

### 9.3 VideoIntroSection

Purpose: Dedicated section for the 03:20 introduction video.

Content:

```text
Video frame for 03:20 intro video
Poster image
Play button
Short title
1-sentence context
CTA to watch / contact
```

Video frame style:

```text
16:9 aspect ratio
Rounded 28-32px
Overflow hidden
Soft border
Soft shadow
No visible placeholder/demo label
```

Video rules:

```text
Use .webm for optimized video
Provide poster image as .webp
Do not autoplay with sound
Use preload="metadata"
Show controls unless demo requires silent background clip
Lazy load below the fold when possible
```

### 9.4 SectionHeading

Reusable component:

```ts
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};
```

Style:

```text
Eyebrow: uppercase, 12-13px, tracking-wide, blue or gold
Title: 32-40px desktop, 26-32px mobile
Description: muted, max-width 680px
```

### 9.5 Button

Variants:

```text
primary: navy / blue filled
secondary: white with blue border
ghost: transparent with blue text
heritage: gold accent, use sparingly
link: inline arrow link
```

CTA hierarchy:

```text
One primary CTA per section maximum.
Secondary CTA optional.
```

Button shape:

```text
Height: 44-48px
Radius: 9999px for main CTAs
Padding: 16-24px horizontal
```

### 9.6 Card

Base style:

```text
White or light beige background
1px border #D8E3F0 / #E5E7EB
Radius 20-24px
Padding 24-32px
Soft hover lift
Icon / image area
Title
Short description
Optional CTA
```

Hover:

```text
translateY(-4px)
border color accent blue
shadow increase slightly
transition 200-280ms
```

### 9.7 MediaFrame

Use this conceptual component for images, video poster, lab photos, research images, and maps.

```ts
type MediaFrameProps = {
  src: string;
  alt: string;
  ratio?: "16:9" | "4:3" | "1:1" | "4:5" | "21:9";
  radius?: "xl" | "2xl" | "3xl";
};
```

Rules:

```text
Use overflow hidden.
Use object-cover for photos.
Use stable aspect ratios.
Do not show sharp image corners.
Use hover scale very subtly only when useful.
```

Recommended aspect ratios:

```text
Top hero background: 16:9, 21:9, or full viewport crop
Hero framed media: 16:9 or 4:3
03:20 intro video: 16:9
People portraits: 1:1 or 4:5
Research cards: 4:3
Lab images: 16:9 or 4:3
Map: 16:9
Partner logos: flexible, do not distort
```

### 9.8 PersonCard

Used for directors, teacher lab leaders, student leaders.

Content:

```text
Photo
Name
Role
Email
Short bio
Group label
```

Layout:

```text
Directors: larger cards, 3-column desktop
Teacher leaders: 3-column cards
Student leaders: compact cards or horizontal group grid
```

### 9.9 ResearchCard

Content:

```text
Image or icon
Title
Short description
Tags
CTA
```

Research groups should support exactly 7 items in the data layer.

### 9.10 LabCard

Used for AIC Foundry Lab and AIC Innovation Lab.

Visual distinction:

```text
Foundry Lab: navy + gold accent, research and publication mood
Innovation Lab: blue + cyan accent, product and applied AI mood
```

### 9.11 CooperationCard

Types:

```text
Doanh nghiệp
Nghiên cứu
Quốc tế
Chuyển giao công nghệ
Đối tác
Đề xuất hợp tác
```

Each card:

```text
Icon
Title
1-2 sentence description
CTA
```

### 9.12 ContactCard and MapFrame

ContactCard content:

```text
Icon
Label
Primary text
Secondary text
Link when applicable
```

Map frame:

```text
Rounded 28px
Border 1px solid soft blue-gray
No heavy shadow
Use map visual or embed
No visible placeholder/demo label in prototype
```

### 9.13 ProcessTimeline

Used for student recruitment.

```text
5 steps
Number badge
Title
Short description
Mobile: vertical timeline
Desktop: horizontal or vertical alternating timeline
```

---

## 10. Media and asset policy

### 10.1 Prototype media rule

```text
Prototype may use demo media, but the UI should look finished and presentation-ready.
Do not show visible text labels such as placeholder, demo, replace later, waiting for asset.
Do not invent official partner logos.
Do not create overly realistic fake portraits of real AIC people.
```

### 10.2 Production media rule

Use real AIC / HaUI / lab media whenever possible. Real photos increase credibility and reduce generic AI-template feeling.

Required final assets:

```text
AIC official logo
Hero lab / center image or short hero clip
03:20 introduction video
Video poster image
Director photos
Teacher lab leader photos
Student leader photos
Lab room photos
Research / activity photos
Partner logos
Map screenshot or map embed link
```

Recommended shot list:

```text
Wide shot of lab room
Team working at computers
Mentor / teacher discussion
Student presentation / demo
Close-up of AI dashboard / code / robotics / poster
Group photo
Short horizontal clips for website hero
Full 03:20 intro video for separate intro section
```

### 10.3 Image optimization

```text
PNG / JPG -> convert to .webp
Large hero images: 1600-2200px wide max
Card images: 800-1200px wide max
People images: 600-900px wide max
Use responsive srcset when possible
Add descriptive alt text
Lazy load non-critical images
```

### 10.4 Video optimization

```text
Primary format: .webm
Fallback if needed: .mp4
Use poster .webp
Compress video before deploy
Hero motion clip should be short, silent, looped, and lightweight
Full 03:20 video must be in the dedicated VideoIntroSection with controls
```

---

## 11. Motion guidelines

Animation should make content clearer, not noisier.

Allowed effects:

```text
Fade-up reveal on sections
Subtle card hover lift
Soft hero grid movement
Animated line / dots in background at low opacity
Text reveal on hero title
Logo strip slow marquee if partners exist
Video frame hover polish
```

Avoid:

```text
Complex 3D
Heavy particle engines
Excessive parallax
Autoplaying sound
Too many simultaneous animated components
Motion that distracts from content
```

Library rule:

```text
Use only one primary motion library: motion / framer-motion.
Magic UI / React Bits / 21st.dev may be used selectively for one or two polished blocks, not as visual clutter.
```

Reduced motion must be respected.

---

## 12. Responsive behavior

Breakpoints:

```text
Mobile: 320px-767px
Tablet: 768px-1023px
Desktop: 1024px+
Large desktop: 1440px+
```

Scaling:

```text
Hero H1: 36-42px mobile, 44-56px tablet, 56-72px desktop
Section padding: 56px mobile, 72px tablet, 96px desktop
Container padding: 16px mobile, 24px tablet, 32px desktop
Card grid: 1 column mobile, 2 columns tablet, 3 columns desktop
```

Mobile navigation:

```text
Clean menu button
Large tap targets
Pill-style active states inside menu
No horizontal overflow
No tiny text
```

Touch targets:

```text
Minimum interactive height: 44px
Minimum icon button size: 44px on mobile
Spacing between touch targets: at least 8px
```

---

## 13. Accessibility

Contrast:

```text
Do not place light text over busy image without overlay.
Use dark navy or charcoal for body text.
Use muted text only for secondary information.
Gold should not be used for small text on light background unless contrast is verified.
```

HTML semantics:

```text
One h1 per page
Use section landmarks where useful
Use nav for navigation
Use button for actions, a for links
Use alt text for meaningful images
Use aria-label for icon-only buttons
```

Keyboard:

```text
All interactive elements must be reachable by keyboard
Focus ring must be visible
Mobile menu must close with Escape
Skip link recommended
```

---

## 14. Implementation architecture

Stack:

```text
React
Vite
TypeScript
Tailwind CSS
shadcn/ui
lucide-react
motion or framer-motion
Docker
Nginx
```

Folder structure:

```text
src/components/layout      Header, Footer, PageLayout
src/components/sections    Hero, Video, ResearchPreview, etc.
src/components/cards       PersonCard, ResearchCard, LabCard
src/components/ui          shadcn primitives
src/data                   site, people, research, cooperation, students, contact
src/pages                  route-level pages
src/lib                    utilities
public/images              optimized images
public/videos              optimized videos
```

Data rule:

```text
All repeated content must live in src/data/*.ts.
Do not hardcode repeated people, research groups, labs, partners, or contact info inside components.
```

Suggested data schemas:

```ts
export type Person = {
  id: string;
  name: string;
  role: string;
  group: "director" | "advisor" | "teacher-lab" | "student-leader";
  email?: string;
  bio?: string;
  image?: string;
};

export type ResearchItem = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  status?: "ready" | "updating";
};

export type Lab = {
  id: "foundry" | "innovation";
  name: string;
  positioning: string;
  audience: string;
  activities: string[];
  cta: string;
};

export type CooperationItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  cta?: string;
};
```

---

## 15. Performance rules

Before demo:

```text
No massive unoptimized image
No uncompressed video in hero
No more than one motion library
No unused heavy UI package
No console errors
No layout shift from missing image dimensions
```

Recommended:

```text
Use webp images
Use webm video
Lazy load below-the-fold images
Preload only critical font / hero image/video poster if needed
Use local assets for production when possible
Run npm run build before every mentor review
```

Target:

```text
Homepage should feel fast on normal campus Wi-Fi.
Visual impression should be strong without using heavy effects.
```

---

## 16. Content style

Voice:

```text
Official
Clear
Concise
Research-oriented
Student-friendly
Confident but not hype-heavy
```

Vietnamese copy:

```text
Use Vietnamese as primary language.
Avoid overly long sentences.
Prefer direct headings.
Use “Trung tâm” consistently for AIC.
Use “Trí tuệ nhân tạo” in formal copy; “AI” may be used in labels or repeated contexts.
```

Section rule:

```text
Each section should communicate only 1-2 main ideas.
Each major section should have a visible next action or clear reason to continue scrolling.
```

Do not invent achievements, partner names, emails, bios, or research results.

---

## 17. QA checklist before mentor review

```text
[ ] Header has all primary navigation items
[ ] Active nav state is pill/bubble, not underline-only
[ ] Homepage hero explains what AIC is in under 10 seconds
[ ] Top hero has dynamic image / short motion visual about AIC center
[ ] Top hero is visually distinct from the 03:20 introduction video
[ ] CTA is visible above the fold
[ ] Images and media frames have rounded premium corners
[ ] Video intro section for 03:20 video is present below hero/about
[ ] About content includes introduction, vision, mission
[ ] Organization page has director, advisor, teacher lab, student leader sections
[ ] Research page supports research directions, results, and 7 groups
[ ] Cooperation page has all cooperation types
[ ] Students page includes Foundry Lab, Innovation Lab, internship, collaborator process
[ ] Contact page includes office, lab room, address, email, map
[ ] Each section has only 1-2 main ideas
[ ] Mobile layout does not break
[ ] Motion is subtle and supports content
[ ] No visible placeholder/demo media labels in UI
[ ] No heavy 3D or noisy particle effects
[ ] npm run build passes
[ ] Docker build plan exists
```

---

## 18. AI assistant prompt contract

Use this before major edits in Cursor / Claude / Copilot / Bolt:

```text
You are working on the AIC website. Follow DESIGN.md strictly.
The visual style is academic-tech with institutional blue-white identity and subtle Vietnamese warmth.
Use React + Vite + TypeScript + Tailwind CSS + shadcn/ui.
Keep repeated content in src/data/*.ts.
Do not add backend, CMS, chatbot, auth, or database for v1.

Critical UI rules:
- The top hero media is a dynamic animated image / short silent clip about the AIC research center.
- The 03:20 introduction video is a separate VideoIntroSection below the hero/about content.
- Active navigation must be a rounded pill/bubble, not underline-only.
- Images, video frames, maps, and cards must use rounded premium corners.
- Do not show visible placeholder/demo labels in the UI.

Use subtle motion only.
Optimize media for webp/webm.
Each section should contain 1-2 main ideas and a clear CTA or next step.
Before editing, list the files you plan to modify.
After editing, ensure npm run build passes.
```

---

## 19. Stitch refinement prompt

Use this to refine the current Stitch prototype:

```text
Refine the current AIC website prototype using DESIGN.md v0.3.

Critical corrections:
1. The top hero media is a dynamic animated image / short background video about the AIC research center.
2. The 03:20 introduction video is a separate section below the hero/about content.
3. Active navigation must be a rounded pill/bubble, not an underline.
4. Images, video frames, person photos, research images, lab images, and map frames must have more rounded premium corners.
5. Do not show visible placeholder/demo/replace-later labels in the UI.

Hero:
- Make the first visual impression more cinematic and alive.
- Use a large animated/motion-rich center visual with navy/blue overlay.
- Keep the AIC title, slogan, and CTA readable.
- The hero should not look like a 03:20 video player.

Navigation:
- Remove underline-only active states.
- Use rounded-full pill nav items.
- Active item uses frosted glass on dark hero or light blue pill on light header.
- Hover state is a softer pill.

Rounded media:
- Hero media frame: 28-32px radius if framed.
- Video intro frame: 28-32px radius.
- Research/lab image cards: 24px radius.
- Person photo containers: 20-24px radius.
- Contact map: 28px radius.
- Cards: 20-24px radius.
- Clip images with overflow hidden.

Visual direction:
- Academic-tech.
- Blue-white institutional identity.
- Subtle gold only for accent/CTA/nav active states.
- Keep official, polished, and suitable for Hanoi University of Industry.
- Do not make it look like crypto, gaming, cyberpunk, or generic AI SaaS.
```

---

## 20. Cursor starter prompt

Use this after prototype direction is approved:

```text
Read DESIGN.md first and follow it strictly.

Create the initial React Vite + TypeScript + Tailwind CSS structure for the AIC website.

Requirements:
- Use the sitemap and routes from DESIGN.md.
- Create layout components: Header, Footer, PageLayout.
- Create reusable components: SectionHeading, MediaFrame, PersonCard, ResearchCard, LabCard, CooperationCard, ContactCard, VideoIntroSection.
- Create pages: Home, About, Organization, Research, Cooperation, Students, Contact.
- Put repeated content in src/data/*.ts.
- Do not add backend, CMS, chatbot, auth, database, or complex forms.
- Keep the style academic-tech, blue-white, official, warm, modern, rounded, and fast.
- Top hero media and 03:20 intro video must be separate.
- Active nav must be pill/bubble, not underline.
- Use rounded premium media frames.
- Use only subtle motion.
- Before editing, list the files you plan to create or modify.
```

---

## 21. Design review questions

Ask mentors / teachers concrete questions instead of asking “đẹp chưa”.

```text
1. Style nên gần website SICT hơn hay hiện đại hơn bản này?
2. Hero đầu trang nên dùng video ngắn, ảnh động, hay ảnh lab có motion overlay?
3. Video giới thiệu 03:20 nên đặt ngay sau Về chúng tôi hay sau Tầm nhìn / Sứ mệnh?
4. Trang Nghiên cứu và Hoạt động gộp hay tách?
5. Có cần song ngữ Việt / Anh trong V1 không?
6. Có cần CMS/admin không, hay static content là đủ?
7. Danh sách ban giám đốc và BIO ai duyệt?
8. Danh sách 7 nhóm nghiên cứu chính xác là gì?
9. Phần hợp tác có logo đối tác chính thức chưa?
10. Có dùng map embed thật hay ảnh map tĩnh?
```
