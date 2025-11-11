import { notFound } from "next/navigation";
import { period1Data } from "@/data/period1";
import PeriodContent from "@/components/PeriodContent";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PeriodPage({ params }: PageProps) {
  const { id } = await params;

  // Only Period 1 is implemented
  if (id !== "1") {
    notFound();
  }

  return <PeriodContent initialData={period1Data} />;
}

