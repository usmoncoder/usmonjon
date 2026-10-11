import { ArrowRight, CircleCheck, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/content/profile";
import { CodeWindow } from "@/components/ui/code-window";
import { developerSnippet } from "@/content/code-sample";
import { HeroBackdrop } from "./hero-backdrop";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate border-b border-border lg:h-[33rem]">
      <div
        className="pointer-events-none absolute inset-y-0 left-[52%] hidden w-[42rem] -translate-x-1/2 lg:block xl:left-[53%]"
        aria-hidden
      >
        <HeroBackdrop />
      </div>

      {profile.avatar ? (
        <div
          className="pointer-events-none absolute bottom-0 left-[52%] hidden h-[98%] w-[34rem] -translate-x-1/2 lg:block xl:left-[53%] xl:w-[38rem]"
          aria-hidden
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
          }}
        >
          <Image
            src={profile.avatar}
            alt=""
            fill
            priority
            sizes="38rem"
            className="object-contain object-bottom"
          />
        </div>
      ) : null}

      <div className="relative flex h-full flex-col justify-center gap-5 px-5 py-10 sm:px-7 lg:max-w-[36rem] lg:py-0 lg:pl-12 xl:pl-16">
        <span className="text-sm text-muted">
          <span className="font-mono text-accent/60">$</span> {t("greeting")}
          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[2px] bg-accent/70" style={{ animation: "blink-cursor 1s step-end infinite" }} />
        </span>

        <div className="enter flex flex-col gap-1">
          <h1 className="type-hero">{profile.firstName}</h1>
          {/* Split on the last word so the accent lands on it, whatever the role is. */}
          <p className="type-section font-bold">
            {profile.role.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-accent">
              {profile.role.split(" ").slice(-1)}
            </span>
          </p>
        </div>

        <p className="enter max-w-sm text-sm leading-relaxed text-muted sm:text-base">
          {t("subtitle")}
        </p>

        <div className="enter flex flex-wrap gap-3">
          <Link href="/work" className={buttonVariants({ size: "lg" })}>
            {t("primaryCta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
          <Link
            href="/resume"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            <Download className="h-4 w-4" />
            {t("secondaryCta")}
          </Link>
        </div>

        <div className="enter flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          {profile.location ? (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {profile.location.city}, {profile.location.country}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5">
            <CircleCheck className="h-3.5 w-3.5 text-accent" />
            {t("available")}
          </span>
        </div>

        {profile.avatar ? (
          <div
            className="relative mx-auto aspect-[109/100] w-full max-w-sm lg:hidden"
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
            }}
          >
            <Image
              src={profile.avatar}
              alt={profile.fullName ?? profile.firstName}
              fill
              priority
              sizes="(min-width: 640px) 24rem, 100vw"
              className="object-contain object-bottom"
            />
          </div>
        ) : null}
      </div>

      {/* Floats over the portrait, as in the design. */}
      <div className="enter relative mt-6 flex flex-col gap-3 px-5 sm:px-7 lg:absolute lg:right-8 lg:top-[8.5rem] lg:mt-0 lg:w-[22.5rem] lg:px-0 xl:right-12">
        <CodeWindow filename="developer.js" lines={developerSnippet} />

        <div className="card flex items-center gap-3 bg-surface/95 px-4 py-3 backdrop-blur dark:shadow-[0_0_20px_-6px_rgba(0,229,255,0.1)]">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <div className="flex flex-col leading-snug">
            <span className="text-sm font-semibold">{t("availableBadge")}</span>
            <span className="text-xs text-muted">{t("availableNote")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
