"use client";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  startTime?: number;
  caption?: string;
}

export function YouTubeEmbed({ videoId, title, startTime, caption }: YouTubeEmbedProps) {
  const params = new URLSearchParams({ hl: "en" });
  if (startTime) params.set("start", String(startTime));
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  return (
    <figure className="my-6">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-muted-foreground text-center mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
