interface ImagePlaceholderProps {
  src: string;
  alt: string;
  caption?: string;
  type?: "screenshot" | "gif" | "infographic" | "map";
  priority?: boolean;
}

const bgColors = {
  screenshot: "bg-purple-900/30",
  gif: "bg-red-900/30",
  infographic: "bg-blue-900/30",
  map: "bg-emerald-900/30",
};

const labels = {
  screenshot: "Screenshot",
  gif: "GIF Animation",
  infographic: "Infographic",
  map: "Map",
};

export function ImagePlaceholder({ src, alt, caption, type = "screenshot" }: ImagePlaceholderProps) {
  return (
    <figure className="my-6">
      <div className={`${bgColors[type]} border border-border rounded-xl overflow-hidden aspect-video flex flex-col items-center justify-center gap-3`}>
        {/* When real images exist, replace this div with next/image */}
        <div className="text-4xl opacity-50">
          {type === "screenshot" && "📸"}
          {type === "gif" && "🎬"}
          {type === "infographic" && "📊"}
          {type === "map" && "🗺️"}
        </div>
        <div className="text-sm text-muted-foreground text-center px-4">
          <span className="text-xs uppercase tracking-wider opacity-60">[{labels[type]}]</span>
          <br />
          {alt}
        </div>
        <div className="text-xs text-muted-foreground opacity-40">{src}</div>
      </div>
      {caption && (
        <figcaption className="text-xs text-muted-foreground text-center mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
