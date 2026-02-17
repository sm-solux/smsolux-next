export const TextBadge = ({ text }: { text: string }) => (
    <span className="py-1.5 px-5 rounded-full bg-white/5 border border-white/10 text-primary text-xs md:text-sm font-medium tracking-[0.2em] backdrop-blur-md">
        {text}
    </span>
);