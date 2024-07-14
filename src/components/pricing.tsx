import { PLANS } from "../lib/stripe/plans";

type Billing = "monthly" | "annually";
  
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Check, HelpCircle, Loader, X } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "../components/ui/tooltip";

export default function Pricing() {
    return(

        <div className="flex w-full flex-col">
        <h1 className="font-cal text-3xl md:text-5xl">
          Simple, transparent
          <br />
          pricing
        </h1>
  
        <p className="mt-4 text-lg md:text-xl">
          Start with a free plan and upgrade as you grow.
        </p>
<div className="my-12" />
        <div
        id="pricing"
        className="flex w-full flex-col gap-6 md:grid md:grid-cols-2"
      >
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="flex w-full flex-col rounded-lg border border-border bg-background px-6 py-3 md:px-8"
          >
            <p className="font-cal text-2xl">{plan.name}</p>
  
            <p className="mt-1 text-muted-foreground">{plan.description}</p>
  
            <p className="mt-3 font-cal text-6xl">
              $0
            </p>
  
            <p className="mt-2 text-muted-foreground">
              per month
            </p>
  
            <div className="mt-4 flex w-full flex-col gap-2 text-left">
              {plan.features.map((f, idx) => (
                <span key={idx} className="inline-flex items-center">
                  {f.notAvailable ? (
                    <X
                      className="mr-4 inline-block text-muted-foreground"
                      size={16}
                    />
                  ) : (
                    <Check
                      className="mr-4 inline-block text-green-500"
                      size={16}
                    />
                  )}
                  {f.text}
                  {f.tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="ml-2">
                          <HelpCircle
                            className="inline-block text-muted-foreground"
                            size={16}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{f.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </span>
              ))}
            </div>
  
            <div className="my-auto" />
              <Button
                className="mt-4"
              >
              </Button>
  
            {plan.footer && (
              <p className="mt-4 text-xs text-muted-foreground">{plan.footer}</p>
            )}
          </div>
        ))}
      </div>
        </div>
        
    )
}