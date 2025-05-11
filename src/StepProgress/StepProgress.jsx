import styles from './StepProgress.module.css';
import {
  MapPin,
  Trash2,
  Truck,
  ShieldCheck,
  Calendar,
  CreditCard,
} from "lucide-react";

const steps = [
  { label: "Postcode", icon: MapPin },
  { label: "Waste Type", icon: Trash2 },
  { label: "Select Skip", icon: Truck },
  { label: "Permit Check", icon: ShieldCheck },
  { label: "Choose Date", icon: Calendar },
  { label: "Payment", icon: CreditCard },
];

const currentStep = 2;

export default function StepProgress() {
  return (
    <div className={styles.container}>
      <div className={styles.stepList}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= currentStep;

          return (
            <div key={step.label} className="flex items-center">
              <div className={styles.stepItem}>
                <Icon
                  size={24}
                  className={isActive ? "text-[#1A5CFF]" : "text-white/30"}
                />
                <span className={isActive ? "text-white" : "text-white/40"}>
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={styles.separator} />
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>Choose Your Skip Size</h1>
        <p className={styles.subtitle}>
          Select the skip size that best suits your needs
        </p>
      </div>
    </div>
  );
}