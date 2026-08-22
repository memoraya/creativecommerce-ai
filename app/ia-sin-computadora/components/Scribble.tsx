// Small hand-drawn underline used as a restrained annotation accent —
// a nod to the printed flyer without turning the page into a doodle.
export default function Scribble({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden
        className="absolute -bottom-1.5 left-0 w-full text-[#D97757]"
        height="8"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
      >
        <path
          d="M0 5 Q 15 0, 30 5 T 60 5 T 100 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
