"use client";

import { supabase } from "@/lib/supabase";
import { image } from "framer-motion/client";
import { useState } from "react";

const archives = [
    {
        gen: 30,
        year: 2025,
        semesters: [
            {
                term: "2학기",
                projects: [
                    {
                        title: "WHAT THE FXXM!",
                        teamName: "도망감자",
                        desc: "마법같은 에너지로 작물을 연구하는 2D 방치형 모바일 농장 게임",
                        award: "대상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux.tistory.com/192",
                        image: "https://blog.kakaocdn.net/dna/s030i/dJMcaa5ddza/AAAAAAAAAAAAAAAAAAAAAPC0kWjXBWcIMPz695VCKO0N4MoTabM7PDZgTBWsJh1L/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=%2Fa87VvBrHJ%2BJl8RBLeuDWnVb3sg%3D",
                    },
                    {
                        title: "연등(연대의 등불)",
                        teamName: "웹빙",
                        desc: "각자의 불빛을 모아 거대한 행동의 물결로, 연대활동을 연결하는 플랫폼",
                        award: "최우수상",
                        category: "Web",
                        stacks: ["React", "Node.js", "MySQL", "OpenAI"],
                        link: "https://solux.tistory.com/193",
                        image: "https://blog.kakaocdn.net/dna/c7TU1d/dJMcahXCXDy/AAAAAAAAAAAAAAAAAAAAADhmWJLgsYFGg6rgY6NJ26egDwo5WCTjuIDmjRea_VNc/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=SOJQvevLW%2FlC3Sl77iZ4IyrZCL8%3D",

                    },
                    {
                        title: "DearTime",
                        teamName: "데비",
                        desc: "별빛처럼 사라지지 않는 기억을 기록하는 곳, 디지털 유산 저장소 웹 서비스",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "PostgreSQL"],
                        link: "https://solux.tistory.com/181",
                        image: "https://blog.kakaocdn.net/dna/W9oe8/dJMcahXCWxU/AAAAAAAAAAAAAAAAAAAAABEa52aRJGrYpL8V9Y7ijhwNUQ1_84oHuMlpyvoj8dF7/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=AVAYV3tFujXpZveBBui2meAOpuc%3D",
                    },
                ],
            },
            {
                term: "1학기",
                projects: [
                    {
                        title: "ICEY",
                        teamName: "칠가이",
                        desc: "어색한 첫 대화를 준비하는 가장 귀여운 방법",
                        award: "대상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "Gemini"],
                        link: "https://solux.tistory.com/179",
                        image: "https://blog.kakaocdn.net/dna/ufvNv/btsPM1Bv7Kl/AAAAAAAAAAAAAAAAAAAAABvM6A3NtHKxaucyKmajuL220dHeQD8Q7HeNXJbYufjO/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=rJOZKhSE2ObLiW7cDtC9G23oSyo%3D",
                    },
                    {
                        title: "산딸기 어린이집",
                        teamName: "오엥 (o0o!)",
                        desc: "수상한 어린이집에서 탈출하는 스토리 공포 게임",
                        award: "최우수상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux.tistory.com/180",
                        image: "https://blog.kakaocdn.net/dna/cNsjdB/btsPLfgwMKn/AAAAAAAAAAAAAAAAAAAAAMPJbrtxyqS0y7W3JwbSWT8_PYi269Nc2_2Kz-yrCb-W/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=I%2FWUFrIB2ssyJdD5WZgVoq8XDBY%3D",

                    },
                    {
                        title: "Clong",
                        teamName: "Cosol",
                        desc: "시각화와 데이터 기반의 공유 공간 청소 관리 서비스",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "Django", "PostgreSQL", "OpenAI"],
                        link: "https://solux.tistory.com/181",
                        image: "https://blog.kakaocdn.net/dna/bs9848/btsPUcivJpM/AAAAAAAAAAAAAAAAAAAAACpuUwQRQJCfC7FdAh4V1v7ZHXv4FwLpm1iUPXW5UAOu/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=oE2nRUx9KHrxzmdyfb6D7aKc2kY%3D",
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
                        image: "https://blog.kakaocdn.net/dna/baPd2Y/btsMcKxfsD5/AAAAAAAAAAAAAAAAAAAAAOVrFcB-q4iRLtr59F4M1J884YhelTZ_rbFPeE0PrJzp/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=Jl8dMu5Jboc725bSjBbKk4Lxx0M%3D",
                    },
                    {
                        title: "Abyss",
                        teamName: "iTen",
                        desc: "멀티플레이 공포 탈출게임",
                        award: "최우수상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux.tistory.com/158",
                        image: "https://blog.kakaocdn.net/dna/Zx1yG/btsMcTt12PV/AAAAAAAAAAAAAAAAAAAAAB-v5kg2M8eHQfvRI3P583SaL5A2B0CAP2Gg5vAsarLd/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=KLz3R3h36IP0N7vSeUrQPZXqHws%3D",
                    },
                    {
                        title: "DotheG",
                        teamName: "앱설런트",
                        desc: "친환경 활동도 게임처럼, 캐릭터 수집으로 만드는 나만의 에코 라이프!",
                        award: "우수상",
                        category: "App",
                        stacks: ["ReactNative", "SpringBoot", "MySQL"],
                        link: "https://solux.tistory.com/159",
                        image: "https://blog.kakaocdn.net/dna/bE38y5/btsMcPSydQr/AAAAAAAAAAAAAAAAAAAAAFXjL3xQ1KRgadkZqlVVjBzNobyjFetv2nrqSQVWBXsQ/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=RWPE9uamWvWn7ufdmlEPOq2ObTM%3D",
                    },
                    {
                        title: "숙명137+",
                        teamName: "웹키비키",
                        desc: "기존 숙명여대 민원 시스템의 효율성을 개선한 웹페이지",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "Firebase", "Gemini"],
                        link: "https://solux.tistory.com/160",
                        image: "https://blog.kakaocdn.net/dna/cpTall/btsMdr4UWEa/AAAAAAAAAAAAAAAAAAAAAPk2tnFJIOeEU98NPvAbtQ4CuGZXZhE3z9dJZzhac0ps/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=exO31XG7q%2BOz6yyGWhvG%2Fz%2FPRN8%3D",
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
                        image: "https://blog.kakaocdn.net/dna/czxmO6/btsI6Uo9BNY/AAAAAAAAAAAAAAAAAAAAAEJjZ2ZIlzRJE5ZQES1oAmkiEpHcF78hNIhHrj9DVL7j/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=jd6gY7vrI6okqywk%2Fd3YuXGZi%2BE%3D",
                    },
                    {
                        title: "The Way to Be Knight",
                        teamName: "FIVEUS",
                        desc: "평범한 사기꾼이 용사가 되는 과정을 그리는 수집형 RPG 어드벤처 스토리 게임",
                        award: "최우수상",
                        category: "Game",
                        stacks: ["Unity", "C#"],
                        link: "https://solux.tistory.com/140",
                        image: "https://blog.kakaocdn.net/dna/sscDX/btsI7h5o3q7/AAAAAAAAAAAAAAAAAAAAANccMm4ajSzZUGvDaEfE4LzUjSi3YXprTLNwQ9nIvFSq/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=7G4LZTW1KsBTRTTY0aYWE%2B9nbGA%3D",
                    },
                    {
                        title: "Let's IT",
                        teamName: "웹시코기",
                        desc: "미취업 개발자들을 위한 개발 프로젝트 팀 구성 및 AI를 활용한 포트폴리오 관리 서비스",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "MySQL"],
                        link: "https://solux.tistory.com/141",
                        image: "https://blog.kakaocdn.net/dna/dbSZ9A/btsJbdaMiUW/AAAAAAAAAAAAAAAAAAAAAGUOVC7g-ptuTyU6krNlUMYPWzeA8-uFWdskjBInDT3d/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=7k6upZpWjbtCJM9t1fMPkH0c4f8%3D",
                    },
                    {
                        title: "Music-ally",
                        teamName: "송티티",
                        desc: "뮤지컬 팬들의 정보 습득 및 소통 사이트",
                        award: "장려상",
                        category: "Web",
                        stacks: ["React", "Node.js", "MongoDB"],
                        link: "https://solux.tistory.com/142",
                        image: "https://blog.kakaocdn.net/dna/yx1hZ/btsJddHr9Eb/AAAAAAAAAAAAAAAAAAAAAElL7YtbO7D397BFoGZgrmS6tF_zDUu-_16-4aD1f9YQ/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=5sFBGgJ5AhHl8%2B85wf3b8KAXF%2FQ%3D",
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
                        image: "https://blog.kakaocdn.net/dna/bAmGBM/btsEZoAp1pN/AAAAAAAAAAAAAAAAAAAAAE2tmWRV1wUKHZxnuZfsfnQuf_4nKM_Bp7zKgdxORWNJ/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=412JWhPjKi%2B4Rk3AvGwSQWPvSZE%3D",
                    },
                    {
                        title: "Time Capsule, 과거에서 온 편지",
                        teamName: "투게더",
                        desc: "시간이 지나 잊고 있던 과거의 기록을 전달해주는 웹서비스",
                        award: "최우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "MySQL"],
                        link: "https://solux.tistory.com/117",
                        image: "https://blog.kakaocdn.net/dna/bx7SSU/btsEZTGXBHC/AAAAAAAAAAAAAAAAAAAAAChc9uiLuxZ1g20a4tsT8w1dpMgUyN9LRmmrL7-49o0e/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=OCNCThlem51%2Blrc0iiD6KvVx2aM%3D",
                    },
                    {
                        title: "PLAVEL",
                        teamName: "하이파이브",
                        desc: "다양한 성향의 여행자가 모이는 이곳은 PLANET TRAVEL, PLAVEL",
                        award: "우수상",
                        category: "App",
                        stacks: ["React", "Django"],
                        link: "https://solux.tistory.com/118",
                        image: "https://blog.kakaocdn.net/dna/b9vr2o/btsEWfEQaug/AAAAAAAAAAAAAAAAAAAAAOzOdJZHdwJVMxpjrZoK6aFx3pY_Xy4ydP2DbNdOqMiC/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=j3WwSjNaRzOmwmh%2FylsdvyILAhI%3D",
                    },
                    {
                        title: "작당모독",
                        teamName: "우아한자매들",
                        desc: "독서에 관심 있는 사람들이 모여 책에 관한 모임을 열거나 토론할 수 있는 독서모임 앱",
                        award: "우수상",
                        category: "Web",
                        stacks: ["Kotlin", "SpringBoot", "MariaDB"],
                        link: "https://solux.tistory.com/119",
                        image: "https://blog.kakaocdn.net/dna/bAqTac/btsEWfY6fNy/AAAAAAAAAAAAAAAAAAAAAI-mYq8EKvcHojqy8fEXmc5phEl1JF6Ycu468BrH0irg/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=JqM3KhRArqQ0%2F%2B9HG9gZ7j69mmY%3D",
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
                        image: "https://blog.kakaocdn.net/dna/luyLx/btszmy3Kel3/AAAAAAAAAAAAAAAAAAAAABABCAXvDQPmIm7sgn66XEvo66YRyHsmNMmk8qHJ79D2/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=NhbO2a7UXNkvjt0ouQJlkgUKyjQ%3D"
                    },
                    {
                        title: "날씨의 눈송",
                        teamName: "실룩솔룩",
                        desc: "그날 그날 날씨에 따라 어떤 옷을 입어야 할지 잘 모르겠는 사람들을 위해 눈송이가 옷차림을 알려드립니다!",
                        award: "최우수상",
                        category: "Web&Data",
                        stacks: ["React", "SpringBoot", "MySQL", "Python"],
                        link: "https://solux.tistory.com/105",
                        image: "https://blog.kakaocdn.net/dna/boRMe9/btszsBYUuGn/AAAAAAAAAAAAAAAAAAAAABQquOuW_NFgiO2K16TmC6Ks0wm7-RVZu0HOrl4I-zGS/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=KzMR16H96qqrWh32wPEoEb7N9WM%3D",
                    },
                    {
                        title: "마음의 파도",
                        teamName: "핫식스",
                        desc: "사람들이 마음의 덫을 알아차리고 빠져나오도록 돕는 웹사이트 서비스",
                        award: "우수상",
                        category: "Web&Data",
                        stacks: ["React", "SpringBoot", "MySQL", "Python"],
                        link: "https://solux.tistory.com/107",
                        image: "https://blog.kakaocdn.net/dna/C3laI/btszpBFS0lw/AAAAAAAAAAAAAAAAAAAAABnJn5V5uYkLl8DBXMkddvk0mSE_CndHiiUoVUKVwl8e/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=Nd5rhjfa3lbQpdaAiD4ZjjH4LLI%3D",
                    },
                    {
                        title: "SURROUND",
                        teamName: "앱얼레벌레",
                        desc: "안전하고 편리한 공동구매 서비스",
                        award: "장려상",
                        category: "App",
                        stacks: ["Kotlin", "Firebase"],
                        link: "https://solux.tistory.com/109",
                        image: "https://blog.kakaocdn.net/dna/sDi08/btszyMHStQS/AAAAAAAAAAAAAAAAAAAAALASQbR0t-S0LanX0dfzlXdw1weZh4rI8sUKBwVqbwpS/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=Umad32XcWXGzVuZJBuz9FO5OuVg%3D",
                    },
                    {
                        title: "추억저장소: Wemory",
                        teamName: "중꺾마",
                        desc: "추억을 저장하고 공유하는 다목적 커뮤니티 웹페이지",
                        award: "장려상",
                        category: "Web&Data",
                        stacks: ["React", "Node.js", "MongoDB", "Python"],
                        link: "https://solux.tistory.com/110",
                        image: "https://blog.kakaocdn.net/dna/cMeqtQ/btszC7J1G12/AAAAAAAAAAAAAAAAAAAAAOsuKYPu99evvtfMWkdCMvv_XbhlzW4mX0b_GeqAIFIF/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=%2FzIIBQOH7PRTVpubIKfLnEeH6jo%3D",
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
                        image: "https://blog.kakaocdn.net/dna/cK1KQk/btr0IwjWqIQ/AAAAAAAAAAAAAAAAAAAAAIiRWVI6Ka02qg3YyeI5mgvvco1LxLk4RlMg7KUZQeWi/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=yXQZnWY%2B2u7wn1PXyIoCVL9mr%2Fw%3D",
                    },
                    {
                        title: "Done List",
                        teamName: "webTi",
                        desc: "대학생 활동 이력 연표 제작/공유 웹",
                        award: "최우수상",
                        category: "Web",
                        stacks: ["React", "Django"],
                        link: "https://solux.tistory.com/60",
                        image: "https://blog.kakaocdn.net/dna/caeEyq/btrZ0J6MKG0/AAAAAAAAAAAAAAAAAAAAALh3PGzWXRb5eSl4hBWcTLh-smWZcgTx6rwJ3dunVnAo/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=ZugCEqs6gbGNvCgch4YPEfSYUZM%3D",
                    },
                    {
                        title: "탐앤탐꾸",
                        teamName: "snS",
                        desc: "snS의 타임라인을 형상화, 서로의 타임라인을 꾸며주고 메시지를 적을 수 있는 오락 웹사이트",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "Node.js", "MongoDB"],
                        link: "https://solux.tistory.com/76",
                        image: "https://blog.kakaocdn.net/dna/cxHoDx/btr02AfwLD7/AAAAAAAAAAAAAAAAAAAAAKrUMjAnoulsMy3cPP4YeOMV0q5Moit4dHMBp5M_YOPp/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=Bebc7Nniw7YI7vZ%2BvoZNq%2BLJLdc%3D",
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
                        link: "https://solux.tistory.com/79",
                        image: "https://blog.kakaocdn.net/dna/v4Jyf/btr0KHGW1q5/AAAAAAAAAAAAAAAAAAAAAPNwkFtpxBHW8khWPkLsn-drSrCLfphbm2Wj1wLRmGFn/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=rRKdnFACz6CtJWR6wU1fxXovI7E%3D",
                    },
                    {
                        title: "당신이 찾던 와인 서비스",
                        teamName: "데이팅",
                        desc: "사용자가 선택한 기준들에 따라 와인을 추천해주는 웹 기반 서비스",
                        award: "최우수상",
                        category: "Data",
                        stacks: ["Flask", "MySQL", "Python"],
                        link: "https://solux.tistory.com/66",
                        image: "https://blog.kakaocdn.net/dna/HCkaa/btr0uwFYF23/AAAAAAAAAAAAAAAAAAAAAG2wE5wfoB5s4r5ZITmXGjFW0MbSFp7BNdbvnypQKXy-/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=%2F0y7npk40UBNuGeIQcFnMeXROKE%3D"
                    },
                    {
                        title: "공구하송",
                        teamName: "SOLABO",
                        desc: "숙명인들의 원활한 공동구매 진행과 참여를 돕는 웹 사이트",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "MongoDB"],
                        link: "https://solux.tistory.com/75",
                        image: "https://blog.kakaocdn.net/dna/bjvH9O/btr0Iu85un0/AAAAAAAAAAAAAAAAAAAAAJN6etPNk0j3B6ViB-aN6sRMpZd2E74XGJbmZLqQammZ/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=u3oqy6oaYJyJaRIF1uH7ySfkWx8%3D"
                    },
                    {
                        title: "MergePlan",
                        teamName: "ITs",
                        desc: "기본에 분리되어있던 가계부와 플래너의 기능을 하나로 합한 웹",
                        award: "우수상",
                        category: "Web",
                        stacks: ["React", "SpringBoot", "MySQL"],
                        link: "https://solux.tistory.com/62",
                        image: "https://blog.kakaocdn.net/dna/ViDWr/btr0AOeJ9qN/AAAAAAAAAAAAAAAAAAAAADz_ftqZiffnFR2DFA3YvQw5WQC4kj91Ewqmzk-3Cm9n/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1772290799&allow_ip=&allow_referer=&signature=2rC98EAVhcLMqko317%2FFNWzB9Zg%3D",
                    },
                ],
            },
        ],
    },
];

export default function MigrationPage() {
    const [status, setStatus] = useState("대기 중...");

    const handleUpload = async () => {
        setStatus("업로드 시작...");

        // 2. 데이터 평탄화 (Flattening)
        const flatData: any[] = [];

        archives.forEach((genData) => {
            genData.semesters.forEach((semData) => {
                semData.projects.forEach((proj) => {
                    flatData.push({
                        generation: genData.gen,
                        year: genData.year,
                        term: semData.term,
                        title: proj.title,
                        team_name: proj.teamName,
                        desc: proj.desc,
                        award: proj.award || null,
                        category: proj.category,
                        stacks: proj.stacks,
                        image: proj.image || null,
                        link: proj.link || null,
                    });
                });
            });
        });

        console.log("변환된 데이터:", flatData);

        // 3. Supabase에 쏘기
        const { error } = await supabase.from("projects").insert(flatData);

        if (error) {
            console.error(error);
            setStatus(`에러 발생: ${error.message}`);
        } else {
            setStatus("업로드 성공! Supabase를 확인하세요.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-2xl font-bold">데이터 이주 도구</h1>
            <p>버튼을 누르면 데이터를 Supabase로 전송합니다.</p>
            <button
                onClick={handleUpload}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold"
            >
                DB에 데이터 넣기
            </button>
            <p className="text-lg font-semibold text-red-500">{status}</p>
        </div>
    );
}