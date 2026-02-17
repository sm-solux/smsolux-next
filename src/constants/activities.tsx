
import React from "react";

export const activityList = [
    {
        title: "Semester Projects",
        korTitle: "프로젝트 진행",
        desc: "기획자, 디자이너, 개발자가 한 팀을 이뤄 매주 스터디를 진행하고, 학기 말에 완성도 높은 서비스를 런칭합니다.",
        icon: (
            <svg className= "w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" > <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth={ 2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /> </svg>
        ),
color: "text-blue-400",
    bg: "bg-blue-400/10"
    },
{
    title: "Ideation Pitch",
        korTitle: "기획 발표회",
            desc: "개발 착수 전, 기획안과 디자인 시안을 공유합니다. 다양한 직군의 피드백을 통해 아이디어를 더 단단하게 발전시킵니다.",
                icon: (
                    <svg className= "w-6 h-6" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" > <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth = { 2} d = "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /> </svg>
        ),
    color: "text-yellow-400",
        bg: "bg-yellow-400/10"
},
{
    title: "Final Showcase",
        korTitle: "최종 발표회",
            desc: "한 학기 동안 팀원들이 땀 흘려 만든 결과물을 발표합니다. 기획의 참신함, 디자인의 미려함, 기술의 완성도를 종합적으로 평가합니다.",
                icon: (
                    <svg className= "w-6 h-6" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" > <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth = { 2} d = "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> </svg>
        ),
    color: "text-purple-400",
        bg: "bg-purple-400/10"
},
{
    title: "Open Study",
        korTitle: "자율 스터디",
            desc: "웹/앱 개발뿐만 아니라 UI/UX 디자인, 서비스 기획 등 다양한 주제의 스터디가 열리며 누구나 참여할 수 있습니다.",
                icon: (
                    <svg className= "w-6 h-6" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" > <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth = { 2} d = "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> </svg>
        ),
    color: "text-green-400",
        bg: "bg-green-400/10"
},
{
    title: "Mentoring Day",
        korTitle: "멘토링 데이",
            desc: "현업 PM, 디자이너, 개발자로 활약 중인 선배님들을 초청하여 실무 노하우와 커리어 조언을 듣습니다.",
                icon: (
                    <svg className= "w-6 h-6" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" > <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth = { 2} d = "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
        ),
    color: "text-pink-400",
        bg: "bg-pink-400/10"
},
{
    title: "Networking",
        korTitle: "네트워킹 (OT/MT)",
            desc: "직군을 넘어선 끈끈한 유대감! OT, MT, 해커톤 등 다양한 행사를 통해 평생 함께할 동료들을 만납니다.",
                icon: (
                    <svg className= "w-6 h-6" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" > <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth = { 2} d = "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
        ),
    color: "text-orange-400",
        bg: "bg-orange-400/10"
},
];
