import { useRef } from "react";
import { usePlayback } from "./PlaybackProvider";
import { useZoom } from "./ZoomProvider";

interface SpectrogramContentProps {
  dataURL: string;
}

function SpectrogramContent(props: SpectrogramContentProps) {
  const { dataURL } = props;
  const playheadRef = useRef<SVGLineElement>(null);

  const { duration, currentTime } = usePlayback();
  const { zoomedDuration } = useZoom();

  if (!duration) {
    return null;
  }

  return (
    <>
      <image
        width={duration}
        height={100}
        x={0}
        y={0}
        href={dataURL}
        preserveAspectRatio="none"
        pointerEvents="none"
      />
      <line
        ref={playheadRef}
        stroke="red"
        strokeWidth={0.005 * zoomedDuration}
        x1={currentTime}
        x2={currentTime}
        y1={0}
        y2={100}
      />
    </>
  );
}

export default SpectrogramContent;
