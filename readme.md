# Data-Driven Telecom Customer Churn Prediction & Revenue Protection

This repository contains the analysis, modeling, and business impact evaluation for a **telecom customer churn prediction project**. The project investigates churn behavior using historical customer data and develops predictive analytics to support targeted retention strategies.

The analysis is inspired by real market conditions in the Hungarian telecommunications sector and uses the **Telco Customer Churn dataset** from Kaggle.

The goal of the project is to demonstrate how telecom companies can leverage data science to:

- identify customers at high risk of churn
- understand key behavioral churn drivers
- estimate financial impact of churn reduction
- support targeted retention campaigns

This project was developed as part of the **Data Science Project in Business course at Corvinus University of Budapest (Spring 2026).**

---

# Project Motivation

Customer churn is one of the most significant revenue risks for telecommunications providers. In mature telecom markets such as Hungary, competition between major operators has increased customer mobility and price sensitivity.

Telecom providers operate with large subscriber bases and recurring revenue models, meaning that even small improvements in retention can generate substantial financial benefits.

For example:

- acquiring a new telecom customer typically costs **5–7× more** than retaining an existing one
- churn leads to **direct recurring revenue loss**
- churn often signals underlying issues in pricing, service quality, or customer experience

Using predictive analytics to identify customers at risk of leaving enables telecom companies to deploy **targeted retention strategies instead of costly mass marketing campaigns.**

---

# Dataset

This project uses the **Telco Customer Churn dataset** from Kaggle.

Dataset source:

https://www.kaggle.com/datasets/blastchar/telco-customer-churn

Dataset characteristics:

| Metric | Value |
|------|------|
Total customers | 7,043 |
Churned customers | 1,869 |
Baseline churn rate | 26.54% |
Average Monthly Charges | $64.76 |
Average tenure | 32.37 months |

Derived annual customer value:

$64.76 × 12 = **$777.12**

Dataset-level revenue lost due to churn:

1,869 × 777.12 = **$1,452,929 annually**

To reflect realistic telecom economics in Hungary, the project assumes an **average market ARPU of approximately €20 per month** when scaling the financial model to a large telecom operator.

---

# Key Churn Drivers

Exploratory data analysis shows that churn is **not randomly distributed**. Instead, it is concentrated in specific customer segments.

The strongest churn concentrations occur among:

- month-to-month contracts
- customers with tenure below 12 months
- electronic check payment users
- fiber optic internet subscribers
- customers without add-on service bundles

## Contract Type

| Contract | Churn Rate |
|------|------|
Month-to-month | ~42% |
One-year | ~11% |
Two-year | ~3% |

Customers on month-to-month contracts churn **up to 14× more frequently** than long-term contract users.

## Customer Tenure

| Tenure | Churn |
|------|------|
< 12 months | ~47% |
> 24 months | <10% |

Early lifecycle customers represent the **highest churn risk segment**.

## Payment Method

| Payment Type | Churn |
|------|------|
Electronic check | ~45% |
Bank transfer / card | 15–18% |

Automatic payment methods significantly reduce churn.

## Internet Service Type

| Service | Churn |
|------|------|
Fiber optic | ~41% |
DSL | ~19% |
No internet | ~7% |

Higher-priced fiber services exhibit stronger price sensitivity.

## Add-On Services

Customers without technical support or security bundles churn at approximately **41%**, while customers with add-on services churn around **15%**.

Service bundling significantly increases customer retention.

---

# Revenue at Risk Segments

Two customer segments represent the highest churn-related revenue exposure.

## Segment A – Month-to-Month Fiber Customers Using Electronic Check

Estimated size: ~1,200 customers  
Churn rate: ~50%  
Average monthly charge: ~$85  

Annual value per customer:

$85 × 12 = **$1,020**

Revenue at risk:

1,200 × 50% × 1,020 = **$612,000**

This segment represents approximately **42% of churn revenue concentration** in the dataset.

---

## Segment B – Early Tenure Customers (<12 months)

Estimated size: ~1,500 customers  
Churn rate: ~47%

Average annual value:

$777

Revenue at risk:

1,500 × 47% × 777 ≈ **$547,000**

Early lifecycle churn represents a structural risk zone for telecom operators.

---

# Retention Strategy Simulation

Three churn reduction strategies were modeled.

## Strategy 1 – Contract Migration Campaign

Target:

Month-to-month fiber customers using electronic payment.

Intervention:

Convert customers to **12-month contracts with automatic payment enrollment.**

Estimated churn reduction:

42% → 32%

Customers saved:

1,200 × 10% = **120**

Revenue preserved:

120 × 1,020 = **$122,400**

Estimated campaign cost:

$40,000

ROI:

206%

---

## Strategy 2 – Early Lifecycle Retention Program

Target:

Customers within the first 6 months of tenure.

Intervention:

Onboarding bundle including technical support and autopay incentives.

Churn reduction:

47% → 40%

Customers saved:

105

Revenue preserved:

$81,585

Estimated cost:

$35,000

ROI:

133%

---

## Strategy 3 – Fiber Price Bundle Optimization

Target:

Fiber customers with high monthly charges.

Intervention:

Introduce bundled service packages.

Churn reduction:

41% → 37%

Customers saved:

~100

Revenue preserved:

~$90,000

Estimated cost:

$60,000

ROI:

50%

---

# Strategic Recommendation

The most effective churn reduction strategy is:

**Targeted migration of month-to-month electronic-check fiber customers into fixed-term contracts with automatic payments.**

This segment combines:

- the highest churn probability
- above-average revenue per user
- strong behavioral causality
- fast operational implementation

Expected achievable churn reduction:

**1.5–2.5 percentage points overall**

Dataset-level revenue protection:

**$100k – $150k annually**

Scaled to a telecom operator with **1 million subscribers**, the same improvement would preserve approximately:

**$14M – $20M in annual revenue.**

The analysis indicates that **commitment-based retention mechanisms (contracts, bundling, autopay) outperform price discount strategies.**

---

# Methodology Overview

The project follows a standard data science workflow.

## 1. Data Processing

- data ingestion
- missing value handling
- categorical variable encoding
- dataset normalization

## 2. Exploratory Data Analysis

- churn distribution analysis
- feature correlation investigation
- customer segmentation

## 3. Feature Engineering

- tenure segmentation
- contract encoding
- service bundle indicators
- behavioral features

## 4. Predictive Modeling

Machine learning models evaluated include:

- Logistic Regression
- Decision Trees
- Random Forest
- Gradient Boosting

Model performance metrics:

- ROC-AUC
- Precision
- Recall
- F1 Score

Target model performance:

AUC ≥ 0.82

---

# Tools and Technologies

The project is implemented using:

- Python
- Jupyter Notebook
- Pandas
- NumPy
- Scikit-learn
- Matplotlib / Seaborn

All analysis is conducted using reproducible workflows.

---

# Repository Structure
├── data
│ ├── raw
│ ├── processed
│
├── notebooks
│ ├── exploratory_analysis.ipynb
│ ├── churn_model.ipynb
│
├── src
│ ├── data_preprocessing.py
│ ├── feature_engineering.py
│ ├── model_training.py
│
├── results
│ ├── figures
│ ├── model_outputs
│
└── README.md



The dataset is **not included in the repository** due to licensing restrictions.

To reproduce the analysis:

1. Download the dataset from Kaggle
2. Place the CSV file inside data/raw/


---

# Limitations

This project focuses on churn prediction modeling and therefore does not cover:

- production deployment of predictive models
- integration with CRM systems
- telecom network infrastructure considerations
- regulatory analysis

The dataset is also anonymized and simplified for educational purposes.

---

# Team

Project Team

Mukhammad Azim Khadyatullaev  
Máté Móger  
Jose Ocoro

MSc Business Informatics  
Corvinus University of Budapest

Course:

**Data Science Project in Business**

Instructor:

Tibor Kovács

Spring 2026

---

# Disclaimer

This repository contains academic research conducted as part of a university project.

The analysis, assumptions, and financial models are intended for educational purposes and do not represent the internal data or strategies of any real telecommunications company.
