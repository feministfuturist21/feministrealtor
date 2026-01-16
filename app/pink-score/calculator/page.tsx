import PinkScoreCalculator from "@/components/PinkScoreCalculator";

export const metadata = {
  title: "Pink Score Calculator",
  description: "Score a home for lifestyle fit in Toronto/GTA and get a scorecard emailed to you.",
};

export default function PinkScoreCalculatorPage() {
  return (
    <main>
      <PinkScoreCalculator />
    </main>
  );
}
