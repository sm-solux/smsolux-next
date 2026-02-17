"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

const faqs = [
    {
        question: "모집은 언제 진행되나요?",
        answer:
            "솔룩스는 1년 기수제로 운영되며, 매년 1회 모집을 진행합니다. 구체적인 일정은 공식 채널을 통해 안내드립니다.",
    },
    {
        question: "활동은 어떤 방식으로 진행되나요?",
        answer:
            "팀별로 주 1회 정기 회의를 진행하며, 대면·비대면 방식을 팀 내에서 협의하여 결정합니다. 원활한 협업을 위해 대면 활동을 권장하고 있습니다.",
    },
    {
        question: "전공이나 경험이 없어도 지원할 수 있나요?",
        answer:
            "전공이나 기존 경험은 필수 조건이 아닙니다. 배우고자 하는 의지와 책임감을 더 중요하게 생각합니다.",
    },
    {
        question: "고학년도 지원 가능한가요?",
        answer:
            "학년에 제한은 없습니다. 1년 활동 기간 동안 꾸준히 참여할 수 있다면 누구든 지원 가능합니다.",
    },
    {
        question: "선발 절차는 어떻게 진행되나요?",
        answer:
            "서류 심사 후 면접을 진행하며, 면접은 약 30분 내외로 이루어집니다. 최종 결과는 모든 면접 종료 후 개별 안내드립니다.",
    },
];

export default function FaqMigrationPage() {
    const [status, setStatus] = useState("대기 중...");

    const handleUpload = async () => {
        setStatus("업로드 시작...");

        const { error } = await supabase.from("faqs").insert(faqs);

        if (error) {
            console.error(error);
            setStatus(`에러 발생: ${error.message}`);
        } else {
            setStatus("업로드 성공! Supabase를 확인하세요.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-2xl font-bold">FAQ 데이터 이주 도구</h1>
            <p>버튼을 누르면 FAQ 데이터를 Supabase로 전송합니다.</p>
            <button
                onClick={handleUpload}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold"
            >
                FAQ 데이터 넣기
            </button>
            <p className="text-lg font-semibold text-red-500">{status}</p>
        </div>
    );
}
