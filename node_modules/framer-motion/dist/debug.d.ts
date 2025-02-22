type StepId = "read" | "resolveKeyframes" | "update" | "preRender" | "render" | "postRender";

declare const stepsOrder: StepId[];
type StepNames = (typeof stepsOrder)[number];

interface Summary {
    min: number;
    max: number;
    avg: number;
}
type FrameloopStatNames = "rate" | StepNames;
interface Stats<T> {
    frameloop: {
        [key in FrameloopStatNames]: T;
    };
    animations: {
        mainThread: T;
        waapi: T;
        layout: T;
    };
    layoutProjection: {
        nodes: T;
        calculatedTargetDeltas: T;
        calculatedProjections: T;
    };
}
type StatsBuffer = number[];
type FrameStats = Stats<number>;
type StatsRecording = Stats<StatsBuffer>;
type StatsSummary = Stats<Summary>;

declare function reportStats(): StatsSummary;
declare function recordStats(): typeof reportStats;

export { type FrameStats, type Stats, type StatsBuffer, type StatsRecording, type StatsSummary, type Summary, recordStats };
