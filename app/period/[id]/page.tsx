import { notFound } from "next/navigation";
import { period1Data } from "@/data/period1";
import { period2Data } from "@/data/period2";
import { period3Data } from "@/data/period3";
import { period4Data } from "@/data/period4";
import { period5Data } from "@/data/period5";
import PeriodContent from "@/components/PeriodContent";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PeriodPage({ params }: PageProps) {
  const { id } = await params;

  let periodData;
  if (id === "1") {
    periodData = period1Data;
  } else if (id === "2") {
    periodData = period2Data;
  } else if (id === "3") {
    periodData = period3Data;
  } else if (id === "4") {
    periodData = period4Data;
  } else if (id === "5") {
    periodData = period5Data;
  } else {
    notFound();
  }

  return <PeriodContent initialData={periodData} />;
}

