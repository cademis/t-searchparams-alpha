import Link from "next/link";
import { PropsWithChildren, useEffect } from "react";
import { z } from "zod";

import { CreatePost } from "~/app/_components/create-post";
// import { testSchema } from "~/schema";
import { api } from "~/trpc/server";

const METRIC = {
  EHP: "ehp",
EHB: "ehb",
ABYSSAL_SIRE: "abyssal_sire",
ALCHEMICAL_HYDRA: "alchemical_hydra",
ARTIO: "artio",
BARROWS_CHESTS: "barrows_chests",
BRYOPHYTA:"bryophyta"
} as const

type Metric = (typeof METRIC)[keyof typeof METRIC];
function isMetric(metric: Metric): metric is Metric {
  return metric in METRIC
}


type HomeProps = {
  searchParams: {
    preview: Metric
  }
}

export default async function Home({searchParams}: HomeProps) {

 const {preview} = searchParams

 const previewMetric = isMetric(preview) ? preview : undefined

 if (!previewMetric) {
  console.error("Invalid searchParams:", {preview});
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {previewMetric && <pre>
          {previewMetric}
        </pre>}
      </div>
    </main>
  );
}
