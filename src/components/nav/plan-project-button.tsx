import { Button } from "@/components/ui/button";
import Plus from "@/components/icons/plus";
import PlanProject from "@/components/plan-project";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function PlanProjectButton({ className }: Props) {
  return (
    <PlanProject>
      <Button size="lg" variant="secondary" className={cn("gap-4", className)}>
        Plan a project{" "}
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-background text-foreground lg:h-7 lg:w-7">
          <Plus className="!h-3 !w-3 lg:!h-3.5 lg:!w-3.5" />
        </span>
      </Button>
    </PlanProject>
  );
}
