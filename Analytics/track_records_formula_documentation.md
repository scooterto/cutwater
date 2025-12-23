# Track Records Formula Documentation

This document explains the formulas and calculations used in the track records data for Cutwater Analytics.

## Column Definitions

### money_at_risk_percent
**Description:** Percentage of portfolio that is unhedged - money that only has spot position with no corresponding perpetual (perp) position.

**Example:** As of December 2025, mostly SOL is classified as "money at risk" since it lacks hedging via perp positions.

**Formula:** `(Unhedged Spot Value / Total Portfolio Value) * 100`

---

### net_exposure_value
**Description:** The actual dollar amount of unhedged exposure. This is the same concept as money_at_risk_percent but expressed as an absolute value rather than a percentage.

**Formula:** `Total Spot Value - Hedged Value`

**Unit:** USD

---

### ninety_day_apy
**Description:** Annualized yield based on the past 90 days of dollar growth.

**Formula:** `(Past 90 Days Dollar Growth %) * 4`

**Note:** Multiplied by 4 to annualize (4 quarters in a year).

---

### thirty_day_apy
**Description:** Annualized yield based on the past 30 days of dollar growth.

**Formula:** `(Past 30 Days Dollar Growth %) * 12`

**Note:** Multiplied by 12 to annualize (12 months in a year).

---

### portfolio_expected_apr
**Description:** The total expected annual percentage rate combining both implied funding rate returns and staking rewards.

**Formula:** `Implied APR + Staking APR`

---

### portfolio_expected_30days_earnings
**Description:** Expected earnings over the next 30 days based on the expected APR.

**Formula:** `(Expected APR * AUM) / 12`

**Unit:** USD

---

### portfolio_implied_apr
**Description:** The annual percentage rate derived from funding rates. This is calculated using a weighted combination of multiple daily APR data points from the exchange.

**Formula Components:**
- 3-day sum of daily funding rates
- 7-day sum of daily funding rates
- 30-day sum of daily funding rates
- Previous 8-hour funding rate
- Last 8-hour funding rate

**Calculation:** These 5 data points are combined to derive the daily funding rate APR, then annualized.

---

### portfolio_implied_30days_earnings
**Description:** Expected earnings over the next 30 days based solely on the implied APR (funding rates only, excluding staking).

**Formula:** `(Implied APR * AUM) / 12`

**Unit:** USD

---

## Additional Columns

### dollar_value_growth
The cumulative growth factor of the portfolio value since inception.

### total_assets_value
Total value of all assets in the portfolio (in USD).

### usdi_in_circulation
Total amount of USDi tokens currently in circulation.

### timestamp
The date and time when the record was captured.

### id
Unique identifier for each record.

---

## Notes

- All APY/APR values are expressed as decimals (e.g., 0.15 = 15%)
- Negative implied APR indicates the portfolio is paying funding rather than receiving it
- Data is recorded approximately every 8 hours (3 times per day)

---

*Last Updated: December 2025*
