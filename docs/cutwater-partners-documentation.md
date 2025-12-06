# Cutwater Partners Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Overview](#overview)
3. [How Cutwater Works](#how-cutwater-works)
4. [Delta-Neutral Funding Rate Strategy](#delta-neutral-funding-rate-strategy)
5. [Asset Selection Criteria](#asset-selection-criteria)
6. [Position Sizing & Limits](#position-sizing--limits)
7. [Historical Performance](#historical-performance)
8. [Leverage Mechanism](#leverage-mechanism)
9. [Risk Management](#risk-management)

---

## Introduction

### The Problem

The cryptocurrency market offers significant yield opportunities through funding rate arbitrage, but most retail investors lack:

- Access to professional trading infrastructure
- Expertise to execute complex delta-neutral strategies
- Capital efficiency to diversify across multiple assets
- Time to actively manage positions 24/7

Additionally, existing solutions like Ethena focus primarily on ETH and BTC, leaving significant yield opportunities in other liquid cryptocurrencies untapped.

### The Solution

Cutwater Partners provides a professionally managed funding rate arbitrage strategy that:

- **Expands Beyond ETH/BTC**: Captures higher yields by including carefully selected altcoins with strong funding rate profiles
- **Maintains Delta Neutrality**: Eliminates directional market risk through automated hedging
- **Optimizes Capital Efficiency**: 1:1 minting ratio with systematic position management
- **Delivers Transparent Returns**: All positions and performance metrics publicly auditable

By specializing in multi-asset funding rate arbitrage with rigorous risk controls, Cutwater delivers superior risk-adjusted returns compared to ETH/BTC-only strategies.

---

## Overview

### Core Strategy

Cutwater Partners operates a delta-neutral funding rate arbitrage strategy across multiple cryptocurrency assets. The protocol captures funding rate premiums from perpetual futures markets while hedging away directional price risk.

### Key Differentiators

#### 1. Multi-Asset Approach

Unlike competitors focused solely on ETH and BTC, Cutwater includes:

- Bitcoin (BTC)
- Ethereum (ETH)
- Carefully selected altcoins with favorable risk/reward profiles

**Advantage**: Higher aggregate yields from diversified funding rate sources

#### 2. Specialized Asset Selection

Rigorous criteria for including additional assets beyond ETH/BTC:

- Sufficient market liquidity
- Minimum market capitalization thresholds
- Consistent historical funding rate performance
- Availability on qualified trading venues

#### 3. Active Portfolio Management

- Continuous monitoring of funding rates across assets
- Dynamic rebalancing to optimize yield
- Position sizing relative to liquidity constraints
- Real-time risk management and stress testing

### Protocol Architecture

**Three-Layer System:**

1. **USDi Token**: Interest-bearing synthetic dollar maintaining $1 peg
2. **Asset Pool**: Diversified crypto collateral backing USDi
3. **Hedging Layer**: Delta-neutral short positions on perpetual futures

---

## How Cutwater Works

### The Minting Process

#### Step 1: User Deposits Collateral

- User provides accepted assets (USDC, USDT, or whitelisted crypto)
- Minimum deposit: [DATA NEEDED: minimum deposit amount]
- Receives USDi tokens on ~1:1 basis

#### Step 2: Collateral Allocation

Protocol allocates capital to spot holdings across multiple assets

Asset allocation based on:
- Current funding rate opportunities
- Liquidity availability
- Risk management parameters

#### Step 3: Hedge Execution

- Protocol opens corresponding short perpetual positions
- Positions sized to maintain delta neutrality
- Distributed across multiple exchanges for risk diversification

#### Step 4: Yield Generation

- Earn funding rate payments from short positions
- Capture staking rewards where applicable (e.g., stETH)
- Generate basis spread from futures premiums

#### Step 5: Profit Distribution

- Aggregate yields distributed to USDi holders
- Distribution frequency: Monthly (configurable via governance)
- Automatic compounding of returns

### Delta-Neutral Mechanics

For every dollar of spot crypto held, Cutwater maintains an equivalent short position:

```
Long Position: $100 worth of crypto assets (BTC, ETH, alts)
+
Short Position: $100 notional short perpetual futures
=
Net Delta: ~$0 (market-neutral)
```

#### Price Movement Example

**If Crypto Prices Increase 10%:**
- Spot holdings gain: +$10
- Short futures lose: -$10
- Net P&L: $0
- USDi value: Stable at $1.00

**If Crypto Prices Decrease 10%:**
- Spot holdings lose: -$10
- Short futures gain: +$10
- Net P&L: $0
- USDi value: Stable at $1.00

**Funding Rate Revenue:**
- Earned regardless of price direction
- Typical range: 5-40% APY depending on market conditions
- Paid every 8 hours on most exchanges

---

## Delta-Neutral Funding Rate Strategy

### What is Funding Rate Arbitrage?

**Funding Rates** are periodic payments between long and short position holders in perpetual futures markets. They serve to keep perpetual futures prices anchored to spot prices.

**Market Dynamics:**
- When market is bullish: More longs than shorts → Longs pay shorts (positive funding)
- When market is bearish: More shorts than longs → Shorts pay longs (negative funding)
- Typical crypto markets: Net positive funding rates over time (~70-80% of days)

**The Arbitrage Opportunity:**
1. Hold spot crypto assets (long exposure)
2. Open equal-sized short perpetual positions
3. Collect funding rate payments (typically paid by longs)
4. Maintain delta neutrality (eliminate price risk)

### Why Cutwater Generates Higher Yields Than ETH/BTC-Only Strategies

#### 1. Expanded Asset Universe

**Ethena Approach:**
- Focuses on ETH and BTC
- Average combined funding rate: ~7-12% APY
- Limited by ETH/BTC funding rate cycles

**Cutwater Approach:**
- Includes ETH, BTC, AND selected altcoins
- Captures premium funding rates from volatile altcoins
- Altcoin funding rates often 2-5x higher than BTC/ETH

**Historical Funding Rate Comparison:**

| Asset Class | Average Funding Rate | Typical Range |
|-------------|---------------------|---------------|
| BTC | 7-10% APY | 5-15% APY |
| ETH | 8-12% APY | 6-18% APY |
| Major Alts (SOL, AVAX, etc.) | 15-25% APY | 10-40% APY |
| Selected Alts | 20-35% APY | 15-50% APY |

**Portfolio Effect:** By allocating 30-50% to carefully selected altcoins with higher funding rates, Cutwater can achieve 5-10% higher annual yields compared to ETH/BTC-only strategies.

#### 2. Diversification Benefits

**Funding Rate Correlation:**
- ETH and BTC funding rates are highly correlated (0.7-0.8)
- Altcoin funding rates show lower correlation (0.3-0.6)
- During periods when ETH/BTC funding goes negative, alts may remain positive

**Example Scenario:**
- ETH/BTC funding: -5% APY (bear market)
- SOL funding: +15% APY (remains bullish)
- Portfolio weighted 50/50: +5% net APY vs -5% ETH/BTC only

#### 3. Optimal Asset Rotation

**Dynamic Allocation:**
- Continuously monitor funding rates across 10-20 qualified assets
- Shift capital toward assets with favorable funding conditions
- Reduce exposure to assets experiencing funding rate compression

**Active Management Edge:** Unlike passive ETH/BTC strategies, Cutwater actively optimizes for:
- Current funding rate opportunities
- Predicted funding rate trends
- Risk-adjusted return profiles

### Comparison to Ethena Protocol

| Feature | Ethena | Cutwater Partners |
|---------|--------|-------------------|
| Primary Assets | ETH, BTC | BTC, ETH, + 10-15 alts |
| Average APY | 8-12% | 15-25% [DATA NEEDED: verify range] |
| Asset Selection | Fixed (2 assets) | Dynamic (15-20 assets) |
| Funding Diversification | Low (2 sources) | High (15-20 sources) |
| Market Cap Focus | Large cap only | Large + Mid cap |
| TVL Capacity | $1B+ potential | Limited by alt liquidity |
| Strategy Complexity | Moderate | High |

**Key Tradeoff:**
- **Ethena**: Lower yields, unlimited scalability
- **Cutwater**: Higher yields, TVL limited by altcoin liquidity

---

## Asset Selection Criteria

### Why Asset Selection Matters

Including altcoins introduces additional risks:

- Lower liquidity → Higher slippage and execution costs
- Smaller market caps → Greater manipulation risk
- Less mature derivatives markets → Counterparty concerns
- Higher volatility → Larger hedging requirements

**Cutwater's Approach:** Rigorous multi-factor screening to include only assets that meet strict risk/reward criteria.

### 1. Liquidity Requirements

**Spot Market Liquidity:**
- Minimum daily spot trading volume: $50M+ [DATA NEEDED: verify threshold]
- Minimum order book depth (±2%): $5M+ [DATA NEEDED: verify threshold]
- Available on at least 3 major exchanges (Binance, OKX, Bybit)

**Rationale:**
- Ensures ability to enter/exit positions without significant slippage
- Reduces market impact when rebalancing
- Provides alternative venues if one exchange has issues

**Derivatives Market Liquidity:**
- Minimum daily perpetual futures volume: $100M+ [DATA NEEDED: verify threshold]
- Minimum open interest: $200M+ [DATA NEEDED: verify threshold]
- Spread between best bid/ask: <0.05% [DATA NEEDED: verify threshold]

**Rationale:**
- Tight spreads minimize execution costs
- High open interest ensures stable funding rate mechanisms
- Deep liquidity prevents price manipulation

### 2. Market Capitalization Threshold

**Minimum Market Cap:** $1B+ [DATA NEEDED: verify threshold]

**Rationale:**

Larger market caps correlate with:
- More mature and stable markets
- Lower manipulation risk
- Better derivatives infrastructure
- More institutional participation

**Exclusions:**
- Micro-cap tokens (<$500M)
- Tokens with concentrated ownership (>30% in top 10 wallets)
- Tokens with limited exchange listings (<3 major exchanges)

### 3. Historical Funding Rate Analysis

**Minimum Track Record:** 12 months of funding rate history

**Evaluation Criteria:**

**A. Average Funding Rate**
- Target: >10% APY median funding rate
- Calculation: Rolling 90-day average
- Must exceed BTC/ETH average by at least 3%

**B. Funding Rate Consistency**
- Positive funding rate at least 70% of days
- Standard deviation <15% annualized
- No sustained periods (>30 days) of deep negative funding (<-10% APY)

**C. Funding Rate Stability During Stress**
- Behavior during major market crashes
- Correlation with broader market funding rates
- Recovery time after negative funding episodes

**D. Premium Persistence**
- Consistent funding rate premium over ETH/BTC
- Not driven by temporary events (airdrops, protocol launches, etc.)
- Structural factors supporting continued premium

**Example Qualified Assets (Hypothetical):**

| Asset | Avg Funding | % Positive Days | Vs ETH Premium | Market Cap |
|-------|-------------|-----------------|----------------|------------|
| SOL | 18% APY | 75% | +6% | $80B |
| AVAX | 16% APY | 73% | +4% | $15B |
| MATIC | 14% APY | 72% | +2% | $7B |
| NEAR | 20% APY | 71% | +8% | $6B |

[DATA NEEDED: Actual qualified assets and their metrics]

### 4. Exchange Availability

**Qualified Venues:**
- Tier 1: Binance, OKX, Bybit, Deribit
- Tier 2: Bitget, Gate.io, Hyperliquid
- Must be available on at least 2 Tier 1 exchanges

**Evaluation Factors:**
- Exchange reputation and track record
- Custody and security standards
- API reliability and uptime
- Historical funding rate competitiveness
- Counterparty risk rating

**Rationale:**
- Diversification across multiple venues
- Backup execution if primary exchange fails
- Ability to capture best funding rates
- Risk mitigation through venue selection

### 5. Technical & Fundamental Quality

**Technical Factors:**
- Network uptime >99.9%
- Active development (GitHub commits, updates)
- Strong developer community
- Clear upgrade roadmap

**Fundamental Factors:**
- Real utility and adoption metrics
- Growing DeFi ecosystem (if applicable)
- Institutional backing or partnerships
- Regulatory clarity (no securities classification concerns)

**Red Flags (Immediate Disqualification):**
- History of exchange delistings
- Ongoing SEC investigation or enforcement action
- Network halts or major technical failures
- Evidence of price manipulation
- Concentrated or suspicious trading patterns

### 6. Correlation Analysis

**Goal:** Maintain uncorrelated funding rate sources

**Measurement:**
- Calculate 90-day rolling correlation of funding rates
- Target average pairwise correlation: <0.6
- Avoid adding assets that increase portfolio correlation >0.7

**Benefits:**
- Reduces risk of simultaneous funding rate compression
- Stabilizes yields across market cycles
- Improves risk-adjusted returns

### Dynamic Asset Inclusion Process

**Quarterly Review:**
- Screen all assets meeting liquidity/market cap thresholds
- Evaluate historical funding rate performance
- Assess correlation with existing portfolio
- Calculate risk-adjusted return potential
- Community governance vote on additions/removals

**Continuous Monitoring:**
- Real-time tracking of all qualified assets
- Immediate removal if metrics fall below thresholds
- Dynamic position sizing based on current conditions

---

## Position Sizing & Limits

### Maximum Position Size Framework

Position limits ensure that Cutwater can exit positions without material market impact and maintain delta neutrality even during extreme volatility.

### 1. Relative to Trading Volume

**Maximum Position Rule:**

```
Max Position Size = Min(
  Average Daily Volume × 5%,
  Open Interest × 3%,
  Liquidity Threshold
)
```

**Example Calculation:**

Asset: SOL
- Average daily futures volume: $2B
- Open interest: $800M
- Liquidity threshold: $50M

```
Max Position = Min(
  $2B × 5% = $100M,
  $800M × 3% = $24M,
  $50M
)
= $24M maximum position in SOL
```

**Rationale:**
- 5% of daily volume → Can exit over 20 days with <5% market impact
- 3% of open interest → Minimal impact on funding rate mechanism
- Liquidity threshold → Conservative buffer for stress scenarios

### 2. Relative to Market Capitalization

**Market Cap Position Limit:**

```
Max Position = Market Cap × 0.1%
```

**Example:**
- Asset market cap: $10B
- Maximum position: $10M

**Rationale:**
- Ensures position is negligible relative to total token supply
- Prevents Cutwater from becoming significant market participant
- Reduces risk of affecting asset price through trading activity

### 3. Portfolio Concentration Limits

**Asset-Level Limits:**
- Maximum 15% of portfolio in any single altcoin
- Maximum 25% combined in all altcoins <$5B market cap
- Minimum 30% in BTC/ETH combined (stability anchor)

**Example $100M Portfolio:**
- BTC: $35M (35%)
- ETH: $25M (25%)
- SOL: $15M (15%) - max for single alt
- AVAX: $10M (10%)
- MATIC: $8M (8%)
- Other: $7M (7%)

**Rationale:**
- Prevents overexposure to any single asset
- Maintains core stability through BTC/ETH
- Balances yield optimization with risk management

### 4. Exchange-Level Limits

**Per-Exchange Position Limits:**
- Maximum 40% of total portfolio on any single exchange
- Maximum 60% combined on top 2 exchanges
- Minimum 3 exchanges for portfolio diversification

**Example $100M Portfolio:**
- Binance: $40M (40%)
- OKX: $30M (30%)
- Bybit: $20M (20%)
- Other: $10M (10%)

**Rationale:**
- Reduces counterparty risk from exchange failure
- Maintains operational flexibility
- Ensures ability to continue operations if one venue fails

### 5. Leverage Constraints

**Maximum Leverage:**
- Effective leverage: 1.2x max [DATA NEEDED: verify leverage limit]
- Never exceeds exchange initial margin requirements
- Conservative buffer for volatility spikes

**Calculation Example:**
- Portfolio value: $100M
- Spot holdings: $100M
- Short perpetual notional: $100M
- Effective leverage: 1.0x (true delta-neutral)

**Why Low Leverage:**
- Delta-neutral strategy doesn't require leverage
- Maintains safety margin during extreme volatility
- Prevents liquidation risk
- Enables quick position adjustments

### 6. Rebalancing Triggers

**Automatic Rebalancing When:**

**A. Asset Drift:**
- Any position exceeds max limit by >10%
- Triggered by relative price movements or portfolio changes

**B. Liquidity Deterioration:**
- Daily volume drops below threshold
- Open interest declines significantly
- Exchange delisting announcement

**C. Funding Rate Changes:**
- Asset funding rate falls below BTC/ETH
- Sustained negative funding (>7 days)
- Better opportunities identified in other assets

**D. Risk Events:**
- Exchange experiencing technical issues
- Network congestion or downtime
- Regulatory developments
- Security incidents

### 7. TVL Growth Management

**Scaling Strategy:**

**Phase 1: $0-50M TVL**
- Focus on BTC, ETH, and top 3 altcoins
- Conservative position sizes
- Establish track record

**Phase 2: $50-200M TVL**
- Expand to 8-10 qualified altcoins
- Increase position sizes within limits
- Optimize yield through diversification

**Phase 3: $200M+ TVL**
- Maintain 10-15 asset portfolio
- May need to increase BTC/ETH allocation
- Accept lower marginal yields to accommodate scale

**TVL Limit Based on Liquidity:**

```
Estimated TVL Capacity = Σ (Max Position per Asset)
```

[DATA NEEDED: Calculate current TVL capacity based on qualified assets]

**Example Capacity Calculation:**

| Asset | Max Position | Count |
|-------|--------------|-------|
| BTC | $100M | 1 |
| ETH | $80M | 1 |
| Major alts ($20-30M each) | $150M | 6 |
| Mid alts ($10-15M each) | $100M | 8 |
| **Total Capacity** | **~$430M** | |

**Realistic Constraint:** Given rebalancing needs and volatility buffers, practical TVL limit: ~$250-300M

---

## Historical Performance

[DATA NEEDED: Please provide the following metrics]

### Year-to-Date Performance (2024)

**Yield Performance:**
- YTD Return: [X%]
- Monthly breakdown:
  - January: [X%]
  - February: [X%]
  - March: [X%]
  - [Continue for each month]
- Annualized APY: [X%]
- Sharpe Ratio: [X.XX]
- Maximum Drawdown: [X%]
- Positive Return Months: [X] out of [Y]

**Comparison Benchmarks:**
- Cutwater APY: [X%]
- Ethena (sUSDe) APY: ~10-15%
- Resolv (stUSR) APY: ~5-6%
- Traditional Staking (stETH): ~3-4%

### TVL Growth Trajectory

**Total Value Locked:**
- Launch Date: [DATE]
- Initial TVL: $[X]M
- Current TVL: $[X]M
- Peak TVL: $[X]M (on [DATE])
- Growth Rate: [X]% monthly average

**TVL by Month:**

| Month | TVL | Growth % |
|-------|-----|----------|
| Jan 2024 | $[X]M | - |
| Feb 2024 | $[X]M | [X]% |
| Mar 2024 | $[X]M | [X]% |
| [Continue] | | |

**Asset Allocation Evolution:** [DATA NEEDED: Historical breakdown of BTC/ETH/Alts percentages over time]

### USDi Peg Stability

**Peg Performance:**
- Average Price: $[X.XXXX]
- Standard Deviation: [X.XX]%
- Maximum Premium: $[X.XXXX] (on [DATE])
- Maximum Discount: $[X.XXXX] (on [DATE])
- Time within ±0.5% of peg: [X]%
- Time within ±1% of peg: [X]%

**Peg Events:**

| Date | Event | Price | Duration | Resolution |
|------|-------|-------|----------|------------|
| [DATE] | [Description] | $[X.XX] | [X hrs] | [How resolved] |

### Market Crash Performance

**August 5, 2024 Market Crash ("Black Monday")**

*Market Conditions:*
- BTC drop: -15% in 24 hours
- ETH drop: -22% in 24 hours
- Global liquidations: $1B+
- Funding rates turned sharply negative

*Cutwater Performance:* [DATA NEEDED: Fill in actual performance]
- Portfolio P&L: [+/- X%]
- USDi peg stability: $[X.XXXX]
- Liquidations: [None / Details if any]
- Position adjustments: [Description]
- Recovery time: [X hours/days]

*Lessons Learned:* [DATA NEEDED: What worked well, what needed improvement]

**[Other Significant Market Events]**

*Event 1: [DATE] - [EVENT NAME]*
- Market conditions: [Description]
- Cutwater performance: [Details]
- Impact on funding rates: [Description]
- Portfolio adjustments: [Actions taken]

*Event 2: [DATE] - [EVENT NAME]*
[Similar structure]

### Funding Rate Analysis

**Historical Funding Rates:**

*By Asset Class (2024 Average):*

| Asset Type | Avg Funding Rate | Best Month | Worst Month |
|------------|------------------|------------|-------------|
| BTC | [X]% APY | [X]% | [X]% |
| ETH | [X]% APY | [X]% | [X]% |
| Major Alts | [X]% APY | [X]% | [X]% |
| Portfolio Weighted | [X]% APY | [X]% | [X]% |

*Funding Rate Distribution:*
- Positive funding days: [X]%
- Negative funding days: [X]%
- Days with >20% APY: [X]%
- Days with <0% APY: [X]%

### Asset Pool Composition

**Current Asset Allocation:** [DATA NEEDED: Current breakdown as of latest date]

| Asset | Allocation % | USD Value | Avg Funding Rate | Position Size Limit |
|-------|-------------|-----------|------------------|---------------------|
| BTC | [X]% | $[X]M | [X]% APY | $[X]M |
| ETH | [X]% | $[X]M | [X]% APY | $[X]M |
| [Alt 1] | [X]% | $[X]M | [X]% APY | $[X]M |
| [Alt 2] | [X]% | $[X]M | [X]% APY | $[X]M |
| [Continue] | | | | |

**Historical Asset Changes:**
- Assets added in 2024: [List]
- Assets removed in 2024: [List]
- Reasons for changes: [Brief descriptions]

### Revenue Breakdown

**Sources of Yield (2024 Average):** [DATA NEEDED]
- Funding rate income: [X]% contribution
- Staking rewards (stETH, etc.): [X]% contribution
- Basis spread capture: [X]% contribution
- Other sources: [X]% contribution

**Gross vs Net Returns:**
- Gross yield: [X]% APY
- Operational costs: [X]% APY
- Net yield to users: [X]% APY

### User Metrics

**Growth Metrics:**
- Total unique depositors: [X]
- Average deposit size: $[X]
- Median deposit size: $[X]
- Largest deposit: $[X]M
- Retention rate: [X]%

**USDi Distribution:**
- USDi in circulation: [X]M
- USDi staked: [X]%
- USDi in liquidity pools: [X]%
- USDi in wallets: [X]%

---

## Leverage Mechanism

### Leverage Philosophy

**Core Principle:** Cutwater employs minimal to no leverage in its delta-neutral strategy. The protocol's returns come from funding rate arbitrage, not from leveraged directional bets.

### How Leverage Works in Cutwater

#### 1. Natural Position Leverage

**Base Structure:**

```
Spot Holdings: $100 (long exposure)
Short Perpetuals: $100 notional (short exposure)
Total Capital Deployed: $100
Net Market Exposure: $0 (delta-neutral)
```

**Effective Leverage:**
- From spot perspective: 1.0x (no leverage)
- From derivatives perspective: Varies by exchange margin requirements

#### 2. Exchange Margin Requirements

**Typical Exchange Requirements:**
- Initial Margin: 1-5% of notional position
- Maintenance Margin: 0.5-2.5% of notional

**Example:**

```
Spot Holdings: $100 ETH
Short Perpetual: $100 notional value

Required Margin: $100 × 2% = $2
Remaining Capital: $98

Theoretical Max Leverage: 50x
Cutwater's Actual Leverage: 1.2x max
```

**Why Low Leverage:**
- Maintains large safety buffer for volatility
- Prevents liquidation risk
- Enables quick position adjustments
- No need for leverage in delta-neutral strategy

#### 3. Collateral Management

**Collateral Allocation:**
- Primary collateral: Spot crypto holdings
- Margin buffer: 20-30% excess collateral [DATA NEEDED: verify buffer]
- Emergency reserves: Additional liquid stables

**Dynamic Collateral Adjustment:**
- Increase margin during high volatility
- Reduce margin utilization during calm periods
- Maintain minimum 5x liquidation distance [DATA NEEDED: verify threshold]

#### 4. Liquidation Risk Management

**Liquidation Distance Monitoring:**

```
Liquidation Distance = (Current Price - Liquidation Price) / Current Price
```

- Target: Always maintain >50% liquidation distance
- Alert Threshold: <30% liquidation distance
- Emergency Action: <20% liquidation distance

**Protective Measures:**
- Real-time position monitoring
- Automated margin top-ups
- Emergency deleveraging protocols
- Cross-margining optimization where available

#### 5. Leverage Limits by Asset

**Conservative Approach:**

| Asset Type | Max Effective Leverage | Margin Buffer |
|------------|------------------------|---------------|
| BTC | 1.1x | 30% |
| ETH | 1.1x | 30% |
| Major Alts (>$10B) | 1.2x | 25% |
| Mid Alts ($1-10B) | 1.15x | 27% |

[DATA NEEDED: Verify actual leverage limits per asset type]

**Rationale:**
- Lower leverage for more volatile assets
- Higher buffers for less liquid markets
- Conservative approach prioritizes capital preservation

### Comparison to Other Protocols

| Protocol | Strategy | Typical Leverage | Risk Profile |
|----------|----------|------------------|--------------|
| Cutwater | Funding arbitrage | 1.0-1.2x | Very Low |
| Ethena | Funding arbitrage | 1.0-1.1x | Very Low |
| Resolv | Funding arbitrage | 1.0-1.1x | Very Low |
| Typical DeFi Leverage | Directional trading | 3-10x | High |
| CEX Futures Trading | Directional trading | 10-100x | Extreme |

### Stress Testing

**Scenario Analysis:**

**Scenario 1: Flash Crash (-30% in 1 hour)**
- Spot loss: -$30
- Perpetual gain: +$30
- Net P&L: $0
- Margin impact: Minimal (well within buffer)
- Liquidation risk: None

**Scenario 2: Extreme Volatility (±20% daily for 7 days)**
- Delta-neutral P&L: ~$0
- Funding rate impact: [DATA NEEDED: typical impact]
- Margin buffer erosion: [DATA NEEDED: estimate]
- Required actions: [DATA NEEDED: rebalancing needs]

**Scenario 3: Exchange Failure**
- Affected positions: [X]% of portfolio
- Recovery plan: [Migrate to alternative venues]
- Timeline: [X hours/days]
- Expected impact: [X]% temporary drawdown

[DATA NEEDED: Complete stress test scenarios with actual modeling results]

---

## Risk Management

Cutwater employs a comprehensive, multi-layered risk management framework to protect user capital and ensure sustainable operations.

### 1. Market Risk

**Description**

Risk that crypto asset prices move adversely, potentially causing losses despite hedging.

**Specific Concerns**
- Basis Risk: Imperfect correlation between spot and futures
- Hedging Lag: Time delay between spot purchase and hedge execution
- Extreme Volatility: Large price moves overwhelming hedging mechanisms
- Correlation Breakdown: Spot and futures decouple during extreme events

**Mitigation Strategies**

**A. Delta-Neutral Hedging**
- Maintain 1:1 hedge ratio (spot:futures)
- Real-time position monitoring
- Target delta: ±5% tolerance [DATA NEEDED: verify threshold]
- Automated rebalancing triggers

**B. Basis Risk Management**
- Monitor spot-futures spread continuously
- Set maximum acceptable basis: [X]% [DATA NEEDED]
- Reduce position size if basis widens excessively
- Use multiple futures venues for diversification

**C. Execution Quality**
- Atomic execution for spot + futures when possible
- Limit orders to minimize slippage
- VWAP algorithms for large trades
- Maximum execution lag: [X seconds] [DATA NEEDED]

**D. Volatility Buffers**
- Maintain larger margin buffers during high volatility
- Reduce position sizes when VIX > [X] [DATA NEEDED]
- Emergency deleveraging procedures
- Circuit breakers for extreme moves

### 2. Funding Rate Risk

**Description**

Risk that funding rates turn negative or compress, reducing or eliminating yield.

**Specific Concerns**
- Negative Funding Periods: Shorts pay longs instead of receiving
- Funding Compression: Rates drop below operational costs
- Sustained Negative Cycles: Extended periods of losses
- Correlated Funding Drops: All assets go negative simultaneously

**Mitigation Strategies**

**A. Asset Diversification**
- 15-20 different funding rate sources
- Low correlation between asset funding rates
- Geographic diversification (different market hours)
- Multiple funding rate cycles (8h, daily)

**B. Historical Analysis**
- 12-month minimum funding rate history required
- Must be positive >70% of days
- Maximum acceptable negative streak: 30 days
- Correlation analysis between assets

**C. Dynamic Allocation**
- Shift capital toward positive funding assets
- Reduce/eliminate positions in negative funding
- Real-time monitoring of funding trends
- Predictive models for funding rate changes

**D. Reserve Fund**
- Maintain reserve pool for negative funding periods
- Target reserve: [X]% of TVL [DATA NEEDED: typically 5-10%]
- Automatically absorbs losses during negative cycles
- Replenished during profitable periods

**E. Downside Protection**
- Maximum acceptable loss: [X]% per month [DATA NEEDED]
- Automatic position reduction if losses exceed threshold
- Can shift to liquid stables if funding persistently negative
- Emergency shutdown procedures if losses unsustainable

### 3. Liquidity Risk

**Description**

Risk of being unable to exit positions at reasonable prices due to insufficient market depth.

**Specific Concerns**
- Low Trading Volume: Insufficient buyers/sellers
- Wide Spreads: High execution costs
- Market Impact: Large orders moving prices
- Liquidity Crisis: Sudden liquidity evaporation during stress

**Mitigation Strategies**

**A. Strict Liquidity Requirements**
- Minimum daily volume: $50M spot, $100M futures [DATA NEEDED]
- Minimum order book depth: $5M within ±2% [DATA NEEDED]
- Maximum position size: 5% of daily volume
- Real-time liquidity monitoring

**B. Position Sizing**
- Never exceed 3% of open interest
- Scale positions to average exit time <20 days
- Smaller positions in less liquid assets
- Maximum concentration limits per asset

**C. Multiple Venues**
- Maintain positions across 3+ exchanges per asset
- Can migrate positions if one venue deteriorates
- Access to both CEX and DEX liquidity
- Emergency exit routes pre-planned

**D. Graduated Exit Strategy**
- TWAP (Time-Weighted Average Price) for large exits
- Staged unwinding over multiple days if needed
- Spread exits across multiple venues
- Never panic sell in illiquid markets

### 4. Exchange/Counterparty Risk

**Description**

Risk that exchanges fail, freeze funds, or suffer operational issues.

**Specific Concerns**
- Exchange Insolvency: Bankruptcy or fraud (e.g., FTX)
- Operational Failures: Technical issues, API downtime
- Fund Freezes: Regulatory action or withdrawal halts
- Hacks/Exploits: Security breaches leading to fund loss

**Mitigation Strategies**

**A. Exchange Diversification**
- Maximum 40% on any single exchange
- Minimum 3 exchanges for entire portfolio
- Preference for established, regulated venues
- Continuous monitoring of exchange health metrics

**B. Off-Exchange Custody (When Available)**
- Use Fireblocks, Ceffu, or similar for settlement
- Minimize on-exchange balance sheets exposure
- Self-custody for spot holdings where possible
- Only maintain minimum required margin on exchanges

**C. Exchange Selection Criteria**
- Tier 1 exchanges only (Binance, OKX, Bybit, etc.)
- Regulatory compliance and licensing
- Proof of reserves or audit reports
- Insurance funds and security track record
- No history of fund freezes or insolvency concerns

**D. Real-Time Monitoring**
- Track exchange health indicators
- Monitor withdrawal processing times
- Alert systems for abnormal behavior
- Rapid migration protocols if issues detected

**E. Emergency Response**
- Pre-defined procedures for exchange failure
- Ability to quickly shift to alternative venues
- Legal and claims process ready
- Communication plan for users

### 5. Smart Contract Risk

**Description**

Risk of bugs, exploits, or vulnerabilities in Cutwater's smart contracts.

**Specific Concerns**
- Code Vulnerabilities: Exploitable bugs
- Reentrancy Attacks: Draining funds through recursive calls
- Governance Exploits: Malicious proposal execution
- Oracle Manipulation: Price feed attacks
- Upgrade Risks: Bugs introduced in contract updates

**Mitigation Strategies**

**A. Comprehensive Audits**
- Multiple independent security audits [DATA NEEDED: list audit firms]
- Ongoing security reviews for all updates
- Public audit reports and transparency
- Formal verification where applicable

**B. Bug Bounty Program**
- Ongoing incentives for responsible disclosure
- Tiered rewards based on severity
- Active security researcher community
- Rapid response and patching process

**C. Conservative Design**
- Battle-tested standards (ERC20, ERC4626, etc.)
- Minimal custom logic
- Extensive testing and simulation
- Gradual rollout of new features

**D. Operational Security**
- Multi-signature governance (X of Y) [DATA NEEDED: signature requirements]
- Time-locks on critical functions
- Emergency pause mechanisms
- Separation of hot/cold wallets

**E. Monitoring & Response**
- Real-time transaction monitoring
- Automated anomaly detection
- 24/7 security operations
- Incident response playbook

### 6. Regulatory Risk

**Description**

Risk of adverse regulatory developments affecting operations.

**Specific Concerns**
- Securities Classification: USDi or governance token deemed securities
- Geographic Restrictions: Bans in key markets
- Compliance Requirements: KYC/AML obligations
- Exchange Regulations: Restrictions on derivatives trading
- DeFi Regulations: New rules for automated trading

**Mitigation Strategies**

**A. Legal Structure**
- Appropriate entity formation and jurisdiction
- Legal opinions on token classifications
- Compliance with existing regulations
- Proactive engagement with regulators

**B. Compliance Framework**
- KYC/AML for direct minting/redemption [DATA NEEDED: current requirements]
- Geographic restrictions where required
- Sanctions screening
- Transaction monitoring and reporting

**C. Diversification**
- Multi-jurisdictional presence
- Not dependent on single regulatory regime
- Ability to adapt to changing requirements
- Offshore and onshore options

**D. Transparency**
- Public disclosure of structure and operations
- Clear communication of risks
- Responsive to regulatory inquiries
- Professional legal counsel

### 7. Operational Risk

**Description**

Risk of losses from inadequate processes, systems, or human error.

**Specific Concerns**
- Key Person Risk: Dependence on specific individuals
- System Failures: Technical infrastructure issues
- Manual Errors: Mistakes in execution or management
- Cyber Attacks: Hacking, phishing, social engineering
- Internal Fraud: Malicious actions by team members

**Mitigation Strategies**

**A. Redundancy & Backup**
- Multiple team members with critical knowledge
- Documented procedures and runbooks
- Backup systems and failover infrastructure
- Distributed team and operations

**B. Automation**
- Minimize manual interventions
- Automated execution and monitoring
- Systematic decision-making processes
- Reduced human error through code

**C. Access Controls**
- Multi-signature requirements
- Principle of least privilege
- Regular access audits
- Hardware security keys

**D. Monitoring & Alerting**
- 24/7 system monitoring
- Automated alerts for anomalies
- Escalation procedures
- Redundant notification channels

**E. Training & Documentation**
- Comprehensive operational procedures
- Regular team training
- Knowledge sharing sessions
- Clear escalation paths

### 8. Concentration Risk

**Description**

Risk from excessive exposure to single assets, exchanges, or positions.

**Specific Concerns**
- Single Asset Dominance: Over-allocation to one crypto
- Exchange Concentration: Too much on one platform
- Geographic Concentration: All exchanges in one jurisdiction
- Temporal Concentration: All positions expiring simultaneously

**Mitigation Strategies**

**A. Portfolio Limits**
- Maximum 15% in any single altcoin
- Maximum 40% on any single exchange
- Minimum 30% in BTC/ETH combined
- Diversified asset correlation matrix

**B. Dynamic Rebalancing**
- Regular rebalancing to target allocations
- Automatic triggers for limit breaches
- Gradual position adjustments
- Avoid forced liquidations

**C. Geographic Diversification**
- Exchanges across multiple jurisdictions
- Asia, Europe, and Americas representation
- Different regulatory regimes
- Time zone coverage for 24/7 operations

### Integrated Risk Dashboard

**Real-Time Monitoring:** [DATA NEEDED: Describe monitoring tools and dashboards]

**Key Metrics Tracked:**
- Delta exposure by asset and total
- Funding rate trends across portfolio
- Liquidity metrics (volume, spreads, depth)
- Exchange health indicators
- Concentration ratios
- Margin utilization and liquidation distances
- Smart contract transaction patterns
- Regulatory news and developments

**Alert Thresholds:** [DATA NEEDED: Specific thresholds for each risk category]

**Escalation Procedures:**
- Level 1 (Green): Normal operations
- Level 2 (Yellow): Warning indicators, increased monitoring
- Level 3 (Orange): Corrective actions required
- Level 4 (Red): Emergency procedures activated

### Simulation & Stress Testing

**Regular Stress Tests:** [DATA NEEDED: Frequency and scenarios]

**Scenario Categories:**
- Market Crashes: -30%, -50%, -70% in 24 hours
- Black Swan Events: Multiple simultaneous failures
- Liquidity Crisis: 90% reduction in market depth
- Exchange Failure: Sudden loss of top exchange
- Prolonged Bear Market: Negative funding for 180 days
- Regulatory Shock: Sudden ban in major jurisdiction

**Back-Testing:**
- Historical simulation against past market events
- Validation of hedging effectiveness
- Funding rate model accuracy
- Position sizing optimization

**Forward-Looking Analysis:**
- Monte Carlo simulations for future scenarios
- Sensitivity analysis on key parameters
- Worst-case portfolio impact modeling
- Capital allocation optimization under constraints

[DATA NEEDED: Results of recent stress tests and simulations]

---

## Risk Disclosure

This documentation is for informational purposes only. Cryptocurrency investments carry significant risks including:

- Smart contract risk
- Market volatility
- Counterparty risk from centralized exchanges
- Funding rate volatility
- Liquidation risk
- Regulatory risk
- Protocol risk

Always conduct your own research (DYOR) before participating in any investment opportunity. Past performance does not guarantee future returns.

---

*Last Updated: December 2024*
*Documentation Version: 1.0*
