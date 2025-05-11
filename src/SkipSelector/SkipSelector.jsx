import React, { useState } from "react";
import styles from './SkipSelector.module.css';
import yarder from '../../assets/4-yarder-skip.jpg';

const skips = [
  { id: 17933, size: 4, hire_period_days: 14, transport_cost: null, per_tonne_cost: null, price_before_vat: 278, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:46.897146", updated_at: "2025-04-07T13:16:52.813", allowed_on_road: true, allows_heavy_waste: true },
  { id: 17934, size: 6, hire_period_days: 14, transport_cost: null, per_tonne_cost: null, price_before_vat: 305, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:46.897146", updated_at: "2025-04-07T13:16:52.992", allowed_on_road: true, allows_heavy_waste: true },
  { id: 17935, size: 8, hire_period_days: 14, transport_cost: null, per_tonne_cost: null, price_before_vat: 375, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:46.897146", updated_at: "2025-04-07T13:16:53.171", allowed_on_road: true, allows_heavy_waste: true },
  { id: 17936, size: 10, hire_period_days: 14, transport_cost: null, per_tonne_cost: null, price_before_vat: 400, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:46.897146", updated_at: "2025-04-07T13:16:53.339", allowed_on_road: false, allows_heavy_waste: false },
  { id: 17937, size: 12, hire_period_days: 14, transport_cost: null, per_tonne_cost: null, price_before_vat: 439, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:46.897146", updated_at: "2025-04-07T13:16:53.516", allowed_on_road: false, allows_heavy_waste: false },
  { id: 17938, size: 14, hire_period_days: 14, transport_cost: null, per_tonne_cost: null, price_before_vat: 470, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:46.897146", updated_at: "2025-04-07T13:16:53.69", allowed_on_road: false, allows_heavy_waste: false },
  { id: 17939, size: 16, hire_period_days: 14, transport_cost: null, per_tonne_cost: null, price_before_vat: 496, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:46.897146", updated_at: "2025-04-07T13:16:53.876", allowed_on_road: false, allows_heavy_waste: false },
  { id: 15124, size: 20, hire_period_days: 14, transport_cost: 248, per_tonne_cost: 248, price_before_vat: 992, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:40.344435", updated_at: "2025-04-07T13:16:52.434", allowed_on_road: false, allows_heavy_waste: true },
  { id: 15125, size: 40, hire_period_days: 14, transport_cost: 248, per_tonne_cost: 248, price_before_vat: 992, vat: 20, postcode: "NR32", area: "", forbidden: false, created_at: "2025-04-03T13:51:40.344435", updated_at: "2025-04-07T13:16:52.603", allowed_on_road: false, allows_heavy_waste: false }
];

export default function SkipSelector() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {skips.map(skip => {
          const disabled = !skip?.allowed_on_road;
          const isSelected = selectedSkip?.size === skip?.size;

          return (
            <div
              key={skip?.id}
              onClick={() => !disabled && setSelectedSkip(skip)}
              className={`
            ${styles.card} 
            ${isSelected ? styles.cardSelected : ''} 
            ${disabled ? styles.cardDisabled : ''}
          `}
            >
              {isSelected && (
                <div className={styles.selectedBadge}>Selected</div>
              )}

              <div className={styles.imageContainer}>
                <div className={styles.imageBox}>
                  <img src={yarder} alt="Yarder Skip" />
                </div>
                <div className={styles.sizeBadge}>{skip?.size} Yards</div>
              </div>

              <div>
                <h2 className={styles.cardTitle}>{skip?.size} Yard Skip</h2>
                <p className={styles.cardSub}>{skip?.hire_period_days} day hire period</p>

                {!skip?.allowed_on_road && (
                  <p className={styles.warning}>Not Allowed On The Road</p>
                )}

                <p className={styles.price}>£{skip?.price_before_vat}</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    !disabled && setSelectedSkip(skip);
                  }}
                  disabled={disabled}
                  className={`
                    ${styles.button} 
                    ${isSelected ? styles.buttonPrimary : styles.buttonSecondary} 
                    ${disabled ? styles.buttonDisabled : ''}
                  `}
                >
                  {isSelected ? 'Continue' : 'Select This Skip'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedSkip && (
        <div className={styles.footerBar}>
          <div className={styles.skipInfo}>
            <span className={styles.skipTitle}>{selectedSkip?.size} Yard Skip</span>
            <div className={styles.skipDetails}>
              <span className={styles.price}>{`£${selectedSkip?.price_before_vat}`}</span>
              <span className={styles.hirePeriod}>{selectedSkip?.hire_period_days} day hire</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.back}`}>Back</button>
            <button className={`${styles.button} ${styles.continue}`}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}
