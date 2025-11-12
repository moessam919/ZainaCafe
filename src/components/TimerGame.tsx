"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, RotateCcw, Trophy } from "lucide-react";

export default function TimerGame() {
    type Difficulty = "easy" | "medium" | "hard";
    interface GameResult {
        time: number;
        difference: number;
        score: number;
        isWin: boolean;
    }

    const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [result, setResult] = useState<GameResult | null>(null);
    const [bestScore, setBestScore] = useState<number | null>(null);
    const [gamesPlayed, setGamesPlayed] = useState<number>(0);

    const intervalRef = useRef<number | null>(null);
    const speedRef = useRef<number>(100);
    const directionRef = useRef<number>(1);

    const finishGame = useCallback(
        (finalTime: number) => {
            setIsRunning(false);
            if (intervalRef.current !== null) {
                window.clearTimeout(intervalRef.current);
            }

            const normalizedTime = parseFloat(finalTime.toFixed(2));
            const difference = parseFloat(
                Math.abs(10 - normalizedTime).toFixed(2)
            );
            const isExactTen = normalizedTime === 10;
            const score = isExactTen ? 100 : Math.max(0, 100 - difference * 20);

            setResult({
                time: normalizedTime,
                difference,
                score: Math.round(score),
                isWin: isExactTen,
            });

            setGamesPlayed((prev) => prev + 1);

            if (!bestScore || score > bestScore) {
                setBestScore(Math.round(score));
            }
        },
        [bestScore]
    );

    const difficultyThemes: Record<
        Difficulty,
        {
            accent: string;
            accentSoft: string;
            surfaceGradient: string;
            buttonGradient: string;
            badgeGradient: string;
            auraGradient: string;
        }
    > = {
        easy: {
            accent: "#22c55e",
            accentSoft: "rgba(34,197,94,0.25)",
            surfaceGradient:
                "linear-gradient(150deg, rgba(34,197,94,0.18) 0%, rgba(16,185,129,0.08) 100%)",
            buttonGradient: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
            badgeGradient:
                "linear-gradient(135deg, rgba(34,197,94,0.35) 0%, rgba(16,185,129,0.15) 100%)",
            auraGradient:
                "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.25), transparent 55%)",
        },
        medium: {
            accent: "#fbbf24",
            accentSoft: "rgba(251,191,36,0.22)",
            surfaceGradient:
                "linear-gradient(150deg, rgba(251,191,36,0.2) 0%, rgba(249,115,22,0.08) 100%)",
            buttonGradient: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
            badgeGradient:
                "linear-gradient(135deg, rgba(251,191,36,0.35) 0%, rgba(249,115,22,0.15) 100%)",
            auraGradient:
                "radial-gradient(circle at 80% 20%, rgba(251,191,36,0.25), transparent 55%)",
        },
        hard: {
            accent: "#f97316",
            accentSoft: "rgba(249,115,22,0.3)",
            surfaceGradient:
                "linear-gradient(150deg, rgba(249,115,22,0.24) 0%, rgba(239,68,68,0.1) 100%)",
            buttonGradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
            badgeGradient:
                "linear-gradient(135deg, rgba(249,115,22,0.4) 0%, rgba(239,68,68,0.18) 100%)",
            auraGradient:
                "radial-gradient(circle at 50% 80%, rgba(249,115,22,0.25), transparent 60%)",
        },
    };

    const difficultyOptions: Array<{
        level: Difficulty;
        title: string;
        subtitle: string;
        description: string;
        gradient: string;
        accent: string;
        icon: string;
    }> = [
        {
            level: "easy",
            title: "Easy",
            subtitle: "Smooth Start",
            description: "Steady timer speed to warm up your focus.",
            gradient:
                "linear-gradient(135deg, rgba(16,185,129,0.45) 0%, rgba(16,185,129,0.15) 100%)",
            accent: "#22c55e",
            icon: "✨",
        },
        {
            level: "medium",
            title: "Medium",
            subtitle: "Balanced Challenge",
            description: "A playful speed mix that keeps you on your toes.",
            gradient:
                "linear-gradient(135deg, rgba(249,115,22,0.4) 0%, rgba(245,158,11,0.15) 100%)",
            accent: "#fbbf24",
            icon: "⚡️",
        },
        {
            level: "hard",
            title: "Hard",
            subtitle: "Full Focus",
            description:
                "Chaotic speed swings. Hit 10.00 before it surges to 12.00.",
            gradient:
                "linear-gradient(135deg, rgba(239,68,68,0.45) 0%, rgba(244,63,94,0.15) 100%)",
            accent: "#f97316",
            icon: "🔥",
        },
    ];

    useEffect(() => {
        if (isRunning && difficulty) {
            const updateTimer = () => {
                let shouldAutoLose = false;

                setTime((prev) => {
                    let next = prev + 0.01 * directionRef.current;

                    if (next >= 12) {
                        next = 12;
                        shouldAutoLose = true;
                    }

                    if (next < 0) next = 0;

                    return parseFloat(next.toFixed(2));
                });

                if (shouldAutoLose) {
                    finishGame(12);
                    return;
                }

                if (difficulty === "medium") {
                    const speeds = [5, 8, 12, 15, 20];
                    speedRef.current =
                        speeds[Math.floor(Math.random() * speeds.length)];
                } else if (difficulty === "hard") {
                    const speeds = [2, 3, 4, 5, 6];
                    speedRef.current =
                        speeds[Math.floor(Math.random() * speeds.length)];
                } else {
                    speedRef.current = 10;
                }

                intervalRef.current = window.setTimeout(
                    updateTimer,
                    speedRef.current
                );
            };

            updateTimer();

            return () => {
                if (intervalRef.current !== null)
                    window.clearTimeout(intervalRef.current);
            };
        }
    }, [isRunning, difficulty, finishGame]);

    const startGame = (level: Difficulty) => {
        setDifficulty(level);
        setTime(0);
        setIsRunning(true);
        setResult(null);
        speedRef.current = 100;
        directionRef.current = 1;
    };

    const stopTimer = () => {
        finishGame(time);
    };

    const targetTime = 10;
    const progress = Math.min(time / targetTime, 1);
    const progressAngle = Math.max(progress * 360, 0.5);
    const activeTheme = difficulty ? difficultyThemes[difficulty] : null;
    const accentColor = activeTheme?.accent ?? "#f97316";
    const accentSoftColor = activeTheme?.accentSoft ?? "rgba(249,115,22,0.25)";
    const surfaceGradient =
        activeTheme?.surfaceGradient ??
        "linear-gradient(150deg, rgba(96,165,250,0.2) 0%, rgba(59,130,246,0.1) 100%)";
    const buttonGradient =
        activeTheme?.buttonGradient ??
        "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)";
    const badgeGradient =
        activeTheme?.badgeGradient ??
        "linear-gradient(135deg, rgba(96,165,250,0.4) 0%, rgba(59,130,246,0.15) 100%)";
    const auraGradient =
        activeTheme?.auraGradient ??
        "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.22), transparent 60%)";
    const autoLoseReachedLimit = result
        ? !result.isWin && result.time >= 12
        : false;

    const reset = () => {
        setDifficulty(null);
        setTime(0);
        setIsRunning(false);
        setResult(null);
        if (intervalRef.current !== null)
            window.clearTimeout(intervalRef.current);
    };

    const getDifficultyText = (level: Difficulty) => {
        if (level === "easy") return "Easy";
        if (level === "medium") return "Medium";
        return "Hard";
    };

    if (!difficulty) {
        return (
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
                <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.35),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.28),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(249,115,22,0.22),transparent_55%)]" />
                </div>

                <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-12 px-6 py-16 text-center">
                    <div className="space-y-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wider text-white/70">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            Fresh challenge each run
                        </span>
                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                            🎯 Timing Arena
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-white/70">
                            Pick a difficulty, feel the rhythm, and slam the
                            stop button on{" "}
                            <span className="font-semibold text-white">
                                exactly 10.00 seconds.
                            </span>
                        </p>
                    </div>
                    <div className="grid w-full gap-6 md:grid-cols-3">
                        {difficultyOptions.map((option) => (
                            <button
                                key={option.level}
                                onClick={() => startGame(option.level)}
                                className="group relative flex h-full flex-col items-start justify-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-500 hover:-translate-y-2 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-slate-900"
                                style={{
                                    background: option.gradient,
                                    boxShadow: `0 24px 60px ${option.accent}33`,
                                }}
                            >
                                <div className="flex w-full items-center justify-between gap-3">
                                    <span className="text-3xl">
                                        {option.icon}
                                    </span>
                                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-white/70">
                                        Mode
                                    </span>
                                </div>

                                {/* Title & description */}
                                <div className="mt-6 space-y-2">
                                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
                                        {option.subtitle}
                                    </p>
                                    <h2 className="text-2xl font-bold text-white">
                                        {option.title}
                                    </h2>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-white/70">
                                    {option.description}
                                </p>

                                {/* Bottom metadata */}
                                <div className="mt-6 flex w-full  items-center justify-between gap-2 text-xs text-white/50">
                                    <span className="flex items-center gap-2">
                                        <span
                                            className="h-2.5 w-2.5 rounded-full"
                                            style={{
                                                backgroundColor: option.accent,
                                            }}
                                        />
                                        Signature twist
                                    </span>
                                    <span className="text-white/70 group-hover:text-white">
                                        Play now →
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {bestScore !== null && (
                        <div className="mx-auto flex w-full max-w-lg flex-row items-center justify-center gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-sm text-white/70 backdrop-blur-lg">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
                                    <Trophy className="h-5 w-5" />
                                </div>
                                <div className="text-center">
                                    <p className="text-xs uppercase tracking-widest text-white/50">
                                        Best score
                                    </p>
                                    <p className="text-lg font-semibold text-white">
                                        {bestScore}
                                    </p>
                                </div>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            {/* Divider between badges */}
                            <div className="flex flex-col items-center justify-center text-center">
                                <p className="text-xs uppercase tracking-widest text-white/50">
                                    Games played
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    {gamesPlayed}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.25),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(249,115,22,0.28),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(94,234,212,0.18),transparent_60%)]" />
            </div>
            <div
                className="pointer-events-none absolute inset-0 blur-3xl opacity-60"
                style={{ background: auraGradient }}
            />

            <div className="relative z-10 w-full max-w-4xl px-6 py-16">
                <div
                    className="relative flex flex-col items-center overflow-hidden rounded-[38px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_50px_120px_rgba(15,23,42,0.45)] backdrop-blur-2xl"
                    style={{ background: surfaceGradient }}
                >
                    <div className="flex flex-col items-center gap-6">
                        <div
                            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-white/70"
                            style={{ background: badgeGradient }}
                        >
                            {getDifficultyText(difficulty)} Mode
                        </div>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Test your focus and timing skills
                        </h2>
                        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
                            The timer starts from zero and climbs quickly. Your
                            challenge is simple —{" "}
                            <span className="font-semibold text-white">
                                stop it as close to 10.00 seconds as you can
                            </span>
                        </p>

                        <button
                            onClick={reset}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/10"
                        >
                            <RotateCcw className="h-4 w-4" />
                            Change difficulty
                        </button>
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-8">
                        <div className="relative">
                            <div
                                className="relative h-72 w-72 overflow-hidden rounded-full p-1"
                                style={{
                                    background: `conic-gradient(${accentColor} ${progressAngle}deg, rgba(255,255,255,0.08) ${progressAngle}deg 360deg)`,
                                    boxShadow: `0 30px 80px ${accentSoftColor}`,
                                }}
                            >
                                <div className="absolute inset-5 rounded-full border border-white/10 bg-slate-950/75 shadow-[0_15px_45px_rgba(15,23,42,0.65)] backdrop-blur-xl" />
                                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 rounded-full">
                                    <span className="text-[4.2rem] font-black tracking-tight text-white sm:text-[4.6rem]">
                                        {time.toFixed(2)}
                                    </span>
                                    <span className="text-sm tracking-[0.6em] text-white/45">
                                        SECONDS
                                    </span>
                                    <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs font-semibold text-white/80">
                                        <span
                                            className="h-2 w-2 rounded-full"
                                            style={{
                                                backgroundColor: accentColor,
                                            }}
                                        />
                                        Target 10.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 w-full space-y-6">
                        {!result ? (
                            <button
                                onClick={stopTimer}
                                disabled={!isRunning}
                                className="group relative w-full overflow-hidden rounded-3xl border border-white/10 px-8 py-6 text-lg font-bold text-white shadow-[0_30px_80px_rgba(15,23,42,0.4)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                                style={{
                                    background: buttonGradient,
                                    boxShadow: `0 28px 70px ${accentSoftColor}`,
                                }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isRunning ? (
                                        <>
                                            <Pause className="h-6 w-6" />
                                            Stop now!
                                        </>
                                    ) : (
                                        <>
                                            <Play className="h-6 w-6" />
                                            Start countdown
                                        </>
                                    )}
                                </span>
                                <span className="absolute inset-x-0 bottom-0 h-20 translate-y-12 bg-white/20 blur-xl transition-all duration-300 group-hover:translate-y-6" />
                            </button>
                        ) : (
                            <div className="space-y-6">
                                <div
                                    className="relative flex flex-col items-center gap-4 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.45)] backdrop-blur-2xl"
                                    style={{ background: badgeGradient }}
                                >
                                    <div className="text-5xl">
                                        {result.isWin ? "🎉" : "😅"}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                                            Round summary
                                        </p>
                                        <h3 className="mt-2 text-2xl font-bold text-white">
                                            {result.isWin
                                                ? "Perfect hit! 🏆"
                                                : autoLoseReachedLimit
                                                ? "Timer maxed out"
                                                : "Almost there"}
                                        </h3>
                                    </div>
                                    <p className="max-w-xl text-sm text-white/70">
                                        {autoLoseReachedLimit ? (
                                            <>
                                                The timer surged to{" "}
                                                <span className="font-semibold text-white">
                                                    12.00 seconds
                                                </span>{" "}
                                                before you stopped it. Aim for{" "}
                                                <span className="font-semibold text-white">
                                                    10.00
                                                </span>{" "}
                                                next round.
                                            </>
                                        ) : (
                                            <>
                                                You stopped at{" "}
                                                <span className="font-semibold text-white">
                                                    {result.time.toFixed(2)}{" "}
                                                    seconds
                                                </span>{" "}
                                                with an offset of{" "}
                                                <span className="font-semibold text-white">
                                                    {result.difference.toFixed(
                                                        2
                                                    )}{" "}
                                                    seconds
                                                </span>
                                                .
                                            </>
                                        )}
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/75">
                                        {bestScore !== null && (
                                            <div className="rounded-full bg-white/10 px-4 py-2">
                                                Personal best {bestScore}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <button
                                        onClick={() => startGame(difficulty)}
                                        className="flex-1 rounded-2xl border border-white/10 px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.35)] transition-all hover:border-white/30"
                                        style={{
                                            background: buttonGradient,
                                            boxShadow: `0 24px 60px ${accentSoftColor}`,
                                        }}
                                    >
                                        Play again
                                    </button>
                                    <button
                                        onClick={reset}
                                        className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:bg-white/10"
                                    >
                                        Choose another mode
                                    </button>
                                </div>
                            </div>
                        )}

                        {gamesPlayed > 0 && (
                            <div className="text-center text-xs uppercase tracking-[0.4em] text-white/50">
                                Attempts: {gamesPlayed}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
