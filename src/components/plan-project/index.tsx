"use client";

import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import X from "@/components/icons/x";
import SectionLabel from "@/components/section-label";
import ArrowRight from "@/components/icons/arrow-right";
import Plus from "@/components/icons/plus";
import Inter from "@/components/inter";
import {
  budgetOptions,
  PlanProjectSchema,
  planProjectSchema,
  serviceOptions,
  timelineOptions,
} from "@/schemas/plan-project";
import { cn } from "@/lib/utils";
import { planProject } from "@/lib/utils/plan-project";

type Props = {
  children: React.ReactNode;
};

function Options({
  options,
  selected,
  setSelected,
  type = "single",
}: {
  options: { key: string; label: string | React.ReactNode }[];
  selected: string[] | string;
  setSelected: (option: string | string[]) => void;
  type?: "single" | "multiple";
}) {
  function handleSelect(option: string) {
    if (type === "single") {
      setSelected(option);
    } else {
      setSelected(
        typeof selected === "string"
          ? selected
          : selected.includes(option)
            ? selected.filter((o) => o !== option)
            : [...selected, option]
      );
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter") {
      handleSelect(e.currentTarget.textContent ?? "");
    }
  }

  return (
    <div className="grid w-full grid-cols-2 gap-4 sm:gap-5">
      {options.map((option) => {
        const isSelected =
          typeof selected === "string"
            ? selected === option.key
            : selected.includes(option.key);

        return (
          <div
            key={option.key}
            tabIndex={0}
            className={cn(
              "flex cursor-pointer items-center justify-center rounded-full border-2 border-foreground-alt bg-background px-4 py-4 transition-colors hover:bg-violet-background sm:px-8",
              isSelected && "bg-violet-background"
            )}
            onClick={() => handleSelect(option.key)}
            onKeyDown={handleKeyDown}
          >
            <div className="flex w-full items-center justify-center gap-4 sm:justify-between">
              <p className="sm::text-left text-center font-konstanz text-xs font-bold leading-[1.4] sm:text-sm">
                {option.label}
              </p>
              <div className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background sm:inline-flex">
                <Plus className="h-3 w-3" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PlanProject({ children }: Props) {
  const form = useForm({
    resolver: yupResolver(planProjectSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      service: [],
      timeline: "",
      budget: "",
      details: "",
    },
  });
  const [isOpen, setOpen] = useState(false);

  const {
    control,
    formState: { isSubmitting },
    reset,
    handleSubmit,
  } = form;

  async function onFormSubmit(data: PlanProjectSchema) {
    try {
      await planProject(data);

      reset();
      setOpen(false);

      toast.success(
        "Thank you for your submission! We'll be in touch soon to discuss your project."
      );
    } catch (error: unknown) {
      console.log("error ", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit form. Please try again."
      );
    }
  }

  function onFormError(errors: FieldErrors<PlanProjectSchema>) {
    console.log("errors ", errors);

    const error = Object.entries(errors)?.[0]?.[1]?.message;
    toast.error(error);
  }

  return (
    <Dialog open={isOpen} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DialogTrigger asChild className="focus">
        {children}
      </DialogTrigger>
      <DialogContent
        className="border-0 bg-transparent p-0"
        showCloseButton={false}
      >
        <DialogHeader className="hidden">
          <DialogTitle>Plan a project</DialogTitle>
          <DialogDescription>
            Fill out our form below and tell us about your vision.
          </DialogDescription>
        </DialogHeader>
        <div className="hide-scroll relative max-h-[min(90vh,750px)] w-full overflow-y-auto overflow-x-hidden rounded-5xl bg-violet-background p-5 sm:max-h-[85vh] sm:rounded-6xl sm:p-[1.875rem]">
          <div className="w-full space-y-8">
            <div
              className="relative rounded-3xl border-2 border-foreground-alt p-6"
              style={{
                background: "var(--gradient-11)",
              }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-6 top-6 h-[2.45rem] w-[2.45rem] rounded-full bg-foreground-alt hover:bg-foreground-alt/80 hover:text-background"
                onClick={() => setOpen(false)}
              >
                <span>
                  <X className="!h-2.5 !w-2.5" />
                </span>
              </Button>
              <div className="flex w-full flex-col gap-8">
                <SectionLabel className="[&>p]:font-konstanz [&>p]:font-bold">
                  Plan a project
                </SectionLabel>
                <p className="text-6xl font-medium leading-[1.2]">
                  Ready to make
                  <br />
                  some noise?
                </p>
                <p className="font-sans-alt text-base leading-[1.8]">
                  Fill out our form below and tell us about your vision.
                </p>
              </div>
            </div>

            <div className="w-full">
              <Form {...form}>
                <form
                  className="space-y-8"
                  onSubmit={handleSubmit(onFormSubmit, onFormError)}
                >
                  <FormField
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="rounded-3xl bg-background p-5 sm:p-8">
                        <FormLabel>
                          <span>What is your name?</span>{" "}
                          <span className="font-inter text-danger">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Linnea Smith" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="rounded-3xl bg-background p-5 sm:p-8">
                        <FormLabel>
                          <span>What is your email address?</span>{" "}
                          <span className="font-inter text-danger">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="hello@meetmisfitmarketing.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem className="rounded-3xl bg-background p-5 sm:p-8">
                        <FormLabel>
                          <span>What is your company name?</span>{" "}
                          <span className="font-inter text-danger">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Misfit Marketing Agency"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="service"
                    render={({ field }) => (
                      <FormItem className="rounded-3xl bg-background p-5 sm:p-8">
                        <FormLabel>
                          <span>What are you looking for?</span>{" "}
                          <span className="font-inter text-danger">*</span>
                        </FormLabel>
                        <FormControl>
                          <Options
                            options={serviceOptions}
                            selected={field.value}
                            setSelected={field.onChange}
                            type="multiple"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem className="rounded-3xl bg-background p-5 sm:p-8">
                        <FormLabel>
                          <span>What is your desired project timeline?</span>{" "}
                          <span className="font-inter text-danger">*</span>
                        </FormLabel>
                        <FormControl>
                          <Options
                            options={timelineOptions}
                            selected={field.value}
                            setSelected={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem className="rounded-3xl bg-background p-5 sm:p-8">
                        <FormLabel>
                          <span>What is your desired project budget?</span>{" "}
                          <span className="font-inter text-danger">*</span>
                        </FormLabel>
                        <FormControl>
                          <Options
                            options={budgetOptions}
                            selected={field.value}
                            setSelected={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="details"
                    render={({ field }) => (
                      <FormItem className="rounded-3xl bg-background p-5 sm:p-8">
                        <FormLabel>
                          <span>
                            Give us the details on your project and the goals
                            that matter most{" "}
                            <span className="font-inter text-danger">*</span>
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="I'm looking for..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="sticky bottom-0 left-0">
                    <Button
                      disabled={isSubmitting}
                      variant="ghost"
                      size="lg"
                      className="w-full justify-between gap-6 bg-secondary px-5 font-konstanz text-base font-bold text-background hover:bg-secondary-alt hover:text-background sm:h-[4.2rem] sm:gap-8 sm:px-8 md:gap-12"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <span>
                          Let<Inter>&apos;</Inter>s get started
                        </span>
                      )}
                      <span className="inline-flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full bg-background text-foreground sm:h-[2.625rem] sm:w-[2.625rem]">
                        <ArrowRight className="!h-3.5 !w-3.5 lg:!h-4 lg:!w-4" />
                      </span>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
