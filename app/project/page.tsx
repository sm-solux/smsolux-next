"use client";

import { GenerationSection } from "./Section";
import { TextBadge } from "../components/TextBade";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#0F1012] text-white selection:bg-[#8CE0F4]/30 overflow-x-hidden">
            <div className="relative z-10 container mx-auto px-10 md:px-16 pt-30 md:pt-24 pb-10 max-w-6xl">
                <div className="text-center mb-16 md:mb-24 space-y-4 md:space-y-6">
                    <div>
                        <TextBadge text="Solux Archive" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        HALL OF FAME
                    </h1>

                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed break-keep px-4">
                        수많은 밤을 지새우며 만들어낸 멤버들의 열정을 확인해보세요.
                    </p>
                </div>
                <div className="relative border-l border-white/10 ml-2 md:ml-12 space-y-12 md:space-y-20">
                    {archives.map((archive) => (
                        <GenerationSection key={archive.gen} archive={archive} />
                    ))}
                </div>
            </div>
        </main>
    );
}

type Project = {
    title: string;
    teamName: string;
    desc: string;
    award?: string;
    category: "Web" | "App" | "Game" | "Data";
    stacks: string[];
    image?: string;
    link: string;
};

type SemesterInfo = {
    term: string;
    projects: Project[];
};

type GenerationArchive = {
    gen: number;
    year: number;
    semesters: SemesterInfo[];
};

const archives: GenerationArchive[] = [
    {
        gen: 30,
        year: 2025,
        semesters: [
            {
                term: "2학기",
                projects: [
                    {
                        title: "SOLUX LIMS",
                        teamName: "LabMasters",
                        desc: "대학 연구실 시약 관리 및 안전 점검 자동화 솔루션",
                        award: "대상",
                        category: "Web",
                        stacks: ["Next.js", "Supabase", "Zustand"],
                        link: "https://solux-lims.vercel.app/",
                    },
                    {
                        title: "Smunity",
                        teamName: "DevCrew",
                        desc: "교내 개발자 네트워킹 및 스터디 매칭 플랫폼",
                        award: "최우수상",
                        category: "App",
                        stacks: ["Flutter", "Spring Boot"],
                        link: "https://solux-lims.vercel.app/",
                    },
                ],
            },
            {
                term: "1학기",
                projects: [
                    {
                        title: "Dungeon Solver",
                        teamName: "PixelArt",
                        desc: "알고리즘 문제를 풀며 던전을 탈출하는 기능성 게임",
                        award: "우수상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux-lims.vercel.app/",
                    },
                ],
            },
        ],
    },
    {
        gen: 29,
        year: 2024,
        semesters: [
            {
                term: "2학기",
                projects: [
                    {
                        title: "단 하나의 레시피",
                        teamName: "육각송",
                        desc: "따뜻한 이야기가 담긴, 누군가에겐 하나뿐일 레시피로 빵을 굽는 스토리 타이쿤 게임",
                        award: "대상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux.tistory.com/157",
                    },
                    {
                        title: "Abyss",
                        teamName: "iTen",
                        desc: "멀티플레이 공포 탈출게임",
                        award: "최우수상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux.tistory.com/158",
                    },
                    {
                        title: "DotheG",
                        teamName: "앱설런트",
                        desc: "친환경 활동도 게임처럼, 캐릭터 수집으로 만드는 나만의 에코 라이프!",
                        award: "우수상",
                        category: "App",
                        stacks: ["ReactNative", "SpringBoot", "MySQL"],
                        link: "https://solux.tistory.com/159",
                    },
                    {
                        title: "숙명137+",
                        teamName: "웹키비키",
                        desc: "기존 숙명여대 민원 시스템의 효율성을 개선한 웹페이지",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "Firebase", "Gemini"],
                        link: "https://solux.tistory.com/160",
                    },
                ],
            },
            {
                term: "1학기",
                projects: [
                    {
                        title: "BATTLE CIRCUIT",
                        teamName: "IFIVE",
                        desc: "팀플레이 기반 멀티플레이 레이싱 게임",
                        award: "대상",
                        category: "Game",
                        stacks: ["Unity", "C#", "Firebase"],
                        link: "https://solux.tistory.com/139",
                    },
                    {
                        title: "The Way to Be Knight",
                        teamName: "FIVEUS",
                        desc: "평범한 사기꾼이 용사가 되는 과정을 그리는 수집형 RPG 어드벤처 스토리 게임",
                        award: "최우수상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux.tistory.com/140",
                    },
                    {
                        title: "Let's IT",
                        teamName: "웹시코기",
                        desc: "미취업 개발자들을 위한 개발 프로젝트 팀 구성 및 AI를 활용한 포트폴리오 관리 서비스",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "MySQL"],
                        link: "https://solux.tistory.com/141",
                    },
                    {
                        title: "Music-ally",
                        teamName: "송티티",
                        desc: "뮤지컬 팬들의 정보 습득 및 소통 사이트",
                        award: "장려상",
                        category: "Web",
                        stacks: ["React", "Node.js", "MongoDB"],
                        link: "https://solux.tistory.com/142",
                    },
                ],
            },
        ],
    },
    {
        gen: 28,
        year: 2023,
        semesters: [
            {
                term: "2학기",
                projects: [
                    {
                        title: "PAPERIE",
                        teamName: "웨빗",
                        desc: "찾고싶은 참고문헌 형식을 한 번에 자동으로 생성해주는 서비스",
                        award: "대상",
                        category: "Web",
                        stacks: ["React", "Django", "MySQL"],
                        link: "https://solux.tistory.com/116",
                    },
                    {
                        title: "Time Capsule, 과거에서 온 편지",
                        teamName: "투게더",
                        desc: "시간이 지나 잊고 있던 과거의 기록을 전달해주는 웹서비스",
                        award: "최우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "MySQL"],
                        link: "https://solux.tistory.com/117",
                    },
                    {
                        title: "PLAVEL",
                        teamName: "하이파이브",
                        desc: "다양한 성향의 여행자가 모이는 이곳은 PLANET TRAVEL, PLAVEL",
                        award: "우수상",
                        category: "App",
                        stacks: ["React", "Django"],
                        link: "https://solux.tistory.com/118",
                    },
                    {
                        title: "작당모독",
                        teamName: "우아한자매들",
                        desc: "독서에 관심 있는 사람들이 모여 책에 관한 모임을 열거나 토론할 수 있는 독서모임 앱",
                        award: "우수상",
                        category: "Web",
                        stacks: ["Kotlin", "SpringBoot", "MariaDB"],
                        link: "https://solux.tistory.com/119",
                    },
                ],
            },
            {
                term: "1학기",
                projects: [
                    {
                        title: "Last Ark: 마지막 방주",
                        teamName: "파워레인저",
                        desc: "카드 처리와 스토리를 결합한 레일로드 국가 운영 시뮬레이션 게임",
                        award: "대상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux.tistory.com/106",
                    },
                    {
                        title: "날씨의 눈송",
                        teamName: "실룩솔룩",
                        desc: "그날 그날 날씨에 따라 어떤 옷을 입어야 할지 잘 모르겠는 사람들을 위해 눈송이가 옷차림을 알려드립니다!",
                        award: "최우수상",
                        category: "Data",
                        stacks: ["React", "SpringBoot", "MySQL", "Python"],
                        link: "https://solux.tistory.com/105",
                    },
                    {
                        title: "마음의 파도",
                        teamName: "핫식스",
                        desc: "사람들이 마음의 덫을 알아차리고 빠져나오도록 돕는 웹사이트 서비스",
                        award: "우수상",
                        category: "Data",
                        stacks: ["React", "SpringBoot", "MySQL", "Python"],
                        link: "https://solux.tistory.com/107",
                    },
                    {
                        title: "SURROUND",
                        teamName: "앱얼레벌레",
                        desc: "안전하고 편리한 공동구매 서비스",
                        award: "장려상",
                        category: "App",
                        stacks: ["Kotlin", "Firebase"],
                        link: "https://solux.tistory.com/109",
                    },
                    {
                        title: "추억저장소: Wemory",
                        teamName: "중꺾마",
                        desc: "추억을 저장하고 공유하는 다목적 커뮤니티 웹페이지",
                        award: "장려상",
                        category: "Data",
                        stacks: ["React", "Node.js", "MongoDB", "Python"],
                        link: "https://solux.tistory.com/110",
                    },
                ],
            },
        ],
    },
    {
        gen: 27,
        year: 2022,
        semesters: [
            {
                term: "2학기",
                projects: [
                    {
                        title: "Allba 대타 스케줄러",
                        teamName: "새내기들",
                        desc: "알바 대타 매핑 서비스",
                        award: "대상",
                        category: "Web",
                        stacks: ["Vue", "SpringBoot", "MongoDB"],
                        link: "https://solux.tistory.com/70",
                    },
                    {
                        title: "Done List",
                        teamName: "webTi",
                        desc: "대학생 활동 이력 연표 제작/공유 웹",
                        award: "최우수상",
                        category: "Web",
                        stacks: ["React", "Django"],
                        link: "https://solux.tistory.com/60",
                    },
                    {
                        title: "탐앤탐꾸",
                        teamName: "snS",
                        desc: "snS의 타임라인을 형상화, 서로의 타임라인을 꾸며주고 메시지를 적을 수 있는 오락 웹사이트",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "Node.js", "MongoDB"],
                        link: "https://solux.tistory.com/76",
                    },
                ],
            },
            {
                term: "1학기",
                projects: [
                    {
                        title: "Colorful Adventure",
                        teamName: "(주)3송게임즈",
                        desc: "색방울을 수집하여 혼합하는 신개념 퍼즐 게임",
                        award: "대상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        image: "https://blog.kakaocdn.net/dna/v4Jyf/btr0KHGW1q5/AAAAAAAAAAAAAAAAAAAAAPNwkFtpxBHW8khWPkLsn-drSrCLfphbm2Wj1wLRmGFn/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=rRKdnFACz6CtJWR6wU1fxXovI7E%3D",
                        link: "https://solux.tistory.com/79",
                    },
                    {
                        title: "당신이 찾던 와인 서비스",
                        teamName: "데이팅",
                        desc: "사용자가 선택한 기준들에 따라 와인을 추천해주는 웹 기반 서비스",
                        award: "최우수상",
                        category: "Data",
                        stacks: ["Flask", "MySQL", "Python"],
                        link: "https://solux.tistory.com/66",
                    },
                    {
                        title: "공구하송",
                        teamName: "SOLABO",
                        desc: "숙명인들의 원활한 공동구매 진행과 참여를 돕는 웹 사이트",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "MongoDB"],
                        link: "https://solux.tistory.com/75",
                    },
                    {
                        title: "MergePlan",
                        teamName: "ITs",
                        desc: "기본에 분리되어있던 가계부와 플래너의 기능을 하나로 합한 웹",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "MySQL"],
                        link: "https://solux.tistory.com/62",
                    },
                ],
            },
        ],
    },
];