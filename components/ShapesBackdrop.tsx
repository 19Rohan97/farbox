export function ShapesBackdrop({ className = '' }: { className?: string }) {
  return (
    <div className={"pointer-events-none absolute inset-0 -z-10 " + className} aria-hidden>
      <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-brand-500/15 blur-3xl anim-float-y" />
      <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl anim-float-x anim-delay-1000" />
      <div className="absolute -left-10 bottom-10 h-16 w-16 rotate-12 rounded-xl border-2 border-brand-500/20 anim-spin-slow" />
      <div className="absolute left-12 -bottom-8 h-10 w-10 rounded-full bg-brand-500/20 blur-md anim-float-y anim-delay-1500" />
      <div className="absolute right-1/3 -top-6 h-8 w-8 rounded-full border-2 border-brand-500/30 anim-float-x anim-delay-500" />
    </div>
  );
}

