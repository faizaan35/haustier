import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 144;

interface CinematicHeroProps {
  onOpenEnquiry?: (topic?: string) => void;
  headerRef?: React.RefObject<HTMLDivElement>;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onOpenEnquiry, headerRef }) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const heroFrameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typography Moment Refs
  const phrase1Ref = useRef<HTMLDivElement>(null);
  const phrase2Ref = useRef<HTMLDivElement>(null);
  const phrase3Ref = useRef<HTMLDivElement>(null);
  const phrase4Ref = useRef<HTMLDivElement>(null);

  // Loader & Interactive Cue Refs
  const loaderOverlayRef = useRef<HTMLDivElement>(null);
  const loaderCardRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  // Cached preloaded images & current frame index
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [revealDone, setRevealDone] = useState(false);

  // Function to draw a specific frame on the canvas with object-fit: cover
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    // If target frame is still loading, seamlessly fall back to nearest loaded frame to prevent any flicker
    if (!img || !img.complete) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[frameIndex - offset];
        if (prev && prev.complete) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex + offset];
        if (next && next.complete) {
          img = next;
          break;
        }
      }
    }
    if (!img || !img.complete) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Cover math (1920x1080 native 16:9 aspect ratio)
    const imgRatio = (img.naturalWidth || 1920) / (img.naturalHeight || 1080);
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  }, []);

  // 1. Preload 144 Frames with progressive render and frame-mask reveal
  useEffect(() => {
    let mounted = true;
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;

    let loadedCount = 0;
    const initialThreshold = 18; // Reveal as soon as initial buffer is ready

    const handleSingleLoad = (index: number) => {
      if (!mounted) return;
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

      // Draw initial frame immediately once frame 0 is loaded
      if (index === 0 || loadedCount === 1) {
        renderFrame(0);
      }

      // Trigger frame-mask reveal once threshold or all frames are ready
      if (loadedCount >= initialThreshold && !revealDone) {
        triggerReveal();
      }
    };

    const triggerReveal = () => {
      if (loaderOverlayRef.current && heroFrameRef.current) {
        const tl = gsap.timeline({
          onComplete: () => {
            if (mounted) {
              setRevealDone(true);
              ScrollTrigger.refresh();
            }
          },
        });

        tl.to(loaderCardRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: 'power2.out',
        })
          .to(
            loaderOverlayRef.current,
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 0,
              duration: 0.9,
              ease: 'power2.inOut',
            },
            '-=0.2'
          )
          .fromTo(
            canvasRef.current,
            { scale: 1.05, filter: 'brightness(0.9) contrast(1.05)' },
            { scale: 1.0, filter: 'brightness(1.0) contrast(1.0)', duration: 1.1, ease: 'power2.out' },
            '-=0.8'
          )
          .fromTo(
            scrollHintRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            '-=0.3'
          );
      }
    };

    // Preload frame 0 first for instant visual display
    const firstImg = new Image();
    firstImg.src = `/frames/frame_000.webp`;
    if (firstImg.complete) {
      handleSingleLoad(0);
    } else {
      firstImg.onload = () => handleSingleLoad(0);
    }
    images[0] = firstImg;

    // Concurrently preload remaining frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const filename = `/frames/frame_${String(i).padStart(3, '0')}.webp`;
      img.src = filename;
      if (img.complete) {
        handleSingleLoad(i);
      } else {
        img.onload = () => handleSingleLoad(i);
      }
      images[i] = img;
    }

    // Safety fallback timer
    const safetyTimer = setTimeout(() => {
      if (mounted && !revealDone) {
        triggerReveal();
      }
    }, 1200);

    // Resize listener to re-render frame cleanly
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mounted = false;
      clearTimeout(safetyTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [renderFrame, revealDone]);

  // 2. Master GSAP ScrollTrigger Master Timeline
  useEffect(() => {
    const trigger = triggerRef.current;
    const pin = pinRef.current;
    const heroFrame = heroFrameRef.current;
    if (!trigger || !pin || !heroFrame) return;

    const isMobile = window.innerWidth < 768;
    const scrollDistance = isMobile ? '+=1800' : '+=2500';

    const ctx = gsap.context(() => {
      // Phase boundary: Frame animation finishes scrubbing at 0.85
      const videoPhaseEnd = 0.85;

      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: 'top top',
          end: scrollDistance,
          pin,
          scrub: 0.25, // Instant buttery response with zero lag
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Fade out scroll indicator immediately upon scroll
            if (scrollHintRef.current) {
              if (progress > 0.02) {
                gsap.to(scrollHintRef.current, { opacity: 0, duration: 0.15 });
              } else if (revealDone) {
                gsap.to(scrollHintRef.current, { opacity: 1, duration: 0.15 });
              }
            }

            // Toggle pointer events for header based on progress
            if (headerRef && headerRef.current) {
              if (progress >= 0.88) {
                headerRef.current.style.pointerEvents = 'auto';
              } else {
                headerRef.current.style.pointerEvents = 'none';
              }
            }

            // Map progress to exact frame index (0 to 143)
            let targetFrame = 0;
            if (progress <= videoPhaseEnd) {
              targetFrame = Math.min(
                TOTAL_FRAMES - 1,
                Math.floor((progress / videoPhaseEnd) * TOTAL_FRAMES)
              );
            } else {
              targetFrame = TOTAL_FRAMES - 1; // Firmly anchored on final frame during zoom-out
            }

            if (targetFrame !== currentFrameRef.current) {
              currentFrameRef.current = targetFrame;
              renderFrame(targetFrame);
            }
          },
        },
      });

      // =========================================================================
      // TYPOGRAPHY CHOREOGRAPHY (Strictly during animation progress: 0.00 - 0.80)
      // =========================================================================

      // Moment 1: OPENING (0.07 - 0.22) — "FORM, REFINED."
      if (phrase1Ref.current) {
        masterTimeline.fromTo(
          phrase1Ref.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.07, ease: 'power2.out' },
          0.07
        );
        masterTimeline.to(
          phrase1Ref.current,
          { opacity: 0, y: -16, duration: 0.06, ease: 'power2.in' },
          0.22
        );
      }

      // Moment 2: EARLY TRANSFORMATION (0.28 - 0.44) — "CRAFT" / "CRAFTED IN EVERY LAYER."
      if (phrase2Ref.current) {
        masterTimeline.fromTo(
          phrase2Ref.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.07, ease: 'power2.out' },
          0.28
        );
        masterTimeline.to(
          phrase2Ref.current,
          { opacity: 0, y: -16, duration: 0.06, ease: 'power2.in' },
          0.44
        );
      }

      // Moment 3: MAIN REVEAL (0.49 - 0.65) — "EVERY DETAIL HAS A PURPOSE."
      if (phrase3Ref.current) {
        masterTimeline.fromTo(
          phrase3Ref.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.07, ease: 'power2.out' },
          0.49
        );
        masterTimeline.to(
          phrase3Ref.current,
          { opacity: 0, y: -16, duration: 0.06, ease: 'power2.in' },
          0.65
        );
      }

      // Moment 4: FINAL REINFORCEMENT (0.69 - 0.78) — "BUILT AS ONE."
      if (phrase4Ref.current) {
        masterTimeline.fromTo(
          phrase4Ref.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' },
          0.69
        );
        masterTimeline.to(
          phrase4Ref.current,
          { opacity: 0, y: -12, duration: 0.05, ease: 'power2.in' },
          0.78
        );
      }

      // =========================================================================
      // CRITICAL END-OF-HERO & ZOOM-OUT EXIT (0.85 -> 1.00)
      // 0.80 - 0.85: Zero text. Collar settles on final frame (143) at 0.85.
      // 0.85 - 1.00: Hero smoothly scales down into Design 1 canvas, and Header fades in!
      // =========================================================================
      masterTimeline.fromTo(
        heroFrame,
        {
          scale: 1,
          y: 0,
          borderRadius: '0px',
          boxShadow: '0 0 0 rgba(0,0,0,0)',
        },
        {
          scale: isMobile ? 0.86 : 0.76,
          y: isMobile ? 35 : 55,
          borderRadius: '16px',
          boxShadow: '0 30px 80px -15px rgba(0,0,0,0.5)',
          duration: 0.15,
          ease: 'power2.inOut',
        },
        0.85
      );

      // Header & Navigation Bar Fades In concurrently with the zoom-out
      if (headerRef && headerRef.current) {
        masterTimeline.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: -25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.15,
            ease: 'power2.out',
          },
          0.85
        );
      }
    }, triggerRef);

    return () => {
      ctx.revert();
    };
  }, [renderFrame, revealDone]);

  return (
    <section ref={triggerRef} className="relative w-full bg-surface">
      {/* Pinned 100vw x 100vh Viewport Container */}
      <div
        ref={pinRef}
        className="relative w-full h-screen overflow-hidden bg-surface flex items-center justify-center"
      >
        {/* Scalable Cinematic Hero Canvas */}
        <div
          ref={heroFrameRef}
          className="relative w-full h-full overflow-hidden bg-[#12100e] will-change-transform transition-[border-radius]"
        >
          {/* Main Cinematic Dog Collar Frame Sequence Canvas */}
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover object-center select-none pointer-events-none block"
          />

          {/* Luxury Film Vignette Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/75 via-transparent to-black/35" />

          {/* =====================================================================
              EDITORIAL TYPOGRAPHY MOMENTS (Design 1 Font & Styling Inheritance)
             ===================================================================== */}

          {/* Moment 1: OPENING — "FORM, REFINED." */}
          <div
            ref={phrase1Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none opacity-0 z-20"
          >
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-warm-cream font-normal tracking-tight max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              FORM, REFINED.
            </span>
          </div>

          {/* Moment 2: EARLY TRANSFORMATION — "CRAFT" / "CRAFTED IN EVERY LAYER." */}
          <div
            ref={phrase2Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none opacity-0 z-20"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-antique-brass font-sans font-semibold mb-2 drop-shadow-md">
              CRAFT
            </span>
            <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-warm-cream font-normal tracking-tight max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              CRAFTED IN EVERY LAYER.
            </span>
          </div>

          {/* Moment 3: MAIN REVEAL — "EVERY DETAIL HAS A PURPOSE." */}
          <div
            ref={phrase3Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none opacity-0 z-20"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-antique-brass font-sans font-semibold mb-2 drop-shadow-md">
              ANATOMY OF A COLLAR
            </span>
            <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-warm-cream font-normal tracking-tight max-w-3xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              EVERY DETAIL HAS A PURPOSE.
            </span>
          </div>

          {/* Moment 4: FINAL REINFORCEMENT — "BUILT AS ONE." */}
          <div
            ref={phrase4Ref}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none opacity-0 z-20"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-antique-brass font-sans font-semibold mb-2 drop-shadow-md">
              DESIGNED AROUND THE DOG
            </span>
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-warm-cream font-normal tracking-tight max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              BUILT AS ONE.
            </span>
          </div>

          {/* Bottom Interactive Scroll Indicator */}
          <div
            ref={scrollHintRef}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none opacity-0 transition-opacity duration-300"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-sans font-semibold text-warm-cream/80 drop-shadow">
              Scroll to Explore
            </span>
            <div className="w-[1.5px] h-6 bg-gradient-to-b from-antique-brass via-antique-brass/80 to-transparent animate-pulse" />
          </div>

          {/* =====================================================================
              ELEGANT FRAME-MASK REVEAL & INITIAL LOADING SCREEN
             ===================================================================== */}
          {!revealDone && (
            <div
              ref={loaderOverlayRef}
              className="absolute inset-0 z-40 bg-[#12100e] flex flex-col items-center justify-center px-6 select-none"
            >
              <div
                ref={loaderCardRef}
                className="flex flex-col items-center text-center space-y-3"
              >
                {/* Monogram Badge */}
                <div className="w-12 h-12 border border-antique-brass/50 bg-[#182822] text-warm-cream font-serif flex items-center justify-center font-bold text-2xl tracking-tighter shadow-md">
                  H
                </div>

                <div className="flex flex-col items-center">
                  <span className="font-serif text-2xl sm:text-3xl tracking-tight uppercase text-warm-cream font-normal">
                    HAÚSTIER
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-antique-brass font-sans font-semibold mt-1">
                    EXCELLENCE IN LEATHER CRAFT · KANPUR
                  </span>
                </div>

                {/* Subtle Luxury Loading Indicator Line */}
                <div className="w-28 h-[1.5px] bg-white/10 mt-4 overflow-hidden relative rounded-full">
                  <div
                    className="h-full bg-antique-brass transition-all duration-200"
                    style={{ width: `${Math.max(10, loadProgress)}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
