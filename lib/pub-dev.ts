import { packagesData } from "./data";

export type PackageStats = {
  name: string;
  title: string;
  description: string;
  pubUrl: string;
  repoUrl: string | null;
  version: string;
  likes: number;
  points: number;
  maxPoints: number;
  downloads30d: number | null;
  /** False when the pub.dev API was unreachable and fallback data is shown. */
  live: boolean;
};

const PUB_API = "https://pub.dev/api/packages";
const MAX_PUB_POINTS = 160;

type PubMeta = {
  latest?: {
    version?: string;
    pubspec?: { description?: string; homepage?: string; repository?: string };
  };
};

type PubScore = {
  likeCount?: number;
  grantedPoints?: number;
  maxPoints?: number;
  downloadCount30Days?: number;
};

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      // Package stats move slowly; one refresh a day is plenty.
      next: { revalidate: 86400 },
    });

    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/** Strips a trailing `.git` so repo links resolve to the browsable page. */
function normalizeRepo(url: string | undefined | null): string | null {
  if (!url) return null;
  return url.replace(/\.git$/, "");
}

export async function getPackageStats(): Promise<PackageStats[]> {
  return Promise.all(
    packagesData.map(async (pkg) => {
      const [meta, score] = await Promise.all([
        getJson<PubMeta>(`${PUB_API}/${pkg.name}`),
        getJson<PubScore>(`${PUB_API}/${pkg.name}/score`),
      ]);

      const pubspec = meta?.latest?.pubspec;

      return {
        name: pkg.name,
        title: pkg.title,
        description: pkg.description,
        pubUrl: `https://pub.dev/packages/${pkg.name}`,
        repoUrl:
          pkg.repoUrl ??
          normalizeRepo(pubspec?.repository) ??
          normalizeRepo(pubspec?.homepage),
        version: meta?.latest?.version ?? pkg.fallbackVersion,
        likes: score?.likeCount ?? pkg.fallbackLikes,
        points: score?.grantedPoints ?? pkg.fallbackPoints,
        maxPoints: score?.maxPoints ?? MAX_PUB_POINTS,
        downloads30d: score?.downloadCount30Days ?? null,
        live: Boolean(meta && score),
      };
    })
  );
}
