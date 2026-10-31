import { FeedbackPanel } from "@/components/studio/FeedbackPanel";
import { feedbackPath } from "@/lib/feedback";
import { useI18n } from "@/lib/i18n";
export function FeedbackQRInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const { t } = useI18n();
  return <div className="space-y-3"><FeedbackPanel picker onPick={f => onChange(`${window.location.origin}${feedbackPath(f.slug)}`)} />{value && <p className="break-all text-xs text-muted-foreground">{t("feedback.selected")}: {value}</p>}</div>;
}